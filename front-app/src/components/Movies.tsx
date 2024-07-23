import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styled } from '@mui/system';
import { useGetMoviesQuery } from '../services/api';
import svgImage from '../Svg/fon.svg';
import MoviesHeader from './MoviesHeader';
import MuviesFooter from './MuviesFooter';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  swipeToSlide: true,
  draggable: true,
  responsive: [
    {
      breakpoint: 1024, // планшеты
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600, // телефоны
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

const SliderDiv = styled('div')({
  width: '100%',
  height: '550px',
  marginTop: '50px',
  marginBottom: '100px',
  overflow: 'hidden',
  '.slick-slide': {
    padding: '0 10px',
    boxSizing: 'border-box',
  },
  '@media (max-width: 1024px)': {
    height: '450px',
  },
  '@media (max-width: 600px)': {
    height: '350px',
  },
});

const Slid = styled('div')({
  width: '250px',
  height: '550px',
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
  '@media (max-width: 1024px)': {
    width: '200px',
    height: '450px',
  },
  '@media (max-width: 600px)': {
    width: '150px',
    height: '350px',
  },
});

const SlidFon = styled('div')({
  width: '100%',
  height: '550px',
  borderRadius: '15px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  '@media (max-width: 1024px)': {
    height: '450px',
  },
  '@media (max-width: 600px)': {
    height: '350px',
  },
});

const SvgDiv = styled('div')({
  width: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundImage: `url(${svgImage})`,
  display: 'flex',
  minHeight: '696px',
  boxSizing: 'border-box',
  '@media (max-width: 1024px)': {
    minHeight: '500px',
  },
  '@media (max-width: 600px)': {
    minHeight: '350px',
  },
});

const TextDiv = styled('div')({
  width: '384px',
  height: '58px',
  marginLeft: '96px',
  marginTop: '366px',
  '@media (max-width: 1024px)': {
    marginLeft: '48px',
    marginTop: '250px',
  },
  '@media (max-width: 600px)': {
    marginLeft: '24px',
    marginTop: '150px',
  },
});

const TextSvg = styled('h2')({
  fontFamily: 'Cambria, Arial, sans-serif',
  fontStyle: 'normal',
  fontSize: '24px',
  fontWeight: '400',
  lineHeight: '29px',
  color: '#fff',
  '@media (max-width: 600px)': {
    fontSize: '18px',
    lineHeight: '24px',
  },
});

const TopMovies = styled('div')({
  width: '100%',
  height: '350px',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  marginTop: '0px',
  '@media (max-width: 1024px)': {
    height: '300px',
  },
  '@media (max-width: 600px)': {
    flexDirection: 'column',
    height: 'auto',
  },
});

const FirstTopMovies = styled('div')({
  width: '78%',
  height: '312px',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
  cursor: 'pointer',
  '@media (max-width: 1024px)': {
    width: '90%',
    height: '250px',
  },
  '@media (max-width: 600px)': {
    width: '100%',
    height: 'auto',
    flexDirection: 'column',
  },
});

const DivImg = styled('div')({
  width: '211px',
  height: '312px',
  borderRadius: '15px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  '@media (max-width: 1024px)': {
    width: '180px',
    height: '250px',
  },
  '@media (max-width: 600px)': {
    width: '150px',
    height: '200px',
  },
});

const DivName = styled('div')({
  width: '268px',
  marginLeft: '33px',
  marginTop: '0px',
  display: 'block',
  '@media (max-width: 1024px)': {
    width: '200px',
    marginLeft: '16px',
  },
  '@media (max-width: 600px)': {
    width: '100%',
    marginLeft: '0',
    textAlign: 'center',
  },
});

const H1name = styled('h1')({
  marginTop: '0px',
  fontFamily: 'Cambria',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '32px',
  lineHeight: '38px',
  color: '#000000',
  height: '144px',
  display: 'flex',
  '@media (max-width: 1024px)': {
    fontSize: '24px',
    lineHeight: '28px',
    height: 'auto',
  },
  '@media (max-width: 600px)': {
    fontSize: '20px',
    lineHeight: '24px',
    height: 'auto',
  },
});

const Divgenre = styled('div')({
  width: '268px',
  height: '144px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '@media (max-width: 1024px)': {
    width: '200px',
    height: 'auto',
  },
  '@media (max-width: 600px)': {
    width: '100%',
    height: 'auto',
  },
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
  '@media (max-width: 1024px)': {
    fontSize: '20px',
    lineHeight: '24px',
  },
  '@media (max-width: 600px)': {
    fontSize: '18px',
    lineHeight: '22px',
  },
});

const H2year = styled('h2')({
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Cambria',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '24px',
  lineHeight: '29px',
  '@media (max-width: 1024px)': {
    fontSize: '20px',
    lineHeight: '24px',
  },
  '@media (max-width: 600px)': {
    fontSize: '18px',
    lineHeight: '22px',
  },
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
  '@media (max-width: 1024px)': {
    width: '600px',
    height: '250px',
    marginLeft: '50px',
  },
  '@media (max-width: 600px)': {
    width: '90%',
    height: 'auto',
    marginLeft: '0',
    marginTop: '20px',
  },
});

const H2Text = styled('h2')({
  marginTop: '0px',
  fontFamily: 'Cambria',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '24px',
  lineHeight: '29px',
  color: '#000000',
  '@media (max-width: 600px)': {
    fontSize: '20px',
    lineHeight: '24px',
  },
});

const DivNameText = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  '@media (max-width: 600px)': {
    flexDirection: 'column',
  },
});

const DivShimmer = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
});

const CastomError = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  width: '100%',
  height: '45px'
});

const CastomBorder = styled('div')({});

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
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <DivShimmer>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10%' }}>
          <CircularProgress style={{ color: '#4437DE' }} />
        </Box>
      </DivShimmer>
    );
  }

  if (error) {
    if ('status' in error && error.status === 401) {
      return <div>Ошибка: Не авторизован (401)</div>;
    }
    return <div>
      <CastomError>
        <CastomBorder>
          Ошибка: {(error as any).data?.message || 'проверьте подключение к интернету'}
        </CastomBorder>
      </CastomError>
    </div>;
  }

  const handleOpenViewer = (id: number) => {
    navigate(`/MoviesViewer/${id}`);
  };

  return (
    <div>
      <MoviesHeader />
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
          <FirstTopMovies onClick={() => handleOpenViewer(movie.id)}>
            <DivImg style={{ backgroundImage: `url(${movie.poster?.url || ''})` }} />
            <DivName>
              <DivNameText>
                <H1name>{movie.name}</H1name>
              </DivNameText>
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
      <MuviesFooter />
    </div>
  );
};

export default Movies;
