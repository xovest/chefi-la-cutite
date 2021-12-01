import React from 'react';
import './PaginaPrincipala.css';
import img1 from './imaginiPaginaPrincipala/img1.jpg';
import img2 from './imaginiPaginaPrincipala/img2.jpg';
import img3 from './imaginiPaginaPrincipala/img3.jpg';
import img4 from './imaginiPaginaPrincipala/img4.jpg';
import img5 from './imaginiPaginaPrincipala/img5.jpg';

const PaginaPrincipala = () => {
  return (    
    <div className="grid-container">
      <div className="grid-item">
        <a className="grid-item" href="/sezoane">
          <img src={img1} alt="Chefi"></img>
        </a>
        <h1>Descoperă toate detaliile din fiecare sezon al celui mai cunoscut și urmărit show culinar din România</h1>
      </div>
      <div className="grid-item">
      <a className="grid-item" href="/concurenti">
        <img src={img2} alt="Chefi"></img>
      </a>
      <h1>Află informații despre fiecare concurent care a ajuns în echipele celor trei chefi</h1>
      </div>
      <div className="grid-item">
      <a className="grid-item" href="/amulete">
        <img src={img3} alt="Chefi"></img>
      </a>
        <h1>Vezi toate amuletele oferite de către Gina</h1>
      </div>
      <div className="grid-item">
      <a className="grid-item" href="/battleuri">
        <img src={img4} alt="Chefi"></img>
      </a>
        <h1>Uită-te la detalii despre fiecare Battle în parte</h1>
      </div>
      <div className="grid-item">
      <a className="grid-item" href="/retete">
        <img src={img5} alt="Chefi"></img>
      </a>
        <h1>Descoperă toate rețetele create de către concurenți și de către chefi</h1>
      </div>
    </div>
  );
};

export default PaginaPrincipala;
