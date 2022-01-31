// import React from 'react';
// import { Grid } from '@material-ui/core';
// import './Sobrenos.css';


// function Sobrenos() {
//     return (
//         <>
//            <Grid>
//                <Grid>
//                    <p>
//                        A proposta para lidar com isso pelo grupo é facilitar o acesso para todes por meio da criação de uma plataforma ecommerce.  Será possível obter livros por preços justos e abrir porta para especialmente escritores novos no mercado e pertencentes a grupos marginalizados. 

//                        Além da proposta de ser uma plataforma de venda de livros, também propomos formas flexíveis de distribuir cópias deles. Por exemplo, a possibilidade de compradores patrocinarem a leitura de quem precisa.
//                     </p>
//                </Grid>
//             </Grid>
//        </>
//    );
// }

// export default Sobrenos;

import React, { } from 'react'
import { Typography, Box, Grid, } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Sobrenos.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function Sobrenos() {
    return (
        <>
            <Grid>
                <Grid xs={12}  >
                    <Grid container justifyContent="center">
                        <Grid item xs={6}>
                            <Box >
                                <img src="" alt="logo estante da gente" style={{ width: "100vh", height: "100vh" }} />
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={6}>
                            <Box className='box-texto' paddingRight={7} paddingLeft={7}>
                                <Box paddingBottom={2}>
                                <Typography variant='h3' component='h3' align='center'>
                                    O que é?
                                </Typography>
                                </Box>
                                <Box paddingBottom={2} >
                                <Typography className='espaco-letras'>
                                    Baseada na ODS 11 – Cidades e Comunidades Sustentáveis da ONU,
                                    Criamos uma rede social com o objetivo de conectar pessoas através de um objetivo comum: dar vida e ocupar espaços públicos urbanos.
                                </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className='box-texto' paddingLeft={7} paddingRight={7}>
                                <Box paddingBottom={2}>
                                <Typography variant='h3' component='h3' align='center'>
                                    Como?
                                </Typography>
                                </Box>
                                <Typography className='espaco-letras'>
                                    Por meio da divulgação de iniciativas individuais e de coletivos, nossa API irá conectar pessoas e/ou empresas que buscam atuar de forma ativa na promoção de revitalização e ações de resgate da qualidade de vida em parques e praças.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className='box-texto' paddingRight={7} paddingLeft={7}>
                                <Box paddingBottom={2}>
                                <Typography variant='h3' component='h3' align='center'>
                                    Para Quem?
                                </Typography>
                                </Box>
                                <Box paddingBottom={14} >
                                <Typography className='espaco-letras'>
                                    A Promoção de espaços públicos seguros e acessíveis é para todes, principalmente para crianças, mulheres, idosos e pessoas com deficiência.
                                </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className='box-texto' paddingLeft={7} paddingRight={7}>
                                <Box paddingBottom={2} >
                                <Typography variant='h3' component='h3' align='center'>
                                    Objetivos
                                </Typography>
                                </Box>
                                <Typography className='espaco-letras'>
                                    Estímulo à participação ativa da sociedade civil em políticas públicas;
                                    Identificação de agentes locais com maior facilidade na identificação de demandas e resolução de conflitos;
                                    Colaboração entre setor privado e sociedade civil;
                                    Controle e fiscalização das ações do poder público;
                                    Descentralização do poder público;
                                    Formalização de parcerias resulta em espaços públicos mais qualificados e melhora imagem do setor privado frente à sociedade.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center">
                    <Grid item xs={6} >
                        <Box paddingBottom={7} >
                            <Typography variant='h2' component='h2' align='center' className='box-texto'>
                                Quem faz a Estante da Gente?
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container xs={12} justifyContent='center' alignItems='center' >
                <Box justifyContent="center" alignItems="center">
                    <Box  justifyContent="center" alignItems="center" >
                            <img className='box-fotos' src="" alt="Dev Ah Ro " />
                            </Box>
                            <Box >
                                <Typography variant='h5' component='h5' align='center'>
                                    Ah Ro Yoon 
                                </Typography>
                                <Typography variant='h6' component='h6' align='center'>
                                    Desenvolvedor Full Stack 
                                </Typography>
                                <Typography variant='h6' component='h6' align='center'>
                                    Estudante 
                                </Typography>
                            </Box>
                        <Box alignItems="center" justifyContent="center"  className='box-icones' >
                            <a href=" https://github.com/moggishere" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#f99e29" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/ary-yoon-31909613b" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#f99e29" }} />
                            </a>
                        </Box>
                    
                    </Box>
                    <Box>
                    <Box justifyContent="center" alignItems="center">
                        <img className='box-fotos' src="" alt="Dev Jeferson" />
                    </Box>

                    <Box >
                                <Typography variant='h5' component='h5' align='center'>
                                    Jeferson Cambui
                                </Typography>
                                <Typography variant='h6' component='h6' align='center'>
                                    Desenvolvedor Full Stack 
                                </Typography>
                                <Typography variant='h6' component='h6' align='center'>
                                    A
                                </Typography>
                            </Box>

                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones' >

                            <a href="https://github.com/Jeecambui" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#f99e29" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/jefersoncambui/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#f99e29" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box>
                        <Box>
                        <img className='box-fotos' src="" alt="Dev Taís" />
                        </Box>

                        <Box >
                                <Typography variant='h5' component='h5' align='center'>
                                    Taís Ribeiro
                                </Typography>
                                <Typography variant='h6' component='h6' align='center'>
                                    Desenvolvedor Full Stack 
                                </Typography>
                                <Typography variant='h6' component='h6' align='center'>
                                    Analista de Sistemas
                                </Typography>
                            </Box>

                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones'>

                            <a href="https://github.com/TaisRibeiroAReis " target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#f99e29" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/ta%C3%ADs-ribeiro-358772196" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#f99e29" }} />
                            </a>
                        </Box>
                    </Box>
                    
                    <Box>
                        <Box>
                        <img className='box-fotos' src="" alt="Dev Abner" />
                        </Box>

                        <Box >
                                <Typography variant='h5' component='h5' align='center'>
                                  Abner Borges
                                </Typography>
                                <Typography variant='h6' component='h6' align='center'>
                                    Desenvolvedora Full Stack 
                                </Typography>
                                <Typography variant='h6' component='h6' align='center'>
                                    Eng
                                </Typography>
                            </Box>

                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones'>

                            <a href=" " target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#f99e29" }} />
                            </a>
                            <a href=" https://www.linkedin.com/in/abner-borges-1b227a17a" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#f99e29" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box>
                        <Box>
                        <img className='box-fotos' src="" alt="Dev Mirella" />
                        </Box>

                        <Box >
                                <Typography variant='h5' component='h5' align='center'>
                                   Mirella Mirthes
                                </Typography>
                                <Typography variant='h6' component='h6' align='center'>
                                    Desenvolvedor Full Stack 
                                </Typography>
                                <Typography variant='h6' component='h6' align='center'>
                                Operador 
                                </Typography>
                            </Box>

                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones'>

                            <a href="" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#f99e29" }} />
                            </a>
                            <a href=" https://www.linkedin.com/in/mirella-mirthes-61186720b" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#f99e29" }} />
                            </a>
                        </Box>
                    </Box>
                


                </Grid>
            </Grid>
        </>
    );
}

export default Sobrenos;
