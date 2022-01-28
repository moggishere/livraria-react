import Categoria from './Categoria'

interface Produto{
    id: number;
    titulo: string;
    autor: string;
    sinopse: string;
    editora: string;
    /* file_directory - confirmar se este mesmo */
    preco: number;
    foto: string;
    fisico: boolean;
    promo: boolean;
    categoria?: Categoria| null
}

export default Produto;