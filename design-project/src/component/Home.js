import React, {Component} from "react";
import "./home.scss";


class Home extends Component{

    render(){
        return(
            
            <section>
                
                <div className="custom-div">
                    <div className="my-container">
                     
                     <div className="home-div">
                         <p className="custom-text-1">A new type of salon.</p>
                         <p className="custom-text-2">A New Type Of Experience</p>
                         
                         <div className="borderdiv1">
                         <button>Contact</button>
                         </div>

                        

                     </div>

                     <div className="bar-div">
                         <div className="first-circle">
                             <img src="images/arrowback.png" id="arrowback"/>
                         </div>
                         <div className="line-one">

                         </div>

                     </div>

                     </div>
  
         
                </div>

            
            </section>
         
            
        );
    }


}
export default Home;


                        