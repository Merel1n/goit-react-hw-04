import css from "./ImageCard.module.css";
const ImageCard = ({ src, alt }) => {
  return (
    <div className={css.container}>
      <img src={src} alt={alt} />
    </div>
  );
};
export default ImageCard;
