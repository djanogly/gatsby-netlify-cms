import Typography from "typography"

const typography = new Typography({
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
    "Open Sans",
    "Source Sans Pro",
    "Permanent Marker",
  ],
  bodyFontFamily: ["Open Sans", "Source Sans Pro"],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
