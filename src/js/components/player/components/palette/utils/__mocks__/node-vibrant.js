const Swatch = (hex) => ({
  getHex: () => hex
})

const palette = {
  DarkMuted: Swatch('#2a324b'),
  DarkVibrant: Swatch("#0e7a4b"),
  LightMuted: Swatch("#9cceb7"),
  LightVibrant: Swatch("#a4d4bc"),
  Muted: Swatch("#64aa8a"),
  Vibrant: Swatch("#b4d43c"),
  Light: Swatch("#1B2E6C")
}

export const from = () => ({
  getPalette: () => Promise.resolve(palette)
})
