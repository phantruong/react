import {createElement} from 'glamor/react'; // eslint-disable-line
/* @jsx createElement */

import {MultiGrid, AutoSizer} from 'react-virtualized';
import 'react-virtualized/styles.css';

import {
  inject as injectErrorOverlay,
  uninject as uninjectErrorOverlay,
} from 'react-error-overlay/lib/overlay';

const React = global.React;
const {Component} = React;

const ReactDOM15 = global.ReactDOM15;
const ReactDOM16 = global.ReactDOM;

const types = [
  {
    name: 'string',
    testValue: 'a string',
    testDisplayValue: "'a string'",
  },
  {
    name: 'null',
    testValue: null,
  },
  {
    name: 'undefined',
    testValue: undefined,
  },
  {
    name: 'empty string',
    testValue: '',
    testDisplayValue: "''",
  },
  {
    name: 'array with string',
    testValue: ['string'],
    testDisplayValue: "['string']",
  },
  {
    name: 'empty array',
    testValue: [],
    testDisplayValue: '[]',
  },
  {
    name: 'object',
    testValue: {
      toString() {
        return 'result of toString()';
      },
    },
    testDisplayValue: "{ toString() { return 'result of toString()'; } }",
  },
  {
    name: 'numeric string',
    testValue: '42',
    displayValue: "'42'",
  },
  {
    name: '-1',
    testValue: -1,
  },
  {
    name: '0',
    testValue: 0,
  },
  {
    name: 'integer',
    testValue: 1,
  },
  {
    name: 'NaN',
    testValue: NaN,
  },
  {
    name: 'float',
    testValue: 99.99,
  },
  {
    name: 'true',
    testValue: true,
  },
  {
    name: 'false',
    testValue: 'false',
  },
  {
    name: "string 'true'",
    testValue: 'true',
    displayValue: "'true'",
  },
  {
    name: "string 'false'",
    testValue: 'false',
    displayValue: "'false'",
  },
  {
    name: "string 'on'",
    testValue: 'on',
    displayValue: "'on'",
  },
  {
    name: "string 'off'",
    testValue: 'off',
    displayValue: "'off'",
  },
  {
    name: 'symbol',
    testValue: Symbol('foo'),
    testDisplayValue: "Symbol('foo')",
  },
  {
    name: 'function',
    testValue: function f() {},
  },
];

function getProperty(propertyName) {
  return el => el[propertyName];
}

function getAttribute(attributeName) {
  return el => {
    if (el.namespaceURI === '') {
      throw new Error('Not an HTML element.');
    }
    return el.getAttribute(attributeName);
  };
}

function getSVGAttribute(attributeName) {
  return el => {
    if (el.namespaceURI !== 'http://www.w3.org/2000/svg') {
      throw new Error('Not an SVG element.');
    }
    return el.getAttribute(attributeName);
  };
}

const attributes = [
  {name: 'about', read: getAttribute('about')},
  {name: 'aBoUt', read: getAttribute('about')},
  {
    name: 'accent-Height',
    containerTagName: 'svg',
    tagName: 'font-face',
    read: getSVGAttribute('accent-height'),
  },
  {
    name: 'accent-height',
    containerTagName: 'svg',
    tagName: 'font-face',
    read: getSVGAttribute('accent-height'),
  },
  {
    name: 'accentHeight',
    containerTagName: 'svg',
    tagName: 'font-face',
    read: getSVGAttribute('accent-height'),
  },
  {name: 'accept', tagName: 'input'},
  {name: 'accept-charset', tagName: 'form', read: getProperty('acceptCharset')},
  {name: 'accept-Charset', tagName: 'form', read: getProperty('acceptCharset')},
  {name: 'acceptCharset', tagName: 'form'},
  {name: 'accessKey'},
  {
    name: 'accumulate',
    containerTagName: 'svg',
    tagName: 'animate',
    read: getSVGAttribute('accumulate'),
  },
  {name: 'action', tagName: 'form', overrideStringValue: 'https://reactjs.com'},
  {
    name: 'additive',
    containerTagName: 'svg',
    tagName: 'animate',
    read: getSVGAttribute('additive'),
  },
  {
    name: 'alignment-baseline',
    containerTagName: 'svg',
    tagName: 'textPath',
    read: getSVGAttribute('alignment-baseline'),
  },
  {
    name: 'alignmentBaseline',
    containerTagName: 'svg',
    tagName: 'textPath',
    read: getSVGAttribute('alignment-baseline'),
  },
  {
    name: 'allowFullScreen',
    tagName: 'iframe',
    read: getProperty('allowFullscreen'),
  },
  {
    name: 'allowfullscreen',
    tagName: 'iframe',
    read: getProperty('allowFullscreen'),
  },
  {name: 'allowFullscreen', tagName: 'iframe'},
  {
    name: 'allowReorder',
    containerTagName: 'svg',
    tagName: 'switch',
    read: getSVGAttribute('allowReorder'),
  },
  {
    name: 'allowTransparency',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('allowtransparency'),
  },
  {
    name: 'alphabetic',
    containerTagName: 'svg',
    tagName: 'font-face',
    read: getSVGAttribute('alphabetic'),
  },
  {name: 'alt', tagName: 'img'},
  {
    name: 'amplitude',
    containerTagName: 'svg',
    tagName: 'feFuncA',
    read: getSVGAttribute('amplitude'),
  },
  {
    name: 'arabic-form',
    containerTagName: 'svg',
    tagName: 'glyph',
    read: getSVGAttribute('arabic-form'),
  },
  {
    name: 'arabicForm',
    containerTagName: 'svg',
    tagName: 'glyph',
    read: getSVGAttribute('arabic-form'),
  },
  {name: 'aria', read: getAttribute('aria')},
  {name: 'aria-', read: getAttribute('aria-')},
  {name: 'aria-invalidattribute', read: getAttribute('aria-invalidattribute')},
  {name: 'as', tagName: 'link'},
  {
    name: 'ascent',
    containerTagName: 'svg',
    tagName: 'font-face',
    read: getSVGAttribute('ascent'),
  },
  {name: 'async', tagName: 'script'},
  {
    name: 'attributeName',
    containerTagName: 'svg',
    tagName: 'animate',
    read: getSVGAttribute('attributeName'),
  },
  {
    name: 'attributeType',
    containerTagName: 'svg',
    tagName: 'animate',
    read: getSVGAttribute('attributeType'),
  },
  {
    name: 'autoCapitalize',
    tagName: 'input',
    read: getProperty('autocapitalize'),
    overrideStringValue: 'words',
  },
  {
    name: 'autoComplete',
    tagName: 'input',
    overrideStringValue: 'email',
    read: getProperty('autocomplete'),
  },
  {
    name: 'autoCorrect',
    tagName: 'input',
    overrideStringValue: 'off',
    read: getAttribute('autocorrect'),
  },
  {name: 'autoPlay', tagName: 'video', read: getProperty('autoplay')},
  {
    name: 'autoReverse',
    containerTagName: 'svg',
    tagName: 'animate',
    read: getSVGAttribute('autoreverse'),
  },
  {name: 'autoSave', tagName: 'input', read: getAttribute('autosave')},
  {
    name: 'azimuth',
    containerTagName: 'svg',
    tagName: 'feDistantLight',
    read: getSVGAttribute('azimuth'),
  },
  {
    name: 'baseFrequency',
    containerTagName: 'svg',
    tagName: 'feTurbulence',
    read: getSVGAttribute('baseFrequency'),
  },
  {
    name: 'baseline-shift',
    containerTagName: 'svg',
    tagName: 'textPath',
    read: getSVGAttribute('baseline-shift'),
  },
  {
    name: 'baselineShift',
    containerTagName: 'svg',
    tagName: 'textPath',
    read: getSVGAttribute('baseline-shift'),
  },
  {name: 'baseProfile', tagName: 'svg', read: getSVGAttribute('baseProfile')},
  {
    name: 'bbox',
    containerTagName: 'svg',
    tagName: 'font-face',
    read: getSVGAttribute('bbox'),
  },
  {
    name: 'begin',
    containerTagName: 'svg',
    tagName: 'animate',
    read: getSVGAttribute('begin'),
  },
  {
    name: 'bias',
    containerTagName: 'svg',
    tagName: 'feConvolveMatrix',
    read: getSVGAttribute('bias'),
  },
  {
    name: 'by',
    containerTagName: 'svg',
    tagName: 'animate',
    read: getSVGAttribute('by'),
  },
  {
    name: 'calcMode',
    containerTagName: 'svg',
    tagName: 'animate',
    overrideStringValue: 'discrete',
    read: getSVGAttribute('calcMode'),
  },
  {
    name: 'cap-height',
    containerTagName: 'svg',
    tagName: 'font-face',
    read: getSVGAttribute('cap-height'),
  },
  {
    name: 'capHeight',
    containerTagName: 'svg',
    tagName: 'font-face',
    read: getSVGAttribute('cap-height'),
  },
  {
    name: 'capture',
    tagName: 'input',
    overrideStringValue: 'environment',
    read: getAttribute('capture'),
  },
  {name: 'cellPadding', tagName: 'table'},
  {name: 'cellSpacing', tagName: 'table'},
  {
    name: 'challenge',
    tagName: 'keygen',
    read: getAttribute('challenge'), // The property is not supported in Chrome.
  },
  {name: 'charSet', tagName: 'script', read: getProperty('charset')},
  {name: 'checked', tagName: 'input'},
  {name: 'Checked', tagName: 'input', read: getAttribute('Checked')},
  {name: 'Children', read: getAttribute('children')},
  {name: 'children'},
  {
    name: 'cite',
    tagName: 'blockquote',
    overrideStringValue: 'http://reactjs.com/',
  },
  {name: 'class', read: getAttribute('class')},
  {name: 'classID', tagName: 'object', read: getAttribute('classid')},
  {name: 'className'},
  {name: 'clip', tagName: 'svg', read: getAttribute('clip')},
  {
    name: 'clip-path',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('clip-path'),
  },
  {
    name: 'clipPath',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('clip-path'),
  },
  {
    name: 'clipPathUnits',
    containerTagName: 'svg',
    tagName: 'clipPath',
    read: getSVGAttribute('clipPathUnits'),
  },
  {
    name: 'clip-rule',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('clip-rule'),
  },
  {
    name: 'clipRule',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('clip-rule'),
  },
  {
    name: 'color',
    containerTagName: 'svg',
    tagName: 'text',
    read: getSVGAttribute('color'),
  },
  {
    name: 'color-interpolation',
    containerTagName: 'svg',
    tagName: 'animate',
    overrideStringValue: 'sRGB',
    read: getSVGAttribute('color-interpolation'),
  },
  {
    name: 'colorInterpolation',
    containerTagName: 'svg',
    tagName: 'animate',
    overrideStringValue: 'sRGB',
    read: getSVGAttribute('color-interpolation'),
  },
  {
    name: 'color-interpolation-filters',
    containerTagName: 'svg',
    tagName: 'feComposite',
    overrideStringValue: 'sRGB',
    read: getSVGAttribute('color-interpolation-filters'),
  },
  {
    name: 'colorInterpolationFilters',
    containerTagName: 'svg',
    tagName: 'feComposite',
    overrideStringValue: 'sRGB',
    read: getSVGAttribute('color-interpolation-filters'),
  },
  {
    name: 'color-profile',
    containerTagName: 'svg',
    tagName: 'image',
    overrideStringValue: 'sRGB',
    read: getSVGAttribute('color-profile'),
  },
  {
    name: 'colorProfile',
    containerTagName: 'svg',
    tagName: 'image',
    overrideStringValue: 'sRGB',
    read: getSVGAttribute('color-profile'),
  },
  {
    name: 'color-rendering',
    containerTagName: 'svg',
    tagName: 'animate',
    overrideStringValue: 'optimizeSpeed',
    read: getSVGAttribute('color-rendering'),
  },
  {
    name: 'colorRendering',
    containerTagName: 'svg',
    tagName: 'animate',
    overrideStringValue: 'optimizeSpeed',
    read: getSVGAttribute('color-rendering'),
  },
  {name: 'cols', tagName: 'textarea'},
  {name: 'colSpan', tagName: 'td'},
  {name: 'content', tagName: 'meta'},
  {name: 'contentEditable'},
  {
    name: 'contentScriptType',
    tagName: 'svg',
    read: getSVGAttribute('contentScriptType'),
  },
  {
    name: 'contentStyleType',
    tagName: 'svg',
    read: getSVGAttribute('contentStyleType'),
  },
  {name: 'contextMenu', read: getAttribute('contextmenu')}, // TODO: Read the property by rendering a menu with the ID.
  {name: 'controls', tagName: 'video'},
  {name: 'coords', tagName: 'a'},
  {name: 'crossOrigin', tagName: 'script'},
  {name: 'cursor', tag: 'svg', read: getAttribute('cursor')},
  {
    name: 'cx',
    containerTagName: 'svg',
    tagName: 'circle',
    read: getSVGAttribute('cx'),
  },
  {
    name: 'cy',
    containerTagName: 'svg',
    tagName: 'circle',
    read: getSVGAttribute('cy'),
  },
  {
    name: 'd',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('d'),
  },
  {
    name: 'dangerouslySetInnerHTML',
    read: getAttribute('dangerouslySetInnerHTML'),
  },
  {
    name: 'DangerouslySetInnerHTML',
    read: getAttribute('DangerouslySetInnerHTML'),
  },
  {name: 'data', read: getAttribute('data')},
  {name: 'data-', read: getAttribute('data-')},
  {name: 'data-unknownattribute', read: getAttribute('data-unknownattribute')},
  {name: 'datatype', read: getAttribute('datatype')},
  {
    name: 'dateTime',
    tagName: 'time',
    overrideStringValue: '2001-05-15T19:00',
    read: getAttribute('datetime'),
  },
  {
    name: 'decelerate',
    containerTagName: 'svg',
    tagName: 'animate',
    read: getSVGAttribute('decelerate'),
  },
  {name: 'default', tagName: 'track'},
  {
    name: 'defaultchecked',
    tagName: 'input',
    read: getAttribute('defaultchecked'),
  },
  {name: 'defaultChecked', tagName: 'input'},
  {name: 'defaultValue', tagName: 'input'},
  {name: 'defaultValuE', tagName: 'input', read: getAttribute('defaultValuE')},
  {name: 'defer', tagName: 'script'},
  {
    name: 'descent',
    containerTagName: 'svg',
    tagName: 'font-face',
    read: getSVGAttribute('descent'),
  },
  {
    name: 'diffuseConstant',
    containerTagName: 'svg',
    tagName: 'feDiffuseLighting',
    read: getSVGAttribute('diffuseConstant'),
  },
  {name: 'dir', overrideStringValue: 'rtl'},
  {
    name: 'direction',
    containerTagName: 'svg',
    tagName: 'text',
    overrideStringValue: 'rtl',
    read: getSVGAttribute('direction'),
  },
  {name: 'disabled', tagName: 'input'},
  {
    name: 'display',
    tagName: 'svg',
    overrideStringValue: 'list-item',
    read: getAttribute('display'),
  },
  {
    name: 'divisor',
    containerTagName: 'svg',
    tagName: 'feConvolveMatrix',
    read: getSVGAttribute('divisor'),
  },
  {
    name: 'dominant-baseline',
    containerTagName: 'svg',
    tagName: 'text',
    read: getSVGAttribute('dominant-baseline'),
  },
  {
    name: 'dominantBaseline',
    containerTagName: 'svg',
    tagName: 'text',
    read: getSVGAttribute('dominant-baseline'),
  },
  {name: 'download', tagName: 'a'},
  {name: 'dOwNlOaD', tagName: 'a', read: getAttribute('dOwNlOaD')},
  {name: 'draggable'},
  {
    name: 'dur',
    containerTagName: 'svg',
    tagName: 'animate',
    read: getSVGAttribute('dur'),
  },
  {
    name: 'dx',
    containerTagName: 'svg',
    tagName: 'text',
    read: getSVGAttribute('dx'),
  },
  {
    name: 'dX',
    containerTagName: 'svg',
    tagName: 'text',
    read: getSVGAttribute('dX'),
  },
  {
    name: 'dy',
    containerTagName: 'svg',
    tagName: 'text',
    read: getSVGAttribute('dy'),
  },
  {
    name: 'dY',
    containerTagName: 'svg',
    tagName: 'text',
    read: getSVGAttribute('dY'),
  },
  {
    name: 'edgeMode',
    containerTagName: 'svg',
    tagName: 'feConvolveMatrix',
    overrideStringValue: 'wrap',
    read: getSVGAttribute('edgeMode'),
  },
  {
    name: 'elevation',
    containerTagName: 'svg',
    tagName: 'feDistantLight',
    read: getSVGAttribute('elevation'),
  },
  {
    name: 'enable-background',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('enable-background'),
  },
  {
    name: 'enableBackground',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('enable-background'),
  },
  {
    name: 'encType',
    tagName: 'form',
    overrideStringValue: 'text/plain',
    read: getProperty('enctype'),
  },
  {
    name: 'end',
    containerTagName: 'svg',
    tagName: 'animate',
    read: getSVGAttribute('end'),
  },
  {
    name: 'exponent',
    read: getSVGAttribute('exponent'),
    containerTagName: 'svg',
    tagName: 'feFuncA',
  },
  {
    name: 'externalResourcesRequired',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('externalResourcesRequired'),
  },
  {
    name: 'fill',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('fill'),
  },
  {
    name: 'fillOpacity',
    containerTagName: 'svg',
    tagName: 'circle',
    read: getSVGAttribute('fill-opacity'),
  },
  {
    name: 'fill-opacity',
    containerTagName: 'svg',
    tagName: 'circle',
    read: getSVGAttribute('fill-opacity'),
  },
  {
    name: 'fillRule',
    containerTagName: 'svg',
    tagName: 'circle',
    read: getSVGAttribute('fill-rule'),
  },
  {
    name: 'fill-rule',
    containerTagName: 'svg',
    tagName: 'circle',
    read: getSVGAttribute('fill-rule'),
  },
  {
    name: 'filter',
    containerTagName: 'svg',
    tagName: 'g',
    read: getSVGAttribute('filter'),
  },
  {
    name: 'filterRes',
    containerTagName: 'svg',
    tagName: 'filter',
    read: getSVGAttribute('filterRes'),
  },
  {
    name: 'filterUnits',
    containerTagName: 'svg',
    tagName: 'filter',
    overrideStringValue: 'userSpaceOnUse',
    read: getSVGAttribute('filterUnits'),
  },
  {
    name: 'flood-color',
    containerTagName: 'svg',
    tagName: 'feflood',
    overrideStringValue: 'currentColor',
    read: getSVGAttribute('flood-color'),
  },
  {
    name: 'floodColor',
    containerTagName: 'svg',
    tagName: 'feflood',
    overrideStringValue: 'currentColor',
    read: getSVGAttribute('flood-color'),
  },
  {
    name: 'flood-opacity',
    containerTagName: 'svg',
    tagName: 'feflood',
    overrideStringValue: 'inherit',
    read: getSVGAttribute('flood-opacity'),
  },
  {
    name: 'floodOpacity',
    containerTagName: 'svg',
    tagName: 'feflood',
    overrideStringValue: 'inherit',
    read: getSVGAttribute('flood-opacity'),
  },
  {name: 'focusable', tagName: 'p', read: getAttribute('focusable')},
  {
    name: 'font-family',
    read: getSVGAttribute('font-family'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'font-size',
    read: getSVGAttribute('font-size'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'font-size-adjust',
    containerTagName: 'svg',
    tagName: 'text',
    read: getSVGAttribute('font-size-adjust'),
  },
  {
    name: 'font-stretch',
    read: getSVGAttribute('font-stretch'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'font-style',
    read: getSVGAttribute('font-style'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'font-variant',
    read: getSVGAttribute('font-variant'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'font-weight',
    read: getSVGAttribute('font-weight'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'fontFamily',
    read: getSVGAttribute('font-family'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'fontSize',
    read: getSVGAttribute('font-size'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'fontSizeAdjust',
    containerTagName: 'svg',
    tagName: 'text',
    read: getSVGAttribute('font-size-adjust'),
  },
  {
    name: 'fontStretch',
    read: getSVGAttribute('font-stretch'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'fontStyle',
    read: getSVGAttribute('font-style'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'fontVariant',
    read: getSVGAttribute('font-variant'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'fontWeight',
    read: getSVGAttribute('font-weight'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {name: 'for', tagName: 'label', read: getProperty('htmlFor')},
  {name: 'fOr', tagName: 'label', read: getProperty('htmlFor')},
  {name: 'form', read: getAttribute('form')}, // TODO: Read the property by rendering into a form with i
  {
    name: 'formAction',
    tagName: 'input',
    overrideStringValue: 'https://reactjs.com',
  },
  {
    name: 'format',
    read: getSVGAttribute('format'),
    containerTagName: 'svg',
    tagName: 'altGlyph',
  },
  {name: 'formEncType', tagName: 'input', read: getProperty('formEnctype')},
  {name: 'formMethod', tagName: 'input', overrideStringValue: 'POST'},
  {name: 'formNoValidate', tagName: 'input'},
  {name: 'formTarget', tagName: 'input'},
  {name: 'frameBorder', tagName: 'frame'},
  {
    name: 'from',
    read: getSVGAttribute('from'),
    containerTagName: 'svg',
    tagName: 'animate',
  },
  {
    name: 'fx',
    read: getSVGAttribute('fx'),
    containerTagName: 'svg',
    tagName: 'radialGradient',
  },
  {
    name: 'fX',
    containerTagName: 'svg',
    tagName: 'radialGradient',
    read: getSVGAttribute('fx'),
  },
  {
    name: 'fY',
    containerTagName: 'svg',
    tagName: 'radialGradient',
    read: getSVGAttribute('fy'),
  },
  {
    name: 'fy',
    read: getSVGAttribute('fy'),
    containerTagName: 'svg',
    tagName: 'radialGradient',
  },
  {
    name: 'G1',
    containerTagName: 'svg',
    tagName: 'hkern',
    read: getSVGAttribute('g1'),
  },
  {
    name: 'g1',
    read: getSVGAttribute('g1'),
    containerTagName: 'svg',
    tagName: 'hkern',
  },
  {
    name: 'G2',
    containerTagName: 'svg',
    tagName: 'hkern',
    read: getSVGAttribute('g2'),
  },
  {
    name: 'g2',
    read: getSVGAttribute('g2'),
    containerTagName: 'svg',
    tagName: 'hkern',
  },
  {
    name: 'glyph-name',
    read: getSVGAttribute('glyph-name'),
    containerTagName: 'svg',
    tagName: 'glyph',
  },
  {
    name: 'glyph-orientation-horizontal',
    containerTagName: 'svg',
    tagName: 'text',
    read: getSVGAttribute('glyph-orientation-horizontal'),
  },
  {
    name: 'glyph-orientation-vertical',
    containerTagName: 'svg',
    tagName: 'text',
    read: getSVGAttribute('glyph-orientation-vertical'),
  },
  {
    name: 'glyphName',
    read: getSVGAttribute('glyph-name'),
    containerTagName: 'svg',
    tagName: 'glyph',
  },
  {
    name: 'glyphOrientationHorizontal',
    containerTagName: 'svg',
    tagName: 'text',
    read: getSVGAttribute('glyph-orientation-horizontal'),
  },
  {
    name: 'glyphOrientationVertical',
    containerTagName: 'svg',
    tagName: 'text',
    read: getSVGAttribute('glyph-orientation-vertical'),
  },
  {
    name: 'glyphRef',
    read: getSVGAttribute('glyph-ref'),
    containerTagName: 'svg',
    tagName: 'altGlyph',
  },
  {
    name: 'gradientTransform',
    read: getSVGAttribute('gradientTransform'),
    containerTagName: 'svg',
    tagName: 'linearGradient',
  },
  {
    name: 'gradientUnits',
    read: getSVGAttribute('gradientUnits'),
    containerTagName: 'svg',
    tagName: 'linearGradient',
  },
  {
    name: 'hanging',
    read: getSVGAttribute('hanging'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {name: 'hasOwnProperty', read: getAttribute('hasOwnProperty')},
  {name: 'headers', tagName: 'td'},
  {name: 'height', tagName: 'img'},
  {
    name: 'height',
    containerTagName: 'svg',
    tagName: 'rect',
    read: getSVGAttribute('height'),
  },
  {name: 'hidden'},
  {name: 'high', tagName: 'meter'},
  {
    name: 'horiz-adv-x',
    read: getSVGAttribute('horiz-adv-x'),
    containerTagName: 'svg',
    tagName: 'font',
  },
  {
    name: 'horiz-origin-x',
    read: getSVGAttribute('horiz-origin-x'),
    containerTagName: 'svg',
    tagName: 'font',
  },
  {
    name: 'horizAdvX',
    read: getSVGAttribute('horiz-adv-x'),
    containerTagName: 'svg',
    tagName: 'font',
  },
  {
    name: 'horizOriginX',
    read: getSVGAttribute('horiz-origin-x'),
    containerTagName: 'svg',
    tagName: 'font',
  },
  {name: 'href', tagName: 'a', overrideStringValue: 'https://reactjs.com'},
  {name: 'hrefLang', read: getAttribute('hreflang')},
  {name: 'htmlFor', tagName: 'label'},
  {name: 'http-equiv', tagName: 'meta', read: getProperty('httpEquiv')},
  {name: 'httpEquiv', tagName: 'meta'},
  {name: 'icon', tagName: 'command', read: getAttribute('icon')},
  {name: 'id'},
  {name: 'ID', read: getProperty('id')},
  {
    name: 'ideographic',
    read: getSVGAttribute('ideographic'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'image-rendering',
    tagName: 'svg',
    read: getSVGAttribute('image-rendering'),
  },
  {
    name: 'imageRendering',
    tagName: 'svg',
    read: getSVGAttribute('image-rendering'),
  },
  {
    name: 'in',
    read: getSVGAttribute('in'),
    containerTagName: 'svg',
    tagName: 'feBlend',
  },
  {
    name: 'in2',
    read: getSVGAttribute('in2'),
    containerTagName: 'svg',
    tagName: 'feBlend',
  },
  {name: 'initialChecked', read: getAttribute('initialchecked')},
  {name: 'initialValue', read: getAttribute('initialvalue')},
  {name: 'inlist', read: getAttribute('inlist')},
  {name: 'inputMode', tagName: 'input', read: getAttribute('inputmode')}, // TODO: Should use property but it's not implemented in Chrome
  {name: 'integrity', tagName: 'script'},
  {
    name: 'intercept',
    read: getSVGAttribute('intercept'),
    containerTagName: 'svg',
    tagName: 'feFuncA',
  },
  {
    name: 'is',
    tagName: 'button',
    overrideStringValue: 'x-test-element',
    read: getAttribute('is'), // TODO: This could check if this is an extended custom element but this is a controversial spec.
  },
  {name: 'itemID', read: getAttribute('itemid')},
  {name: 'itemProp', read: getAttribute('itemprop')},
  {name: 'itemRef', read: getAttribute('itemref')},
  {name: 'itemScope', read: getAttribute('itemscope')},
  {name: 'itemType', read: getAttribute('itemtype')},
  {
    name: 'k',
    read: getSVGAttribute('k'),
    containerTagName: 'svg',
    tagName: 'hkern',
  },
  {
    name: 'K',
    containerTagName: 'svg',
    tagName: 'hkern',
    read: getSVGAttribute('k'),
  },
  {
    name: 'K1',
    containerTagName: 'svg',
    tagName: 'feComposite',
    read: getSVGAttribute('k1'),
  },
  {
    name: 'k1',
    read: getSVGAttribute('k1'),
    containerTagName: 'svg',
    tagName: 'feComposite',
  },
  {
    name: 'k2',
    read: getSVGAttribute('k2'),
    containerTagName: 'svg',
    tagName: 'feComposite',
  },
  {
    name: 'k3',
    read: getSVGAttribute('k3'),
    containerTagName: 'svg',
    tagName: 'feComposite',
  },
  {
    name: 'k4',
    read: getSVGAttribute('k4'),
    containerTagName: 'svg',
    tagName: 'feComposite',
  },
  {
    name: 'kernelMatrix',
    read: getSVGAttribute('kernelMatrix'),
    containerTagName: 'svg',
    tagName: 'feConvolveMatrix',
  },
  {
    name: 'kernelUnitLength',
    read: getSVGAttribute('kernelUnitLength'),
    containerTagName: 'svg',
    tagName: 'feConvolveMatrix',
  },
  {
    name: 'kerning',
    containerTagName: 'svg',
    tagName: 'text',
    read: getSVGAttribute('kerning'),
  },
  {name: 'keyParams', read: getAttribute('keyParams')},
  {
    name: 'keyPoints',
    read: getSVGAttribute('keyPoints'),
    containerTagName: 'svg',
    tagName: 'animateMotion',
  },
  {
    name: 'keySplines',
    read: getSVGAttribute('keySplines'),
    containerTagName: 'svg',
    tagName: 'animate',
  },
  {
    name: 'keyTimes',
    read: getSVGAttribute('keyTimes'),
    containerTagName: 'svg',
    tagName: 'animate',
  },
  {name: 'keyType', read: getAttribute('keyType')},
  {name: 'kind', tagName: 'track', overrideStringValue: 'captions'},
  {name: 'label', tagName: 'track'},
  {name: 'LANG', read: getProperty('lang')},
  {name: 'lang'},
  {name: 'length', read: getAttribute('length')},
  {
    name: 'lengthAdjust',
    read: getSVGAttribute('lengthAdjust'),
    containerTagName: 'svg',
    tagName: 'text',
  },
  {
    name: 'letter-spacing',
    containerTagName: 'svg',
    tagName: 'text',
    read: getSVGAttribute('letter-spacing'),
  },
  {
    name: 'letterSpacing',
    containerTagName: 'svg',
    tagName: 'text',
    read: getSVGAttribute('letter-spacing'),
  },
  {
    name: 'lighting-color',
    containerTagName: 'svg',
    tagName: 'feDiffuseLighting',
    read: getSVGAttribute('lighting-color'),
  },
  {
    name: 'lightingColor',
    containerTagName: 'svg',
    tagName: 'feDiffuseLighting',
    read: getSVGAttribute('lighting-color'),
  },
  {
    name: 'limitingConeAngle',
    read: getSVGAttribute('limitingConeAngle'),
    containerTagName: 'svg',
    tagName: 'feSpotLight',
  },
  {name: 'list', read: getAttribute('list')}, // TODO: This should match the ID of a datalist element and then read property.
  {
    name: 'local',
    read: getSVGAttribute('local'),
    containerTagName: 'svg',
    tagName: 'color-profile',
  },
  {name: 'loop', tagName: 'audio'},
  {name: 'low', tagName: 'meter'},
  {name: 'manifest', read: getAttribute('manifest')},
  {name: 'marginHeight', tagName: 'frame'},
  {name: 'marginWidth', tagName: 'frame'},
  {
    name: 'marker-end',
    containerTagName: 'svg',
    tagName: 'line',
    read: getSVGAttribute('marker-end'),
  },
  {
    name: 'marker-mid',
    containerTagName: 'svg',
    tagName: 'line',
    read: getSVGAttribute('marker-mid'),
  },
  {
    name: 'marker-start',
    containerTagName: 'svg',
    tagName: 'line',
    read: getSVGAttribute('marker-start'),
  },
  {
    name: 'markerEnd',
    containerTagName: 'svg',
    tagName: 'line',
    read: getSVGAttribute('marker-end'),
  },
  {
    name: 'markerHeight',
    read: getSVGAttribute('markerHeight'),
    containerTagName: 'svg',
    tagName: 'marker',
  },
  {
    name: 'markerMid',
    containerTagName: 'svg',
    tagName: 'line',
    read: getSVGAttribute('marker-mid'),
  },
  {
    name: 'markerStart',
    containerTagName: 'svg',
    tagName: 'line',
    read: getSVGAttribute('marker-start'),
  },
  {
    name: 'markerUnits',
    read: getSVGAttribute('markerUnits'),
    containerTagName: 'svg',
    tagName: 'marker',
  },
  {
    name: 'markerWidth',
    read: getSVGAttribute('markerWidth'),
    containerTagName: 'svg',
    tagName: 'marker',
  },
  {
    name: 'mask',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('mask'),
  },
  {
    name: 'maskContentUnits',
    read: getSVGAttribute('maskContentUnits'),
    containerTagName: 'svg',
    tagName: 'mask',
  },
  {
    name: 'maskUnits',
    read: getSVGAttribute('maskUnits'),
    containerTagName: 'svg',
    tagName: 'mask',
  },
  {
    name: 'mathematical',
    read: getSVGAttribute('mathematical'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {name: 'max', tagName: 'input'},
  {name: 'max', tagName: 'meter'},
  {name: 'max', tagName: 'progress'},
  {
    name: 'max',
    containerTagName: 'svg',
    tagName: 'animate',
    read: getSVGAttribute('max'),
  },
  {name: 'maxLength', tagName: 'textarea'},
  {name: 'media', tagName: 'link'},
  {
    name: 'media',
    containerTagName: 'svg',
    tagName: 'style',
    read: getSVGAttribute('media'),
  },
  {name: 'mediaGroup', tagName: 'video', read: getAttribute('mediagroup')}, // TODO: Not yet implemented in Chrome.
  {name: 'method', tagName: 'form', overrideStringValue: 'POST'},
  {
    name: 'method',
    containerTagName: 'svg',
    tagName: 'textPath',
    read: getSVGAttribute('method'),
  },
  {name: 'min', tagName: 'input'},
  {name: 'min', tagName: 'meter'},
  {
    name: 'min',
    containerTagName: 'svg',
    tagName: 'animate',
    read: getSVGAttribute('min'),
  },
  {name: 'minLength', tagName: 'input'},
  {
    name: 'mode',
    read: getSVGAttribute('mode'),
    containerTagName: 'svg',
    tagName: 'feBlend',
  },
  {name: 'multiple', tagName: 'select'},
  {name: 'muted', tagName: 'video'},
  {name: 'name', tagName: 'input'},
  {
    name: 'name',
    containerTagName: 'svg',
    tagName: 'color-profile',
    read: getSVGAttribute('color-profile'),
  },
  {name: 'nonce', read: getAttribute('nonce')},
  {name: 'noValidate', tagName: 'form'},
  {
    name: 'numOctaves',
    read: getSVGAttribute('numOctaves'),
    containerTagName: 'svg',
    tagName: 'feTurbulence',
  },
  {
    name: 'offset',
    read: getSVGAttribute('offset'),
    containerTagName: 'svg',
    tagName: 'stop',
  },
  {name: 'on-click'}, // TODO: Check for event subscriptions
  {name: 'on-unknownevent'}, // TODO: Check for event subscriptions
  {name: 'onclick'}, // TODO: Check for event subscriptions
  {name: 'onClick'}, // TODO: Check for event subscriptions
  {name: 'onunknownevent'}, // TODO: Check for event subscriptions
  {name: 'onUnknownEvent'}, // TODO: Check for event subscriptions
  {
    name: 'opacity',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('opacity'),
  },
  {name: 'open', tagName: 'details'},
  {
    name: 'operator',
    read: getSVGAttribute('operator'),
    containerTagName: 'svg',
    tagName: 'feComposite',
  },
  {name: 'optimum', tagName: 'meter'},
  {
    name: 'order',
    read: getSVGAttribute('order'),
    containerTagName: 'svg',
    tagName: 'feConvolveMatrix',
  },
  {
    name: 'orient',
    read: getSVGAttribute('orient'),
    containerTagName: 'svg',
    tagName: 'marker',
  },
  {
    name: 'orientation',
    read: getSVGAttribute('orientation'),
    containerTagName: 'svg',
    tagName: 'glyph',
  },
  {
    name: 'origin',
    read: getSVGAttribute('origin'),
    containerTagName: 'svg',
    tagName: 'animateMotion',
  },
  {
    name: 'overflow',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('overflow'),
  },
  {
    name: 'overline-position',
    read: getSVGAttribute('overline-position'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'overline-thickness',
    read: getSVGAttribute('overline-thickness'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'overlinePosition',
    read: getSVGAttribute('overline-position'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'overlineThickness',
    read: getSVGAttribute('overline-thickness'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'paint-order',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('paint-order'),
  },
  {
    name: 'paintOrder',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('paint-order'),
  },
  {
    name: 'panose-1',
    read: getSVGAttribute('panose-1'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'panose1',
    containerTagName: 'svg',
    tagName: 'font-face',
    read: getSVGAttribute('panose-1'),
  },
  {
    name: 'pathLength',
    read: getSVGAttribute('pathLength'),
    containerTagName: 'svg',
    tagName: 'path',
  },
  {name: 'pattern', tagName: 'input'},
  {
    name: 'patternContentUnits',
    read: getSVGAttribute('patternContentUnits'),
    containerTagName: 'svg',
    tagName: 'pattern',
  },
  {
    name: 'patternTransform',
    read: getSVGAttribute('patternTransform'),
    containerTagName: 'svg',
    tagName: 'pattern',
  },
  {
    name: 'patternUnits',
    read: getSVGAttribute('patternUnits'),
    containerTagName: 'svg',
    tagName: 'pattern',
  },
  {name: 'placeholder', tagName: 'input'},
  {name: 'playsInline', read: getAttribute('playsinline')},
  {
    name: 'pointer-events',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('pointer-events'),
  },
  {
    name: 'pointerEvents',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('pointer-events'),
  },
  {
    name: 'points',
    read: getSVGAttribute('points'),
    containerTagName: 'svg',
    tagName: 'polygon',
  },
  {
    name: 'pointsAtX',
    read: getSVGAttribute('pointsAtX'),
    containerTagName: 'svg',
    tagName: 'feSpotLight',
  },
  {
    name: 'pointsAtY',
    read: getSVGAttribute('pointsAtY'),
    containerTagName: 'svg',
    tagName: 'feSpotLight',
  },
  {
    name: 'pointsAtZ',
    read: getSVGAttribute('pointsAtZ'),
    containerTagName: 'svg',
    tagName: 'feSpotLight',
  },
  {
    name: 'poster',
    tagName: 'video',
    overrideStringValue: 'https://reactjs.com',
  },
  {name: 'prefix', read: getAttribute('prefix')},
  {name: 'preload', tagName: 'video', overrideStringValue: 'none'},
  {
    name: 'preserveAlpha',
    read: getSVGAttribute('preserveAlpha'),
    containerTagName: 'svg',
    tagName: 'feConvolveMatrix',
  },
  {
    name: 'preserveAspectRatio',
    read: getSVGAttribute('preserveAspectRatio'),
    containerTagName: 'svg',
    tagName: 'feImage',
  },
  {
    name: 'primitiveUnits',
    read: getSVGAttribute('primitiveUnits'),
    containerTagName: 'svg',
    tagName: 'filter',
  },
  {name: 'profile', read: getAttribute('profile')},
  {name: 'property', read: getAttribute('property')},
  {name: 'props', read: getAttribute('props')},
  {
    name: 'r',
    read: getSVGAttribute('r'),
    containerTagName: 'svg',
    tagName: 'circle',
  },
  {name: 'radioGroup', tagName: 'command', read: getAttribute('radiogroup')},
  {
    name: 'radius',
    read: getSVGAttribute('radius'),
    containerTagName: 'svg',
    tagName: 'feMorphology',
  },
  {name: 'readOnly', tagName: 'input'},
  {name: 'referrerPolicy', tagName: 'iframe'},
  {
    name: 'refX',
    read: getSVGAttribute('refX'),
    containerTagName: 'svg',
    tagName: 'marker',
  },
  {
    name: 'refY',
    read: getSVGAttribute('refY'),
    containerTagName: 'svg',
    tagName: 'marker',
  },
  {name: 'rel', tagName: 'a'},
  {
    name: 'rendering-intent',
    read: getSVGAttribute('rendering-intent'),
    containerTagName: 'svg',
    tagName: 'color-profile',
  },
  {
    name: 'renderingIntent',
    read: getSVGAttribute('rendering-intent'),
    containerTagName: 'svg',
    tagName: 'color-profile',
  },
  {
    name: 'repeatCount',
    read: getSVGAttribute('repeatcount'),
    containerTagName: 'svg',
    tagName: 'animate',
  },
  {
    name: 'repeatDur',
    read: getSVGAttribute('repeatdur'),
    containerTagName: 'svg',
    tagName: 'animate',
  },
  {name: 'required', tagName: 'input'},
  {
    name: 'requiredExtensions',
    read: getSVGAttribute('requiredExtensions'),
    containerTagName: 'svg',
    tagName: 'a',
  },
  {
    name: 'requiredFeatures',
    read: getSVGAttribute('requiredFeatures'),
    containerTagName: 'svg',
    tagName: 'a',
  },
  {name: 'resource', read: getAttribute('resource')},
  {
    name: 'restart',
    read: getSVGAttribute('resource'),
    containerTagName: 'svg',
    tagName: 'animate',
  },
  {
    name: 'result',
    read: getSVGAttribute('result'),
    containerTagName: 'svg',
    tagName: 'feBlend',
  },
  {name: 'results', tagName: 'input', read: getAttribute('results')}, // TODO: Should use property but it's not supported in Chrome.
  {name: 'reversed', tagName: 'ol'},
  {name: 'role', read: getAttribute('role')},
  {
    name: 'rotate',
    read: getSVGAttribute('role'),
    containerTagName: 'svg',
    tagName: 'altGlyph',
  },
  {name: 'rows', tagName: 'textarea'},
  {name: 'rowSpan', tagName: 'td'},
  {
    name: 'rx',
    read: getSVGAttribute('rx'),
    containerTagName: 'svg',
    tagName: 'ellipse',
  },
  {
    name: 'ry',
    read: getSVGAttribute('ry'),
    containerTagName: 'svg',
    tagName: 'ellipse',
  },
  {
    name: 'sandbox',
    tagName: 'iframe',
    overrideStringValue: 'allow-forms  allow-scripts',
  },
  {
    name: 'scale',
    read: getSVGAttribute('scale'),
    containerTagName: 'svg',
    tagName: 'feDisplacementMap',
  },
  {name: 'scope', tagName: 'th', overrideStringValue: 'row'},
  {name: 'scoped', tagName: 'style', read: getAttribute('scoped')},
  {name: 'scrolling', tagName: 'iframe', overrideStringValue: 'no'},
  {name: 'seamless', tagName: 'iframe', read: getAttribute('seamless')},
  {name: 'security', tagName: 'iframe', read: getAttribute('security')},
  {
    name: 'seed',
    read: getSVGAttribute('seed'),
    containerTagName: 'svg',
    tagName: 'feTurbulence',
  },
  {name: 'selected', tagName: 'option', containerTagName: 'select'},
  {name: 'selectedIndex', tagName: 'select'},
  {name: 'shape', tagName: 'a'},
  {
    name: 'shape-rendering',
    tagName: 'svg',
    read: getSVGAttribute('shape-rendering'),
  },
  {
    name: 'shapeRendering',
    tagName: 'svg',
    read: getSVGAttribute('shape-rendering'),
  },
  {name: 'size', tagName: 'input'},
  {name: 'sizes', tagName: 'link'},
  {
    name: 'slope',
    read: getSVGAttribute('slope'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'spacing',
    read: getSVGAttribute('spacing'),
    containerTagName: 'svg',
    tagName: 'textPath',
  },
  {name: 'span', tagName: 'col'},
  {
    name: 'specularConstant',
    read: getSVGAttribute('specularConstant'),
    containerTagName: 'svg',
    tagName: 'feSpecularLighting',
  },
  {
    name: 'specularExponent',
    read: getSVGAttribute('specularConstant'),
    containerTagName: 'svg',
    tagName: 'feSpecularLighting',
  },
  {name: 'speed', read: getAttribute('speed')},
  {
    name: 'spellCheck',
    overrideStringValue: 'false',
    tagName: 'input',
    read: getProperty('spellcheck'),
  },
  {
    name: 'spellcheck',
    overrideStringValue: 'false',
    tagName: 'input',
    read: getProperty('spellcheck'),
  },
  {
    name: 'spreadMethod',
    read: getSVGAttribute('spreadMethod'),
    containerTagName: 'svg',
    tagName: 'linearGradient',
  },
  {name: 'src', tagName: 'img', overrideStringValue: 'https://reactjs.com'},
  {
    name: 'srcDoc',
    tagName: 'iframe',
    overrideStringValue: '<p>Hi</p>',
    read: getProperty('srcdoc'),
  },
  {
    name: 'srcdoc',
    tagName: 'iframe',
    overrideStringValue: '<p>Hi</p>',
    read: getProperty('srcdoc'),
  },
  {
    name: 'srcLang',
    containerTagName: 'audio',
    tagName: 'track',
    overrideStringValue: 'en',
    read: getProperty('srclang'),
  },
  {
    name: 'srclang',
    containerTagName: 'audio',
    tagName: 'track',
    overrideStringValue: 'en',
    read: getProperty('srclang'),
  },
  {name: 'srcSet', tagName: 'img'},
  {name: 'srcset', tagName: 'img'},
  {name: 'start', tagName: 'ol'},
  {
    name: 'startOffset',
    read: getSVGAttribute('startOffset'),
    containerTagName: 'svg',
    tagName: 'textPath',
  },
  {name: 'state', read: getAttribute('state')},
  {
    name: 'stdDeviation',
    read: getSVGAttribute('stdDeviation'),
    containerTagName: 'svg',
    tagName: 'feGaussianBlur',
  },
  {
    name: 'stemh',
    read: getSVGAttribute('stemh'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'stemv',
    read: getSVGAttribute('stemv'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {name: 'step', read: getAttribute('step')},
  {
    name: 'stitchTiles',
    read: getSVGAttribute('stitchTiles'),
    containerTagName: 'svg',
    tagName: 'feTurbulence',
  },
  {
    name: 'stop-color',
    containerTagName: 'svg',
    tagName: 'stop',
    read: getSVGAttribute('stop-color'),
  },
  {
    name: 'stop-opacity',
    containerTagName: 'svg',
    tagName: 'stop',
    read: getSVGAttribute('stop-opacity'),
  },
  {
    name: 'stopColor',
    containerTagName: 'svg',
    tagName: 'stop',
    read: getSVGAttribute('stop-color'),
  },
  {
    name: 'stopOpacity',
    containerTagName: 'svg',
    tagName: 'stop',
    read: getSVGAttribute('stop-opacity'),
  },
  {
    name: 'strikethrough-position',
    read: getSVGAttribute('strikethrough-position'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'strikethrough-thickness',
    read: getSVGAttribute('strikethrough-thickness'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'strikethroughPosition',
    read: getSVGAttribute('strikethrough-position'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'strikethroughThickness',
    read: getSVGAttribute('strikethrough-thickness'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'string',
    read: getSVGAttribute('string'),
    containerTagName: 'svg',
    tagName: 'font-face-format',
  },
  {
    name: 'stroke',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('stroke'),
  },
  {
    name: 'stroke-dasharray',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('stroke-dasharray'),
  },
  {
    name: 'stroke-Dasharray',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('stroke-dasharray'),
  },
  {
    name: 'stroke-dashoffset',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('stroke-dashoffset'),
  },
  {
    name: 'stroke-linecap',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('stroke-linecap'),
  },
  {
    name: 'stroke-linejoin',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('stroke-linejoin'),
  },
  {
    name: 'stroke-miterlimit',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('stroke-miterlimit'),
  },
  {
    name: 'stroke-opacity',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('stroke-opacity'),
  },
  {
    name: 'stroke-width',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('stroke-width'),
  },
  {
    name: 'strokeDasharray',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('stroke-dasharray'),
  },
  {
    name: 'strokeDashoffset',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('stroke-dashoffset'),
  },
  {
    name: 'strokeLinecap',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('stroke-linecap'),
  },
  {
    name: 'strokeLinejoin',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('stroke-linejoin'),
  },
  {
    name: 'strokeMiterlimit',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('stroke-miterlimit'),
  },
  {
    name: 'strokeOpacity',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('stroke-opacity'),
  },
  {
    name: 'strokeWidth',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('stroke-width'),
  },
  {name: 'style'},
  {name: 'summary', tagName: 'table'},
  {
    name: 'suppressContentEditableWarning',
    read: getAttribute('suppresscontenteditablewarning'),
  },
  {
    name: 'surfaceScale',
    read: getSVGAttribute('surfaceScale'),
    containerTagName: 'svg',
    tagName: 'feDiffuseLighting',
  },
  {
    name: 'systemLanguage',
    overrideStringValue: 'en',
    read: getSVGAttribute('systemLanguage'),
    containerTagName: 'svg',
    tagName: 'a',
  },
  {name: 'tabIndex'},
  {
    name: 'tableValues',
    read: getSVGAttribute('tableValues'),
    containerTagName: 'svg',
    tagName: 'feFuncA',
  },
  {
    name: 'target',
    read: getSVGAttribute('target'),
    containerTagName: 'svg',
    tagName: 'a',
  },
  {
    name: 'targetX',
    read: getSVGAttribute('targetX'),
    containerTagName: 'svg',
    tagName: 'feConvolveMatrix',
  },
  {
    name: 'targetY',
    read: getSVGAttribute('targetY'),
    containerTagName: 'svg',
    tagName: 'feConvolveMatrix',
  },
  {
    name: 'text-anchor',
    containerTagName: 'svg',
    tagName: 'text',
    read: getSVGAttribute('text-anchor'),
  },
  {
    name: 'text-decoration',
    containerTagName: 'svg',
    tagName: 'text',
    read: getSVGAttribute('text-decoration'),
  },
  {
    name: 'text-rendering',
    tagName: 'svg',
    read: getSVGAttribute('text-rendering'),
  },
  {
    name: 'textAnchor',
    containerTagName: 'svg',
    tagName: 'text',
    read: getSVGAttribute('text-anchor'),
  },
  {
    name: 'textDecoration',
    containerTagName: 'svg',
    tagName: 'text',
    read: getSVGAttribute('text-decoration'),
  },
  {
    name: 'textLength',
    read: getSVGAttribute('textLength'),
    containerTagName: 'svg',
    tagName: 'text',
  },
  {
    name: 'textRendering',
    tagName: 'svg',
    read: getSVGAttribute('text-rendering'),
  },
  {name: 'title'},
  {
    name: 'to',
    read: getSVGAttribute('to'),
    containerTagName: 'svg',
    tagName: 'set',
  },
  {
    name: 'transform',
    read: getSVGAttribute('transform'),
    containerTagName: 'svg',
    tagName: 'a',
  },
  {name: 'type', tagName: 'button', overrideStringValue: 'reset'},
  {
    name: 'type',
    containerTagName: 'svg',
    tagName: 'feFuncA',
    read: getSVGAttribute('type'),
  },
  {name: 'typeof', read: getAttribute('typeof')},
  {
    name: 'u1',
    read: getSVGAttribute('u1'),
    containerTagName: 'svg',
    tagName: 'hkern',
  },
  {
    name: 'u2',
    read: getSVGAttribute('u2'),
    containerTagName: 'svg',
    tagName: 'hkern',
  },
  {
    name: 'underline-position',
    read: getSVGAttribute('underline-position'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'underline-thickness',
    read: getSVGAttribute('underline-thickness'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'underlinePosition',
    read: getSVGAttribute('underline-position'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'underlineThickness',
    read: getSVGAttribute('underline-thickness'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'unicode',
    read: getSVGAttribute('unicode'),
    containerTagName: 'svg',
    tagName: 'glyph',
  },
  {
    name: 'unicode-bidi',
    containerTagName: 'svg',
    tagName: 'text',
    read: getSVGAttribute('unicode-bidi'),
  },
  {
    name: 'unicode-range',
    read: getSVGAttribute('unicode-range'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'unicodeBidi',
    containerTagName: 'svg',
    tagName: 'text',
    read: getSVGAttribute('unicode-bidi'),
  },
  {
    name: 'unicodeRange',
    read: getSVGAttribute('unicode-range'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'units-per-em',
    read: getSVGAttribute('units-per-em'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'unitsPerEm',
    read: getSVGAttribute('unites-per-em'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {name: 'unknown', read: getAttribute('unknown')},
  {
    name: 'unselectable',
    read: getAttribute('unselectable'),
    tagName: 'span',
    overrideStringValue: 'on',
  },
  {name: 'useMap', tagName: 'img'},
  {
    name: 'v-alphabetic',
    read: getSVGAttribute('v-alphabetic'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'v-hanging',
    read: getSVGAttribute('v-hanging'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'v-ideographic',
    read: getSVGAttribute('v-ideographic'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'v-mathematical',
    read: getSVGAttribute('v-mathematical'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'vAlphabetic',
    read: getSVGAttribute('v-alphabetic'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {name: 'value', tagName: 'input'},
  {name: 'value', tagName: 'input', type: 'email'},
  {name: 'value', tagName: 'input', type: 'number'},
  {name: 'value', tagName: 'textarea'},
  {name: 'value', containerTagName: 'select', tagName: 'option'},
  {
    name: 'Value',
    containerTagName: 'select',
    tagName: 'option',
    read: getProperty('value'),
  },
  {
    name: 'values',
    read: getSVGAttribute('values'),
    containerTagName: 'svg',
    tagName: 'feColorMatrix',
  },
  {
    name: 'vector-effect',
    containerTagName: 'svg',
    tagName: 'line',
    read: getSVGAttribute('vector-effect'),
  },
  {
    name: 'vectorEffect',
    containerTagName: 'svg',
    tagName: 'line',
    read: getSVGAttribute('vector-effect'),
  },
  {name: 'version', tagName: 'html'},
  {name: 'version', tagName: 'svg', read: getSVGAttribute('version')},
  {
    name: 'vert-adv-y',
    read: getSVGAttribute('vert-origin-y'),
    containerTagName: 'svg',
    tagName: 'font',
  },
  {
    name: 'vert-origin-x',
    read: getSVGAttribute('vert-origin-y'),
    containerTagName: 'svg',
    tagName: 'font',
  },
  {
    name: 'vert-origin-y',
    read: getSVGAttribute('vert-origin-y'),
    containerTagName: 'svg',
    tagName: 'font',
  },
  {
    name: 'vertAdvY',
    read: getSVGAttribute('vert-adv-y'),
    containerTagName: 'svg',
    tagName: 'font',
  },
  {
    name: 'vertOriginX',
    read: getSVGAttribute('vert-origin-x'),
    containerTagName: 'svg',
    tagName: 'font',
  },
  {
    name: 'vertOriginY',
    read: getSVGAttribute('vert-origin-y'),
    containerTagName: 'svg',
    tagName: 'font',
  },
  {
    name: 'vHanging',
    read: getSVGAttribute('v-hanging'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'vIdeographic',
    read: getSVGAttribute('v-ideographic'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'viewBox',
    read: getSVGAttribute('viewBox'),
    containerTagName: 'svg',
    tagName: 'marker',
  },
  {
    name: 'viewTarget',
    read: getSVGAttribute('viewTarget'),
    containerTagName: 'svg',
    tagName: 'view',
  },
  {name: 'visibility', read: getAttribute('visibility')},
  {
    name: 'visibility',
    containerTagName: 'svg',
    tagName: 'path',
    read: getSVGAttribute('visibility'),
  },
  {
    name: 'vMathematical',
    read: getSVGAttribute('v-mathematical'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {name: 'vocab', read: getAttribute('vocab')},
  {name: 'width', tagName: 'img'},
  {
    name: 'width',
    containerTagName: 'svg',
    tagName: 'rect',
    read: getSVGAttribute('width'),
  },
  {
    name: 'widths',
    read: getSVGAttribute('widths'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {name: 'wmode', read: getAttribute('wmode'), tagName: 'embed'},
  {
    name: 'word-spacing',
    containerTagName: 'svg',
    tagName: 'text',
    read: getSVGAttribute('word-spacing'),
  },
  {
    name: 'wordSpacing',
    containerTagName: 'svg',
    tagName: 'text',
    read: getSVGAttribute('word-spacing'),
  },
  {name: 'wrap', tagName: 'textarea'},
  {
    name: 'writing-mode',
    containerTagName: 'svg',
    tagName: 'text',
    read: getSVGAttribute('writing-mode'),
  },
  {
    name: 'writingMode',
    containerTagName: 'svg',
    tagName: 'text',
    read: getSVGAttribute('writing-mode'),
  },
  {
    name: 'x',
    read: getSVGAttribute('x'),
    containerTagName: 'svg',
    tagName: 'altGlyph',
  },
  {
    name: 'x-height',
    read: getSVGAttribute('x-height'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {
    name: 'x1',
    read: getSVGAttribute('x1'),
    containerTagName: 'svg',
    tagName: 'line',
  },
  {
    name: 'x2',
    read: getSVGAttribute('x2'),
    containerTagName: 'svg',
    tagName: 'line',
  },
  {
    name: 'xChannelSelector',
    read: getSVGAttribute('xChannelSelector'),
    containerTagName: 'svg',
    tagName: 'feDisplacementMap',
  },
  {
    name: 'xHeight',
    read: getSVGAttribute('x-height'),
    containerTagName: 'svg',
    tagName: 'font-face',
  },
  {name: 'XLink:Actuate', read: getAttribute('XLink:Actuate')},
  {name: 'xlink:actuate', read: getAttribute('xlink:actuate')},
  {name: 'xlink:arcrole', read: getAttribute('xlink:arcrole')},
  {name: 'xlink:href', read: getAttribute('xlink:href')},
  {name: 'xlink:role', read: getAttribute('xlink:role')},
  {name: 'xlink:show', read: getAttribute('xlink:show')},
  {name: 'xlink:title', read: getAttribute('xlink:title')},
  {name: 'xlink:type', read: getAttribute('xlink:type')},
  {name: 'xlinkActuate', read: getAttribute('xlink:actuate')},
  {name: 'XlinkActuate', read: getAttribute('Xlink:actuate')},
  {name: 'xlinkArcrole', read: getAttribute('xlink:arcrole')},
  {name: 'xlinkHref', read: getAttribute('xlink:href')},
  {name: 'xlinkRole', read: getAttribute('xlink:role')},
  {name: 'xlinkShow', read: getAttribute('xlink:show')},
  {name: 'xlinkTitle', read: getAttribute('xlink:title')},
  {name: 'xlinkType', read: getAttribute('xlink:type')},
  {name: 'xml:base', read: getAttribute('xml:base')},
  {name: 'xml:lang', read: getAttribute('xml:lang')},
  {name: 'xml:space', read: getAttribute('xml:space')},
  {name: 'xmlBase', read: getAttribute('xml:base')},
  {name: 'xmlLang', read: getAttribute('xml:lang')},
  {name: 'xmlns', read: getProperty('namespaceURI'), tagName: 'svg'},
  {name: 'xmlns:xlink', read: getAttribute('xmlns:xlink')},
  {name: 'xmlnsXlink', read: getAttribute('xmlns:xlink')},
  {name: 'xmlSpace', read: getAttribute('xml:space')},
  {
    name: 'y',
    read: getSVGAttribute('y'),
    containerTagName: 'svg',
    tagName: 'altGlyph',
  },
  {
    name: 'y1',
    read: getSVGAttribute('y1'),
    containerTagName: 'svg',
    tagName: 'line',
  },
  {
    name: 'y2',
    read: getSVGAttribute('y2'),
    containerTagName: 'svg',
    tagName: 'line',
  },
  {
    name: 'yChannelSelector',
    read: getSVGAttribute('yChannelSelector'),
    containerTagName: 'svg',
    tagName: 'feDisplacementMap',
  },
  {
    name: 'z',
    read: getSVGAttribute('z'),
    containerTagName: 'svg',
    tagName: 'fePointLight',
  },
  {name: 'zoomAndPan', read: getSVGAttribute('zoomAndPan'), tagName: 'svg'},
];

const ALPHABETICAL = 'alphabetical';
const REV_ALPHABETICAL = 'reverse_alphabetical';
const GROUPED_BY_ROW_PATTERN = 'grouped_by_row_pattern';

const attributesSorted = {
  [ALPHABETICAL]: attributes
    .slice(0)
    .sort((attr1, attr2) => (attr1.name < attr2.name ? -1 : 1)),
  [REV_ALPHABETICAL]: attributes
    .slice(0)
    .sort((attr1, attr2) => (attr1.name < attr2.name ? 1 : -1)),
};

let _didWarn = false;
function warn(str) {
  _didWarn = true;
}

function getRenderedAttributeValue(renderer, attribute, type) {
  _didWarn = false;
  const originalConsoleError = console.error;
  console.error = warn;

  const containerTagName = attribute.containerTagName || 'div';
  const tagName = attribute.tagName || 'div';

  let container;
  if (containerTagName === 'svg') {
    container = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  } else {
    container = document.createElement(containerTagName);
  }

  let testValue;
  let defaultValue;
  try {
    const read = attribute.read || getProperty(attribute.name);

    testValue = type.testValue;
    if (attribute.overrideStringValue !== undefined) {
      switch (type.name) {
        case 'string':
          testValue = attribute.overrideStringValue;
          break;
        case 'array with string':
          testValue = [attribute.overrideStringValue];
          break;
        default:
          break;
      }
    }

    let baseProps = {};
    if (attribute.type) {
      baseProps.type = attribute.type;
    }
    renderer.render(React.createElement(tagName, baseProps), container);
    defaultValue = read(container.firstChild);

    const props = {
      ...baseProps,
      [attribute.name]: testValue,
    };
    renderer.render(React.createElement(tagName, props), container);

    const result = read(container.firstChild);

    return {
      testValue,
      defaultValue,
      result,
      didWarn: _didWarn,
      didError: false,
    };
  } catch (error) {
    return {
      testValue,
      defaultValue,
      result: null,
      didWarn: _didWarn,
      didError: true,
    };
  } finally {
    console.error = originalConsoleError;
  }
}

function getRenderedAttributeValues(attribute, type) {
  const react15Value = getRenderedAttributeValue(ReactDOM15, attribute, type);
  const react16Value = getRenderedAttributeValue(ReactDOM16, attribute, type);

  let hasSameBehavior;
  if (react15Value.didError && react16Value.didError) {
    hasSameBehavior = true;
  } else if (!react15Value.didError && !react16Value.didError) {
    hasSameBehavior =
      react15Value.didWarn === react16Value.didWarn &&
      Object.is(react15Value.result, react16Value.result);
  } else {
    hasSameBehavior = false;
  }

  return {
    react15: react15Value,
    react16: react16Value,
    hasSameBehavior,
  };
}

const table = new Map();
const groupByRowPattern = new Map();

// Disable error overlay while test each attribute
uninjectErrorOverlay();
for (let attribute of attributes) {
  const row = new Map();
  let rowHash = '';
  for (let type of types) {
    const result = getRenderedAttributeValues(attribute, type);
    row.set(type.name, result);
    rowHash +=
      getResultDisplayString(result.react15.result) +
      getResultDisplayString(result.react16.result);
  }
  table.set(attribute, row);
  if (!groupByRowPattern.get(rowHash)) {
    groupByRowPattern.set(rowHash, []);
  }
  const updatedAttributesArray = groupByRowPattern.get(rowHash);
  updatedAttributesArray.push(attribute);
  groupByRowPattern.set(rowHash, updatedAttributesArray);
}

let attributesSortedByRowPattern = [];
groupByRowPattern.forEach(arrayOfAttributes => {
  attributesSortedByRowPattern = attributesSortedByRowPattern.concat(
    arrayOfAttributes
  );
});

attributesSorted[GROUPED_BY_ROW_PATTERN] = attributesSortedByRowPattern;

// Renable error overlay
injectErrorOverlay();

function getResultDisplayString(result) {
  let displayResult;
  switch (typeof result) {
    case 'undefined':
      displayResult = '<undefined>';
      break;
    case 'object':
      if (result === null) {
        displayResult = '<null>';
        break;
      }
      displayResult = '<object>';
      break;
    case 'function':
      displayResult = '<function>';
      break;
    case 'symbol':
      displayResult = '<symbol>';
      break;
    case 'number':
      displayResult = `<number: ${result}>`;
      break;
    case 'string':
      if (result === '') {
        displayResult = '<empty string>';
        break;
      }
      displayResult = '"' + result + '"';
      break;
    case 'boolean':
      displayResult = `<boolean: ${result}>`;
      break;
    default:
      throw new Error('Switch statement should be exhaustive.');
  }
  return displayResult;
}

const successColor = 'white';
const warnColor = 'yellow';
const errorColor = 'red';

function RendererResult({version, result, defaultValue, didWarn, didError}) {
  let backgroundColor;
  if (didError) {
    backgroundColor = errorColor;
  } else if (didWarn) {
    backgroundColor = warnColor;
  } else if (result !== defaultValue) {
    backgroundColor = 'cyan';
  } else {
    backgroundColor = successColor;
  }

  let style = {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor,
  };

  return <div css={style}>{getResultDisplayString(result)}</div>;
}

function ResultPopover(props) {
  return (
    <pre
      css={{
        padding: '1em',
        width: '25em',
      }}>
      {JSON.stringify(
        {
          react15: props.react15,
          react16: props.react16,
          hasSameBehavior: props.hasSameBehavior,
        },
        null,
        2
      )}
    </pre>
  );
}

class Result extends React.Component {
  state = {showInfo: false};
  onMouseEnter = () => {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.setState({showInfo: true});
    }, 250);
  };
  onMouseLeave = () => {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.setState({showInfo: false});
  };

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.interval);
    }
  }

  render() {
    const {react15, react16, hasSameBehavior} = this.props;
    const style = {
      position: 'absolute',
      width: '100%',
      height: '100%',
    };

    let highlight = null;
    let popover = null;
    if (this.state.showInfo) {
      highlight = (
        <div
          css={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            border: '2px solid blue',
          }}
        />
      );

      popover = (
        <div
          css={{
            backgroundColor: 'white',
            border: '1px solid black',
            position: 'absolute',
            top: '100%',
            zIndex: 999,
          }}>
          <ResultPopover {...this.props} />
        </div>
      );
    }

    if (!hasSameBehavior) {
      style.border = '4px solid purple';
    }
    return (
      <div
        css={style}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>
        <div css={{position: 'absolute', width: '50%', height: '100%'}}>
          <RendererResult version={15} {...react15} />
        </div>
        <div
          css={{
            position: 'absolute',
            width: '50%',
            left: '50%',
            height: '100%',
          }}>
          <RendererResult version={16} {...react16} />
        </div>
        {highlight}
        {popover}
      </div>
    );
  }
}

function ColumnHeader({children}) {
  return (
    <div
      css={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
      }}>
      {children}
    </div>
  );
}

function RowHeader({children}) {
  return (
    <div
      css={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
      }}>
      {children}
    </div>
  );
}

function CellContent(props) {
  const {columnIndex, rowIndex, attributesInSortedOrder} = props;
  const attribute = attributesInSortedOrder[rowIndex - 1];
  const type = types[columnIndex - 1];

  if (columnIndex === 0) {
    if (rowIndex === 0) {
      return null;
    }
    return <RowHeader>{attribute.name}</RowHeader>;
  }

  if (rowIndex === 0) {
    return <ColumnHeader>{type.name}</ColumnHeader>;
  }

  const row = table.get(attribute);
  const result = row.get(type.name);

  return <Result {...result} />;
}

class App extends Component {
  constructor() {
    super();
    this.state = {sortOrder: REV_ALPHABETICAL};
    this._renderCell = this.renderCell.bind(this);
    this._onUpdateSort = this.onUpdateSort.bind(this);
  }

  renderCell(props) {
    return (
      <div style={props.style}>
        <CellContent
          attributesInSortedOrder={attributesSorted[this.state.sortOrder]}
          {...props}
        />
      </div>
    );
  }

  onUpdateSort(e) {
    this.setState({sortOrder: e.target.value});
    this.grid.forceUpdateGrids();
  }

  render() {
    return (
      <div>
        <div>
          <select onChange={this._onUpdateSort}>
            <option
              selected={this.state.sortOrder === ALPHABETICAL}
              value={ALPHABETICAL}>
              alphabetical
            </option>
            <option
              selected={this.state.sortOrder === REV_ALPHABETICAL}
              value={REV_ALPHABETICAL}>
              reverse alphabetical
            </option>
            <option
              selected={this.state.sortOrder === GROUPED_BY_ROW_PATTERN}
              value={GROUPED_BY_ROW_PATTERN}>
              grouped by row pattern :)
            </option>
          </select>
        </div>
        <AutoSizer disableHeight={true}>
          {({width}) => (
            <MultiGrid
              ref={input => {
                this.grid = input;
              }}
              cellRenderer={this._renderCell}
              columnWidth={200}
              columnCount={1 + types.length}
              fixedColumnCount={1}
              enableFixedColumnScroll={true}
              enableFixedRowScroll={true}
              height={1200}
              rowHeight={40}
              rowCount={attributes.length + 1}
              fixedRowCount={1}
              width={width}
            />
          )}
        </AutoSizer>
      </div>
    );
  }
}

export default App;
