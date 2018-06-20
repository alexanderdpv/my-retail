import React, { Component } from 'react';

class ItemImages extends Component {
  state = {
    currentIndex: 0,
    itemImages: []
  }

  constructor(props) {
    super(props);

    this.previousImage = this.previousImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.renderPreviousImage = this.renderPreviousImage.bind(this);
  }

  componentDidMount() {
    let itemImages = this.state.itemImages.slice(),
        thumbnailImages = [];

    // Add primary image
    this.props.images.map((image) => (
      image.PrimaryImage.map((primaryImage) => (
        itemImages.push(primaryImage.image)
      ))
    ));

    // Add alternate images
    this.props.images.map((image) => (
      image.AlternateImages.map((alternateImage) => (
        itemImages.push(alternateImage.image)
      ))
    ));
    this.setState({ itemImages });


    // Initialize thumbnails
    this.state.itemImages[this.state.thumbnailStartIndex];
    this.state.itemImages[this.state.thumbnailEndIndex]
  }

  previousImage() {
    if (this.state.currentIndex > 0) {
      this.setState({ currentIndex : this.state.currentIndex - 1 });
    }
  }

  nextImage() {
    if (this.state.currentIndex < this.state.itemImages.length - 1) {
      this.setState({ currentIndex : this.state.currentIndex + 1 })
    }
  }

  renderPreviousImage() {
    if (this.state.currentIndex - 1 >= 0) {
      return (
        <img className="item-images-thumbnail" src={this.state.itemImages[this.state.currentIndex - 1]}/>
      )
    }
  }

  renderNextImage() {
    if (this.state.currentIndex + 1 < this.state.itemImages.length) {
      return (
        <img className="item-images-thumbnail" src={this.state.itemImages[this.state.currentIndex + 1]}/>
      )
    }
  }

  render () {
    const { images, title } = this.props;

    return (
      <div className="item-images">
        <h2 className="item-images-title">{title}</h2>

        <img className="item-images-primary" src={this.state.itemImages[this.state.currentIndex]}/>

        <div className="item-images-zoom-container">
          <i className="fa fa-search-plus"></i>
          <div className="item-images-zoom-label">view larger</div>
        </div>

        <div className="item-images-thumbnails-container">
          <a href="#" onClick={this.previousImage}>
            <i className="item-images-chevron fa fa-chevron-left" ></i>
          </a>
          <div className="item-images-thumbnails">
            {this.renderPreviousImage()}
            <img className="item-images-thumbnail viewing" src={this.state.itemImages[this.state.currentIndex]}/>
            {this.renderNextImage()}
          </div>
          <a href="#" onClick={this.nextImage}>
            <i className="item-images-chevron fa fa-chevron-right"></i>
          </a>
        </div>
      </div>
    )
  }
}

export default ItemImages
