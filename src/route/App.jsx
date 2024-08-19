import Footer from "../components/Footer";
import Header from "../components/Header";
import LoginOrSignupPage from "../components/LoginOrSignupPage";
import StartPageText from "../components/StartPageText";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="mainContainer">
        <div className="displayContainer">
          <Header></Header>
          <div className="middleContainer">
            <StartPageText></StartPageText>
            <LoginOrSignupPage></LoginOrSignupPage>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
