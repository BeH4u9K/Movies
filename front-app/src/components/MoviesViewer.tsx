import React from 'react';
import MoviesHeader from './MoviesHeader';
import MoviesFooter from './MuviesFooter';
import { styled } from '@mui/system';
import { useParams } from 'react-router-dom';
import { useGetMoviestestQuery } from '../services/api';

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

const SvgDiv = styled('div')({
    width: '100%',
    height: '400px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'coral',
    display: 'flex',
    boxSizing: 'border-box',
    position: 'relative',
    color: 'white',
});

const ContentDiv = styled('div')({
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '10px',
    borderRadius: '5px',
});

const TopMovies = styled('div')({
    width: '100%',
    height: '350px',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: '100px',
});

const FirstTopMovies = styled('div')({
    width: '78%',
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
    display: 'flex',
});

const Divgenre = styled('div')({
    width: '268px',
    height: '144px',
    display: 'flex',
    flexDirection: 'column',
    textAlign:'center',
    alignContent:'center',
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
    justifyContent:'center',
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

const Rating = styled('h2')({
    alignItems: 'start',
    fontFamily: 'Cambria',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '24px',
    lineHeight: '20px',
    whiteSpace: 'pre-line',
});

const DivNameText = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
});

const MoviesViewer: React.FC = () => {
    const { id, search } = useParams<{ id?: string; search?: string }>();

    const { data: movieData, isLoading, error } = useGetMoviestestQuery({ search, id });

    if (isLoading) {
        return <div>Loading...</div>;
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
