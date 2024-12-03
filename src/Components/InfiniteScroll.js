import { useEffect, useState } from "react";
import Cards from "./Cards";
import { useDispatch, useSelector } from "react-redux";
import { dataFromApi } from "../redux/actions";

const InfiniteScroll = ({ urlFn, render }) => {
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const searchTerm = useSelector((state) => state.searchTerm);
  const filterData = useSelector((state) => state.filterData);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const url = urlFn(pageNumber);
      const response = await fetch(url);
      const { page } = await response.json();
      const data = page["content-items"]["content"];
      dispatch(dataFromApi(data));
      setHasMore(page["page-size-requested"] == page["page-size-returned"]);
      setLoading(false);
    };
    fetchData();
  }, [pageNumber]);

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        hasMore && setPageNumber((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return <>{render(searchTerm, data, filterData)}</>;
};

export default InfiniteScroll;
