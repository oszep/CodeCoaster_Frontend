import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
/* te amo recharts estás bien requetepadrisimo */

function GraphComponent() {
    /*Estos serán datos que jalaremos del api, pero por lo mientras, los dejamos así, sabe como, problema del futuro salu3*/
    const data = [
        {
          name: 'Lunes',
          horas: 1,
        },
        {
          name: 'Martes',
          horas: 2,
        },
        {
          name: 'Miércoles',
          horas: 4,
        },
        {
          name: 'Jueves',
          horas: 1,
        },
        {
          name: 'Viernes',
          horas: 2,
        },
        {
          name: 'Sábado',
          horas: 1,
        },
        {
          name: 'Domingo',
          horas: 0,
        },
      ];

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