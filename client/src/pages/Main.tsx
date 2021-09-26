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
          <a className="nav-item" href="#about">
            About
          </a>
          <span onClick={() => setHistory('/register')} className="nav-item">
            Register
          </span>
        </nav>
        <div className="background">
          <div className="background-style"></div>
        </div>
        <div className="basket-img"></div>
        <div className="quote-container">
          <div className="main-quote">
            <h1>멀리서 찾지 말고 주변을 둘러보세요</h1>
            <div>장바구니가 아닌 마음을 나눕니다.</div>
            <div>단기성이 아닌 커뮤니티 형성을 목적으로 합니다.</div>
          </div>
          <Button
            onClick={() => setHistory('/register')}
            color="blue"
            text="등록하러 갈래요"
          />
        </div>
      </div>
      <div id="about">
        <div className="about-header">
          <span>
            이웃을 가까이, 공동체의 또 다른 말
            <span style={{ color: 'orange' }}>'이웃사촌'</span>
          </span>
        </div>
        <div className="about-content">
          <div id="letter">
            해외의 어려운 아이들을 돕는 것도 분명 의미있는 일입니다.
          </div>
          <div id="letter">
            팬데믹 상황으로 작은 일자리가 사라지면서 생활에 어려움을 겪는
            사람들도 늘어난 것 같습니다.
          </div>
          <div id="letter">
            잠깐 먼 곳보다 내 주위를 둘러보고 손내밀 수 있는 기회를 찾고 계신
            분들과 함께하고 싶습니다.
          </div>
          <div className="warning">
            <h3>주의사항</h3>
            <div>1. 사람들이 많은 공공장소에서만 만나고 소통합니다.</div>
            <div>
              2. 사회적으로 어긋나거나 상대방의 상황에 무리한 부탁은 하지
              않습니다.
            </div>
            <div>
              3. 상대의 무리한 부탁은 단호하게 거절하거나 거절이 힘들 경우
              이메일을 통해 저희에게 알려 함께 해결합니다.
            </div>
            <div>
              4. 세상에 당연한 것은 없음을 인지합니다. 감사하다는 말은 언제
              하더라도 과하지 않습니다.
            </div>
          </div>
          <Button
            onClick={() => setHistory('/register')}
            color="blue"
            text="이웃사촌으로 등록하고 싶어요"
          />
        </div>
      </div>
    </>
  );
};

export default Main;
