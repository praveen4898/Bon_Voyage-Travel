import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const carouselImages = [
    'https://img.freepik.com/free-photo/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise_335224-794.jpg?size=626&ext=jpg&ga=GA1.1.640352663.1687433480&semt=sph',
    'https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg?w=900&t=st=1705412189~exp=1705412789~hmac=0be0fb360f9cfedc898190bad78ee70dfc457e1a92a937d2b134f31db1f694b8',
    'https://img.freepik.com/free-photo/hiker-going-up-aiguille-du-midi_53876-139593.jpg?w=900&t=st=1705412220~exp=1705412820~hmac=0c695ab03f29e1de550239a8ee0e7737e85c6d681dc81fd43a62a7a80cc9fe40',
    'https://img.freepik.com/premium-photo/young-girl-travels-high-mountain-vang-vieng-laos_46740-747.jpg?w=900',
    'https://img.freepik.com/premium-photo/travel-world-monuments-concept_117023-14.jpg?w=900',
  ];

  const nextSlide = () => {
    const nextIndex = (currIndex + 1) % carouselImages.length;
    setCurrIndex(nextIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currIndex]);

  return (
    <div>
      <h2>Explore Our Destinations</h2>
      <Carousel
        selectedItem={currIndex}
        onChange={index => setCurrIndex(index)}
        style={{width:"60%"}}
      >
        {carouselImages.map((image, index) => (
          <div key={index} style={{display:"flex", justifyContent:"center", gap:"20px"}}>
            <img
              src={image}
              alt={""}
              style={{ width:'30%', height:'40%' }}
            />
            <div style={{width:"40%"}}>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque repellat eaque maxime dignissimos dolore officia quaerat aliquid vitae iure est in incidunt itaque sed officiis mollitia ipsum, nostrum unde! Vitae maxime impedit rem aliquam dignissimos?</p>          
                </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
