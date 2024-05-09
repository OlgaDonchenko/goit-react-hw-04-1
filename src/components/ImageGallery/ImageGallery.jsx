import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images, onImgClick }) {
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onImgClick={onImgClick} />
        </li>
      ))}
    </ul>
  );
}
