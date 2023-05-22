import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chat = () => {
    const data = [
      {
        name: 'start',
        uv: 0,
        pv: 0,
        amt: 60,
      },
        {
          name: 'First',
          uv: 60,
          pv: 59,
          amt: 60,
        },
        {
          name: 'Second',
          uv: 60,
          pv: 40,
          amt: 60,
        },
        {
          name: 'There',
          uv: 30,
          pv: 25,
          amt: 60,
        },
        {
          name: 'Four',
          uv: 50,
          pv: 40,
          amt: 60,
        },
        {
          name: 'Five',
          uv: 30,
          pv: 25,
          amt: 60,
        },
        {
          name: 'Six',
          uv: 50,
          pv: 45,
          amt: 60,
        },
        {
          name: 'Seven',
          uv: 40,
          pv: 35,
          amt: 60,
        },
        {
            name: 'Eight',
            uv: 25,
            pv: 10,
            amt: 60,
          },
      ];
      
    return (
        <div className='flex justify-center mt-20'>
        <LineChart
          width={1000}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        </div>
    );
};

export default Chat;