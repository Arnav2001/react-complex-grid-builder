import terser from "@rollup/plugin-terser";
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: "src/index.js",
    output: {
      file: "dist/index.js",
      format: 'es',
    },
    external: ['react', 'prop-types'], // Mark react and prop-types as external
    plugins: [
      babel({
        presets: ['@babel/preset-react'],
        babelHelpers: 'bundled',
        exclude: 'node_modules/**'
      }),
      postcss(), // Add this line
      terser({
        ecma: 2020,
        mangle: { toplevel: true },
        compress: {
          module: true,
          toplevel: true,
          unsafe_arrows: true,
        },
        output: { quote_style: 1 }
      })
    ]
  }
]
