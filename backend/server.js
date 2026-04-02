const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const compression = require("compression");

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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
