import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
  transitions,
} from '@ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    themeMap: {
      ...defaultThemeMap,
      height: 'space',
      width: 'space',
      transition: 'transitions',
      animationDuration: 'transitions',
      animation: 'transitions',
    },
    theme: {
      colors,
      fontSizes,
      fontWeights,
      fonts,
      lineHeights,
      radii,
      space,
      transitions,
    },
  })
