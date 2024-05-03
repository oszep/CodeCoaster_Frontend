import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

function PieGraph() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const responseAulify = await fetch('https://3wf32sqmhl.execute-api.us-east-1.amazonaws.com/usuario/aulify');
                const dataAulify = await responseAulify.json();
                const responseCodecoaster = await fetch('https://3wf32sqmhl.execute-api.us-east-1.amazonaws.com/usuario/codecoaster');
                const dataCodecoaster = await responseCodecoaster.json();
                
                const graphData = [
                    { name: 'Aulify', value: dataAulify.cantidad },
                    { name: 'CodeCoaster', value: dataCodecoaster.cantidad }
                ];

                setData(graphData);
            } catch (error) {
                console.error('Failed to fetch data', error);
            }
        }

        fetchData();
    }, []); 

    return (
        <ResponsiveContainer width="100%" height={200}>
            <PieChart>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
}

export default PieGraph;
