import Container from "./container";
import ThemeSwitcher from "./theme-switcher";
import { CardTitle } from "./ui/card";

const Navbar = () => {
  return (
    <nav className="h-auto w-full border-b border-dashed">
      <Container className="flex items-center justify-between gap-4 py-2">
        <CardTitle>React Starter</CardTitle>
        <ThemeSwitcher />
      </Container>
    </nav>
  );
};

export default Navbar;
