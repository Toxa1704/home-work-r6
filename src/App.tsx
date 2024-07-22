import { FC } from 'react';
import './App.css';
import About_us from './components/About_us';
import SeeLocation from './components/SeeLocation';

const App: React.FC = () => {
  return (
    <div className="App">
      <About_us />
    <SeeLocation />
    </div>
  );
}


export default App;
