import styled from "styled-components";
import Image from "next/image";
import Button from "./Button";

const Bg = styled.div`
  background-color: #b8b5b5;
  color: #000;
  padding: 50px 0;
`;

const Desc = styled.p`
  color: #000;
  font-size: 1.2rem;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;



const Wrapper = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
margin: 3%;
`;

const Img = styled.div`
  border-radius: 5px;
  display: block;
  margin: 0 auto;
`;
export default function Featured() {
  return (
    <Bg>
      <Wrapper>
        <div>
          <Title>Pro Anywhere</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            laborum officiis officia ex et tempore fugiat iste totam voluptas
            fuga. Fuga error mollitia non suscipit laudantium dignissimos atque
            libero delectus.
          </Desc>
          <Button  green size="l">
            Add to cart
          </Button>
          <Button backgroundColor="black" size="l">
            Buy now
          </Button>
        </div>
        <Img>
          <Image
            src="/images/Television.jpg"
            alt="Description of your image"
            width={500}
            height={200}
          />
        </Img>
      </Wrapper>
    </Bg>
  );
}
