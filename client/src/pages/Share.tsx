import React from 'react';

const Share = () => {
  const [foodItems, setFoodItems] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:3000/grocery.json')
      .then((res) => res.json())
      .then((data) => setFoodItems(data));
  }, []);

  const foodList = foodItems.map(({ photo, title, address, time }, index) => (
    <article className="card-container">
      <div>
        <img className="card-photo" src={photo} alt="" />
      </div>
      <div>
        <h2>{title}</h2>
        <div>{address}</div>
        <div>{time}</div>
      </div>
    </article>
  ));

  return (
    <div style={{ padding: '0 68px' }}>
      <h1>내 주변 식료품 공유</h1>
      <div className="card-section">{foodList}</div>
    </div>
  );
};

export default Share;
