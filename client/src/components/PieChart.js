import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
    const [graphData, setGraphData] = useState([0, 0]);

    useEffect(() => {
        axios.get('http://localhost:8081/userdat')
            .then(res => {
                var dat = res.data[0];
                setGraphData([dat.work_tasks, dat.personal_tasks]);
            })
            .catch(err => console.log(err));
    })

    const data = {
        labels: ['Work-Related Tasks', 'Personal Tasks'],
        datasets: [
            {
                label: 'Your Work-Life Balance',
                data: graphData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        backgroundColor: '#000',
        normalized:true,
        animation:{
            duration:0
        }
    }

    return (
        <div style={{ padding: 20 }} className="graphCont">
            <Pie
                data={data}
                options={options}
                height={"600px"}></Pie>
        </div>
    )
}
