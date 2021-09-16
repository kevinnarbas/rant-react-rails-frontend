import mockRests from './mockRests.js'
import Home from './pages/Home.jsx';
import RestNew from './pages/RestNew.jsx';
import RestIndex from './pages/RestIndex.jsx';
import RestShow from './pages/RestShow.jsx';
import RestEdit from './pages/RestEdit.jsx';
import NotFound from './pages/NotFound.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/restindex" component={ RestIndex } />
          <Route path="/restshow/:id" component={ RestShow } />
          <Route path="/restnew" component={ RestNew } />
          <Route path="/restedit/:id" component={ RestEdit } />
          <Route component={ NotFound }/>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
