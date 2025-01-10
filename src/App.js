import logo from './logo.svg';
import './App.css';

function Header() {
  let title = "Banzai";
  let helloWorld = "Hello World";
  return <h1>{helloWorld}</h1>;
}

function App() {
  return <Header />;
}

export default App;
