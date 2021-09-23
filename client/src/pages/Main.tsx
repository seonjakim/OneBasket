import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'gestalt';

const Main = () => {
  const history = useHistory();

  const setHistory = (endPoint: string) => {
    history.push(endPoint);
  };

  return (
    <>
      <div className="landpage-container">
        <nav className="nav-container">
          <span className="nav-item">About</span>
          <span onClick={() => setHistory('/register')} className="nav-item">
            Register
          </span>
        </nav>
        <div className="main-quote">
          <h1>멀리서 찾지 말고 주변을 둘러보세요</h1>
          <div>장바구니가 아닌 마음을 나눕니다.</div>
          <div>단기성이 아닌 커뮤니티 형성을 목적으로 합니다.</div>
          <div>
            <Button
              onClick={() => setHistory('/register')}
              color="blue"
              text="등록하러 갈래요"
            />
          </div>
        </div>
      </div>
      {/* <div
        style={{
          height: '100vh',
          maxWidth: '100%',
        }}
      >프로젝트 설명부분</div> */}
    </>
  );
};

export default Main;
