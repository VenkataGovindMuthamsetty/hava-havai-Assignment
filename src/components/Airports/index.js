import React, { useState } from 'react';
import Modal from '../Modal';
import './index.css';
import {Link} from 'react-router-dom'
import Header from '../Header';

const Airports = () => {
  const [terminals, setTerminals] = useState([
    { title: 'Terminal 1', description: 'Optional media/cta should be here lines...' },
    { title: 'Terminal 2', description: 'Optional media/cta should be here lines...' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newTerminal, setNewTerminal] = useState({ title: '', description: '' });

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTerminal({ ...newTerminal, [name]: value });
  };

  const handleAddTerminal = () => {
    setTerminals([...terminals, newTerminal]);
    setNewTerminal({ title: '', description: '' });
    handleClose();
  };

  return (
    <div>
        <Header/>
    
    <div className="container">
      <div className="sidebar">
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
      </div>
      <div className="content">
        <h1>Indira Gandhi International Airport</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a>Airports</a></li>
            <li className="breadcrumb-item active" aria-current="page">Indira Gandhi International Airport</li>
          </ol>
        </nav>
        <h2>Terminals</h2>
        <div className="terminals">
          {terminals.map((terminal, index) => (
            <div className="terminal-card" key={index}>
              <h3>{terminal.title}</h3>
              <p>{terminal.description}</p>
            </div>
          ))}
          <button className="add-terminal-btn" onClick={handleShow}>
            + Add Terminal
          </button>
        </div>
        <h2>Services</h2>
        <form className="services-form">
          <div className="form-group">
            <label htmlFor="serviceName">Service Name</label>
            <input type="text" id="serviceName" placeholder="Lost & Found" />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select id="category">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="subCategory">Sub-Category</label>
            <select id="subCategory">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" rows="3" placeholder="Type here..."></textarea>
          </div>
          <div className="form-group">
            <input type="checkbox" id="showImage" />
            <label htmlFor="showImage">Show Image</label>
            <input type="file" id="uploadImage" />
          </div>
          <button type="submit" className="btn">Save</button>
        </form>
      </div>

      <Modal show={showModal} handleClose={handleClose} handleAddTerminal={handleAddTerminal} handleInputChange={handleInputChange} newTerminal={newTerminal} />
    </div>
    </div>
  );
};

export default Airports;