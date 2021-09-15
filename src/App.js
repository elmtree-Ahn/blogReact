import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, setTitle] = useState(['리액트 시작하기', '대패삼겹살 끝내주게 먹는 법', '미사호수공원 라이딩']);
  let [thumbsUp, setThumbsUp] = useState(0);
  let [clickTitle, setClickTitle] = useState(0)
  let [modal, setModal] = useState(false);
  let [inputData, setInputData] = useState('');

  return (
    <div className="App">
      {/* 헤더 */}
      <div className="black-nav">
        <div>개발해블로그</div>
      </div>
      {/* 포스트 리스트 */}
      
      {
        title.map((title, i) => {
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{setClickTitle(i)}}>
                { title }
                <span onClick={ ()=>{ setThumbsUp(thumbsUp + 1)} }>👍</span> { thumbsUp }
              </h4>
              <p>9월 14일 발행</p>
              <hr />
            </div>
          )
        })
      }
      
    {/* <input onChange={ (e)=>{ setInputData(e.target.value) } }/> */}

    <div className="publish">
      <input onChange={ (e)=>{setInputData(e.target.value)} } />
      <button onClick={ ()=>{
        let titleCopy = [...title];
        titleCopy.unshift(inputData)
        setTitle(titleCopy)
      } }>저장</button>
    </div>

    <button onClick={ () => {setModal(!modal)} }>모달</button>

    {
      modal === true
      ? <Modal title={title} clickTitle={clickTitle}/>
      : null
    }

    </div>
  );
}

function Modal(props){
  return (
    <div className="modal">
      <h2>{ props.title[props.clickTitle]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
