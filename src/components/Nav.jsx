import { Link } from "react-router-dom";
import { AppBar, Toolbar,Typography ,Button} from '@mui/material';

function Nav() {
  return (
    <nav>
     
      <AppBar position="static">
        <Toolbar>
        <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ingredientes">Ingredientes</Link>
        </li>
        <li>
          <Link to="/ingrediente">Ingrediente</Link>
        </li>
      </ul>

     
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Link to="/ingrediente">Ingrediente</Link> <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

    </nav>
  );
}

export default Nav;
