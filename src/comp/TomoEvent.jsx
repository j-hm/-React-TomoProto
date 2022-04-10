import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { db } from "../firebase.js";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import styled from "styled-components";
import EventItems from "./EventItems.jsx";

function TomoEvent() {
  const [date, setDate] = useState(new Date());
  const [event, setEvent] = useState("");

  // 변수 이름 더 좋은 거 있을 것 같아..바꾸고 싶어
  const [events, setEvents] = useState([]);
  // 전역으로 선언하도록 수정해야 편할 것 같음
  const getEvents = () => {
    const q = query(collection(db, "tomo"), orderBy("date", "asc"));
    onSnapshot(q, (snapshot) => {
      const eventsArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(eventsArray);
    });
  };

  useEffect(() => {
    getEvents();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    // 이벤트에 값이 없을 때 저장하지 못하도록 예외처리 할 것!
    await addDoc(collection(db, "tomo"), {
      event,
      date: date.toLocaleDateString(),
    });
    setEvent("");
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setEvent(value);
  };

  return (
    <Event>
      <Cal>
        <Calendar calendarType={"US"} onChange={setDate} value={date} />
      </Cal>
      <Form onSubmit={onSubmit}>
        <input value={date.toLocaleDateString()} hidden readOnly />
        <input
          value={event}
          onChange={onChange}
          type="text"
          placeholder="이벤트를 입력하세요"
          maxLength={140}
        />
        <button type="submit">➕</button>
      </Form>
      <Items>
        {events.map((event, index) =>
          event.date === date.toLocaleDateString() ? (
            <EventItems key={index} eventObj={event} />
          ) : null
        )}
      </Items>
    </Event>
  );
}

const Event = styled.section`
  margin-bottom: 50px;
  padding: 20px;
`;

const Cal = styled.div`
  .react-calendar {
    border: 2px solid gold;
    padding: 10px;
    border-radius: 10px;
  }
  .react-calendar__tile--now {
    background-color: gold;
  }
`;

const Form = styled.form`
  margin: 20px 0px;

  > input {
    border: none;
    background-color: #eee;
    padding: 8px;
    border-radius: 10px;
    outline: none;
    width: 80%;
    margin: 10px;

    &:focus {
      background-color: gold;
    }
  }

  button {
    padding: 5px;
    border: none;
    border-radius: 10px;
    width: 10%;

    &:hover {
      background-color: gold;
    }
  }
`;

const Items = styled.article`
  background-color: #eee;
  border-radius: 10px;
  padding: 5px;
`;

export default TomoEvent;
