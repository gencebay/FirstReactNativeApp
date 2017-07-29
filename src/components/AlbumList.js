// AlbumList Component
import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      isLoading: true
    };
  }
  componentWillMount() {
    let url = "http://cdn.netcorestack.com/json/music_albums.json";
    var json = `[
{
"title": "Taylor Swift",
"artist": "Taylor Swift",
"url": "https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6",
"image": "http://cdn.netcorestack.com/img/taylorswift.jpg",
"thumbnail": "http://cdn.netcorestack.com/img/ts.png"
},
{
"title": "Fearless",
"artist": "Taylor Swift",
"url": "https://www.amazon.com/Fearless-Enhanced-Taylor-Swift/dp/B001EYGOEM",
"image": "http://cdn.netcorestack.com/img/taylorswift.jpg",
"thumbnail": "http://cdn.netcorestack.com/img/ts.jpg"
},
{
"title": "Speak Now",
"artist": "Taylor Swift",
"url": "https://www.amazon.com/Speak-Now-Taylor-Swift/dp/B003WTE886",
"image": "http://cdn.netcorestack.com/img/taylorswift.jpg",
"thumbnail": "http://cdn.netcorestack.com/img/ts.jpg"
},
{
"title": "Red",
"artist": "Taylor Swift",
"url": "https://www.amazon.com/Red-Taylor-Swift/dp/B008XNZMOU",
"image": "http://cdn.netcorestack.com/img/taylorswift.jpg",
"thumbnail": "http://cdn.netcorestack.com/img/ts.jpg"
},
{
"title": "1989",
"artist": "Taylor Swift",
"url": "https://www.amazon.com/1989-Taylor-Swift/dp/B00MRHANNI",
"image": "http://cdn.netcorestack.com/img/taylorswift.jpg",
"thumbnail": "http://cdn.netcorestack.com/img/ts.jpg"
}
]`;

    this.setState({ albums: JSON.parse(json), isLoading: false });

    // var albums = fetch(url)
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     this.setState({ albums: responseJson, isLoading: false });
    //   })
    //   .catch(error => {
    //   });
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
