import './App.css';
import ProductModel from './components/ProductModel';
import {Route, Routes} from 'react-router-dom';
import HeaderBar from './components/HeaderBar';


function App() {
    return (
        <div className="App">
            {/*<Routes>*/}
            {/*    <Route path="/" element={<ProductModel/>} />*/}
            {/*</Routes>*/}
            <HeaderBar/>
        </div>
    );
}

export default App;