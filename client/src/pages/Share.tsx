import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state/index';
import { ActionType } from '../state/action-types';

const Share = () => {
  const products = useSelector((state: State) => state.items);
  const dispatch = useDispatch();

  const { fetchItems } = bindActionCreators(actionCreators, dispatch);
  React.useEffect(() => {
    fetchItems();
    console.log(products);
  }, []);

  const foodList = products.item.map(
    ({ image, title, address, time }, index) => (
      <article className="card-container">
        <div>
          <img className="card-photo" src={image} alt="" />
        </div>
        <div>
          <h2>{title}</h2>
          <div>{address}</div>
          <div>{time}</div>
        </div>
      </article>
    ),
  );

  return (
    <div style={{ padding: '0 68px' }}>
      <h1>내 주변 식료품 공유</h1>
      <button>포스팅하기</button>
      <div className="card-section">{foodList}</div>
    </div>
  );
};

export default Share;
