import React from "react";
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
} from "./NavbarElements";
import chefi from './chefi.png';

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                <img src={chefi} alt="Chefi"></img>
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/" activeStyle>
                    Pagina Principală
                </NavLink>
                <NavLink to="/sezoane" activeStyle>
                    Sezoane
                </NavLink>
                <NavLink to="/concurenti" activeStyle>
                    Concurenți
                </NavLink>
                <NavLink to="/amulete" activeStyle>
                    Amulete
                </NavLink>
                <NavLink to="/battleuri" activeStyle>
                    Battle-uri
                </NavLink>
                <NavLink to="/retete" activeStyle>
                    Rețete
                </NavLink>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;
