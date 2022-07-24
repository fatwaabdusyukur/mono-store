import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Detail from "./pages/Product/Detail";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path="/product/:name" element={<Detail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
