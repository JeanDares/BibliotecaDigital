import logo from '../../img/logo3.png'
import styled from 'styled-components'


const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImage = styled.img`
    margin-right: 10px; 
    width: 20%;
`

function Logo() {
    return (
        <LogoContainer> 
        
             <LogoImage 
                src={logo} 
                alt="logo" 
              />
         <p> <strong>Jean Books</strong>  Biblioteca Digital</p>
      </LogoContainer>
    )
}

export default Logo