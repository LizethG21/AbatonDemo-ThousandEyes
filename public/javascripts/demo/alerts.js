var _tables = {};
function makeDash() {
    //TODO: implementarlo con todas la funciones
    $.ajax({
        method: "POST",
        url: "/api/dash/alerts/events", //TODO: Hacer solo post sin direccion
        cache: false,
        success: (data) => {
            makeTable("tableEvents", data.events);
            makeTable("tableAgents", data.agents);
            ChartLib.line("chartLineAlerts", data.alertHisto, {
                xvalues: "date",
                yvalues: ["alerts"],
                display: true,
                yfmt: "n",
                xfmt: "dHM"
            });
        },
        error: (a, b, c) => {
            debugger;
        },
    });
}

function makeTable(id, data) {
    var table = _tables[id];
    if (table) {
        table.clear();
        table.rows.add(data);
        table.draw();
    }
}

function setupDash() {
  for (let id of ["tableEvents"]) {
      _tables[id] = $("#" + id).DataTable({
          dom: "t",
          columns: [
              { data: "Start" },
              { data: "Expresion"},
              { data: "NombredeRegla"},
              { data: "Test" },
              { data: "Tipo"}
          ]
      });
      _tables["tableAgents"] = $("#tableAgents").DataTable({
        dom: "t",
        columns: [
            { data: "Active" },
            { data: "Agent"},
            { data: "Start"},
            { data: "Metric" }
        ]
    });
  }
}
function loopDash() {
    setupDash();
    setInterval(makeDash, 10000);
    makeDash();
}