import mainNav from './mainNav';
import mainCenterblock from './mainCenterblock';
import mainSidebar from './mainSidebar';
import bar from './bar';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div className='container'>
         <div className='main'>
            {mainNav()}
            {mainCenterblock()}
            {mainSidebar()}
            {bar()}
         </div>
      </div>
    </div>
  );
}
console.log(mainNav);

export default App;
