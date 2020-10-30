import React from 'react';
import styled from '@emotion/styled';
import { Link, graphQl, useStaticQuery } from 'gatsby';

const ImageBackground = styled('div')`
  background-image: url('/images/sean-click-wave.jpg');
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;

  + * {
    margin-top: 0;
  }
`;

const TextBox = styled('div')`
  background-image: linear-gradient(to bottom, white 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }

  p,
  a {
    color: #222;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  return (
    <ImageBackground>
      <TextBox>
        <div>
          <h1>Frontend Masters + Gatsby &hearts;</h1>
          <p>
            Hello San Diego <Link to="/about/">Learn About me &rarr;</Link>
          </p>
        </div>
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;
