import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import './Header.css'
const Portofolio = () => {

  const imageName = ['Wedding', 'Clubs', 'Events'];
  const images = ['_ATP9320.jpg', 'DSC02046.jpg', '1J2A9887.jpg'];

  return (

    <div className='portfolio-section'>
      <h2 id="portfolio" className='m-3 text-center'>~Portofolio~</h2>
      <Grid container spacing={3} sx={{
        textAlign: "center",

      }}>
        {imageName.map((name, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <div
              className="portfolio-item"
              style={{
                backgroundImage: `url(${images[index]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '550px',
                position: 'relative',
                width: "100%"
              }}
            >
              <div className="overlay">
                <Button variant="contained" sx={{ marginTop: "460px" }} color="primary" className="view-button">
                  View Full Portfolio
                </Button>
                <h3 className='text-white' style={{ marginTop: '20px' }}>{name}</h3>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Portofolio;
