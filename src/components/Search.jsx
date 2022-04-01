import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getData } from "../Redux/Results/resultActions";
import { useDebounce } from "use-debounce";
import Links from "./Links";
import { setLoading } from '../Redux/Loading/loadingActions';

const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

const Search = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const loading = useSelector(state=>state.loading.loading)

  // const [searchTerm, setSearchTerm] = useState("manchester united");
  const [text, setText] = useState("");

  const [debouncedValue] = useDebounce(text, 300);

  // useEffect(() => {
  //   if (debouncedValue) {
  //     setText(debouncedValue);
  //   }
  // }, [debouncedValue]);
  

  //fetch data from Api
  const fetchResults = async (type) => {
    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
      },
    });
    const data = await response.json();
    if (type.includes("/news")) {
      dispatch(getData(data.entries));
    } else if (type.includes("/image")) {
      dispatch(getData(data.image_results));
    } else {
      dispatch(getData(data.results));
    }
      dispatch(setLoading());
  };

  useEffect(() => {
     if (debouncedValue) {
       setText(debouncedValue);
     }
    
    if (text) {
      fetchResults(`${location.pathname}/q=${text}&num=40`);
    }
  

  }, [debouncedValue, location.pathname]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black  hover:shadow-lg"
        placeholder="search..."
      />
      {text && (
        <button
          type="button"
          className="absolute top-2.5 right-4 text-xl text-gray-500 "
          onClick={() => setText("")}
        >
          X
        </button>
      )}

      <Links />
    </div>
  );
};

export default Search;
