import './App.css';
import ResponsiveAppBar from './components/Navbar/NavBar';
import './components/Navbar/NavBar.css'
import ImgMediaCard from './components/Cards/Cards';
import { Grid } from '@mui/material';



function App () {

  return (
    <div className="App"> 
      <ResponsiveAppBar/>
      <div>
      <Grid container>
        <Grid item md={3}>
      <ImgMediaCard/>
      </Grid>
      <Grid item md={3}>
      <ImgMediaCard/>
      </Grid>
      <Grid item md={3}>
      <ImgMediaCard/>
      </Grid>
      <Grid item md={3}>
      <ImgMediaCard/>
      </Grid>
      
     
    




      </Grid>
      </div>
      </div>
  );
}

export default App;

