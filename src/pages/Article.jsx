import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Article = () => {
  const { pageName } = useParams(); // Fetch the dynamic article based on pageName
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch("/articles.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch articles");
        return response.json();
      })
      .then((data) => {
        const foundArticle = data.find((item) => item.pageName === pageName);
        setArticle(foundArticle || null);
      })
      .catch((error) => console.error("Error loading articles:", error));
  }, [pageName]);

  if (!article) {
    return (
      <div className="loading-container">
        <p>Loading article...</p>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      {/* Breadcrumb */}
      <div className="breadcrumb-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <ol className="breadcrumb" style={{marginTop: 80}}>
                <li className="breadcrumb-item">
                  <Link to="/">
                    <i className="fa fa-home"></i>
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/articles">Articles</Link>
                </li>
                <li
                  className="breadcrumb-item active"
                  aria-current="page"
                  style={{ textTransform: "capitalize" }}
                >
                  {article.title}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="page-content">
        <div className="article-details-page">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="article-details-container">
                  {/* Article Header */}
                  <div className="article-big-thumb">
                    <img
                      className="img-fluid"
                      src={article.image}
                      alt={article.title}
                    />
                  </div>
                  <div className="publish-date">
                    <p>{article.publishDate}</p>
                  </div>
                  <div className="article-title">
                    <h2>{article.title}</h2>
                  </div>
                  <div className="article-meta">
                    <ul>
                      <li
                        className={`category cat-${article.category.toLowerCase()}`}
                      >
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

                  {/* Article Content */}
                  <div className="article-text-container">
                    {article.content.map((section, index) => (
                      <div key={index}>
                        {section.heading && <h3>{section.heading}</h3>}
                        <p>{section.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
