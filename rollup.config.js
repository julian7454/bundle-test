import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
//import { minify } from 'uglify-js-harmony';

export default {
  input: 'main.js',
  plugins: [
	 //  babel({
		// 	babelrc: false,
		// 	presets: [['@babel/preset-env', { modules: false }]],
		// }),
  	//uglify()
  ],
  output: {
    file: 'dist/bundle-rollup.js',
    format: 'esm'
  }
};