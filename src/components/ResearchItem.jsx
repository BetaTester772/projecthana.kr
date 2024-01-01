import styled from '@emotion/styled';

export default function ResearchItem({title, author, reportlink, posterlink}) {
  return (
    <>
      <Container>
        <Name>{title}</Name>
        <Author>{author}</Author>
        <ButtonArea>
          <a href={ reportlink } target="_blank" rel="noreferrer"><DownloadButton>논문 다운로드</DownloadButton></a>
          <a href={ posterlink } target="_blank" rel="noreferrer"><DownloadButton>포스터 다운로드</DownloadButton></a>
        </ButtonArea>
      </Container>
    </>
  )
}

const Container = styled.div`
    padding: 10px;
    margin-top: 20px;
    width: 1000px;
    min-width: 300px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: black;
    color: white;
`;

const Name = styled.h2`
  font-size: 20px;
    margin: 0;
`;

const Author = styled.h3`
  font-size: 15px;
    margin: 10px 0;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
`;

const DownloadButton = styled.button`
    font-family: 'Pretendard Variable', sans-serif;
  border: 1px solid black;
  padding: 8px 10px;
  background-color: white;
    color: black;
    font-weight: bold;
    margin-right: 5px;
`;
