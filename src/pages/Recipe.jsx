import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Recipe = () => {
  const { pageName } = useParams(); // Get the pageName from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/recipes.json")
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((item) => item.pageName === pageName);
        setRecipe(foundRecipe || null);
      })
      .catch((error) => console.error("Error fetching recipes:", error));
  }, [pageName]);

  if (!recipe) {
    return (
      <div className="loading-container">
        <p>Loading recipe...</p>
      </div>
    );
  }

  return (
    <div className="recipe-details-page" style={{ marginTop: 0, paddingTop: 0 }}>
      {/* Breadcrumb */}
      <div className="breadcrumb-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">
                    <i className="fa fa-home"></i>
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/recipes">Recipes</Link>
                </li>
                <li
                  className="breadcrumb-item active"
                  aria-current="page"
                  style={{ textTransform: "capitalize" }}
                >
                  {recipe.title}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Recipe Content */}
      <div className="recipe-details-container" style={{ paddingTop: 80 }}>
        <div className="container-fluid">
          <div className="row">
            {/* Left Content */}
            <div className="col-sm-7">
              <div className="left-content">
                {/* Recipe Image */}
                <div className="recipe-big-thumb">
                  <img
                    className="img-fluid"
                    src={recipe.image}
                    alt={recipe.title}
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                </div>

                {/* Recipe Method */}
                <div className="recipe-text-container desktop">
                  <div className="title">
                    <h2>METHOD</h2>
                  </div>
                  <ol>
                    {recipe.method.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>

                  {/* Conditionally Render Notes */}
                  {recipe.notes && recipe.notes.length > 0 && (
                    <>
                      <p>
                        <strong>NOTES:</strong>
                      </p>
                      {recipe.notes.map((note, index) => (
                        <p key={index}>{note}</p>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-sm-5">
              <div className="right-content">
                {/* Recipe Title */}
                <div className="recipe-title">
                  <h2>{recipe.title}</h2>
                </div>

                {/* Nutritional Information */}
                <div className="nutritional-information">
                  <div className="nutritional-information-item">
                    <p>Calories</p>
                    <h5>{recipe.nutritionalInformation.calories}</h5>
                  </div>
                  <div className="nutritional-information-item">
                    <p>Protein</p>
                    <h5>
                      {recipe.nutritionalInformation.protein}
                      <sub>g</sub>
                    </h5>
                  </div>
                  <div className="nutritional-information-item">
                    <p>Carbs</p>
                    <h5>
                      {recipe.nutritionalInformation.carbs}
                      <sub>g</sub>
                    </h5>
                  </div>
                  <div className="nutritional-information-item">
                    <p>Fat</p>
                    <h5>
                      {recipe.nutritionalInformation.fat}
                      <sub>g</sub>
                    </h5>
                  </div>
                </div>

                {/* Preparation Time & Servings */}
                <div className="recipe-preparation">
                  <div className="stat-value">
                    <span className="text">
                      <span className="number">
                        {recipe.preparationTime.split(" ")[0]}
                      </span>{" "}
                      {recipe.preparationTime.split(" ")[1]}
                    </span>
                  </div>
                  <div className="stat-unit">
                    <span className="text">
                      <span className="number">{recipe.servings}</span> servings
                    </span>
                  </div>
                </div>

                {/* Ingredients */}
                <div className="ingredients">
                  <h3 className="title">INGREDIENTS</h3>
                  <div className="ingredients-content">
                    <ul>
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile View */}
            <div className="col-sm-12">
              <div className="recipe-text-container mobile">
                <div className="title">
                  <h2>METHOD</h2>
                </div>
                <ol>
                  {recipe.method.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>

                {/* Conditionally Render Notes */}
                {recipe.notes && recipe.notes.length > 0 && (
                  <>
                    <p>
                      <strong>NOTES:</strong>
                    </p>
                    {recipe.notes.map((note, index) => (
                      <p key={index}>{note}</p>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
