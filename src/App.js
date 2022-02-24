import "./index.css";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <footer>
        <p className="footer-data">
          Made with ❤️ {" "} by {" "}
          <a
            href="https://github.com/Edu-Maturana"
            target="_blank"
            rel="noopener noreferrer"
          >
            Edu Maturana
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
