import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Playlist from './component/Playlist'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      videos: [],

    }
  this.onSearch = this.onSearch.bind(this)
  this.searchVideo =  this.searchVideo.bind(this)
  }
  
  searchVideo() {axios
                    .get(`https://www.googleapis.com/youtube/v3/search?q=${this.state.search}&maxResults=10&part=snippet&key=AIzaSyDA730GdaMcGcHc3y1sDDceTn3ZmBW1xDw`)

                    .then(res => { console.log(res.data.items[0].snippet.title)
                      this.setState({
                                    videos: res.data.items
                      });
                    }
                    )}

onSearch(e) {
  this.setState({ search: e.target.value })
}

render() {
  let videosToDisplay = this.state.videos.map((element, i) => {
    return (
      <div key={i}><p> {element.snippet.title} </p>
      <iframe src={`https://www.youtube.com/embed/${element.id.videoId}`} frameBorder="0" allowFullScreen ng-show="showvideo" title="video"></iframe>
      <button>Add to favorites</button>
      </div>
      
    )
  })
    return (
      <div className="search-bar"><i id="yticon" className="fab fa-youtube"></i>

        <input onChange={(e) => this.onSearch} placeholder=" Search" />

        <button onClick={this.searchVideo}><i className="fas fa-search"></i>Enter</button>

        <Playlist videosToDisplay={videosToDisplay} />

      </div>


    )//return
  }//render
}//class
