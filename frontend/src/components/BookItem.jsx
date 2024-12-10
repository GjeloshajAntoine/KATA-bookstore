import styled from "styled-components";

const StyledItem = styled.div`
    width: 150px;
    height: 200px;
    padding-top: 5px;
    background-color: #ffffb3;
    &:hover {
        background-color: #ffff87;
        cursor: pointer;
    }
    text-align: center;
`
const StyledTitle = styled.p`
   font-size: 20px;
   font-style: bold;
`

const StyledAuthor = styled.p`
`

const StyledPrice= styled.span`
    border-radius: 100%;
    padding: 5px;
    background-color: #00ff00;
    display: inline-block;
    margin: 65% 80% 0;
`

export function BookItem({name, author, price}) {
    return (
        <StyledItem>
            <StyledTitle>{name}</StyledTitle>
            <StyledAuthor>{author}</StyledAuthor>
            <StyledPrice>{price}</StyledPrice>
        </StyledItem>
    )
}