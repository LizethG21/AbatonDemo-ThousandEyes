const express = require("express");
const router = express.Router();

router.post("/events", async (_req, res) => {
    var data = { events: [], agents: [] };
    const d = new Date();
    for (let i = 0; i < 1; i++) {
        data.events.push({
            Start: new Date(
                d.getFullYear(),
                d.getMonth(),
                d.getDate(),
                i,
                0,
                0
            ),
            Expresion:
                "((loss>=" +
                Math.floor(Math.random() * 20) +
                "%)||(avgLatency>=" +
                Math.floor(Math.random() * 300) +
                "ms)||(jitter>=" +
                Math.floor(Math.random() * 30) +
                "ms))",
            NombredeRegla: "Webex Network Delay",
            Test: "Webex Primary Multimedia Video",
            Tipo: "End-to-End (Server)",
        });
        data.agents.push({
            Active: "Yes",
            Agent: "rfloresp-MexCDMX",
            Start: new Date(
                d.getFullYear(),
                d.getMonth(),
                d.getDate(),
                i,
                0,
                0
            ),
            Metric: "Jitter: " + Math.floor(Math.random() * 50) + " ms",
        });
    } 
    data["alertHisto"] = new Array(24).fill().map((_o, i) => ({
        date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), i, 0, 0).valueOf(),
        alerts: Math.floor((Math.random() * 0.9 + 0.1) * 120)
    }));
    res.json(data);
});

module.exports = router;
