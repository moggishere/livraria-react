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

                <Box display="flex" justifyContent="start">
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Home
                        </Typography>
                    </Box>
                </Box>

                <Box display="flex" justifyContent="start">
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Sobre Nós
                        </Typography>
                    </Box>
                </Box>

                <Box display="flex" justifyContent="start">
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Produtos
                        </Typography>
                    </Box>
                </Box>

                <Box display="flex" justifyContent="start">
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Contatos
                        </Typography>
                    </Box>
                </Box>

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