import { Link } from 'react-router'
import styled from 'styled-components';

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 5%;

`;

const StyledCart = styled.p`
    float right;
`;

export function Header() {
    return( <StyledHeader>
        <Link to="/" >
            <h1>Book Store</h1>
        </Link>
        <Link to="/cart">
            <StyledCart>Cart</StyledCart>
        </Link>
    </StyledHeader>);
}