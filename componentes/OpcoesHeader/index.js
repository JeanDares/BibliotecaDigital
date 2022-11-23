import styled from 'styled-components'

const Opcao = styled.li`
    font-size: 16px;
    min-width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 5px;
    cursor: pointer;
    height: 100%;
`
const Opcoes = styled.ul`
    display: flex;
`

const textoOpcoes = ['Categorias', 'Favoritos', 'Minha estante'] /* essa const possibilita a criação de listas*/



function OpcoesHeader() {
    return (
        <Opcoes>
            { textoOpcoes.map( (texto) =>(
                 <Opcao><p>{texto}</p></Opcao>  /* nesse caso eu chamo a const para adicionar a lista (capitulo 2 aula 4 do curs ode react)  */
            ) ) }
        </Opcoes>
    )
}

export default OpcoesHeader