import { Component } from "react";
import "./reopening.scss";

class Reopening extends Component{


    render(){
        return(
        <section>
                
            <div className="divcustom">
            
            

                 <div className="container">
                         
                 <div className="custom-leaf-two">
                    <img src="images/3.png"/>
                 </div>

                    <div class="divcustom2" >
                   
           
                            <text>We are Reopening</text>
                            <p className="textcustom">Check out details about new safety guidelines</p>
                            <div className= "border-div">
                            <div className="inside-border-div">
                               <li className="button-link"><a href="">Safety Guidelines</a></li> 
                            </div>
                            </div>

                            
                
                    </div>

                    
                    <div className="flower-div">
                                <img src="images/cvet1.png"/>
                    </div>
                    <div className="custom-leaf-one">
                         <img src="images/2.png"/>
                    </div>
                    
                    
                    
                </div>

                </div>
            
        </section>
            
        );
    }

}

export default Reopening;