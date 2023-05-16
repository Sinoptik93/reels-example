import type {FC} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    LineController,
    PointElement,
    Title,
    Tooltip,
    Legend, ChartOptions, ChartData,
    Filler,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import ChartDataLabels, {Context} from 'chartjs-plugin-datalabels';
import {useMobileDetect} from "../../hooks/useMobileDetect";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useEffect, useRef, useState} from "react";

gsap.registerPlugin(ScrollTrigger);

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    LineController,
    ChartDataLabels,
    Filler
);

const getList = (from: number, to: number) => {
    const result = [];
    let step = from;

    do {
        result.push(step)
        step += 1;
    } while (step <= to);

    return result;
}

const labels = getList(2011, 2022);

const mockData: ChartData = {
    labels,
    datasets: [
        {
            label: 'Year to year',
            data: [0.25, 1.5, 2.6, 11, 17, 44, 108, 215, 313, 356, 544, 831],
            backgroundColor: '#E5E5E5',
            fill: 1,
            borderRadius: 5,
            borderSkipped: "bottom",
            hoverBackgroundColor: "#cacaca"
        },
    ],
};

const Chart: FC = () => {
    const chartRef = useRef(null);
    const [currentData, setCurrentData] = useState(mockData);

    useEffect(() => {
        const triggerElement = document.getElementById("myTriggerElement");

        ScrollTrigger.create({
            trigger: triggerElement,
            onEnter: () => {
                if (!chartRef.current) return;
                setCurrentData({...mockData});

                chartRef?.current?.update();
            }
        });
    }, []);

    const mobileDetect = useMobileDetect();


    const options: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: 10,
            }
        },
        plugins: {
            datalabels: {
                anchor: "end",
                align: "end",
                color: "#000000",
                font: {
                    family: "Factor A Regular",
                    size: mobileDetect.isMobile ? 14 :20,
                    lineHeight: 1,
                },
            },
        },
        animation: {
            delay: 1000,
            duration: 1500,
            easing: "easeInOutQuad",
        },
        scales: {
            y: {
                display: false,
            },
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: "#000000",
                    font: {
                        family: "Factor A Light",
                        size: mobileDetect.isMobile ? 9 : 14
                    },
                },
            }
        }
    };


    return (
        <div className="h-[21.25rem] mobile:max-w-[24rem] mobile:w-auto tablet:h-[23.25rem] desktop:h-[32.25rem]" id="myTriggerElement">
            {/* @ts-ignore */}
            <Bar options={options} data={currentData} ref={chartRef}/>
        </div>
    );
};

export default Chart;
