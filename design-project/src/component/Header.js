
import React, {Component} from "react";

import "./header.scss";

class Header extends Component {
    render(){
        return(
            <header>
              <nav>
                
                  <ul>
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#">Our Store</a></li>
                            <li><a href="#">Services</a></li>
                           
                            <li className="logo"><a></a></li>
                            <li ><a href="#">Product</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Contact</a></li>
                    </ul>
                    
                </nav>
            </header>
        );
    }
}
export default Header;
 

