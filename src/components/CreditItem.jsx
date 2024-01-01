import styled from '@emotion/styled';

export default function CreditItem({name, role, links, profile}) {
  return (
    <>
      <Container>
        <Profile src={profile} alt="profile" />
        <Name>{name}</Name>
        <div>{role}</div>
        {
          links.length !== 0 ? (
            <LinkArea>
              {
                links.map((link, index) => {
                  return (
                    <Link src={link} key={index} alt={`link-${index}`} />
                  )
                  
                })
              }
            </LinkArea>
          ) : undefined
        }
      </Container>
    </>
  )
}

const Container = styled.div`
    margin: 15px;
    height: 300px;
    width: 300px;
  border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Profile = styled.img`
  height: 150px;
  width: 150px;
  border: 1px solid black;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const Name = styled.h2`
  font-size: 20px;
`;

const Link = styled.img`
  height: 30px;
    margin: 5px;
`;

const LinkArea = styled.div`
  margin: 5px;
  `;
