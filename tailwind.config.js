module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url(../img/river.jpg)",
        'footer-texture': "url('/img/footer-texture.png')",
       }),
       height: {
        "5v": "5vh",
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "85v": "85vh",
        "90v": "90vh",
        "100v": "100vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
