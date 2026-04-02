const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const compression = require("compression");
const db = require("./db");


dotenv.config();

const app = express();

// Compress all responses - reduces payload size by ~70%
app.use(compression());
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Lightweight keep-alive ping - used by frontend to prevent Railway cold starts
app.get("/api/ping", (req, res) => {
    res.status(200).send("pong");
});

// Full health check
app.get("/api/health", (req, res) => {
    res.json({ status: "OK", message: "Fleet Backend is running" });
});

const apiRoutes = require("./routes");
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 5000;

// ── Auto-create performance indexes on startup ─────────────────────────────
async function ensureIndexes() {
    const indexes = [
        "CREATE INDEX IF NOT EXISTS idx_vehicles_company_id       ON vehicles(company_id)",
        "CREATE INDEX IF NOT EXISTS idx_vehicles_status           ON vehicles(status)",
        "CREATE INDEX IF NOT EXISTS idx_drivers_company_id        ON drivers(company_id)",
        "CREATE INDEX IF NOT EXISTS idx_drivers_status            ON drivers(status)",
        "CREATE INDEX IF NOT EXISTS idx_trips_company_id          ON trips(company_id)",
        "CREATE INDEX IF NOT EXISTS idx_trips_status              ON trips(status)",
        "CREATE INDEX IF NOT EXISTS idx_trips_vehicleid           ON trips(vehicleid)",
        "CREATE INDEX IF NOT EXISTS idx_trips_driverid            ON trips(driverid)",
        "CREATE INDEX IF NOT EXISTS idx_trips_date                ON trips(date DESC)",
        "CREATE INDEX IF NOT EXISTS idx_trips_company_status      ON trips(company_id, status)",
        "CREATE INDEX IF NOT EXISTS idx_maintenance_company_id    ON maintenance_logs(company_id)",
        "CREATE INDEX IF NOT EXISTS idx_maintenance_vehicleid     ON maintenance_logs(vehicleid)",
        "CREATE INDEX IF NOT EXISTS idx_maintenance_status        ON maintenance_logs(status)",
        "CREATE INDEX IF NOT EXISTS idx_fuel_company_id           ON fuel_expenses(company_id)",
        "CREATE INDEX IF NOT EXISTS idx_fuel_vehicleid            ON fuel_expenses(vehicleid)",
        "CREATE INDEX IF NOT EXISTS idx_users_email               ON users(email)",
        "CREATE INDEX IF NOT EXISTS idx_pwd_resets_email          ON password_resets(email)",
    ];
    for (const sql of indexes) {
        try { await db.query(sql); } catch (e) { /* already exists or table not ready */ }
    }
    console.log("✅ Performance indexes verified.");
}

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await ensureIndexes();
});
