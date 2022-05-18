import './App.css';
import LeftBar from './components/leftbar/LeftBar';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <div className='leftSide'>
      <LeftBar />
      </div> 
    </>
  );
}

export default App;
