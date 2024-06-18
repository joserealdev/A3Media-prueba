import { setSelectedBreed } from "@core/store/globalSlice";
import { useAppDispatch, useAppSelector } from "@core/store/hooks";
import Select from "react-select";

interface Option {
  value: string;
  label: string;
}

const Dropdown = () => {
  const dispatch = useAppDispatch();
  const breeds = useAppSelector((state) => state.global.breeds);

  const handleBreedChange = (selectedOption: Option | null) => {
    if (selectedOption) {
      dispatch(setSelectedBreed(selectedOption.value));
    }
  };

  const breedOptions = breeds.map((breed) => ({
    value: breed,
    label: breed,
    ["data-cy"]: `Option-${breed}`,
  }));

  return (
    <Select
      data-cy="dropdown-cy"
      options={breedOptions}
      styles={{
        menuList: (base) => ({
          ...base,
          color: "black",
          textTransform: "capitalize",
        }),
        singleValue: (base) => ({
          ...base,
          textTransform: "capitalize",
        }),
        container: (base) => ({
          ...base,
          width: "400px",
        }),
      }}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: "var(--primary)",
          primary: "var(--secondary)",
        },
      })}
      onChange={handleBreedChange}
      isSearchable
      isLoading={breeds.length < 1}
      placeholder="Select breed..."
    />
  );
};

export default Dropdown;
