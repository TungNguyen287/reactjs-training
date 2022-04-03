import logo from './logo.svg';
import './App.css';
import TodoFeture from './features/Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bryan Nguyen training react js
        </p>
        <TodoFeture/>
      </header>
    </div>
  );
}

export default App;
