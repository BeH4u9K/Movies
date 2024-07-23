/** @jsxImportSource @emotion/react */
import { TextField as MuiTextField, InputAdornment } from '@mui/material';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import { useNavigate } from 'react-router-dom';
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
  '@media (max-width: 900px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  '@media (max-width: 600px)': {
    padding: '10px',
  },
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
  cursor: 'pointer',
  '@media (max-width: 900px)': {
    marginBottom: '10px',
  },
  '@media (max-width: 600px)': {
    fontSize: '32px',
    width: '100%',
    justifyContent: 'flex-start',
  },
});

const ContainerButton = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '20px',
  '@media (max-width: 900px)': {
    marginLeft: '0',
    marginBottom: '10px',
  },
  '@media (max-width: 600px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

const Button = styled('button')({
  backgroundColor: 'transparent',
  transition: 'all 0.3s ease',
  margin: '0 10px',
  '&:hover, &:focus, &:active': {
    borderColor: 'transparent',
    outline: 'none',
    boxShadow: 'none',
  },
  '@media (max-width: 600px)': {
    margin: '5px 0',
  },
});

const CustomBtn = styled('button')({
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
  '@media (max-width: 600px)': {
    marginLeft: '0',
    marginTop: '10px',
    width: '100%',
    justifyContent: 'center',
  },
});

const ContainerInput = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
  '@media (max-width: 900px)': {
    width: '100%',
    marginLeft: '0',
    marginTop: '10px',
  },
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
  '@media (max-width: 600px)': {
    marginLeft: '10px',
  },
});

const StyledTuneRoundedIcon = styled(TuneRoundedIcon)({
  color: 'rgba(0, 0, 0, 0.54)',
  '@media (max-width: 600px)': {
    marginLeft: '10px',
  },
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
    console.log(category);
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
        <Logo onClick={BackClick}>твоё.кино</Logo>
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
        <CustomBtn onClick={handleFindClick}>
          Найти
        </CustomBtn>
      </Header>
    </div>
  );
};

export default MoviesHeader;
