import React from 'react';
import { FaFacebookSquare, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className='container-fluid footer py-5' id='contact us' style={{ backgroundColor: '#F5F5F5' }}>
      <div className='row'>

        <div className="col-md-6 mb-4">
          <h5 className='mb-3' style={{ color: '#708090' }}>Social Media</h5>
          <ul className='list-unstyled'>
            <li className='mb-3'>
              <Link
                to="https://www.instagram.com/ved.diaries/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className='d-flex align-items-center'
                style={{ color: '#FF6F05', textDecoration: 'none' }}
              >
                <img src='insta.jpg' height="22px" width="22px" alt='Instagram' />
                <span className='fs-6 ms-3 text-dark'>Instagram</span>
              </Link>
            </li>
            <li className='mb-3'>
              <Link
                to="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className='d-flex align-items-center'
                style={{ color: '#E62117', textDecoration: 'none' }}
              >
                <FaYoutube size={24} />
                <span className='fs-6 ms-3 text-dark'>YouTube</span>
              </Link>
            </li>
            <li className='mb-3'>
              <Link
                to="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className='d-flex align-items-center'
                style={{ color: '#3B5998', textDecoration: 'none' }}
              >
                <FaFacebookSquare size={24} />
                <span className='fs-6 ms-3 text-dark'>Facebook</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-md-6">
          <h5 className='mb-3' style={{ color: '#708090' }}>Contact Us</h5>
          <ul className='list-unstyled'>
            <li className='mb-3'>
              <Link
                to="tel:9877260236"
                className='d-flex align-items-center'
                style={{ color: '#000', textDecoration: 'none' }}
              >
                <FaPhoneAlt size={17} className='mt-1' />
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
                <FaPhoneAlt size={17} className='mt-1' />
                <div className='fs-6 ms-3 text-dark'>
                  <span className='phone'>Aditya: 7528972377</span>
                </div>
              </Link>
            </li>
            <li className='mb-3'>
              <Link
                to="mailto:lkumar7810@gmail.com"
                className='d-flex align-items-center'
                style={{ color: '#000', textDecoration: 'none' }}
              >
                <MdEmail size={18} className='mt-1' />
                <div className=' ms-3 text-dark'>
                  <span className='phone'>Email: lkumar7810@gmail.com</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Footer;
