import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ showGalleryImages }) => {
  return (
    <>
      <ul className={css.list}>
        {showGalleryImages.map(({ id, src, alt }) => (
          <li key={id}>
            <ImageCard src={src} alt={alt} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default ImageGallery;
