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
    <>
      <Calendar calendarType={"US"} onChange={setDate} value={date} />
      <form onSubmit={onSubmit}>
        <input value={date} hidden readOnly />
        <input
          value={event}
          onChange={onChange}
          type="text"
          placeholder="이벤트를 입력하세요"
          maxLength={140}
        />
        <input type="submit" value="추가하기" />
      </form>
      <div>
        {events.map((event, index) => (
          <div key={index}>
            <h4>{event.date}</h4>
            <p>{event.event}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default TomoEvent;
