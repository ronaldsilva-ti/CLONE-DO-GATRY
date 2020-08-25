import styled from 'styled-components';

export const PromotionCardContainer = styled.div`
    border-radius:8px;
    border: 1px solid #c3c3c3;
    box-shadow: 0 2px 7px 0 rgba(0,0,0,0.15);
    display:flex;
    padding:15px;
    align-items:flex-start;
`;
export const PromotionCardImage = styled.img`
    max-width:100px;
    margin-right:20px;
`;

export const PromotionCardInfoContainer = styled.div``

export const PromotionCardTitle = styled.h1`
    font-size:16px;
    color: #2c3e50;
`;

export const PromotionCardPrice= styled.span`
    font-size:26px;
    font-weight:700;
    color:#3498db;
`;
export const PromotionCardFooter= styled.footer`
    display:flex;
    align-items:center;
`;
export const PromotionCardCommentsCount= styled.div`
    margin-left:auto;
    margin-right:20px;
    color:#3498db;
`;

export const PromotionCardComments= styled.div`
    color: #95A5a6;
    font-weight:700;
`;

export const PromotionCardLink = styled.a`
    border: 1px solid #3498D8;
    border-radius:4px;
    color: #3498d8;
    text-decoration: none;
    padding:8px 10px;
    :hover{
    border: 1px solid white;
    border-radius:4px;
    color: white;
    text-decoration: none;
    padding:8px 10px;
    background-color:#3498db;
    }
`



