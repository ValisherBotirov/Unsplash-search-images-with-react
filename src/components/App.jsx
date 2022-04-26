import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar.jsx";
import ImageList from "./ImageList.jsx";

class App extends React.Component {
  state = { imageArr: [] };

  searchGetVal = async (data1) => {
    const data = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: data1,
        per_page: 20,
        page: 3,
      },
      headers: {
        Authorization: "Client-ID yv1BamXBXbs9RYLHtmYl5o7kM3vKcG1uHanJlKG6C_8",
      },
    });
    // console.log(data.data.results);
    this.setState({ imageArr: data.data.results });
    // console.log(this.state.imageArr);
  };

  render() {
    return (
      <div>
        <SearchBar malumotOl={this.searchGetVal} />
        <ImageList dataImg={this.state.imageArr} />
      </div>
    );
  }
}

export default App;

// ldH4o_hjJ_0ruQ0IqVdfbuGVXSGuGBDctLmQ1XIxDRA   secret key
