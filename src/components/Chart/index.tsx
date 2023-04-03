import type { FC } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend, ChartOptions, ChartData,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels, {Context} from 'chartjs-plugin-datalabels';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ChartDataLabels
);

export const options: ChartOptions = {
    responsive: true,
    plugins: {
        datalabels: {
            anchor: "end",
            align: "end",
        }
    },
    scales: {
        y: {
            display: false,
        },
        x: {
            grid: {
                display: false,
            }
        }
    }
};

const getList = (from: number, to: number) => {
    const result = [];
    let step = from;

    do {
        result.push(step)
        step += 1;
    } while (step !== to);

    return result;
}

const labels = getList(2015, 2022);

export const data: ChartData = {
    labels,
    datasets: [
        {
            label: 'Year to year',
            data: [100, 200, 400, 800, 1600, 3200, 6400],
            backgroundColor: '#FF6900',

        }
    ],
};

const Chart: FC = () => {
 return (
  <div>
      <Bar options={options} data={data} />
  </div>
 );
};

export default Chart;
