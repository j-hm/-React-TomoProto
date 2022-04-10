import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../firebase.js";

function EventItems({ eventObj }) {
  const eventRef = doc(db, "tomo", `${eventObj.id}`);

  const [isEdit, setIsEdit] = useState(false);
  const [updateEvent, setUpdateEvent] = useState(eventObj.event);

  const toggleEdit = () => setIsEdit((prev) => !prev);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setUpdateEvent(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    updateDoc(eventRef, { event: updateEvent });
    setIsEdit(false);
  };

  const onDelete = () => {
    // confirm custom 하기ㅜㅜ not pretty
    const ok = window.confirm("삭제하시겠습니까?");
    if (ok) {
      deleteDoc(eventRef);
    }
  };

  return (
    <Item>
      <div>
        <h4>{eventObj.date}</h4>
        <Option>
          <span onClick={toggleEdit}>✏️</span>
          <span onClick={onDelete}>🗑️</span>
        </Option>
      </div>
      {isEdit ? (
        <Form onSubmit={onSubmit}>
          <input onChange={onChange} type="text" value={updateEvent} required />
          <button type="submit">수정</button>
        </Form>
      ) : (
        <p>ㅤ{eventObj.event}</p>
      )}
    </Item>
  );
}

const Item = styled.div`
  margin: 15px 10px;
  padding: 10px;
  background-color: gold;
  border-radius: 10px;
  > div {
    display: flex;
  }
  > p {
    margin-top: 5px;
    word-break: keep-all;
  }
`;

const Option = styled.div`
  margin-left: auto;
  > span {
    margin-left: 5px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Form = styled.form`
  > input {
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 3.6px;
    width: 80%;
    margin: 10px 10px 5px 5px;
  }

  > button {
    border: none;
    padding: 3.6px;
    border-radius: 5px;
    margin: 0px 5px;
  }
`;
export default EventItems;
