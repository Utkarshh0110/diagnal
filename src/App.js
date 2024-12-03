import React, { lazy, Suspense } from "react";
// import InfiniteScroll from "./Components/InfiniteScroll";
import { backImage, getData, getImages, searchImage } from "./constants";
import "./styles.css";
import Header from "./Components/Header";
import Cards from "./Components/Cards";
const InfiniteScroll = lazy(() => import("./Components/InfiniteScroll"));

export default function App() {
  return (
    <div>
      <Header
        getImages={getImages}
        backImage={backImage}
        searchImage={searchImage}
      />
      <Suspense
        fallback={
          <div>
            <div>Loading...</div>
          </div>
        }
      >
        <InfiniteScroll
          render={(searchTerm, data, filterData) => (
            <div className="cardsBox">
              {!searchTerm &&
                data.map((item, index) => {
                  return <Cards key={index} item={item} />;
                })}
              {searchTerm &&
                filterData.map((item, index) => {
                  return <Cards key={index} item={item} />;
                })}
              {/* {loading && hasMore && <div>Loading...</div>} */}
            </div>
          )}
          urlFn={getData}
        />
      </Suspense>
    </div>
  );
}
