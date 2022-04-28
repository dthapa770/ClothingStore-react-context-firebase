import {
  BackgroundImage,
  Body,
  CategoryItemContainer,
} from "./category-item.styles";
import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <CategoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>
          <Link to={`/shop/${category.title}`}>
            {title}
            <p>Shop Now</p>
          </Link>
        </h2>
      </Body>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
