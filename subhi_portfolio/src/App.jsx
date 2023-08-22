import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header.jsx";
import Question from "./components/Question.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="page">
      <Header />
      <Question />
      <Footer />
    </div>
  );
}
export default App
