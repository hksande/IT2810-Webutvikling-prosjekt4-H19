import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
import List from "./List";

/* Container component for the productslist*/
export default ListContainer = props => {
  const [favs, setFavs] = useState([]);

  /* Fetches favorites from Async storage on mount */
  useEffect(() => {
    const fetchData = async () => {
      let favs = await AsyncStorage.getItem("product_key");
      favs = JSON.parse(favs);
      favs = Array.isArray(favs) ? favs : [];
      setFavs(favs);
    };

    fetchData();
  }, []);

  /* Passes favorites from Async storage down to productslist */
  return <List favs={favs} {...props} />;
};
