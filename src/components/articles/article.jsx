import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="gpt3_blog-container-article">
      <div className="gpt3_blog-container-article-img">
        <img src={imgUrl} alt="Blog Image" />
      </div>
      <div className="gpt3_blog-container-article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
