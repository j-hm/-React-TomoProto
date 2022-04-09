import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase.js";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

function TomoHome() {
  const today = new Date();

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

  return (
    <Home>
      <Logo>뽀토모</Logo>
      <Game>
        <p>🎲랜덤게임🎮</p>
      </Game>
      <Events>
        <h4>오늘의 이벤트</h4>
        {events.map((event, index) =>
          event.date === today.toLocaleDateString() ? (
            <Evnet key={index}>
              <p>{event.date}</p>
              <p>{event.event}</p>
            </Evnet>
          ) : null
        )}
      </Events>
    </Home>
  );
}

const Home = styled.section`
  padding: 10px;
`;

const Logo = styled.h3`
  color: gold;
`;

const Game = styled.div`
  background-color: #eee;
  border-radius: 10px;
  padding: 40px 20px 40px 20px;
  margin: 20px 0px 20px 0px;
  text-align: center;

  &:hover {
    background-color: gold;
    cursor: pointer;
  }
`;

const Events = styled.article`
  background-color: #eee;
  border-radius: 10px;
  padding: 20px;
`;

const Evnet = styled.div`
  padding: 10px;
  margin: 5px;
  background-color: gold;
  border-radius: 10px;

  > p {
    font-size: 12px;
  }
`;

export default TomoHome;
