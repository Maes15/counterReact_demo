import React from "react";
import "./link.css";


const Link = props =>
    <a href="http://www.google.com" className="link" target="_blank">{props.lk}</a> ;

export default Link;