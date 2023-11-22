import "./index.css";
import "./App.css";
import styles from "./index.css";
import About from "./components/about";
import Pricing from "./components/pricing";
import Features from "./components/features";
import Cta from "./components/cta";
import Blog from "./components/blog";
import Clients from "./components/clients";
import Faq from "./components/faq";

function App() {
  return (
    <div>
      <About />

      <Features />

      <Pricing />
      <Blog />
      <Cta />
      <Clients />
      <Faq />
    </div>
  );
}

export default App;
