import Header from './components/Header.jsx';
import styled from '@emotion/styled';
import ResearchItem from './components/ResearchItem.jsx';

export default function Research() {
  return (
    <>
      <Header/>
      <Container>
        <h1>연구논문팀</h1>
        <ItemArea>
          <ResearchItem author="권동한, 김민건" title="하나고등학교 학생들의 학교생활 만족도와 학교생활 만족도에 영향을 미치는 요소"
                        posterlink="https://google.com" reportlink="https://google.com"/>
          <ResearchItem author="권동한, 김민건" title="하나고등학교 학생들의 학교생활 만족도와 학교생활 만족도에 영향을 미치는 요소"
                        posterlink="https://google.com" reportlink="https://google.com"/>
          <ResearchItem author="권동한, 김민건" title="하나고등학교 학생들의 학교생활 만족도와 학교생활 만족도에 영향을 미치는 요소"
                        posterlink="https://google.com" reportlink="https://google.com"/>
          <ResearchItem author="권동한, 김민건" title="하나고등학교 학생들의 학교생활 만족도와 학교생활 만족도에 영향을 미치는 요소"
                        posterlink="https://google.com" reportlink="https://google.com"/>
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
