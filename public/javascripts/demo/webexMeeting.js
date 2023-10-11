function updateChartAtnTimeTimeline() {
    setInterval(chartAtnTimeTimeline, 3000);
}

var chartLineResolve;
function chartAtnTimeTimeline() {
    $.ajax({
        method: "POST",
        url: "/api/dash/webexGlobal/timeline",
        cache: false,
        success: function (data) {

            $("#jitter").html("");
            $("#jitter").append(((data[23].jitter)/10) + " ms");
            $("#latency").html("");
            $("#latency").append(((data[23].latency)/10) + " ms");
            $("#loss").html("");
            $("#loss").append(((data[23].loss)/10) + " %");
            ChartLib.line("chartLineJitterWebexM", data, {
                xvalues: "date",
                yvalues: ["jitter"],
                yfmt: "n",
                display:true
            });
            ChartLib.line("chartLineLatencyWebexM", data, {
                xvalues: "date",
                yvalues: ["latencyavg","latencymax","latencymin"],
                yfmt: "n",
                display:true,
            });
            ChartLib.bar("chartLineLossWebexM", data, {
                xvalues: "date",
                yvalues: ["loss"],
                xfmt:"dHM",
                yfmt: "p100",
                yrange:[0,100],
                display:true,
            });
        },
        error: function (a, b, c) {
            debugger;
        }
    });
}
