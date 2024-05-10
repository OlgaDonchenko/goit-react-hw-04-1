import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, onImgClick }) {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li key={image.id} className={css.item}>
          <ImageCard image={image} onImgClick={onImgClick} />
        </li>
      ))}
    </ul>
  );
}
