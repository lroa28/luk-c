//Styles
import './App.css';
//Componentes
import {NavBar} from './components/NavBar/NavBar';
import {CartComponentContext} from './Context/CartContext';
import {Router} from './Router/Router';
//Router
import {BrowserRouter} from 'react-router-dom';

const App = ()  => {
  return(
    <div className="App">
      <CartComponentContext> 
        <BrowserRouter>
          <header className="App-header">
            <NavBar/>
          </header>
          <Router />
          <main></main>
        </BrowserRouter>
      </CartComponentContext>
    </div>
  )}

export default App;