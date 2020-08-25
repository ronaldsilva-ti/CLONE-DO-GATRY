import React from 'react';
import {
    PromotionCardContainer,
    PromotionCardImage,
    PromotionCardInfoContainer,
    PromotionCardTitle,
    PromotionCardPrice,
    PromotionCardFooter,
    PromotionCardCommentsCount,
    PromotionCardLink,
    PromotionCardComments
} from './CardStyles.js'

export default function PromotionCard({promotion}){
    return(
        <PromotionCardContainer>
            <PromotionCardImage src={promotion.imageUrl} alt={promotion.title}/>
            <PromotionCardInfoContainer>
                <PromotionCardTitle>{promotion.title}</PromotionCardTitle>
                <PromotionCardPrice>R$ {promotion.price}</PromotionCardPrice>
                <PromotionCardFooter>
                    {promotion.comments.length > 0 && (
                        <PromotionCardComments>
                            "{promotion.comments[0].comment}"
                        </PromotionCardComments>
                    )}
                    <PromotionCardCommentsCount>{promotion.comments.length} {' '}
                     {promotion.comments.length > 1 ? 'Comentarios' : 'Comentario'} </PromotionCardCommentsCount>
                    <PromotionCardLink href={promotion.url} target="_blank">IR PARA O SITE</PromotionCardLink>
                </PromotionCardFooter>
            </PromotionCardInfoContainer>
        </PromotionCardContainer>
    )
}