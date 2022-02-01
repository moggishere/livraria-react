import React from 'react';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Sobrenos from './paginas/sobrenos/Sobrenos';
import ListaProduto from './components/produtos/listaProduto/ListaProduto';
import CadastroProduto from './components/produtos/cadastroProduto/CadastroProduto';
import CadastroCategoria from './components/categorias/cadastroCategoria/CadastroCategoria';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './store/store';


function App() {
  return (
    <Provider store={store}>
    <ToastContainer />
      <Router>
        <Navbar />
        <Switch>
          <div style={{ minHeight: '100vh' }}>

            <Route exact path='/'>
              <Login />
            </Route>

            <Route path='/home'>
              <Home />
            </Route>

            <Route path='/sobrenos'>
              <Sobrenos />
            </Route>

            <Route path='/cadastrousuario'>
              <CadastroUsuario />
            </Route>

            <Route path='/produto'>
              <ListaProduto />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            <Route exact path='/formularioProduto'>
            <CadastroProduto />
          </Route>
          <Route exact path='/formularioProduto/:id'>
            <CadastroProduto />
          </Route>
          <Route exact path='/formularioCategoria'>
            <CadastroCategoria />
          </Route>
          <Route exact path='/formularioCategoria/:id'>
            <CadastroCategoria />
          </Route>
          <Route path='/deletarProduto/:id'>
            <DeletarProduto />
          </Route>
          <Route path='/deletarCategoria/:id'>
            <DeletarCategoria />
          </Route>


          </div>
        </Switch>
        <Footer />
      </Router>
      </Provider>
  );
}

export default App;
