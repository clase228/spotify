import { useEffect,useState } from 'react';
import MainNav from './mainNav';
import MainCenterblock from './mainCenterblock';
import MainSidebar from './mainSidebar';
import Bar from './bar';
import './App.css';

function App() {
   const [loading, setLoading] = useState(true);

useEffect(() => {
      // эмуляция загрузки данных
      setTimeout(() => {
         console.log(1);
        setLoading(false);
      }, 5000);
   }, []);


  return (
    <div className="wrapper">
      <div className='container'>
         <div className='main'>
            <MainNav />
            <MainCenterblock loading={loading}/>
            <MainSidebar loading={loading}/>
            <Bar loading={loading}/>
         </div>
      </div>
    </div>
  );
  
}

export default App;
