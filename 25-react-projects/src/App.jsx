import './App.css'
import Accordian from './components/accordian'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'

function App() {

  return (
    <>
      {/* <Accordian></Accordian> */}
      {/* <RandomColor></RandomColor> */}
      <StarRating noOfStars={10}></StarRating>
    </>
  )
}

export default App
