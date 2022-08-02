import React from "react";

// Import Layouts Components
import Header from "./header";

// Import Styled Components
import { AppContainer, AppLayoutWrapper } from "./layout.styles";

// Import Theme Setting
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "themes/globalStyles";
import { lightTheme, darkTheme } from "themes/Themes";

// Import Hooks
import { useDarkMode } from "hooks/useDarkMode";

const AppLayout: React.FC = ({ children }) => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <AppLayoutWrapper>
        <Header theme={theme} onThemeClick={themeToggler} />
        <AppContainer>{children}</AppContainer>
      </AppLayoutWrapper>
    </ThemeProvider>
  );
};

export default AppLayout;
