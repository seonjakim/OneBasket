import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state/index';
import { ActionType } from '../state/action-types';

const Share = () => {
  const products = useSelector((state: State) => state.items);
  // const dispatch = useDispatch();
  // const { fetchItems } = bindActionCreators(actionCreators, dispatch);

  const foodList = products.item.map(
    ({ image, title, location, time }, index) => (
      <article key={index} className="card-container">
        <img className="card-photo" src={image} alt="" />
        <div className="card-content">
          <h2>{title}</h2>
          <div className="location">{location}</div>
          <div>{time}</div>
        </div>
      </article>
    ),
  );

  return (
    <div className="share-container">
      <h1>내 주변 식료품 공유</h1>
      <div className="card-section">{foodList}</div>
      <Link to="/posting">
        <button className="post-button">+</button>
      </Link>
    </div>
  );
};

export default Share;
