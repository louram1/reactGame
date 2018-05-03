import React, {Component} from "react";
import ImageList from "./ImageList";
import _ from "lodash";


class Game extends Component {

  state = {
    images: [
      {
        url: "https://le-www-live-s.legocdn.com/sc/media/lessons/wedo-2/wedo-projects/images/frogs-metamorphosis-project-image-feb9db40c70bcda57e12f5671d4bc278.jpg?fit=around|700:700&crop=700:700;*,*",
        id: 1
      },
      {
        url: "https://images-na.ssl-images-amazon.com/images/I/51NHIdgmsaL._SY355_.jpg",
        id: 2
      },
      {
        url: "https://cdn4.iconfinder.com/data/icons/spring-flat-colorful/2048/5683_-_Frog-256.png",
        id: 3
      },
      {
        url: "https://frogscode.com/wp-content/uploads/2013/03/frog.png",
        id: 4
      },
      {
        url: "https://pbs.twimg.com/profile_images/658462515077083136/uoez3SNe_400x400.jpg",
        id: 5
      },
      {
        url: "https://apprecs.org/ios/images/app-icons/256/31/487318065.jpg",
        id: 6
      },
      {
        url: "https://pbs.twimg.com/profile_images/3482109647/3a5a9ef0270b3d74bb824cf6a9fec626.jpeg",
        id: 7
      },
      {
        url: "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-11/256/frog-face.png",
        id: 8
      },
      {
        url: "https://s3.amazonaws.com/battlefy-user-generated-assets-with-permissions%2Fauth0%7C55969a96f3946f410055e01e/1517681600968.frog.png",
        id: 9
      },
      {
        url: "https://images-na.ssl-images-amazon.com/images/I/51NHIdgmsaL._SY355_.jpg",
        id: 10
      },
      {
        url: "https://images-na.ssl-images-amazon.com/images/I/51NHIdgmsaL._SY355_.jpg",
        id: 11
      },
      {
        url: "https://images-na.ssl-images-amazon.com/images/I/51NHIdgmsaL._SY355_.jpg",
        id: 12
      }
    ],
    choices: []
  }
  
  handleClick = (id) => {
    if (this.state.choices.includes(id)) {
      console.log('you lose!!!');
      this.setState({choices: []});
    } else {
      console.log('safe for now...');
      this.setState({choices: [...this.state.choices, id]})
    }
  }

  render () {
    console.log(this.state.choices.length);
    
    return (
      <div>
        <h1>Memory Game</h1>
        <ImageList handleClick={this.handleClick} images={_.shuffle(this.state.images)} />
      </div> )
  }
};

export default Game;
