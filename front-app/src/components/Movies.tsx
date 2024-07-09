/** @jsxImportSource @emotion/react */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styled } from '@mui/system';
import { useGetMoviesQuery } from '../services/api';
import svgImage from '../Svg/fon.svg';
import MoviesHeader from './MoviesHeader';

const settings = {
  infinite: true, 
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  swipeToSlide: true,
  draggable: true,
};

const Button = styled('button')({
  backgroundColor: 'transparent',
  transition: 'all 0.3s ease',
  '&:hover, &:focus, &:active': {
    borderColor: 'transparent',
    outline: 'none',
    boxShadow: 'none',
  },
});

const SliderDiv = styled('div')({
  width: '100%',
  height: '700px',
  marginTop: '50px',
  marginBottom: '100px',
  overflow: 'hidden',
  '.slick-slide': {
    padding: '0 10px',
    boxSizing: 'border-box',
  },
});

const Slid = styled('div')({
  width: '250px',
  height: '700px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  borderRadius: '15px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  minHeight: '100px',
  backgroundColor: 'gray',
  position: 'relative',
});

const SlidFon = styled('div')({
  width: '100%',
  height: '100%',
  borderRadius: '15px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
});

const SvgDiv = styled('div')({
  width: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundColor: 'gold',
  backgroundImage: `url(${svgImage})`,
  display: 'flex',
  minHeight: '696px',
  boxSizing: 'border-box',
});

const TextDiv = styled('div')({
  width: '384px',
  height: '58px',
  marginLeft: '96px',
  marginTop: '366px',
});

const TextSvg = styled('h2')({
  fontFamily: 'Cambria, Arial, sans-serif',
  fontStyle: 'normal',
  fontSize: '24px',
  fontWeight: '400',
  lineHeight: '29px',
  color: '#fff',
});

const TopMovies = styled('div')({
  width: '100%',
  height: '350px',
  display: 'flex',
  flexDirection: 'column',
  marginTop: '0px',
});

const FirstTopMovies = styled('div')({
  width: '100%',
  height: '312px',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
});

const DivImg = styled('div')({
  width: '211px',
  height: '312px',
  borderRadius: '15px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
});

const DivName = styled('div')({
  width: '268px',
  marginLeft: '33px',
  marginTop: '0px',
  display: 'block',
});

const H1name = styled('h1')({
  marginTop: '0px',
  fontFamily: 'Cambria',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '32px',
  lineHeight: '38px',
  color: '#000000',
  width: '268px',
  height: '144px',
  display: 'flex',
});

const Divgenre = styled('div')({
  width: '268px',
  height: '144px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const H2genre = styled('h2')({
  display: 'flex',
  alignItems: 'start',
  fontFamily: 'Cambria',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '24px',
  lineHeight: '29px',
  whiteSpace: 'pre-line',
});

const H2year = styled('h2')({
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Cambria',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '24px',
  lineHeight: '29px',
});

const DivText = styled('div')({
  width: '838px',
  height: '312px',
  marginLeft: '125px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  borderRadius: '15px',
  border: '3px solid #4437DE',
});

const H2Text = styled('h2')({
  marginTop: '0px',
  fontFamily: 'Cambria',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '24px',
  lineHeight: '29px',
  color: '#000000',
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



interface Movie {
  id: number;
  name: string;
  poster?: {
    url?: string;
  };
  genres: {
    name: string;
  }[];
  year: number;
  description: string;
  [key: string]: any;
}

const Movies: React.FC = () => {
  const { data: movies, isLoading, error } = useGetMoviesQuery({});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !movies) {
    return <div>Error loading movie data</div>;
  }


  return (
    <div>
      <MoviesHeader></MoviesHeader>
      <SvgDiv>
        <TextDiv>
          <TextSvg>И сотни других фильмов и сериалов на твоё.кино</TextSvg>
        </TextDiv>
      </SvgDiv>
      <SliderDiv>
        <Slider {...settings}>
          {movies.docs.slice(0, 10).map((movie: Movie) => (
            <Slid key={movie.id}>
              <SlidFon style={{ backgroundImage: `url(${movie.poster?.url || ''})` }} />
            </Slid>
          ))}
        </Slider>
      </SliderDiv>

      {movies.docs.slice(0, 3).map((movie: Movie) => (
        <TopMovies key={movie.id}>
          <FirstTopMovies>
            <DivImg style={{ backgroundImage: `url(${movie.poster?.url || ''})` }} />
            <DivName>
              <H1name>{movie.name}</H1name>
              <Divgenre>
                <H2genre>{movie.genres.map((genre) => genre.name).join(', ')}</H2genre>
                <H2year>{movie.year}</H2year>
              </Divgenre>
            </DivName>
            <DivText>
              <H2Text>{movie.description}</H2Text>
            </DivText>
          </FirstTopMovies>
        </TopMovies>
      ))}
      <Footer>
        <Line />
        <Sections>
          <H1Sections>Разделы</H1Sections>
          <BTNSections>
            <Button>Фильмы</Button>
            <Button>Сериалы</Button>
            <Button>Мультфильмы</Button>
          </BTNSections>
        </Sections>
      </Footer>
    </div>
  );
};

export default Movies;