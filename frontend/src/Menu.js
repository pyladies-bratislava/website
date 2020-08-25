import React, {useState, useEffect} from 'react';
import logo from './logo.png';
import './menu.css'

function Menu() {
    const [menu, setMenu] = useState("Hello");

    useEffect(() => {
        fetch("/menu").then(response => response.json()).then(data => {setMenu(data.menu)})
    }, [])

    return (
        <div>
            <img src={logo} className="logo" />
            {menu}
        </div>
  );
}

export default Menu;
