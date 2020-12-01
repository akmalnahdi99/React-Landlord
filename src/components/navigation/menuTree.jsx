import React from 'react'
import {Link} from "react-router-dom"
export default props => (
    <li>
        <Link to="/">
            <i className={`fa fa-${props.icon}`}></i> 
            <span className="nav-label">{props.label}</span>
            <span className="fa arrow"></span>
        </Link>
        <ul className="nav nav-second-level collapse">
            {props.children}
        </ul>
    </li>
)