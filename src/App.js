import style from './App.module.scss';
import Home from "./Pages/Home/Home.jsx"
import SideNav from "./Components/SideNav/SideNav"
import SideCategories from "./Components/SideCategories/SideCategories"
import FixedDownNav from "./Components/FixedDownNav/FixedDownNav"
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
      <SideNav />
      <SideCategories />
      <FixedDownNav />
    </div>
  );
}

export default App;


