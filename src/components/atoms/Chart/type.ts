export interface ChartRecord {
  /** Value of the X axis */
  xAxis: object | string;
  /** Value of the Y axis */
  yAxis: number;
}

export interface AxisConfig<T> {
  /** Flag for enabling showing measurements */
  showMeasurement?: boolean;
  /** Custom rendering for the legend */
  legendRenderer?: (value: T) => string;
}

export interface IChartProps {
  /** Classes of the root component. */
  className?: string;
  /** Type of the chart view
   * Default: 'line' */
  type?: 'line' | 'bar';
  /** Flag for enabling showing gradient.
   * Default: false */
  showGradient: boolean;
  /** Point radius of the X and Y values crossing.
   * Default: 0 */
  pointRadius: number;
  /** Rounding of the chart line.
   * Default: 0 */
  tension: number;
  /** Data of the chart.
   * Default: [] */
  data: ChartRecord[];
  /** Config for X axis */
  xAxis?: AxisConfig<any>;
  /** Config for Y axis */
  yAxis?: AxisConfig<number>;
  /** Color for chart and it's accent based on this color.
   * Default: cssVariable('--ui-accent-500')
   * Required in hex */
  chartColor?: string;
}
