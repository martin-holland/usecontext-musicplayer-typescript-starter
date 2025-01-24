import { CssBaseline } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MusicProvider } from "./context/MusicProvider";
import { ThemeProvider } from "./context/ThemeProvider";
import { routes } from "./routes/routes";

const router = createBrowserRouter(routes);

function App() {
  return (
    <ThemeProvider>
      <MusicProvider>
        <RouterProvider router={router} />
      </MusicProvider>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
