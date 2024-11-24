
const {copy} = require('esbuild-plugin-copy');
const esbuild = require('esbuild');
esbuild.build({
  entryPoints: ['./src/scroller/client/client.jsx'],
  bundle: true,
  outdir: 'public/',
  minify: true,
  target: ["chrome58","firefox57","safari11","edge18"],
  plugins: [
    copy({
      // this is equal to process.cwd(), which means we use cwd path as base path to resolve `to` path
      // if not specified, this plugin uses ESBuild.build outdir/outfile options as base path.
      resolveFrom: 'cwd',
      assets: {
        from: ['./images/*'],
        to: ['./public/images'],
      },
      watch: true,
    }),
    copy({
        // this is equal to process.cwd(), which means we use cwd path as base path to resolve `to` path
        // if not specified, this plugin uses ESBuild.build outdir/outfile options as base path.
        resolveFrom: 'cwd',
        assets: {
          from: ['./index.html'],
          to: ['./public/index.html'],
        },  
        watch: true,
      }),
  ],
})