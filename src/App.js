// import logo from "./logo.svg";
import "./App.css";
import image from "./images/illustration-sign-up-mobile.svg";

function App() {
  return (
    <div className="App">
      <div className="img">
        <img src={image} className="image" alt="logo" />
      </div>

      <div className="title">
        <p>Stay updated!</p>
      </div>

      <div className="subtitle">
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
      </div>

      <div className="list">
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a success</li>
        <li>And much more!</li>
      </div>

      <div className="email">
        <div className="email_title">
          <p>Email address</p>
        </div>

        <div className="email_input">
          <input placeholder="email@company.com"></input>
        </div>

        <div className="email_btn">
          <button>Subscribe to monthly newsletter</button>
        </div>
      </div>
    </div>
  );
}

export default App;

/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */
