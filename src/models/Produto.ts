import Categoria from './Categoria'

interface Produto{
    id: number;
    titulo: string;
    autor: string;
    sinopse: string;
    // editora: string;
    // diretorio: string;
    preco: string;
    foto: string;
    // fisico: string;
    // promo: string;
    categoria?: Categoria| null
}

export default Produto;