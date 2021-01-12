import merge from 'deepmerge';
// use createSpaConfig for bundling a Single Page App
import { createSpaConfig } from '@open-wc/building-rollup';

// use createBasicConfig to do regular JS to JS bundling
// import { createBasicConfig } from '@open-wc/building-rollup';

const isDev = process.env.NODE_ENV !== "production"

const baseConfig = createSpaConfig({
  // use the outputdir option to modify where files are output
  // outputDir: 'dist',

  // if you need to support older browsers, such as IE11, set the legacyBuild
  // option to generate an additional build just for this browser
  // legacyBuild: true,

  // development mode creates a non-minified build for debugging or development
  developmentMode: process.env.ROLLUP_WATCH === 'true',

  // set to true to inject the service worker registration into your index.html
  injectServiceWorker: false,
  workbox: isDev,
  polyfillsLoader: isDev,
  html: isDev

});
let config;
if(isDev){
  config = {
    input: './out-tsc/src/file-manager.js',
    output: {
      file: "./dist/bundle.js",
      dir: undefined
    }
  }
} else {
  config = {
    input: './index.html',
    
}

export default merge(baseConfig, config);
