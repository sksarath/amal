import React from "react";
import "./listItem.scss";
import shareIcon from "../../images/share-icon.svg";
import linkIcon from "../../images/link-icon.svg";
const ListItem = props => {
  const { data } = props;
  return (
    <div>
      <div className="indiv-item-wrapper">
        <div className="content-text">
          <i>{data.movie_rank}</i>
        </div>
        <div className="content-body">
          <div className="movie-info">
            <h2 className="item-heading">{data.movie_name}</h2>
            <label className="item-sub-text">{data.movie_releaseDate}</label>
          </div>
          <div className="social-info">
            <div className="views-count">{data.movie_viewCount} Views</div>
            <div className="text-right">
              <a href={data.movie_aboutLink} target="_blank" className="link-icon icon-spacing">
                <img src={linkIcon} />
              </a>
              <a href={data.movie_shareLink} target="_blank" className="link-icon">
                <img src={shareIcon} />
              </a>
            </div>
          </div>
        </div>
        <div className="content-image">
          <div
            className="banner"
            alt="movie poster"
            style={{ backgroundImage: `url(${data.movie_poster})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default ListItem;
