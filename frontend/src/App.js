import './App.css';
import Cart from './components/cart/cart';
import Footer from './components/layout/footer/footer';
import Header from './components/layout/header/header';
import Products from './components/product/products';

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Products /> */}
        <Cart />
      </main>
      <Footer />
    </>
  );
}

export default App;
