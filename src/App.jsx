import { Header } from "./components/Header";
import { useContext } from "react";
import { Main } from "./components/Main";
import {Routes, Route} from 'react-router-dom';
import { SinglePage } from "./components/SinglePage";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
function App() {
  const {theme} = useContext(ThemeContext);
  if(theme === 'dark') document.body.classList.add('dark')
  else document.body.classList.remove('dark');
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Main />} path="/" />
        <Route element={<SinglePage />} path="/:name" />
      </Routes>
    </>
  )
}

export default App;