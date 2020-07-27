import Typography from "typography"

const typography = new Typography({
    googleFonts: [{
      name: 'Ubuntu',
      styles: [
        '400',
        '700'
      ]
    },
    {
      name: 'Poppins',
      styles: [
        '400',
        '700'
      ]
    }],
    baseFontSize: '15px',
    baseLineHeight: 1.75,
    headerFontFamily: ['Ubuntu'],
    bodyFontFamily: ['Poppins'],
    scaleRation: 2,
    paragraphSpacing: 1,
    headerGray: 10,
    headerWeight: 700,
    bodyGray: 10,
    bodyWeight: 400
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
