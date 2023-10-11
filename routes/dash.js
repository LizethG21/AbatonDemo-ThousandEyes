const express = require("express");
const router = express.Router();
const bl = require("../bl");



router.get("/main", async (req, res) => {
    const apps = ["MySQL","ORACLE","Ubuntu","RedHat","SmartNet","ThousandEyes"];
    const servers = ["SVRCNTDB","SVRCNTAPP1","SVRCNTSPWS","SVRCNTLGEC","SVRBRN0001","SVRBRN0002"];
    const widgets = ["webex","teams","google","vpnline"];
    const data = new Array(6).fill().map((_o, i) => ({
        server: servers[i],
        apps: apps[i],
        datas: Math.random() * (70 - 20) + 20,
        dataa: Math.random() * (70 - 20) + 20,
    }));
    res.render("dash/main", { data,widgets });
});

router.post("/main", async (req, res) => {
    const apps = ["MySQL","ORACLE","Ubuntu","RedHat","SmartNet","ThousandEyes"];
    const servers = ["SVRCNTDB","SVRCNTAPP1","SVRCNTSPWS","SVRCNTLGEC","SVRBRN0001","SVRBRN0002"];
    const data = new Array(6).fill().map((_o, i) => ({
        server: servers[i],
        apps: apps[i],
        datas: Math.random() * (100 - 20) + 20,
        dataa: Math.random() * (100 - 20) + 20,
    }));
    res.json(data);
});



router.get("/network", async (req, res) => {
    res.render("dash/level1/network");
});


router.post ("/networkDevices",async(req,res)=>{

    const redes = ["10.55.231.10","10.71.100.105","10.71.100.106","10.75.100.106"];

    const data = new Array(4).fill().map((_o, i) => ({
        redes: redes[i],
        dataredes: Math.random() * (1000 - 20) + 20
    }));
    res.json(data)
})

router.get("/thousandEyes", async (req, res) => {
    res.render("dash/level1/thousandEyes");
});

router.get("/vmware", async (req, res) => {
    res.render("dash/level1/vmware");
});

router.get("/appdynamics", async (req, res) => {
    res.render("dash/level1/appdynamics");
});

router.get("/ciscoprime", async (req, res) => {
    res.render("dash/level1/ciscoprime");
});

router.get("/stealthwatch", async (req, res) => {
    res.render("dash/level1/stealthwatch");
});

router.get("/vpn", async (req, res) => {
    res.render("dash/level1/vpn");
});

router.get("/dna", async (req, res) => {
    res.render("dash/level1/dna");
});

router.get("/incident", async (req, res) => {
    
    const data = await bl.main.data();
   
    res.render("dash/incident", { data });
});

router.post("/incident", async (req, res) => {
    
    const data = await bl.main.data();
   
    res.json(data);
});

router.get("/level1", async (req, res) => {
    //TODO: datos, si se van a renderear del lado del servidor
    res.render("dash/level1");
});

router.get("/creditos", async (req, res) => {
    res.render("dash/creditos");
});



module.exports = router;
