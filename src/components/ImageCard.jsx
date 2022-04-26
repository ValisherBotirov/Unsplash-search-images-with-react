import React from "react";
import "../StyleImage.css";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageDOM = React.createRef();
  }
  setSpan = () => {
    const height = this.imageDOM.current.clientHeight;
    const spans = Math.ceil(height + 10);
    this.setState({ spans: spans });
  };
  componentDidMount() {
    this.imageDOM.current.addEventListener("load", this.setSpan);
  }

  render() {
    return (
      <img
        ref={this.imageDOM}
        style={{ gridRowEnd: `span ${this.state.spans}` }}
        className="image"
        alt={this.props.data.alt_description}
        src={this.props.data.urls.regular}
      />
    );
  }
  //   <div key={val.id} className="img-list">
  //   <img
  //     alt={val.alt_description}
  //     style={{ width: "100%" }}
  //     src={val.urls.regular}
  //   />
  // </div>
}

export default ImageCard;
