import React from 'react';
import { /* HashRouter will be deprecated in the future */ BrowserRouter as Router, Switch,  Route } from 'react-router-dom'; //

import './styles/index.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Error from './components/Error';
import Prompt from './components/Prompt'
import PropsViewer from './components/Prompt/propViewer';

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Sidebar /> 
          <div className={'rightContainer'}>
            
           {/*  we start the routing for this inner Component */}
           {/* its still possible to duplicate them like this */}
           {/* <Route exact path="/" component={Home} /> {/* its interesting how the exact impacts here! try to remove it load /foo */}
           {/* <Route path="/foo" component={Home} /> */} */}

           {/* another way to decide between this routes is to add a swtich this doesn need the exact flag*/}
           {/* switch returns the route that matches first! */}
          {/*  <Switch>
             <Route path="/" component={Home} />
             <Route path="/foo" component={Home} />
           </Switch> */}

           <Switch>
             
             <Route path="/" component={Home} exact />
             <Route path="/prompt" component={Prompt} />
             <Route path="/props" component={PropsViewer} />
             <Route path="*" component= {Error} />
           </Switch>
          
          </div>
        </div>
      </Router>
    );
  }
}