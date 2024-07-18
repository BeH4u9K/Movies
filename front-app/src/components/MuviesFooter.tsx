import React from 'react';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const Button = styled('button')({
    backgroundColor: 'transparent',
    transition: 'all 0.3s ease',
    '&:hover, &:focus, &:active': {
      borderColor: 'transparent',
      outline: 'none',
      boxShadow: 'none',
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
  });
  
  const Line = styled('div')({
    width: '90%',
    height: '2px',
    backgroundColor: '#4437DE',
    marginBottom: '20px',
  });
  
  const Sections = styled('div')({
    width: '152px',
  });
  
  const H1Sections = styled('h1')({
    width: '100%',
    display: 'block',
    fontFamily: 'Cambria',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '24px',
    lineHeight: '28px',
  });
  
  const BTNSections = styled('div')({
    width: '100%',
    display: 'inline-block',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  });

const MuviesFooter = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/moviesSearch');
  };
    return (
        <div>
            <Footer>
                <Line />
                <Sections>
                    <H1Sections>Разделы</H1Sections>
                    <BTNSections >
                        <Button onClick={onClick}>Фильмы</Button>
                        <Button onClick={onClick}>Сериалы</Button>
                        <Button onClick={onClick}>Мультфильмы</Button>
                    </BTNSections>
                </Sections>
            </Footer>
        </div>
    );
};

export default MuviesFooter;