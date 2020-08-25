import React from 'react';
import PromotionSearch from 'components/Promotion/Search/Search'
import styled from 'styled-components';



export default function PagesPromotionSearch(){

    return (
        <Container>
          <PromotionSearch/>
       </Container>
    )
}


const Container = styled.div`
  max-width:800px;
  margin:30px auto;

`