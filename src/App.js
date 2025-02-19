import requests from './api/requests';
import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Nav />

      <Banner />

      <Row title="NETFLIX ORIGINALS" id="NO" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />

      <Row title="TRENDING NOW" id="TN" fetchUrl={requests.fetchTrending} />

      <Row title="TOP RATED" id="TR" fetchUrl={requests.fetchTopRated} />

      <Row title="ACTION MOVIES" id="AM" fetchUrl={requests.fetchActionMovies} />

      <Row title="COMEDY MOVIES" id="CM" fetchUrl={requests.fetchComedyMovies} />

      <Footer />
    </div>
  );
}

export default App;
