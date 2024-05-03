import React, { useState, useEffect } from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function getMonthData(month) {
  return fetch(`https://3wf32sqmhl.execute-api.us-east-1.amazonaws.com/metricas/${month}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') || '',
    },
  })
  .then(response => response.json())
  .then(data => {
    const timeSum = data[0]['SUM(tiempo)'];
    return timeSum / 60 || 0; 
  })
  .catch((error) => {
    console.error('Error:', error);
    return 0; 
  });
}

function MonthlyMetricsChart() {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        const newData = await Promise.all(months.map(async (month, index) => ({
          name: month,
          horas: await getMonthData(index + 1)  
        })));

        setData(newData);
      };

      fetchData();
    }, []);

    return (
      <ResponsiveContainer width="100%" height={240}>
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: 'Horas', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="horas" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="horas" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    );
}

export default MonthlyMetricsChart;
