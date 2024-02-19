import './App.css';
import Footer from './components/layout/footer/footer';
import Router from './routes/routes';
import Routes from './routes/routes';
import CartContextProvider from './stores/cartContext';

function App() {
  return (
    <>
      <CartContextProvider>
        {/* <Header /> */}
        <Router />
      </CartContextProvider>
      <Footer />
    </>
  );
}

export default App;
