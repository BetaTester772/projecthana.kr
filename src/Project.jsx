import Header from './components/Header.jsx';
import styled from '@emotion/styled';
import ProjectItem from './components/ProjectItem.jsx';
import data from './data/projects.json';

export default function Project() {
  return (
    <>
      <Header/>
      <Container>
        <h1>융합탐구팀</h1>
        <h2>융합탐구팀의 모든 연구를 보실 수 있습니다.</h2>
        <ItemArea>
          { data.map((item, index) => (
            <ProjectItem
              key={ index }
              title={ item.title }
              author={ item.author }
              link={ item.link ? item.link : `/project/${index+1}` }
            />
          )) }
        </ItemArea>
      </Container>
    </>
  )
}

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  padding: 10px 5px;

  & > h1 {
    margin: 0 auto;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
  & > h2 {
    margin: 10px auto;
    font-size: 15px;
  }
`;

const ItemArea = styled.div`
    width: 100%;
`;
