import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Detail from "./pages/Product/Detail";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <NotificationContainer />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/product/:name" element={<Detail />} />
          <Route path="/auth">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
