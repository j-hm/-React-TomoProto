import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function TomoEvent() {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <div style={{ display: "flex" }}>
        <p>forTomo</p>
        <button>+</button>
      </div>
      <Calendar calendarType={"US"} onChange={setDate} value={date} />
      <input value={date.toLocaleDateString()} readOnly />
    </>
  );
}

export default TomoEvent;
