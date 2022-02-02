import './App.css';
import ProductModel from './components/ProductModel';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductModel/>} />
      </Routes>
    </div>
  );
}

export default App;
