import { isEmpty } from ".";

export const filterProductListBySearchInput = (
  inputValue = "",
  initialProductList = []
) => {
  if (isEmpty(initialProductList)) {
    /**
     * We will return an empty list if there is no correct data to work with
     */
    return [];
  } else if (isEmpty(inputValue)) {
    /**
     * We will return the initialProductList if no inputValue has been provided
     */
    return initialProductList;
  }
  const words = inputValue
    .trim()
    .replace(",", " ")
    .split(" ")
    .map((el) => el.toLowerCase());

  let finalList = [...initialProductList];

  words.forEach((word) => {
    finalList = finalList.filter((product) => {
      return (
        product.brand.toLowerCase().includes(word.toLowerCase()) ||
        product.model.toLowerCase().includes(word.toLowerCase())
      );
    });
  });
  return finalList;
};

export const getSearchBarMessage = (input, results = []) => {
  if (!input?.length) {
    return "";
  }
  switch (results.length) {
    case 0:
      return "No results found";
    default:
      return `Found ${results.length} result(s)`;
  }
};
