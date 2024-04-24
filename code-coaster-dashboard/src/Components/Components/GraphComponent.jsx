import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';

function getHours(day) {
  return fetch(`http://localhost:3000/metricas/tiempo/${day}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') || '',
    },
  })
  .then(response => response.json())
  .then(data => {
    const updatedData = data.map(item => item['SUM(tiempo)']);
    return updatedData[0]/60 || 0; // Return the first value or 0 if it doesn't exist
  })
  .catch((error) => {
    console.error('Error:', error);
    return 0; // Return 0 in case of error
  });
}


function GraphComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const newData = [
          { name: 'Lunes', horas: await getHours(2) },
          { name: 'Martes', horas: await getHours(3) },
          { name: 'Miércoles', horas: await getHours(4) },
          { name: 'Jueves', horas: await getHours(5) },
          { name: 'Viernes', horas: await getHours(6) },
          { name: 'Sábado', horas: await getHours(7) },
          { name: 'Domingo', horas: await getHours(1) },
        ];
        setData(newData);
      };

        fetchData();
    }, []);

    const dayMap = {
      'Lunes': 'Lu',
      'Martes': 'Ma',
      'Miércoles': 'Mi',
      'Jueves': 'Ju',
      'Viernes': 'Vi',
      'Sábado': 'Sa',
      'Domingo': 'Do'
    };

    return(
      <>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 15,
              right: 40,
              left: 40,
              bottom: 15,
            }}
          >
            <XAxis dataKey="name" tickFormatter={(value) => dayMap[value]} stroke="#ffffff"/>
            <Tooltip />
            <Line type="monotone" dataKey="horas" stroke="var(--highlight)" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </>
    )
}

export default GraphComponent;
