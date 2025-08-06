import Container from "../common/Container";
import React from "react";
import Logo from "../common/Logo";
import SearchBar from "./SearchBar";
import Offers from "./Offers";
import Deal from "./Deal";
import CartIcon from "./CartIcon";
import Account from "./Account";
import MobileMenu from "./MobileMenu";

function Header() {
  return (
    <header className="sticky top-0 py-5 bg-tech_bg_dark text-tech_bg_white/80 backdrop:blur-md">
      <Container className="flex items-center justify-between gap-5">
        <div className="flex items-center justify-start gap-2.5  lg:gap-0">
          <MobileMenu />
          <Logo />
        </div>
        <div className="flex items-center gap-5 lg:flex-1">
          <SearchBar />
          <Offers />
          <Deal />
          <CartIcon />
          <Account />
        </div>
      </Container>
    </header>
  );
}

export default Header;
