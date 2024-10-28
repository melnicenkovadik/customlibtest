import { jsx as h } from "react/jsx-runtime";
import { Line as $, Bar as C } from "./my-component-library76.js";
import { Chart as L, BarElement as S, CategoryScale as v, LinearScale as k, PointElement as B, LineElement as E, Title as P, Tooltip as T, Legend as _, Filler as H } from "./my-component-library77.js";
L.register(
  S,
  v,
  k,
  B,
  E,
  P,
  T,
  _,
  H
);
const M = /^(\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9]{1,2})\s*,){3}\s*(1|0?\.\d+)\s*$|^(\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9]{1,2})\s*,){2}\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9]{1,2})\s*$/, D = ({
  className: c = "",
  type: g = "line",
  data: n = [],
  showGradient: p = !1,
  pointRadius: u = 0,
  tension: m = 0,
  xAxis: a = {},
  yAxis: o = {},
  chartColor: s
}) => {
  const f = getComputedStyle(document == null ? void 0 : document.body), l = (e) => s && M.test(s) ? s : f.getPropertyValue(e), b = {
    responsive: !0,
    maintainAspectRatio: !1,
    resizeDelay: 300,
    layout: {
      padding: {
        right: 5,
        left: 5,
        top: 0,
        bottom: 0
      }
    },
    scales: {
      y: {
        display: !0,
        grid: {
          display: o.showMeasurement || !1
        },
        border: {
          display: !1,
          dash: [2, 2]
        },
        alignToPixels: !0,
        ticks: {
          minRotation: 0,
          maxRotation: 0,
          display: typeof o.legendRenderer == "function",
          /** Full types required for 'options' param, in Chart.js
           * (this: Scale<CoreScaleOptions>, tickValue: string | number, index: number, ticks: Tick[]) => string | number | number[] | string[] | null | undefined */
          callback(e) {
            var t;
            return ((t = o.legendRenderer) == null ? void 0 : t.call(o, e)) || `Y ${e}`;
          }
        }
      },
      x: {
        display: !0,
        grid: {
          display: a.showMeasurement || !1
        },
        border: {
          display: !1,
          dash: [2, 2]
        },
        ticks: {
          minRotation: 0,
          maxRotation: 0,
          display: typeof a.legendRenderer == "function",
          /** Full types required for 'options' param, in Chart.js
           * (this: Scale<CoreScaleOptions>, tickValue: string | number, index: number, ticks: Tick[]) => string | number | number[] | string[] | null | undefined */
          callback(e) {
            var t, r;
            return ((r = a.legendRenderer) == null ? void 0 : r.call(a, (t = n[e]) == null ? void 0 : t.xAxis)) || `X ${e}`;
          }
        }
      }
    },
    plugins: {
      tooltip: {
        enabled: !1
      },
      legend: {
        display: !1
      }
    },
    elements: {
      line: {
        borderWidth: 1.5
      }
    }
  }, y = {
    labels: n.map((e) => e.xAxis),
    datasets: [
      {
        data: n.map((e) => e.yAxis),
        tension: m,
        pointRadius: u,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 1,
        borderColor: `rgb(${l("--ui-accent-500")})`,
        fill: p ? "start" : !1,
        backgroundColor: (e) => {
          const { chart: t } = e, { ctx: r, chartArea: i } = t;
          if (!i)
            return;
          const d = r.createLinearGradient(
            0,
            i.bottom,
            0,
            i.top
          );
          return d.addColorStop(
            0,
            `rgba(${l("--ui-accent-500")}, ${p ? "0" : "100"})`
          ), d.addColorStop(
            1,
            `rgba(${l("--ui-accent-500")}, 100)`
          ), d;
        }
      }
    ]
  }, R = {
    line: $,
    bar: C
  }[g];
  return /* @__PURE__ */ h(
    R,
    {
      className: c,
      data: y,
      options: b
    }
  );
};
export {
  D as Chart
};
