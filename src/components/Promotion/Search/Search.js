import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import PromotionList from 'components/Promotion/List/List';

import { Link } from 'react-router-dom';

import { 
  PromotionSearchContainer,
  PromotionSearchHeader,
  TitlePromotion,
  Input
}from './SearchStyles';

export default function PromotionSearch(){
      const [ promotions,setPromotions ] = useState([]);
      const [search, setSearch] = useState('');

      useEffect(() => {

        const params = {};

        if(search) params.title_like = search

        axios.get('http://localhost:5000/promotions?_embed=comments', { params })
        .then(response => setPromotions(response.data))


      }, [ search ]);

    return (
        <PromotionSearchContainer>

          <PromotionSearchHeader>
            <TitlePromotion>Promo Show</TitlePromotion>
            <Link to={'/create'} >Nova Promoção</Link>
          </PromotionSearchHeader>

            <Input type="search" placeholder="Buscar" value={ search } onChange={(event) => setSearch(event.target.value)} />
            <PromotionList promotions={promotions} loading={!promotions.length}/>
      </PromotionSearchContainer>
    )
}