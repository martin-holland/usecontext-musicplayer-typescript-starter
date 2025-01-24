import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import HomeIcon from "@mui/icons-material/Home";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { useMusicPlayer } from "../hooks/useMusicPlayer";

const Layout = () => {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ThemeContext);
  const music = useMusicPlayer();

  return (
    <div>
      <AppBar position="static">
        <Typography variant="h1">{music.currentTrackName}</Typography>
        <Toolbar>
          <Button
            component={Link}
            to="/"
            color="inherit"
            startIcon={<HomeIcon />}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/player"
            color="inherit"
            startIcon={<QueueMusicIcon />}
          >
            Player
          </Button>
          <IconButton
            sx={{ ml: "auto" }}
            onClick={toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 3 }}>
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
