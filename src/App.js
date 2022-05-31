import './App.css';
import ResponsiveAppBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {

  return (

    <div className="App">
        <ResponsiveAppBar />
        <h1>Hera Store | Aguante River</h1>
        <ItemDetailContainer />
        <ItemListContainer />
        
    </div>
  );
}

export default App;