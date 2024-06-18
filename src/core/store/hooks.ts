import { createSelector } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const breedImagesSelector = (breed: string) =>
  createSelector(
    [(state: RootState) => state.global.images],
    (images) => images[breed] || []
  );

export const isLoadingSelector = () =>
  createSelector(
    [
      (state: RootState) => state.global.fetchAllStatus,
      (state: RootState) => state.global.fetchImagesStatus,
    ],
    (fetchAllStatus, fetchImagesStatus) =>
      [fetchAllStatus, fetchImagesStatus].indexOf("loading") !== -1
  );
