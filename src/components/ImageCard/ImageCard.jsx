export default function ImageCard({ onImgClick, image }) {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.description}
        onClick={() =>
          onImgClick(
            image.urls.regular,
            image.description,
            image.user.name,
            image.likes
          )
        }
      />
    </div>
  );
}
