/** @jsxImportSource @emotion/react */
import { TextField as MuiTextField, InputAdornment } from '@mui/material';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import { useNavigate, } from 'react-router-dom';

import { useState } from 'react';


const Header = styled('header')({
  display: 'flex',
  alignItems: 'center',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  boxSizing: 'border-box',
  zIndex: 1000,
  flexShrink: 0,
  width: '100%',
  padding: '10px 20px',
});

const Logo = styled('div')({
  width: '231px',
  height: '56px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Cambria',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '40px',
  lineHeight: '56px',
});

const ContainerButton = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '20px',
});

const Button = styled('button')({
  backgroundColor: 'transparent',
  transition: 'all 0.3s ease',
  '&:hover, &:focus, &:active': {
    borderColor: 'transparent',
    outline: 'none',
    boxShadow: 'none',
  },
});

const СustomBtn = styled('button')({
  backgroundColor: '#f5f5f5',
  borderColor: 'transparent',
  borderRadius: '25px',
  height: '36px',
  marginLeft: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover, &:focus, &:active': {
    borderColor: 'transparent',
    outline: 'none',
    boxShadow: 'none',
  },
});

const ContainerInput = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
});

const TextField = styled(MuiTextField)({
  marginLeft: '20px',
  '& .MuiInputBase-root': {
    backgroundColor: '#f5f5f5',
    borderRadius: '25px',
    height: '36px',
    padding: '0 15px',
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
    color: 'gray',
  },
});

const StyledTuneRoundedIcon = styled(TuneRoundedIcon)({
  color: 'rgba(0, 0, 0, 0.54)',
});

const MoviesHeader: React.FC = () => {
  const [search, setSearch] = useState<string>('');

  const navigate = useNavigate();

  const BackClick = () => {
    navigate('/');
  };

  const onClickIcon = () => {
    navigate('/moviesSearch');
  };

  const onClick = (category: string) => {
    navigate(`/moviesSearch/${category}`);
    console.log(category)
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleFindClick = () => {
    if (search) {
      navigate(`/MoviesViewer/search/${search}`);
    }
  };

  return (
    <div>
      <Header>
        <Logo onClick={BackClick} style={{ cursor: 'pointer' }}>твоё.кино</Logo>
        <ContainerButton>
          <Button onClick={() => onClick('movie')}>Фильмы</Button>
          <Button onClick={() => onClick('tv-series')}>Сериалы</Button>
          <Button onClick={() => onClick('cartoon')}>Мультфильмы</Button>
        </ContainerButton>
        <ContainerInput>
          <StyledTuneRoundedIcon onClick={onClickIcon} style={{ cursor: 'pointer' }} />
          <TextField
            autoComplete="off"
            placeholder="Поиск"
            variant="outlined"
            size="small"
            value={search}
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ cursor: 'pointer' }} />
                </InputAdornment>
              ),
            }}
          />
        </ContainerInput>
        <СustomBtn onClick={handleFindClick} >
          Найти
        </СustomBtn>
      </Header>
    </div>
  );
};

export default MoviesHeader;