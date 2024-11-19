import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipes from the JSON file
    fetch("/recipes.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <div className="page-wrapper">
      <div className="page-content">
        {/* Recipe Page Content */}
        <div className="recipe-page">
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
                      Recipes
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* Page Title */}
          <div className="page-title">
            <h2>Recipes</h2>
          </div>
          {/* Recipe List */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="article-container">
                  {/* Number of Recipes */}
                  <div className="number-of-articles">
                    <p>{recipes.length} Recipes</p>
                  </div>
                  <div className="article-items">
                    {recipes.map((recipe) => (
                      <article className="article-item" key={recipe.id}>
                        <Link to={`/recipe/${recipe.pageName}`}>
                          <div className="article-thumb">
                            <div
                              className="thumb"
                              style={{
                                backgroundImage: `url(${recipe.image})`,
                              }}
                            ></div>
                          </div>
                          <div className="article-meta">
                            <ul>
                              <li className="category">{recipe.category}</li>
                              <li className="reading-time">
                                <span className="text">{recipe.preparationTime}</span>
                              </li>
                              <li className="calories">
                                <span className="text">{recipe.nutritionalInformation.calories} kcal</span>
                              </li>
                            </ul>
                          </div>
                          <div className="article-title">
                            <h2>{recipe.title}</h2>
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
    </div>
  );
};

export default Recipes;
