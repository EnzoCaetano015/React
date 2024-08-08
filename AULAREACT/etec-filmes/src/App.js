import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <body>
      <Header></Header>
      <Banner></Banner>
      <Container>
        <h1>ETEC MCM</h1>
        <p>Olá Mundo</p>
      </Container>
      <Footer></Footer>
    </body>
  );
}

export default App;
