// import logo from "./logo.svg";
import "./App.css";
// import Home from "./Components/Home/Home.jsx";
import requests from "./Components/Request";
import Row from "./Components/Row";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Banner />
        <Row
          title="Netflix Original"
          isLarge={true}
          fetchUrl={requests.fetchNetflixOriginals}
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documantries" fetchUrl={requests.fetchDocumentaries} />
      </div>
    </>
  );
}

export default App;
