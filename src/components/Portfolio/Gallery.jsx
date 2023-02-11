import React from 'react';
import Preloader from '../common/Preloader';

const Gallery = (props) => {

  const GalleryItem = (props) => {
    return (
      <li
        className="gallery__item"
        onClick={() => { props.showGalleryLargeImage(props.imgUrl) }}
        style={{ backgroundImage: `url("../gallery/${props.activeStyle.value}/${props.item.fileName}")` }}
      ></li>
    );
  }

  const GalleryItemsArray = props.activeGallery.map(item => {

    return (
      <GalleryItem
        key={item._id}
        imgUrl={`../gallery/${props.activeStyle.value}/${item.fileName}`}
        item={item}
        activeStyle={props.activeStyle}
        showGalleryLargeImage={props.showGalleryLargeImage}
      />
    )
  });

  return (
    <>
      { props.isFetching ? <Preloader/> : null }
      <section className="gallery page-block container">
        <ul className="gallery__list list">
          { GalleryItemsArray }
        </ul>
        {
          props.imgLargeUrl &&
          <div className="gallery__large-wrap modal-wrap">
            <div className="gallery__large">
                <button className="close-btn gallery__item-close-btn" onClick={() => { props.closeGalleryLargeImage() }}></button>
              <img src={props.imgLargeUrl} alt={props.activeStyle.value} />
            </div>
          </div>
        }
      </section>
    </>
  );
}

export default Gallery;
