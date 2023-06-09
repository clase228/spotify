import MainNav from './mainNav';
import MainCenterblock from './mainCenterblock';
import MainSidebar from './mainSidebar';
import Bar from './bar';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div className='container'>
         <div className='main'>
            <MainNav />
            <MainCenterblock />
            <MainSidebar />
            <Bar />
         </div>
      </div>
    </div>
  );
}

export default App;
