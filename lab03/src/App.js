import './App.css';
import Container from '@mui/material/Container';
import {ProductList} from './components/ProductList'


const dataURL = 'https://fakestoreapi.com/products'

function App() {
  return (
    <Container fixed>
      <ProductList dataURL={dataURL}/>
    </Container>
  );
}

export default App;
