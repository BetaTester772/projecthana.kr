import Header from './components/Header.jsx';
import styled from '@emotion/styled';
import CreditItem from './components/CreditItem.jsx';

import RyanPhoto from './assets/pfp/ryan.png';

export default function Credit() {
  return (
    <>
      <Header/>
      <Container>
        <h1>만든 사람들</h1>
        <ItemArea>
          <CreditItem name={ '권동한' } role={ '대표' } links={ [] }
                      profile={ RyanPhoto }/>
        </ItemArea>
      </Container>
    </>
  )
}

const Container = styled.div`
    margin: 0 auto;
    width: min(1500px, 100%);
  border: 1px solid black;
    padding: 10px 5px;
    & > h1 {
        margin: 0 auto;
    }
`;

const ItemArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  border: 1px solid black;
`;
