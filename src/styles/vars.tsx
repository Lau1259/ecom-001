const themes = {
  light: {
    dark: "#222",
    light: "#ddd",
    "ac-01": "rgb(11, 168, 238)",
    "ac-02": "rgb(119, 136, 34)",
    "col-1": "#0F238A",
    "col-2": "#FE7DA0",
    "col-3": "#FD9231",
    "col-4": "#0DBCFF",
  },
  bw: {
    0: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#21212",
  },
};

const global = {
  "border-radius": "1.25rem",
  padding: "2rem",
  "shadow-dark": `0px 0px 15px ${themes.bw[500]};`,
  "shadow-light": `0px 0px 15px ${themes.bw[100]};`,
};

const sizes = {
  S: "500px",
  M: "720px",
  L: "1080px",
};

const typography = {
  fonts: { title: `'Koulen', cursive`, body: `'Poppins', sans-serif` },
  weights: {
    extraLight: 100,
    light: 300,
    regular: 400,
    bold: 600,
    extraBold: 800,
  },
};

export { themes, global, sizes, typography };
