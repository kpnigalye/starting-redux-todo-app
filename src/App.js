import "./App.css";
import Authentication from "./components/Authentication";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>Starting with React Redux</h4>
        <Profile />
        <Authentication />
      </header>
    </div>
  );
}

export default App;
