import {livros} from './dadosUltimosLivros'
import {Titulo} from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import imagemLivro1 from '../../img/livro2.png'
import imagemlivro2 from '../../img/img3.jpg'
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`


const NovosLivrosContainer = styled.div`
    margin: 30px 0;
    display: flex;
    width: 100%;
    
    cursor: pointer;
    justify-content: space-around;

    
`



function UltimosLancamentos () {
    return(

        <UltimosLancamentosContainer>
                <Titulo 
                    cor="#EB9B00"
                    tamanhoFonte="36px"                 
                >ÚLTIMOS LANÇAMENTOS</Titulo>
                

                <NovosLivrosContainer>
                    { livros.map( livro => (
                        <img alt='img' src={livro.src}/>
                    ) ) }
                </NovosLivrosContainer>

                <CardRecomenda
                    titulo='Talvez você se interesse por...'
                    subtitulo='Angular 11'
                    descricao='Construindo uma aplicação com a plataforma Google'
                    img={imagemLivro1}
                />

                <CardRecomenda
                    titulo='Talvez você se interesse por...'
                    subtitulo='Tecnologia da Informação e Comunicação'
                    descricao='Tecnicas de comunicação em um ambiente tecológico'
                    img={imagemlivro2}
                />

                
        </UltimosLancamentosContainer>
        
    )
}


export default UltimosLancamentos