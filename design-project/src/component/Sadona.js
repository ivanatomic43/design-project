import './sadona.scss';
const { Component } = require("react");




class Sadona extends Component{

    render(){
        return(
            <section>
                
                <div className="whitediv">
                     <div className="inside-white-div">
                     
                            <text class="sadona-text">Sadona was conceived with the belief that a salon and spa should be a welcome and tranquil experience.</text>
                            <p className="textcustom">And from the moment you walk through our door, you will see exactly what we mean. Come, let's look around together.</p>
                            <div className="borderdiv2">
                                <button className="my-button">Our Story</button>
                            </div>
                            
                    </div>
                </div>
                
            </section>
        );
    }

}
export default Sadona;