const express = require("express");
const router = express.Router();

router.post("/timeline", async (_req, res) => {
    const d = new Date();
    const data = new Array(24).fill().map((_o, i) => ({
        date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), i, 0, 0).valueOf(),
        jitter: Math.floor((Math.random() * 0.9 + 0.1) * 80),
        latencyavg: Math.floor(Math.random() * 50),
        latencymax: Math.floor(Math.random() * 200),
        latencymin: Math.floor(Math.random() * 5),
        loss: Math.floor(Math.random() * 20),
        transtime: Math.floor(Math.random() * 5000),
        throughput: Math.floor(Math.random() * 10),
        response: Math.floor(Math.random() * 1000)
    }));
    res.json(data);
});


router.post("/errors", async (_res, res) => {
    const data = ["None", "Dns","SSL","Receive"].map(o => ({
        label: o,
        count: Math.floor(Math.random() * (150 - 50) + 50)
    }));
    data[3].count = (data[3].count / 10) - 4;
    res.json(data);
});

router.post("/timeline2", async (_req, res) => {
    const d = new Date();
    const data = new Array(24).fill().map((_o, i) => ({
        date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), i, 0, 0).valueOf(),
        avg: Math.floor((Math.random() * 0.9 + 0.1) * 120)
    }));
    res.json(data);
});

module.exports = router;
