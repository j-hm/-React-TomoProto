import React from "react";
import styled from "styled-components";

function TomoManitto() {
  return (
    <Manitto>
      <Dday>
        <p>🤫</p>
        <h3>마니또 공개까지</h3>
        <h1>D-3</h1>
      </Dday>
      <Guess>
        <div>
          <h4>마니또는 누구인가?</h4>
          <p>이미지와 누구인지 입력할 수 있는 창</p>
        </div>
        <span>🔍</span>
      </Guess>
      <Todos>
        <h3>마니또를 위해 할일</h3>
        <Input>
          <input placeholder="마니또를 위한" />
          <button>Todo</button>
        </Input>
        <Todo>
          <input type="checkbox" />
          <span>칭찬 씨게 해주기</span>
        </Todo>
      </Todos>
    </Manitto>
  );
}

const Manitto = styled.section`
  margin: 20px;
`;

const Dday = styled.div`
  background-color: #eee;
  border-radius: 10px;
  padding: 28px;
  text-align: center;
  &:hover {
    background-color: gold;
    cursor: pointer;
  }
  > p {
    font-size: 30px;
  }
`;

const Guess = styled.div`
  margin: 20px 0px;
  padding: 20px 10px;
  border-top: 1px solid #bbb;
  border-bottom: 1px solid #bbb;
  display: flex;

  &:hover {
    cursor: pointer;

    span {
      font-size: 20px;
    }
  }
  > span {
    margin-left: auto;
  }
`;

const Todos = styled.article``;

const Input = styled.div`
  margin: 15px 0px;
  > input {
    padding: 5px;
    width: 80%;
    border: none;
    outline: none;
    border-bottom: 1px solid #aaa;
  }
  > button {
    width: 12%;
    margin-left: 10px;
  }
`;

const Todo = styled.div`
  background-color: #eee;
  padding: 10px;
  border-radius: 10px;
  > span {
    margin: 0px 10px;
  }
`;

export default TomoManitto;
