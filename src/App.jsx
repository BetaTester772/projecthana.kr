import Header from './components/Header.jsx';
import styled from '@emotion/styled';
import HASLogo from './assets/has_logo_white.svg';

export default function App() {
  return (
    <MainDiv>
      <Header/>
      <Container>
        <TextArea>
            하나에서 시작하는 변화<br/>
            은평으로 퍼지는 미래
        </TextArea>
      </Container>
    </MainDiv>
  )
}

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.67) 100%, rgba(0, 0, 0, 0.67) 100%), url("https://upload.wikimedia.org/wikipedia/commons/d/d1/Hana_Academy_Seoul_20200920_004.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
`;

const Container = styled.div`
    height: calc(100vh - 30px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;

const TextArea = styled.div`
    font-weight: bolder;
    width: 400px;
    height: 300px;
    font-size: 40px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 450px){
        width: 80%;
        font-size: 20px;
    }
    text-align: center;
    `;
