import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    PointElement
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import axios from 'axios';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    PointElement
)

// console.log("I AM THE COPY")
// var graphData = [1, 3, 2, 6, 7, 9, 0];

export default function Graph(props) {

    const [graphData, setGraphData] = useState([0, 0, 0, 0, 0, 0, 0]);
    console.log(graphData);

    //get data from sql server
    useEffect(() => {
        axios.get('http://localhost:8081/userdat')
            .then(res => {
                var dat = res.data[0];
                setGraphData([dat.sundays, dat.mondays, dat.tuesdays, dat.wednesdays, dat.thursdays, dat.fridays, dat.saturdays]);
            })
            .catch(err => console.log(err));
    }, [])

    //load consts
    const data = {
        labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
        datasets: [
            {
                label: 'Number of Events',
                data: graphData,
                borderColor: 'black',
                pointBackgroundColor: '#000000',
                borderWidth: 3,

            }
        ]
    }

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        tension: 0.3,
        backgroundColor: '#000',
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                },
                ticks: {
                    stepSize:1
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }

    return (
        <div style={{ padding: 20 }} className="graphCont">
            <Line
                data={data}
                options={options}
                height={"600px"}></Line>
        </div>
    );
}