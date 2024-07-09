/** @jsxImportSource @emotion/react */
import { TextField as MuiTextField, InputAdornment } from '@mui/material';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded'; // Импортируем иконку из новой библиотеки

const Header = styled('header')({
  display: 'flex',
  alignItems: 'center',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  boxSizing: 'border-box',
  zIndex: 1000,
  flexShrink: 0,
  width: '100%',
  padding: '10px 20px',
  // backgroundColor:'gold',
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

const ContainerInput = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
});

const TextField = styled(MuiTextField)({
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
  color:'rgba(0, 0, 0, 0.54)'
})

const MoviesHeader = () => {
  const inputClick = () => {
    console.log("pet");                                                                                                                                                                                                 
  };

  return (
    <div>
      <Header>
        <Logo>твоё.кино</Logo>
        <ContainerButton>
          <Button onClick={inputClick}>Фильмы</Button>
          <Button onClick={inputClick}>Сериалы</Button>
          <Button onClick={inputClick}>Мультфильмы</Button>
        </ContainerButton>
        <ContainerInput>
        <Button><StyledTuneRoundedIcon/></Button>
          <TextField
            onClick={inputClick}
            placeholder="Поиск"
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon/>
                </InputAdornment>
              ),
            }}
          />
        </ContainerInput>
      </Header>
    </div>
  );
};

export default MoviesHeader;
