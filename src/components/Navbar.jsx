  import {Stack} from '@mui/material';
  import {Link} from 'react-router-dom';
  import {myLogo} from '../utils/constants';
  import SearchBar from './SearchBar';

  const Navbar = () => (
    <Stack 
      direction="row"
      alignItems="center"
      p={2}
      sx={{ position: 'sticky', background: '#000', top:0, justifyContent: 'space-between' }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={myLogo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>  
  )

  export default Navbar
