import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, setTitle] = useState(['리액트 시작하기', '대패삼겹살 끝내주게 먹는 법', '미사호수공원 라이딩']);
  let [thumbsUp, setThumbsUp] = useState(0);

  // let [modal, setModal] = useState(false);

  return (
    <div className="App">
      {/* 헤더 */}
      <div className="black-nav">
        <div>개발해블로그</div>
      </div>
      {/* 포스트 리스트 */}
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
      
      {
        title.map((title) => {
          return (
            <div className="list">
              <h4>
                { title }
                <span onClick={ ()=>{ setThumbsUp(thumbsUp + 1)} }>👍</span> { thumbsUp }
              </h4>
              <p>9월 14일 발행</p>
              <hr />
            </div>
          )
        })
      }
      

    {/* <button onClick={ () => {setModal(!modal)} }>모달</button>

    {
      modal === true
      ? <Modal />
      : null
    } */}

    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
