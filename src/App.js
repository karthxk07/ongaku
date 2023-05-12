import './App.css';
import { SideBar } from './components/Sidebar';
import { MainBody } from './components/MainBody';



function App() {
  return (
    <>
    <div className='main flex'>
      <SideBar/>
      <MainBody className="h-screen"/>
    </div>
    </>
  );
}

export default App;
