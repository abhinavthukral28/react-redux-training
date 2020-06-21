import React from "react";
import SearchBar from "./SearchBar";
import youtube from "./api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  onSearchSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
    console.log("From App", video);
  };
  componentDidMount() {
    this.onSearchSubmit("stargate");
  }

  render() {
    return (
      <div className="ui container ">
        <div className="ui grid">
          <div className="ui row">
            <div className="sixteen wide column">
              <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
            </div>
            <div className="ten wide column">
              <VideoDetail video={this.state.selectedVideo}></VideoDetail>
            </div>
            <div className="six wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              ></VideoList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
