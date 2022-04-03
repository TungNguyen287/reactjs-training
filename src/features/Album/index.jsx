import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Nhạc Hoa Thịnh Hành",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/1/7/b/b/17bbe40f5152720e7374d20cf2c6fdb2.jpg",
    },
    {
      id: 2,
      name: "Nhạc Hoa",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/3/8/9/5389aba39b0601344d07cda307abf4e9.jpg",
    },
    {
      id: 3,
      name: "Nhạc Việt Thịnh Hành",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/0/2/5/f/025feb1ab82dcb158ff59ccbccb73249.jpg",
    },
  ];
  return (
    <div>
      <h2>Có thể nghe</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
