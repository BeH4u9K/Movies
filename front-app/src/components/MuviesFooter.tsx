import React from 'react';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const Button = styled('button')({
  backgroundColor: 'transparent',
  transition: 'all 0.3s ease',
  margin: '0 10px',
  fontSize: '16px',
  '&:hover, &:focus, &:active': {
    borderColor: 'transparent',
    outline: 'none',
    boxShadow: 'none',
  },
  '@media (max-width: 600px)': {
    fontSize: '14px',
    margin: '5px 0',
  },
});

const Footer = styled('footer')({
  width: '100%',
  height: '400px',
  background: 'linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #4437DE 100%)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  '@media (max-width: 600px)': {
    height: '300px',
  },
});

const Line = styled('div')({
  width: '90%',
  height: '2px',
  backgroundColor: '#4437DE',
  marginBottom: '20px',
  '@media (max-width: 600px)': {
    width: '80%',
  },
});

const Sections = styled('div')({
  width: '152px',
  '@media (max-width: 600px)': {
    width: '100%',
  },
});

const H1Sections = styled('h1')({
  width: '100%',
  display: 'block',
  fontFamily: 'Cambria',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '24px',
  lineHeight: '28px',
  '@media (max-width: 600px)': {
    fontSize: '20px',
    lineHeight: '24px',
  },
});

const BTNSections = styled('div')({
  width: '100%',
  display: 'inline-block',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  '@media (max-width: 600px)': {
    display: 'flex',
    flexDirection: 'column',
  },
});

const MuviesFooter = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/moviesSearch');
  };

  return (
    <Footer>
      <Line />
      <Sections>
        <H1Sections>Разделы</H1Sections>
        <BTNSections>
          <Button onClick={onClick}>Фильмы</Button>
          <Button onClick={onClick}>Сериалы</Button>
          <Button onClick={onClick}>Мультфильмы</Button>
        </BTNSections>
      </Sections>
    </Footer>
  );
};

export default MuviesFooter;
