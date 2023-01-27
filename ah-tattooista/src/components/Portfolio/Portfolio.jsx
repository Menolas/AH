import React from 'react';
import { connect } from 'react-redux/es/exports';
import Advertisement from './Advertisement';
import Gallery from './Gallery';
import TattooStyles from './TattooStyles';
import { getTattooStyles, getGalleryItems, setActiveStyle, setActiveGallery,changeActiveStyle, showGalleryLargeImage, closeGalleryLargeImage } from '../../redux/portfolio-reducer';

class Portfolio extends React.Component {

  componentDidMount() {
    //debugger;
    this.props.getTattooStyles();
    /* if (!this.props.activeStyle || Object.keys(this.props.activeStyle).length === 0) {
      this.props.setActiveStyle(this.props.tattooStyles[0]);
      this.props.getGalleryItems(this.props.tattooStyles[0]);
      
    } else {
      this.props.getGalleryItems(this.props.activeStyle);
    } */
  }
  
  render = () => {
    return (
      <main className="site-main">
        <TattooStyles
          tattooStyles={this.props.tattooStyles}
          activeStyle={this.props.activeStyle}
          changeActiveStyle={this.props.changeActiveStyle}
        />
        <Advertisement />
        <Gallery
          isFetching={this.props.isFetching}
          activeStyle={this.props.activeStyle}
          activeGallery={this.props.activeGallery}
          imgLargeUrl={this.props.imgLargeUrl}
          showGalleryLargeImage={this.props.showGalleryLargeImage}
          closeGalleryLargeImage={this.props.closeGalleryLargeImage}
        />
      </main>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isFetching: state.portfolio.isFetching,
    tattooStyles: state.portfolio.tattooStyles,
    activeStyle: state.portfolio.activeStyle,
    activeGallery: state.portfolio.activeGallery,
    imgLargeUrl: state.portfolio.imgLargeUrl,
  };
}

export default connect(mapStateToProps, {
    getTattooStyles,
    getGalleryItems,
    setActiveStyle,
    setActiveGallery,
    changeActiveStyle,
    showGalleryLargeImage,
    closeGalleryLargeImage
  })(Portfolio);
