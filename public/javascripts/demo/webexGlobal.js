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
            ChartLib.line("chartLineJitterWebex", data, {
                xvalues: "date",
                yvalues: ["jitter"],
                yfmt: "n",
                display:true
            });
            ChartLib.line("chartLineLatencyWebex", data, {
                xvalues: "date",
                yvalues: ["latencyavg","latencymax","latencymin"],
                yfmt: "n",
                display:true,
            });
            ChartLib.bar("chartLineLossWebex", data, {
                xvalues: "date",
                yvalues: ["loss"],
                xfmt:"dHM",
                yfmt: "p100",
                yrange:[0,100],
                display:true,
            });
            ChartLib.line("chartLineTansTimeWebex", data, {
                xvalues: "date",
                yvalues: ["transtime"],
                yfmt: "n",
                display:true
            });
            ChartLib.line("chartLineTasaWebex", data, {
                xvalues: "date",
                yvalues: ["throughput"],
                yfmt: "n",
                display:true
            });
            ChartLib.line("chartLineResponseWebex", data, {
                xvalues: "date",
                yvalues: ["response"],
                yfmt: "n",
                display:true
            });

        },
        error: function (a, b, c) {
            debugger;
        }
    });
}


function chartErrorsWebex() {
    $.ajax({
        method: "POST",
        url: "/api/dash/webexGlobal/errors",
        cache: false,
        success: function (data) {

            ChartLib.palettes.custom = ["#e8c3b9",
            "#c45850",
            "#3cba9f",
            "#C5AA0A"];
            $("#datalicenses").html("");
            for (let i = 0; i < data.length; i++) {
                $("#datalicenses").append("<div class='bullet' style='background-color:"+ChartLib.palettes.custom[i]+";'>"+  
                                    "</div>"+
                                    "<h5>"+data[i].label+"&nbsp;</h5><h3>"+Math.round(data[i].count)+"</h3>"+
                                "<br>");
            }
            ChartLib.pie("chartCircleErrorsWebex", data, {
                xvalues: "label",
                yvalues: ["count"],
                yfmt: "n",
                legend: false,
                palette: "custom"
            });

        },
        error: function (a, b, c) {
            debugger;
        }
    });
}
