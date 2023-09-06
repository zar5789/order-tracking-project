import { Link } from "react-router-dom";
import { AppBar } from "./AppBar";
import { useState, useEffect } from "react";

interface MenuItem {
  _id: string;
  name: string;
  price: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export const Menulist = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch(
          "https://order-api-patiparnpa.vercel.app/products"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setMenuItems(data);
        setLoading(false); // Data loading is complete
      } catch (error) {
        console.error("Error fetching menu items:", error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <>
      <AppBar></AppBar>
      <br></br>
      <div className="menu-list-container">
        <h1>Menu List</h1>
        <Link to={'/createmenu'} className="add-button">Add New Menu</Link>

        {/* Display loading indicator if data is still loading */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="menu-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {menuItems.map((menu) => (
                <tr key={menu._id}>
                  <td>{menu._id}</td>
                  <td>
                    <img
                      src="https://static.thairath.co.th/media/dFQROr7oWzulq5FZUEKlkIouH7Ikr7Q5kyHCSMNE65otAuk9Wh6Wmo3yxZpIMRDET1g.jpg"
                      alt={menu.name}
                      className="menu-image"
                    />
                  </td>
                  <td>{menu.name}</td>
                  <td>{menu.price}</td>
                  <td>{menu.status}</td>
                  <td>
                    <Link to={`/editmenu/${menu._id}`} className="edit-button">
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};