import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./pages/Home";
import initFluid from './utils/script'
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    initFluid();
  }, []);
  return (
    <>

      <Header/><br/>
      <Home />
      <Footer />
    </>
  );
};

export default App;