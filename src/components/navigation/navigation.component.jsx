import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import "./navigation.styles.scss";
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
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={MainLogo} alt="rakxas-logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          {/* Link basically works like anchor tag */}
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SignIn
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
