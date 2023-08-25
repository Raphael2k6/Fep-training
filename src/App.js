import "./App.css";
import LoginPage from "./components/loginpage/login";
import Text from "./components/text/text";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="container-left">
          <h1>Welcome to My Website</h1>
          <p>Lets go</p>
        </div>
        <div className="container-right">
          <LoginPage />
          {/* <Text /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
