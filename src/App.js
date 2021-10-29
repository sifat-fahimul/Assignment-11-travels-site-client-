import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Booking from './pages/Booking/Booking';
import AuthProvider from './context/AuthProvider';
import Login from './pages/Login/Login';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import PrivateRoute from './pages/PrivetRoute/PrivateRoute';
import Order from './pages/Booking/Order/Order';
import MyOrder from './pages/Booking/MyOrder/MyOrder';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <PrivateRoute path='/booking/:id'>
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path='/order'>
              <Order></Order>
            </PrivateRoute>

            <Route path='/myOrder'>
              <MyOrder></MyOrder>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
