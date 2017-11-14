import React from "react";
import { connect } from "react-redux";
import { favoriteRecipe } from "../actions";

const RecipeItem = ({ recipe }) => {
  const { title, href, ingredients, thumbnail } = recipe;
  return (
    <div className="recipe-item">
      <div onClick={() => this.props.favoriteRecipe(recipe)} >
        &#9734;
      </div>
      <div className="recipe-title">
        <a href={href} target="_blank">
          <h4>{title}</h4>
        </a>
        <p className="recipe-text">{ingredients}</p>
      </div>
      <img src={thumbnail} alt={title} className="recipe-img" />
    </div>
  );
};

export default connect(null, { favoriteRecipe })(RecipeItem);
