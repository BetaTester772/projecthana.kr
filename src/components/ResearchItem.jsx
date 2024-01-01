import styled from '@emotion/styled';

export default function ResearchItem({ title, author, reportlink, posterlink }) {
  return (
    <>
      <Container>
        <Name>{ title }</Name>
        <Author>{ author }</Author>
        <ButtonArea>
          <a href={ reportlink } target="_blank" rel="noreferrer"><DownloadButton>논문 다운로드</DownloadButton></a>
          <a href={ posterlink } target="_blank" rel="noreferrer"><DownloadButton>포스터 다운로드</DownloadButton></a>
        </ButtonArea>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 15px;
  width: calc(100% - 30px);
  margin: 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const Name = styled.span`
  font-size: 20px;
  margin: 0;
  word-break-cjk: break-word;
`;

const Author = styled.span`
  font-size: 15px;
  margin: 10px 0;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
`;

const DownloadButton = styled.button`
  border: 1px solid black;
  padding: 8px 10px;
  font-weight: bold;
  margin-right: 5px;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: black;
    color: white;
    transition: all 0.2s ease-in-out;
  }
`;
