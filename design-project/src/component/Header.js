
import React, {Component} from "react";

import "./header.scss";


class Header extends Component {
    render(){
        return(
        <header>
            <div className="container">
            
            
                <ul>
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">Our Story</a></li>
                    <div className="dropdown">
                         <li><a href="#">Services <img src="images/icon-down.png.png"/></a>
                            <div className="dropdown-content">
                            
                                <a className="dropdown-link">Salon Services</a>
                                <hr/>
                                <a className="dropdown-link">Spa Services</a>
                                <hr/>
                                <a className="dropdown-link">Bridal Services</a>
                           
                            </div>
                         </li>
                    </div>
                    <div className="logo-area">
                        <img src="images/image-asset.png"/>

                    </div>

                    <li><a href="#">Products</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>
                    
                </ul>

            
            </div>
        </header>
        );
    }
}
export default Header;

