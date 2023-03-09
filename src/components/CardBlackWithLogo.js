import Card from "./Card"
import styled from 'styled-components';
import logo from '../images/logo.png'

const StyledImg= styled.img`
`;

const CardBlackWithLogo = () => {
    return (
        <Card
            width="360"
            height="282"
            background="black"
        >
            <StyledImg src={logo} /> 
        </Card>
    )
}

export default CardBlackWithLogo;