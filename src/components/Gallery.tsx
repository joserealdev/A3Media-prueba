import { useAppSelector } from "@core/store/hooks";
import { useState } from "react";
import styled from "styled-components";

interface Props {
  images: string[];
}

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 20px;
  margin: 0 auto;
  max-width: 1280px;
`;

const Image = styled.img<{ selected: boolean }>`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: ${({ selected }) =>
    selected ? "0px 0px 7px 3px var(--primary)" : "none"};
  transition: all 0.2s;
  background-color: var(--primary);
  &:hover {
    transition: all 0.2s;
    box-shadow: 0px 0px 7px 3px var(--primary);
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 7px 3px var(--primary);
  }
`;

const EnlargedImage = styled.img`
  max-width: 80%;
  max-height: 80%;
`;

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ImageGallery = ({ images }: Props) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const selectedBreed = useAppSelector((state) => state.global.selectedBreed);

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLImageElement>,
    index: number
  ) => {
    if (event.key === "Enter") {
      setEnlargedImage(images[index]);
    }
    if (event.key === "Backspace") {
      setEnlargedImage(null);
    }
  };

  const handleCloseModal = () => {
    setEnlargedImage(null);
    setSelectedImageIndex(null);
  };

  return (
    <main>
      <Gallery>
        {images.length > 0 &&
          images.map((image, index) => (
            <Image
              key={index}
              src={image}
              loading="lazy"
              alt={`${selectedBreed} ${index} photo`}
              tabIndex={0}
              selected={selectedImageIndex === index}
              onClick={() => setEnlargedImage(image)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              onFocus={() => setSelectedImageIndex(index)}
            />
          ))}
      </Gallery>
      {enlargedImage && (
        <Modal onClick={handleCloseModal}>
          <EnlargedImage src={enlargedImage} alt="Enlarged dog" />
        </Modal>
      )}
    </main>
  );
};

export default ImageGallery;
