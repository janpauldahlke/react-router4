import React from "react";
import { Link, NavLink } from 'react-router-dom';

//eat fresh brainfood here
//https://stackoverflow.com/questions/47338077/react-router-v4-navlink-vs-link-benefits
// new props activeClassName

const Sidebar = () => {
    
    /* RUDE violation the DRY principle (dont repeat yourself) */
   /*  return (
        <div className={'leftNavContainer'}>
          <NavLink to="/" activeClassName={'activeNavLink'} className={'navLink'} exact>Home</NavLink> <br/>
          <NavLink to="/prompt" activeClassName={'activeNavLink'} className={'navLink'}>Prompt</NavLink><br/>
          <NavLink to="/props" activeClassName={'activeNavLink'} className={'navLink'}>props</NavLink><br/>
          <NavLink to="/anytitlethatdoesnotexistorsoorevendifferentorelseorwhoknowsbutinanycaseitshouldshowtheERRORpage" activeClassName={'activeNavLink'} className={'navLink'}>404 page</NavLink><br/>
        </div>
    ); */


    /* to DRY we do this object */
    const links = [
        {name: 'Home', url: '/'},
        {name: 'Prompt', url: '/prompt' },
        {name: 'PropViewer' , url: '/props' },
        {name: '404 Error', url: '/error' },
    ];

    let linksComponents = links.map((link, index) => {
        return (
            <li key={index} className={'nav'}>
                <NavLink
                    className={'navLink'}
                    activeClassName={'activeNavLink'}
                    to={link.url} exact>
                    {link.name}</NavLink>
            </li>
        )
    })

    return (
        <div className={'leftNavContainer'}>
            <ul>
               {linksComponents}
            </ul>
        </div>
    )
};

export default Sidebar;