import { useState } from "react";
import "../src/globals.css";

export default function App() {
    const [listaProdutos, setProdutos] = useState([
        {
            id: 1,
            item: "hamburger",
            imagem: "https://www.assai.com.br/sites/default/files/shutterstock_1806472312.jpg",
            preco: "R$ 25,99"
        },
        {
            id: 2,
            item: "Coca-cola 350ml",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4S15squn95k7qtrVOpMX1MOJGe48y4B7FQ&s",
            preco: "R$ 5,99"
        },
        {
            id: 3,
            item: "Batatas fritas",
            imagem: "https://gastronomiacarioca.zonasul.com.br/wp-content/uploads/2023/05/batata_frita_destaque_ilustrativo_zona_sul.jpg",
            preco: "R$ 8,99"
        },
        {
            id: 4,
            item: "Suco de Frutas",
            imagem: "https://helenalunardelli.com.br/wp-content/uploads/2013/02/sucos.jpg",
            preco: "R$ 8,99"
        },
    ]);

    const [listaPedidos, setPedidos] = useState([]);

    const adicionarItemPedidos = (objeto) => {
        setItemPedidos([...listaPedidos, objeto]);
    };
console.table(listaPedidos);


const removerItem = (id)=> {
    let remover = false;
    let listaAux = listaPedidos.filter((produto)=> {

    if(remover == false){
        if(produto.id !== id){
            return produto
        }else{
            remover = true;
            return null
        }
    } else{
        return produto
    }
       
 } );
    setListaPedidos(listaAux)
}

    return (
    <div className="bloco-principal">
              <div className="bloco-produtos">
     {listaProdutos.map((produto) => (
                    <div key={produto.id}>
                 <img src={produto.imagem} alt={produto.item} />
                 <p>{produto.item}</p>
                 <p>{produto.preco}</p>
                     <button onClick={() => adicionarProdutoPedido(produto)}>Adicionar</button>
         </div>
    ))}
        </div>
    <div className="bloco-pedidos">
         <p>Meus Pedidos</p>
                   <table>
             <thead>
         <tr>
          <th>Pedido</th>
          <th>Valor</th>
         </tr>
             </thead>
           <tbody>

           {listaPedidos.map((produto) => (
      <tr key={produto.id}>
         <td>{produto.item}</td>
                <td>{produto.preco}
                  <button onClick={() => removerPedido(produto.id)}>X</button>
                
                </td>
                </tr>
    ))}
      </tbody>
              
        </table>
       </div>
         </div>
    );
}
