import test from 'ava';
import postcss from 'postcss';
import plugin from './';
import CleanCss from 'clean-css'

// Test that postcss plugin works like clean-css

async function arun(t, input, opts = {}) {
  const result = await postcss([plugin(opts)]).process(input, {from: undefined})
  const output = new CleanCss(opts).minify(input).styles

  t.deepEqual(result.css, output)
  t.deepEqual(result.warnings().length, 0);
}

const colors = [
  '#f0f8ff',
  '#faebd7',
  '#0ff',
  '#7fffd4',
  '#f0ffff',
  '#f5f5dc',
  '#ffe4c4',
  '#000',
  '#ffebcd',
  '#00f',
  '#8a2be2',
  '#a52a2a',
  '#deb887',
  '#5f9ea0',
  '#7fff00',
  '#d2691e',
  '#ff7f50',
  '#6495ed',
  '#fff8dc',
  '#dc143c',
  '#0ff',
  '#00008b',
  '#008b8b',
  '#b8860b',
  '#a9a9a9',
  '#006400',
  '#a9a9a9',
  '#bdb76b',
  '#8b008b',
  '#556b2f',
  '#ff8c00',
  '#9932cc',
  '#8b0000',
  '#e9967a',
  '#8fbc8f',
  '#483d8b',
  '#2f4f4f',
  '#2f4f4f',
  '#00ced1',
  '#9400d3',
  '#ff1493',
  '#00bfff',
  '#696969',
  '#696969',
  '#1e90ff',
  '#b22222',
  '#fffaf0',
  '#228b22',
  '#f0f',
  '#dcdcdc',
  '#f8f8ff',
  '#ffd700',
  '#daa520',
  '#808080',
  '#008000',
  '#adff2f',
  '#808080',
  '#f0fff0',
  '#ff69b4',
  '#cd5c5c',
  '#4b0082',
  '#fffff0',
  '#f0e68c',
  '#e6e6fa',
  '#fff0f5',
  '#7cfc00',
  '#fffacd',
  '#add8e6',
  '#f08080',
  '#e0ffff',
  '#fafad2',
  '#d3d3d3',
  '#90ee90',
  '#d3d3d3',
  '#ffb6c1',
  '#ffa07a',
  '#20b2aa',
  '#87cefa',
  '#778899',
  '#778899',
  '#b0c4de',
  '#ffffe0',
  '#0f0',
  '#32cd32',
  '#faf0e6',
  '#ff00ff',
  '#800000',
  '#66cdaa',
  '#0000cd',
  '#ba55d3',
  '#9370db',
  '#3cb371',
  '#7b68ee',
  '#00fa9a',
  '#48d1cc',
  '#c71585',
  '#191970',
  '#f5fffa',
  '#ffe4e1',
  '#ffe4b5',
  '#ffdead',
  '#000080',
  '#fdf5e6',
  '#808000',
  '#6b8e23',
  '#ffa500',
  '#ff4500',
  '#da70d6',
  '#eee8aa',
  '#98fb98',
  '#afeeee',
  '#db7093',
  '#ffefd5',
  '#ffdab9',
  '#cd853f',
  '#ffc0cb',
  '#dda0dd',
  '#b0e0e6',
  '#800080',
  '#663399',
  '#f00',
  '#bc8f8f',
  '#4169e1',
  '#8b4513',
  '#fa8072',
  '#f4a460',
  '#2e8b57',
  '#fff5ee',
  '#a0522d',
  '#c0c0c0',
  '#87ceeb',
  '#6a5acd',
  '#708090',
  '#708090',
  '#fffafa',
  '#00ff7f',
  '#4682b4',
  '#d2b48c',
  '#008080',
  '#d8bfd8',
  '#ff6347',
  '#40e0d0',
  '#ee82ee',
  '#f5deb3',
  '#fff',
  '#f5f5f5',
  '#ff0',
  '#9acd32'
]

for (let color of colors) {
  const input = `a {
    color: ${color};
  }`

  test(`should shorten color ${color}`, t => arun(t, input))
}

const alloptims = new Map()
  .set('optimise adjacents', 'a{display:none}a{display:none;visibility:hidden}') // a{display:none;visibility:hidden}
  .set('optimise repeated', 'a{color:red;color:red}') // a{color:red}
  .set('optimise units', '.one{width:1px;width:1rem;display:block}.two{color:red}.one{width:2px;width:1.1rem}') // .one{display:block;width:2px;width:1.1rem}.two{color:red}
  .set('override by !important', 'a{margin:0}a{margin:0!important}') // a{margin:0!important}


for (let [descr, input] of alloptims.entries()) {
  test(`should ${descr} (advanced on & aggresive merging on)`, t => arun(t, input, { advanced: true, aggressiveMerging: true }))
  test(`should ${descr} (advanced on & aggresive merging off)`, t => arun(t, input, { advanced: true, aggressiveMerging: false }))
}

const ignoptims = new Map()
  .set('ignore repeated', 'a{color:red;color:red}') // a{color:red;color:red}

for (let [descr, input] of ignoptims.entries()) {
  test(`should ${descr} (advanced off)`, t => arun(t, input, { advanced: false }))
}

const mediaqueries = new Map()
  .set('empty @media', '@media (min-width:980px){}') // ''
  .set('@media containing whitespaces', ' @media   ( min-width:  980px ){}') // ''
  .set('body @media', '@media (min-width:980px){\na\n{color:red}}') // @media (min-width:980px){a{color:red}}
  .set('multiple @media ', '@media screen, print, (min-width:980px){a{color:red}}') // @media screen,print,(min-width:980px){a{color:red}}
  .set('@media nested once', '@media screen { @media print { a{color:red} } }') // @media screen{@media print{a{color:red}}}
  .set('@media nested twice', '@media screen { @media print { @media (min-width:980px) { a{color:red} } } }') // @media screen{@media print{@media (min-width:980px){a{color:red}}}}

for (let [descr, input] of mediaqueries.entries()) {
  test(`should process ${descr}`, t => arun(t, input))
}
