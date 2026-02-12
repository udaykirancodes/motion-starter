import Component from "./components/component";
import Container from "./components/container";
import Navbar from "./components/nav-bar";
import { ThemeProvider } from "./components/theme-provider";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="motion-starter-theme">
      <Navbar />
      <Container className="py-2">
        <Component />
      </Container>
    </ThemeProvider>
  );
}

export default App;
