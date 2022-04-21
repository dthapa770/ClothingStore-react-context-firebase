import "./category-item.styles.scss";
import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  return (
    <div key={category.id} className="category-containers">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${category.imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>
          <Link to={`/shop/${category.title}`}>
            {category.title}
            <p>Shop Now</p>
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default CategoryItem;
