import { useEffect, useState } from "react";
import { searchImages } from "../../searcherImages-api";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { Toaster, toast } from "react-hot-toast";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const [modal, setModal] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const openModal = (url) => {
    if (images.length === 0) {
      toast.error("Please load images first!");
      return;
    }
    setImageUrl(url);
    toggle();
  };

  const toggle = () => {
    setModal(!modal);
  };

  const onSubmit = (newImage) => {
    setQuery(newImage);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getImages() {
      try {
        setIsLoading(true);
        const data = await searchImages(query, page);
        setImages((prevImages) => {
          return [...prevImages, ...data.results];
        });
        console.log(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [page, query]);

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery onImgClick={openModal} images={images} />
      )}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <Toaster />
      {modal && (
        <ImageModal
          imageUrl={imageUrl}
          imgModal={modal}
          item={images}
          onModalClose={toggle}
        />
      )}
    </>
  );
}
