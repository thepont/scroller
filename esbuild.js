
const esbuild = require('esbuild');
esbuild.build({
  entryPoints: ['./src/scroller/client/client.jsx'],
  bundle: true,
  outdir: 'public/',
  minify: true,
  target: ["chrome58","firefox57","safari11","edge18"]

})