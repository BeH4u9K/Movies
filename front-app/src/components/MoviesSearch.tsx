import React, { useState, useEffect } from 'react';
import MoviesHeader from './MoviesHeader';
import { styled } from '@mui/system';
import { Select, MenuItem, FormControl, InputLabel, TextField as MuiTextField } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useSelects } from './CustomSelect';
import { useGetFilteredMoviesQuery } from '../services/api';
import MoviesFooter from './MuviesFooter';
import { useNavigate, useParams } from 'react-router-dom';

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

const DivSearch = styled('div')({
  width: '100%',
  height: '300px',
  display: 'block',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
});

const H1Search = styled('h1')({
  width: '100%',
  height: '70px',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  fontFamily: 'Cambria',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '40px',
  lineHeight: '56px',
});

const DivCategories = styled('div')({
  width: '100%',
  margin: '0 auto',
  height: '70px',
  display: 'flex',
  alignItems: 'center',
  fontWeight: '500',
  fontSize: '40px',
});

const DivSelect = styled('div')({
  flex: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  textAlign: 'center',
  width: '50%',
  height: '70px',
  marginLeft: '40px',
});

const CustomFormControl = styled(FormControl)({});

const CustomSelect = styled(Select)({
  width: '60%',
  height: '64px',
  backgroundColor: 'rgba(68, 55, 222, 0.25)',
  borderRadius: '15px',
  border: '2px solid #4437DE',
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
});

const CustomInputLabel = styled(InputLabel)({
  fontFamily: 'Cambria',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '17px',
  lineHeight: '29px',
  color: '#000000',
  '&.Mui-focused': {
    marginTop: '6px',
    color: '#000000',
  },
  '&.MuiFormLabel-filled': {
    color: '#000000',
    marginTop: '6px',
  },
});

const TextField = styled(MuiTextField)({
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  fontWeight: '500',
  fontSize: '40px',
  width: '30%',
  '& .MuiInputBase-root': {
    backgroundColor: 'rgba(68, 55, 222, 0.25)',
    borderRadius: '25px',
    marginLeft: '200px',
    height: '50px',
    padding: '0 15px',
    border: '2px solid #4437DE',
    width: '60%',
  },
  '& .MuiInputBase-input': {
    color: 'black',
    '&::placeholder': {
      color: 'black',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#000000',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '',
  },
});

const DivInput = styled('div')({
  flex: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '70px',
  marginRight: '40px',
});

const ContainerButton = styled('div')({
  display: 'flex',
  width: '20%',
});

const Button = styled('button')({
  width: '100%',
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  borderRadius: '15px',
  backgroundColor: 'rgba(68, 55, 222, 0.25)',
  border: '2px solid #4437DE',
  transition: 'all 0.3s ease',
  fontFamily: 'Cambria',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '35px',
  '&:hover, &:focus, &:active': {
    border: '2px solid #4437DE',
    outline: 'none',
    boxShadow: 'none',
  },
});

const ContainerMovieOutput = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
});

const DivContainerMovieOutput = styled('div')({
  width: '90%',
  minHeight: '100vh',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '20px',
  margin: '0 auto',
  padding: '2%',
  boxSizing: 'border-box',
  justifyContent: 'center',
  alignItems: 'start',
});

const DivMovie = styled('div')({
  width: '100%',
  maxWidth: '211px',
  height: '400px',
  margin: 'auto',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
});

const DivImg = styled('div')({
  width: '100%',
  height: '312px',
  borderRadius: '15px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundColor: 'darkcyan',
  cursor: 'pointer', // Добавляем указатель для показа, что элемент кликабелен
});

const H1Movie = styled('h3')({
  width: '100%',
  fontFamily: 'Cambria',
  fontStyle: 'normal',
  textAlign: 'center',
});

const ContainerAddMore = styled('div')({
  width: '100%',
  height: '100px',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
});

const DivBtnAddMore = styled('div')({
  width: '10%',
});

const TextBtnAddMore = styled('h3')({
  fontFamily: 'Cambria',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '18px',
});

const MoviesSearch = () => {
  const navigate = useNavigate();
  const { selectedOptions, handleChange } = useSelects();
  const [year, setYear] = useState<string>('');
  const [rating, setRating] = useState<string>(''); 
  const { category } = useParams();
  
  const [filters, setFilters] = useState<{
    category: string;
    genre: string;
    country: string;
    year: number | undefined;
    rating: string | number;
  }>({
    category: '',
    genre: '',
    country: '',
    year: undefined,
    rating: '',
  });

  useEffect(() => {
    if (category) {
      setFilters(prevFilters => ({ ...prevFilters, category }));
    }
  }, [category]);

  const { data: movies, isLoading, error } = useGetFilteredMoviesQuery(filters);

  const handleOpenViewer = (id: number) => {
    navigate(`/MoviesViewer/${id}`);
  };

  const labels = ['Категория', 'Жанр', 'Страна'];

  const options = [
    [
      { value: 'movie', label: 'Фильм' },
      { value: 'tv-series', label: 'Сериал' },
      { value: 'anime', label: 'Аниме' },
      { value: 'cartoon', label: 'Мультфильм' },
    ],
    [
      { value: 'biography', label: 'Биография' },
      { value: 'action', label: 'Боевик' },
      { value: 'detective', label: 'Детектив' },
      { value: 'children', label: 'Детский' },
      { value: 'documentary', label: 'Документальный' },
      { value: 'drama', label: 'Драма' },
      { value: 'comedy', label: 'Комедия' },
    ],
    [
      { value: 'usa', label: 'США' },
      { value: 'ukraine', label: 'Украина' },
      { value: 'russia', label: 'Россия' },
      { value: 'uk', label: 'Великобритания' },
      { value: 'india', label: 'Индия' },
      { value: 'spain', label: 'Испания' },
      { value: 'germany', label: 'Германия' },
      { value: 'italy', label: 'Италия' },
      { value: 'japan', label: 'Япония' },
      { value: 'france', label: 'Франция' },
      { value: 'china', label: 'Китай' },
    ],
  ];

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYear(event.target.value);
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(event.target.value);
  };

  const handleSearch = () => {
    const selectedCategory = selectedOptions[0];
    const selectedGenre = selectedOptions[1];
    const selectedCountry = selectedOptions[2];

    const yearNum = parseInt(year);
    const ratingNum = parseFloat(rating);

    const newFilters = {
      category: selectedCategory,
      genre: selectedGenre,
      country: selectedCountry,
      year: isNaN(yearNum) ? undefined : yearNum,
      rating: isNaN(ratingNum) ? '' : ratingNum,
    };

    setFilters(newFilters);
  };

  return (
    <div>
      <MoviesHeader />
      <DivSearch>
        <H1Search>Поиск</H1Search>
        <DivCategories>
          <DivSelect>
            {labels.map((label, index) => (
              <CustomFormControl fullWidth key={label}>
                <CustomInputLabel>{label}</CustomInputLabel>
                <CustomSelect
                  value={selectedOptions[index]}
                  onChange={handleChange(index)}
                  IconComponent={KeyboardArrowDownIcon}
                >
                  {options[index].map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </CustomSelect>
              </CustomFormControl>
            ))}
          </DivSelect>
          <DivInput>
            <TextField
              placeholder="Год"
              variant="outlined"
              size="small"
              value={year}
              onChange={handleYearChange}
            />
            <TextField
              placeholder="Рейтинг"
              variant="outlined"
              size="small"
              value={rating}
              onChange={handleRatingChange}
            />
            <ContainerButton>
              <Button onClick={handleSearch}>Найти</Button>
            </ContainerButton>
          </DivInput>
        </DivCategories>
      </DivSearch>
      <ContainerMovieOutput>
        <DivContainerMovieOutput>
          {movies?.docs.map((movie: Movie) => (
            <DivMovie key={movie.id}>
              <DivImg
                onClick={() => handleOpenViewer(movie.id)}
                style={{ backgroundImage: `url(${movie.poster?.url || ''})` }}
              />
              <H1Movie>{movie.name}</H1Movie>
            </DivMovie>
          ))}
        </DivContainerMovieOutput>
      </ContainerMovieOutput>
      <ContainerAddMore>
        <DivBtnAddMore>
          <TextBtnAddMore>Показать еще</TextBtnAddMore>
        </DivBtnAddMore>
      </ContainerAddMore>
    </div>
  );
};

export default MoviesSearch;
