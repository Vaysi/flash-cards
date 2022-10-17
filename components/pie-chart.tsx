import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {I_Stat} from "../utils/interfaces";
import {memo} from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart(props:I_Stat) {
    const data = {
        labels: ['Answered','Not Answered','Incorrect Answer'],
        datasets: [
            {
                label: 'Stats',
                data: [props.totalAnsweredQuestions,props.totalUnansweredQuestions,props.totalIncorrectAnsweredQuestions],
                backgroundColor: [
                    'rgba(76, 175, 80,0.4)',
                    'rgba(255, 193, 7,0.4)',
                    'rgba(244, 67, 54,0.4)',
                ],
                borderColor: [
                    'rgba(76, 175, 80,1)',
                    'rgba(255, 193, 7,1)',
                    'rgba(244, 67, 54,1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return <Pie data={data} />;
}

export default memo(PieChart)
