import mockRests from './mockRests.js'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/restindex" component={ CatIndex } />
          <Route path="/restshow/:id" component={ CatShow } />
          <Route path="/restnew" component={ CatNew } />
          <Route path="/restedit/:id" component={ CatEdit } />
          <Route component={ NotFound }/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
