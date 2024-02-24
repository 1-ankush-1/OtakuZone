import './App.css';
import Router from './routes/routes';
import AuthContextProvider from './stores/authContext';
import CartContextProvider from './stores/cartContext';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartContextProvider>
    </AuthContextProvider>
  );
}

export default App;
