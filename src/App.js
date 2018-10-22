import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Playlist from './component/Playlist';
import ToDisplay from './component/ToDisplay'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      videos: [],
      favoritesList: [],
    }
  this.onSearch = this.onSearch.bind(this)
  this.searchVideo =  this.searchVideo.bind(this)
  this.onChangeFaves = this.onChangeFaves.bind(this)
  }

componentDidMount() {
  axios
    .get(`https://www.googleapis.com/youtube/v3/search?q="CSS Trick"&maxResults=5&part=snippet&key=AIzaSyDA730GdaMcGcHc3y1sDDceTn3ZmBW1xDw`)
    .then(res => { 
        console.log(res.data.items[0].snippet.title)
        this.setState({
                      videos: res.data.items
        });
    })
}
  //search external API
  searchVideo() {
    axios
      .get(`https://www.googleapis.com/youtube/v3/search?q=${this.state.search}&maxResults=5&part=snippet&key=AIzaSyDA730GdaMcGcHc3y1sDDceTn3ZmBW1xDw`)
      .then(res => { 
          console.log(res.data.items[0].snippet.title)
          this.setState({
                        videos: res.data.items
          });
      }
      )
  }

//adds to favorites array
  onChangeFaves(id) {
    axios
      .post('/api/addVideos', {id:id})
      .then (res => { 
        console.log(res.data) 
        this.setState ({
                      favoritesList: [res.data]
        });
      })
                  // console.log(favoritesList)
  }

    //pass inputbox value to search
    onSearch(value) {
      this.setState({ search: value });
    }
    
    render() {

console.log(this.state.favoritesList)


  let faveListToDisplay = this.state.favoritesList.map((element, index) => {

    console.log('element', element)
    return( 
      <div key={index}>{element}</div> )
      
      
  })

  let videosToDisplay = this.state.videos.map((element, i) => {
    return (
      <div key={i}><p> {element.snippet.title} </p>
        <iframe src={`https://www.youtube.com/embed/${element.id.videoId}`} frameBorder="0" allowFullScreen ng-show="showvideo" title="video"></iframe>
        <br/>

{/* Add to favorites onClick*/}
        <button onClick={() => this.onChangeFaves(element.id.videoId)}>Add to favorites</button>
        <button>Delete from List</button>
        <button>Update List</button>

      </div>
    )
  })

    return (
      <div className="search-bar"><i id="yticon" className="fab fa-youtube"></i>

        <input value={this.state.search} 
              onChange={(e) => this.onSearch(e.target.value)} 
              placeholder=" Search" />

        <button onClick={this.searchVideo}><i className="fas fa-search"></i>Enter</button>

        <Playlist videosToDisplay={videosToDisplay} />

        favorites:
        <ToDisplay faveListToDisplay={faveListToDisplay} />

      </div>


    )//return
  }//render
}//class
