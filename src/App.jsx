import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import FormCF from "./pages/FormCF";
import FormInvest from "./pages/FormInvest"
import Success from "./pages/Success";
const App = () => (
  <>
    <div className="bg-primary w-full overflow-hidden">
  <div className={`${styles.paddingX} ${styles.flexCenter}`}>
  <div className={`${styles.boxWidth}`}>
    <Navbar />
  </div>
</div>
<BrowserRouter>
  <Routes>
    <Route path="/success" element={<Success/>}/>
        <Route path="/crowdfund" element={<FormCF/>}/>
        <Route path="/invest" element={<FormInvest/>}/>
        <Route path="/" element={<Home/>}/>
        </Routes>

    </BrowserRouter>
    </div>
</>
);

export default App;
