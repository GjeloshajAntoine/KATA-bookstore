import styled from "styled-components";

const StyledItem = styled.div`
    width: 150px;
    height: 200px;
    position: relative;
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
    display: inline-block;
    position: absolute;
    padding: 5px;
    background-color: #00ff00;
    right: 0px;
    bottom: 0px;
    transform: rotate(-15deg);
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