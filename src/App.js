import './App.css';
import Data from './components/Data';
import Sound from './components/Sound';

function App() {
  return (
    <div className="App">
      <span className="Name">اپلیکیشن آب و هوا</span>
      <Data/>
      <Sound/>
      <span className="copyRight">© CopyRight 2021 Masood Shterabadi</span>
    </div>
  );
}

export default App;
