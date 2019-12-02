import React from "react";
import shareIcon from "../../images/share-icon.svg";
import linkIcon from "../../images/link-icon.svg";
import "./cardItem.scss";

const CardItem = props => {
  const { data } = props;
  return (
    <div className="indiv-card-item-wrapper">
      <div className="image-holder">
        <div className="banner" alt="movie poster" style={{backgroundImage: `url(${data.movie_poster})`}}>
        </div>
      </div>
      <div className="content-wrapper">
        <h3 className="content-title">{data.movie_update}</h3>
        <div className="content-body">
          <label>{data.source}</label>
          <div className="">
            <a href={data.movie_aboutLink} target="_blank" className="link-icon icon-spacing">
              <img src={linkIcon} alt="movie link" />
            </a>
            <a href={data.movie_shareLink} target="_blank" className="link-icon">
              <img src={shareIcon} alt="share link" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardItem;
