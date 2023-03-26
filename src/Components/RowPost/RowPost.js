import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../constants";

function RowPost(props) {
  const [originals, setOriginals] = useState([]);
  useEffect(() => {
    axios
      .get(`discover/tv?api_key=${API_KEY}&with_networks=213`)
      .then((res) => {
        console.log(res.data);
        setOriginals(res.data.results);
      })
      .catch((err) => {
        // alert("Network Error");
      });
  }, []);

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {originals.map((obj) =>
          <img
            className={props.isSmall ? "smallPoster" : "poster"}
            src={`${imageUrl + obj.backdrop_path}`}
            alt="poster"
          />
        )}
      </div>
    </div>
  );
}

export default RowPost;
