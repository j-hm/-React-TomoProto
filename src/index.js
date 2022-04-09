// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// 여기로 문제 렌더링에 뭐가 있다
// StrictMode > 렌더링을 두번씩 발생시키는데 빌드할 때는 제외된다.

import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const GlobalStyle = createGlobalStyle`
@font-face {
	font-family: "LeeSeoyun";
	src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/LeeSeoyun.woff")
	  format("woff");
	font-weight: normal;
	font-style: normal;
  }
* {
	padding:0;
	margin:0;
	box-sizing: border-box;
	font-family: "LeeSeoyun";
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //   <React.StrictMode>
  <>
    <GlobalStyle />
    <App />
  </>
  //   </React.StrictMode>
);

reportWebVitals();
