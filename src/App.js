import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';

function App() {
  return (
    <>
    <Navbar title="TextUpdate" abouttext="About Us"/>
    <div className="container my-3">
    <TextFrom heading="Enter the Text to Edit"/>
    </div>
    </>
  );
}

export default App;
