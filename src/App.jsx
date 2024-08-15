import { useState } from "react";
import "./App.css";
import fetchImagesWithQuery from "./components/js/searchImagesApi";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {
  const [showGalleryImages, setShowGalleryImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onSearch = async (query) => {
    try {
      console.log("перед запитом", { showGalleryImages });
      setError(false);
      setLoading(true);
      const images = await fetchImagesWithQuery(query);
      setShowGalleryImages(images);
      console.log("після запиту", { showGalleryImages });
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  async function showMore() {}
  return (
    <>
      <SearchBar onSearch={onSearch} />
      <Loader status={loading} />
      {error && <ErrorMessage error={error} />}

      {/* <ImageGallery showGalleryImages={showGalleryImages} showMore={showMore} />
      {showGalleryImages.length !== 0 && <LoadMoreBtn showMore={showMore} />} */}
    </>
  );
}

export default App;
