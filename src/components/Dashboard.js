import React from "react";
// import axios from "axios";
import img from "../images/logo.png";
class Footer extends React.Component {
  render() {
    return (
      <div>      
        <img className="imgl" src={img}></img><br></br>
        
        <button className="btn"><a href="/index">Quiz 1</a></button>
        <br></br>
        <button className="btn"><a href="/index2">Quiz 2</a></button>
      </div>
    );
  }
}
export default Footer;
