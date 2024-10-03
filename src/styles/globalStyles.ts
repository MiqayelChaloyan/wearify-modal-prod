import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #5AD3E1;
    --dark-blue: #0C0D34;
    --light-blue: #7B7C8C;
    --powder-blue: #F2F5F9;
    --white: #fafafa;
    --black: #000000;
    --gray: #ACACAC;
    --light-gray: #A2A2A4;
    --hard-dark-gray: #AAB0BB;
    --dark-gray: #4b4b4d;
    --light-black: #19191A;
    --onyx: #393939;
    --dark-onyx: #424242;
    --red: #D93654;
    --pure-gray: #D9D9D980;
    --light-color: #EDEDED;

    --font-weight-thin: 100;
    --font-weight-extra-light: 200;
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semi-bold: 600;
    --font-weight-bold: 700;
    --font-weight-extra-bold: 800;
    --font-weight-black: 900;

    --transition: .5s;



    model-viewer {
      width: 636px !important;
      height: 500px;
    }

    model-viewer::part(default-progress-bar) {
      display: none;
    }

    model-viewer::part(default-ar-button) {
      display: none;
    }

    // @media screen and (max-width: 1536px) {
    //   model-viewer {
    //     width: 100%;
    //     height: 320px;
    //   }
    // }

    // @media screen and (max-width: 1280px) {
    //   model-viewer {
    //     width: 100%;
    //     height: 320px;
    //   }
    // }

    // @media screen and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 0) {
    //   model-viewer {
    //     width: 100%;
    //     height: 320px;
    //   }
    // }

    // @media screen and (max-width: 768px) {
    //   model-viewer {
    //     width: 100%;
    //     height: 320px;
    //   }
    // }

    // @media screen and (max-width: 640px) {
    //   model-viewer {
    //     width: 100%;
    //     height: 320px;
    //   }
    // }

    // @media screen and (max-width: 320px) {
    //   model-viewer {
    //     width: 100%;
    //     height: 320px;
    //   }
    // }
  }
`;

const breakpoints: { [key: string]: string } = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const devices: { [key: string]: string } = {
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  "2xl": `(min-width: ${breakpoints["2xl"]})`,
};

export const media = Object.keys(breakpoints).reduce(
  (acc, label) => {
    acc[label] = (...args: Parameters<typeof css>) => css`
      @media (max-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `;
    return acc;
  },
  {} as { [key: string]: (...args: Parameters<typeof css>) => ReturnType<typeof css> }
);
