import logo from './logo.svg';
import './App.css';
import ShowList from './features/ShowList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bryan Nguyen training react js
        </p>
        <ShowList />
      </header>
    </div>
  );
}

export default App;
