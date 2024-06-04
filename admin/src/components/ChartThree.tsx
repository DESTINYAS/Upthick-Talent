import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

interface ChartThreeState {
  series: number[];
}

const options: ApexOptions = {
  chart: {
    type: "pie", // Change the type to "pie"
  },
  colors: ["#0E1933", "#A3BDFF", "#2B4A99"],
  labels: ["Less Than A Year", "Within 1 - 2years", "2years and Above"],
  legend: {
    show: true,
    position: "right",
    fontSize: "14px",
    fontWeight: "500",
    formatter: function (val, opts) {
      const label = opts.w.config.labels[opts.seriesIndex];
      const seriesValue = opts.w.globals.series[opts.seriesIndex];
      return `<span style="font-size: 30px; font-weight: 700;">${seriesValue}</span> <br>${label} `;
    },
  },

  plotOptions: {
    pie: {
      donut: {
        size: "0",
        background: "transparent",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },

  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 400,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

const ChartThree: React.FC = () => {
  const [state, setState] = useState<ChartThreeState>({
    series: [250, 90, 58],
  });

  return (
    <div className=" bg-white px-5 pt-16 pb-5 shadow-default ">
      <div className="justify-center">
        <h1 className="text-uptickblue80 px-32 text-lg font-bold">
          Experience
        </h1>
      </div>

      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex flec-row justify-center">
          <ReactApexChart
            options={options}
            series={state.series}
            type="donut"
          />
        </div>
      </div>
    </div>
  );
};

export default ChartThree;
