import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnoutChart({ data }) {
  return <Doughnut data={data} />;
}