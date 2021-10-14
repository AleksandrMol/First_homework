import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Я хачу пЭтсы!
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=hQYhdHjP-gM"
          target="_blank"
          rel="noopener noreferrer"
        >
          Безумно
        </a>
      </header>
    </div>
  );
}

export default App;
