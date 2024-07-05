import React from 'react';
import Header from '../Header'
import {Link} from 'react-router-dom'
import './index.css';

const Home = () => {
  const airports = [
    { name: 'Indira Gandhi International Airport', country: 'India', code: 'DEL', terminals: 3 },
    { name: 'Dubai International Airport', country: 'UAE', code: 'DXB', terminals: 5 },
    { name: 'Heathrow Airport', country: 'England', code: 'LHR', terminals: 4 },
    { name: 'Istanbul Airport', country: 'Turkey', code: 'IST', terminals: 3 },
    { name: 'Rajiv Gandhi International Airport', country: 'Texas', code: 'DPR', terminals: 14 },
  ];

  return (
    <div>
    <Header/>
    <div className="dashboard">
      <aside className="sidebar">
        <nav>
          <ul>
            <Link to="/" className='hyper'>Home</Link>
            <li>Dashboard</li>
            <li>Services</li>
            <Link to="/airpots" className='hyper'>Airports</Link>
            <li>Video</li>
            <li>Others</li>
            <ul>
              <li>List 1</li>
              <li>List 2</li>
              <li>List 3</li>
            </ul>
          </ul>
        </nav>
      </aside>
      <main className="content">
        <h1>Airports</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>Code</th>
              <th>Terminals</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {airports.map((airport, index) => (
              <tr key={index}>
                <td>{airport.name}</td>
                <td>{airport.country}</td>
                <td>{airport.code}</td>
                <td>{airport.terminals}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="add-airport">+ Add Airport</button>
      </main>
    </div>
    </div>
  );
};

export default Home;