import React from 'react';

interface Menu {
  title: string;
  price: number;
  store: string;
  imageUrl: string;
}

interface FavoriteMenuProps {
  menus: Menu[];
}

function FavoriteMenu(props: FavoriteMenuProps) {
  const { menus } = props;

  return (
    <div className="favorite-menu-container">
      <h5>Favorite Menu</h5>
      <div className="menu-row">
        {menus.map((menu, index) => (
          <div key={index} className="menu-card">
            <img src={menu.imageUrl} className="menu-img1" alt={menu.title} />
            <div className="menu-details">
              <h5 className="menu-title">{menu.title}</h5>
              <p className="menu-price">{menu.price} บาท</p>
              <h5>{menu.store}</h5>
              <a href="#" className="btn btn-primary">
                Order
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoriteMenu;