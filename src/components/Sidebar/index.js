import React from "react";
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <div className={'leftNavContainer'}>
          <Link to="/" className={'navLink'}>Home</Link> <br/>
          <Link to="/prompt" className={'navLink'}>Prompt</Link><br/>
        </div>
    );
};

export default Sidebar;