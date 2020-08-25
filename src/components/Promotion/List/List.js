import React from 'react';
import PromotionCard from 'components/Promotion/Card/Card';
import styled from 'styled-components';



const PromotionListContainer = styled.div``

const PromotionList = ({loading,promotions}) => {
    if(loading){
        return <div>Carregando..</div>
    }
    return(
        <PromotionListContainer>
            {
                promotions.map(promotion => (
                <PromotionCard promotion={ promotion }/>   
            ))
            } 
        </PromotionListContainer>
    )
}

export default PromotionList;