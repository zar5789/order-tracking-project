import React from 'react';
import FavoriteMenu from './FavoriteMenu'; // Import the FavoriteMenu component

function MenuPage() {
  const favoriteMenus = [
    {
      title: 'กระเพราหมูหรอบ ไข่ดาว 3 พอง',
      price: 50,
      store: 'ร้านพี่ช้าง',
      imageUrl: 'https://s359.kapook.com/pagebuilder/2cc482f6-9e80-488f-9e0a-87103f16b40d.jpg',
    },
    {
      title: 'อาหารตามสั่ง กุ้งกระเบื้องน้ำปลา',
      price: 70,
      store: 'ร้านพี่หมาย',
      imageUrl: 'https://s359.kapook.com/pagebuilder/2cc482f6-9e80-488f-9e0a-87103f16b40d.jpg',
    },
    // Add more menu items here
  ];

  return (
    <div>
      <br></br>
      <FavoriteMenu menus={favoriteMenus} />
    </div>
  );
}

export default MenuPage;