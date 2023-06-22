import './App.css';
import Illustration from './images/illustration-hero.svg'
import IconMusic from './images/icon-music.svg'

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={Illustration} alt="#" />
        <h2>Order Summary</h2>
        <p>You can now listen to millions of songs, audiobooks, and podcasts on any 
        device anywhere you like!</p>
        <div className="plans">
          <img src={IconMusic} alt="#" />
          <div className="annualPlan">
            <h4>Annual Plan</h4>
            <p>$59.99/year</p>
          </div>
          <a href="#">Change</a>
        </div>
        <button>Proceed to Payment</button>
        <button>Cancel Order</button>
      </div>
    </div>
  );
}

export default App;
