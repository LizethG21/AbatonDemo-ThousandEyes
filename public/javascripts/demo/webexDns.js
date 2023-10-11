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
            ChartLib.line("chartLineTansTimeWebexDNS", data, {
                xvalues: "date",
                yvalues: ["jitter"],
                yfmt: "n",
                display:true
            });
        },
        error: function (a, b, c) {
            debugger;
        }
    });
}
