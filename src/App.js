import './App.scss'
import Header from './components/Header/Header'
import Navbar from "./components/Navbar/Navbar"
import {BrowserRouter, Route} from 'react-router-dom'
import Genr from "./components/Genr/Genr";
import FilmInfo from "./components/FilmInfo/FilmInfo";
import Api from "./Api";

function App(props) {
  return (
      <BrowserRouter>
          <div className='wrapper'>
              <Header />
              <Navbar />

              <div className='content'>
                  {/*<Genr />*/}
                  <Route path='/action' render={() => <Api /> } />
                  {/*<FilmInfo />*/}
                  {/*<Route path='/action' render={() => <Action /> } />*/}
              </div>

          </div>
      </BrowserRouter>
  );
}

export default App;
