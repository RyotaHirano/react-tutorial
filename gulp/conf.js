import WEBPACK from "webpack";

export const DIR = {
  PATH: '/',
  SRC: 'src',
  DST: 'dst',
  BUILD: 'public'
};

export const isProduction = process.env.NODE_ENV === 'production';

export const jade = {
  src: [
    `${DIR.SRC}/**/*.jade`,
    `!${DIR.SRC}/**/_**/*.jade`,
    `!${DIR.SRC}/**/_*.jade`
  ],
  dst: `${DIR.DST}${DIR.PATH}/`,
  opts: {
    pretty: true,
    basedir: `${DIR.SRC}/html`
  }
};

export const serve = {
  open: 'external',
  reloadDebounce: 2000,
  ui: false,
  notify: false,
  startPath: DIR.PATH,
  ghostMode: false,
  server: {
    baseDir: './',
    index: `${DIR.DST}${DIR.PATH}/`,
    routes: {
      [DIR.PATH]: `${DIR.DST}${DIR.PATH}/`
    }
  }
};

export const clean = {
  path: [
    `${DIR.BUILD}`
  ]
};

export const copy = {
  build: {
    src: [
      `${DIR.DST}/**`,
      `!${DIR.DST}/js/**`
    ],
    dst: `${DIR.BUILD}${DIR.PATH}`
  }
};
