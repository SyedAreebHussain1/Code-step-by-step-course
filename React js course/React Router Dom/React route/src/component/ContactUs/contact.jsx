import React from "react";
import { Link } from "react-router-dom";
import About from "../About/About";
import './style.css'
export default function ContactUs(){
    return(
        <div>
            <h1>Contact Us</h1>
            <Link to='/about'>About</Link>
            <Link to='/'>Home</Link>
        </div>
    )
}