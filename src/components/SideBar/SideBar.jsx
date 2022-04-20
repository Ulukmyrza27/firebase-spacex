import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import "../SideBar/SideBar.css";
import Cart from "../Cart/Cart";

export default class SideBar extends React.Component {
  state = {
    menuOpen: false,
  };

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <Menu
        right
        className="burger"
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/mission"
        >
          MISSION
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/launches"
        >
          LAUNCHES
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/careers"
        >
          CAREERS
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/updates"
        >
          UPDATES
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/products"
        >
          SHOP
        </Link>
        {/* <div className="sidebar-menu-item"> */}
        <br />

        <Link onClick={() => this.closeMenu()} className="menu-item" to="/">
          Falcon - 9
        </Link>

        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/falcon"
        >
          Falcon HEAVY
        </Link>

        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/starship"
        >
          Starship
        </Link>

        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/human"
        >
          Human Spaceflight
        </Link>

        <Link onClick={() => this.closeMenu()} className="menu-item" to="/">
          Rideshare
        </Link>
        {/* <div className="sidebar-login">
          <Login />
        </div> */}
        {/* </div> */}
        <br />
        <Link onClick={() => this.closeMenu()} className="menu-item" to="/cart">
          Cart
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/favorites"
        >
          Favorites
        </Link>
      </Menu>
    );
  }
}
