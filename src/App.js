import "./App.css";
import Section from "./components/Section";
import data from "./data.json";
import netflixLogo from "./images/logo.696c2101.png";
function App() {
  return (
    <div className="App">
      <header>
        <img className="top-logo" src={netflixLogo} alt="Logo of Netflix" />
      </header>
      <main>
        {data.map((elem, index) => {
          return (
            <div key={index}>
              <Section category={elem.category} images={elem.images} />;
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default App;
