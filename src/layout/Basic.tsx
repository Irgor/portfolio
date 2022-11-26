import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
`;

const BasicLayout = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default BasicLayout;