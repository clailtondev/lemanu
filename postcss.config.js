module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // ESTA LINHA É A CHAVE DA CORREÇÃO!
    autoprefixer: {},
  },
}