import React from 'react';
import { AppBar, Box, Toolbar, Typography} from '@material-ui/core';
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar (){
    return(
        <>
            <AppBar position="static">

            <Toolbar variant="dense">
                <Box style={{ cursor: "pointer"}} >
                    <Typography variant="h5" color="inherit">
                        Estante da Gente
                    </Typography>
                </Box>

                <Link to='/home'>
                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                    </Box>
                </Link>

                <Link to='/sobrenos'>
                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Sobre Nós
                            </Typography>
                        </Box>
                    </Box>
                </Link>

                <Link to='/produto'>
                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Produtos
                            </Typography>
                        </Box>
                    </Box>
                </Link>

                <Link to='/formularioCategoria' className='text-decorator-none'>
                <Box display="flex" justifyContent="start">
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Cadastrar Categorias
                        </Typography>
                    </Box>
                </Box>
                </Link>

                <Link to='/login' className='text-decorator-none'>
                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>
                    </Box>
                </Link>


            </Toolbar>   

            </AppBar>
        </>
    )
}

export default Navbar;