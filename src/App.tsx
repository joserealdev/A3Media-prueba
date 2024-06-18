import CenterWrapper from "@components/CenterWrapper";
import ImageGallery from "@components/Gallery";
import Header from "@components/Header";
import Loading from "@components/Loading";
import { fetchAllDogs, fetchImagesByBreed } from "@core/store/globalSlice";
import {
  breedImagesSelector,
  isLoadingSelector,
  useAppDispatch,
  useAppSelector,
} from "@core/store/hooks";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(isLoadingSelector());
  const selectedBreed = useAppSelector((state) => state.global.selectedBreed);
  const images = useAppSelector(breedImagesSelector(selectedBreed));

  useEffect(() => {
    dispatch(fetchAllDogs());
  }, [dispatch]);

  useEffect(() => {
    if (selectedBreed.length > 0) {
      dispatch(fetchImagesByBreed(selectedBreed));
    }
  }, [dispatch, selectedBreed]);

  return (
    <>
      <Header />
      {isLoading ? <Loading /> : <ImageGallery images={images} />}
      {!isLoading && !selectedBreed && (
        <CenterWrapper data-cy="select-breed-msg">
          Please select one breed to see images
        </CenterWrapper>
      )}
    </>
  );
}

export default App;
