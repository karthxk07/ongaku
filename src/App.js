import './App.css';
import { SideBar } from './components/Sidebar';
import { MainBody } from './components/MainBody';



function App() {
  return (
    <>
    <div className='main flex'>
      <div className='w-1/5'></div>
      <SideBar/>
      <MainBody className="h-screen"/>
    </div>
    </>
  );
}

export default App;
