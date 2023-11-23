import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsSend, BsCircle, BsRewindCircle,BsViewList}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {

    const data = [
        {
          name: 'Retail',
          Sent: 400,
          Received: 240,
        },
        {
          name: 'Tahweel',
          Sent: 300,
          Received: 239,
        },
        {
          name: 'Contact Centre',
          Sent: 200,
          Received: 128,
        },
        {
          name: 'Corporate',
          Sent: 278,
          Received: 174,
        },
    
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>OVERALL SENT</h3>
                    <BsSend className='card_icon'/>
                </div>
                <h1>1178</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>COMPLETED</h3>
                    <BsCircle className='card_icon'/>
                </div>
                <h1>812</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PARTIAL</h3>
                    <BsRewindCircle className='card_icon'/>
                </div>
                <h1>217</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>VIEWED</h3>
                    <BsViewList className='card_icon'/>
                </div>
                <h1>149</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Sent" fill="#befc03" />
                <Bar dataKey="Received" fill="#03fcdb" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Sent" stroke="#84d88f" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Received" stroke="#2fbd5c" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home