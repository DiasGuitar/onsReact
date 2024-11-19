import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/articles.json") // Ensure the path is correct
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  return (
    <div className="page-content">
      <div className="article-page">
        {/* Breadcrumb */}
        <div className="breadcrumb-container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">
                      <i className="fa fa-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Articles
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Page Title */}
        <div className="page-title">
          <h2>Articles</h2>
        </div>

        {/* Articles List */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="article-container">
                {/* Number of Articles */}
                <div className="number-of-articles">
                  <p>{articles.length} Articles</p>
                </div>

                {/* Articles */}
                <div className="article-items">
                  {articles.map((article) => (
                    <article className="article-item" key={article.pageName}>
                      <Link to={`/article/${article.pageName}`}>
                        <div className="article-thumb">
                          <div
                            className="thumb"
                            style={{
                              backgroundImage: `url(${article.image})`,
                            }}
                          ></div>
                        </div>
                        <div className="article-meta">
                          <ul>
                            <li className={`category cat-${article.category.toLowerCase()}`}>
                              {article.category}
                            </li>
                            <li className="reading-time">
                              <span className="text">
                                <span className="number">
                                  {article.readTime.split(" ")[0]}
                                </span>{" "}
                                min read
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="article-title">
                          <h2>{article.title}</h2>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
