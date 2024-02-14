import './App.css';
import Footer from './components/layout/footer/footer';
import Header from './components/layout/header/header';
import Products from './components/product/products';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Products />
      </main>
      <Footer />
    </div>
  );
}

export default App;
