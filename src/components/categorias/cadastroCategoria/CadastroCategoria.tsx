import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import {useHistory, useParams } from 'react-router-dom'
import './CadastroCategoria.css';
import Categoria from '../../../models/Categoria';
import { buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';


function CadastroCategoria() {
    let history = useHistory();
    const { id } = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        descricaoCategoria: '',
        produtoCategoria: '',
        impulso: false
    })

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                });
            history.push("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/categorias/${id}`, setCategoria, {
            headers: {
              'Authorization': token
            }
          })
        }

        function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {

            setCategoria({
                ...categoria,
                [e.target.name]: e.target.value,
            })
    
        }
        
        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
            console.log("categoria" + JSON.stringify(categoria))
    
            if (id !== undefined) {
                console.log(categoria)
                put(`/categorias`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Categoria atualizada com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                    });
            } else {
                post(`/categorias`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Categoria cadastrada com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                    });
            }
            back()
    
        }
    
        function back() {
            history.push('/categorias')
        }
  
    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro categoria</Typography>
                <TextField value={categoria.descricaoCategoria} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="descricaoCategoria" label="descricaoCategoria" variant="outlined" name="descricaoCategoria" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroCategoria;