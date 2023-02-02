import { useState } from "react";
import "./ImageCarousel.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const ImageCarousel = ({ images, displayDelete, deleteImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const incrementIndex = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const decrementIndex = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(images.length - 1);
    }
  };
  return (
    <div className={displayDelete ? "image-carousel image-carousel__sm" : "image-carousel"}>
      {displayDelete && <button onClick={() => deleteImages(images[currentIndex])} className="image-carousel__delete">Delete</button>}
      <button onClick={decrementIndex} className="image-carousel__btn">
        <ArrowLeftIcon fontSize="large" />
      </button>
      <img className="image-carousel__img" src={images[currentIndex]} alt="" />
      <button onClick={incrementIndex} className="image-carousel__btn">
        <ArrowRightIcon fontSize="large" />
      </button>
      {images.length < 1 && (
        <p className="image-carousel__msg">No Images Available</p>
      )}
    </div>
  );
};

export default ImageCarousel;
