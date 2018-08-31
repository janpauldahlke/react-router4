import React from "react";
import { Link, NavLink } from 'react-router-dom';

//eat fresh brainfood here
//https://stackoverflow.com/questions/47338077/react-router-v4-navlink-vs-link-benefits
// new props activeClassName

const Sidebar = () => {

    return (
        <div className={'leftNavContainer'}>
          <NavLink to="/" activeClassName={'activeNavLink'} className={'navLink'} exact>Home</NavLink> <br/>
          <NavLink to="/prompt" activeClassName={'activeNavLink'} className={'navLink'}>Prompt</NavLink><br/>
          <NavLink to="/props" activeClassName={'activeNavLink'} className={'navLink'}>props</NavLink><br/>
          <NavLink to="/anytitlethatdoesnotexistorsoorevendifferentorelseorwhoknowsbutinanycaseitshouldshowtheERRORpage" activeClassName={'activeNavLink'} className={'navLink'}>404 page</NavLink><br/>
        </div>
    );
};

export default Sidebar;