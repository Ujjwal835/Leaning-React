import './App.css'
import ClockHeading from './components/ClockHeading'
import ClockSlogan from './components/ClockSlogan'
import CurrentTime from './components/CurrentTime'
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return <center className='master-container'>
    <ClockHeading />
    <div className='box'>
      <ClockSlogan />
      <CurrentTime />
    </div>
  </center>
}

export default App
