import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Img from "./components/Img.json"
import chicken1 from "./images/chicken_1.jpeg"
import chicken2 from "./images/chicken_2.jpeg"
import chicken3 from "./images/chicken_3.jpeg"
import chicken4 from "./images/chicken_4.jpeg"
import chicken5 from "./images/chicken_5.jpeg"
import chicken6 from "./images/chicken_6.jpeg"
import chicken7 from "./images/chicken_7.jpeg"
import chicken8 from "./images/chicken_8.png"
import chicken9 from "./images/chicken_9.jpeg"
import chicken10 from "./images/chicken_10.jpeg"
import chicken11 from "./images/chicken_11.jpeg"
import chicken12 from "./images/chicken_12.jpeg"

import './App.css';

class App extends Component {
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin'
  };

  
  randomShuffle = (array) => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  pickImg = (name) => {
    console.log("Clicked!!");
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct: Good choice!" 
      })
      this.randomShuffle();
    }
    else {
      this.setState({
        message: "Incorrect: Play again?",
        correct: 0,
        picked: []
      })
    }
  }

  switchImage = (name) => {
    switch (name) {
      case "chicken1":
        return `${chicken1}`
      case "chicken2":
        return `${chicken2}`
      case "chicken3":
        return `${chicken3}`
      case "chicken4":
        return `${chicken4}`
      case "chicken5":
        return `${chicken5}`
      case "chicken6":
        return `${chicken6}`
      case "chicken7":
        return `${chicken7}`
      case "chicken8":
        return `${chicken8}`
      case "chicken9":
        return `${chicken9}`
      case "chicken10":
        return `${chicken10}`
      case "chicken11":
        return `${chicken11}`
      case "chicken12":
        return `${chicken12}`
      default:
        return `${chicken1}`
    }
  }

  render() {
    return (
      <div>
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Header />
        <Main>
          {this.randomShuffle(Img).map(image => (
            <Image src={this.switchImage(image.name)} name={image.name} key={image.name} pickImg={this.pickImg}  />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
