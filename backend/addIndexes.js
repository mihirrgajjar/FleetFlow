/**
 * Performance Migration: Add missing indexes to all tables.
 * Run this ONCE on your Railway database:
 *   node addIndexes.js
 */
const db = require("./db");

async function addIndexes() {
    console.log("🚀 Adding performance indexes...\n");

    const indexes = [
        // vehicles - most queried column
        { name: "idx_vehicles_company_id",       sql: "CREATE INDEX IF NOT EXISTS idx_vehicles_company_id       ON vehicles(company_id)" },
        { name: "idx_vehicles_status",           sql: "CREATE INDEX IF NOT EXISTS idx_vehicles_status           ON vehicles(status)" },

        // drivers
        { name: "idx_drivers_company_id",        sql: "CREATE INDEX IF NOT EXISTS idx_drivers_company_id        ON drivers(company_id)" },
        { name: "idx_drivers_status",            sql: "CREATE INDEX IF NOT EXISTS idx_drivers_status            ON drivers(status)" },

        // trips - largest table, most joins
        { name: "idx_trips_company_id",          sql: "CREATE INDEX IF NOT EXISTS idx_trips_company_id          ON trips(company_id)" },
        { name: "idx_trips_status",              sql: "CREATE INDEX IF NOT EXISTS idx_trips_status              ON trips(status)" },
        { name: "idx_trips_vehicleid",           sql: "CREATE INDEX IF NOT EXISTS idx_trips_vehicleid           ON trips(vehicleid)" },
        { name: "idx_trips_driverid",            sql: "CREATE INDEX IF NOT EXISTS idx_trips_driverid           ON trips(driverid)" },
        { name: "idx_trips_date",                sql: "CREATE INDEX IF NOT EXISTS idx_trips_date                ON trips(date DESC)" },
        { name: "idx_trips_company_status",      sql: "CREATE INDEX IF NOT EXISTS idx_trips_company_status      ON trips(company_id, status)" },

        // maintenance_logs
        { name: "idx_maintenance_company_id",    sql: "CREATE INDEX IF NOT EXISTS idx_maintenance_company_id    ON maintenance_logs(company_id)" },
        { name: "idx_maintenance_vehicleid",     sql: "CREATE INDEX IF NOT EXISTS idx_maintenance_vehicleid     ON maintenance_logs(vehicleid)" },
        { name: "idx_maintenance_status",        sql: "CREATE INDEX IF NOT EXISTS idx_maintenance_status        ON maintenance_logs(status)" },

        // fuel_expenses
        { name: "idx_fuel_company_id",           sql: "CREATE INDEX IF NOT EXISTS idx_fuel_company_id           ON fuel_expenses(company_id)" },
        { name: "idx_fuel_vehicleid",            sql: "CREATE INDEX IF NOT EXISTS idx_fuel_vehicleid            ON fuel_expenses(vehicleid)" },

        // users - login lookup
        { name: "idx_users_email",               sql: "CREATE INDEX IF NOT EXISTS idx_users_email               ON users(email)" },

        // password_resets
        { name: "idx_pwd_resets_email",          sql: "CREATE INDEX IF NOT EXISTS idx_pwd_resets_email          ON password_resets(email)" },

        // companies
        { name: "idx_companies_name_lower",      sql: "CREATE INDEX IF NOT EXISTS idx_companies_name_lower      ON companies(LOWER(name))" },
    ];

    let success = 0;
    for (const idx of indexes) {
        try {
            await db.query(idx.sql);
            console.log(`  ✅  ${idx.name}`);
            success++;
        } catch (err) {
            console.error(`  ❌  ${idx.name}: ${err.message}`);
        }
    }

    console.log(`\n✨ Done! ${success}/${indexes.length} indexes applied.`);
    process.exit(0);
}

addIndexes();
