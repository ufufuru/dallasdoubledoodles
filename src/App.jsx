import React, { Component } from 'react';
import JumbotronContainer from './components/JumbotronContainer'
import InfoContainer from './components/InfoContainer'
import PuppyContainer from './components/PuppyContainer'
import PuppyBox from './components/PuppyBox'
import PhotoContainer from './components/PhotoContainer'
import LightBox from './components/LightBox'
import PuppyOwning from './components/PuppyOwning'
import DogCosts from './components/DogCosts'
import TileContainer from './components/TileContainer'
import FooterContainer from './components/FooterContainer'
import TileResult from './components/TileResult'
import DogFood from './components/DogFood'
import Contracts from './components/Contracts'
import imageList from './assets/imageList'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
        openedPuppy: {
          name: null,
          info: null,
          img: null
        },
        dogPhotos: imageList,
        openedPhoto: {
          src: null,
          id: null,
          comment: null
        },
        costsOpened: false,
        openedTile: "money",
        foodOpened: false
    }
    this.openPuppy = this.openPuppy.bind(this)
    this.closePuppy = this.closePuppy.bind(this)
    this.openPhoto = this.openPhoto.bind(this)
    this.closePhoto = this.closePhoto.bind(this)
    this.openCosts = this.openCosts.bind(this)
    this.closeCosts = this.closeCosts.bind(this)
    this.openTile = this.openTile.bind(this)
    this.openFood = this.openFood.bind(this)
    this.closeFood = this.closeFood.bind(this)
  }

  openPuppy(name, info, image) {
    this.setState({ openedPuppy: {'name': name, 'info': info, 'image': image} })
    console.log(this.state.openedPuppy)
  }

  closePuppy() {
    this.setState({ openedPuppy: {}})
  }

  openPhoto(src, id, comment) {
    this.setState({ openedPhoto: {'src': src, 'id': id, 'comment': comment}})
  }

  closePhoto() {
    this.setState({ openedPhoto: {}})
  }

  openCosts() {
    this.setState({ costsOpened: true })
  }

  closeCosts() {
    this.setState({ costsOpened: false })
  }

  openTile(tile) {
    this.setState({ openedTile: tile })
  }

  openFood() {
    this.setState({ foodOpened: true })
  }

  closeFood() {
    this.setState({ foodOpened: false })
  }

  render() {
    return (
      <div className="App">
        <JumbotronContainer/>
        <InfoContainer/>
        <PuppyContainer openPuppy={this.openPuppy}/>
        <PuppyBox openedPuppy={this.state.openedPuppy} closePuppy={this.closePuppy}/>
        <PhotoContainer photos={this.state.dogPhotos} openPhoto={this.openPhoto}/>
        <LightBox openedPhoto={this.state.openedPhoto} closePhoto={this.closePhoto}/>
        <PuppyOwning openCosts={this.openCosts}/>
        <DogCosts costsOpened={this.state.costsOpened} closeCosts={this.closeCosts}/>
        <TileContainer openTile={this.openTile} openedTile={this.state.openedTile}/>
        <TileResult openedTile={this.state.openedTile} foodOpened={this.state.foodOpened} openFood={this.openFood}/>
        <DogFood foodOpened={this.state.foodOpened}  closeFood={this.closeFood}/>
        <Contracts/>
        <FooterContainer/>
      </div>
    );
  }
}

export default App;
