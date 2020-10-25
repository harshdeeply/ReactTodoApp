import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
${({ theme }) => css`
      .todoapp {
        background: ${theme.colors.background};
        color: ${theme.colors.black};
      }
      html {
        background: ${theme.colors.background};
        color: ${theme.colors.black};
      }
      .navItem {
        background: ${theme.colors.background};
        color: ${theme.colors.black};
      }
    }
  }
`}
`;
