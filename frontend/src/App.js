import './App.css';
import Router from './routes/routes';
import CartContextProvider from './stores/cartContext';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (

    <CartContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
