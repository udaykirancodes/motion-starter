import { MoonIcon, SunIcon } from "lucide-react";

import { Button } from "./ui/button";
import { useTheme } from "./use-theme";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      {theme === "dark" ? (
        <Button
          size={"icon"}
          variant={"outline"}
          onClick={() => setTheme("light")}
        >
          <SunIcon />
        </Button>
      ) : (
        <Button
          size={"icon"}
          variant={"outline"}
          onClick={() => setTheme("dark")}
        >
          <MoonIcon />
        </Button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
