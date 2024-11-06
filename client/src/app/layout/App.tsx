import { Container, CssBaseline } from '@mui/material';
import Catalog from '../../components/catalog/Catalog';
import './App.css';
import Header from './Header';

function App() {

  return (
    <>
      <div>
        <CssBaseline/>
        <div>
          <Header/>
          <Container>          
            <Catalog />
            </Container>
        </div>
      </div>
    </>
  )
}

export default App
