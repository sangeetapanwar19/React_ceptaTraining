import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Pie} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DataSecond = (props) => {
    let tamount = props.data.amount * Math.pow((1+ (props.data.interest/100)),  props.data.tenure);

    const data = {
        labels: [ 'Pricipal', 'Interest'],
        datasets: [
          {
            label: '# of Votes',
            data: [props.data.amount, tamount - props.data.amount ],
            backgroundColor: [
              'red',
              'green',
            ],
            borderColor: [
              'black',
              'gray',
            ],
            borderWidth: 1,
          },
        ],
      };

    return(
        <>
        <div className='col-md-6'>
        Chart Panel
        <Pie data={data}/>
        </div>
        </>
    )
}

export default DataSecond;
