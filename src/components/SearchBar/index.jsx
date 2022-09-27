import { useRef, useState } from "react";
import PropTypes from "prop-types";
import SearchIcon from "../Icons/SearchIcon";
import {
  filterProductListBySearchInput,
  getSearchBarMessage,
} from "src/utils/search";

const SearchBar = ({ initialProductList, handleOnUpdateProductList }) => {
  const timeoutId = useRef(null);
  const [resultMessage, setResultMessage] = useState("");
  const handleOnChange = (event) => {
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      const finalList = filterProductListBySearchInput(
        event.target.value,
        initialProductList
      );

      setResultMessage(getSearchBarMessage(event.target.value, finalList));
      handleOnUpdateProductList(finalList);
      clearTimeout(timeoutId.current);
    }, 400);
  };

  return (
    <div className="grid md:inline-flex text-gray-600 gap-4 place-items-center">
      <div className="relative mx-auto w-full md:w-auto">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none w-[inherit]"
          type="search"
          onChange={handleOnChange}
          placeholder="Search by brand,model"
          aria-label="Search for an smartphone"
        />
        <div className="absolute right-3 top-0 bottom-0 grid place-items-center">
          <SearchIcon />
        </div>
      </div>

      <span aria-label="Total search results">{resultMessage}</span>
    </div>
  );
};
export default SearchBar;
SearchBar.propTypes = {
  handleOnUpdateProductList: PropTypes.func,
  initialProductList: PropTypes.array,
};
