import { Bar, Line } from 'react-chartjs-2';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  CoreScaleOptions,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Scale,
  Title,
  Tooltip,
} from 'chart.js';

import { IChartProps } from './type';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

/** Includes opacity
 * '0, 255, 0' - valid
 *  255 , 255 , 255 , 1  - valid
 *  256, 255, 256, 1 - invalid */
const rgbaRegex =
  /^(\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9]{1,2})\s*,){3}\s*(1|0?\.\d+)\s*$|^(\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9]{1,2})\s*,){2}\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9]{1,2})\s*$/;

export const Chart = ({
  className = '',
  type = 'line',
  data = [],
  showGradient = false,
  pointRadius = 0,
  tension = 0,
  xAxis = {},
  yAxis = {},
  chartColor,
}: IChartProps) => {
  const styles = getComputedStyle(document?.body);

  const cssVariable = (name: string) =>
    chartColor && rgbaRegex.test(chartColor)
      ? chartColor
      : styles.getPropertyValue(name);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    resizeDelay: 300,
    layout: {
      padding: {
        right: 5,
        left: 5,
        top: 0,
        bottom: 0,
      },
    },
    scales: {
      y: {
        display: true,
        grid: {
          display: yAxis.showMeasurement || false,
        },
        border: {
          display: false,
          dash: [2, 2],
        },
        alignToPixels: true,
        ticks: {
          minRotation: 0,
          maxRotation: 0,
          display: typeof yAxis.legendRenderer === 'function',
          /** Full types required for 'options' param, in Chart.js
           * (this: Scale<CoreScaleOptions>, tickValue: string | number, index: number, ticks: Tick[]) => string | number | number[] | string[] | null | undefined */
          callback(
            this: Scale<CoreScaleOptions>,
            tickValue: string | number,
          ): string | number | number[] | string[] | null | undefined {
            return (
              yAxis.legendRenderer?.(tickValue as number) || `Y ${tickValue}`
            );
          },
        },
      },
      x: {
        display: true,
        grid: {
          display: xAxis.showMeasurement || false,
        },
        border: {
          display: false,
          dash: [2, 2],
        },
        ticks: {
          minRotation: 0,
          maxRotation: 0,
          display: typeof xAxis.legendRenderer === 'function',
          /** Full types required for 'options' param, in Chart.js
           * (this: Scale<CoreScaleOptions>, tickValue: string | number, index: number, ticks: Tick[]) => string | number | number[] | string[] | null | undefined */
          callback(
            this: Scale<CoreScaleOptions>,
            tickValue: string | number,
          ): string | number | number[] | string[] | null | undefined {
            return (
              xAxis.legendRenderer?.(data[tickValue as number]?.xAxis) ||
              `X ${tickValue}`
            );
          },
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        borderWidth: 1.5,
      },
    },
  };

  const config = {
    labels: data.map((d) => d.xAxis),
    datasets: [
      {
        data: data.map((d) => d.yAxis),
        tension,
        pointRadius,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 1,
        borderColor: `rgb(${cssVariable('--ui-accent-500')})`,
        fill: showGradient ? 'start' : false,
        backgroundColor: (context: {
          chart: {
            ctx: CanvasRenderingContext2D;
            chartArea: { bottom: number; top: number };
          };
        }) => {
          const { chart } = context;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return undefined;
          }

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.bottom,
            0,
            chartArea.top,
          );
          gradient.addColorStop(
            0,
            `rgba(${cssVariable('--ui-accent-500')}, ${showGradient ? '0' : '100'})`,
          );
          gradient.addColorStop(
            1,
            `rgba(${cssVariable('--ui-accent-500')}, 100)`,
          );
          return gradient;
        },
      },
    ],
  };

  const types = {
    line: Line,
    bar: Bar,
  };

  const Root = types[type];

  return (
    <Root
      className={className}
      data={config}
      options={options}
    />
  );
};
