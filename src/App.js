import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, setTitle] = useState(['리액트 시작하기', '대패삼겹살 끝내주게 먹는 법', '미사호수공원 라이딩']);
  let [thumbsUp, setThumbsUp] = useState(0);

  function changeTitle() {
    let newArray = [...title];
    newArray[0] = '뷰 시작하기';
    setTitle( newArray );
  }

  function sortTitle() {
    let newArray = [...title];
    newArray = newArray.sort()
    setTitle( newArray )    
  }

  return (
    <div className="App">
      {/* 헤더 */}
      <div className="black-nav">
        <div>개발해블로그</div>
      </div>
      {/* 포스트 리스트 */}
      <button onClick={ changeTitle }>언어 바꾸기</button>
      <button onClick={sortTitle}>ㄱㄴㄷ 순으로</button>

      <div className="list">
        <h4>
          { title[0] }
          <span onClick={ ()=>{ setThumbsUp(thumbsUp + 1)} }>👍</span> { thumbsUp }
        </h4>
        <p>9월 14일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>9월 10일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h4>{ title[2] }</h4>
        <p>9월 02일 발행</p>
        <hr />
      </div>
      

    </div>
  );
}

export default App;
