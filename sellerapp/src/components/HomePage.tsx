

export const HomePage = () => {
    return (
      <>
        <div className="app-bar">
          <h5>IT Cafeteria</h5>
          <div className="customer-picture"></div>
        </div>
        <div className="button-container">
          <button className="rounded-button">See Report</button>
          <button className="rounded-button">Edit Store</button>
          <button className="rounded-button">Edit Menu</button>
        </div>
        <div className="button-group">
          <button className="big-rounded-button">Open Store</button>
        </div>
      </>
    );
  };