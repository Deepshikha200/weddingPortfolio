import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookSquare, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const BookNow = ({ show, onClose }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header style={{ backgroundColor: "#0D6EFD", color: "#fff" }} closeButton>
        <Modal.Title> <h5 className='text-center'>Book an Appointment</h5> </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='mb-3 fs-6'>Please call us or WhatsApp to book an appointment</div>
        <ul className='list-unstyled'>
          <li className='mb-3'>
            <Link
              to="tel:9877260236"
              className='d-flex align-items-center'
              style={{ color: '#000', textDecoration: 'none' }}
            >
              <FaPhoneAlt size={18} className='mt-1' />
              <div className='fs-6 ms-3 text-dark'>
                <span className='phone'>Lucky: 9877260236</span>
              </div>
            </Link>
          </li>
          <li className='mb-3'>
            <Link
              to="tel:752897277"
              className='d-flex align-items-center'
              style={{ color: '#000', textDecoration: 'none' }}
            >
              <FaPhoneAlt size={18} className='mt-1' />
              <div className='fs-6 ms-3 text-dark'>
                <span className='phone'>Aditya: 7528972377</span>
              </div>
            </Link>
          </li>

        </ul>
      </Modal.Body>
    </Modal>
  );
};

export default BookNow;
