import React from "react";
import {Link} from 'react-router-dom'
import '../styles/NavbarHomeInternal.css'


const NavbarHomePage = () => {
  return (
    <div className="navbarHomeinternal">     
      <Link to='/GUIDEDPROGRAM'>GUIDED PROGRAM</Link>
      <Link to='/DOUBTRESOLUTION'>DOUBT RESOLUTION</Link>
      <Link to='/CODINGNINJASSTUDIO'>CODING NINJAS STUDIO</Link>
      <Link to='/MOCKINTERVIEW'>MOCK INTERVIEW</Link>
      <Link to='/PLACEMENTCELL'>PLACEMENT CELL</Link>
      <Link to='/FREERESOURCES'>FREE RESOURCES</Link>
    </div>
  );
};

export default NavbarHomePage;