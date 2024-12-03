import _ from "lodash";
import { setFilterData, setSearchTerm } from "../redux/actions";

export const debounceFn = (cb, delay = 500) => _.debounce(cb, delay);

export const filteredData = (e, dispatch, data) => {
  dispatch(setSearchTerm(e.target.value));
  const filterData = data.filter((item) => {
    return item.name.toLowerCase().includes(e.target.value.toLowerCase());
  });
  console.log({ filterData });
  dispatch(setFilterData(filterData));
};
