

const Tabela = () => {
    return(
        <table>
           <thead>
                <tr>
                    <td>Taxa mínima</td>
                    <td>Preço/taxa</td>
                    <td>Valor m<sup>3</sup> em excesso</td>
                    <td>Valor mínimo</td>
                </tr>

                <tr>
                    <td>15<sup>3</sup></td>
                    <td>R$25,00</td>
                    <td>R$5,00</td>
                    <td>R$25,00</td>
                </tr>
           </thead>

           <tbody>
                <tr>
                    <td>Leitura anterior</td>
                    
                </tr>

                <tr><td>{cliente.leitAnt}</td></tr>
           </tbody>
        </table>
    )
}

export default Tabela;
