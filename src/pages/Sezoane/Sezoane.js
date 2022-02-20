import React, { useEffect } from "react";
import './Sezoane.css';
import './select.css';
import Select from './select.js';
import main from './main.jpg'
import battle from './battle.jpg'
import conc from './conc.jpg'
import retete from './retete.jpg'
import amule from './amule.jpg'

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
            <div
            style={{
                width: 1660,
                height: 1522,
                position: "relative",
                overflow: "hidden",
                background: "#fff",
            }}
            >
            <img
                src={main}
                style={{
                width: "100%",
                height: 720,
                position: "absolute",
                left: "-1px",
                top: "-1px",
                objectFit: "cover",
                }}
            />
            <p
                style={{
                width: 436,
                height: 146,
                position: "absolute",
                left: 120,
                top: 71,
                fontSize: 96,
                textAlign: "center",
                color: "rgba(255,69,0,0.84)",
                }}
            >
                Detalii
            </p>
            <p
                style={{
                position: "absolute",
                left: 81,
                top: 300,
                fontSize: 36,
                textAlign: "center",
                color: "rgba(255,69,0,0.84)",
                }}
            >
                <span
                style={{ fontSize: 36, fontWeight: 700, textAlign: "center", color: "rgba(255,69,0,0.84)" }}
                >
                Difuzat
                </span>
                <span style={{ fontSize: 36, textAlign: "center", color: "rgba(255,69,0,0.84)" }}>
                : 7/MAR/2016 - prezent
                </span>
            </p>
            <p
                style={{
                    position: "absolute",
                    left: 81,
                    top: 385,
                    fontWeight: 700,
                    fontSize: 36,
                    textAlign: "center",
                    color: "rgba(255,69,0,0.84)",
                    }}
            >
                Echipe:
            </p>
            <p
                style={{
                position: "absolute",
                left: 81,
                top: 474,
                fontSize: 36,
                textAlign: "center",
                color: "rgba(255,69,0,0.84)",
                }}
            >
                <span
                style={{ fontSize: 36, fontWeight: 700, textAlign: "center", color: "rgba(255,69,0,0.84)" }}
                >
                Câștigător:{" "}
                </span>
                <span style={{ fontSize: 36, textAlign: "center", color: "rgba(255,69,0,0.84)" }}>
                Chef Sorin Bontea
                </span>
            </p>
            <p
                style={{
                width: 333,
                height: 40,
                position: "absolute",
                left: 251,
                top: 355,
                fontSize: 36,
                textAlign: "center",
                color: "rgba(255,69,0,0.84)",
                }}
            >
                Chef Sorin Bontea
            </p>
            <p
                style={{
                width: 400,
                height: 40,
                position: "absolute",
                left: 230,
                top: 390,
                fontSize: 36,
                textAlign: "center",
                color: "rgba(255,69,0,0.84)",
                wordBreak: "break-all",
                }}
            >
                Chef Florin Dumitrescu
            </p>
            <p
                style={{
                width: 420,
                height: 40,
                position: "absolute",
                left: 220,
                top: 425,
                fontSize: 36,
                textAlign: "center",
                color: "rgba(255,69,0,0.84)",
                wordBreak: "break-all",
                }}
            >
                Chef Cătălin Scărlătescu
            </p>
            <svg
                width={35}
                height={35}
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ position: "absolute", left: 650, top: 400 }}
                preserveAspectRatio="none"
            >
                <path d="M0 0H35V35H0V0Z" fill="#737070" />
            </svg>
            <div
                style={{
                width: 35,
                height: 35,
                position: "absolute",
                left: 650,
                top: 436,
                background: "#000",
                borderWidth: 1,
                borderColor: "#fff",
                }}
            />
            <svg
                width={35}
                height={35}
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ position: "absolute", left: 650, top: 472 }}
                preserveAspectRatio="none"
            >
                <path d="M0 0H35V35H0V0Z" fill="#C8210A" />
            </svg>
            <a href="/concurenti">
                <img
                    className="grd"
                    src={conc}
                    style={{
                    width: 830,
                    height: 402,
                    position: "absolute",
                    left: "-1px",
                    top: 719,
                    objectFit: "cover",
                    cursor: "pointer",
                    }}
                />
            </a>
            <a href="/amulete">
                <img
                    className="grd"
                    src={amule}
                    style={{
                    width: 830,
                    height: 402,
                    position: "absolute",
                    left: 829,
                    top: 719,
                    objectFit: "cover",
                    cursor: "pointer",
                    }}
                />
            </a>
            <a href="/battleuri">
                <img
                    className="grd"
                    src={battle}
                    style={{
                    width: 830,
                    height: 400,
                    position: "absolute",
                    left: 829,
                    top: 1121,
                    objectFit: "cover",
                    cursor: "pointer",
                    }}
                />
            </a>
            <a href="/retete">
                <img
                    className="grd"
                    src={retete}
                    style={{
                    width: 830,
                    height: 400,
                    position: "absolute",
                    left: "-1px",
                    top: 1121,
                    objectFit: "cover",
                    cursor: "pointer",
                    }}
                />
            </a>
            <p
                style={{
                position: "absolute",
                left: 321,
                top: 889,
                fontSize: 36,
                fontWeight: 700,
                textAlign: "center",
                color: "#ff4500",
                zIndex: 1,
                pointerEvents: "none",
                }}
            >
                Concurenți:
            </p>
            <p
                style={{
                position: "absolute",
                left: 1172,
                top: 901,
                fontSize: 36,
                fontWeight: 700,
                textAlign: "center",
                color: "#ff4500",
                zIndex: 1,
                pointerEvents: "none",
                }}
            >
                Amulete:
            </p>
            <p
                style={{
                position: "absolute",
                left: 1164,
                top: 1284,
                fontSize: 36,
                fontWeight: 700,
                textAlign: "center",
                color: "#ff4500",
                zIndex: 1,
                pointerEvents: "none",
                }}
            >
                Battle-uri:
            </p>
            <p
                style={{
                position: "absolute",
                left: 362,
                top: 1272,
                fontSize: 36,
                fontWeight: 700,
                textAlign: "center",
                color: "#ff4500",
                zIndex: 1,
                pointerEvents: "none",
                }}
            >
                Rețete
            </p>
            </div>;
        </>
    );
};

export default Sezoane;