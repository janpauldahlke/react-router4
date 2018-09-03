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
        {name: 'Prompt', url: '/prompt' },
        {name: 'PropViewer' , url: '/props' },
        {name: 'Color', url: '/color'},
        {name: 'Private Route', url:'/private'},
        {name: '404 Error', url: '/error' },
        {name: 'Logging' , url: '/logging'},
    ];
    //iterate over it in a renderHelper
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
    });
    //return homeroute still because its exact
    //consume the renderhelper
    return (
        <div className={'leftNavContainer'}>
            <ul>
                <li  className={'nav'}>
                    <NavLink to="/" activeClassName={'activeNavLink'} className={'navLink'} exact>Home</NavLink> <br/>
                </li>
               {linksComponents}
            </ul>
        </div>
    );
};

export default Sidebar;