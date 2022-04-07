import "./App.css";
import { useMediaQuery } from "react-responsive";
import DeskTop from "./comp/DeskTop";
import TomoMain from "./comp/TomoMain";

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 912 });
  return isMobile ? children : <DeskTop />;
};

function App() {
  return (
    <Mobile>
      <TomoMain />
    </Mobile>
  );
}

export default App;
