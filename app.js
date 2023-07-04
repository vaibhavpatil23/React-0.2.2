import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          alt=""
        />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Card</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurentCard = () => {
  return (
    <div className="rest-card">
      <img
      className="rest-logo"
       src="https://images.pexels.com/photos/313716/pexels-photo-313716.jpeg" alt="" />
      <h3>Meghana Food</h3>
      <h4>Biryani, North Indian,Asian</h4>
      <h4>4.4 start</h4>
      <h4>38 minuts</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
      <RestaurentCard />
      <RestaurentCard />
      <RestaurentCard />
      <RestaurentCard />
      <RestaurentCard />
      <RestaurentCard />
      <RestaurentCard />
      <RestaurentCard />
      <RestaurentCard />
      <RestaurentCard />
      <RestaurentCard />
      <RestaurentCard />
      <RestaurentCard />
      <RestaurentCard />
      <RestaurentCard />
      <RestaurentCard />
      <RestaurentCard />
      <RestaurentCard />
      <RestaurentCard />
      <RestaurentCard />
      <RestaurentCard />
      <RestaurentCard />
      <RestaurentCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
