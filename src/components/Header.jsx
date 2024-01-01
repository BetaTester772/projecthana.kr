import styled from '@emotion/styled';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <>
      <Container>
        <HeaderArea>
          <Link className="link link-header mainpagemain" to="/">지역연계</Link>
          <LinkArea>
            <Link className="link link-header" to="/project">융합탐구팀</Link>
            <Link className="link link-header" to="/research">연구논문팀</Link>
            <Link className="link link-header" to="/credit">만든 사람들</Link>
          </LinkArea>
        </HeaderArea>
      </Container>
    </>
  )
}

const LinkArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    padding: 10px 5px;
    height: 60px;
    width: 100vw;
  border: 1px solid black;
  align-items: center;
  display: flex;
  justify-content: center;
  `;

const HeaderArea = styled.div`
    height: calc(100% - 20px);
    padding: 10px;
    margin: 0 auto;
  display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 450px){
        width: 100%;
    }
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    background-color: white;
  `;
