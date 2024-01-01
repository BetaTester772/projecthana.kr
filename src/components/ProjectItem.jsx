import styled from '@emotion/styled';

export default function ProjectItem({ title, author, link }) {
  return (
    <>
      <Container>
        <Name>{ title }</Name>
        <ButtonArea>
          <Author>{ author }</Author>
          <a href={ link }><DownloadButton>내용 보기</DownloadButton></a>
        </ButtonArea>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-top: 10px;
`;

const Name = styled.h2`
  font-size: 20px;
  margin: 0;
  word-break-cjk: break-word;
`;

const Author = styled.h3`
  font-size: 15px;
  margin: 10px 0;
  margin-right: 5px;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const DownloadButton = styled.button`
  border: 1px solid black;
  padding: 5px;
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
