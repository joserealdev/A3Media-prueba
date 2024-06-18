import { BreedImagesResponse, DogCeoAllResponse } from "@/types/responses";
import { baseFetch } from "./apiUtils";

const fetchAll = async (): Promise<DogCeoAllResponse> => {
  return baseFetch("/breeds/list/all");
};

const fetchImagesByBreed = async (
  breed: string
): Promise<BreedImagesResponse> => {
  return baseFetch(`/breed/${breed}/images`);
};

const dogCeoApi = {
  fetchAll,
  fetchImagesByBreed,
};

export default dogCeoApi;
