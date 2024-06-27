import React from 'react'
import { Link } from 'react-router-dom';
import {HashLink} from "react-router-hash-link";
function Header() {
  return (
   <nav>
    <h1>Nucleus</h1>
    <main>
<HashLink to={"/#home"}>Home</HashLink>
<Link to={"/contact"}>Contact us</Link>
<HashLink to={"/#about"}>About</HashLink>
<HashLink to={"/#brands"}>Faculty</HashLink>
<HashLink to={"/services"}>Services</HashLink>
    </main>
   </nav>
  )
}

export default Header;
