import { CartItemContainer, ItemDetails, Item } from "./cart-item.styles";
const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Item>{name}</Item>
        <Item>
          {quantity} x {price}
        </Item>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
