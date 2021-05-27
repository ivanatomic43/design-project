import './sadona.scss';
const { Component } = require("react");




class Sadona extends Component{

    render(){
        return(
            <section>
                
                <div className="whitediv">
                    <div className="container">
                    
                    
                     <div className="inside-white-div">
                            
                     <div className="linediv1">
                                
                                </div>
                            <div className="text-div">
                            <text class="sadona-text">Sadona was conceived with the belief that a salon and spa should be a welcome and tranquil experience.</text>
                            <p className="sadona-text2">And from the moment you walk through our door, you will see exactly what we mean. Come, let's look around together.</p>
                            <div className= "border-div">
                            <div className="inside-border-div">
                               <li className="button-link"><a href="">Our Story</a></li> 
                            </div>
                            </div>
                            </div>
                            <div className="linediv2">
                                
                                </div>
                            
                    </div>
                    </div>
                </div>
                
            </section>
        );
    }

}
export default Sadona;