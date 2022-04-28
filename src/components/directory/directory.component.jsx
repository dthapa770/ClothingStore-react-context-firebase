import CategoryItem from "../category-item/category-item.component";
import { CategoriesContainer } from "./directory.styles";

const DirectoryContent = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
};

export default DirectoryContent;
