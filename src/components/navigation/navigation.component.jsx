import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
  Logo,
} from "./navigation.styles";
import MainLogo from "../../assets/rakxas.png";
import { UserContext } from "../contexts/user-context";
import { CartContext } from "../contexts/cart.context";
import { signOutUser } from "../../utils/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo as="img" src={MainLogo} alt="rakxas-logo" />
        </LogoContainer>
        <NavLinks>
          {/* Link basically works like anchor tag */}
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SignIn</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
