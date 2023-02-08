import style from './App.module.scss';
import MobileNav from "./Components/MobileNav/MobileNav"
import Home from "./Pages/Home/Home.jsx"

function App() {
  return (
    <div className={style.App}>
        <Home />
        <MobileNav />
    </div>
  );
}

export default App;


