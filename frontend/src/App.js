import './App.css';
import Cart from './components/cart/cart';
import Footer from './components/layout/footer/footer';
import Header from './components/layout/header/header';
import Products from './components/product/products';
import CartContextProvider from './stores/cartContext';

function App() {
  return (
    <>
      <CartContextProvider>
        <Header />
        <main>
          {/* <Products /> */}
          <Cart />
        </main>
      </CartContextProvider>
      <Footer />
    </>
  );
}

export default App;
