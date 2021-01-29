import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'vellum-char-sheet.js',
    output: {
      file: 'dist/vellum-char-sheet.js',
      format: 'cjs'
    },
    plugins: [
      resolve()
    ]
  },
  {
    input: 'vellum-char-sheet.js',
    output: {
      file: 'dist/vellum-char-sheet.min.js',
      format: 'cjs'
    },
    plugins: [
      resolve(),
      terser()
    ]
  },
  {
    input: 'vellum-sheet.js',
    output: {
      file: 'dist/vellum-sheet.js',
      format: 'cjs'
    },
    plugins: [
      resolve()
    ]
  },
  {
    input: 'vellum-sheet.js',
    output: {
      file: 'dist/vellum-sheet.min.js',
      format: 'cjs'
    },
    plugins: [
      resolve(),
      terser()
    ]
  },
  {
    input: 'vellum-sheet-field.js',
    output: {
      file: 'dist/vellum-sheet-field.js',
      format: 'cjs'
    },
    plugins: [
      resolve()
    ]
  },
  {
    input: 'vellum-sheet-field.js',
    output: {
      file: 'dist/vellum-sheet-field.min.js',
      format: 'cjs'
    },
    plugins: [
      resolve(),
      terser()
    ]
  },
  {
    input: 'vellum-sheet-box.js',
    output: {
      file: 'dist/vellum-sheet-box.js',
      format: 'cjs'
    },
    plugins: [
      resolve()
    ]
  },
  {
    input: 'vellum-sheet-box.js',
    output: {
      file: 'dist/vellum-sheet-box.min.js',
      format: 'cjs'
    },
    plugins: [
      resolve(),
      terser()
    ]
  },
  {
    input: 'vellum-sheet-group.js',
    output: {
      file: 'dist/vellum-sheet-group.js',
      format: 'cjs'
    },
    plugins: [
      resolve()
    ]
  },
  {
    input: 'vellum-sheet-group.js',
    output: {
      file: 'dist/vellum-sheet-group.min.js',
      format: 'cjs'
    },
    plugins: [
      resolve(),
      terser()
    ]
  }
]
