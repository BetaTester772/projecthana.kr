import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

export default function ProjectItem({ title, author, link, target }) {
  const navigate = useNavigate();

  const openLink = () => {
    if (target === "_blank") {
      window.open(link, "_blank");
    } else {
      window.location.href = link;
    }
  };

  return (
    <>
      <Container onClick={ openLink }>
          <Name>{ title }</Name>
          <Author>{ author }</Author>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 15px;
  margin: 25px 0;
  cursor: pointer;
  width: calc(100% - 30px);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const Name = styled.span`
  font-size: 20px;
  margin: 0;
  word-break-cjk: break-word;
`;

const Author = styled.span`
  font-size: 15px;
  margin: 0;
  margin-top: 5px;
`;
