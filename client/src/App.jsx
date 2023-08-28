
import { Routes,Route,useLocation } from 'react-router-dom';
import NavBar from "./components/navBar/NavBar"
import Landing from "./views/landing/Landing"
import Home from "./views/home/Home"
import Form from "./views/form/Form"
import Detail from "./views/detail/Detail"
import style from  "./App.module.css"

function App() {
  const location = useLocation()

  return (
    <div className={style.App}>
      <div>
       {location.pathname !=="/"&& <NavBar/>}
       <Routes>
         <Route path="/" element={<Landing/>}/>
         <Route path="/home" element={<Home/>}/>
         <Route path="/create" element={<Form/>}/>
         <Route path="/detail/:id" element={<Detail/>}/>
       </Routes>
      </div>
    </div>
  )
}

export default App;
