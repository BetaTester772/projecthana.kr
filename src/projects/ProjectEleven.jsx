import Markdown from 'react-markdown';
import styled from '@emotion/styled';

const data = `
[KOR](https://youtu.be/HabtzJWrxDg) / [ENG](https://youtu.be/0aog1tXxcn8)
`

export default function ProjectEleven() {
  return (
    <Container>
      <Markdown>
        {data}
      </Markdown>
    </Container>
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
`;
