import './App.css';
import Footer from './components/layout/footer/footer';
import Header from './components/layout/header/header';
import Products from './components/product/products';

function App() {
  return (
    <>
      <Header />
      <main>
        <Products />
      </main>
      <Footer />
    </>
  );
}

export default App;
