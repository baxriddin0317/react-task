import { useEffect, useRef } from "react"
import { Chart, registerables  } from "chart.js";

function Graph() {
  const canvasEl = useRef(null);
  Chart.register(...registerables);

  const colors = {
    purple: {
      default: "rgba(149, 76, 233, 1)",
      half: "rgba(149, 76, 233, 0.5)",
      quarter: "rgba(149, 76, 233, 0.25)",
      zero: "rgba(149, 76, 233, 0)"
    },
    indigo: {
      default: "rgba(80, 102, 120, 1)",
      quarter: "rgba(80, 102, 120, 0.25)"
    }
  };

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");

    const weight = [60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2];
    const weight2 = [61.0, 59.2, 59.8, 59.2, 59.1, 61.2, 60.8, 58.9, 60.6, 61.2];

    const labels = [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
      "Week 8",
      "Week 9",
      "Week 10"
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "My First Dataset",
          data: weight,
          fill: true,
          borderWidth: 2,
          borderColor: colors.purple.default,
          lineTension: 0.2,
          pointRadius: 3
        },
        {
          label: "My second Dataset",
          data: weight2,
          fill: true,
          borderWidth: 2,
          borderColor: colors.purple.default,
          lineTension: 0.2,
          pointRadius: 3
        }
      ]
    };
    const config = {
      type: "line",
      data: data
    };
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  });
  return (
    <>
      <div className="relative w-full mb-6 shadow-lg rounded bg-blueGray-700">
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="App">
            <span>Betta chart</span>
            <canvas id="myChart" ref={canvasEl} height="100" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Graph;
