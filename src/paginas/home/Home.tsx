import React, { useEffect } from 'react';
import { Box, Grid, Typography, Button } from '@material-ui/core';
import './Home.css';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import ModalProduto from '../../components/produtos/modalProduto/ModalProduto';
import { Link } from 'react-router-dom';
import TabProduto from '../../components/produtos/tabProduto/TabProduto';


function Home() {

//     let history = useHistory();
//     const token = useSelector<TokenState, TokenState["tokens"]>(
//         (state) => state.tokens
//       );
    
//     useEffect(() => {
//       if (token == "") {
//           alert("Você precisa estar logado")
//           history.push("/login")
  
//       }
//   }, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Bem vinde ao Estante da Gente!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalProduto />
                        </Box>
                        <Link to="/produtos" className="text-decorator-none">
                        <Button variant="outlined" className='botao'>Ver Produtos</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='produtos'>
                    < TabProduto />  
                </Grid>
            </Grid>
        </>
    );
}

export default Home;