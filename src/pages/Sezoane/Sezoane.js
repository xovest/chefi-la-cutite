import React, { useEffect } from "react";
import './Sezoane.css';
import './select.css';
import Select from './select.js';

const Sezoane = () => {
    useEffect(() => {
        const selectElements = document.querySelectorAll('[data-custom]');

        selectElements.forEach(selectElement => {
            new Select(selectElement);
        });
    }, [])

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div className="pill">
                    <label>Sezonul</label>
                    <select data-custom>
                        <option value="toate">Toate</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                </div>
            </div>
            <div className="main-info-sez">
                <h1>Detalii</h1>
                <h6>Difuzat: </h6>
            </div>
            <div className="grid-container-sez">
                <div className="grid-item-sez">Concurenti</div>
                <div className="grid-item-sez">Amulete</div>
                <div className="grid-item-sez">Battle-uri</div>
                <div className="grid-item-sez">Rețete</div>
            </div>
        </>
    );
};

export default Sezoane;
