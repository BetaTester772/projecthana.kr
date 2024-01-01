import Header from './components/Header.jsx';
import styled from '@emotion/styled';
import ResearchItem from './components/ResearchItem.jsx';
import data from './data/research.json';

export default function Research() {
  return (
    <>
      <Header/>
      <Container>
        <h1>연구논문팀</h1>
        <h2>연구논문팀의 포스터와 보고서를 여기에서 보실 수 있습니다.</h2>
        <ItemArea>
          { data.map((item, index) => {
            return <ResearchItem key={ index } author={ item.author } title={ item.title } posterlink={
              `${ window.location.origin }/files/research/${ item.id }_poster.pdf`
            } reportlink={
              `${ window.location.origin }/files/research/${ item.id }_paper.pdf`
            } preview={ `/files/poster_preview/preview_${ item.id }.jpg` }
            />;
          }) }
        </ItemArea>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  padding: 10px 5px;

  & > h1 {
    margin: 0 auto;
  }
  & > h2 {
    margin: 10px auto;
    font-size: 15px;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

const ItemArea = styled.div`
  width: 100%;
`;
