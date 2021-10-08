import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/nav';
import Footer from './components/footer'
import Home from './pages/home';
import Work from './pages/work'
import Contact from './pages/contact'

const App = () => {
  return (

    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/work' component={Work} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>

  );
}

export default App;
