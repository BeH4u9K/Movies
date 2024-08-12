import React from 'react';
import MoviesHeader from './MoviesHeader';
import MoviesFooter from './MuviesFooter';
import { styled } from '@mui/system';
import { useParams } from 'react-router-dom';
import { useGetMoviestestQuery } from '../services/api';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface Genre {
  name: string;
}

interface Movie {
  id: number;
  name: string;
  poster?: {
    url?: string;
  };
  genres: Genre[];
  year: number;
  description: string;
  rating: {
    kp: number;
  };
}

const TopMovies = styled('div')({ 
  width: '100%',
  height:'100%',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  marginTop: '50px',
  marginBottom:'27px',
  flexDirection: 'column',

});

const FirstTopMovies = styled('div')({
  width: '100%',
  maxWidth: '1200px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: '20px',
  gap: '20px',
  '@media (max-width: 600px)': {
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
  '@media (max-width: 600px)': {
    width: '150px',
    height: '222px',
  },
});

const DivName = styled('div')({
  width: '268px',
  marginLeft: '33px',
  marginTop: '0px',
  display: 'block',
  '@media (max-width: 600px)': {
    alignItems: 'center',
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
  '@media (max-width: 600px)': {
    fontSize: '24px',
  },
});

const Divgenre = styled('div')({
  display: 'flex',
  justifyContent:'center',
  flexDirection: 'column',
  '@media (max-width: 600px)': {
    alignItems: 'center',
  },
});

const H2genre = styled('h2')({
  fontFamily: 'Cambria',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '24px',
  lineHeight: '29px',
  whiteSpace: 'pre-line',
  '@media (max-width: 600px)': {
    fontSize: '18px',
  },
});

const H2year = styled('h2')({

  fontFamily: 'Cambria',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '24px',
  lineHeight: '29px',
  '@media (max-width: 600px)': {
    fontSize: '18px',
  },
});

const DivText = styled('div')({
  flex: '2',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  borderRadius: '15px',
  border: '3px solid #4437DE',
  padding: '20px',
  '@media (max-width: 600px)': {
    marginTop: '20px',
    padding: '10px',
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
    fontSize: '18px',
  },
});

const Rating = styled('h2')({
  fontFamily: 'Cambria',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '24px',
  lineHeight: '20px',
  '@media (max-width: 600px)': {
    fontSize: '18px',
  },
});

const DivNameText = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
});

const DivShimmer = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
});

const MoviesViewer: React.FC = () => {
  const { id, search } = useParams<{ id?: string; search?: string }>();

  const { data: movieData, isLoading, error } = useGetMoviestestQuery({ search, id });

  if (isLoading) {
    return (
      <DivShimmer>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10%' }}>
          <CircularProgress style={{ color: '#4437DE' }} />
        </Box>
      </DivShimmer>
    );
  }

  if (error || !movieData) {
    return <div>Error loading movie data</div>;
  }

  const movie = id ? movieData : movieData.docs[0];

  if (!movie) {
    return <div>No movie found</div>;
  }

  const rating = Math.floor(movie.rating.kp * 10) / 10;

  return (
    <div>
      <MoviesHeader />
      <TopMovies>
        <FirstTopMovies style={{ cursor: 'pointer' }}>
          <DivImg style={{ backgroundImage: `url(${movie.poster?.url || ''})` }} />
          <DivName>
            <DivNameText>
              <H1name>{movie.name}</H1name>
            </DivNameText>
            <Rating>Рейтинг</Rating>
            <Rating>{rating}</Rating>
            <Divgenre>
              <H2genre>{movie.genres.map((genre: Genre) => genre.name).join(', ')}</H2genre>
              <H2year>{movie.year}</H2year>
            </Divgenre>
          </DivName>
          <DivText>
            <H2Text>{movie.description}</H2Text>
          </DivText>
        </FirstTopMovies>
      </TopMovies>
      <MoviesFooter />
    </div>
  );
};

export default MoviesViewer;
