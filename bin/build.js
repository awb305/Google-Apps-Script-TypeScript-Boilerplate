import esbuild from 'esbuild';

esbuild
  .build({
    entryPoints: ['src/index.ts'],
    outfile: 'dist/index.js',
    bundle: true,
    platform: 'neutral',
    target: 'es2017',
    watch: true
  })
  .catch(() => process.exit(1));
