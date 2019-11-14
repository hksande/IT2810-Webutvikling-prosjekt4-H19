import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
import List from "./List";

export default ListContainer = props => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let favs = await AsyncStorage.getItem("product_key");
      favs = JSON.parse(favs);
      favs = Array.isArray(favs) ? favs : [];
      setFavs(favs);
    };

    fetchData();
  }, []);

  const favStr = favs.toString();
  console.log("Startfavs: ", favStr);

  return <List favs={favs} {...props} />;
};
