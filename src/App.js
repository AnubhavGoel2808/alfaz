import LoginForm from "./components/login-form";
import {Redirect, Route, Switch} from 'react-router-dom';
import Profile from "./components/Profile";
import Feeds from "./components/Feeds";
import Interests from "./components/Interests";
import startScreen from "./components/startScreen";
import './style/index.css'
function App() {
  return (

    <Switch>
      <Route path='/start' component={startScreen}></Route>
      <Route path='/feeds' component={Feeds}></Route>
      <Route path='/profile' component={Profile}></Route>
      <Route path='/interests' component={Interests}></Route>
      <Route path='/login' component={LoginForm}></Route>
      <Redirect to='/start' from='/'></Redirect>
      <Route exact='true' path='/'></Route>
    </Switch>
  );
}

export default App;
