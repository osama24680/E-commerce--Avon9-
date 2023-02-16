import style from './App.module.scss';
import Home from "./Pages/Home/Home.jsx"
import MobileNav from "./Components/MobileNav/MobileNav"
import MobileCategories from "./Components/MobileCategories/MobileCategories"
import { useDispatch } from 'react-redux';
import { closeSideNav } from './Store/generalSlice';
function App() {
  
  let dispatch = useDispatch()
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      dispatch(closeSideNav())
    }
  })

  return (
    <div className={style.App}>
      <Home />
      <MobileNav />
      <MobileCategories />
    </div>
  );
}

export default App;


