import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';

export default function ProjectItem({ title, author, link }) {
  const navigate = useNavigate();
  return (
    <>
      <Container onClick={() => {navigate(link)}}>
          <Name>{ title }</Name>
          <Author>{ author }</Author>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 10px;
  margin: 15px 0;
  cursor: pointer;
  width: 100%;
  border-radius: 5px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const Name = styled.h2`
  font-size: 20px;
  margin: 0;
  word-break-cjk: break-word;
`;

const Author = styled.h3`
  font-size: 15px;
  margin: 0;
  margin-top: 5px;
`;
