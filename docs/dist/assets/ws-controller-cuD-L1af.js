import { R as React__default, r as reactExports, j as jsxRuntimeExports, a as React, b as ReactDOM, c as reactDomExports, d as createRoot, g as getDefaultExportFromCjs, e as commonjsGlobal, u as useMDXComponents } from "./index-D9YKVBLB.js";
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p2 in s)
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t2[p2] = s[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __spreadArray(to, from2, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l2 = from2.length, ar; i < l2; i++) {
      if (ar || !(i in from2)) {
        if (!ar)
          ar = Array.prototype.slice.call(from2, 0, i);
        ar[i] = from2[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from2));
}
function memoize$1(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ memoize$1(
  function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
var MS$1 = "-ms-";
var MOZ$1 = "-moz-";
var WEBKIT$1 = "-webkit-";
var COMMENT$1 = "comm";
var RULESET$1 = "rule";
var DECLARATION$1 = "decl";
var IMPORT$1 = "@import";
var KEYFRAMES$1 = "@keyframes";
var LAYER$1 = "@layer";
var abs$1 = Math.abs;
var from$1 = String.fromCharCode;
var assign$1 = Object.assign;
function hash$1(value, length2) {
  return charat$1(value, 0) ^ 45 ? (((length2 << 2 ^ charat$1(value, 0)) << 2 ^ charat$1(value, 1)) << 2 ^ charat$1(value, 2)) << 2 ^ charat$1(value, 3) : 0;
}
function trim$1(value) {
  return value.trim();
}
function match$1(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace$1(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof$1(value, search, position2) {
  return value.indexOf(search, position2);
}
function charat$1(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr$1(value, begin, end) {
  return value.slice(begin, end);
}
function strlen$1(value) {
  return value.length;
}
function sizeof$1(value) {
  return value.length;
}
function append$1(value, array) {
  return array.push(value), value;
}
function combine$1(array, callback) {
  return array.map(callback).join("");
}
function filter(array, pattern) {
  return array.filter(function(value) {
    return !match$1(value, pattern);
  });
}
var line$1 = 1;
var column$1 = 1;
var length$1 = 0;
var position$1 = 0;
var character$1 = 0;
var characters$1 = "";
function node$1(value, root, parent, type, props, children, length2, siblings) {
  return { value, root, parent, type, props, children, line: line$1, column: column$1, length: length2, return: "", siblings };
}
function copy$1(root, props) {
  return assign$1(node$1("", null, null, "", null, null, 0, root.siblings), root, { length: -root.length }, props);
}
function lift(root) {
  while (root.root)
    root = copy$1(root.root, { children: [root] });
  append$1(root, root.siblings);
}
function char$1() {
  return character$1;
}
function prev$1() {
  character$1 = position$1 > 0 ? charat$1(characters$1, --position$1) : 0;
  if (column$1--, character$1 === 10)
    column$1 = 1, line$1--;
  return character$1;
}
function next$1() {
  character$1 = position$1 < length$1 ? charat$1(characters$1, position$1++) : 0;
  if (column$1++, character$1 === 10)
    column$1 = 1, line$1++;
  return character$1;
}
function peek$1() {
  return charat$1(characters$1, position$1);
}
function caret$1() {
  return position$1;
}
function slice$1(begin, end) {
  return substr$1(characters$1, begin, end);
}
function token$1(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc$1(value) {
  return line$1 = column$1 = 1, length$1 = strlen$1(characters$1 = value), position$1 = 0, [];
}
function dealloc$1(value) {
  return characters$1 = "", value;
}
function delimit$1(type) {
  return trim$1(slice$1(position$1 - 1, delimiter$1(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace$1(type) {
  while (character$1 = peek$1())
    if (character$1 < 33)
      next$1();
    else
      break;
  return token$1(type) > 2 || token$1(character$1) > 3 ? "" : " ";
}
function escaping$1(index, count) {
  while (--count && next$1())
    if (character$1 < 48 || character$1 > 102 || character$1 > 57 && character$1 < 65 || character$1 > 70 && character$1 < 97)
      break;
  return slice$1(index, caret$1() + (count < 6 && peek$1() == 32 && next$1() == 32));
}
function delimiter$1(type) {
  while (next$1())
    switch (character$1) {
      case type:
        return position$1;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter$1(character$1);
        break;
      case 40:
        if (type === 41)
          delimiter$1(type);
        break;
      case 92:
        next$1();
        break;
    }
  return position$1;
}
function commenter$1(type, index) {
  while (next$1())
    if (type + character$1 === 47 + 10)
      break;
    else if (type + character$1 === 42 + 42 && peek$1() === 47)
      break;
  return "/*" + slice$1(index, position$1 - 1) + "*" + from$1(type === 47 ? type : next$1());
}
function identifier$1(index) {
  while (!token$1(peek$1()))
    next$1();
  return slice$1(index, position$1);
}
function compile$1(value) {
  return dealloc$1(parse$1("", null, null, null, [""], value = alloc$1(value), 0, [0], value));
}
function parse$1(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next$1()) {
      case 40:
        if (previous != 108 && charat$1(characters2, length2 - 1) == 58) {
          if (indexof$1(characters2 += replace$1(delimit$1(character2), "&", "&\f"), "&\f", abs$1(index ? points[index - 1] : 0)) != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit$1(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace$1(previous);
        break;
      case 92:
        characters2 += escaping$1(caret$1() - 1, 7);
        continue;
      case 47:
        switch (peek$1()) {
          case 42:
          case 47:
            append$1(comment$1(commenter$1(next$1(), caret$1()), root, parent, declarations), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index++] = strlen$1(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (ampersand == -1)
              characters2 = replace$1(characters2, /\f/g, "");
            if (property > 0 && strlen$1(characters2) - length2)
              append$1(property > 32 ? declaration$1(characters2 + ";", rule, parent, length2 - 1, declarations) : declaration$1(replace$1(characters2, " ", "") + ";", rule, parent, length2 - 2, declarations), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append$1(reference = ruleset$1(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2, rulesets), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse$1(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat$1(characters2, 3) === 110 ? 100 : atrule) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    parse$1(value, reference, reference, rule && append$1(ruleset$1(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2, children), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse$1(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen$1(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev$1() == 125)
            continue;
        }
        switch (characters2 += from$1(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index++] = (strlen$1(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek$1() === 45)
              characters2 += delimit$1(next$1());
            atrule = peek$1(), offset = length2 = strlen$1(type = characters2 += identifier$1(caret$1())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen$1(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset$1(value, root, parent, index, offset, rules, points, type, props, children, length2, siblings) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof$1(rule);
  for (var i = 0, j2 = 0, k2 = 0; i < index; ++i)
    for (var x2 = 0, y2 = substr$1(value, post + 1, post = abs$1(j2 = points[i])), z2 = value; x2 < size; ++x2)
      if (z2 = trim$1(j2 > 0 ? rule[x2] + " " + y2 : replace$1(y2, /&\f/g, rule[x2])))
        props[k2++] = z2;
  return node$1(value, root, parent, offset === 0 ? RULESET$1 : type, props, children, length2, siblings);
}
function comment$1(value, root, parent, siblings) {
  return node$1(value, root, parent, COMMENT$1, from$1(char$1()), substr$1(value, 2, -2), 0, siblings);
}
function declaration$1(value, root, parent, length2, siblings) {
  return node$1(value, root, parent, DECLARATION$1, substr$1(value, 0, length2), substr$1(value, length2 + 1, -1), length2, siblings);
}
function prefix$1(value, length2, children) {
  switch (hash$1(value, length2)) {
    case 5103:
      return WEBKIT$1 + "print-" + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT$1 + value + value;
    case 4789:
      return MOZ$1 + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT$1 + value + MOZ$1 + value + MS$1 + value + value;
    case 5936:
      switch (charat$1(value, length2 + 11)) {
        case 114:
          return WEBKIT$1 + value + MS$1 + replace$1(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        case 108:
          return WEBKIT$1 + value + MS$1 + replace$1(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        case 45:
          return WEBKIT$1 + value + MS$1 + replace$1(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
    case 6828:
    case 4268:
    case 2903:
      return WEBKIT$1 + value + MS$1 + value + value;
    case 6165:
      return WEBKIT$1 + value + MS$1 + "flex-" + value + value;
    case 5187:
      return WEBKIT$1 + value + replace$1(value, /(\w+).+(:[^]+)/, WEBKIT$1 + "box-$1$2" + MS$1 + "flex-$1$2") + value;
    case 5443:
      return WEBKIT$1 + value + MS$1 + "flex-item-" + replace$1(value, /flex-|-self/g, "") + (!match$1(value, /flex-|baseline/) ? MS$1 + "grid-row-" + replace$1(value, /flex-|-self/g, "") : "") + value;
    case 4675:
      return WEBKIT$1 + value + MS$1 + "flex-line-pack" + replace$1(value, /align-content|flex-|-self/g, "") + value;
    case 5548:
      return WEBKIT$1 + value + MS$1 + replace$1(value, "shrink", "negative") + value;
    case 5292:
      return WEBKIT$1 + value + MS$1 + replace$1(value, "basis", "preferred-size") + value;
    case 6060:
      return WEBKIT$1 + "box-" + replace$1(value, "-grow", "") + WEBKIT$1 + value + MS$1 + replace$1(value, "grow", "positive") + value;
    case 4554:
      return WEBKIT$1 + replace$1(value, /([^-])(transform)/g, "$1" + WEBKIT$1 + "$2") + value;
    case 6187:
      return replace$1(replace$1(replace$1(value, /(zoom-|grab)/, WEBKIT$1 + "$1"), /(image-set)/, WEBKIT$1 + "$1"), value, "") + value;
    case 5495:
    case 3959:
      return replace$1(value, /(image-set\([^]*)/, WEBKIT$1 + "$1$`$1");
    case 4968:
      return replace$1(replace$1(value, /(.+:)(flex-)?(.*)/, WEBKIT$1 + "box-pack:$3" + MS$1 + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT$1 + value + value;
    case 4200:
      if (!match$1(value, /flex-|baseline/))
        return MS$1 + "grid-column-align" + substr$1(value, length2) + value;
      break;
    case 2592:
    case 3360:
      return MS$1 + replace$1(value, "template-", "") + value;
    case 4384:
    case 3616:
      if (children && children.some(function(element, index) {
        return length2 = index, match$1(element.props, /grid-\w+-end/);
      })) {
        return ~indexof$1(value + (children = children[length2].value), "span", 0) ? value : MS$1 + replace$1(value, "-start", "") + value + MS$1 + "grid-row-span:" + (~indexof$1(children, "span", 0) ? match$1(children, /\d+/) : +match$1(children, /\d+/) - +match$1(value, /\d+/)) + ";";
      }
      return MS$1 + replace$1(value, "-start", "") + value;
    case 4896:
    case 4128:
      return children && children.some(function(element) {
        return match$1(element.props, /grid-\w+-start/);
      }) ? value : MS$1 + replace$1(replace$1(value, "-end", "-span"), "span ", "") + value;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace$1(value, /(.+)-inline(.+)/, WEBKIT$1 + "$1$2") + value;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen$1(value) - 1 - length2 > 6)
        switch (charat$1(value, length2 + 1)) {
          case 109:
            if (charat$1(value, length2 + 4) !== 45)
              break;
          case 102:
            return replace$1(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT$1 + "$2-$3$1" + MOZ$1 + (charat$1(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          case 115:
            return ~indexof$1(value, "stretch", 0) ? prefix$1(replace$1(value, "stretch", "fill-available"), length2, children) + value : value;
        }
      break;
    case 5152:
    case 5920:
      return replace$1(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_2, a2, b3, c2, d2, e2, f2) {
        return MS$1 + a2 + ":" + b3 + f2 + (c2 ? MS$1 + a2 + "-span:" + (d2 ? e2 : +e2 - +b3) + f2 : "") + value;
      });
    case 4949:
      if (charat$1(value, length2 + 6) === 121)
        return replace$1(value, ":", ":" + WEBKIT$1) + value;
      break;
    case 6444:
      switch (charat$1(value, charat$1(value, 14) === 45 ? 18 : 11)) {
        case 120:
          return replace$1(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + WEBKIT$1 + (charat$1(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT$1 + "$2$3$1" + MS$1 + "$2box$3") + value;
        case 100:
          return replace$1(value, ":", ":" + MS$1) + value;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return replace$1(value, "scroll-", "scroll-snap-") + value;
  }
  return value;
}
function serialize$1(children, callback) {
  var output = "";
  for (var i = 0; i < children.length; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify$1(element, index, children, callback) {
  switch (element.type) {
    case LAYER$1:
      if (element.children.length)
        break;
    case IMPORT$1:
    case DECLARATION$1:
      return element.return = element.return || element.value;
    case COMMENT$1:
      return "";
    case KEYFRAMES$1:
      return element.return = element.value + "{" + serialize$1(element.children, callback) + "}";
    case RULESET$1:
      if (!strlen$1(element.value = element.props.join(",")))
        return "";
  }
  return strlen$1(children = serialize$1(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
function middleware$1(collection) {
  var length2 = sizeof$1(collection);
  return function(element, index, children, callback) {
    var output = "";
    for (var i = 0; i < length2; i++)
      output += collection[i](element, index, children, callback) || "";
    return output;
  };
}
function rulesheet$1(callback) {
  return function(element) {
    if (!element.root) {
      if (element = element.return)
        callback(element);
    }
  };
}
function prefixer$1(element, index, children, callback) {
  if (element.length > -1) {
    if (!element.return)
      switch (element.type) {
        case DECLARATION$1:
          element.return = prefix$1(element.value, element.length, children);
          return;
        case KEYFRAMES$1:
          return serialize$1([copy$1(element, { value: replace$1(element.value, "@", "@" + WEBKIT$1) })], callback);
        case RULESET$1:
          if (element.length)
            return combine$1(children = element.props, function(value) {
              switch (match$1(value, callback = /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  lift(copy$1(element, { props: [replace$1(value, /:(read-\w+)/, ":" + MOZ$1 + "$1")] }));
                  lift(copy$1(element, { props: [value] }));
                  assign$1(element, { props: filter(children, callback) });
                  break;
                case "::placeholder":
                  lift(copy$1(element, { props: [replace$1(value, /:(plac\w+)/, ":" + WEBKIT$1 + "input-$1")] }));
                  lift(copy$1(element, { props: [replace$1(value, /:(plac\w+)/, ":" + MOZ$1 + "$1")] }));
                  lift(copy$1(element, { props: [replace$1(value, /:(plac\w+)/, MS$1 + "input-$1")] }));
                  lift(copy$1(element, { props: [value] }));
                  assign$1(element, { props: filter(children, callback) });
                  break;
              }
              return "";
            });
      }
  }
}
var unitlessKeys$1 = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var define_process_env_default = {};
var f$2 = "undefined" != typeof process && void 0 !== define_process_env_default && (define_process_env_default.REACT_APP_SC_ATTR || define_process_env_default.SC_ATTR) || "data-styled", m$3 = "active", y$1 = "data-styled-version", v$3 = "6.1.6", g$2 = "/*!sc*/\n", S = "undefined" != typeof window && "HTMLElement" in window, w$2 = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== define_process_env_default && void 0 !== define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY && "" !== define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY && define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== define_process_env_default && void 0 !== define_process_env_default.SC_DISABLE_SPEEDY && "" !== define_process_env_default.SC_DISABLE_SPEEDY ? "false" !== define_process_env_default.SC_DISABLE_SPEEDY && define_process_env_default.SC_DISABLE_SPEEDY : false), _$1 = Object.freeze([]), C = Object.freeze({});
function I(e2, t2, n2) {
  return void 0 === n2 && (n2 = C), e2.theme !== n2.theme && e2.theme || t2 || n2.theme;
}
var A$1 = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), O = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, D = /(^-|-$)/g;
function R(e2) {
  return e2.replace(O, "-").replace(D, "");
}
var T$1 = /(a)(d)/gi, k$2 = 52, j = function(e2) {
  return String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
};
function x$1(e2) {
  var t2, n2 = "";
  for (t2 = Math.abs(e2); t2 > k$2; t2 = t2 / k$2 | 0)
    n2 = j(t2 % k$2) + n2;
  return (j(t2 % k$2) + n2).replace(T$1, "$1-$2");
}
var V, F = 5381, M = function(e2, t2) {
  for (var n2 = t2.length; n2; )
    e2 = 33 * e2 ^ t2.charCodeAt(--n2);
  return e2;
}, $ = function(e2) {
  return M(F, e2);
};
function z$1(e2) {
  return x$1($(e2) >>> 0);
}
function B(e2) {
  return e2.displayName || e2.name || "Component";
}
function L(e2) {
  return "string" == typeof e2 && true;
}
var G = "function" == typeof Symbol && Symbol.for, Y = G ? Symbol.for("react.memo") : 60115, W = G ? Symbol.for("react.forward_ref") : 60112, q$2 = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true }, H = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true }, U = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, J = ((V = {})[W] = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, V[Y] = U, V);
function X(e2) {
  return ("type" in (t2 = e2) && t2.type.$$typeof) === Y ? U : "$$typeof" in e2 ? J[e2.$$typeof] : q$2;
  var t2;
}
var Z = Object.defineProperty, K = Object.getOwnPropertyNames, Q = Object.getOwnPropertySymbols, ee = Object.getOwnPropertyDescriptor, te = Object.getPrototypeOf, ne = Object.prototype;
function oe(e2, t2, n2) {
  if ("string" != typeof t2) {
    if (ne) {
      var o2 = te(t2);
      o2 && o2 !== ne && oe(e2, o2, n2);
    }
    var r2 = K(t2);
    Q && (r2 = r2.concat(Q(t2)));
    for (var s2 = X(e2), i2 = X(t2), a2 = 0; a2 < r2.length; ++a2) {
      var c2 = r2[a2];
      if (!(c2 in H || n2 && n2[c2] || i2 && c2 in i2 || s2 && c2 in s2)) {
        var l2 = ee(t2, c2);
        try {
          Z(e2, c2, l2);
        } catch (e3) {
        }
      }
    }
  }
  return e2;
}
function re(e2) {
  return "function" == typeof e2;
}
function se(e2) {
  return "object" == typeof e2 && "styledComponentId" in e2;
}
function ie(e2, t2) {
  return e2 && t2 ? "".concat(e2, " ").concat(t2) : e2 || t2 || "";
}
function ae(e2, t2) {
  if (0 === e2.length)
    return "";
  for (var n2 = e2[0], o2 = 1; o2 < e2.length; o2++)
    n2 += t2 ? t2 + e2[o2] : e2[o2];
  return n2;
}
function ce(e2) {
  return null !== e2 && "object" == typeof e2 && e2.constructor.name === Object.name && !("props" in e2 && e2.$$typeof);
}
function le(e2, t2, n2) {
  if (void 0 === n2 && (n2 = false), !n2 && !ce(e2) && !Array.isArray(e2))
    return t2;
  if (Array.isArray(t2))
    for (var o2 = 0; o2 < t2.length; o2++)
      e2[o2] = le(e2[o2], t2[o2]);
  else if (ce(t2))
    for (var o2 in t2)
      e2[o2] = le(e2[o2], t2[o2]);
  return e2;
}
function ue(e2, t2) {
  Object.defineProperty(e2, "toString", { value: t2 });
}
function he(t2) {
  for (var n2 = [], o2 = 1; o2 < arguments.length; o2++)
    n2[o2 - 1] = arguments[o2];
  return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t2, " for more information.").concat(n2.length > 0 ? " Args: ".concat(n2.join(", ")) : ""));
}
var fe = function() {
  function e2(e3) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e3;
  }
  return e2.prototype.indexOfGroup = function(e3) {
    for (var t2 = 0, n2 = 0; n2 < e3; n2++)
      t2 += this.groupSizes[n2];
    return t2;
  }, e2.prototype.insertRules = function(e3, t2) {
    if (e3 >= this.groupSizes.length) {
      for (var n2 = this.groupSizes, o2 = n2.length, r2 = o2; e3 >= r2; )
        if ((r2 <<= 1) < 0)
          throw he(16, "".concat(e3));
      this.groupSizes = new Uint32Array(r2), this.groupSizes.set(n2), this.length = r2;
      for (var s2 = o2; s2 < r2; s2++)
        this.groupSizes[s2] = 0;
    }
    for (var i2 = this.indexOfGroup(e3 + 1), a2 = (s2 = 0, t2.length); s2 < a2; s2++)
      this.tag.insertRule(i2, t2[s2]) && (this.groupSizes[e3]++, i2++);
  }, e2.prototype.clearGroup = function(e3) {
    if (e3 < this.length) {
      var t2 = this.groupSizes[e3], n2 = this.indexOfGroup(e3), o2 = n2 + t2;
      this.groupSizes[e3] = 0;
      for (var r2 = n2; r2 < o2; r2++)
        this.tag.deleteRule(n2);
    }
  }, e2.prototype.getGroup = function(e3) {
    var t2 = "";
    if (e3 >= this.length || 0 === this.groupSizes[e3])
      return t2;
    for (var n2 = this.groupSizes[e3], o2 = this.indexOfGroup(e3), r2 = o2 + n2, s2 = o2; s2 < r2; s2++)
      t2 += "".concat(this.tag.getRule(s2)).concat(g$2);
    return t2;
  }, e2;
}(), me = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), ve = 1, ge = function(e2) {
  if (me.has(e2))
    return me.get(e2);
  for (; ye.has(ve); )
    ve++;
  var t2 = ve++;
  return me.set(e2, t2), ye.set(t2, e2), t2;
}, Se = function(e2, t2) {
  ve = t2 + 1, me.set(e2, t2), ye.set(t2, e2);
}, we = "style[".concat(f$2, "][").concat(y$1, '="').concat(v$3, '"]'), be = new RegExp("^".concat(f$2, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Ee = function(e2, t2, n2) {
  for (var o2, r2 = n2.split(","), s2 = 0, i2 = r2.length; s2 < i2; s2++)
    (o2 = r2[s2]) && e2.registerName(t2, o2);
}, Ne = function(e2, t2) {
  for (var n2, o2 = (null !== (n2 = t2.textContent) && void 0 !== n2 ? n2 : "").split(g$2), r2 = [], s2 = 0, i2 = o2.length; s2 < i2; s2++) {
    var a2 = o2[s2].trim();
    if (a2) {
      var c2 = a2.match(be);
      if (c2) {
        var l2 = 0 | parseInt(c2[1], 10), u2 = c2[2];
        0 !== l2 && (Se(u2, l2), Ee(e2, u2, c2[3]), e2.getTag().insertRules(l2, r2)), r2.length = 0;
      } else
        r2.push(a2);
    }
  }
};
function Pe() {
  return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
}
var _e = function(e2) {
  var t2 = document.head, n2 = e2 || t2, o2 = document.createElement("style"), r2 = function(e3) {
    var t3 = Array.from(e3.querySelectorAll("style[".concat(f$2, "]")));
    return t3[t3.length - 1];
  }(n2), s2 = void 0 !== r2 ? r2.nextSibling : null;
  o2.setAttribute(f$2, m$3), o2.setAttribute(y$1, v$3);
  var i2 = Pe();
  return i2 && o2.setAttribute("nonce", i2), n2.insertBefore(o2, s2), o2;
}, Ce = function() {
  function e2(e3) {
    this.element = _e(e3), this.element.appendChild(document.createTextNode("")), this.sheet = function(e4) {
      if (e4.sheet)
        return e4.sheet;
      for (var t2 = document.styleSheets, n2 = 0, o2 = t2.length; n2 < o2; n2++) {
        var r2 = t2[n2];
        if (r2.ownerNode === e4)
          return r2;
      }
      throw he(17);
    }(this.element), this.length = 0;
  }
  return e2.prototype.insertRule = function(e3, t2) {
    try {
      return this.sheet.insertRule(t2, e3), this.length++, true;
    } catch (e4) {
      return false;
    }
  }, e2.prototype.deleteRule = function(e3) {
    this.sheet.deleteRule(e3), this.length--;
  }, e2.prototype.getRule = function(e3) {
    var t2 = this.sheet.cssRules[e3];
    return t2 && t2.cssText ? t2.cssText : "";
  }, e2;
}(), Ie = function() {
  function e2(e3) {
    this.element = _e(e3), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e2.prototype.insertRule = function(e3, t2) {
    if (e3 <= this.length && e3 >= 0) {
      var n2 = document.createTextNode(t2);
      return this.element.insertBefore(n2, this.nodes[e3] || null), this.length++, true;
    }
    return false;
  }, e2.prototype.deleteRule = function(e3) {
    this.element.removeChild(this.nodes[e3]), this.length--;
  }, e2.prototype.getRule = function(e3) {
    return e3 < this.length ? this.nodes[e3].textContent : "";
  }, e2;
}(), Ae = function() {
  function e2(e3) {
    this.rules = [], this.length = 0;
  }
  return e2.prototype.insertRule = function(e3, t2) {
    return e3 <= this.length && (this.rules.splice(e3, 0, t2), this.length++, true);
  }, e2.prototype.deleteRule = function(e3) {
    this.rules.splice(e3, 1), this.length--;
  }, e2.prototype.getRule = function(e3) {
    return e3 < this.length ? this.rules[e3] : "";
  }, e2;
}(), Oe = S, De = { isServer: !S, useCSSOMInjection: !w$2 }, Re = function() {
  function e2(e3, n2, o2) {
    void 0 === e3 && (e3 = C), void 0 === n2 && (n2 = {});
    var r2 = this;
    this.options = __assign(__assign({}, De), e3), this.gs = n2, this.names = new Map(o2), this.server = !!e3.isServer, !this.server && S && Oe && (Oe = false, function(e4) {
      for (var t2 = document.querySelectorAll(we), n3 = 0, o3 = t2.length; n3 < o3; n3++) {
        var r3 = t2[n3];
        r3 && r3.getAttribute(f$2) !== m$3 && (Ne(e4, r3), r3.parentNode && r3.parentNode.removeChild(r3));
      }
    }(this)), ue(this, function() {
      return function(e4) {
        for (var t2 = e4.getTag(), n3 = t2.length, o3 = "", r3 = function(n4) {
          var r4 = function(e5) {
            return ye.get(e5);
          }(n4);
          if (void 0 === r4)
            return "continue";
          var s3 = e4.names.get(r4), i2 = t2.getGroup(n4);
          if (void 0 === s3 || 0 === i2.length)
            return "continue";
          var a2 = "".concat(f$2, ".g").concat(n4, '[id="').concat(r4, '"]'), c2 = "";
          void 0 !== s3 && s3.forEach(function(e5) {
            e5.length > 0 && (c2 += "".concat(e5, ","));
          }), o3 += "".concat(i2).concat(a2, '{content:"').concat(c2, '"}').concat(g$2);
        }, s2 = 0; s2 < n3; s2++)
          r3(s2);
        return o3;
      }(r2);
    });
  }
  return e2.registerId = function(e3) {
    return ge(e3);
  }, e2.prototype.reconstructWithOptions = function(n2, o2) {
    return void 0 === o2 && (o2 = true), new e2(__assign(__assign({}, this.options), n2), this.gs, o2 && this.names || void 0);
  }, e2.prototype.allocateGSInstance = function(e3) {
    return this.gs[e3] = (this.gs[e3] || 0) + 1;
  }, e2.prototype.getTag = function() {
    return this.tag || (this.tag = (e3 = function(e4) {
      var t2 = e4.useCSSOMInjection, n2 = e4.target;
      return e4.isServer ? new Ae(n2) : t2 ? new Ce(n2) : new Ie(n2);
    }(this.options), new fe(e3)));
    var e3;
  }, e2.prototype.hasNameForId = function(e3, t2) {
    return this.names.has(e3) && this.names.get(e3).has(t2);
  }, e2.prototype.registerName = function(e3, t2) {
    if (ge(e3), this.names.has(e3))
      this.names.get(e3).add(t2);
    else {
      var n2 = /* @__PURE__ */ new Set();
      n2.add(t2), this.names.set(e3, n2);
    }
  }, e2.prototype.insertRules = function(e3, t2, n2) {
    this.registerName(e3, t2), this.getTag().insertRules(ge(e3), n2);
  }, e2.prototype.clearNames = function(e3) {
    this.names.has(e3) && this.names.get(e3).clear();
  }, e2.prototype.clearRules = function(e3) {
    this.getTag().clearGroup(ge(e3)), this.clearNames(e3);
  }, e2.prototype.clearTag = function() {
    this.tag = void 0;
  }, e2;
}(), Te = /&/g, ke = /^\s*\/\/.*$/gm;
function je(e2, t2) {
  return e2.map(function(e3) {
    return "rule" === e3.type && (e3.value = "".concat(t2, " ").concat(e3.value), e3.value = e3.value.replaceAll(",", ",".concat(t2, " ")), e3.props = e3.props.map(function(e4) {
      return "".concat(t2, " ").concat(e4);
    })), Array.isArray(e3.children) && "@keyframes" !== e3.type && (e3.children = je(e3.children, t2)), e3;
  });
}
function xe(e2) {
  var t2, n2, o2, r2 = void 0 === e2 ? C : e2, s2 = r2.options, i2 = void 0 === s2 ? C : s2, a2 = r2.plugins, c2 = void 0 === a2 ? _$1 : a2, l2 = function(e3, o3, r3) {
    return r3.startsWith(n2) && r3.endsWith(n2) && r3.replaceAll(n2, "").length > 0 ? ".".concat(t2) : e3;
  }, u2 = c2.slice();
  u2.push(function(e3) {
    e3.type === RULESET$1 && e3.value.includes("&") && (e3.props[0] = e3.props[0].replace(Te, n2).replace(o2, l2));
  }), i2.prefix && u2.push(prefixer$1), u2.push(stringify$1);
  var p2 = function(e3, r3, s3, a3) {
    void 0 === r3 && (r3 = ""), void 0 === s3 && (s3 = ""), void 0 === a3 && (a3 = "&"), t2 = a3, n2 = r3, o2 = new RegExp("\\".concat(n2, "\\b"), "g");
    var c3 = e3.replace(ke, ""), l3 = compile$1(s3 || r3 ? "".concat(s3, " ").concat(r3, " { ").concat(c3, " }") : c3);
    i2.namespace && (l3 = je(l3, i2.namespace));
    var p3 = [];
    return serialize$1(l3, middleware$1(u2.concat(rulesheet$1(function(e4) {
      return p3.push(e4);
    })))), p3;
  };
  return p2.hash = c2.length ? c2.reduce(function(e3, t3) {
    return t3.name || he(15), M(e3, t3.name);
  }, F).toString() : "", p2;
}
var Ve = new Re(), Fe = xe(), Me = React__default.createContext({ shouldForwardProp: void 0, styleSheet: Ve, stylis: Fe });
Me.Consumer;
React__default.createContext(void 0);
function Be() {
  return reactExports.useContext(Me);
}
var Ge = function() {
  function e2(e3, t2) {
    var n2 = this;
    this.inject = function(e4, t3) {
      void 0 === t3 && (t3 = Fe);
      var o2 = n2.name + t3.hash;
      e4.hasNameForId(n2.id, o2) || e4.insertRules(n2.id, o2, t3(n2.rules, o2, "@keyframes"));
    }, this.name = e3, this.id = "sc-keyframes-".concat(e3), this.rules = t2, ue(this, function() {
      throw he(12, String(n2.name));
    });
  }
  return e2.prototype.getName = function(e3) {
    return void 0 === e3 && (e3 = Fe), this.name + e3.hash;
  }, e2;
}(), Ye = function(e2) {
  return e2 >= "A" && e2 <= "Z";
};
function We(e2) {
  for (var t2 = "", n2 = 0; n2 < e2.length; n2++) {
    var o2 = e2[n2];
    if (1 === n2 && "-" === o2 && "-" === e2[0])
      return e2;
    Ye(o2) ? t2 += "-" + o2.toLowerCase() : t2 += o2;
  }
  return t2.startsWith("ms-") ? "-" + t2 : t2;
}
var qe = function(e2) {
  return null == e2 || false === e2 || "" === e2;
}, He = function(t2) {
  var n2, o2, r2 = [];
  for (var s2 in t2) {
    var i2 = t2[s2];
    t2.hasOwnProperty(s2) && !qe(i2) && (Array.isArray(i2) && i2.isCss || re(i2) ? r2.push("".concat(We(s2), ":"), i2, ";") : ce(i2) ? r2.push.apply(r2, __spreadArray(__spreadArray(["".concat(s2, " {")], He(i2), false), ["}"], false)) : r2.push("".concat(We(s2), ": ").concat((n2 = s2, null == (o2 = i2) || "boolean" == typeof o2 || "" === o2 ? "" : "number" != typeof o2 || 0 === o2 || n2 in unitlessKeys$1 || n2.startsWith("--") ? String(o2).trim() : "".concat(o2, "px")), ";")));
  }
  return r2;
};
function Ue(e2, t2, n2, o2) {
  if (qe(e2))
    return [];
  if (se(e2))
    return [".".concat(e2.styledComponentId)];
  if (re(e2)) {
    if (!re(s2 = e2) || s2.prototype && s2.prototype.isReactComponent || !t2)
      return [e2];
    var r2 = e2(t2);
    return Ue(r2, t2, n2, o2);
  }
  var s2;
  return e2 instanceof Ge ? n2 ? (e2.inject(n2, o2), [e2.getName(o2)]) : [e2] : ce(e2) ? He(e2) : Array.isArray(e2) ? Array.prototype.concat.apply(_$1, e2.map(function(e3) {
    return Ue(e3, t2, n2, o2);
  })) : [e2.toString()];
}
function Je(e2) {
  for (var t2 = 0; t2 < e2.length; t2 += 1) {
    var n2 = e2[t2];
    if (re(n2) && !se(n2))
      return false;
  }
  return true;
}
var Xe = $(v$3), Ze = function() {
  function e2(e3, t2, n2) {
    this.rules = e3, this.staticRulesId = "", this.isStatic = (void 0 === n2 || n2.isStatic) && Je(e3), this.componentId = t2, this.baseHash = M(Xe, t2), this.baseStyle = n2, Re.registerId(t2);
  }
  return e2.prototype.generateAndInjectStyles = function(e3, t2, n2) {
    var o2 = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e3, t2, n2) : "";
    if (this.isStatic && !n2.hash)
      if (this.staticRulesId && t2.hasNameForId(this.componentId, this.staticRulesId))
        o2 = ie(o2, this.staticRulesId);
      else {
        var r2 = ae(Ue(this.rules, e3, t2, n2)), s2 = x$1(M(this.baseHash, r2) >>> 0);
        if (!t2.hasNameForId(this.componentId, s2)) {
          var i2 = n2(r2, ".".concat(s2), void 0, this.componentId);
          t2.insertRules(this.componentId, s2, i2);
        }
        o2 = ie(o2, s2), this.staticRulesId = s2;
      }
    else {
      for (var a2 = M(this.baseHash, n2.hash), c2 = "", l2 = 0; l2 < this.rules.length; l2++) {
        var u2 = this.rules[l2];
        if ("string" == typeof u2)
          c2 += u2;
        else if (u2) {
          var p2 = ae(Ue(u2, e3, t2, n2));
          a2 = M(a2, p2 + l2), c2 += p2;
        }
      }
      if (c2) {
        var d2 = x$1(a2 >>> 0);
        t2.hasNameForId(this.componentId, d2) || t2.insertRules(this.componentId, d2, n2(c2, ".".concat(d2), void 0, this.componentId)), o2 = ie(o2, d2);
      }
    }
    return o2;
  }, e2;
}(), Ke = React__default.createContext(void 0);
Ke.Consumer;
var nt = {};
function rt(e2, r2, s2) {
  var i2 = se(e2), a2 = e2, c2 = !L(e2), p2 = r2.attrs, d2 = void 0 === p2 ? _$1 : p2, h2 = r2.componentId, f2 = void 0 === h2 ? function(e3, t2) {
    var n2 = "string" != typeof e3 ? "sc" : R(e3);
    nt[n2] = (nt[n2] || 0) + 1;
    var o2 = "".concat(n2, "-").concat(z$1(v$3 + n2 + nt[n2]));
    return t2 ? "".concat(t2, "-").concat(o2) : o2;
  }(r2.displayName, r2.parentComponentId) : h2, m2 = r2.displayName, y2 = void 0 === m2 ? function(e3) {
    return L(e3) ? "styled.".concat(e3) : "Styled(".concat(B(e3), ")");
  }(e2) : m2, g2 = r2.displayName && r2.componentId ? "".concat(R(r2.displayName), "-").concat(r2.componentId) : r2.componentId || f2, S2 = i2 && a2.attrs ? a2.attrs.concat(d2).filter(Boolean) : d2, w22 = r2.shouldForwardProp;
  if (i2 && a2.shouldForwardProp) {
    var b22 = a2.shouldForwardProp;
    if (r2.shouldForwardProp) {
      var E2 = r2.shouldForwardProp;
      w22 = function(e3, t2) {
        return b22(e3, t2) && E2(e3, t2);
      };
    } else
      w22 = b22;
  }
  var N2 = new Ze(s2, g2, i2 ? a2.componentStyle : void 0);
  function O2(e3, r3) {
    return function(e4, r4, s3) {
      var i3 = e4.attrs, a3 = e4.componentStyle, c3 = e4.defaultProps, p3 = e4.foldedComponentIds, d3 = e4.styledComponentId, h3 = e4.target, f3 = React__default.useContext(Ke), m3 = Be(), y3 = e4.shouldForwardProp || m3.shouldForwardProp;
      var v22 = I(r4, f3, c3) || C, g3 = function(e5, n2, o2) {
        for (var r5, s4 = __assign(__assign({}, n2), { className: void 0, theme: o2 }), i4 = 0; i4 < e5.length; i4 += 1) {
          var a4 = re(r5 = e5[i4]) ? r5(s4) : r5;
          for (var c4 in a4)
            s4[c4] = "className" === c4 ? ie(s4[c4], a4[c4]) : "style" === c4 ? __assign(__assign({}, s4[c4]), a4[c4]) : a4[c4];
        }
        return n2.className && (s4.className = ie(s4.className, n2.className)), s4;
      }(i3, r4, v22), S3 = g3.as || h3, w3 = {};
      for (var b3 in g3)
        void 0 === g3[b3] || "$" === b3[0] || "as" === b3 || "theme" === b3 && g3.theme === v22 || ("forwardedAs" === b3 ? w3.as = g3.forwardedAs : y3 && !y3(b3, S3) || (w3[b3] = g3[b3], y3 || true));
      var E3 = function(e5, t2) {
        var n2 = Be(), o2 = e5.generateAndInjectStyles(t2, n2.styleSheet, n2.stylis);
        return o2;
      }(a3, g3);
      var N3 = ie(p3, d3);
      return E3 && (N3 += " " + E3), g3.className && (N3 += " " + g3.className), w3[L(S3) && !A$1.has(S3) ? "class" : "className"] = N3, w3.ref = s3, reactExports.createElement(S3, w3);
    }(D2, e3, r3);
  }
  O2.displayName = y2;
  var D2 = React__default.forwardRef(O2);
  return D2.attrs = S2, D2.componentStyle = N2, D2.displayName = y2, D2.shouldForwardProp = w22, D2.foldedComponentIds = i2 ? ie(a2.foldedComponentIds, a2.styledComponentId) : "", D2.styledComponentId = g2, D2.target = i2 ? a2.target : e2, Object.defineProperty(D2, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(e3) {
    this._foldedDefaultProps = i2 ? function(e4) {
      for (var t2 = [], n2 = 1; n2 < arguments.length; n2++)
        t2[n2 - 1] = arguments[n2];
      for (var o2 = 0, r3 = t2; o2 < r3.length; o2++)
        le(e4, r3[o2], true);
      return e4;
    }({}, a2.defaultProps, e3) : e3;
  } }), ue(D2, function() {
    return ".".concat(D2.styledComponentId);
  }), c2 && oe(D2, e2, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true }), D2;
}
function st(e2, t2) {
  for (var n2 = [e2[0]], o2 = 0, r2 = t2.length; o2 < r2; o2 += 1)
    n2.push(t2[o2], e2[o2 + 1]);
  return n2;
}
var it = function(e2) {
  return Object.assign(e2, { isCss: true });
};
function at(t2) {
  for (var n2 = [], o2 = 1; o2 < arguments.length; o2++)
    n2[o2 - 1] = arguments[o2];
  if (re(t2) || ce(t2))
    return it(Ue(st(_$1, __spreadArray([t2], n2, true))));
  var r2 = t2;
  return 0 === n2.length && 1 === r2.length && "string" == typeof r2[0] ? Ue(r2) : it(Ue(st(r2, n2)));
}
function ct(n2, o2, r2) {
  if (void 0 === r2 && (r2 = C), !o2)
    throw he(1, o2);
  var s2 = function(t2) {
    for (var s3 = [], i2 = 1; i2 < arguments.length; i2++)
      s3[i2 - 1] = arguments[i2];
    return n2(o2, r2, at.apply(void 0, __spreadArray([t2], s3, false)));
  };
  return s2.attrs = function(e2) {
    return ct(n2, o2, __assign(__assign({}, r2), { attrs: Array.prototype.concat(r2.attrs, e2).filter(Boolean) }));
  }, s2.withConfig = function(e2) {
    return ct(n2, o2, __assign(__assign({}, r2), e2));
  }, s2;
}
var lt = function(e2) {
  return ct(rt, e2);
}, ut = lt;
A$1.forEach(function(e2) {
  ut[e2] = lt(e2);
});
const useUpdate = () => {
  const [, setState] = reactExports.useState({});
  return reactExports.useCallback(() => setState({}), []);
};
const depsAreSame = (oldDeps, deps) => {
  if (oldDeps === deps)
    return true;
  for (let i = 0; i < oldDeps.length; i++) {
    if (!Object.is(oldDeps[i], deps[i]))
      return false;
  }
  return true;
};
const useCreation = (fn, deps) => {
  const { current } = reactExports.useRef({
    deps,
    obj: void 0,
    initialized: false
  });
  if (current.initialized === false || !depsAreSame(current.deps, deps)) {
    current.deps = deps;
    current.obj = fn();
    current.initialized = true;
  }
  return current.obj;
};
const observer = (initialVal, cb) => {
  if (Object.prototype.toString.call(initialVal) !== "[object Object]") {
    return initialVal;
  }
  const proxy = new Proxy(initialVal ?? {}, {
    get(target, key, receiver) {
      const res = Reflect.get(target, key, receiver);
      return typeof res === "object" ? observer(res, cb) : Reflect.get(target, key);
    },
    set(target, key, val) {
      const ret = Reflect.set(target, key, val);
      cb();
      return ret;
    }
  });
  return proxy;
};
const useReactive = (initialState) => {
  const ref = reactExports.useRef(initialState);
  const update = useUpdate();
  const state = useCreation(() => {
    return observer(ref.current, () => {
      update();
    });
  }, []);
  return state;
};
function useOnMount(onMount) {
  return reactExports.useEffect(() => {
    if (onMount) {
      onMount();
    }
  }, []);
}
function useOnUnmount(onUnmount) {
  return reactExports.useEffect(() => {
    return () => onUnmount && onUnmount();
  }, []);
}
const p$2 = (r2) => {
  if (typeof r2 == "object" && r2 !== null) {
    if (typeof Object.getPrototypeOf == "function") {
      const t2 = Object.getPrototypeOf(r2);
      return t2 === Object.prototype || t2 === null;
    }
    return Object.prototype.toString.call(r2) === "[object Object]";
  }
  return false;
}, h$2 = (...r2) => r2.reduce((t2, e2) => {
  if (Array.isArray(e2))
    throw new TypeError("Arguments provided to ts-deepmerge must be objects, not arrays.");
  return Object.keys(e2).forEach((s) => {
    ["__proto__", "constructor", "prototype"].includes(s) || (Array.isArray(t2[s]) && Array.isArray(e2[s]) ? t2[s] = h$2.options.mergeArrays ? h$2.options.uniqueArrayItems ? Array.from(new Set(t2[s].concat(e2[s]))) : [...t2[s], ...e2[s]] : e2[s] : p$2(t2[s]) && p$2(e2[s]) ? t2[s] = h$2(t2[s], e2[s]) : t2[s] = e2[s] === void 0 ? h$2.options.allowUndefinedOverrides ? e2[s] : t2[s] : e2[s]);
  }), t2;
}, {}), m$2 = {
  allowUndefinedOverrides: true,
  mergeArrays: true,
  uniqueArrayItems: true
};
h$2.options = m$2;
h$2.withOptions = (r2, ...t2) => {
  h$2.options = Object.assign(Object.assign({}, m$2), r2);
  const e2 = h$2(...t2);
  return h$2.options = m$2, e2;
};
let v$2 = class v extends Promise {
  constructor(t2, e2) {
    let s, n2;
    super((i, o) => {
      t2(i, o), s = i, n2 = o;
    }), this.resolve = s, this.reject = n2, this.cancelPromise = e2;
  }
  cancel() {
    var t2, e2;
    (t2 = this.reject) == null || t2.call(this, "promise has been canceled"), (e2 = this.cancelPromise) == null || e2.call(this);
  }
};
var c$2 = /* @__PURE__ */ ((r2) => (r2.closed = "closed", r2.connecting = "connecting", r2.connected = "connected", r2.closing = "closing", r2))(c$2 || {});
class T {
  constructor(t2) {
    this.events = {}, t2.forEach((e2) => {
      Reflect.set(this.events, e2, []);
    });
  }
  /**
   * Add a callback function
   * @param {string} eventName - The event name.
   * @param {function} fun - The callback function.
   */
  addEventListener(t2, e2) {
    if (!Reflect.has(this.events, t2))
      throw new Error(`event ${t2} doesn't exist!`);
    this.events[t2].includes(e2) || this.events[t2].push(e2);
  }
  /**
  * remove a callback function
  * @param {string} eventName - The event name.
  * @param {function} fun - The callback function.
  */
  removeEventListener(t2, e2) {
    if (!Reflect.has(this.events, t2))
      throw new Error(`event ${t2} doesn't exist!`);
    const s = this.events[t2].indexOf(e2);
    s !== -1 && this.events[t2].splice(s, 1);
  }
  dispatchEvent(t2, e2) {
    if (!Reflect.has(this.events, t2))
      throw new Error(`event ${t2} doesn't exist!`);
    this.events[t2].forEach((s) => s(e2));
  }
}
let b$2 = class b {
  constructor({ wsContoller: t2, options: e2 }) {
    this.sendTimer = null, this.reSendTimer = null, this.connectingXPromise = null, this.startTime = 0, this.options = {
      handleHeartbeatMsg: (s) => true,
      timeout: 5e3,
      intervalTime: 5e3,
      sendMsg: "---- heartbeat ----"
    }, this.wsContoller = t2, this.setOptions(e2);
  }
  setOptions(t2 = {}) {
    this.options = h$2(this.options, t2);
  }
  send() {
    const t2 = `heartbeat send message: ${this.options.sendMsg}`;
    this.wsContoller.events.dispatchEvent("log", t2), this.startTime = (/* @__PURE__ */ new Date()).getTime(), this.wsContoller.send(this.options.sendMsg), this.sendTimer && clearTimeout(this.sendTimer), this.sendTimer = setTimeout(async () => {
      this.wsContoller.connectStatus == c$2.connected && await this.wsContoller._wsClose(), this.connectingXPromise = this.wsContoller._reExecute({ cb: () => this.wsContoller._wsConnect({}), retryCount: -1, intervalTime: 2e3 });
    }, this.options.timeout);
  }
  received(t2) {
    var i, o;
    if (!this.sendTimer || !((o = (i = this.options).handleHeartbeatMsg) == null ? void 0 : o.call(i, t2)))
      return;
    let s = (/* @__PURE__ */ new Date()).getTime();
    const n2 = `heartbeat started at ${this.startTime}, completed in ${s}', duration is ${(s - this.startTime) / 1e3} seconds`;
    this.wsContoller.events.dispatchEvent("log", n2), this.startTime = 0, this.sendTimer && (clearTimeout(this.sendTimer), this.sendTimer = null), this.reSendTimer || (this.reSendTimer = setTimeout(() => {
      this.send(), this.reSendTimer && clearTimeout(this.reSendTimer), this.reSendTimer = null;
    }, this.options.intervalTime));
  }
  clear() {
    this.sendTimer && clearTimeout(this.sendTimer), this.sendTimer = null, this.reSendTimer && clearTimeout(this.reSendTimer), this.reSendTimer = null, this.connectingXPromise && this.connectingXPromise.cancel(), this.wsContoller.events.dispatchEvent("log", "heartbeat was cleared out by user");
  }
};
let a = null;
let w$1 = class w {
  constructor(t2) {
    this.options = {
      address: "",
      connectTimeout: 5e3,
      reconnectIntervalTime: 2e3,
      retry: 2,
      onOpened: function() {
      }
    }, this._connectStatus = c$2.closed, this.connectingCb = {
      resovle: null,
      reject: null
    }, this.closingCb = {
      resovle: null,
      reject: null
    }, this.pause = false, this.connectingTimer = null, this.closingTimer = null, this.heartbeat = new b$2({ wsContoller: this }), this.events = new T(["message", "log", "status"]), this.setOptions(t2);
  }
  get connectStatus() {
    return this._connectStatus;
  }
  set connectStatus(t2) {
    this._connectStatus = t2, this.events.dispatchEvent("status", this._connectStatus);
  }
  setOptions({ wsOptions: t2, heartbeatOptions: e2 }) {
    this.options = h$2(this.options, t2 ?? {}), this.heartbeat.setOptions(e2);
  }
  _setSocketInstance(t2) {
    const e2 = this;
    a = new WebSocket(t2), a.onopen = function(s) {
      var n2, i, o, u2;
      if (e2.connectStatus == c$2.connecting) {
        e2.connectStatus = c$2.connected;
        const l2 = "Websocket start success.";
        (i = (n2 = e2.connectingCb) == null ? void 0 : n2.resovle) == null || i.call(n2, { success: true, message: l2 }), e2.events.dispatchEvent("log", l2), e2._clearConnect(), (u2 = (o = e2.options).onOpened) == null || u2.call(o, e2), setTimeout(() => {
          e2.heartbeat.send();
        }, 1e3);
      }
    }, a.onclose = function(s) {
      var n2, i;
      if (e2.connectStatus == c$2.closing) {
        e2.connectStatus = c$2.closed;
        const o = "Websocket closed success";
        (i = (n2 = e2.closingCb) == null ? void 0 : n2.resovle) == null || i.call(n2, { success: true, message: o }), e2.events.dispatchEvent("log", o), e2._clearClose();
      }
    }, a.onerror = function(s) {
      var n2, i, o, u2;
      if (e2.connectStatus == c$2.connecting) {
        e2.connectStatus = c$2.closed;
        const l2 = "Websocket start error";
        (i = (n2 = e2.connectingCb) == null ? void 0 : n2.reject) == null || i.call(n2, { success: false, message: l2 }), e2.events.dispatchEvent("log", l2), e2._clearConnect();
      } else
        e2.connectStatus == c$2.closing && (e2.connectStatus = c$2.connecting, (u2 = (o = e2.closingCb) == null ? void 0 : o.reject) == null || u2.call(o, { success: false, message: `关闭失败: onerror:${s}` }), e2._clearClose());
    }, a.onmessage = function(s) {
      e2.heartbeat.received(s), !e2.pause && e2.events.dispatchEvent("message", s);
    };
  }
  async _wsConnect(t2) {
    return new Promise((e2, s) => {
      try {
        let n2 = h$2(this.options, t2 ?? {});
        if (this.connectStatus == c$2.connected) {
          const i = "Websocket already connected";
          return this.events.dispatchEvent("log", i), e2({ success: true, message: i });
        }
        if (this.connectStatus !== c$2.closed) {
          const i = `Websocket connect failed: connectStatus current is ${this.connectStatus} not closed`;
          throw new Error(i);
        }
        this.connectingCb.resovle = e2, this.connectingCb.reject = s, this.connectStatus = c$2.connecting, this._setSocketInstance(n2.address), this.connectingTimer = setTimeout(() => {
          throw new Error("Websocket connect timeout");
        }, n2.connectTimeout);
      } catch (n2) {
        this.connectStatus = c$2.closed, a == null || a.close();
        let i = `${n2}`;
        n2 instanceof Error && (i = n2.message);
        const o = `connect failed: ${i}`;
        this.events.dispatchEvent("log", o), this._clearConnect(), s({ success: false, message: o });
      }
    });
  }
  _reExecute({ cb: t2, retryCount: e2, intervalTime: s }) {
    const n2 = () => {
      e2 = 0;
    };
    return new v$2(async (i, o) => {
      const u2 = async () => {
        try {
          const l2 = await t2();
          i(l2);
        } catch (l2) {
          let d2 = `${l2}`;
          l2 instanceof Error && (d2 = l2.message);
          const g2 = `Because of reason [${d2}], start re-execute on ${e2}`;
          if (console.warn(g2), this.events.dispatchEvent("log", g2), e2 !== 0)
            e2 > 0 && e2--, setTimeout(() => {
              u2();
            }, s);
          else if (e2 == 0) {
            const f2 = `Because of reason [${d2}], re-execute end`;
            return console.error(f2), this.events.dispatchEvent("log", f2), o(l2);
          }
        }
      };
      u2();
    }, n2);
  }
  _clearConnect() {
    this.connectingCb.resovle = null, this.connectingCb.reject = null, this.connectingTimer && (clearTimeout(this.connectingTimer), this.connectingTimer = null);
  }
  async _wsClose() {
    return new Promise((t2, e2) => {
      if (this.connectStatus == c$2.closed) {
        const s = "Websocket already closed";
        return this.events.dispatchEvent("log", s), t2({ success: true, message: s });
      }
      if (this.connectStatus !== c$2.connected) {
        const s = `Websocket close filed: connectStatus current is ${this.connectStatus} not in connected.`;
        return this.events.dispatchEvent("log", s), e2({ success: false, message: s });
      }
      this.closingCb.resovle = t2, this.closingCb.reject = e2, this.connectStatus = c$2.closing, a == null || a.close(), this.closingTimer = setTimeout(() => {
        this.connectStatus = c$2.closed;
        const s = "Websocket close were timeout so it forced shutdown";
        this.events.dispatchEvent("log", s), t2({ success: true, message: s }), this._clearClose();
      }, 2e3);
    });
  }
  _clearClose() {
    this.closingCb.resovle = null, this.closingCb.reject = null, this.closingTimer && (clearTimeout(this.closingTimer), this.closingTimer = null);
  }
  /**
   * Start connect websocket
   */
  connect(t2) {
    return this.connectingXPromise = this._reExecute({ cb: () => this._wsConnect(t2), retryCount: 3, intervalTime: 0 }), this.connectingXPromise;
  }
  /**
   * Close websocket
   */
  async close() {
    var t2;
    (t2 = this.connectingXPromise) == null || t2.cancel(), this.heartbeat.clear(), await this._wsClose();
  }
  /**
   * Send msg
   * @param {string} msg - The event name.
   */
  send(t2) {
    if (this.connectStatus !== c$2.connected) {
      const e2 = "Websocket send error: connectStatus not in connected status.";
      throw this.events.dispatchEvent("log", e2), new Error(e2);
    }
    a == null || a.send(t2);
  }
  /**
   * Add a callback function
   * @param {string} eventName - The event name.
   * @param {function} fun - The callback function.
   */
  addEventListener(t2, e2) {
    this.events.addEventListener(t2, e2);
  }
  /**
   * remove a callback function
   * @param {string} eventName - The event name.
   * @param {function} fun - The callback function.
   */
  removeEventListener(t2, e2) {
    this.events.removeEventListener(t2, e2);
  }
};
const Container$7 = ut.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  & .card__header.header {
    width: inherit;
    height: 40px;
    border-bottom: 1px dashed #ccc;
    display: flex;
    .header__left {
      width: fit-content;
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
  & .card__body {
    width: inherit;
    flex: 1;
    margin: 10px 0;
  }
`;
const CardItem = ({ title: title2, children, header }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Container$7, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "card__header header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "header__left", children: title2 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "header__right", children: header })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "card__body", children })
  ] }) });
};
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function r$1(e2) {
  var t2, f2, n2 = "";
  if ("string" == typeof e2 || "number" == typeof e2)
    n2 += e2;
  else if ("object" == typeof e2)
    if (Array.isArray(e2)) {
      var o = e2.length;
      for (t2 = 0; t2 < o; t2++)
        e2[t2] && (f2 = r$1(e2[t2])) && (n2 && (n2 += " "), n2 += f2);
    } else
      for (f2 in e2)
        e2[f2] && (n2 && (n2 += " "), n2 += f2);
  return n2;
}
function clsx() {
  for (var e2, t2, f2 = 0, n2 = "", o = arguments.length; f2 < o; f2++)
    (e2 = arguments[f2]) && (t2 = r$1(e2)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
function isPlainObject(item) {
  return item !== null && typeof item === "object" && item.constructor === Object;
}
function deepClone(source) {
  if (!isPlainObject(source)) {
    return source;
  }
  const output = {};
  Object.keys(source).forEach((key) => {
    output[key] = deepClone(source[key]);
  });
  return output;
}
function deepmerge(target, source, options = {
  clone: true
}) {
  const output = options.clone ? _extends({}, target) : target;
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach((key) => {
      if (key === "__proto__") {
        return;
      }
      if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
        output[key] = deepmerge(target[key], source[key], options);
      } else if (options.clone) {
        output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}
function formatMuiErrorMessage(code2) {
  let url = "https://mui.com/production-error/?code=" + code2;
  for (let i = 1; i < arguments.length; i += 1) {
    url += "&args[]=" + encodeURIComponent(arguments[i]);
  }
  return "Minified MUI error #" + code2 + "; visit " + url + " for the full message.";
}
var reactIs_production_min$1 = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1 = Symbol.for("react.element"), c$1 = Symbol.for("react.portal"), d$1 = Symbol.for("react.fragment"), e$1 = Symbol.for("react.strict_mode"), f$1 = Symbol.for("react.profiler"), g$1 = Symbol.for("react.provider"), h$1 = Symbol.for("react.context"), k$1 = Symbol.for("react.server_context"), l$1 = Symbol.for("react.forward_ref"), m$1 = Symbol.for("react.suspense"), n$1 = Symbol.for("react.suspense_list"), p$1 = Symbol.for("react.memo"), q$1 = Symbol.for("react.lazy"), t$1 = Symbol.for("react.offscreen"), u;
u = Symbol.for("react.module.reference");
function v$1(a2) {
  if ("object" === typeof a2 && null !== a2) {
    var r2 = a2.$$typeof;
    switch (r2) {
      case b$1:
        switch (a2 = a2.type, a2) {
          case d$1:
          case f$1:
          case e$1:
          case m$1:
          case n$1:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k$1:
              case h$1:
              case l$1:
              case q$1:
              case p$1:
              case g$1:
                return a2;
              default:
                return r2;
            }
        }
      case c$1:
        return r2;
    }
  }
}
reactIs_production_min$1.ContextConsumer = h$1;
reactIs_production_min$1.ContextProvider = g$1;
reactIs_production_min$1.Element = b$1;
reactIs_production_min$1.ForwardRef = l$1;
reactIs_production_min$1.Fragment = d$1;
reactIs_production_min$1.Lazy = q$1;
reactIs_production_min$1.Memo = p$1;
reactIs_production_min$1.Portal = c$1;
reactIs_production_min$1.Profiler = f$1;
reactIs_production_min$1.StrictMode = e$1;
reactIs_production_min$1.Suspense = m$1;
reactIs_production_min$1.SuspenseList = n$1;
reactIs_production_min$1.isAsyncMode = function() {
  return false;
};
reactIs_production_min$1.isConcurrentMode = function() {
  return false;
};
reactIs_production_min$1.isContextConsumer = function(a2) {
  return v$1(a2) === h$1;
};
reactIs_production_min$1.isContextProvider = function(a2) {
  return v$1(a2) === g$1;
};
reactIs_production_min$1.isElement = function(a2) {
  return "object" === typeof a2 && null !== a2 && a2.$$typeof === b$1;
};
reactIs_production_min$1.isForwardRef = function(a2) {
  return v$1(a2) === l$1;
};
reactIs_production_min$1.isFragment = function(a2) {
  return v$1(a2) === d$1;
};
reactIs_production_min$1.isLazy = function(a2) {
  return v$1(a2) === q$1;
};
reactIs_production_min$1.isMemo = function(a2) {
  return v$1(a2) === p$1;
};
reactIs_production_min$1.isPortal = function(a2) {
  return v$1(a2) === c$1;
};
reactIs_production_min$1.isProfiler = function(a2) {
  return v$1(a2) === f$1;
};
reactIs_production_min$1.isStrictMode = function(a2) {
  return v$1(a2) === e$1;
};
reactIs_production_min$1.isSuspense = function(a2) {
  return v$1(a2) === m$1;
};
reactIs_production_min$1.isSuspenseList = function(a2) {
  return v$1(a2) === n$1;
};
reactIs_production_min$1.isValidElementType = function(a2) {
  return "string" === typeof a2 || "function" === typeof a2 || a2 === d$1 || a2 === f$1 || a2 === e$1 || a2 === m$1 || a2 === n$1 || a2 === t$1 || "object" === typeof a2 && null !== a2 && (a2.$$typeof === q$1 || a2.$$typeof === p$1 || a2.$$typeof === g$1 || a2.$$typeof === h$1 || a2.$$typeof === l$1 || a2.$$typeof === u || void 0 !== a2.getModuleId) ? true : false;
};
reactIs_production_min$1.typeOf = v$1;
function capitalize(string) {
  if (typeof string !== "string") {
    throw new Error(formatMuiErrorMessage(7));
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function createChainedFunction(...funcs) {
  return funcs.reduce((acc, func) => {
    if (func == null) {
      return acc;
    }
    return function chainedFunction(...args) {
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, () => {
  });
}
function debounce(func, wait = 166) {
  let timeout;
  function debounced(...args) {
    const later = () => {
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
  debounced.clear = () => {
    clearTimeout(timeout);
  };
  return debounced;
}
function isMuiElement(element, muiNames) {
  var _muiName, _element$type;
  return /* @__PURE__ */ reactExports.isValidElement(element) && muiNames.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (_muiName = element.type.muiName) != null ? _muiName : (_element$type = element.type) == null || (_element$type = _element$type._payload) == null || (_element$type = _element$type.value) == null ? void 0 : _element$type.muiName
  ) !== -1;
}
function ownerDocument(node2) {
  return node2 && node2.ownerDocument || document;
}
function ownerWindow(node2) {
  const doc = ownerDocument(node2);
  return doc.defaultView || window;
}
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}
const useEnhancedEffect = typeof window !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
let globalId = 0;
function useGlobalId(idOverride) {
  const [defaultId, setDefaultId] = reactExports.useState(idOverride);
  const id = idOverride || defaultId;
  reactExports.useEffect(() => {
    if (defaultId == null) {
      globalId += 1;
      setDefaultId(`mui-${globalId}`);
    }
  }, [defaultId]);
  return id;
}
const maybeReactUseId = React["useId".toString()];
function useId(idOverride) {
  if (maybeReactUseId !== void 0) {
    const reactId = maybeReactUseId();
    return idOverride != null ? idOverride : reactId;
  }
  return useGlobalId(idOverride);
}
function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = "value"
}) {
  const {
    current: isControlled
  } = reactExports.useRef(controlled !== void 0);
  const [valueState, setValue] = reactExports.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  const setValueIfUncontrolled = reactExports.useCallback((newValue) => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}
function useEventCallback(fn) {
  const ref = reactExports.useRef(fn);
  useEnhancedEffect(() => {
    ref.current = fn;
  });
  return reactExports.useRef((...args) => (
    // @ts-expect-error hide `this`
    (0, ref.current)(...args)
  )).current;
}
function useForkRef(...refs) {
  return reactExports.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (instance) => {
      refs.forEach((ref) => {
        setRef(ref, instance);
      });
    };
  }, refs);
}
let hadKeyboardEvent = true;
let hadFocusVisibleRecently = false;
let hadFocusVisibleRecentlyTimeout;
const inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  "datetime-local": true
};
function focusTriggersKeyboardModality(node2) {
  const {
    type,
    tagName
  } = node2;
  if (tagName === "INPUT" && inputTypesWhitelist[type] && !node2.readOnly) {
    return true;
  }
  if (tagName === "TEXTAREA" && !node2.readOnly) {
    return true;
  }
  if (node2.isContentEditable) {
    return true;
  }
  return false;
}
function handleKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }
  hadKeyboardEvent = true;
}
function handlePointerDown() {
  hadKeyboardEvent = false;
}
function handleVisibilityChange() {
  if (this.visibilityState === "hidden") {
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}
function prepare(doc) {
  doc.addEventListener("keydown", handleKeyDown, true);
  doc.addEventListener("mousedown", handlePointerDown, true);
  doc.addEventListener("pointerdown", handlePointerDown, true);
  doc.addEventListener("touchstart", handlePointerDown, true);
  doc.addEventListener("visibilitychange", handleVisibilityChange, true);
}
function isFocusVisible(event) {
  const {
    target
  } = event;
  try {
    return target.matches(":focus-visible");
  } catch (error) {
  }
  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}
function useIsFocusVisible() {
  const ref = reactExports.useCallback((node2) => {
    if (node2 != null) {
      prepare(node2.ownerDocument);
    }
  }, []);
  const isFocusVisibleRef = reactExports.useRef(false);
  function handleBlurVisible() {
    if (isFocusVisibleRef.current) {
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(() => {
        hadFocusVisibleRecently = false;
      }, 100);
      isFocusVisibleRef.current = false;
      return true;
    }
    return false;
  }
  function handleFocusVisible(event) {
    if (isFocusVisible(event)) {
      isFocusVisibleRef.current = true;
      return true;
    }
    return false;
  }
  return {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref
  };
}
function getScrollbarSize(doc) {
  const documentWidth = doc.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
}
function resolveProps(defaultProps2, props) {
  const output = _extends({}, props);
  Object.keys(defaultProps2).forEach((propName) => {
    if (propName.toString().match(/^(components|slots)$/)) {
      output[propName] = _extends({}, defaultProps2[propName], output[propName]);
    } else if (propName.toString().match(/^(componentsProps|slotProps)$/)) {
      const defaultSlotProps = defaultProps2[propName] || {};
      const slotProps = props[propName];
      output[propName] = {};
      if (!slotProps || !Object.keys(slotProps)) {
        output[propName] = defaultSlotProps;
      } else if (!defaultSlotProps || !Object.keys(defaultSlotProps)) {
        output[propName] = slotProps;
      } else {
        output[propName] = _extends({}, slotProps);
        Object.keys(defaultSlotProps).forEach((slotPropName) => {
          output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName]);
        });
      }
    } else if (output[propName] === void 0) {
      output[propName] = defaultProps2[propName];
    }
  });
  return output;
}
function composeClasses(slots, getUtilityClass, classes = void 0) {
  const output = {};
  Object.keys(slots).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (slot) => {
      output[slot] = slots[slot].reduce((acc, key) => {
        if (key) {
          const utilityClass = getUtilityClass(key);
          if (utilityClass !== "") {
            acc.push(utilityClass);
          }
          if (classes && classes[key]) {
            acc.push(classes[key]);
          }
        }
        return acc;
      }, []).join(" ");
    }
  );
  return output;
}
const defaultGenerator = (componentName) => componentName;
const createClassNameGenerator = () => {
  let generate = defaultGenerator;
  return {
    configure(generator) {
      generate = generator;
    },
    generate(componentName) {
      return generate(componentName);
    },
    reset() {
      generate = defaultGenerator;
    }
  };
};
const ClassNameGenerator = createClassNameGenerator();
const globalStateClassesMapping = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function generateUtilityClass(componentName, slot, globalStatePrefix = "Mui") {
  const globalStateClass = globalStateClassesMapping[slot];
  return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator.generate(componentName)}-${slot}`;
}
function generateUtilityClasses(componentName, slots, globalStatePrefix = "Mui") {
  const result = {};
  slots.forEach((slot) => {
    result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
  });
  return result;
}
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
}
function createStyleElement(options) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options.key);
  if (options.nonce !== void 0) {
    tag.setAttribute("nonce", options.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet = /* @__PURE__ */ function() {
  function StyleSheet2(options) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === void 0 ? true : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e2) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet2;
}();
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (ampersand == -1)
              characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i = 0, j2 = 0, k2 = 0; i < index; ++i)
    for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j2 = points[i])), z2 = value; x2 < size; ++x2)
      if (z2 = trim(j2 > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
        props[k2++] = z2;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2);
}
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length2) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}
function serialize(children, callback) {
  var output = "";
  var length2 = sizeof(children);
  for (var i = 0; i < length2; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length)
        break;
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index, children, callback) {
    var output = "";
    for (var i = 0; i < length2; i++)
      output += collection[i](element, index, children, callback) || "";
    return output;
  };
}
function rulesheet(callback) {
  return function(element) {
    if (!element.root) {
      if (element = element.return)
        callback(element);
    }
  };
}
var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index) {
  var previous = 0;
  var character2 = 0;
  while (true) {
    previous = character2;
    character2 = peek();
    if (previous === 38 && character2 === 12) {
      points[index] = 1;
    }
    if (token(character2)) {
      break;
    }
    next();
  }
  return slice(begin, position);
};
var toRules = function toRules2(parsed, points) {
  var index = -1;
  var character2 = 44;
  do {
    switch (token(character2)) {
      case 0:
        if (character2 === 38 && peek() === 12) {
          points[index] = 1;
        }
        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;
      case 2:
        parsed[index] += delimit(character2);
        break;
      case 4:
        if (character2 === 44) {
          parsed[++index] = peek() === 58 ? "&\f" : "";
          points[index] = parsed[index].length;
          break;
        }
      default:
        parsed[index] += from(character2);
    }
  } while (character2 = next());
  return parsed;
};
var getRules = function getRules2(value, points) {
  return dealloc(toRules(alloc(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }
  var value = element.value, parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent)
      return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i = 0, k2 = 0; i < rules.length; i++) {
    for (var j2 = 0; j2 < parentRules.length; j2++, k2++) {
      element.props[k2] = points[i] ? rules[i].replace(/&\f/g, parentRules[j2]) : parentRules[j2] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value = element.value;
    if (
      // charcode for l
      value.charCodeAt(0) === 108 && // charcode for b
      value.charCodeAt(2) === 98
    ) {
      element["return"] = "";
      element.value = "";
    }
  }
};
function prefix(value, length2) {
  switch (hash(value, length2)) {
    case 5103:
      return WEBKIT + "print-" + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          case 109:
            if (charat(value, length2 + 4) !== 45)
              break;
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          case 115:
            return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
        }
      break;
    case 4949:
      if (charat(value, length2 + 1) !== 115)
        break;
    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
        case 107:
          return replace(value, ":", ":" + WEBKIT) + value;
        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
      }
      break;
    case 5936:
      switch (charat(value, length2 + 11)) {
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}
var prefixer = function prefixer2(element, index, children, callback) {
  if (element.length > -1) {
    if (!element["return"])
      switch (element.type) {
        case DECLARATION:
          element["return"] = prefix(element.value, element.length);
          break;
        case KEYFRAMES:
          return serialize([copy(element, {
            value: replace(element.value, "@", "@" + WEBKIT)
          })], callback);
        case RULESET:
          if (element.length)
            return combine(element.props, function(value) {
              switch (match(value, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return serialize([copy(element, {
                    props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")]
                  })], callback);
                case "::placeholder":
                  return serialize([copy(element, {
                    props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
                  }), copy(element, {
                    props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")]
                  }), copy(element, {
                    props: [replace(value, /:(plac\w+)/, MS + "input-$1")]
                  })], callback);
              }
              return "";
            });
      }
  }
};
var defaultStylisPlugins = [prefixer];
var createCache = function createCache2(options) {
  var key = options.key;
  if (key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node2) {
      var dataEmotionAttribute = node2.getAttribute("data-emotion");
      if (dataEmotionAttribute.indexOf(" ") === -1) {
        return;
      }
      document.head.appendChild(node2);
      node2.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  {
    container = options.container || document.head;
    Array.prototype.forEach.call(
      // this means we will ignore elements which don't have a space in them which
      // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
      document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
      function(node2) {
        var attrib = node2.getAttribute("data-emotion").split(" ");
        for (var i = 1; i < attrib.length; i++) {
          inserted[attrib[i]] = true;
        }
        nodesToHydrate.push(node2);
      }
    );
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  {
    var currentSheet;
    var finalizingPlugins = [stringify, rulesheet(function(rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles2) {
      return serialize(compile(styles2), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }
  var cache = {
    key,
    sheet: new StyleSheet({
      key,
      container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};
var reactIs$1 = { exports: {} };
var reactIs_production_min = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b2 = "function" === typeof Symbol && Symbol.for, c = b2 ? Symbol.for("react.element") : 60103, d = b2 ? Symbol.for("react.portal") : 60106, e = b2 ? Symbol.for("react.fragment") : 60107, f = b2 ? Symbol.for("react.strict_mode") : 60108, g = b2 ? Symbol.for("react.profiler") : 60114, h = b2 ? Symbol.for("react.provider") : 60109, k = b2 ? Symbol.for("react.context") : 60110, l = b2 ? Symbol.for("react.async_mode") : 60111, m = b2 ? Symbol.for("react.concurrent_mode") : 60111, n = b2 ? Symbol.for("react.forward_ref") : 60112, p = b2 ? Symbol.for("react.suspense") : 60113, q = b2 ? Symbol.for("react.suspense_list") : 60120, r = b2 ? Symbol.for("react.memo") : 60115, t = b2 ? Symbol.for("react.lazy") : 60116, v2 = b2 ? Symbol.for("react.block") : 60121, w2 = b2 ? Symbol.for("react.fundamental") : 60117, x = b2 ? Symbol.for("react.responder") : 60118, y = b2 ? Symbol.for("react.scope") : 60119;
function z(a2) {
  if ("object" === typeof a2 && null !== a2) {
    var u2 = a2.$$typeof;
    switch (u2) {
      case c:
        switch (a2 = a2.type, a2) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a2;
              default:
                return u2;
            }
        }
      case d:
        return u2;
    }
  }
}
function A(a2) {
  return z(a2) === m;
}
reactIs_production_min.AsyncMode = l;
reactIs_production_min.ConcurrentMode = m;
reactIs_production_min.ContextConsumer = k;
reactIs_production_min.ContextProvider = h;
reactIs_production_min.Element = c;
reactIs_production_min.ForwardRef = n;
reactIs_production_min.Fragment = e;
reactIs_production_min.Lazy = t;
reactIs_production_min.Memo = r;
reactIs_production_min.Portal = d;
reactIs_production_min.Profiler = g;
reactIs_production_min.StrictMode = f;
reactIs_production_min.Suspense = p;
reactIs_production_min.isAsyncMode = function(a2) {
  return A(a2) || z(a2) === l;
};
reactIs_production_min.isConcurrentMode = A;
reactIs_production_min.isContextConsumer = function(a2) {
  return z(a2) === k;
};
reactIs_production_min.isContextProvider = function(a2) {
  return z(a2) === h;
};
reactIs_production_min.isElement = function(a2) {
  return "object" === typeof a2 && null !== a2 && a2.$$typeof === c;
};
reactIs_production_min.isForwardRef = function(a2) {
  return z(a2) === n;
};
reactIs_production_min.isFragment = function(a2) {
  return z(a2) === e;
};
reactIs_production_min.isLazy = function(a2) {
  return z(a2) === t;
};
reactIs_production_min.isMemo = function(a2) {
  return z(a2) === r;
};
reactIs_production_min.isPortal = function(a2) {
  return z(a2) === d;
};
reactIs_production_min.isProfiler = function(a2) {
  return z(a2) === g;
};
reactIs_production_min.isStrictMode = function(a2) {
  return z(a2) === f;
};
reactIs_production_min.isSuspense = function(a2) {
  return z(a2) === p;
};
reactIs_production_min.isValidElementType = function(a2) {
  return "string" === typeof a2 || "function" === typeof a2 || a2 === e || a2 === m || a2 === g || a2 === f || a2 === p || a2 === q || "object" === typeof a2 && null !== a2 && (a2.$$typeof === t || a2.$$typeof === r || a2.$$typeof === h || a2.$$typeof === k || a2.$$typeof === n || a2.$$typeof === w2 || a2.$$typeof === x || a2.$$typeof === y || a2.$$typeof === v2);
};
reactIs_production_min.typeOf = z;
{
  reactIs$1.exports = reactIs_production_min;
}
var reactIsExports = reactIs$1.exports;
var reactIs = reactIsExports;
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames2) {
  var rawClassName = "";
  classNames2.split(" ").forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles2(cache, serialized, isStringTag2) {
  var className = cache.key + "-" + serialized.name;
  if (
    // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag2 === false || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser === false) && cache.registered[className] === void 0
  ) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles2(cache, serialized, isStringTag2) {
  registerStyles(cache, serialized, isStringTag2);
  var className = cache.key + "-" + serialized.name;
  if (cache.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};
function murmur2(str) {
  var h2 = 0;
  var k2, i = 0, len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k2 = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k2 = /* Math.imul(k, m): */
    (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16);
    k2 ^= /* k >>> r: */
    k2 >>> 24;
    h2 = /* Math.imul(k, m): */
    (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h2 ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h2 ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h2 ^= str.charCodeAt(i) & 255;
      h2 = /* Math.imul(h, m): */
      (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  h2 ^= h2 >>> 13;
  h2 = /* Math.imul(h, m): */
  (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
}
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ memoize$1(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match2, p1, p2) {
          cursor = {
            name: p1,
            styles: p2,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  if (interpolation.__emotion_styles !== void 0) {
    return interpolation;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      if (interpolation.anim === 1) {
        cursor = {
          name: interpolation.name,
          styles: interpolation.styles,
          next: cursor
        };
        return interpolation.name;
      }
      if (interpolation.styles !== void 0) {
        var next2 = interpolation.next;
        if (next2 !== void 0) {
          while (next2 !== void 0) {
            cursor = {
              name: next2.name,
              styles: next2.styles,
              next: cursor
            };
            next2 = next2.next;
          }
        }
        var styles2 = interpolation.styles + ";";
        return styles2;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      }
      break;
    }
  }
  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== void 0 ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value !== "object") {
        if (registered != null && registered[value] !== void 0) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === "NO_COMPONENT_SELECTOR" && false) {
          throw new Error(noComponentSelectorMessage);
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (_key) {
            case "animation":
            case "animationName": {
              string += processStyleName(_key) + ":" + interpolated + ";";
              break;
            }
            default: {
              string += _key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var cursor;
var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles2 = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles2 += handleInterpolation(mergedProps, registered, strings);
  } else {
    styles2 += strings[0];
  }
  for (var i = 1; i < args.length; i++) {
    styles2 += handleInterpolation(mergedProps, registered, args[i]);
    if (stringMode) {
      styles2 += strings[i];
    }
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match2;
  while ((match2 = labelPattern.exec(styles2)) !== null) {
    identifierName += "-" + // $FlowFixMe we know it's not null
    match2[1];
  }
  var name = murmur2(styles2) + identifierName;
  return {
    name,
    styles: styles2,
    next: cursor
  };
};
var syncFallback = function syncFallback2(create) {
  return create();
};
var useInsertionEffect = React["useInsertionEffect"] ? React["useInsertionEffect"] : false;
var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect || reactExports.useLayoutEffect;
var EmotionCacheContext = /* @__PURE__ */ reactExports.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({
    key: "css"
  }) : null
);
EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache2(func) {
  return /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
    var cache = reactExports.useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};
var ThemeContext = /* @__PURE__ */ reactExports.createContext({});
var Global = /* @__PURE__ */ withEmotionCache(function(props, cache) {
  var styles2 = props.styles;
  var serialized = serializeStyles([styles2], void 0, reactExports.useContext(ThemeContext));
  var sheetRef = reactExports.useRef();
  useInsertionEffectWithLayoutFallback(function() {
    var key = cache.key + "-global";
    var sheet = new cache.sheet.constructor({
      key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false;
    var node2 = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }
    if (node2 !== null) {
      rehydrating = true;
      node2.setAttribute("data-emotion", key);
      sheet.hydrate([node2]);
    }
    sheetRef.current = [sheet, rehydrating];
    return function() {
      sheet.flush();
    };
  }, [cache]);
  useInsertionEffectWithLayoutFallback(function() {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }
    if (serialized.next !== void 0) {
      insertStyles(cache, serialized.next, true);
    }
    if (sheet.tags.length) {
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }
    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});
function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return serializeStyles(args);
}
var keyframes = function keyframes2() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name;
  return {
    name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
var testOmitPropsOnStringTag = isPropValid;
var testOmitPropsOnComponent = function testOmitPropsOnComponent2(key) {
  return key !== "theme";
};
var getDefaultShouldForwardProp = function getDefaultShouldForwardProp2(tag) {
  return typeof tag === "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps2(tag, options, isReal) {
  var shouldForwardProp2;
  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp2 = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }
  if (typeof shouldForwardProp2 !== "function" && isReal) {
    shouldForwardProp2 = tag.__emotion_forwardProp;
  }
  return shouldForwardProp2;
};
var Insertion = function Insertion2(_ref) {
  var cache = _ref.cache, serialized = _ref.serialized, isStringTag2 = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag2);
  useInsertionEffectAlwaysWithSyncFallback(function() {
    return insertStyles(cache, serialized, isStringTag2);
  });
  return null;
};
var createStyled$1 = function createStyled2(tag, options) {
  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;
  if (options !== void 0) {
    identifierName = options.label;
    targetClassName = options.target;
  }
  var shouldForwardProp2 = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp2 || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp("as");
  return function() {
    var args = arguments;
    var styles2 = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
    if (identifierName !== void 0) {
      styles2.push("label:" + identifierName + ";");
    }
    if (args[0] == null || args[0].raw === void 0) {
      styles2.push.apply(styles2, args);
    } else {
      styles2.push(args[0][0]);
      var len = args.length;
      var i = 1;
      for (; i < len; i++) {
        styles2.push(args[i], args[0][i]);
      }
    }
    var Styled = withEmotionCache(function(props, cache, ref) {
      var FinalTag = shouldUseAs && props.as || baseTag;
      var className = "";
      var classInterpolations = [];
      var mergedProps = props;
      if (props.theme == null) {
        mergedProps = {};
        for (var key in props) {
          mergedProps[key] = props[key];
        }
        mergedProps.theme = reactExports.useContext(ThemeContext);
      }
      if (typeof props.className === "string") {
        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }
      var serialized = serializeStyles(styles2.concat(classInterpolations), cache.registered, mergedProps);
      className += cache.key + "-" + serialized.name;
      if (targetClassName !== void 0) {
        className += " " + targetClassName;
      }
      var finalShouldForwardProp = shouldUseAs && shouldForwardProp2 === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
      var newProps = {};
      for (var _key in props) {
        if (shouldUseAs && _key === "as")
          continue;
        if (
          // $FlowFixMe
          finalShouldForwardProp(_key)
        ) {
          newProps[_key] = props[_key];
        }
      }
      newProps.className = className;
      newProps.ref = ref;
      return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(Insertion, {
        cache,
        serialized,
        isStringTag: typeof FinalTag === "string"
      }), /* @__PURE__ */ reactExports.createElement(FinalTag, newProps));
    });
    Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles2;
    Styled.__emotion_forwardProp = shouldForwardProp2;
    Object.defineProperty(Styled, "toString", {
      value: function value() {
        if (targetClassName === void 0 && false) {
          return "NO_COMPONENT_SELECTOR";
        }
        return "." + targetClassName;
      }
    });
    Styled.withComponent = function(nextTag, nextOptions) {
      return createStyled2(nextTag, _extends({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles2);
    };
    return Styled;
  };
};
var tags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
var newStyled = createStyled$1.bind();
tags.forEach(function(tagName) {
  newStyled[tagName] = newStyled(tagName);
});
function isEmpty$4(obj) {
  return obj === void 0 || obj === null || Object.keys(obj).length === 0;
}
function GlobalStyles$2(props) {
  const {
    styles: styles2,
    defaultTheme: defaultTheme2 = {}
  } = props;
  const globalStyles = typeof styles2 === "function" ? (themeInput) => styles2(isEmpty$4(themeInput) ? defaultTheme2 : themeInput) : styles2;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Global, {
    styles: globalStyles
  });
}
function styled$2(tag, options) {
  const stylesFactory = newStyled(tag, options);
  return stylesFactory;
}
const internal_processStyles = (tag, processor) => {
  if (Array.isArray(tag.__emotion_styles)) {
    tag.__emotion_styles = processor(tag.__emotion_styles);
  }
};
const _excluded$J = ["values", "unit", "step"];
const sortBreakpointsValues = (values2) => {
  const breakpointsAsArray = Object.keys(values2).map((key) => ({
    key,
    val: values2[key]
  })) || [];
  breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
  return breakpointsAsArray.reduce((acc, obj) => {
    return _extends({}, acc, {
      [obj.key]: obj.val
    });
  }, {});
};
function createBreakpoints(breakpoints) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: values2 = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit = "px",
    step = 5
  } = breakpoints, other = _objectWithoutPropertiesLoose(breakpoints, _excluded$J);
  const sortedValues = sortBreakpointsValues(values2);
  const keys = Object.keys(sortedValues);
  function up(key) {
    const value = typeof values2[key] === "number" ? values2[key] : key;
    return `@media (min-width:${value}${unit})`;
  }
  function down(key) {
    const value = typeof values2[key] === "number" ? values2[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }
  function between(start, end) {
    const endIndex = keys.indexOf(end);
    return `@media (min-width:${typeof values2[start] === "number" ? values2[start] : start}${unit}) and (max-width:${(endIndex !== -1 && typeof values2[keys[endIndex]] === "number" ? values2[keys[endIndex]] : end) - step / 100}${unit})`;
  }
  function only(key) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }
    return up(key);
  }
  function not(key) {
    const keyIndex = keys.indexOf(key);
    if (keyIndex === 0) {
      return up(keys[1]);
    }
    if (keyIndex === keys.length - 1) {
      return down(keys[keyIndex]);
    }
    return between(key, keys[keys.indexOf(key) + 1]).replace("@media", "@media not all and");
  }
  return _extends({
    keys,
    values: sortedValues,
    up,
    down,
    between,
    only,
    not,
    unit
  }, other);
}
const shape = {
  borderRadius: 4
};
const shape$1 = shape;
function merge(acc, item) {
  if (!item) {
    return acc;
  }
  return deepmerge(acc, item, {
    clone: false
    // No need to clone deep, it's way faster.
  });
}
const values$1 = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
};
const defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (key) => `@media (min-width:${values$1[key]}px)`
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  const theme = props.theme || {};
  if (Array.isArray(propValue)) {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return propValue.reduce((acc, item, index) => {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }
  if (typeof propValue === "object") {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce((acc, breakpoint) => {
      if (Object.keys(themeBreakpoints.values || values$1).indexOf(breakpoint) !== -1) {
        const mediaKey = themeBreakpoints.up(breakpoint);
        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
      } else {
        const cssKey = breakpoint;
        acc[cssKey] = propValue[cssKey];
      }
      return acc;
    }, {});
  }
  const output = styleFromPropValue(propValue);
  return output;
}
function createEmptyBreakpointObject(breakpointsInput = {}) {
  var _breakpointsInput$key;
  const breakpointsInOrder = (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
    const breakpointStyleKey = breakpointsInput.up(key);
    acc[breakpointStyleKey] = {};
    return acc;
  }, {});
  return breakpointsInOrder || {};
}
function removeUnusedBreakpoints(breakpointKeys, style2) {
  return breakpointKeys.reduce((acc, key) => {
    const breakpointOutput = acc[key];
    const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
    if (isBreakpointUnused) {
      delete acc[key];
    }
    return acc;
  }, style2);
}
function mergeBreakpointsInOrder(breakpointsInput, ...styles2) {
  const emptyBreakpoints = createEmptyBreakpointObject(breakpointsInput);
  const mergedOutput = [emptyBreakpoints, ...styles2].reduce((prev2, next2) => deepmerge(prev2, next2), {});
  return removeUnusedBreakpoints(Object.keys(emptyBreakpoints), mergedOutput);
}
function computeBreakpointsBase(breakpointValues, themeBreakpoints) {
  if (typeof breakpointValues !== "object") {
    return {};
  }
  const base = {};
  const breakpointsKeys = Object.keys(themeBreakpoints);
  if (Array.isArray(breakpointValues)) {
    breakpointsKeys.forEach((breakpoint, i) => {
      if (i < breakpointValues.length) {
        base[breakpoint] = true;
      }
    });
  } else {
    breakpointsKeys.forEach((breakpoint) => {
      if (breakpointValues[breakpoint] != null) {
        base[breakpoint] = true;
      }
    });
  }
  return base;
}
function resolveBreakpointValues({
  values: breakpointValues,
  breakpoints: themeBreakpoints,
  base: customBase
}) {
  const base = customBase || computeBreakpointsBase(breakpointValues, themeBreakpoints);
  const keys = Object.keys(base);
  if (keys.length === 0) {
    return breakpointValues;
  }
  let previous;
  return keys.reduce((acc, breakpoint, i) => {
    if (Array.isArray(breakpointValues)) {
      acc[breakpoint] = breakpointValues[i] != null ? breakpointValues[i] : breakpointValues[previous];
      previous = i;
    } else if (typeof breakpointValues === "object") {
      acc[breakpoint] = breakpointValues[breakpoint] != null ? breakpointValues[breakpoint] : breakpointValues[previous];
      previous = breakpoint;
    } else {
      acc[breakpoint] = breakpointValues;
    }
    return acc;
  }, {});
}
function getPath(obj, path, checkVars = true) {
  if (!path || typeof path !== "string") {
    return null;
  }
  if (obj && obj.vars && checkVars) {
    const val = `vars.${path}`.split(".").reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
    if (val != null) {
      return val;
    }
  }
  return path.split(".").reduce((acc, item) => {
    if (acc && acc[item] != null) {
      return acc[item];
    }
    return null;
  }, obj);
}
function getStyleValue$1(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
  let value;
  if (typeof themeMapping === "function") {
    value = themeMapping(propValueFinal);
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[propValueFinal] || userValue;
  } else {
    value = getPath(themeMapping, propValueFinal) || userValue;
  }
  if (transform) {
    value = transform(value, userValue, themeMapping);
  }
  return value;
}
function style$2(options) {
  const {
    prop,
    cssProperty = options.prop,
    themeKey,
    transform
  } = options;
  const fn = (props) => {
    if (props[prop] == null) {
      return null;
    }
    const propValue = props[prop];
    const theme = props.theme;
    const themeMapping = getPath(theme, themeKey) || {};
    const styleFromPropValue = (propValueFinal) => {
      let value = getStyleValue$1(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === "string") {
        value = getStyleValue$1(themeMapping, transform, `${prop}${propValueFinal === "default" ? "" : capitalize(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return handleBreakpoints(props, propValue, styleFromPropValue);
  };
  fn.propTypes = {};
  fn.filterProps = [prop];
  return fn;
}
function memoize(fn) {
  const cache = {};
  return (arg) => {
    if (cache[arg] === void 0) {
      cache[arg] = fn(arg);
    }
    return cache[arg];
  };
}
const properties = {
  m: "margin",
  p: "padding"
};
const directions = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
};
const aliases = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
};
const getCssProperties = memoize((prop) => {
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }
  const [a2, b3] = prop.split("");
  const property = properties[a2];
  const direction = directions[b3] || "";
  return Array.isArray(direction) ? direction.map((dir) => property + dir) : [property + direction];
});
const marginKeys = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"];
const paddingKeys = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...marginKeys, ...paddingKeys];
function createUnaryUnit(theme, themeKey, defaultValue, propName) {
  var _getPath;
  const themeSpacing = (_getPath = getPath(theme, themeKey, false)) != null ? _getPath : defaultValue;
  if (typeof themeSpacing === "number") {
    return (abs2) => {
      if (typeof abs2 === "string") {
        return abs2;
      }
      return themeSpacing * abs2;
    };
  }
  if (Array.isArray(themeSpacing)) {
    return (abs2) => {
      if (typeof abs2 === "string") {
        return abs2;
      }
      return themeSpacing[abs2];
    };
  }
  if (typeof themeSpacing === "function") {
    return themeSpacing;
  }
  return () => void 0;
}
function createUnarySpacing(theme) {
  return createUnaryUnit(theme, "spacing", 8);
}
function getValue(transformer, propValue) {
  if (typeof propValue === "string" || propValue == null) {
    return propValue;
  }
  const abs2 = Math.abs(propValue);
  const transformed = transformer(abs2);
  if (propValue >= 0) {
    return transformed;
  }
  if (typeof transformed === "number") {
    return -transformed;
  }
  return `-${transformed}`;
}
function getStyleFromPropValue(cssProperties, transformer) {
  return (propValue) => cssProperties.reduce((acc, cssProperty) => {
    acc[cssProperty] = getValue(transformer, propValue);
    return acc;
  }, {});
}
function resolveCssProperty(props, keys, prop, transformer) {
  if (keys.indexOf(prop) === -1) {
    return null;
  }
  const cssProperties = getCssProperties(prop);
  const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
  const propValue = props[prop];
  return handleBreakpoints(props, propValue, styleFromPropValue);
}
function style$1(props, keys) {
  const transformer = createUnarySpacing(props.theme);
  return Object.keys(props).map((prop) => resolveCssProperty(props, keys, prop, transformer)).reduce(merge, {});
}
function margin(props) {
  return style$1(props, marginKeys);
}
margin.propTypes = {};
margin.filterProps = marginKeys;
function padding(props) {
  return style$1(props, paddingKeys);
}
padding.propTypes = {};
padding.filterProps = paddingKeys;
function createSpacing(spacingInput = 8) {
  if (spacingInput.mui) {
    return spacingInput;
  }
  const transform = createUnarySpacing({
    spacing: spacingInput
  });
  const spacing = (...argsInput) => {
    const args = argsInput.length === 0 ? [1] : argsInput;
    return args.map((argument) => {
      const output = transform(argument);
      return typeof output === "number" ? `${output}px` : output;
    }).join(" ");
  };
  spacing.mui = true;
  return spacing;
}
function compose(...styles2) {
  const handlers = styles2.reduce((acc, style2) => {
    style2.filterProps.forEach((prop) => {
      acc[prop] = style2;
    });
    return acc;
  }, {});
  const fn = (props) => {
    return Object.keys(props).reduce((acc, prop) => {
      if (handlers[prop]) {
        return merge(acc, handlers[prop](props));
      }
      return acc;
    }, {});
  };
  fn.propTypes = {};
  fn.filterProps = styles2.reduce((acc, style2) => acc.concat(style2.filterProps), []);
  return fn;
}
function borderTransform(value) {
  if (typeof value !== "number") {
    return value;
  }
  return `${value}px solid`;
}
function createBorderStyle(prop, transform) {
  return style$2({
    prop,
    themeKey: "borders",
    transform
  });
}
const border = createBorderStyle("border", borderTransform);
const borderTop = createBorderStyle("borderTop", borderTransform);
const borderRight = createBorderStyle("borderRight", borderTransform);
const borderBottom = createBorderStyle("borderBottom", borderTransform);
const borderLeft = createBorderStyle("borderLeft", borderTransform);
const borderColor = createBorderStyle("borderColor");
const borderTopColor = createBorderStyle("borderTopColor");
const borderRightColor = createBorderStyle("borderRightColor");
const borderBottomColor = createBorderStyle("borderBottomColor");
const borderLeftColor = createBorderStyle("borderLeftColor");
const outline = createBorderStyle("outline", borderTransform);
const outlineColor = createBorderStyle("outlineColor");
const borderRadius = (props) => {
  if (props.borderRadius !== void 0 && props.borderRadius !== null) {
    const transformer = createUnaryUnit(props.theme, "shape.borderRadius", 4);
    const styleFromPropValue = (propValue) => ({
      borderRadius: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
  }
  return null;
};
borderRadius.propTypes = {};
borderRadius.filterProps = ["borderRadius"];
compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius, outline, outlineColor);
const gap = (props) => {
  if (props.gap !== void 0 && props.gap !== null) {
    const transformer = createUnaryUnit(props.theme, "spacing", 8);
    const styleFromPropValue = (propValue) => ({
      gap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.gap, styleFromPropValue);
  }
  return null;
};
gap.propTypes = {};
gap.filterProps = ["gap"];
const columnGap = (props) => {
  if (props.columnGap !== void 0 && props.columnGap !== null) {
    const transformer = createUnaryUnit(props.theme, "spacing", 8);
    const styleFromPropValue = (propValue) => ({
      columnGap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.columnGap, styleFromPropValue);
  }
  return null;
};
columnGap.propTypes = {};
columnGap.filterProps = ["columnGap"];
const rowGap = (props) => {
  if (props.rowGap !== void 0 && props.rowGap !== null) {
    const transformer = createUnaryUnit(props.theme, "spacing", 8);
    const styleFromPropValue = (propValue) => ({
      rowGap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.rowGap, styleFromPropValue);
  }
  return null;
};
rowGap.propTypes = {};
rowGap.filterProps = ["rowGap"];
const gridColumn = style$2({
  prop: "gridColumn"
});
const gridRow = style$2({
  prop: "gridRow"
});
const gridAutoFlow = style$2({
  prop: "gridAutoFlow"
});
const gridAutoColumns = style$2({
  prop: "gridAutoColumns"
});
const gridAutoRows = style$2({
  prop: "gridAutoRows"
});
const gridTemplateColumns = style$2({
  prop: "gridTemplateColumns"
});
const gridTemplateRows = style$2({
  prop: "gridTemplateRows"
});
const gridTemplateAreas = style$2({
  prop: "gridTemplateAreas"
});
const gridArea = style$2({
  prop: "gridArea"
});
compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
function paletteTransform(value, userValue) {
  if (userValue === "grey") {
    return userValue;
  }
  return value;
}
const color = style$2({
  prop: "color",
  themeKey: "palette",
  transform: paletteTransform
});
const bgcolor = style$2({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: paletteTransform
});
const backgroundColor = style$2({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: paletteTransform
});
compose(color, bgcolor, backgroundColor);
function sizingTransform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}
const width = style$2({
  prop: "width",
  transform: sizingTransform
});
const maxWidth = (props) => {
  if (props.maxWidth !== void 0 && props.maxWidth !== null) {
    const styleFromPropValue = (propValue) => {
      var _props$theme, _props$theme2;
      const breakpoint = ((_props$theme = props.theme) == null || (_props$theme = _props$theme.breakpoints) == null || (_props$theme = _props$theme.values) == null ? void 0 : _props$theme[propValue]) || values$1[propValue];
      if (!breakpoint) {
        return {
          maxWidth: sizingTransform(propValue)
        };
      }
      if (((_props$theme2 = props.theme) == null || (_props$theme2 = _props$theme2.breakpoints) == null ? void 0 : _props$theme2.unit) !== "px") {
        return {
          maxWidth: `${breakpoint}${props.theme.breakpoints.unit}`
        };
      }
      return {
        maxWidth: breakpoint
      };
    };
    return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
  }
  return null;
};
maxWidth.filterProps = ["maxWidth"];
const minWidth = style$2({
  prop: "minWidth",
  transform: sizingTransform
});
const height = style$2({
  prop: "height",
  transform: sizingTransform
});
const maxHeight = style$2({
  prop: "maxHeight",
  transform: sizingTransform
});
const minHeight = style$2({
  prop: "minHeight",
  transform: sizingTransform
});
style$2({
  prop: "size",
  cssProperty: "width",
  transform: sizingTransform
});
style$2({
  prop: "size",
  cssProperty: "height",
  transform: sizingTransform
});
const boxSizing = style$2({
  prop: "boxSizing"
});
compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
const defaultSxConfig = {
  // borders
  border: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderTop: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderRight: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderBottom: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderLeft: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: borderTransform
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: borderRadius
  },
  // palette
  color: {
    themeKey: "palette",
    transform: paletteTransform
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: paletteTransform
  },
  backgroundColor: {
    themeKey: "palette",
    transform: paletteTransform
  },
  // spacing
  p: {
    style: padding
  },
  pt: {
    style: padding
  },
  pr: {
    style: padding
  },
  pb: {
    style: padding
  },
  pl: {
    style: padding
  },
  px: {
    style: padding
  },
  py: {
    style: padding
  },
  padding: {
    style: padding
  },
  paddingTop: {
    style: padding
  },
  paddingRight: {
    style: padding
  },
  paddingBottom: {
    style: padding
  },
  paddingLeft: {
    style: padding
  },
  paddingX: {
    style: padding
  },
  paddingY: {
    style: padding
  },
  paddingInline: {
    style: padding
  },
  paddingInlineStart: {
    style: padding
  },
  paddingInlineEnd: {
    style: padding
  },
  paddingBlock: {
    style: padding
  },
  paddingBlockStart: {
    style: padding
  },
  paddingBlockEnd: {
    style: padding
  },
  m: {
    style: margin
  },
  mt: {
    style: margin
  },
  mr: {
    style: margin
  },
  mb: {
    style: margin
  },
  ml: {
    style: margin
  },
  mx: {
    style: margin
  },
  my: {
    style: margin
  },
  margin: {
    style: margin
  },
  marginTop: {
    style: margin
  },
  marginRight: {
    style: margin
  },
  marginBottom: {
    style: margin
  },
  marginLeft: {
    style: margin
  },
  marginX: {
    style: margin
  },
  marginY: {
    style: margin
  },
  marginInline: {
    style: margin
  },
  marginInlineStart: {
    style: margin
  },
  marginInlineEnd: {
    style: margin
  },
  marginBlock: {
    style: margin
  },
  marginBlockStart: {
    style: margin
  },
  marginBlockEnd: {
    style: margin
  },
  // display
  displayPrint: {
    cssProperty: false,
    transform: (value) => ({
      "@media print": {
        display: value
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: gap
  },
  rowGap: {
    style: rowGap
  },
  columnGap: {
    style: columnGap
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: sizingTransform
  },
  maxWidth: {
    style: maxWidth
  },
  minWidth: {
    transform: sizingTransform
  },
  height: {
    transform: sizingTransform
  },
  maxHeight: {
    transform: sizingTransform
  },
  minHeight: {
    transform: sizingTransform
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: false,
    themeKey: "typography"
  }
};
const defaultSxConfig$1 = defaultSxConfig;
function objectsHaveSameKeys(...objects) {
  const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
  const union = new Set(allKeys);
  return objects.every((object) => union.size === Object.keys(object).length);
}
function callIfFn(maybeFn, arg) {
  return typeof maybeFn === "function" ? maybeFn(arg) : maybeFn;
}
function unstable_createStyleFunctionSx() {
  function getThemeValue(prop, val, theme, config2) {
    const props = {
      [prop]: val,
      theme
    };
    const options = config2[prop];
    if (!options) {
      return {
        [prop]: val
      };
    }
    const {
      cssProperty = prop,
      themeKey,
      transform,
      style: style2
    } = options;
    if (val == null) {
      return null;
    }
    if (themeKey === "typography" && val === "inherit") {
      return {
        [prop]: val
      };
    }
    const themeMapping = getPath(theme, themeKey) || {};
    if (style2) {
      return style2(props);
    }
    const styleFromPropValue = (propValueFinal) => {
      let value = getStyleValue$1(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === "string") {
        value = getStyleValue$1(themeMapping, transform, `${prop}${propValueFinal === "default" ? "" : capitalize(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return handleBreakpoints(props, val, styleFromPropValue);
  }
  function styleFunctionSx2(props) {
    var _theme$unstable_sxCon;
    const {
      sx,
      theme = {}
    } = props || {};
    if (!sx) {
      return null;
    }
    const config2 = (_theme$unstable_sxCon = theme.unstable_sxConfig) != null ? _theme$unstable_sxCon : defaultSxConfig$1;
    function traverse(sxInput) {
      let sxObject = sxInput;
      if (typeof sxInput === "function") {
        sxObject = sxInput(theme);
      } else if (typeof sxInput !== "object") {
        return sxInput;
      }
      if (!sxObject) {
        return null;
      }
      const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
      const breakpointsKeys = Object.keys(emptyBreakpoints);
      let css2 = emptyBreakpoints;
      Object.keys(sxObject).forEach((styleKey) => {
        const value = callIfFn(sxObject[styleKey], theme);
        if (value !== null && value !== void 0) {
          if (typeof value === "object") {
            if (config2[styleKey]) {
              css2 = merge(css2, getThemeValue(styleKey, value, theme, config2));
            } else {
              const breakpointsValues = handleBreakpoints({
                theme
              }, value, (x2) => ({
                [styleKey]: x2
              }));
              if (objectsHaveSameKeys(breakpointsValues, value)) {
                css2[styleKey] = styleFunctionSx2({
                  sx: value,
                  theme
                });
              } else {
                css2 = merge(css2, breakpointsValues);
              }
            }
          } else {
            css2 = merge(css2, getThemeValue(styleKey, value, theme, config2));
          }
        }
      });
      return removeUnusedBreakpoints(breakpointsKeys, css2);
    }
    return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
  }
  return styleFunctionSx2;
}
const styleFunctionSx = unstable_createStyleFunctionSx();
styleFunctionSx.filterProps = ["sx"];
const _excluded$I = ["breakpoints", "palette", "spacing", "shape"];
function createTheme$1(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    shape: shapeInput = {}
  } = options, other = _objectWithoutPropertiesLoose(options, _excluded$I);
  const breakpoints = createBreakpoints(breakpointsInput);
  const spacing = createSpacing(spacingInput);
  let muiTheme = deepmerge({
    breakpoints,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: _extends({
      mode: "light"
    }, paletteInput),
    spacing,
    shape: _extends({}, shape$1, shapeInput)
  }, other);
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  muiTheme.unstable_sxConfig = _extends({}, defaultSxConfig$1, other == null ? void 0 : other.unstable_sxConfig);
  muiTheme.unstable_sx = function sx(props) {
    return styleFunctionSx({
      sx: props,
      theme: this
    });
  };
  return muiTheme;
}
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme$2(defaultTheme2 = null) {
  const contextTheme = reactExports.useContext(ThemeContext);
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme2 : contextTheme;
}
const systemDefaultTheme$1 = createTheme$1();
function useTheme$1(defaultTheme2 = systemDefaultTheme$1) {
  return useTheme$2(defaultTheme2);
}
function GlobalStyles$1({
  styles: styles2,
  themeId,
  defaultTheme: defaultTheme2 = {}
}) {
  const upperTheme = useTheme$1(defaultTheme2);
  const globalStyles = typeof styles2 === "function" ? styles2(themeId ? upperTheme[themeId] || upperTheme : upperTheme) : styles2;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalStyles$2, {
    styles: globalStyles
  });
}
const _excluded$H = ["sx"];
const splitProps = (props) => {
  var _props$theme$unstable, _props$theme;
  const result = {
    systemProps: {},
    otherProps: {}
  };
  const config2 = (_props$theme$unstable = props == null || (_props$theme = props.theme) == null ? void 0 : _props$theme.unstable_sxConfig) != null ? _props$theme$unstable : defaultSxConfig$1;
  Object.keys(props).forEach((prop) => {
    if (config2[prop]) {
      result.systemProps[prop] = props[prop];
    } else {
      result.otherProps[prop] = props[prop];
    }
  });
  return result;
};
function extendSxProp(props) {
  const {
    sx: inSx
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$H);
  const {
    systemProps,
    otherProps
  } = splitProps(other);
  let finalSx;
  if (Array.isArray(inSx)) {
    finalSx = [systemProps, ...inSx];
  } else if (typeof inSx === "function") {
    finalSx = (...args) => {
      const result = inSx(...args);
      if (!isPlainObject(result)) {
        return systemProps;
      }
      return _extends({}, systemProps, result);
    };
  } else {
    finalSx = _extends({}, systemProps, inSx);
  }
  return _extends({}, otherProps, {
    sx: finalSx
  });
}
const _excluded$G = ["variant"];
function isEmpty$3(string) {
  return string.length === 0;
}
function propsToClassKey(props) {
  const {
    variant
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$G);
  let classKey = variant || "";
  Object.keys(other).sort().forEach((key) => {
    if (key === "color") {
      classKey += isEmpty$3(classKey) ? props[key] : capitalize(props[key]);
    } else {
      classKey += `${isEmpty$3(classKey) ? key : capitalize(key)}${capitalize(props[key].toString())}`;
    }
  });
  return classKey;
}
const _excluded$F = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function isEmpty$2(obj) {
  return Object.keys(obj).length === 0;
}
function isStringTag(tag) {
  return typeof tag === "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96;
}
const getStyleOverrides = (name, theme) => {
  if (theme.components && theme.components[name] && theme.components[name].styleOverrides) {
    return theme.components[name].styleOverrides;
  }
  return null;
};
const transformVariants = (variants) => {
  let numOfCallbacks = 0;
  const variantsStyles = {};
  if (variants) {
    variants.forEach((definition) => {
      let key = "";
      if (typeof definition.props === "function") {
        key = `callback${numOfCallbacks}`;
        numOfCallbacks += 1;
      } else {
        key = propsToClassKey(definition.props);
      }
      variantsStyles[key] = definition.style;
    });
  }
  return variantsStyles;
};
const getVariantStyles = (name, theme) => {
  let variants = [];
  if (theme && theme.components && theme.components[name] && theme.components[name].variants) {
    variants = theme.components[name].variants;
  }
  return transformVariants(variants);
};
const variantsResolver = (props, styles2, variants) => {
  const {
    ownerState = {}
  } = props;
  const variantsStyles = [];
  let numOfCallbacks = 0;
  if (variants) {
    variants.forEach((variant) => {
      let isMatch = true;
      if (typeof variant.props === "function") {
        const propsToCheck = _extends({}, props, ownerState);
        isMatch = variant.props(propsToCheck);
      } else {
        Object.keys(variant.props).forEach((key) => {
          if (ownerState[key] !== variant.props[key] && props[key] !== variant.props[key]) {
            isMatch = false;
          }
        });
      }
      if (isMatch) {
        if (typeof variant.props === "function") {
          variantsStyles.push(styles2[`callback${numOfCallbacks}`]);
        } else {
          variantsStyles.push(styles2[propsToClassKey(variant.props)]);
        }
      }
      if (typeof variant.props === "function") {
        numOfCallbacks += 1;
      }
    });
  }
  return variantsStyles;
};
const themeVariantsResolver = (props, styles2, theme, name) => {
  var _theme$components;
  const themeVariants = theme == null || (_theme$components = theme.components) == null || (_theme$components = _theme$components[name]) == null ? void 0 : _theme$components.variants;
  return variantsResolver(props, styles2, themeVariants);
};
function shouldForwardProp(prop) {
  return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
}
const systemDefaultTheme = createTheme$1();
const lowercaseFirstLetter = (string) => {
  if (!string) {
    return string;
  }
  return string.charAt(0).toLowerCase() + string.slice(1);
};
function resolveTheme({
  defaultTheme: defaultTheme2,
  theme,
  themeId
}) {
  return isEmpty$2(theme) ? defaultTheme2 : theme[themeId] || theme;
}
function defaultOverridesResolver(slot) {
  if (!slot) {
    return null;
  }
  return (props, styles2) => styles2[slot];
}
const muiStyledFunctionResolver = ({
  styledArg,
  props,
  defaultTheme: defaultTheme2,
  themeId
}) => {
  const resolvedStyles = styledArg(_extends({}, props, {
    theme: resolveTheme(_extends({}, props, {
      defaultTheme: defaultTheme2,
      themeId
    }))
  }));
  let optionalVariants;
  if (resolvedStyles && resolvedStyles.variants) {
    optionalVariants = resolvedStyles.variants;
    delete resolvedStyles.variants;
  }
  if (optionalVariants) {
    const variantsStyles = variantsResolver(props, transformVariants(optionalVariants), optionalVariants);
    return [resolvedStyles, ...variantsStyles];
  }
  return resolvedStyles;
};
function createStyled(input = {}) {
  const {
    themeId,
    defaultTheme: defaultTheme2 = systemDefaultTheme,
    rootShouldForwardProp: rootShouldForwardProp2 = shouldForwardProp,
    slotShouldForwardProp: slotShouldForwardProp2 = shouldForwardProp
  } = input;
  const systemSx = (props) => {
    return styleFunctionSx(_extends({}, props, {
      theme: resolveTheme(_extends({}, props, {
        defaultTheme: defaultTheme2,
        themeId
      }))
    }));
  };
  systemSx.__mui_systemSx = true;
  return (tag, inputOptions = {}) => {
    internal_processStyles(tag, (styles2) => styles2.filter((style2) => !(style2 != null && style2.__mui_systemSx)));
    const {
      name: componentName,
      slot: componentSlot,
      skipVariantsResolver: inputSkipVariantsResolver,
      skipSx: inputSkipSx,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot))
    } = inputOptions, options = _objectWithoutPropertiesLoose(inputOptions, _excluded$F);
    const skipVariantsResolver = inputSkipVariantsResolver !== void 0 ? inputSkipVariantsResolver : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      componentSlot && componentSlot !== "Root" && componentSlot !== "root" || false
    );
    const skipSx = inputSkipSx || false;
    let label;
    let shouldForwardPropOption = shouldForwardProp;
    if (componentSlot === "Root" || componentSlot === "root") {
      shouldForwardPropOption = rootShouldForwardProp2;
    } else if (componentSlot) {
      shouldForwardPropOption = slotShouldForwardProp2;
    } else if (isStringTag(tag)) {
      shouldForwardPropOption = void 0;
    }
    const defaultStyledResolver = styled$2(tag, _extends({
      shouldForwardProp: shouldForwardPropOption,
      label
    }, options));
    const muiStyledResolver = (styleArg, ...expressions) => {
      const expressionsWithDefaultTheme = expressions ? expressions.map((stylesArg) => {
        if (typeof stylesArg === "function" && stylesArg.__emotion_real !== stylesArg) {
          return (props) => muiStyledFunctionResolver({
            styledArg: stylesArg,
            props,
            defaultTheme: defaultTheme2,
            themeId
          });
        }
        if (isPlainObject(stylesArg)) {
          let transformedStylesArg = stylesArg;
          let styledArgVariants;
          if (stylesArg && stylesArg.variants) {
            styledArgVariants = stylesArg.variants;
            delete transformedStylesArg.variants;
            transformedStylesArg = (props) => {
              let result = stylesArg;
              const variantStyles = variantsResolver(props, transformVariants(styledArgVariants), styledArgVariants);
              variantStyles.forEach((variantStyle) => {
                result = deepmerge(result, variantStyle);
              });
              return result;
            };
          }
          return transformedStylesArg;
        }
        return stylesArg;
      }) : [];
      let transformedStyleArg = styleArg;
      if (isPlainObject(styleArg)) {
        let styledArgVariants;
        if (styleArg && styleArg.variants) {
          styledArgVariants = styleArg.variants;
          delete transformedStyleArg.variants;
          transformedStyleArg = (props) => {
            let result = styleArg;
            const variantStyles = variantsResolver(props, transformVariants(styledArgVariants), styledArgVariants);
            variantStyles.forEach((variantStyle) => {
              result = deepmerge(result, variantStyle);
            });
            return result;
          };
        }
      } else if (typeof styleArg === "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
      // component stays as a function. This condition makes sure that we do not interpolate functions
      // which are basically components used as a selectors.
      styleArg.__emotion_real !== styleArg) {
        transformedStyleArg = (props) => muiStyledFunctionResolver({
          styledArg: styleArg,
          props,
          defaultTheme: defaultTheme2,
          themeId
        });
      }
      if (componentName && overridesResolver) {
        expressionsWithDefaultTheme.push((props) => {
          const theme = resolveTheme(_extends({}, props, {
            defaultTheme: defaultTheme2,
            themeId
          }));
          const styleOverrides = getStyleOverrides(componentName, theme);
          if (styleOverrides) {
            const resolvedStyleOverrides = {};
            Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
              resolvedStyleOverrides[slotKey] = typeof slotStyle === "function" ? slotStyle(_extends({}, props, {
                theme
              })) : slotStyle;
            });
            return overridesResolver(props, resolvedStyleOverrides);
          }
          return null;
        });
      }
      if (componentName && !skipVariantsResolver) {
        expressionsWithDefaultTheme.push((props) => {
          const theme = resolveTheme(_extends({}, props, {
            defaultTheme: defaultTheme2,
            themeId
          }));
          return themeVariantsResolver(props, getVariantStyles(componentName, theme), theme, componentName);
        });
      }
      if (!skipSx) {
        expressionsWithDefaultTheme.push(systemSx);
      }
      const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
        const placeholders = new Array(numOfCustomFnsApplied).fill("");
        transformedStyleArg = [...styleArg, ...placeholders];
        transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
      }
      const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
      if (tag.muiName) {
        Component.muiName = tag.muiName;
      }
      return Component;
    };
    if (defaultStyledResolver.withConfig) {
      muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
    }
    return muiStyledResolver;
  };
}
const styled$1 = createStyled();
function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;
  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
    return props;
  }
  return resolveProps(theme.components[name].defaultProps, props);
}
function useThemeProps$1({
  props,
  name,
  defaultTheme: defaultTheme2,
  themeId
}) {
  let theme = useTheme$1(defaultTheme2);
  if (themeId) {
    theme = theme[themeId] || theme;
  }
  const mergedProps = getThemeProps({
    theme,
    name,
    props
  });
  return mergedProps;
}
function clamp(value, min = 0, max = 1) {
  return Math.min(Math.max(min, value), max);
}
function hexToRgb(color2) {
  color2 = color2.slice(1);
  const re2 = new RegExp(`.{1,${color2.length >= 6 ? 2 : 1}}`, "g");
  let colors = color2.match(re2);
  if (colors && colors[0].length === 1) {
    colors = colors.map((n2) => n2 + n2);
  }
  return colors ? `rgb${colors.length === 4 ? "a" : ""}(${colors.map((n2, index) => {
    return index < 3 ? parseInt(n2, 16) : Math.round(parseInt(n2, 16) / 255 * 1e3) / 1e3;
  }).join(", ")})` : "";
}
function decomposeColor(color2) {
  if (color2.type) {
    return color2;
  }
  if (color2.charAt(0) === "#") {
    return decomposeColor(hexToRgb(color2));
  }
  const marker = color2.indexOf("(");
  const type = color2.substring(0, marker);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(type) === -1) {
    throw new Error(formatMuiErrorMessage(9, color2));
  }
  let values2 = color2.substring(marker + 1, color2.length - 1);
  let colorSpace;
  if (type === "color") {
    values2 = values2.split(" ");
    colorSpace = values2.shift();
    if (values2.length === 4 && values2[3].charAt(0) === "/") {
      values2[3] = values2[3].slice(1);
    }
    if (["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(colorSpace) === -1) {
      throw new Error(formatMuiErrorMessage(10, colorSpace));
    }
  } else {
    values2 = values2.split(",");
  }
  values2 = values2.map((value) => parseFloat(value));
  return {
    type,
    values: values2,
    colorSpace
  };
}
function recomposeColor(color2) {
  const {
    type,
    colorSpace
  } = color2;
  let {
    values: values2
  } = color2;
  if (type.indexOf("rgb") !== -1) {
    values2 = values2.map((n2, i) => i < 3 ? parseInt(n2, 10) : n2);
  } else if (type.indexOf("hsl") !== -1) {
    values2[1] = `${values2[1]}%`;
    values2[2] = `${values2[2]}%`;
  }
  if (type.indexOf("color") !== -1) {
    values2 = `${colorSpace} ${values2.join(" ")}`;
  } else {
    values2 = `${values2.join(", ")}`;
  }
  return `${type}(${values2})`;
}
function hslToRgb(color2) {
  color2 = decomposeColor(color2);
  const {
    values: values2
  } = color2;
  const h2 = values2[0];
  const s = values2[1] / 100;
  const l2 = values2[2] / 100;
  const a2 = s * Math.min(l2, 1 - l2);
  const f2 = (n2, k2 = (n2 + h2 / 30) % 12) => l2 - a2 * Math.max(Math.min(k2 - 3, 9 - k2, 1), -1);
  let type = "rgb";
  const rgb = [Math.round(f2(0) * 255), Math.round(f2(8) * 255), Math.round(f2(4) * 255)];
  if (color2.type === "hsla") {
    type += "a";
    rgb.push(values2[3]);
  }
  return recomposeColor({
    type,
    values: rgb
  });
}
function getLuminance(color2) {
  color2 = decomposeColor(color2);
  let rgb = color2.type === "hsl" || color2.type === "hsla" ? decomposeColor(hslToRgb(color2)).values : color2.values;
  rgb = rgb.map((val) => {
    if (color2.type !== "color") {
      val /= 255;
    }
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });
  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
function getContrastRatio(foreground, background) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
function alpha(color2, value) {
  color2 = decomposeColor(color2);
  value = clamp(value);
  if (color2.type === "rgb" || color2.type === "hsl") {
    color2.type += "a";
  }
  if (color2.type === "color") {
    color2.values[3] = `/${value}`;
  } else {
    color2.values[3] = value;
  }
  return recomposeColor(color2);
}
function darken(color2, coefficient) {
  color2 = decomposeColor(color2);
  coefficient = clamp(coefficient);
  if (color2.type.indexOf("hsl") !== -1) {
    color2.values[2] *= 1 - coefficient;
  } else if (color2.type.indexOf("rgb") !== -1 || color2.type.indexOf("color") !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color2.values[i] *= 1 - coefficient;
    }
  }
  return recomposeColor(color2);
}
function lighten(color2, coefficient) {
  color2 = decomposeColor(color2);
  coefficient = clamp(coefficient);
  if (color2.type.indexOf("hsl") !== -1) {
    color2.values[2] += (100 - color2.values[2]) * coefficient;
  } else if (color2.type.indexOf("rgb") !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color2.values[i] += (255 - color2.values[i]) * coefficient;
    }
  } else if (color2.type.indexOf("color") !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color2.values[i] += (1 - color2.values[i]) * coefficient;
    }
  }
  return recomposeColor(color2);
}
function emphasize(color2, coefficient = 0.15) {
  return getLuminance(color2) > 0.5 ? darken(color2, coefficient) : lighten(color2, coefficient);
}
const _excluded$E = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"];
const defaultTheme$2 = createTheme$1();
const defaultCreateStyledComponent = styled$1("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
});
function useThemePropsDefault(props) {
  return useThemeProps$1({
    props,
    name: "MuiStack",
    defaultTheme: defaultTheme$2
  });
}
function joinChildren(children, separator) {
  const childrenArray = reactExports.Children.toArray(children).filter(Boolean);
  return childrenArray.reduce((output, child, index) => {
    output.push(child);
    if (index < childrenArray.length - 1) {
      output.push(/* @__PURE__ */ reactExports.cloneElement(separator, {
        key: `separator-${index}`
      }));
    }
    return output;
  }, []);
}
const getSideFromDirection = (direction) => {
  return {
    row: "Left",
    "row-reverse": "Right",
    column: "Top",
    "column-reverse": "Bottom"
  }[direction];
};
const style = ({
  ownerState,
  theme
}) => {
  let styles2 = _extends({
    display: "flex",
    flexDirection: "column"
  }, handleBreakpoints({
    theme
  }, resolveBreakpointValues({
    values: ownerState.direction,
    breakpoints: theme.breakpoints.values
  }), (propValue) => ({
    flexDirection: propValue
  })));
  if (ownerState.spacing) {
    const transformer = createUnarySpacing(theme);
    const base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
      if (typeof ownerState.spacing === "object" && ownerState.spacing[breakpoint] != null || typeof ownerState.direction === "object" && ownerState.direction[breakpoint] != null) {
        acc[breakpoint] = true;
      }
      return acc;
    }, {});
    const directionValues = resolveBreakpointValues({
      values: ownerState.direction,
      base
    });
    const spacingValues = resolveBreakpointValues({
      values: ownerState.spacing,
      base
    });
    if (typeof directionValues === "object") {
      Object.keys(directionValues).forEach((breakpoint, index, breakpoints) => {
        const directionValue = directionValues[breakpoint];
        if (!directionValue) {
          const previousDirectionValue = index > 0 ? directionValues[breakpoints[index - 1]] : "column";
          directionValues[breakpoint] = previousDirectionValue;
        }
      });
    }
    const styleFromPropValue = (propValue, breakpoint) => {
      if (ownerState.useFlexGap) {
        return {
          gap: getValue(transformer, propValue)
        };
      }
      return {
        // The useFlexGap={false} implement relies on each child to give up control of the margin.
        // We need to reset the margin to avoid double spacing.
        "& > :not(style):not(style)": {
          margin: 0
        },
        "& > :not(style) ~ :not(style)": {
          [`margin${getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction)}`]: getValue(transformer, propValue)
        }
      };
    };
    styles2 = deepmerge(styles2, handleBreakpoints({
      theme
    }, spacingValues, styleFromPropValue));
  }
  styles2 = mergeBreakpointsInOrder(theme.breakpoints, styles2);
  return styles2;
};
function createStack(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent,
    useThemeProps: useThemeProps2 = useThemePropsDefault,
    componentName = "MuiStack"
  } = options;
  const useUtilityClasses2 = () => {
    const slots = {
      root: ["root"]
    };
    return composeClasses(slots, (slot) => generateUtilityClass(componentName, slot), {});
  };
  const StackRoot = createStyledComponent(style);
  const Stack2 = /* @__PURE__ */ reactExports.forwardRef(function Grid(inProps, ref) {
    const themeProps = useThemeProps2(inProps);
    const props = extendSxProp(themeProps);
    const {
      component = "div",
      direction = "column",
      spacing = 0,
      divider,
      children,
      className,
      useFlexGap = false
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded$E);
    const ownerState = {
      direction,
      spacing,
      useFlexGap
    };
    const classes = useUtilityClasses2();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(StackRoot, _extends({
      as: component,
      ownerState,
      ref,
      className: clsx(classes.root, className)
    }, other, {
      children: divider ? joinChildren(children, divider) : children
    }));
  });
  return Stack2;
}
function createMixins(breakpoints, mixins) {
  return _extends({
    toolbar: {
      minHeight: 56,
      [breakpoints.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [breakpoints.up("sm")]: {
        minHeight: 64
      }
    }
  }, mixins);
}
const common = {
  black: "#000",
  white: "#fff"
};
const common$1 = common;
const grey = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
const grey$1 = grey;
const purple = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
};
const purple$1 = purple;
const red = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
};
const red$1 = red;
const orange = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
};
const orange$1 = orange;
const blue = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
};
const blue$1 = blue;
const lightBlue = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
};
const lightBlue$1 = lightBlue;
const green = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
};
const green$1 = green;
const _excluded$D = ["mode", "contrastThreshold", "tonalOffset"];
const light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: common$1.white,
    default: common$1.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
const dark = {
  text: {
    primary: common$1.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: common$1.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function addLightOrDark(intent, direction, shade, tonalOffset) {
  const tonalOffsetLight = tonalOffset.light || tonalOffset;
  const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === "light") {
      intent.light = lighten(intent.main, tonalOffsetLight);
    } else if (direction === "dark") {
      intent.dark = darken(intent.main, tonalOffsetDark);
    }
  }
}
function getDefaultPrimary(mode = "light") {
  if (mode === "dark") {
    return {
      main: blue$1[200],
      light: blue$1[50],
      dark: blue$1[400]
    };
  }
  return {
    main: blue$1[700],
    light: blue$1[400],
    dark: blue$1[800]
  };
}
function getDefaultSecondary(mode = "light") {
  if (mode === "dark") {
    return {
      main: purple$1[200],
      light: purple$1[50],
      dark: purple$1[400]
    };
  }
  return {
    main: purple$1[500],
    light: purple$1[300],
    dark: purple$1[700]
  };
}
function getDefaultError(mode = "light") {
  if (mode === "dark") {
    return {
      main: red$1[500],
      light: red$1[300],
      dark: red$1[700]
    };
  }
  return {
    main: red$1[700],
    light: red$1[400],
    dark: red$1[800]
  };
}
function getDefaultInfo(mode = "light") {
  if (mode === "dark") {
    return {
      main: lightBlue$1[400],
      light: lightBlue$1[300],
      dark: lightBlue$1[700]
    };
  }
  return {
    main: lightBlue$1[700],
    light: lightBlue$1[500],
    dark: lightBlue$1[900]
  };
}
function getDefaultSuccess(mode = "light") {
  if (mode === "dark") {
    return {
      main: green$1[400],
      light: green$1[300],
      dark: green$1[700]
    };
  }
  return {
    main: green$1[800],
    light: green$1[500],
    dark: green$1[900]
  };
}
function getDefaultWarning(mode = "light") {
  if (mode === "dark") {
    return {
      main: orange$1[400],
      light: orange$1[300],
      dark: orange$1[700]
    };
  }
  return {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: orange$1[500],
    dark: orange$1[900]
  };
}
function createPalette(palette) {
  const {
    mode = "light",
    contrastThreshold = 3,
    tonalOffset = 0.2
  } = palette, other = _objectWithoutPropertiesLoose(palette, _excluded$D);
  const primary = palette.primary || getDefaultPrimary(mode);
  const secondary = palette.secondary || getDefaultSecondary(mode);
  const error = palette.error || getDefaultError(mode);
  const info = palette.info || getDefaultInfo(mode);
  const success = palette.success || getDefaultSuccess(mode);
  const warning = palette.warning || getDefaultWarning(mode);
  function getContrastText(background) {
    const contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
    return contrastText;
  }
  const augmentColor = ({
    color: color2,
    name,
    mainShade = 500,
    lightShade = 300,
    darkShade = 700
  }) => {
    color2 = _extends({}, color2);
    if (!color2.main && color2[mainShade]) {
      color2.main = color2[mainShade];
    }
    if (!color2.hasOwnProperty("main")) {
      throw new Error(formatMuiErrorMessage(11, name ? ` (${name})` : "", mainShade));
    }
    if (typeof color2.main !== "string") {
      throw new Error(formatMuiErrorMessage(12, name ? ` (${name})` : "", JSON.stringify(color2.main)));
    }
    addLightOrDark(color2, "light", lightShade, tonalOffset);
    addLightOrDark(color2, "dark", darkShade, tonalOffset);
    if (!color2.contrastText) {
      color2.contrastText = getContrastText(color2.main);
    }
    return color2;
  };
  const modes = {
    dark,
    light
  };
  const paletteOutput = deepmerge(_extends({
    // A collection of common colors.
    common: _extends({}, common$1),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor({
      color: primary,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor({
      color: secondary,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor({
      color: error,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor({
      color: warning,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor({
      color: info,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor({
      color: success,
      name: "success"
    }),
    // The grey colors.
    grey: grey$1,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText,
    // Generate a rich color object.
    augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset
  }, modes[mode]), other);
  return paletteOutput;
}
const _excluded$C = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
const caseAllCaps = {
  textTransform: "uppercase"
};
const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
function createTypography(palette, typography) {
  const _ref = typeof typography === "function" ? typography(palette) : typography, {
    fontFamily = defaultFontFamily,
    // The default font size of the Material Specification.
    fontSize = 14,
    // px
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize = 16,
    // Apply the CSS properties to all the variants.
    allVariants,
    pxToRem: pxToRem2
  } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded$C);
  const coef = fontSize / 14;
  const pxToRem = pxToRem2 || ((size) => `${size / htmlFontSize * coef}rem`);
  const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => _extends({
    fontFamily,
    fontWeight,
    fontSize: pxToRem(size),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight
  }, fontFamily === defaultFontFamily ? {
    letterSpacing: `${round(letterSpacing / size)}em`
  } : {}, casing, allVariants);
  const variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return deepmerge(_extends({
    htmlFontSize,
    pxToRem,
    fontFamily,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold
  }, variants), other, {
    clone: false
    // No need to clone deep
  });
}
const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;
function createShadow(...px) {
  return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(",");
}
const shadows = ["none", createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
const _excluded$B = ["duration", "easing", "delay"];
const easing = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
};
const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function formatMs(milliseconds) {
  return `${Math.round(milliseconds)}ms`;
}
function getAutoHeightDuration(height2) {
  if (!height2) {
    return 0;
  }
  const constant = height2 / 36;
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}
function createTransitions(inputTransitions) {
  const mergedEasing = _extends({}, easing, inputTransitions.easing);
  const mergedDuration = _extends({}, duration, inputTransitions.duration);
  const create = (props = ["all"], options = {}) => {
    const {
      duration: durationOption = mergedDuration.standard,
      easing: easingOption = mergedEasing.easeInOut,
      delay = 0
    } = options;
    _objectWithoutPropertiesLoose(options, _excluded$B);
    return (Array.isArray(props) ? props : [props]).map((animatedProp) => `${animatedProp} ${typeof durationOption === "string" ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === "string" ? delay : formatMs(delay)}`).join(",");
  };
  return _extends({
    getAutoHeightDuration,
    create
  }, inputTransitions, {
    easing: mergedEasing,
    duration: mergedDuration
  });
}
const zIndex = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
const zIndex$1 = zIndex;
const _excluded$A = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function createTheme(options = {}, ...args) {
  const {
    mixins: mixinsInput = {},
    palette: paletteInput = {},
    transitions: transitionsInput = {},
    typography: typographyInput = {}
  } = options, other = _objectWithoutPropertiesLoose(options, _excluded$A);
  if (options.vars) {
    throw new Error(formatMuiErrorMessage(18));
  }
  const palette = createPalette(paletteInput);
  const systemTheme = createTheme$1(options);
  let muiTheme = deepmerge(systemTheme, {
    mixins: createMixins(systemTheme.breakpoints, mixinsInput),
    palette,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: shadows.slice(),
    typography: createTypography(palette, typographyInput),
    transitions: createTransitions(transitionsInput),
    zIndex: _extends({}, zIndex$1)
  });
  muiTheme = deepmerge(muiTheme, other);
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  muiTheme.unstable_sxConfig = _extends({}, defaultSxConfig$1, other == null ? void 0 : other.unstable_sxConfig);
  muiTheme.unstable_sx = function sx(props) {
    return styleFunctionSx({
      sx: props,
      theme: this
    });
  };
  return muiTheme;
}
const defaultTheme = createTheme();
const defaultTheme$1 = defaultTheme;
const THEME_ID = "$$material";
const rootShouldForwardProp = (prop) => shouldForwardProp(prop) && prop !== "classes";
const slotShouldForwardProp = shouldForwardProp;
const styled = createStyled({
  themeId: THEME_ID,
  defaultTheme: defaultTheme$1,
  rootShouldForwardProp
});
function useThemeProps({
  props,
  name
}) {
  return useThemeProps$1({
    props,
    name,
    defaultTheme: defaultTheme$1,
    themeId: THEME_ID
  });
}
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
const config = {
  disabled: false
};
const TransitionGroupContext = React__default.createContext(null);
var forceReflow = function forceReflow2(node2) {
  return node2.scrollTop;
};
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout2 = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout2;
    if (timeout2 != null && typeof timeout2 !== "number") {
      exit = timeout2.exit;
      enter = timeout2.enter;
      appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node2 = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
          if (node2)
            forceReflow(node2);
        }
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : ReactDOM.findDOMNode(this);
    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
    this.setNextCallback(handler);
    var node2 = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
    if (!node2 || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node2, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout2 != null) {
      setTimeout(this.nextCallback, timeout2);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children = _this$props.children;
    _this$props.in;
    _this$props.mountOnEnter;
    _this$props.unmountOnExit;
    _this$props.appear;
    _this$props.enter;
    _this$props.exit;
    _this$props.timeout;
    _this$props.addEndListener;
    _this$props.onEnter;
    _this$props.onEntering;
    _this$props.onEntered;
    _this$props.onExit;
    _this$props.onExiting;
    _this$props.onExited;
    _this$props.nodeRef;
    var childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ React__default.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === "function" ? children(status, childProps) : React__default.cloneElement(React__default.Children.only(children), childProps))
    );
  };
  return Transition2;
}(React__default.Component);
Transition.contextType = TransitionGroupContext;
Transition.propTypes = {};
function noop() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
const Transition$1 = Transition;
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function getChildMapping(children, mapFn) {
  var mapper = function mapper2(child) {
    return mapFn && reactExports.isValidElement(child) ? mapFn(child) : child;
  };
  var result = /* @__PURE__ */ Object.create(null);
  if (children)
    reactExports.Children.map(children, function(c2) {
      return c2;
    }).forEach(function(child) {
      result[child.key] = mapper(child);
    });
  return result;
}
function mergeChildMappings(prev2, next2) {
  prev2 = prev2 || {};
  next2 = next2 || {};
  function getValueForKey(key) {
    return key in next2 ? next2[key] : prev2[key];
  }
  var nextKeysPending = /* @__PURE__ */ Object.create(null);
  var pendingKeys = [];
  for (var prevKey in prev2) {
    if (prevKey in next2) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }
  var i;
  var childMapping = {};
  for (var nextKey in next2) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }
  return childMapping;
}
function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}
function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function(child) {
    return reactExports.cloneElement(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, "appear", props),
      enter: getProp(child, "enter", props),
      exit: getProp(child, "exit", props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function(key) {
    var child = children[key];
    if (!reactExports.isValidElement(child))
      return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = reactExports.isValidElement(prevChild) && !prevChild.props.in;
    if (hasNext && (!hasPrev || isLeaving)) {
      children[key] = reactExports.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      children[key] = reactExports.cloneElement(child, {
        in: false
      });
    } else if (hasNext && hasPrev && reactExports.isValidElement(prevChild)) {
      children[key] = reactExports.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    }
  });
  return children;
}
var values = Object.values || function(obj) {
  return Object.keys(obj).map(function(k2) {
    return obj[k2];
  });
};
var defaultProps = {
  component: "div",
  childFactory: function childFactory(child) {
    return child;
  }
};
var TransitionGroup = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(TransitionGroup2, _React$Component);
  function TransitionGroup2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited,
      firstRender: true
    };
    return _this;
  }
  var _proto = TransitionGroup2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };
  TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };
  _proto.handleExited = function handleExited(child, node2) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping)
      return;
    if (child.props.onExited) {
      child.props.onExited(node2);
    }
    if (this.mounted) {
      this.setState(function(state) {
        var children = _extends({}, state.children);
        delete children[child.key];
        return {
          children
        };
      });
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, Component = _this$props.component, childFactory2 = _this$props.childFactory, props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory2);
    delete props.appear;
    delete props.enter;
    delete props.exit;
    if (Component === null) {
      return /* @__PURE__ */ React__default.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, children);
    }
    return /* @__PURE__ */ React__default.createElement(TransitionGroupContext.Provider, {
      value: contextValue
    }, /* @__PURE__ */ React__default.createElement(Component, props, children));
  };
  return TransitionGroup2;
}(React__default.Component);
TransitionGroup.propTypes = {};
TransitionGroup.defaultProps = defaultProps;
const TransitionGroup$1 = TransitionGroup;
function Ripple(props) {
  const {
    className,
    classes,
    pulsate = false,
    rippleX,
    rippleY,
    rippleSize,
    in: inProp,
    onExited,
    timeout
  } = props;
  const [leaving, setLeaving] = reactExports.useState(false);
  const rippleClassName = clsx(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  const rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  const childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  if (!inProp && !leaving) {
    setLeaving(true);
  }
  reactExports.useEffect(() => {
    if (!inProp && onExited != null) {
      const timeoutId = setTimeout(onExited, timeout);
      return () => {
        clearTimeout(timeoutId);
      };
    }
    return void 0;
  }, [onExited, inProp, timeout]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
    className: rippleClassName,
    style: rippleStyles,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: childClassName
    })
  });
}
const touchRippleClasses = generateUtilityClasses("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]);
const _excluded$z = ["center", "classes", "className"];
let _ = (t2) => t2, _t, _t2, _t3, _t4;
const DURATION = 550;
const DELAY_RIPPLE = 80;
const enterKeyframe = keyframes(_t || (_t = _`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`));
const exitKeyframe = keyframes(_t2 || (_t2 = _`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`));
const pulsateKeyframe = keyframes(_t3 || (_t3 = _`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`));
const TouchRippleRoot = styled("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
});
const TouchRippleRipple = styled(Ripple, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(_t4 || (_t4 = _`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), touchRippleClasses.rippleVisible, enterKeyframe, DURATION, ({
  theme
}) => theme.transitions.easing.easeInOut, touchRippleClasses.ripplePulsate, ({
  theme
}) => theme.transitions.duration.shorter, touchRippleClasses.child, touchRippleClasses.childLeaving, exitKeyframe, DURATION, ({
  theme
}) => theme.transitions.easing.easeInOut, touchRippleClasses.childPulsate, pulsateKeyframe, ({
  theme
}) => theme.transitions.easing.easeInOut);
const TouchRipple = /* @__PURE__ */ reactExports.forwardRef(function TouchRipple2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTouchRipple"
  });
  const {
    center: centerProp = false,
    classes = {},
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$z);
  const [ripples, setRipples] = reactExports.useState([]);
  const nextKey = reactExports.useRef(0);
  const rippleCallback = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]);
  const ignoringMouseDown = reactExports.useRef(false);
  const startTimer = reactExports.useRef(0);
  const startTimerCommit = reactExports.useRef(null);
  const container = reactExports.useRef(null);
  reactExports.useEffect(() => {
    return () => {
      if (startTimer.current) {
        clearTimeout(startTimer.current);
      }
    };
  }, []);
  const startCommit = reactExports.useCallback((params) => {
    const {
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize,
      cb
    } = params;
    setRipples((oldRipples) => [...oldRipples, /* @__PURE__ */ jsxRuntimeExports.jsx(TouchRippleRipple, {
      classes: {
        ripple: clsx(classes.ripple, touchRippleClasses.ripple),
        rippleVisible: clsx(classes.rippleVisible, touchRippleClasses.rippleVisible),
        ripplePulsate: clsx(classes.ripplePulsate, touchRippleClasses.ripplePulsate),
        child: clsx(classes.child, touchRippleClasses.child),
        childLeaving: clsx(classes.childLeaving, touchRippleClasses.childLeaving),
        childPulsate: clsx(classes.childPulsate, touchRippleClasses.childPulsate)
      },
      timeout: DURATION,
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize
    }, nextKey.current)]);
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  const start = reactExports.useCallback((event = {}, options = {}, cb = () => {
  }) => {
    const {
      pulsate: pulsate2 = false,
      center = centerProp || options.pulsate,
      fakeElement = false
      // For test purposes
    } = options;
    if ((event == null ? void 0 : event.type) === "mousedown" && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }
    if ((event == null ? void 0 : event.type) === "touchstart") {
      ignoringMouseDown.current = true;
    }
    const element = fakeElement ? null : container.current;
    const rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let rippleX;
    let rippleY;
    let rippleSize;
    if (center || event === void 0 || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      const {
        clientX,
        clientY
      } = event.touches && event.touches.length > 0 ? event.touches[0] : event;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }
    if (center) {
      rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);
      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    }
    if (event != null && event.touches) {
      if (startTimerCommit.current === null) {
        startTimerCommit.current = () => {
          startCommit({
            pulsate: pulsate2,
            rippleX,
            rippleY,
            rippleSize,
            cb
          });
        };
        startTimer.current = setTimeout(() => {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        }, DELAY_RIPPLE);
      }
    } else {
      startCommit({
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize,
        cb
      });
    }
  }, [centerProp, startCommit]);
  const pulsate = reactExports.useCallback(() => {
    start({}, {
      pulsate: true
    });
  }, [start]);
  const stop = reactExports.useCallback((event, cb) => {
    clearTimeout(startTimer.current);
    if ((event == null ? void 0 : event.type) === "touchend" && startTimerCommit.current) {
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.current = setTimeout(() => {
        stop(event, cb);
      });
      return;
    }
    startTimerCommit.current = null;
    setRipples((oldRipples) => {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }
      return oldRipples;
    });
    rippleCallback.current = cb;
  }, []);
  reactExports.useImperativeHandle(ref, () => ({
    pulsate,
    start,
    stop
  }), [pulsate, start, stop]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TouchRippleRoot, _extends({
    className: clsx(touchRippleClasses.root, classes.root, className),
    ref: container
  }, other, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionGroup$1, {
      component: null,
      exit: true,
      children: ripples
    })
  }));
});
const TouchRipple$1 = TouchRipple;
function getButtonBaseUtilityClass(slot) {
  return generateUtilityClass("MuiButtonBase", slot);
}
const buttonBaseClasses = generateUtilityClasses("MuiButtonBase", ["root", "disabled", "focusVisible"]);
const _excluded$y = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"];
const useUtilityClasses$s = (ownerState) => {
  const {
    disabled,
    focusVisible,
    focusVisibleClassName,
    classes
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible"]
  };
  const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);
  if (focusVisible && focusVisibleClassName) {
    composedClasses.root += ` ${focusVisibleClassName}`;
  }
  return composedClasses;
};
const ButtonBaseRoot = styled("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${buttonBaseClasses.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
});
const ButtonBase = /* @__PURE__ */ reactExports.forwardRef(function ButtonBase2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiButtonBase"
  });
  const {
    action,
    centerRipple = false,
    children,
    className,
    component = "button",
    disabled = false,
    disableRipple = false,
    disableTouchRipple = false,
    focusRipple = false,
    LinkComponent = "a",
    onBlur,
    onClick,
    onContextMenu,
    onDragLeave,
    onFocus,
    onFocusVisible,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    tabIndex = 0,
    TouchRippleProps,
    touchRippleRef,
    type
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$y);
  const buttonRef = reactExports.useRef(null);
  const rippleRef = reactExports.useRef(null);
  const handleRippleRef = useForkRef(rippleRef, touchRippleRef);
  const {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = reactExports.useState(false);
  if (disabled && focusVisible) {
    setFocusVisible(false);
  }
  reactExports.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), []);
  const [mountedState, setMountedState] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setMountedState(true);
  }, []);
  const enableTouchRipple = mountedState && !disableRipple && !disabled;
  reactExports.useEffect(() => {
    if (focusVisible && focusRipple && !disableRipple && mountedState) {
      rippleRef.current.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible, mountedState]);
  function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
    return useEventCallback((event) => {
      if (eventCallback) {
        eventCallback(event);
      }
      const ignore = skipRippleAction;
      if (!ignore && rippleRef.current) {
        rippleRef.current[rippleAction](event);
      }
      return true;
    });
  }
  const handleMouseDown = useRippleHandler("start", onMouseDown);
  const handleContextMenu = useRippleHandler("stop", onContextMenu);
  const handleDragLeave = useRippleHandler("stop", onDragLeave);
  const handleMouseUp = useRippleHandler("stop", onMouseUp);
  const handleMouseLeave = useRippleHandler("stop", (event) => {
    if (focusVisible) {
      event.preventDefault();
    }
    if (onMouseLeave) {
      onMouseLeave(event);
    }
  });
  const handleTouchStart = useRippleHandler("start", onTouchStart);
  const handleTouchEnd = useRippleHandler("stop", onTouchEnd);
  const handleTouchMove = useRippleHandler("stop", onTouchMove);
  const handleBlur = useRippleHandler("stop", (event) => {
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  }, false);
  const handleFocus = useEventCallback((event) => {
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }
    if (onFocus) {
      onFocus(event);
    }
  });
  const isNonNativeButton = () => {
    const button = buttonRef.current;
    return component && component !== "button" && !(button.tagName === "A" && button.href);
  };
  const keydownRef = reactExports.useRef(false);
  const handleKeyDown2 = useEventCallback((event) => {
    if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === " ") {
      keydownRef.current = true;
      rippleRef.current.stop(event, () => {
        rippleRef.current.start(event);
      });
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === " ") {
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === "Enter" && !disabled) {
      event.preventDefault();
      if (onClick) {
        onClick(event);
      }
    }
  });
  const handleKeyUp = useEventCallback((event) => {
    if (focusRipple && event.key === " " && rippleRef.current && focusVisible && !event.defaultPrevented) {
      keydownRef.current = false;
      rippleRef.current.stop(event, () => {
        rippleRef.current.pulsate(event);
      });
    }
    if (onKeyUp) {
      onKeyUp(event);
    }
    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === " " && !event.defaultPrevented) {
      onClick(event);
    }
  });
  let ComponentProp = component;
  if (ComponentProp === "button" && (other.href || other.to)) {
    ComponentProp = LinkComponent;
  }
  const buttonProps = {};
  if (ComponentProp === "button") {
    buttonProps.type = type === void 0 ? "button" : type;
    buttonProps.disabled = disabled;
  } else {
    if (!other.href && !other.to) {
      buttonProps.role = "button";
    }
    if (disabled) {
      buttonProps["aria-disabled"] = disabled;
    }
  }
  const handleRef = useForkRef(ref, focusVisibleRef, buttonRef);
  const ownerState = _extends({}, props, {
    centerRipple,
    component,
    disabled,
    disableRipple,
    disableTouchRipple,
    focusRipple,
    tabIndex,
    focusVisible
  });
  const classes = useUtilityClasses$s(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ButtonBaseRoot, _extends({
    as: ComponentProp,
    className: clsx(classes.root, className),
    ownerState,
    onBlur: handleBlur,
    onClick,
    onContextMenu: handleContextMenu,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown2,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex,
    type
  }, buttonProps, other, {
    children: [children, enableTouchRipple ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ jsxRuntimeExports.jsx(TouchRipple$1, _extends({
        ref: handleRippleRef,
        center: centerRipple
      }, TouchRippleProps))
    ) : null]
  }));
});
const ButtonBase$1 = ButtonBase;
function getButtonUtilityClass(slot) {
  return generateUtilityClass("MuiButton", slot);
}
const buttonClasses = generateUtilityClasses("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]);
const buttonClasses$1 = buttonClasses;
const ButtonGroupContext = /* @__PURE__ */ reactExports.createContext({});
const ButtonGroupContext$1 = ButtonGroupContext;
const ButtonGroupButtonContext = /* @__PURE__ */ reactExports.createContext(void 0);
const ButtonGroupButtonContext$1 = ButtonGroupButtonContext;
const _excluded$x = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"];
const useUtilityClasses$r = (ownerState) => {
  const {
    color: color2,
    disableElevation,
    fullWidth,
    size,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, `${variant}${capitalize(color2)}`, `size${capitalize(size)}`, `${variant}Size${capitalize(size)}`, color2 === "inherit" && "colorInherit", disableElevation && "disableElevation", fullWidth && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${capitalize(size)}`],
    endIcon: ["endIcon", `iconSize${capitalize(size)}`]
  };
  const composedClasses = composeClasses(slots, getButtonUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
const commonIconStyles = (ownerState) => _extends({}, ownerState.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, ownerState.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, ownerState.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
});
const ButtonRoot = styled(ButtonBase$1, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], styles2[`${ownerState.variant}${capitalize(ownerState.color)}`], styles2[`size${capitalize(ownerState.size)}`], styles2[`${ownerState.variant}Size${capitalize(ownerState.size)}`], ownerState.color === "inherit" && styles2.colorInherit, ownerState.disableElevation && styles2.disableElevation, ownerState.fullWidth && styles2.fullWidth];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$palette$getCon, _theme$palette;
  const inheritContainedBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey[300] : theme.palette.grey[800];
  const inheritContainedHoverBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey.A100 : theme.palette.grey[700];
  return _extends({}, theme.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: theme.transitions.duration.short
    }),
    "&:hover": _extends({
      textDecoration: "none",
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, ownerState.variant === "text" && ownerState.color !== "inherit" && {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, ownerState.variant === "outlined" && ownerState.color !== "inherit" && {
      border: `1px solid ${(theme.vars || theme).palette[ownerState.color].main}`,
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, ownerState.variant === "contained" && {
      backgroundColor: theme.vars ? theme.vars.palette.Button.inheritContainedHoverBg : inheritContainedHoverBackgroundColor,
      boxShadow: (theme.vars || theme).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (theme.vars || theme).shadows[2],
        backgroundColor: (theme.vars || theme).palette.grey[300]
      }
    }, ownerState.variant === "contained" && ownerState.color !== "inherit" && {
      backgroundColor: (theme.vars || theme).palette[ownerState.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (theme.vars || theme).palette[ownerState.color].main
      }
    }),
    "&:active": _extends({}, ownerState.variant === "contained" && {
      boxShadow: (theme.vars || theme).shadows[8]
    }),
    [`&.${buttonClasses$1.focusVisible}`]: _extends({}, ownerState.variant === "contained" && {
      boxShadow: (theme.vars || theme).shadows[6]
    }),
    [`&.${buttonClasses$1.disabled}`]: _extends({
      color: (theme.vars || theme).palette.action.disabled
    }, ownerState.variant === "outlined" && {
      border: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`
    }, ownerState.variant === "contained" && {
      color: (theme.vars || theme).palette.action.disabled,
      boxShadow: (theme.vars || theme).shadows[0],
      backgroundColor: (theme.vars || theme).palette.action.disabledBackground
    })
  }, ownerState.variant === "text" && {
    padding: "6px 8px"
  }, ownerState.variant === "text" && ownerState.color !== "inherit" && {
    color: (theme.vars || theme).palette[ownerState.color].main
  }, ownerState.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, ownerState.variant === "outlined" && ownerState.color !== "inherit" && {
    color: (theme.vars || theme).palette[ownerState.color].main,
    border: theme.vars ? `1px solid rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.5)` : `1px solid ${alpha(theme.palette[ownerState.color].main, 0.5)}`
  }, ownerState.variant === "contained" && {
    color: theme.vars ? (
      // this is safe because grey does not change between default light/dark mode
      theme.vars.palette.text.primary
    ) : (_theme$palette$getCon = (_theme$palette = theme.palette).getContrastText) == null ? void 0 : _theme$palette$getCon.call(_theme$palette, theme.palette.grey[300]),
    backgroundColor: theme.vars ? theme.vars.palette.Button.inheritContainedBg : inheritContainedBackgroundColor,
    boxShadow: (theme.vars || theme).shadows[2]
  }, ownerState.variant === "contained" && ownerState.color !== "inherit" && {
    color: (theme.vars || theme).palette[ownerState.color].contrastText,
    backgroundColor: (theme.vars || theme).palette[ownerState.color].main
  }, ownerState.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, ownerState.size === "small" && ownerState.variant === "text" && {
    padding: "4px 5px",
    fontSize: theme.typography.pxToRem(13)
  }, ownerState.size === "large" && ownerState.variant === "text" && {
    padding: "8px 11px",
    fontSize: theme.typography.pxToRem(15)
  }, ownerState.size === "small" && ownerState.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: theme.typography.pxToRem(13)
  }, ownerState.size === "large" && ownerState.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: theme.typography.pxToRem(15)
  }, ownerState.size === "small" && ownerState.variant === "contained" && {
    padding: "4px 10px",
    fontSize: theme.typography.pxToRem(13)
  }, ownerState.size === "large" && ownerState.variant === "contained" && {
    padding: "8px 22px",
    fontSize: theme.typography.pxToRem(15)
  }, ownerState.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState
}) => ownerState.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${buttonClasses$1.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${buttonClasses$1.disabled}`]: {
    boxShadow: "none"
  }
});
const ButtonStartIcon = styled("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.startIcon, styles2[`iconSize${capitalize(ownerState.size)}`]];
  }
})(({
  ownerState
}) => _extends({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, ownerState.size === "small" && {
  marginLeft: -2
}, commonIconStyles(ownerState)));
const ButtonEndIcon = styled("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.endIcon, styles2[`iconSize${capitalize(ownerState.size)}`]];
  }
})(({
  ownerState
}) => _extends({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, ownerState.size === "small" && {
  marginRight: -2
}, commonIconStyles(ownerState)));
const Button = /* @__PURE__ */ reactExports.forwardRef(function Button2(inProps, ref) {
  const contextProps = reactExports.useContext(ButtonGroupContext$1);
  const buttonGroupButtonContextPositionClassName = reactExports.useContext(ButtonGroupButtonContext$1);
  const resolvedProps = resolveProps(contextProps, inProps);
  const props = useThemeProps({
    props: resolvedProps,
    name: "MuiButton"
  });
  const {
    children,
    color: color2 = "primary",
    component = "button",
    className,
    disabled = false,
    disableElevation = false,
    disableFocusRipple = false,
    endIcon: endIconProp,
    focusVisibleClassName,
    fullWidth = false,
    size = "medium",
    startIcon: startIconProp,
    type,
    variant = "text"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$x);
  const ownerState = _extends({}, props, {
    color: color2,
    component,
    disabled,
    disableElevation,
    disableFocusRipple,
    fullWidth,
    size,
    type,
    variant
  });
  const classes = useUtilityClasses$r(ownerState);
  const startIcon = startIconProp && /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonStartIcon, {
    className: classes.startIcon,
    ownerState,
    children: startIconProp
  });
  const endIcon = endIconProp && /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonEndIcon, {
    className: classes.endIcon,
    ownerState,
    children: endIconProp
  });
  const positionClassName = buttonGroupButtonContextPositionClassName || "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ButtonRoot, _extends({
    ownerState,
    className: clsx(contextProps.className, classes.root, className, positionClassName),
    component,
    disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
    ref,
    type
  }, other, {
    classes,
    children: [startIcon, children, endIcon]
  }));
});
const Button$1 = Button;
function useTheme() {
  const theme = useTheme$1(defaultTheme$1);
  return theme[THEME_ID] || theme;
}
const getOverlayAlpha = (elevation) => {
  let alphaValue;
  if (elevation < 1) {
    alphaValue = 5.11916 * elevation ** 2;
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }
  return (alphaValue / 100).toFixed(2);
};
function getSvgIconUtilityClass(slot) {
  return generateUtilityClass("MuiSvgIcon", slot);
}
generateUtilityClasses("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const _excluded$w = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"];
const useUtilityClasses$q = (ownerState) => {
  const {
    color: color2,
    fontSize,
    classes
  } = ownerState;
  const slots = {
    root: ["root", color2 !== "inherit" && `color${capitalize(color2)}`, `fontSize${capitalize(fontSize)}`]
  };
  return composeClasses(slots, getSvgIconUtilityClass, classes);
};
const SvgIconRoot = styled("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.color !== "inherit" && styles2[`color${capitalize(ownerState.color)}`], styles2[`fontSize${capitalize(ownerState.fontSize)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$transitions, _theme$transitions$cr, _theme$transitions2, _theme$typography, _theme$typography$pxT, _theme$typography2, _theme$typography2$px, _theme$typography3, _theme$typography3$px, _palette$ownerState$c, _palette, _palette2, _palette3;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // e.g. heroicons uses fill="none" and stroke="currentColor"
    fill: ownerState.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (_theme$transitions = theme.transitions) == null || (_theme$transitions$cr = _theme$transitions.create) == null ? void 0 : _theme$transitions$cr.call(_theme$transitions, "fill", {
      duration: (_theme$transitions2 = theme.transitions) == null || (_theme$transitions2 = _theme$transitions2.duration) == null ? void 0 : _theme$transitions2.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((_theme$typography = theme.typography) == null || (_theme$typography$pxT = _theme$typography.pxToRem) == null ? void 0 : _theme$typography$pxT.call(_theme$typography, 20)) || "1.25rem",
      medium: ((_theme$typography2 = theme.typography) == null || (_theme$typography2$px = _theme$typography2.pxToRem) == null ? void 0 : _theme$typography2$px.call(_theme$typography2, 24)) || "1.5rem",
      large: ((_theme$typography3 = theme.typography) == null || (_theme$typography3$px = _theme$typography3.pxToRem) == null ? void 0 : _theme$typography3$px.call(_theme$typography3, 35)) || "2.1875rem"
    }[ownerState.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (_palette$ownerState$c = (_palette = (theme.vars || theme).palette) == null || (_palette = _palette[ownerState.color]) == null ? void 0 : _palette.main) != null ? _palette$ownerState$c : {
      action: (_palette2 = (theme.vars || theme).palette) == null || (_palette2 = _palette2.action) == null ? void 0 : _palette2.active,
      disabled: (_palette3 = (theme.vars || theme).palette) == null || (_palette3 = _palette3.action) == null ? void 0 : _palette3.disabled,
      inherit: void 0
    }[ownerState.color]
  };
});
const SvgIcon = /* @__PURE__ */ reactExports.forwardRef(function SvgIcon2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiSvgIcon"
  });
  const {
    children,
    className,
    color: color2 = "inherit",
    component = "svg",
    fontSize = "medium",
    htmlColor,
    inheritViewBox = false,
    titleAccess,
    viewBox = "0 0 24 24"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$w);
  const hasSvgAsChild = /* @__PURE__ */ reactExports.isValidElement(children) && children.type === "svg";
  const ownerState = _extends({}, props, {
    color: color2,
    component,
    fontSize,
    instanceFontSize: inProps.fontSize,
    inheritViewBox,
    viewBox,
    hasSvgAsChild
  });
  const more = {};
  if (!inheritViewBox) {
    more.viewBox = viewBox;
  }
  const classes = useUtilityClasses$q(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SvgIconRoot, _extends({
    as: component,
    className: clsx(classes.root, className),
    focusable: "false",
    color: htmlColor,
    "aria-hidden": titleAccess ? void 0 : true,
    role: titleAccess ? "img" : void 0,
    ref
  }, more, other, hasSvgAsChild && children.props, {
    ownerState,
    children: [hasSvgAsChild ? children.props.children : children, titleAccess ? /* @__PURE__ */ jsxRuntimeExports.jsx("title", {
      children: titleAccess
    }) : null]
  }));
});
SvgIcon.muiName = "SvgIcon";
function createSvgIcon(path, displayName) {
  function Component(props, ref) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SvgIcon, _extends({
      "data-testid": `${displayName}Icon`,
      ref
    }, props, {
      children: path
    }));
  }
  Component.muiName = SvgIcon.muiName;
  return /* @__PURE__ */ reactExports.memo(/* @__PURE__ */ reactExports.forwardRef(Component));
}
const reflow = (node2) => node2.scrollTop;
function getTransitionProps(props, options) {
  var _style$transitionDura, _style$transitionTimi;
  const {
    timeout,
    easing: easing2,
    style: style2 = {}
  } = props;
  return {
    duration: (_style$transitionDura = style2.transitionDuration) != null ? _style$transitionDura : typeof timeout === "number" ? timeout : timeout[options.mode] || 0,
    easing: (_style$transitionTimi = style2.transitionTimingFunction) != null ? _style$transitionTimi : typeof easing2 === "object" ? easing2[options.mode] : easing2,
    delay: style2.transitionDelay
  };
}
function getPaperUtilityClass(slot) {
  return generateUtilityClass("MuiPaper", slot);
}
generateUtilityClasses("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const _excluded$v = ["className", "component", "elevation", "square", "variant"];
const useUtilityClasses$p = (ownerState) => {
  const {
    square,
    elevation,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, !square && "rounded", variant === "elevation" && `elevation${elevation}`]
  };
  return composeClasses(slots, getPaperUtilityClass, classes);
};
const PaperRoot = styled("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], !ownerState.square && styles2.rounded, ownerState.variant === "elevation" && styles2[`elevation${ownerState.elevation}`]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$vars$overlays;
  return _extends({
    backgroundColor: (theme.vars || theme).palette.background.paper,
    color: (theme.vars || theme).palette.text.primary,
    transition: theme.transitions.create("box-shadow")
  }, !ownerState.square && {
    borderRadius: theme.shape.borderRadius
  }, ownerState.variant === "outlined" && {
    border: `1px solid ${(theme.vars || theme).palette.divider}`
  }, ownerState.variant === "elevation" && _extends({
    boxShadow: (theme.vars || theme).shadows[ownerState.elevation]
  }, !theme.vars && theme.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${alpha("#fff", getOverlayAlpha(ownerState.elevation))}, ${alpha("#fff", getOverlayAlpha(ownerState.elevation))})`
  }, theme.vars && {
    backgroundImage: (_theme$vars$overlays = theme.vars.overlays) == null ? void 0 : _theme$vars$overlays[ownerState.elevation]
  }));
});
const Paper = /* @__PURE__ */ reactExports.forwardRef(function Paper2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPaper"
  });
  const {
    className,
    component = "div",
    elevation = 1,
    square = false,
    variant = "elevation"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$v);
  const ownerState = _extends({}, props, {
    component,
    elevation,
    square,
    variant
  });
  const classes = useUtilityClasses$p(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PaperRoot, _extends({
    as: component,
    ownerState,
    className: clsx(classes.root, className),
    ref
  }, other));
});
const Paper$1 = Paper;
function getAlertUtilityClass(slot) {
  return generateUtilityClass("MuiAlert", slot);
}
const alertClasses = generateUtilityClasses("MuiAlert", ["root", "action", "icon", "message", "filled", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]);
const alertClasses$1 = alertClasses;
function getIconButtonUtilityClass(slot) {
  return generateUtilityClass("MuiIconButton", slot);
}
const iconButtonClasses = generateUtilityClasses("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]);
const _excluded$u = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"];
const useUtilityClasses$o = (ownerState) => {
  const {
    classes,
    disabled,
    color: color2,
    edge,
    size
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", color2 !== "default" && `color${capitalize(color2)}`, edge && `edge${capitalize(edge)}`, `size${capitalize(size)}`]
  };
  return composeClasses(slots, getIconButtonUtilityClass, classes);
};
const IconButtonRoot = styled(ButtonBase$1, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.color !== "default" && styles2[`color${capitalize(ownerState.color)}`], ownerState.edge && styles2[`edge${capitalize(ownerState.edge)}`], styles2[`size${capitalize(ownerState.size)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: theme.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  overflow: "visible",
  // Explicitly set the default value to solve a bug on IE11.
  color: (theme.vars || theme).palette.action.active,
  transition: theme.transitions.create("background-color", {
    duration: theme.transitions.duration.shortest
  })
}, !ownerState.disableRipple && {
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, ownerState.edge === "start" && {
  marginLeft: ownerState.size === "small" ? -3 : -12
}, ownerState.edge === "end" && {
  marginRight: ownerState.size === "small" ? -3 : -12
}), ({
  theme,
  ownerState
}) => {
  var _palette;
  const palette = (_palette = (theme.vars || theme).palette) == null ? void 0 : _palette[ownerState.color];
  return _extends({}, ownerState.color === "inherit" && {
    color: "inherit"
  }, ownerState.color !== "inherit" && ownerState.color !== "default" && _extends({
    color: palette == null ? void 0 : palette.main
  }, !ownerState.disableRipple && {
    "&:hover": _extends({}, palette && {
      backgroundColor: theme.vars ? `rgba(${palette.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(palette.main, theme.palette.action.hoverOpacity)
    }, {
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    })
  }), ownerState.size === "small" && {
    padding: 5,
    fontSize: theme.typography.pxToRem(18)
  }, ownerState.size === "large" && {
    padding: 12,
    fontSize: theme.typography.pxToRem(28)
  }, {
    [`&.${iconButtonClasses.disabled}`]: {
      backgroundColor: "transparent",
      color: (theme.vars || theme).palette.action.disabled
    }
  });
});
const IconButton = /* @__PURE__ */ reactExports.forwardRef(function IconButton2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiIconButton"
  });
  const {
    edge = false,
    children,
    className,
    color: color2 = "default",
    disabled = false,
    disableFocusRipple = false,
    size = "medium"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$u);
  const ownerState = _extends({}, props, {
    edge,
    color: color2,
    disabled,
    disableFocusRipple,
    size
  });
  const classes = useUtilityClasses$o(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(IconButtonRoot, _extends({
    className: clsx(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled,
    ref,
    ownerState
  }, other, {
    children
  }));
});
const IconButton$1 = IconButton;
const SuccessOutlinedIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), "SuccessOutlined");
const ReportProblemOutlinedIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), "ReportProblemOutlined");
const ErrorOutlineIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ErrorOutline");
const InfoOutlinedIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), "InfoOutlined");
const ClearIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
const _excluded$t = ["action", "children", "className", "closeText", "color", "components", "componentsProps", "icon", "iconMapping", "onClose", "role", "severity", "slotProps", "slots", "variant"];
const useUtilityClasses$n = (ownerState) => {
  const {
    variant,
    color: color2,
    severity,
    classes
  } = ownerState;
  const slots = {
    root: ["root", `${variant}${capitalize(color2 || severity)}`, `${variant}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return composeClasses(slots, getAlertUtilityClass, classes);
};
const AlertRoot = styled(Paper$1, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], styles2[`${ownerState.variant}${capitalize(ownerState.color || ownerState.severity)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  const getColor = theme.palette.mode === "light" ? darken : lighten;
  const getBackgroundColor = theme.palette.mode === "light" ? lighten : darken;
  const color2 = ownerState.color || ownerState.severity;
  return _extends({}, theme.typography.body2, {
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px"
  }, color2 && ownerState.variant === "standard" && {
    color: theme.vars ? theme.vars.palette.Alert[`${color2}Color`] : getColor(theme.palette[color2].light, 0.6),
    backgroundColor: theme.vars ? theme.vars.palette.Alert[`${color2}StandardBg`] : getBackgroundColor(theme.palette[color2].light, 0.9),
    [`& .${alertClasses$1.icon}`]: theme.vars ? {
      color: theme.vars.palette.Alert[`${color2}IconColor`]
    } : {
      color: theme.palette[color2].main
    }
  }, color2 && ownerState.variant === "outlined" && {
    color: theme.vars ? theme.vars.palette.Alert[`${color2}Color`] : getColor(theme.palette[color2].light, 0.6),
    border: `1px solid ${(theme.vars || theme).palette[color2].light}`,
    [`& .${alertClasses$1.icon}`]: theme.vars ? {
      color: theme.vars.palette.Alert[`${color2}IconColor`]
    } : {
      color: theme.palette[color2].main
    }
  }, color2 && ownerState.variant === "filled" && _extends({
    fontWeight: theme.typography.fontWeightMedium
  }, theme.vars ? {
    color: theme.vars.palette.Alert[`${color2}FilledColor`],
    backgroundColor: theme.vars.palette.Alert[`${color2}FilledBg`]
  } : {
    backgroundColor: theme.palette.mode === "dark" ? theme.palette[color2].dark : theme.palette[color2].main,
    color: theme.palette.getContrastText(theme.palette[color2].main)
  }));
});
const AlertIcon = styled("div", {
  name: "MuiAlert",
  slot: "Icon",
  overridesResolver: (props, styles2) => styles2.icon
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
});
const AlertMessage = styled("div", {
  name: "MuiAlert",
  slot: "Message",
  overridesResolver: (props, styles2) => styles2.message
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
});
const AlertAction = styled("div", {
  name: "MuiAlert",
  slot: "Action",
  overridesResolver: (props, styles2) => styles2.action
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
});
const defaultIconMapping = {
  success: /* @__PURE__ */ jsxRuntimeExports.jsx(SuccessOutlinedIcon, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ jsxRuntimeExports.jsx(ReportProblemOutlinedIcon, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorOutlineIcon, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ jsxRuntimeExports.jsx(InfoOutlinedIcon, {
    fontSize: "inherit"
  })
};
const Alert = /* @__PURE__ */ reactExports.forwardRef(function Alert2(inProps, ref) {
  var _ref, _slots$closeButton, _ref2, _slots$closeIcon, _slotProps$closeButto, _slotProps$closeIcon;
  const props = useThemeProps({
    props: inProps,
    name: "MuiAlert"
  });
  const {
    action,
    children,
    className,
    closeText = "Close",
    color: color2,
    components = {},
    componentsProps = {},
    icon,
    iconMapping = defaultIconMapping,
    onClose,
    role = "alert",
    severity = "success",
    slotProps = {},
    slots = {},
    variant = "standard"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$t);
  const ownerState = _extends({}, props, {
    color: color2,
    severity,
    variant
  });
  const classes = useUtilityClasses$n(ownerState);
  const AlertCloseButton = (_ref = (_slots$closeButton = slots.closeButton) != null ? _slots$closeButton : components.CloseButton) != null ? _ref : IconButton$1;
  const AlertCloseIcon = (_ref2 = (_slots$closeIcon = slots.closeIcon) != null ? _slots$closeIcon : components.CloseIcon) != null ? _ref2 : ClearIcon;
  const closeButtonProps = (_slotProps$closeButto = slotProps.closeButton) != null ? _slotProps$closeButto : componentsProps.closeButton;
  const closeIconProps = (_slotProps$closeIcon = slotProps.closeIcon) != null ? _slotProps$closeIcon : componentsProps.closeIcon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertRoot, _extends({
    role,
    elevation: 0,
    ownerState,
    className: clsx(classes.root, className),
    ref
  }, other, {
    children: [icon !== false ? /* @__PURE__ */ jsxRuntimeExports.jsx(AlertIcon, {
      ownerState,
      className: classes.icon,
      children: icon || iconMapping[severity] || defaultIconMapping[severity]
    }) : null, /* @__PURE__ */ jsxRuntimeExports.jsx(AlertMessage, {
      ownerState,
      className: classes.message,
      children
    }), action != null ? /* @__PURE__ */ jsxRuntimeExports.jsx(AlertAction, {
      ownerState,
      className: classes.action,
      children: action
    }) : null, action == null && onClose ? /* @__PURE__ */ jsxRuntimeExports.jsx(AlertAction, {
      ownerState,
      className: classes.action,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCloseButton, _extends({
        size: "small",
        "aria-label": closeText,
        title: closeText,
        color: "inherit",
        onClick: onClose
      }, closeButtonProps, {
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCloseIcon, _extends({
          fontSize: "small"
        }, closeIconProps))
      }))
    }) : null]
  }));
});
const Alert$1 = Alert;
function getTypographyUtilityClass(slot) {
  return generateUtilityClass("MuiTypography", slot);
}
generateUtilityClasses("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const _excluded$s = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"];
const useUtilityClasses$m = (ownerState) => {
  const {
    align,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, ownerState.align !== "inherit" && `align${capitalize(align)}`, gutterBottom && "gutterBottom", noWrap && "noWrap", paragraph && "paragraph"]
  };
  return composeClasses(slots, getTypographyUtilityClass, classes);
};
const TypographyRoot = styled("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.variant && styles2[ownerState.variant], ownerState.align !== "inherit" && styles2[`align${capitalize(ownerState.align)}`], ownerState.noWrap && styles2.noWrap, ownerState.gutterBottom && styles2.gutterBottom, ownerState.paragraph && styles2.paragraph];
  }
})(({
  theme,
  ownerState
}) => _extends({
  margin: 0
}, ownerState.variant === "inherit" && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: "inherit"
}, ownerState.variant !== "inherit" && theme.typography[ownerState.variant], ownerState.align !== "inherit" && {
  textAlign: ownerState.align
}, ownerState.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, ownerState.gutterBottom && {
  marginBottom: "0.35em"
}, ownerState.paragraph && {
  marginBottom: 16
}));
const defaultVariantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
};
const colorTransformations = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
};
const transformDeprecatedColors = (color2) => {
  return colorTransformations[color2] || color2;
};
const Typography = /* @__PURE__ */ reactExports.forwardRef(function Typography2(inProps, ref) {
  const themeProps = useThemeProps({
    props: inProps,
    name: "MuiTypography"
  });
  const color2 = transformDeprecatedColors(themeProps.color);
  const props = extendSxProp(_extends({}, themeProps, {
    color: color2
  }));
  const {
    align = "inherit",
    className,
    component,
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    variant = "body1",
    variantMapping = defaultVariantMapping
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$s);
  const ownerState = _extends({}, props, {
    align,
    color: color2,
    className,
    component,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    variantMapping
  });
  const Component = component || (paragraph ? "p" : variantMapping[variant] || defaultVariantMapping[variant]) || "span";
  const classes = useUtilityClasses$m(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TypographyRoot, _extends({
    as: Component,
    ref,
    ownerState,
    className: clsx(classes.root, className)
  }, other));
});
const Typography$1 = Typography;
function isHostComponent(element) {
  return typeof element === "string";
}
function appendOwnerState(elementType, otherProps, ownerState) {
  if (elementType === void 0 || isHostComponent(elementType)) {
    return otherProps;
  }
  return _extends({}, otherProps, {
    ownerState: _extends({}, otherProps.ownerState, ownerState)
  });
}
function extractEventHandlers(object, excludeKeys = []) {
  if (object === void 0) {
    return {};
  }
  const result = {};
  Object.keys(object).filter((prop) => prop.match(/^on[A-Z]/) && typeof object[prop] === "function" && !excludeKeys.includes(prop)).forEach((prop) => {
    result[prop] = object[prop];
  });
  return result;
}
function resolveComponentProps(componentProps, ownerState, slotState) {
  if (typeof componentProps === "function") {
    return componentProps(ownerState, slotState);
  }
  return componentProps;
}
function omitEventHandlers(object) {
  if (object === void 0) {
    return {};
  }
  const result = {};
  Object.keys(object).filter((prop) => !(prop.match(/^on[A-Z]/) && typeof object[prop] === "function")).forEach((prop) => {
    result[prop] = object[prop];
  });
  return result;
}
function mergeSlotProps(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    const joinedClasses2 = clsx(additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
    const mergedStyle2 = _extends({}, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
    const props2 = _extends({}, additionalProps, externalForwardedProps, externalSlotProps);
    if (joinedClasses2.length > 0) {
      props2.className = joinedClasses2;
    }
    if (Object.keys(mergedStyle2).length > 0) {
      props2.style = mergedStyle2;
    }
    return {
      props: props2,
      internalRef: void 0
    };
  }
  const eventHandlers = extractEventHandlers(_extends({}, externalForwardedProps, externalSlotProps));
  const componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);
  const joinedClasses = clsx(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
  const mergedStyle = _extends({}, internalSlotProps == null ? void 0 : internalSlotProps.style, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
  const props = _extends({}, internalSlotProps, additionalProps, otherPropsWithoutEventHandlers, componentsPropsWithoutEventHandlers);
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}
const _excluded$r = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function useSlotProps(parameters) {
  var _parameters$additiona;
  const {
    elementType,
    externalSlotProps,
    ownerState,
    skipResolvingSlotProps = false
  } = parameters, rest = _objectWithoutPropertiesLoose(parameters, _excluded$r);
  const resolvedComponentsProps = skipResolvingSlotProps ? {} : resolveComponentProps(externalSlotProps, ownerState);
  const {
    props: mergedProps,
    internalRef
  } = mergeSlotProps(_extends({}, rest, {
    externalSlotProps: resolvedComponentsProps
  }));
  const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref);
  const props = appendOwnerState(elementType, _extends({}, mergedProps, {
    ref
  }), ownerState);
  return props;
}
function mapEventPropToEvent(eventProp) {
  return eventProp.substring(2).toLowerCase();
}
function clickedRootScrollbar(event, doc) {
  return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
}
function ClickAwayListener(props) {
  const {
    children,
    disableReactTree = false,
    mouseEvent = "onClick",
    onClickAway,
    touchEvent = "onTouchEnd"
  } = props;
  const movedRef = reactExports.useRef(false);
  const nodeRef = reactExports.useRef(null);
  const activatedRef = reactExports.useRef(false);
  const syntheticEventRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    setTimeout(() => {
      activatedRef.current = true;
    }, 0);
    return () => {
      activatedRef.current = false;
    };
  }, []);
  const handleRef = useForkRef(
    // @ts-expect-error TODO upstream fix
    children.ref,
    nodeRef
  );
  const handleClickAway = useEventCallback((event) => {
    const insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;
    const doc = ownerDocument(nodeRef.current);
    if (!activatedRef.current || !nodeRef.current || "clientX" in event && clickedRootScrollbar(event, doc)) {
      return;
    }
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }
    let insideDOM;
    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      insideDOM = !doc.documentElement.contains(
        // @ts-expect-error returns `false` as intended when not dispatched from a Node
        event.target
      ) || nodeRef.current.contains(
        // @ts-expect-error returns `false` as intended when not dispatched from a Node
        event.target
      );
    }
    if (!insideDOM && (disableReactTree || !insideReactTree)) {
      onClickAway(event);
    }
  });
  const createHandleSynthetic = (handlerName) => (event) => {
    syntheticEventRef.current = true;
    const childrenPropsHandler = children.props[handlerName];
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const childrenProps = {
    ref: handleRef
  };
  if (touchEvent !== false) {
    childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
  }
  reactExports.useEffect(() => {
    if (touchEvent !== false) {
      const mappedTouchEvent = mapEventPropToEvent(touchEvent);
      const doc = ownerDocument(nodeRef.current);
      const handleTouchMove = () => {
        movedRef.current = true;
      };
      doc.addEventListener(mappedTouchEvent, handleClickAway);
      doc.addEventListener("touchmove", handleTouchMove);
      return () => {
        doc.removeEventListener(mappedTouchEvent, handleClickAway);
        doc.removeEventListener("touchmove", handleTouchMove);
      };
    }
    return void 0;
  }, [handleClickAway, touchEvent]);
  if (mouseEvent !== false) {
    childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
  }
  reactExports.useEffect(() => {
    if (mouseEvent !== false) {
      const mappedMouseEvent = mapEventPropToEvent(mouseEvent);
      const doc = ownerDocument(nodeRef.current);
      doc.addEventListener(mappedMouseEvent, handleClickAway);
      return () => {
        doc.removeEventListener(mappedMouseEvent, handleClickAway);
      };
    }
    return void 0;
  }, [handleClickAway, mouseEvent]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, {
    children: /* @__PURE__ */ reactExports.cloneElement(children, childrenProps)
  });
}
const candidatesSelector = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function getTabIndex(node2) {
  const tabindexAttr = parseInt(node2.getAttribute("tabindex") || "", 10);
  if (!Number.isNaN(tabindexAttr)) {
    return tabindexAttr;
  }
  if (node2.contentEditable === "true" || (node2.nodeName === "AUDIO" || node2.nodeName === "VIDEO" || node2.nodeName === "DETAILS") && node2.getAttribute("tabindex") === null) {
    return 0;
  }
  return node2.tabIndex;
}
function isNonTabbableRadio(node2) {
  if (node2.tagName !== "INPUT" || node2.type !== "radio") {
    return false;
  }
  if (!node2.name) {
    return false;
  }
  const getRadio = (selector) => node2.ownerDocument.querySelector(`input[type="radio"]${selector}`);
  let roving = getRadio(`[name="${node2.name}"]:checked`);
  if (!roving) {
    roving = getRadio(`[name="${node2.name}"]`);
  }
  return roving !== node2;
}
function isNodeMatchingSelectorFocusable(node2) {
  if (node2.disabled || node2.tagName === "INPUT" && node2.type === "hidden" || isNonTabbableRadio(node2)) {
    return false;
  }
  return true;
}
function defaultGetTabbable(root) {
  const regularTabNodes = [];
  const orderedTabNodes = [];
  Array.from(root.querySelectorAll(candidatesSelector)).forEach((node2, i) => {
    const nodeTabIndex = getTabIndex(node2);
    if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node2)) {
      return;
    }
    if (nodeTabIndex === 0) {
      regularTabNodes.push(node2);
    } else {
      orderedTabNodes.push({
        documentOrder: i,
        tabIndex: nodeTabIndex,
        node: node2
      });
    }
  });
  return orderedTabNodes.sort((a2, b3) => a2.tabIndex === b3.tabIndex ? a2.documentOrder - b3.documentOrder : a2.tabIndex - b3.tabIndex).map((a2) => a2.node).concat(regularTabNodes);
}
function defaultIsEnabled() {
  return true;
}
function FocusTrap(props) {
  const {
    children,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    getTabbable = defaultGetTabbable,
    isEnabled = defaultIsEnabled,
    open
  } = props;
  const ignoreNextEnforceFocus = reactExports.useRef(false);
  const sentinelStart = reactExports.useRef(null);
  const sentinelEnd = reactExports.useRef(null);
  const nodeToRestore = reactExports.useRef(null);
  const reactFocusEventTarget = reactExports.useRef(null);
  const activated = reactExports.useRef(false);
  const rootRef = reactExports.useRef(null);
  const handleRef = useForkRef(children.ref, rootRef);
  const lastKeydown = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    activated.current = !disableAutoFocus;
  }, [disableAutoFocus, open]);
  reactExports.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    const doc = ownerDocument(rootRef.current);
    if (!rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute("tabIndex")) {
        rootRef.current.setAttribute("tabIndex", "-1");
      }
      if (activated.current) {
        rootRef.current.focus();
      }
    }
    return () => {
      if (!disableRestoreFocus) {
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          ignoreNextEnforceFocus.current = true;
          nodeToRestore.current.focus();
        }
        nodeToRestore.current = null;
      }
    };
  }, [open]);
  reactExports.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    const doc = ownerDocument(rootRef.current);
    const loopFocus = (nativeEvent) => {
      lastKeydown.current = nativeEvent;
      if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== "Tab") {
        return;
      }
      if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
        ignoreNextEnforceFocus.current = true;
        if (sentinelEnd.current) {
          sentinelEnd.current.focus();
        }
      }
    };
    const contain = () => {
      const rootElement = rootRef.current;
      if (rootElement === null) {
        return;
      }
      if (!doc.hasFocus() || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }
      if (rootElement.contains(doc.activeElement)) {
        return;
      }
      if (disableEnforceFocus && doc.activeElement !== sentinelStart.current && doc.activeElement !== sentinelEnd.current) {
        return;
      }
      if (doc.activeElement !== reactFocusEventTarget.current) {
        reactFocusEventTarget.current = null;
      } else if (reactFocusEventTarget.current !== null) {
        return;
      }
      if (!activated.current) {
        return;
      }
      let tabbable = [];
      if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
        tabbable = getTabbable(rootRef.current);
      }
      if (tabbable.length > 0) {
        var _lastKeydown$current, _lastKeydown$current2;
        const isShiftTab = Boolean(((_lastKeydown$current = lastKeydown.current) == null ? void 0 : _lastKeydown$current.shiftKey) && ((_lastKeydown$current2 = lastKeydown.current) == null ? void 0 : _lastKeydown$current2.key) === "Tab");
        const focusNext = tabbable[0];
        const focusPrevious = tabbable[tabbable.length - 1];
        if (typeof focusNext !== "string" && typeof focusPrevious !== "string") {
          if (isShiftTab) {
            focusPrevious.focus();
          } else {
            focusNext.focus();
          }
        }
      } else {
        rootElement.focus();
      }
    };
    doc.addEventListener("focusin", contain);
    doc.addEventListener("keydown", loopFocus, true);
    const interval = setInterval(() => {
      if (doc.activeElement && doc.activeElement.tagName === "BODY") {
        contain();
      }
    }, 50);
    return () => {
      clearInterval(interval);
      doc.removeEventListener("focusin", contain);
      doc.removeEventListener("keydown", loopFocus, true);
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);
  const onFocus = (event) => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
    reactFocusEventTarget.current = event.target;
    const childrenPropsHandler = children.props.onFocus;
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const handleFocusSentinel = (event) => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelStart,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ reactExports.cloneElement(children, {
      ref: handleRef,
      onFocus
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelEnd,
      "data-testid": "sentinelEnd"
    })]
  });
}
function getContainer$1(container) {
  return typeof container === "function" ? container() : container;
}
const Portal = /* @__PURE__ */ reactExports.forwardRef(function Portal2(props, forwardedRef) {
  const {
    children,
    container,
    disablePortal = false
  } = props;
  const [mountNode, setMountNode] = reactExports.useState(null);
  const handleRef = useForkRef(/* @__PURE__ */ reactExports.isValidElement(children) ? children.ref : null, forwardedRef);
  useEnhancedEffect(() => {
    if (!disablePortal) {
      setMountNode(getContainer$1(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect(() => {
    if (mountNode && !disablePortal) {
      setRef(forwardedRef, mountNode);
      return () => {
        setRef(forwardedRef, null);
      };
    }
    return void 0;
  }, [forwardedRef, mountNode, disablePortal]);
  if (disablePortal) {
    if (/* @__PURE__ */ reactExports.isValidElement(children)) {
      const newProps = {
        ref: handleRef
      };
      return /* @__PURE__ */ reactExports.cloneElement(children, newProps);
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, {
      children
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, {
    children: mountNode ? /* @__PURE__ */ reactDomExports.createPortal(children, mountNode) : mountNode
  });
});
function isOverflowing(container) {
  const doc = ownerDocument(container);
  if (doc.body === container) {
    return ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
  }
  return container.scrollHeight > container.clientHeight;
}
function ariaHidden(element, show) {
  if (show) {
    element.setAttribute("aria-hidden", "true");
  } else {
    element.removeAttribute("aria-hidden");
  }
}
function getPaddingRight(element) {
  return parseInt(ownerWindow(element).getComputedStyle(element).paddingRight, 10) || 0;
}
function isAriaHiddenForbiddenOnElement(element) {
  const forbiddenTagNames = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"];
  const isForbiddenTagName = forbiddenTagNames.indexOf(element.tagName) !== -1;
  const isInputHidden = element.tagName === "INPUT" && element.getAttribute("type") === "hidden";
  return isForbiddenTagName || isInputHidden;
}
function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude, show) {
  const blacklist = [mountElement, currentElement, ...elementsToExclude];
  [].forEach.call(container.children, (element) => {
    const isNotExcludedElement = blacklist.indexOf(element) === -1;
    const isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);
    if (isNotExcludedElement && isNotForbiddenElement) {
      ariaHidden(element, show);
    }
  });
}
function findIndexOf(items, callback) {
  let idx = -1;
  items.some((item, index) => {
    if (callback(item)) {
      idx = index;
      return true;
    }
    return false;
  });
  return idx;
}
function handleContainer(containerInfo, props) {
  const restoreStyle = [];
  const container = containerInfo.container;
  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      const scrollbarSize = getScrollbarSize(ownerDocument(container));
      restoreStyle.push({
        value: container.style.paddingRight,
        property: "padding-right",
        el: container
      });
      container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`;
      const fixedElements2 = ownerDocument(container).querySelectorAll(".mui-fixed");
      [].forEach.call(fixedElements2, (element) => {
        restoreStyle.push({
          value: element.style.paddingRight,
          property: "padding-right",
          el: element
        });
        element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
      });
    }
    let scrollContainer;
    if (container.parentNode instanceof DocumentFragment) {
      scrollContainer = ownerDocument(container).body;
    } else {
      const parent = container.parentElement;
      const containerWindow = ownerWindow(container);
      scrollContainer = (parent == null ? void 0 : parent.nodeName) === "HTML" && containerWindow.getComputedStyle(parent).overflowY === "scroll" ? parent : container;
    }
    restoreStyle.push({
      value: scrollContainer.style.overflow,
      property: "overflow",
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowX,
      property: "overflow-x",
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowY,
      property: "overflow-y",
      el: scrollContainer
    });
    scrollContainer.style.overflow = "hidden";
  }
  const restore = () => {
    restoreStyle.forEach(({
      value,
      el,
      property
    }) => {
      if (value) {
        el.style.setProperty(property, value);
      } else {
        el.style.removeProperty(property);
      }
    });
  };
  return restore;
}
function getHiddenSiblings(container) {
  const hiddenSiblings = [];
  [].forEach.call(container.children, (element) => {
    if (element.getAttribute("aria-hidden") === "true") {
      hiddenSiblings.push(element);
    }
  });
  return hiddenSiblings;
}
class ModalManager {
  constructor() {
    this.containers = void 0;
    this.modals = void 0;
    this.modals = [];
    this.containers = [];
  }
  add(modal, container) {
    let modalIndex = this.modals.indexOf(modal);
    if (modalIndex !== -1) {
      return modalIndex;
    }
    modalIndex = this.modals.length;
    this.modals.push(modal);
    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false);
    }
    const hiddenSiblings = getHiddenSiblings(container);
    ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
    const containerIndex = findIndexOf(this.containers, (item) => item.container === container);
    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }
    this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblings
    });
    return modalIndex;
  }
  mount(modal, props) {
    const containerIndex = findIndexOf(this.containers, (item) => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer(containerInfo, props);
    }
  }
  remove(modal, ariaHiddenState = true) {
    const modalIndex = this.modals.indexOf(modal);
    if (modalIndex === -1) {
      return modalIndex;
    }
    const containerIndex = findIndexOf(this.containers, (item) => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1);
    if (containerInfo.modals.length === 0) {
      if (containerInfo.restore) {
        containerInfo.restore();
      }
      if (modal.modalRef) {
        ariaHidden(modal.modalRef, ariaHiddenState);
      }
      ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
      this.containers.splice(containerIndex, 1);
    } else {
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1];
      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false);
      }
    }
    return modalIndex;
  }
  isTopModal(modal) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
  }
}
function getContainer(container) {
  return typeof container === "function" ? container() : container;
}
function getHasTransition(children) {
  return children ? children.props.hasOwnProperty("in") : false;
}
const defaultManager = new ModalManager();
function useModal(parameters) {
  const {
    container,
    disableEscapeKeyDown = false,
    disableScrollLock = false,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager = defaultManager,
    closeAfterTransition = false,
    onTransitionEnter,
    onTransitionExited,
    children,
    onClose,
    open,
    rootRef
  } = parameters;
  const modal = reactExports.useRef({});
  const mountNodeRef = reactExports.useRef(null);
  const modalRef = reactExports.useRef(null);
  const handleRef = useForkRef(modalRef, rootRef);
  const [exited, setExited] = reactExports.useState(!open);
  const hasTransition = getHasTransition(children);
  let ariaHiddenProp = true;
  if (parameters["aria-hidden"] === "false" || parameters["aria-hidden"] === false) {
    ariaHiddenProp = false;
  }
  const getDoc = () => ownerDocument(mountNodeRef.current);
  const getModal = () => {
    modal.current.modalRef = modalRef.current;
    modal.current.mount = mountNodeRef.current;
    return modal.current;
  };
  const handleMounted = () => {
    manager.mount(getModal(), {
      disableScrollLock
    });
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  };
  const handleOpen = useEventCallback(() => {
    const resolvedContainer = getContainer(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer);
    if (modalRef.current) {
      handleMounted();
    }
  });
  const isTopModal = reactExports.useCallback(() => manager.isTopModal(getModal()), [manager]);
  const handlePortalRef = useEventCallback((node2) => {
    mountNodeRef.current = node2;
    if (!node2) {
      return;
    }
    if (open && isTopModal()) {
      handleMounted();
    } else if (modalRef.current) {
      ariaHidden(modalRef.current, ariaHiddenProp);
    }
  });
  const handleClose = reactExports.useCallback(() => {
    manager.remove(getModal(), ariaHiddenProp);
  }, [ariaHiddenProp, manager]);
  reactExports.useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);
  reactExports.useEffect(() => {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);
  const createHandleKeyDown = (otherHandlers) => (event) => {
    var _otherHandlers$onKeyD;
    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null || _otherHandlers$onKeyD.call(otherHandlers, event);
    if (event.key !== "Escape" || event.which === 229 || // Wait until IME is settled.
    !isTopModal()) {
      return;
    }
    if (!disableEscapeKeyDown) {
      event.stopPropagation();
      if (onClose) {
        onClose(event, "escapeKeyDown");
      }
    }
  };
  const createHandleBackdropClick = (otherHandlers) => (event) => {
    var _otherHandlers$onClic;
    (_otherHandlers$onClic = otherHandlers.onClick) == null || _otherHandlers$onClic.call(otherHandlers, event);
    if (event.target !== event.currentTarget) {
      return;
    }
    if (onClose) {
      onClose(event, "backdropClick");
    }
  };
  const getRootProps = (otherHandlers = {}) => {
    const propsEventHandlers = extractEventHandlers(parameters);
    delete propsEventHandlers.onTransitionEnter;
    delete propsEventHandlers.onTransitionExited;
    const externalEventHandlers = _extends({}, propsEventHandlers, otherHandlers);
    return _extends({
      role: "presentation"
    }, externalEventHandlers, {
      onKeyDown: createHandleKeyDown(externalEventHandlers),
      ref: handleRef
    });
  };
  const getBackdropProps = (otherHandlers = {}) => {
    const externalEventHandlers = otherHandlers;
    return _extends({
      "aria-hidden": true
    }, externalEventHandlers, {
      onClick: createHandleBackdropClick(externalEventHandlers),
      open
    });
  };
  const getTransitionProps2 = () => {
    const handleEnter = () => {
      setExited(false);
      if (onTransitionEnter) {
        onTransitionEnter();
      }
    };
    const handleExited = () => {
      setExited(true);
      if (onTransitionExited) {
        onTransitionExited();
      }
      if (closeAfterTransition) {
        handleClose();
      }
    };
    return {
      onEnter: createChainedFunction(handleEnter, children == null ? void 0 : children.props.onEnter),
      onExited: createChainedFunction(handleExited, children == null ? void 0 : children.props.onExited)
    };
  };
  return {
    getRootProps,
    getBackdropProps,
    getTransitionProps: getTransitionProps2,
    rootRef: handleRef,
    portalRef: handlePortalRef,
    isTopModal,
    exited,
    hasTransition
  };
}
function useSnackbar(parameters = {}) {
  const {
    autoHideDuration = null,
    disableWindowBlurListener = false,
    onClose,
    open,
    resumeHideDuration
  } = parameters;
  const timerAutoHide = reactExports.useRef();
  reactExports.useEffect(() => {
    if (!open) {
      return void 0;
    }
    function handleKeyDown2(nativeEvent) {
      if (!nativeEvent.defaultPrevented) {
        if (nativeEvent.key === "Escape" || nativeEvent.key === "Esc") {
          onClose == null || onClose(nativeEvent, "escapeKeyDown");
        }
      }
    }
    document.addEventListener("keydown", handleKeyDown2);
    return () => {
      document.removeEventListener("keydown", handleKeyDown2);
    };
  }, [open, onClose]);
  const handleClose = useEventCallback((event, reason) => {
    onClose == null || onClose(event, reason);
  });
  const setAutoHideTimer = useEventCallback((autoHideDurationParam) => {
    if (!onClose || autoHideDurationParam == null) {
      return;
    }
    clearTimeout(timerAutoHide.current);
    timerAutoHide.current = setTimeout(() => {
      handleClose(null, "timeout");
    }, autoHideDurationParam);
  });
  reactExports.useEffect(() => {
    if (open) {
      setAutoHideTimer(autoHideDuration);
    }
    return () => {
      clearTimeout(timerAutoHide.current);
    };
  }, [open, autoHideDuration, setAutoHideTimer]);
  const handleClickAway = (event) => {
    onClose == null || onClose(event, "clickaway");
  };
  const handlePause = () => {
    clearTimeout(timerAutoHide.current);
  };
  const handleResume = reactExports.useCallback(() => {
    if (autoHideDuration != null) {
      setAutoHideTimer(resumeHideDuration != null ? resumeHideDuration : autoHideDuration * 0.5);
    }
  }, [autoHideDuration, resumeHideDuration, setAutoHideTimer]);
  const createHandleBlur = (otherHandlers) => (event) => {
    const onBlurCallback = otherHandlers.onBlur;
    onBlurCallback == null || onBlurCallback(event);
    handleResume();
  };
  const createHandleFocus = (otherHandlers) => (event) => {
    const onFocusCallback = otherHandlers.onFocus;
    onFocusCallback == null || onFocusCallback(event);
    handlePause();
  };
  const createMouseEnter = (otherHandlers) => (event) => {
    const onMouseEnterCallback = otherHandlers.onMouseEnter;
    onMouseEnterCallback == null || onMouseEnterCallback(event);
    handlePause();
  };
  const createMouseLeave = (otherHandlers) => (event) => {
    const onMouseLeaveCallback = otherHandlers.onMouseLeave;
    onMouseLeaveCallback == null || onMouseLeaveCallback(event);
    handleResume();
  };
  reactExports.useEffect(() => {
    if (!disableWindowBlurListener && open) {
      window.addEventListener("focus", handleResume);
      window.addEventListener("blur", handlePause);
      return () => {
        window.removeEventListener("focus", handleResume);
        window.removeEventListener("blur", handlePause);
      };
    }
    return void 0;
  }, [disableWindowBlurListener, handleResume, open]);
  const getRootProps = (externalProps = {}) => {
    const externalEventHandlers = _extends({}, extractEventHandlers(parameters), extractEventHandlers(externalProps));
    return _extends({
      // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
      // See https://github.com/mui/material-ui/issues/29080
      role: "presentation"
    }, externalProps, externalEventHandlers, {
      onBlur: createHandleBlur(externalEventHandlers),
      onFocus: createHandleFocus(externalEventHandlers),
      onMouseEnter: createMouseEnter(externalEventHandlers),
      onMouseLeave: createMouseLeave(externalEventHandlers)
    });
  };
  return {
    getRootProps,
    onClickAway: handleClickAway
  };
}
const _excluded$q = ["onChange", "maxRows", "minRows", "style", "value"];
function getStyleValue(value) {
  return parseInt(value, 10) || 0;
}
const styles$2 = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function isEmpty$1(obj) {
  return obj === void 0 || obj === null || Object.keys(obj).length === 0 || obj.outerHeightStyle === 0 && !obj.overflow;
}
const TextareaAutosize = /* @__PURE__ */ reactExports.forwardRef(function TextareaAutosize2(props, forwardedRef) {
  const {
    onChange,
    maxRows,
    minRows = 1,
    style: style2,
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$q);
  const {
    current: isControlled
  } = reactExports.useRef(value != null);
  const inputRef = reactExports.useRef(null);
  const handleRef = useForkRef(forwardedRef, inputRef);
  const shadowRef = reactExports.useRef(null);
  const renders = reactExports.useRef(0);
  const [state, setState] = reactExports.useState({
    outerHeightStyle: 0
  });
  const getUpdatedState = reactExports.useCallback(() => {
    const input = inputRef.current;
    const containerWindow = ownerWindow(input);
    const computedStyle = containerWindow.getComputedStyle(input);
    if (computedStyle.width === "0px") {
      return {
        outerHeightStyle: 0
      };
    }
    const inputShallow = shadowRef.current;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || "x";
    if (inputShallow.value.slice(-1) === "\n") {
      inputShallow.value += " ";
    }
    const boxSizing2 = computedStyle.boxSizing;
    const padding2 = getStyleValue(computedStyle.paddingBottom) + getStyleValue(computedStyle.paddingTop);
    const border2 = getStyleValue(computedStyle.borderBottomWidth) + getStyleValue(computedStyle.borderTopWidth);
    const innerHeight = inputShallow.scrollHeight;
    inputShallow.value = "x";
    const singleRowHeight = inputShallow.scrollHeight;
    let outerHeight = innerHeight;
    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }
    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }
    outerHeight = Math.max(outerHeight, singleRowHeight);
    const outerHeightStyle = outerHeight + (boxSizing2 === "border-box" ? padding2 + border2 : 0);
    const overflow = Math.abs(outerHeight - innerHeight) <= 1;
    return {
      outerHeightStyle,
      overflow
    };
  }, [maxRows, minRows, props.placeholder]);
  const updateState = (prevState, newState) => {
    const {
      outerHeightStyle,
      overflow
    } = newState;
    if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow)) {
      renders.current += 1;
      return {
        overflow,
        outerHeightStyle
      };
    }
    return prevState;
  };
  const syncHeight = reactExports.useCallback(() => {
    const newState = getUpdatedState();
    if (isEmpty$1(newState)) {
      return;
    }
    setState((prevState) => updateState(prevState, newState));
  }, [getUpdatedState]);
  useEnhancedEffect(() => {
    const syncHeightWithFlushSync = () => {
      const newState = getUpdatedState();
      if (isEmpty$1(newState)) {
        return;
      }
      reactDomExports.flushSync(() => {
        setState((prevState) => updateState(prevState, newState));
      });
    };
    const handleResize = () => {
      renders.current = 0;
      syncHeightWithFlushSync();
    };
    let rAF;
    const debounceHandleResize = debounce(handleResize);
    const input = inputRef.current;
    const containerWindow = ownerWindow(input);
    containerWindow.addEventListener("resize", debounceHandleResize);
    let resizeObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(input);
    }
    return () => {
      debounceHandleResize.clear();
      cancelAnimationFrame(rAF);
      containerWindow.removeEventListener("resize", debounceHandleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [getUpdatedState]);
  useEnhancedEffect(() => {
    syncHeight();
  });
  reactExports.useEffect(() => {
    renders.current = 0;
  }, [value]);
  const handleChange = (event) => {
    renders.current = 0;
    if (!isControlled) {
      syncHeight();
    }
    if (onChange) {
      onChange(event);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("textarea", _extends({
      value,
      onChange: handleChange,
      ref: handleRef,
      rows: minRows,
      style: _extends({
        height: state.outerHeightStyle,
        // Need a large enough difference to allow scrolling.
        // This prevents infinite rendering loop.
        overflow: state.overflow ? "hidden" : void 0
      }, style2)
    }, other)), /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", {
      "aria-hidden": true,
      className: props.className,
      readOnly: true,
      ref: shadowRef,
      tabIndex: -1,
      style: _extends({}, styles$2.shadow, style2, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
function formControlState({
  props,
  states,
  muiFormControl
}) {
  return states.reduce((acc, state) => {
    acc[state] = props[state];
    if (muiFormControl) {
      if (typeof props[state] === "undefined") {
        acc[state] = muiFormControl[state];
      }
    }
    return acc;
  }, {});
}
const FormControlContext = /* @__PURE__ */ reactExports.createContext(void 0);
const FormControlContext$1 = FormControlContext;
function useFormControl() {
  return reactExports.useContext(FormControlContext$1);
}
function GlobalStyles(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalStyles$1, _extends({}, props, {
    defaultTheme: defaultTheme$1,
    themeId: THEME_ID
  }));
}
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
}
function isFilled(obj, SSR = false) {
  return obj && (hasValue(obj.value) && obj.value !== "" || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== "");
}
function isAdornedStart(obj) {
  return obj.startAdornment;
}
function getInputBaseUtilityClass(slot) {
  return generateUtilityClass("MuiInputBase", slot);
}
const inputBaseClasses = generateUtilityClasses("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
const inputBaseClasses$1 = inputBaseClasses;
const _excluded$p = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"];
const rootOverridesResolver = (props, styles2) => {
  const {
    ownerState
  } = props;
  return [styles2.root, ownerState.formControl && styles2.formControl, ownerState.startAdornment && styles2.adornedStart, ownerState.endAdornment && styles2.adornedEnd, ownerState.error && styles2.error, ownerState.size === "small" && styles2.sizeSmall, ownerState.multiline && styles2.multiline, ownerState.color && styles2[`color${capitalize(ownerState.color)}`], ownerState.fullWidth && styles2.fullWidth, ownerState.hiddenLabel && styles2.hiddenLabel];
};
const inputOverridesResolver = (props, styles2) => {
  const {
    ownerState
  } = props;
  return [styles2.input, ownerState.size === "small" && styles2.inputSizeSmall, ownerState.multiline && styles2.inputMultiline, ownerState.type === "search" && styles2.inputTypeSearch, ownerState.startAdornment && styles2.inputAdornedStart, ownerState.endAdornment && styles2.inputAdornedEnd, ownerState.hiddenLabel && styles2.inputHiddenLabel];
};
const useUtilityClasses$l = (ownerState) => {
  const {
    classes,
    color: color2,
    disabled,
    error,
    endAdornment,
    focused,
    formControl,
    fullWidth,
    hiddenLabel,
    multiline,
    readOnly,
    size,
    startAdornment,
    type
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize(color2)}`, disabled && "disabled", error && "error", fullWidth && "fullWidth", focused && "focused", formControl && "formControl", size && size !== "medium" && `size${capitalize(size)}`, multiline && "multiline", startAdornment && "adornedStart", endAdornment && "adornedEnd", hiddenLabel && "hiddenLabel", readOnly && "readOnly"],
    input: ["input", disabled && "disabled", type === "search" && "inputTypeSearch", multiline && "inputMultiline", size === "small" && "inputSizeSmall", hiddenLabel && "inputHiddenLabel", startAdornment && "inputAdornedStart", endAdornment && "inputAdornedEnd", readOnly && "readOnly"]
  };
  return composeClasses(slots, getInputBaseUtilityClass, classes);
};
const InputBaseRoot = styled("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: rootOverridesResolver
})(({
  theme,
  ownerState
}) => _extends({}, theme.typography.body1, {
  color: (theme.vars || theme).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${inputBaseClasses$1.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled,
    cursor: "default"
  }
}, ownerState.multiline && _extends({
  padding: "4px 0 5px"
}, ownerState.size === "small" && {
  paddingTop: 1
}), ownerState.fullWidth && {
  width: "100%"
}));
const InputBaseComponent = styled("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(({
  theme,
  ownerState
}) => {
  const light2 = theme.palette.mode === "light";
  const placeholder = _extends({
    color: "currentColor"
  }, theme.vars ? {
    opacity: theme.vars.opacity.inputPlaceholder
  } : {
    opacity: light2 ? 0.42 : 0.5
  }, {
    transition: theme.transitions.create("opacity", {
      duration: theme.transitions.duration.shorter
    })
  });
  const placeholderHidden = {
    opacity: "0 !important"
  };
  const placeholderVisible = theme.vars ? {
    opacity: theme.vars.opacity.inputPlaceholder
  } : {
    opacity: light2 ? 0.42 : 0.5
  };
  return _extends({
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    // Fix IE11 width issue
    animationName: "mui-auto-fill-cancel",
    animationDuration: "10ms",
    "&::-webkit-input-placeholder": placeholder,
    "&::-moz-placeholder": placeholder,
    // Firefox 19+
    "&:-ms-input-placeholder": placeholder,
    // IE11
    "&::-ms-input-placeholder": placeholder,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${inputBaseClasses$1.formControl} &`]: {
      "&::-webkit-input-placeholder": placeholderHidden,
      "&::-moz-placeholder": placeholderHidden,
      // Firefox 19+
      "&:-ms-input-placeholder": placeholderHidden,
      // IE11
      "&::-ms-input-placeholder": placeholderHidden,
      // Edge
      "&:focus::-webkit-input-placeholder": placeholderVisible,
      "&:focus::-moz-placeholder": placeholderVisible,
      // Firefox 19+
      "&:focus:-ms-input-placeholder": placeholderVisible,
      // IE11
      "&:focus::-ms-input-placeholder": placeholderVisible
      // Edge
    },
    [`&.${inputBaseClasses$1.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (theme.vars || theme).palette.text.disabled
      // Fix opacity Safari bug
    },
    "&:-webkit-autofill": {
      animationDuration: "5000s",
      animationName: "mui-auto-fill"
    }
  }, ownerState.size === "small" && {
    paddingTop: 1
  }, ownerState.multiline && {
    height: "auto",
    resize: "none",
    padding: 0,
    paddingTop: 0
  }, ownerState.type === "search" && {
    // Improve type search style.
    MozAppearance: "textfield"
  });
});
const inputGlobalStyles = /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalStyles, {
  styles: {
    "@keyframes mui-auto-fill": {
      from: {
        display: "block"
      }
    },
    "@keyframes mui-auto-fill-cancel": {
      from: {
        display: "block"
      }
    }
  }
});
const InputBase = /* @__PURE__ */ reactExports.forwardRef(function InputBase2(inProps, ref) {
  var _slotProps$input;
  const props = useThemeProps({
    props: inProps,
    name: "MuiInputBase"
  });
  const {
    "aria-describedby": ariaDescribedby,
    autoComplete,
    autoFocus,
    className,
    components = {},
    componentsProps = {},
    defaultValue,
    disabled,
    disableInjectingGlobalStyles,
    endAdornment,
    fullWidth = false,
    id,
    inputComponent = "input",
    inputProps: inputPropsProp = {},
    inputRef: inputRefProp,
    maxRows,
    minRows,
    multiline = false,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
    onKeyUp,
    placeholder,
    readOnly,
    renderSuffix,
    rows,
    slotProps = {},
    slots = {},
    startAdornment,
    type = "text",
    value: valueProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$p);
  const value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;
  const {
    current: isControlled
  } = reactExports.useRef(value != null);
  const inputRef = reactExports.useRef();
  const handleInputRefWarning = reactExports.useCallback((instance) => {
  }, []);
  const handleInputRef = useForkRef(inputRef, inputRefProp, inputPropsProp.ref, handleInputRefWarning);
  const [focused, setFocused] = reactExports.useState(false);
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  fcs.focused = muiFormControl ? muiFormControl.focused : focused;
  reactExports.useEffect(() => {
    if (!muiFormControl && disabled && focused) {
      setFocused(false);
      if (onBlur) {
        onBlur();
      }
    }
  }, [muiFormControl, disabled, focused, onBlur]);
  const onFilled = muiFormControl && muiFormControl.onFilled;
  const onEmpty = muiFormControl && muiFormControl.onEmpty;
  const checkDirty = reactExports.useCallback((obj) => {
    if (isFilled(obj)) {
      if (onFilled) {
        onFilled();
      }
    } else if (onEmpty) {
      onEmpty();
    }
  }, [onFilled, onEmpty]);
  useEnhancedEffect(() => {
    if (isControlled) {
      checkDirty({
        value
      });
    }
  }, [value, checkDirty, isControlled]);
  const handleFocus = (event) => {
    if (fcs.disabled) {
      event.stopPropagation();
      return;
    }
    if (onFocus) {
      onFocus(event);
    }
    if (inputPropsProp.onFocus) {
      inputPropsProp.onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    } else {
      setFocused(true);
    }
  };
  const handleBlur = (event) => {
    if (onBlur) {
      onBlur(event);
    }
    if (inputPropsProp.onBlur) {
      inputPropsProp.onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    } else {
      setFocused(false);
    }
  };
  const handleChange = (event, ...args) => {
    if (!isControlled) {
      const element = event.target || inputRef.current;
      if (element == null) {
        throw new Error(formatMuiErrorMessage(1));
      }
      checkDirty({
        value: element.value
      });
    }
    if (inputPropsProp.onChange) {
      inputPropsProp.onChange(event, ...args);
    }
    if (onChange) {
      onChange(event, ...args);
    }
  };
  reactExports.useEffect(() => {
    checkDirty(inputRef.current);
  }, []);
  const handleClick = (event) => {
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }
    if (onClick) {
      onClick(event);
    }
  };
  let InputComponent = inputComponent;
  let inputProps = inputPropsProp;
  if (multiline && InputComponent === "input") {
    if (rows) {
      inputProps = _extends({
        type: void 0,
        minRows: rows,
        maxRows: rows
      }, inputProps);
    } else {
      inputProps = _extends({
        type: void 0,
        maxRows,
        minRows
      }, inputProps);
    }
    InputComponent = TextareaAutosize;
  }
  const handleAutoFill = (event) => {
    checkDirty(event.animationName === "mui-auto-fill-cancel" ? inputRef.current : {
      value: "x"
    });
  };
  reactExports.useEffect(() => {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);
  const ownerState = _extends({}, props, {
    color: fcs.color || "primary",
    disabled: fcs.disabled,
    endAdornment,
    error: fcs.error,
    focused: fcs.focused,
    formControl: muiFormControl,
    fullWidth,
    hiddenLabel: fcs.hiddenLabel,
    multiline,
    size: fcs.size,
    startAdornment,
    type
  });
  const classes = useUtilityClasses$l(ownerState);
  const Root = slots.root || components.Root || InputBaseRoot;
  const rootProps = slotProps.root || componentsProps.root || {};
  const Input3 = slots.input || components.Input || InputBaseComponent;
  inputProps = _extends({}, inputProps, (_slotProps$input = slotProps.input) != null ? _slotProps$input : componentsProps.input);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
    children: [!disableInjectingGlobalStyles && inputGlobalStyles, /* @__PURE__ */ jsxRuntimeExports.jsxs(Root, _extends({}, rootProps, !isHostComponent(Root) && {
      ownerState: _extends({}, ownerState, rootProps.ownerState)
    }, {
      ref,
      onClick: handleClick
    }, other, {
      className: clsx(classes.root, rootProps.className, className, readOnly && "MuiInputBase-readOnly"),
      children: [startAdornment, /* @__PURE__ */ jsxRuntimeExports.jsx(FormControlContext$1.Provider, {
        value: null,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input3, _extends({
          ownerState,
          "aria-invalid": fcs.error,
          "aria-describedby": ariaDescribedby,
          autoComplete,
          autoFocus,
          defaultValue,
          disabled: fcs.disabled,
          id,
          onAnimationStart: handleAutoFill,
          name,
          placeholder,
          readOnly,
          required: fcs.required,
          rows,
          value,
          onKeyDown,
          onKeyUp,
          type
        }, inputProps, !isHostComponent(Input3) && {
          as: InputComponent,
          ownerState: _extends({}, ownerState, inputProps.ownerState)
        }, {
          ref: handleInputRef,
          className: clsx(classes.input, inputProps.className, readOnly && "MuiInputBase-readOnly"),
          onBlur: handleBlur,
          onChange: handleChange,
          onFocus: handleFocus
        }))
      }), endAdornment, renderSuffix ? renderSuffix(_extends({}, fcs, {
        startAdornment
      })) : null]
    }))]
  });
});
const InputBase$1 = InputBase;
function getInputUtilityClass(slot) {
  return generateUtilityClass("MuiInput", slot);
}
const inputClasses = _extends({}, inputBaseClasses$1, generateUtilityClasses("MuiInput", ["root", "underline", "input"]));
const inputClasses$1 = inputClasses;
function getOutlinedInputUtilityClass(slot) {
  return generateUtilityClass("MuiOutlinedInput", slot);
}
const outlinedInputClasses = _extends({}, inputBaseClasses$1, generateUtilityClasses("MuiOutlinedInput", ["root", "notchedOutline", "input"]));
const outlinedInputClasses$1 = outlinedInputClasses;
function getFilledInputUtilityClass(slot) {
  return generateUtilityClass("MuiFilledInput", slot);
}
const filledInputClasses = _extends({}, inputBaseClasses$1, generateUtilityClasses("MuiFilledInput", ["root", "underline", "input"]));
const filledInputClasses$1 = filledInputClasses;
const ArrowDropDownIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");
const _excluded$o = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
const styles$1 = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
const Fade = /* @__PURE__ */ reactExports.forwardRef(function Fade2(props, ref) {
  const theme = useTheme();
  const defaultTimeout = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    addEndListener,
    appear = true,
    children,
    easing: easing2,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style: style2,
    timeout = defaultTimeout,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition$1
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$o);
  const nodeRef = reactExports.useRef(null);
  const handleRef = useForkRef(nodeRef, children.ref, ref);
  const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
    if (callback) {
      const node2 = nodeRef.current;
      if (maybeIsAppearing === void 0) {
        callback(node2);
      } else {
        callback(node2, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node2, isAppearing) => {
    reflow(node2);
    const transitionProps = getTransitionProps({
      style: style2,
      timeout,
      easing: easing2
    }, {
      mode: "enter"
    });
    node2.style.webkitTransition = theme.transitions.create("opacity", transitionProps);
    node2.style.transition = theme.transitions.create("opacity", transitionProps);
    if (onEnter) {
      onEnter(node2, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback((node2) => {
    const transitionProps = getTransitionProps({
      style: style2,
      timeout,
      easing: easing2
    }, {
      mode: "exit"
    });
    node2.style.webkitTransition = theme.transitions.create("opacity", transitionProps);
    node2.style.transition = theme.transitions.create("opacity", transitionProps);
    if (onExit) {
      onExit(node2);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = (next2) => {
    if (addEndListener) {
      addEndListener(nodeRef.current, next2);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, _extends({
    appear,
    in: inProp,
    nodeRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout
  }, other, {
    children: (state, childProps) => {
      return /* @__PURE__ */ reactExports.cloneElement(children, _extends({
        style: _extends({
          opacity: 0,
          visibility: state === "exited" && !inProp ? "hidden" : void 0
        }, styles$1[state], style2, children.props.style),
        ref: handleRef
      }, childProps));
    }
  }));
});
const Fade$1 = Fade;
function getBackdropUtilityClass(slot) {
  return generateUtilityClass("MuiBackdrop", slot);
}
generateUtilityClasses("MuiBackdrop", ["root", "invisible"]);
const _excluded$n = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"];
const useUtilityClasses$k = (ownerState) => {
  const {
    classes,
    invisible
  } = ownerState;
  const slots = {
    root: ["root", invisible && "invisible"]
  };
  return composeClasses(slots, getBackdropUtilityClass, classes);
};
const BackdropRoot = styled("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.invisible && styles2.invisible];
  }
})(({
  ownerState
}) => _extends({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, ownerState.invisible && {
  backgroundColor: "transparent"
}));
const Backdrop = /* @__PURE__ */ reactExports.forwardRef(function Backdrop2(inProps, ref) {
  var _slotProps$root, _ref, _slots$root;
  const props = useThemeProps({
    props: inProps,
    name: "MuiBackdrop"
  });
  const {
    children,
    className,
    component = "div",
    components = {},
    componentsProps = {},
    invisible = false,
    open,
    slotProps = {},
    slots = {},
    TransitionComponent = Fade$1,
    transitionDuration
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$n);
  const ownerState = _extends({}, props, {
    component,
    invisible
  });
  const classes = useUtilityClasses$k(ownerState);
  const rootSlotProps = (_slotProps$root = slotProps.root) != null ? _slotProps$root : componentsProps.root;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, _extends({
    in: open,
    timeout: transitionDuration
  }, other, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(BackdropRoot, _extends({
      "aria-hidden": true
    }, rootSlotProps, {
      as: (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : component,
      className: clsx(classes.root, className, rootSlotProps == null ? void 0 : rootSlotProps.className),
      ownerState: _extends({}, ownerState, rootSlotProps == null ? void 0 : rootSlotProps.ownerState),
      classes,
      ref,
      children
    }))
  }));
});
const Backdrop$1 = Backdrop;
function getSwitchBaseUtilityClass(slot) {
  return generateUtilityClass("PrivateSwitchBase", slot);
}
generateUtilityClasses("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const _excluded$m = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"];
const useUtilityClasses$j = (ownerState) => {
  const {
    classes,
    checked,
    disabled,
    edge
  } = ownerState;
  const slots = {
    root: ["root", checked && "checked", disabled && "disabled", edge && `edge${capitalize(edge)}`],
    input: ["input"]
  };
  return composeClasses(slots, getSwitchBaseUtilityClass, classes);
};
const SwitchBaseRoot = styled(ButtonBase$1)(({
  ownerState
}) => _extends({
  padding: 9,
  borderRadius: "50%"
}, ownerState.edge === "start" && {
  marginLeft: ownerState.size === "small" ? -3 : -12
}, ownerState.edge === "end" && {
  marginRight: ownerState.size === "small" ? -3 : -12
}));
const SwitchBaseInput = styled("input", {
  shouldForwardProp: rootShouldForwardProp
})({
  cursor: "inherit",
  position: "absolute",
  opacity: 0,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
});
const SwitchBase = /* @__PURE__ */ reactExports.forwardRef(function SwitchBase2(props, ref) {
  const {
    autoFocus,
    checked: checkedProp,
    checkedIcon,
    className,
    defaultChecked,
    disabled: disabledProp,
    disableFocusRipple = false,
    edge = false,
    icon,
    id,
    inputProps,
    inputRef,
    name,
    onBlur,
    onChange,
    onFocus,
    readOnly,
    required = false,
    tabIndex,
    type,
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$m);
  const [checked, setCheckedState] = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: "SwitchBase",
    state: "checked"
  });
  const muiFormControl = useFormControl();
  const handleFocus = (event) => {
    if (onFocus) {
      onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };
  const handleBlur = (event) => {
    if (onBlur) {
      onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };
  const handleInputChange = (event) => {
    if (event.nativeEvent.defaultPrevented) {
      return;
    }
    const newChecked = event.target.checked;
    setCheckedState(newChecked);
    if (onChange) {
      onChange(event, newChecked);
    }
  };
  let disabled = disabledProp;
  if (muiFormControl) {
    if (typeof disabled === "undefined") {
      disabled = muiFormControl.disabled;
    }
  }
  const hasLabelFor = type === "checkbox" || type === "radio";
  const ownerState = _extends({}, props, {
    checked,
    disabled,
    disableFocusRipple,
    edge
  });
  const classes = useUtilityClasses$j(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SwitchBaseRoot, _extends({
    component: "span",
    className: clsx(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled,
    tabIndex: null,
    role: void 0,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ownerState,
    ref
  }, other, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(SwitchBaseInput, _extends({
      autoFocus,
      checked: checkedProp,
      defaultChecked,
      className: classes.input,
      disabled,
      id: hasLabelFor ? id : void 0,
      name,
      onChange: handleInputChange,
      readOnly,
      ref: inputRef,
      required,
      ownerState,
      tabIndex,
      type
    }, type === "checkbox" && value === void 0 ? {} : {
      value
    }, inputProps)), checked ? checkedIcon : icon]
  }));
});
const SwitchBase$1 = SwitchBase;
const CheckBoxOutlineBlankIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank");
const CheckBoxIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox");
const IndeterminateCheckBoxIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");
function getCheckboxUtilityClass(slot) {
  return generateUtilityClass("MuiCheckbox", slot);
}
const checkboxClasses = generateUtilityClasses("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]);
const checkboxClasses$1 = checkboxClasses;
const _excluded$l = ["checkedIcon", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size", "className"];
const useUtilityClasses$i = (ownerState) => {
  const {
    classes,
    indeterminate,
    color: color2,
    size
  } = ownerState;
  const slots = {
    root: ["root", indeterminate && "indeterminate", `color${capitalize(color2)}`, `size${capitalize(size)}`]
  };
  const composedClasses = composeClasses(slots, getCheckboxUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
const CheckboxRoot = styled(SwitchBase$1, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.indeterminate && styles2.indeterminate, styles2[`size${capitalize(ownerState.size)}`], ownerState.color !== "default" && styles2[`color${capitalize(ownerState.color)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  color: (theme.vars || theme).palette.text.secondary
}, !ownerState.disableRipple && {
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${ownerState.color === "default" ? theme.vars.palette.action.activeChannel : theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(ownerState.color === "default" ? theme.palette.action.active : theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, ownerState.color !== "default" && {
  [`&.${checkboxClasses$1.checked}, &.${checkboxClasses$1.indeterminate}`]: {
    color: (theme.vars || theme).palette[ownerState.color].main
  },
  [`&.${checkboxClasses$1.disabled}`]: {
    color: (theme.vars || theme).palette.action.disabled
  }
}));
const defaultCheckedIcon = /* @__PURE__ */ jsxRuntimeExports.jsx(CheckBoxIcon, {});
const defaultIcon = /* @__PURE__ */ jsxRuntimeExports.jsx(CheckBoxOutlineBlankIcon, {});
const defaultIndeterminateIcon = /* @__PURE__ */ jsxRuntimeExports.jsx(IndeterminateCheckBoxIcon, {});
const Checkbox = /* @__PURE__ */ reactExports.forwardRef(function Checkbox2(inProps, ref) {
  var _icon$props$fontSize, _indeterminateIcon$pr;
  const props = useThemeProps({
    props: inProps,
    name: "MuiCheckbox"
  });
  const {
    checkedIcon = defaultCheckedIcon,
    color: color2 = "primary",
    icon: iconProp = defaultIcon,
    indeterminate = false,
    indeterminateIcon: indeterminateIconProp = defaultIndeterminateIcon,
    inputProps,
    size = "medium",
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$l);
  const icon = indeterminate ? indeterminateIconProp : iconProp;
  const indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;
  const ownerState = _extends({}, props, {
    color: color2,
    indeterminate,
    size
  });
  const classes = useUtilityClasses$i(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CheckboxRoot, _extends({
    type: "checkbox",
    inputProps: _extends({
      "data-indeterminate": indeterminate
    }, inputProps),
    icon: /* @__PURE__ */ reactExports.cloneElement(icon, {
      fontSize: (_icon$props$fontSize = icon.props.fontSize) != null ? _icon$props$fontSize : size
    }),
    checkedIcon: /* @__PURE__ */ reactExports.cloneElement(indeterminateIcon, {
      fontSize: (_indeterminateIcon$pr = indeterminateIcon.props.fontSize) != null ? _indeterminateIcon$pr : size
    }),
    ownerState,
    ref,
    className: clsx(classes.root, className)
  }, other, {
    classes
  }));
});
const Checkbox$1 = Checkbox;
function getModalUtilityClass(slot) {
  return generateUtilityClass("MuiModal", slot);
}
generateUtilityClasses("MuiModal", ["root", "hidden", "backdrop"]);
const _excluded$k = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"];
const useUtilityClasses$h = (ownerState) => {
  const {
    open,
    exited,
    classes
  } = ownerState;
  const slots = {
    root: ["root", !open && exited && "hidden"],
    backdrop: ["backdrop"]
  };
  return composeClasses(slots, getModalUtilityClass, classes);
};
const ModalRoot = styled("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, !ownerState.open && ownerState.exited && styles2.hidden];
  }
})(({
  theme,
  ownerState
}) => _extends({
  position: "fixed",
  zIndex: (theme.vars || theme).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !ownerState.open && ownerState.exited && {
  visibility: "hidden"
}));
const ModalBackdrop = styled(Backdrop$1, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (props, styles2) => {
    return styles2.backdrop;
  }
})({
  zIndex: -1
});
const Modal = /* @__PURE__ */ reactExports.forwardRef(function Modal2(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$backdrop, _slotProps$root, _slotProps$backdrop;
  const props = useThemeProps({
    name: "MuiModal",
    props: inProps
  });
  const {
    BackdropComponent = ModalBackdrop,
    BackdropProps,
    className,
    closeAfterTransition = false,
    children,
    container,
    component,
    components = {},
    componentsProps = {},
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false,
    onBackdropClick,
    open,
    slotProps,
    slots
    // eslint-disable-next-line react/prop-types
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$k);
  const propsWithDefaults = _extends({}, props, {
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    hideBackdrop,
    keepMounted
  });
  const {
    getRootProps,
    getBackdropProps,
    getTransitionProps: getTransitionProps2,
    portalRef,
    isTopModal,
    exited,
    hasTransition
  } = useModal(_extends({}, propsWithDefaults, {
    rootRef: ref
  }));
  const ownerState = _extends({}, propsWithDefaults, {
    exited
  });
  const classes = useUtilityClasses$h(ownerState);
  const childProps = {};
  if (children.props.tabIndex === void 0) {
    childProps.tabIndex = "-1";
  }
  if (hasTransition) {
    const {
      onEnter,
      onExited
    } = getTransitionProps2();
    childProps.onEnter = onEnter;
    childProps.onExited = onExited;
  }
  const RootSlot = (_ref = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : components.Root) != null ? _ref : ModalRoot;
  const BackdropSlot = (_ref2 = (_slots$backdrop = slots == null ? void 0 : slots.backdrop) != null ? _slots$backdrop : components.Backdrop) != null ? _ref2 : BackdropComponent;
  const rootSlotProps = (_slotProps$root = slotProps == null ? void 0 : slotProps.root) != null ? _slotProps$root : componentsProps.root;
  const backdropSlotProps = (_slotProps$backdrop = slotProps == null ? void 0 : slotProps.backdrop) != null ? _slotProps$backdrop : componentsProps.backdrop;
  const rootProps = useSlotProps({
    elementType: RootSlot,
    externalSlotProps: rootSlotProps,
    externalForwardedProps: other,
    getSlotProps: getRootProps,
    additionalProps: {
      ref,
      as: component
    },
    ownerState,
    className: clsx(className, rootSlotProps == null ? void 0 : rootSlotProps.className, classes == null ? void 0 : classes.root, !ownerState.open && ownerState.exited && (classes == null ? void 0 : classes.hidden))
  });
  const backdropProps = useSlotProps({
    elementType: BackdropSlot,
    externalSlotProps: backdropSlotProps,
    additionalProps: BackdropProps,
    getSlotProps: (otherHandlers) => {
      return getBackdropProps(_extends({}, otherHandlers, {
        onClick: (e2) => {
          if (onBackdropClick) {
            onBackdropClick(e2);
          }
          if (otherHandlers != null && otherHandlers.onClick) {
            otherHandlers.onClick(e2);
          }
        }
      }));
    },
    className: clsx(backdropSlotProps == null ? void 0 : backdropSlotProps.className, BackdropProps == null ? void 0 : BackdropProps.className, classes == null ? void 0 : classes.backdrop),
    ownerState
  });
  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, {
    ref: portalRef,
    container,
    disablePortal,
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, _extends({}, rootProps, {
      children: [!hideBackdrop && BackdropComponent ? /* @__PURE__ */ jsxRuntimeExports.jsx(BackdropSlot, _extends({}, backdropProps)) : null, /* @__PURE__ */ jsxRuntimeExports.jsx(FocusTrap, {
        disableEnforceFocus,
        disableAutoFocus,
        disableRestoreFocus,
        isEnabled: isTopModal,
        open,
        children: /* @__PURE__ */ reactExports.cloneElement(children, childProps)
      })]
    }))
  });
});
const Modal$1 = Modal;
const _excluded$j = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"];
const useUtilityClasses$g = (ownerState) => {
  const {
    classes,
    disableUnderline
  } = ownerState;
  const slots = {
    root: ["root", !disableUnderline && "underline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getFilledInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
const FilledInputRoot = styled(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [...rootOverridesResolver(props, styles2), !ownerState.disableUnderline && styles2.underline];
  }
})(({
  theme,
  ownerState
}) => {
  var _palette;
  const light2 = theme.palette.mode === "light";
  const bottomLineColor = light2 ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  const backgroundColor2 = light2 ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)";
  const hoverBackground = light2 ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)";
  const disabledBackground = light2 ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return _extends({
    position: "relative",
    backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor2,
    borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
    borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create("background-color", {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.hoverBg : hoverBackground,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor2
      }
    },
    [`&.${filledInputClasses$1.focused}`]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor2
    },
    [`&.${filledInputClasses$1.disabled}`]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.disabledBg : disabledBackground
    }
  }, !ownerState.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(_palette = (theme.vars || theme).palette[ownerState.color || "primary"]) == null ? void 0 : _palette.main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${filledInputClasses$1.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${filledInputClasses$1.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (theme.vars || theme).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})` : bottomLineColor}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: theme.transitions.create("border-bottom-color", {
        duration: theme.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${filledInputClasses$1.disabled}, .${filledInputClasses$1.error}):before`]: {
      borderBottom: `1px solid ${(theme.vars || theme).palette.text.primary}`
    },
    [`&.${filledInputClasses$1.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, ownerState.startAdornment && {
    paddingLeft: 12
  }, ownerState.endAdornment && {
    paddingRight: 12
  }, ownerState.multiline && _extends({
    padding: "25px 12px 8px"
  }, ownerState.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, ownerState.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }, ownerState.hiddenLabel && ownerState.size === "small" && {
    paddingTop: 8,
    paddingBottom: 9
  }));
});
const FilledInputInput = styled(InputBaseComponent, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(({
  theme,
  ownerState
}) => _extends({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12
}, !theme.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: theme.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: theme.palette.mode === "light" ? null : "#fff",
    caretColor: theme.palette.mode === "light" ? null : "#fff",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  }
}, theme.vars && {
  "&:-webkit-autofill": {
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  },
  [theme.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, ownerState.size === "small" && {
  paddingTop: 21,
  paddingBottom: 4
}, ownerState.hiddenLabel && {
  paddingTop: 16,
  paddingBottom: 17
}, ownerState.startAdornment && {
  paddingLeft: 0
}, ownerState.endAdornment && {
  paddingRight: 0
}, ownerState.hiddenLabel && ownerState.size === "small" && {
  paddingTop: 8,
  paddingBottom: 9
}, ownerState.multiline && {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
}));
const FilledInput = /* @__PURE__ */ reactExports.forwardRef(function FilledInput2(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$input;
  const props = useThemeProps({
    props: inProps,
    name: "MuiFilledInput"
  });
  const {
    components = {},
    componentsProps: componentsPropsProp,
    fullWidth = false,
    // declare here to prevent spreading to DOM
    inputComponent = "input",
    multiline = false,
    slotProps,
    slots = {},
    type = "text"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$j);
  const ownerState = _extends({}, props, {
    fullWidth,
    inputComponent,
    multiline,
    type
  });
  const classes = useUtilityClasses$g(props);
  const filledInputComponentsProps = {
    root: {
      ownerState
    },
    input: {
      ownerState
    }
  };
  const componentsProps = (slotProps != null ? slotProps : componentsPropsProp) ? deepmerge(filledInputComponentsProps, slotProps != null ? slotProps : componentsPropsProp) : filledInputComponentsProps;
  const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : FilledInputRoot;
  const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : FilledInputInput;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(InputBase$1, _extends({
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    componentsProps,
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other, {
    classes
  }));
});
FilledInput.muiName = "Input";
const FilledInput$1 = FilledInput;
function getFormControlUtilityClasses(slot) {
  return generateUtilityClass("MuiFormControl", slot);
}
generateUtilityClasses("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const _excluded$i = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"];
const useUtilityClasses$f = (ownerState) => {
  const {
    classes,
    margin: margin2,
    fullWidth
  } = ownerState;
  const slots = {
    root: ["root", margin2 !== "none" && `margin${capitalize(margin2)}`, fullWidth && "fullWidth"]
  };
  return composeClasses(slots, getFormControlUtilityClasses, classes);
};
const FormControlRoot = styled("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState
  }, styles2) => {
    return _extends({}, styles2.root, styles2[`margin${capitalize(ownerState.margin)}`], ownerState.fullWidth && styles2.fullWidth);
  }
})(({
  ownerState
}) => _extends({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top"
}, ownerState.margin === "normal" && {
  marginTop: 16,
  marginBottom: 8
}, ownerState.margin === "dense" && {
  marginTop: 8,
  marginBottom: 4
}, ownerState.fullWidth && {
  width: "100%"
}));
const FormControl = /* @__PURE__ */ reactExports.forwardRef(function FormControl2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiFormControl"
  });
  const {
    children,
    className,
    color: color2 = "primary",
    component = "div",
    disabled = false,
    error = false,
    focused: visuallyFocused,
    fullWidth = false,
    hiddenLabel = false,
    margin: margin2 = "none",
    required = false,
    size = "medium",
    variant = "outlined"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$i);
  const ownerState = _extends({}, props, {
    color: color2,
    component,
    disabled,
    error,
    fullWidth,
    hiddenLabel,
    margin: margin2,
    required,
    size,
    variant
  });
  const classes = useUtilityClasses$f(ownerState);
  const [adornedStart, setAdornedStart] = reactExports.useState(() => {
    let initialAdornedStart = false;
    if (children) {
      reactExports.Children.forEach(children, (child) => {
        if (!isMuiElement(child, ["Input", "Select"])) {
          return;
        }
        const input = isMuiElement(child, ["Select"]) ? child.props.input : child;
        if (input && isAdornedStart(input.props)) {
          initialAdornedStart = true;
        }
      });
    }
    return initialAdornedStart;
  });
  const [filled, setFilled] = reactExports.useState(() => {
    let initialFilled = false;
    if (children) {
      reactExports.Children.forEach(children, (child) => {
        if (!isMuiElement(child, ["Input", "Select"])) {
          return;
        }
        if (isFilled(child.props, true) || isFilled(child.props.inputProps, true)) {
          initialFilled = true;
        }
      });
    }
    return initialFilled;
  });
  const [focusedState, setFocused] = reactExports.useState(false);
  if (disabled && focusedState) {
    setFocused(false);
  }
  const focused = visuallyFocused !== void 0 && !disabled ? visuallyFocused : focusedState;
  let registerEffect;
  const childContext = reactExports.useMemo(() => {
    return {
      adornedStart,
      setAdornedStart,
      color: color2,
      disabled,
      error,
      filled,
      focused,
      fullWidth,
      hiddenLabel,
      size,
      onBlur: () => {
        setFocused(false);
      },
      onEmpty: () => {
        setFilled(false);
      },
      onFilled: () => {
        setFilled(true);
      },
      onFocus: () => {
        setFocused(true);
      },
      registerEffect,
      required,
      variant
    };
  }, [adornedStart, color2, disabled, error, filled, focused, fullWidth, hiddenLabel, registerEffect, required, size, variant]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormControlContext$1.Provider, {
    value: childContext,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormControlRoot, _extends({
      as: component,
      ownerState,
      className: clsx(classes.root, className),
      ref
    }, other, {
      children
    }))
  });
});
const FormControl$1 = FormControl;
const Stack = createStack({
  createStyledComponent: styled("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (props, styles2) => styles2.root
  }),
  useThemeProps: (inProps) => useThemeProps({
    props: inProps,
    name: "MuiStack"
  })
});
const Stack$1 = Stack;
function getFormControlLabelUtilityClasses(slot) {
  return generateUtilityClass("MuiFormControlLabel", slot);
}
const formControlLabelClasses = generateUtilityClasses("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]);
const formControlLabelClasses$1 = formControlLabelClasses;
const _excluded$h = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "required", "slotProps", "value"];
const useUtilityClasses$e = (ownerState) => {
  const {
    classes,
    disabled,
    labelPlacement,
    error,
    required
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", `labelPlacement${capitalize(labelPlacement)}`, error && "error", required && "required"],
    label: ["label", disabled && "disabled"],
    asterisk: ["asterisk", error && "error"]
  };
  return composeClasses(slots, getFormControlLabelUtilityClasses, classes);
};
const FormControlLabelRoot = styled("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${formControlLabelClasses$1.label}`]: styles2.label
    }, styles2.root, styles2[`labelPlacement${capitalize(ownerState.labelPlacement)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  // For correct alignment with the text.
  verticalAlign: "middle",
  WebkitTapHighlightColor: "transparent",
  marginLeft: -11,
  marginRight: 16,
  // used for row presentation of radio/checkbox
  [`&.${formControlLabelClasses$1.disabled}`]: {
    cursor: "default"
  }
}, ownerState.labelPlacement === "start" && {
  flexDirection: "row-reverse",
  marginLeft: 16,
  // used for row presentation of radio/checkbox
  marginRight: -11
}, ownerState.labelPlacement === "top" && {
  flexDirection: "column-reverse",
  marginLeft: 16
}, ownerState.labelPlacement === "bottom" && {
  flexDirection: "column",
  marginLeft: 16
}, {
  [`& .${formControlLabelClasses$1.label}`]: {
    [`&.${formControlLabelClasses$1.disabled}`]: {
      color: (theme.vars || theme).palette.text.disabled
    }
  }
}));
const AsteriskComponent$1 = styled("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk",
  overridesResolver: (props, styles2) => styles2.asterisk
})(({
  theme
}) => ({
  [`&.${formControlLabelClasses$1.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
}));
const FormControlLabel = /* @__PURE__ */ reactExports.forwardRef(function FormControlLabel2(inProps, ref) {
  var _ref, _slotProps$typography;
  const props = useThemeProps({
    props: inProps,
    name: "MuiFormControlLabel"
  });
  const {
    className,
    componentsProps = {},
    control,
    disabled: disabledProp,
    disableTypography,
    label: labelProp,
    labelPlacement = "end",
    required: requiredProp,
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$h);
  const muiFormControl = useFormControl();
  const disabled = (_ref = disabledProp != null ? disabledProp : control.props.disabled) != null ? _ref : muiFormControl == null ? void 0 : muiFormControl.disabled;
  const required = requiredProp != null ? requiredProp : control.props.required;
  const controlProps = {
    disabled,
    required
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((key) => {
    if (typeof control.props[key] === "undefined" && typeof props[key] !== "undefined") {
      controlProps[key] = props[key];
    }
  });
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["error"]
  });
  const ownerState = _extends({}, props, {
    disabled,
    labelPlacement,
    required,
    error: fcs.error
  });
  const classes = useUtilityClasses$e(ownerState);
  const typographySlotProps = (_slotProps$typography = slotProps.typography) != null ? _slotProps$typography : componentsProps.typography;
  let label = labelProp;
  if (label != null && label.type !== Typography$1 && !disableTypography) {
    label = /* @__PURE__ */ jsxRuntimeExports.jsx(Typography$1, _extends({
      component: "span"
    }, typographySlotProps, {
      className: clsx(classes.label, typographySlotProps == null ? void 0 : typographySlotProps.className),
      children: label
    }));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControlLabelRoot, _extends({
    className: clsx(classes.root, className),
    ownerState,
    ref
  }, other, {
    children: [/* @__PURE__ */ reactExports.cloneElement(control, controlProps), required ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack$1, {
      display: "block",
      children: [label, /* @__PURE__ */ jsxRuntimeExports.jsxs(AsteriskComponent$1, {
        ownerState,
        "aria-hidden": true,
        className: classes.asterisk,
        children: [" ", "*"]
      })]
    }) : label]
  }));
});
const FormControlLabel$1 = FormControlLabel;
function getFormHelperTextUtilityClasses(slot) {
  return generateUtilityClass("MuiFormHelperText", slot);
}
const formHelperTextClasses = generateUtilityClasses("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
const formHelperTextClasses$1 = formHelperTextClasses;
var _span$2;
const _excluded$g = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"];
const useUtilityClasses$d = (ownerState) => {
  const {
    classes,
    contained,
    size,
    disabled,
    error,
    filled,
    focused,
    required
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", error && "error", size && `size${capitalize(size)}`, contained && "contained", focused && "focused", filled && "filled", required && "required"]
  };
  return composeClasses(slots, getFormHelperTextUtilityClasses, classes);
};
const FormHelperTextRoot = styled("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.size && styles2[`size${capitalize(ownerState.size)}`], ownerState.contained && styles2.contained, ownerState.filled && styles2.filled];
  }
})(({
  theme,
  ownerState
}) => _extends({
  color: (theme.vars || theme).palette.text.secondary
}, theme.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${formHelperTextClasses$1.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled
  },
  [`&.${formHelperTextClasses$1.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
}, ownerState.size === "small" && {
  marginTop: 4
}, ownerState.contained && {
  marginLeft: 14,
  marginRight: 14
}));
const FormHelperText = /* @__PURE__ */ reactExports.forwardRef(function FormHelperText2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiFormHelperText"
  });
  const {
    children,
    className,
    component = "p"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$g);
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  });
  const ownerState = _extends({}, props, {
    component,
    contained: fcs.variant === "filled" || fcs.variant === "outlined",
    variant: fcs.variant,
    size: fcs.size,
    disabled: fcs.disabled,
    error: fcs.error,
    filled: fcs.filled,
    focused: fcs.focused,
    required: fcs.required
  });
  const classes = useUtilityClasses$d(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperTextRoot, _extends({
    as: component,
    ownerState,
    className: clsx(classes.root, className),
    ref
  }, other, {
    children: children === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      _span$2 || (_span$2 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : children
  }));
});
const FormHelperText$1 = FormHelperText;
function getFormLabelUtilityClasses(slot) {
  return generateUtilityClass("MuiFormLabel", slot);
}
const formLabelClasses = generateUtilityClasses("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
const formLabelClasses$1 = formLabelClasses;
const _excluded$f = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"];
const useUtilityClasses$c = (ownerState) => {
  const {
    classes,
    color: color2,
    focused,
    disabled,
    error,
    filled,
    required
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize(color2)}`, disabled && "disabled", error && "error", filled && "filled", focused && "focused", required && "required"],
    asterisk: ["asterisk", error && "error"]
  };
  return composeClasses(slots, getFormLabelUtilityClasses, classes);
};
const FormLabelRoot = styled("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState
  }, styles2) => {
    return _extends({}, styles2.root, ownerState.color === "secondary" && styles2.colorSecondary, ownerState.filled && styles2.filled);
  }
})(({
  theme,
  ownerState
}) => _extends({
  color: (theme.vars || theme).palette.text.secondary
}, theme.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${formLabelClasses$1.focused}`]: {
    color: (theme.vars || theme).palette[ownerState.color].main
  },
  [`&.${formLabelClasses$1.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled
  },
  [`&.${formLabelClasses$1.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
}));
const AsteriskComponent = styled("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (props, styles2) => styles2.asterisk
})(({
  theme
}) => ({
  [`&.${formLabelClasses$1.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
}));
const FormLabel = /* @__PURE__ */ reactExports.forwardRef(function FormLabel2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiFormLabel"
  });
  const {
    children,
    className,
    component = "label"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$f);
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  });
  const ownerState = _extends({}, props, {
    color: fcs.color || "primary",
    component,
    disabled: fcs.disabled,
    error: fcs.error,
    filled: fcs.filled,
    focused: fcs.focused,
    required: fcs.required
  });
  const classes = useUtilityClasses$c(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabelRoot, _extends({
    as: component,
    ownerState,
    className: clsx(classes.root, className),
    ref
  }, other, {
    children: [children, fcs.required && /* @__PURE__ */ jsxRuntimeExports.jsxs(AsteriskComponent, {
      ownerState,
      "aria-hidden": true,
      className: classes.asterisk,
      children: [" ", "*"]
    })]
  }));
});
const FormLabel$1 = FormLabel;
const _excluded$e = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function getScale(value) {
  return `scale(${value}, ${value ** 2})`;
}
const styles = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
};
const isWebKit154 = typeof navigator !== "undefined" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent);
const Grow = /* @__PURE__ */ reactExports.forwardRef(function Grow2(props, ref) {
  const {
    addEndListener,
    appear = true,
    children,
    easing: easing2,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style: style2,
    timeout = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition$1
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$e);
  const timer = reactExports.useRef();
  const autoTimeout = reactExports.useRef();
  const theme = useTheme();
  const nodeRef = reactExports.useRef(null);
  const handleRef = useForkRef(nodeRef, children.ref, ref);
  const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
    if (callback) {
      const node2 = nodeRef.current;
      if (maybeIsAppearing === void 0) {
        callback(node2);
      } else {
        callback(node2, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node2, isAppearing) => {
    reflow(node2);
    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style: style2,
      timeout,
      easing: easing2
    }, {
      mode: "enter"
    });
    let duration2;
    if (timeout === "auto") {
      duration2 = theme.transitions.getAutoHeightDuration(node2.clientHeight);
      autoTimeout.current = duration2;
    } else {
      duration2 = transitionDuration;
    }
    node2.style.transition = [theme.transitions.create("opacity", {
      duration: duration2,
      delay
    }), theme.transitions.create("transform", {
      duration: isWebKit154 ? duration2 : duration2 * 0.666,
      delay,
      easing: transitionTimingFunction
    })].join(",");
    if (onEnter) {
      onEnter(node2, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback((node2) => {
    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style: style2,
      timeout,
      easing: easing2
    }, {
      mode: "exit"
    });
    let duration2;
    if (timeout === "auto") {
      duration2 = theme.transitions.getAutoHeightDuration(node2.clientHeight);
      autoTimeout.current = duration2;
    } else {
      duration2 = transitionDuration;
    }
    node2.style.transition = [theme.transitions.create("opacity", {
      duration: duration2,
      delay
    }), theme.transitions.create("transform", {
      duration: isWebKit154 ? duration2 : duration2 * 0.666,
      delay: isWebKit154 ? delay : delay || duration2 * 0.333,
      easing: transitionTimingFunction
    })].join(",");
    node2.style.opacity = 0;
    node2.style.transform = getScale(0.75);
    if (onExit) {
      onExit(node2);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = (next2) => {
    if (timeout === "auto") {
      timer.current = setTimeout(next2, autoTimeout.current || 0);
    }
    if (addEndListener) {
      addEndListener(nodeRef.current, next2);
    }
  };
  reactExports.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, _extends({
    appear,
    in: inProp,
    nodeRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout: timeout === "auto" ? null : timeout
  }, other, {
    children: (state, childProps) => {
      return /* @__PURE__ */ reactExports.cloneElement(children, _extends({
        style: _extends({
          opacity: 0,
          transform: getScale(0.75),
          visibility: state === "exited" && !inProp ? "hidden" : void 0
        }, styles[state], style2, children.props.style),
        ref: handleRef
      }, childProps));
    }
  }));
});
Grow.muiSupportAuto = true;
const Grow$1 = Grow;
const _excluded$d = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"];
const useUtilityClasses$b = (ownerState) => {
  const {
    classes,
    disableUnderline
  } = ownerState;
  const slots = {
    root: ["root", !disableUnderline && "underline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
const InputRoot = styled(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [...rootOverridesResolver(props, styles2), !ownerState.disableUnderline && styles2.underline];
  }
})(({
  theme,
  ownerState
}) => {
  const light2 = theme.palette.mode === "light";
  let bottomLineColor = light2 ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  if (theme.vars) {
    bottomLineColor = `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})`;
  }
  return _extends({
    position: "relative"
  }, ownerState.formControl && {
    "label + &": {
      marginTop: 16
    }
  }, !ownerState.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(theme.vars || theme).palette[ownerState.color].main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${inputClasses$1.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${inputClasses$1.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (theme.vars || theme).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${bottomLineColor}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: theme.transitions.create("border-bottom-color", {
        duration: theme.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${inputClasses$1.disabled}, .${inputClasses$1.error}):before`]: {
      borderBottom: `2px solid ${(theme.vars || theme).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${bottomLineColor}`
      }
    },
    [`&.${inputClasses$1.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
});
const InputInput = styled(InputBaseComponent, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})({});
const Input = /* @__PURE__ */ reactExports.forwardRef(function Input2(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$input;
  const props = useThemeProps({
    props: inProps,
    name: "MuiInput"
  });
  const {
    disableUnderline,
    components = {},
    componentsProps: componentsPropsProp,
    fullWidth = false,
    inputComponent = "input",
    multiline = false,
    slotProps,
    slots = {},
    type = "text"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$d);
  const classes = useUtilityClasses$b(props);
  const ownerState = {
    disableUnderline
  };
  const inputComponentsProps = {
    root: {
      ownerState
    }
  };
  const componentsProps = (slotProps != null ? slotProps : componentsPropsProp) ? deepmerge(slotProps != null ? slotProps : componentsPropsProp, inputComponentsProps) : inputComponentsProps;
  const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : InputRoot;
  const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : InputInput;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(InputBase$1, _extends({
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    slotProps: componentsProps,
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other, {
    classes
  }));
});
Input.muiName = "Input";
const Input$1 = Input;
function getInputLabelUtilityClasses(slot) {
  return generateUtilityClass("MuiInputLabel", slot);
}
generateUtilityClasses("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const _excluded$c = ["disableAnimation", "margin", "shrink", "variant", "className"];
const useUtilityClasses$a = (ownerState) => {
  const {
    classes,
    formControl,
    size,
    shrink,
    disableAnimation,
    variant,
    required
  } = ownerState;
  const slots = {
    root: ["root", formControl && "formControl", !disableAnimation && "animated", shrink && "shrink", size && size !== "normal" && `size${capitalize(size)}`, variant],
    asterisk: [required && "asterisk"]
  };
  const composedClasses = composeClasses(slots, getInputLabelUtilityClasses, classes);
  return _extends({}, classes, composedClasses);
};
const InputLabelRoot = styled(FormLabel$1, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${formLabelClasses$1.asterisk}`]: styles2.asterisk
    }, styles2.root, ownerState.formControl && styles2.formControl, ownerState.size === "small" && styles2.sizeSmall, ownerState.shrink && styles2.shrink, !ownerState.disableAnimation && styles2.animated, ownerState.focused && styles2.focused, styles2[ownerState.variant]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%"
}, ownerState.formControl && {
  position: "absolute",
  left: 0,
  top: 0,
  // slight alteration to spec spacing to match visual spec result
  transform: "translate(0, 20px) scale(1)"
}, ownerState.size === "small" && {
  // Compensation for the `Input.inputSizeSmall` style.
  transform: "translate(0, 17px) scale(1)"
}, ownerState.shrink && {
  transform: "translate(0, -1.5px) scale(0.75)",
  transformOrigin: "top left",
  maxWidth: "133%"
}, !ownerState.disableAnimation && {
  transition: theme.transitions.create(["color", "transform", "max-width"], {
    duration: theme.transitions.duration.shorter,
    easing: theme.transitions.easing.easeOut
  })
}, ownerState.variant === "filled" && _extends({
  // Chrome's autofill feature gives the input field a yellow background.
  // Since the input field is behind the label in the HTML tree,
  // the input field is drawn last and hides the label with an opaque background color.
  // zIndex: 1 will raise the label above opaque background-colors of input.
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(12px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, ownerState.size === "small" && {
  transform: "translate(12px, 13px) scale(1)"
}, ownerState.shrink && _extends({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, ownerState.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), ownerState.variant === "outlined" && _extends({
  // see comment above on filled.zIndex
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(14px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, ownerState.size === "small" && {
  transform: "translate(14px, 9px) scale(1)"
}, ownerState.shrink && {
  userSelect: "none",
  pointerEvents: "auto",
  // Theoretically, we should have (8+5)*2/0.75 = 34px
  // but it feels a better when it bleeds a bit on the left, so 32px.
  maxWidth: "calc(133% - 32px)",
  transform: "translate(14px, -9px) scale(0.75)"
})));
const InputLabel = /* @__PURE__ */ reactExports.forwardRef(function InputLabel2(inProps, ref) {
  const props = useThemeProps({
    name: "MuiInputLabel",
    props: inProps
  });
  const {
    disableAnimation = false,
    shrink: shrinkProp,
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$c);
  const muiFormControl = useFormControl();
  let shrink = shrinkProp;
  if (typeof shrink === "undefined" && muiFormControl) {
    shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
  }
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["size", "variant", "required", "focused"]
  });
  const ownerState = _extends({}, props, {
    disableAnimation,
    formControl: muiFormControl,
    shrink,
    size: fcs.size,
    variant: fcs.variant,
    required: fcs.required,
    focused: fcs.focused
  });
  const classes = useUtilityClasses$a(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabelRoot, _extends({
    "data-shrink": shrink,
    ownerState,
    ref,
    className: clsx(classes.root, className)
  }, other, {
    classes
  }));
});
const InputLabel$1 = InputLabel;
const ListContext = /* @__PURE__ */ reactExports.createContext({});
const ListContext$1 = ListContext;
function getListUtilityClass(slot) {
  return generateUtilityClass("MuiList", slot);
}
generateUtilityClasses("MuiList", ["root", "padding", "dense", "subheader"]);
const _excluded$b = ["children", "className", "component", "dense", "disablePadding", "subheader"];
const useUtilityClasses$9 = (ownerState) => {
  const {
    classes,
    disablePadding,
    dense,
    subheader
  } = ownerState;
  const slots = {
    root: ["root", !disablePadding && "padding", dense && "dense", subheader && "subheader"]
  };
  return composeClasses(slots, getListUtilityClass, classes);
};
const ListRoot = styled("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, !ownerState.disablePadding && styles2.padding, ownerState.dense && styles2.dense, ownerState.subheader && styles2.subheader];
  }
})(({
  ownerState
}) => _extends({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !ownerState.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, ownerState.subheader && {
  paddingTop: 0
}));
const List = /* @__PURE__ */ reactExports.forwardRef(function List2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiList"
  });
  const {
    children,
    className,
    component = "ul",
    dense = false,
    disablePadding = false,
    subheader
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$b);
  const context = reactExports.useMemo(() => ({
    dense
  }), [dense]);
  const ownerState = _extends({}, props, {
    component,
    dense,
    disablePadding
  });
  const classes = useUtilityClasses$9(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ListContext$1.Provider, {
    value: context,
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ListRoot, _extends({
      as: component,
      className: clsx(classes.root, className),
      ref,
      ownerState
    }, other, {
      children: [subheader, children]
    }))
  });
});
const List$1 = List;
const _excluded$a = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function nextItem(list, item, disableListWrap) {
  if (list === item) {
    return list.firstChild;
  }
  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }
  return disableListWrap ? null : list.firstChild;
}
function previousItem(list, item, disableListWrap) {
  if (list === item) {
    return disableListWrap ? list.firstChild : list.lastChild;
  }
  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }
  return disableListWrap ? null : list.lastChild;
}
function textCriteriaMatches(nextFocus, textCriteria) {
  if (textCriteria === void 0) {
    return true;
  }
  let text = nextFocus.innerText;
  if (text === void 0) {
    text = nextFocus.textContent;
  }
  text = text.trim().toLowerCase();
  if (text.length === 0) {
    return false;
  }
  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0];
  }
  return text.indexOf(textCriteria.keys.join("")) === 0;
}
function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);
  while (nextFocus) {
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return false;
      }
      wrappedOnce = true;
    }
    const nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute("aria-disabled") === "true";
    if (!nextFocus.hasAttribute("tabindex") || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
      nextFocus = traversalFunction(list, nextFocus, disableListWrap);
    } else {
      nextFocus.focus();
      return true;
    }
  }
  return false;
}
const MenuList = /* @__PURE__ */ reactExports.forwardRef(function MenuList2(props, ref) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions,
    autoFocus = false,
    autoFocusItem = false,
    children,
    className,
    disabledItemsFocusable = false,
    disableListWrap = false,
    onKeyDown,
    variant = "selectedMenu"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$a);
  const listRef = reactExports.useRef(null);
  const textCriteriaRef = reactExports.useRef({
    keys: [],
    repeating: true,
    previousKeyMatched: true,
    lastTime: null
  });
  useEnhancedEffect(() => {
    if (autoFocus) {
      listRef.current.focus();
    }
  }, [autoFocus]);
  reactExports.useImperativeHandle(actions, () => ({
    adjustStyleForScrollbar: (containerElement, theme) => {
      const noExplicitWidth = !listRef.current.style.width;
      if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
        const scrollbarSize = `${getScrollbarSize(ownerDocument(containerElement))}px`;
        listRef.current.style[theme.direction === "rtl" ? "paddingLeft" : "paddingRight"] = scrollbarSize;
        listRef.current.style.width = `calc(100% + ${scrollbarSize})`;
      }
      return listRef.current;
    }
  }), []);
  const handleKeyDown2 = (event) => {
    const list = listRef.current;
    const key = event.key;
    const currentFocus = ownerDocument(list).activeElement;
    if (key === "ArrowDown") {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === "ArrowUp") {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key === "Home") {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === "End") {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key.length === 1) {
      const criteria = textCriteriaRef.current;
      const lowerKey = key.toLowerCase();
      const currTime = performance.now();
      if (criteria.keys.length > 0) {
        if (currTime - criteria.lastTime > 500) {
          criteria.keys = [];
          criteria.repeating = true;
          criteria.previousKeyMatched = true;
        } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
          criteria.repeating = false;
        }
      }
      criteria.lastTime = currTime;
      criteria.keys.push(lowerKey);
      const keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);
      if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, disabledItemsFocusable, nextItem, criteria))) {
        event.preventDefault();
      } else {
        criteria.previousKeyMatched = false;
      }
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  const handleRef = useForkRef(listRef, ref);
  let activeItemIndex = -1;
  reactExports.Children.forEach(children, (child, index) => {
    if (!/* @__PURE__ */ reactExports.isValidElement(child)) {
      if (activeItemIndex === index) {
        activeItemIndex += 1;
        if (activeItemIndex >= children.length) {
          activeItemIndex = -1;
        }
      }
      return;
    }
    if (!child.props.disabled) {
      if (variant === "selectedMenu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
    if (activeItemIndex === index && (child.props.disabled || child.props.muiSkipListHighlight || child.type.muiSkipListHighlight)) {
      activeItemIndex += 1;
      if (activeItemIndex >= children.length) {
        activeItemIndex = -1;
      }
    }
  });
  const items = reactExports.Children.map(children, (child, index) => {
    if (index === activeItemIndex) {
      const newChildProps = {};
      if (autoFocusItem) {
        newChildProps.autoFocus = true;
      }
      if (child.props.tabIndex === void 0 && variant === "selectedMenu") {
        newChildProps.tabIndex = 0;
      }
      return /* @__PURE__ */ reactExports.cloneElement(child, newChildProps);
    }
    return child;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(List$1, _extends({
    role: "menu",
    ref: handleRef,
    className,
    onKeyDown: handleKeyDown2,
    tabIndex: autoFocus ? 0 : -1
  }, other, {
    children: items
  }));
});
const MenuList$1 = MenuList;
function getPopoverUtilityClass(slot) {
  return generateUtilityClass("MuiPopover", slot);
}
generateUtilityClasses("MuiPopover", ["root", "paper"]);
const _excluded$9 = ["onEntering"], _excluded2$3 = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], _excluded3 = ["slotProps"];
function getOffsetTop(rect, vertical) {
  let offset = 0;
  if (typeof vertical === "number") {
    offset = vertical;
  } else if (vertical === "center") {
    offset = rect.height / 2;
  } else if (vertical === "bottom") {
    offset = rect.height;
  }
  return offset;
}
function getOffsetLeft(rect, horizontal) {
  let offset = 0;
  if (typeof horizontal === "number") {
    offset = horizontal;
  } else if (horizontal === "center") {
    offset = rect.width / 2;
  } else if (horizontal === "right") {
    offset = rect.width;
  }
  return offset;
}
function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map((n2) => typeof n2 === "number" ? `${n2}px` : n2).join(" ");
}
function resolveAnchorEl(anchorEl) {
  return typeof anchorEl === "function" ? anchorEl() : anchorEl;
}
const useUtilityClasses$8 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    paper: ["paper"]
  };
  return composeClasses(slots, getPopoverUtilityClass, classes);
};
const PopoverRoot = styled(Modal$1, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})({});
const PopoverPaper = styled(Paper$1, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (props, styles2) => styles2.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
});
const Popover = /* @__PURE__ */ reactExports.forwardRef(function Popover2(inProps, ref) {
  var _slotProps$paper, _slots$root, _slots$paper;
  const props = useThemeProps({
    props: inProps,
    name: "MuiPopover"
  });
  const {
    action,
    anchorEl,
    anchorOrigin = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition,
    anchorReference = "anchorEl",
    children,
    className,
    container: containerProp,
    elevation = 8,
    marginThreshold = 16,
    open,
    PaperProps: PaperPropsProp = {},
    slots,
    slotProps,
    transformOrigin = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent = Grow$1,
    transitionDuration: transitionDurationProp = "auto",
    TransitionProps: {
      onEntering
    } = {},
    disableScrollLock = false
  } = props, TransitionProps = _objectWithoutPropertiesLoose(props.TransitionProps, _excluded$9), other = _objectWithoutPropertiesLoose(props, _excluded2$3);
  const externalPaperSlotProps = (_slotProps$paper = slotProps == null ? void 0 : slotProps.paper) != null ? _slotProps$paper : PaperPropsProp;
  const paperRef = reactExports.useRef();
  const handlePaperRef = useForkRef(paperRef, externalPaperSlotProps.ref);
  const ownerState = _extends({}, props, {
    anchorOrigin,
    anchorReference,
    elevation,
    marginThreshold,
    externalPaperSlotProps,
    transformOrigin,
    TransitionComponent,
    transitionDuration: transitionDurationProp,
    TransitionProps
  });
  const classes = useUtilityClasses$8(ownerState);
  const getAnchorOffset = reactExports.useCallback(() => {
    if (anchorReference === "anchorPosition") {
      return anchorPosition;
    }
    const resolvedAnchorEl = resolveAnchorEl(anchorEl);
    const anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : ownerDocument(paperRef.current).body;
    const anchorRect = anchorElement.getBoundingClientRect();
    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorOrigin.vertical),
      left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
    };
  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]);
  const getTransformOrigin = reactExports.useCallback((elemRect) => {
    return {
      vertical: getOffsetTop(elemRect, transformOrigin.vertical),
      horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
    };
  }, [transformOrigin.horizontal, transformOrigin.vertical]);
  const getPositioningStyle = reactExports.useCallback((element) => {
    const elemRect = {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
    const elemTransformOrigin = getTransformOrigin(elemRect);
    if (anchorReference === "none") {
      return {
        top: null,
        left: null,
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    }
    const anchorOffset = getAnchorOffset();
    let top = anchorOffset.top - elemTransformOrigin.vertical;
    let left = anchorOffset.left - elemTransformOrigin.horizontal;
    const bottom = top + elemRect.height;
    const right = left + elemRect.width;
    const containerWindow = ownerWindow(resolveAnchorEl(anchorEl));
    const heightThreshold = containerWindow.innerHeight - marginThreshold;
    const widthThreshold = containerWindow.innerWidth - marginThreshold;
    if (marginThreshold !== null && top < marginThreshold) {
      const diff = top - marginThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    } else if (marginThreshold !== null && bottom > heightThreshold) {
      const diff = bottom - heightThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    }
    if (marginThreshold !== null && left < marginThreshold) {
      const diff = left - marginThreshold;
      left -= diff;
      elemTransformOrigin.horizontal += diff;
    } else if (right > widthThreshold) {
      const diff = right - widthThreshold;
      left -= diff;
      elemTransformOrigin.horizontal += diff;
    }
    return {
      top: `${Math.round(top)}px`,
      left: `${Math.round(left)}px`,
      transformOrigin: getTransformOriginValue(elemTransformOrigin)
    };
  }, [anchorEl, anchorReference, getAnchorOffset, getTransformOrigin, marginThreshold]);
  const [isPositioned, setIsPositioned] = reactExports.useState(open);
  const setPositioningStyles = reactExports.useCallback(() => {
    const element = paperRef.current;
    if (!element) {
      return;
    }
    const positioning = getPositioningStyle(element);
    if (positioning.top !== null) {
      element.style.top = positioning.top;
    }
    if (positioning.left !== null) {
      element.style.left = positioning.left;
    }
    element.style.transformOrigin = positioning.transformOrigin;
    setIsPositioned(true);
  }, [getPositioningStyle]);
  reactExports.useEffect(() => {
    if (disableScrollLock) {
      window.addEventListener("scroll", setPositioningStyles);
    }
    return () => window.removeEventListener("scroll", setPositioningStyles);
  }, [anchorEl, disableScrollLock, setPositioningStyles]);
  const handleEntering = (element, isAppearing) => {
    if (onEntering) {
      onEntering(element, isAppearing);
    }
    setPositioningStyles();
  };
  const handleExited = () => {
    setIsPositioned(false);
  };
  reactExports.useEffect(() => {
    if (open) {
      setPositioningStyles();
    }
  });
  reactExports.useImperativeHandle(action, () => open ? {
    updatePosition: () => {
      setPositioningStyles();
    }
  } : null, [open, setPositioningStyles]);
  reactExports.useEffect(() => {
    if (!open) {
      return void 0;
    }
    const handleResize = debounce(() => {
      setPositioningStyles();
    });
    const containerWindow = ownerWindow(anchorEl);
    containerWindow.addEventListener("resize", handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener("resize", handleResize);
    };
  }, [anchorEl, open, setPositioningStyles]);
  let transitionDuration = transitionDurationProp;
  if (transitionDurationProp === "auto" && !TransitionComponent.muiSupportAuto) {
    transitionDuration = void 0;
  }
  const container = containerProp || (anchorEl ? ownerDocument(resolveAnchorEl(anchorEl)).body : void 0);
  const RootSlot = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : PopoverRoot;
  const PaperSlot = (_slots$paper = slots == null ? void 0 : slots.paper) != null ? _slots$paper : PopoverPaper;
  const paperProps = useSlotProps({
    elementType: PaperSlot,
    externalSlotProps: _extends({}, externalPaperSlotProps, {
      style: isPositioned ? externalPaperSlotProps.style : _extends({}, externalPaperSlotProps.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation,
      ref: handlePaperRef
    },
    ownerState,
    className: clsx(classes.paper, externalPaperSlotProps == null ? void 0 : externalPaperSlotProps.className)
  });
  const _useSlotProps = useSlotProps({
    elementType: RootSlot,
    externalSlotProps: (slotProps == null ? void 0 : slotProps.root) || {},
    externalForwardedProps: other,
    additionalProps: {
      ref,
      slotProps: {
        backdrop: {
          invisible: true
        }
      },
      container,
      open
    },
    ownerState,
    className: clsx(classes.root, className)
  }), {
    slotProps: rootSlotPropsProp
  } = _useSlotProps, rootProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded3);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RootSlot, _extends({}, rootProps, !isHostComponent(RootSlot) && {
    slotProps: rootSlotPropsProp,
    disableScrollLock
  }, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, _extends({
      appear: true,
      in: open,
      onEntering: handleEntering,
      onExited: handleExited,
      timeout: transitionDuration
    }, TransitionProps, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaperSlot, _extends({}, paperProps, {
        children
      }))
    }))
  }));
});
const Popover$1 = Popover;
function getMenuUtilityClass(slot) {
  return generateUtilityClass("MuiMenu", slot);
}
generateUtilityClasses("MuiMenu", ["root", "paper", "list"]);
const _excluded$8 = ["onEntering"], _excluded2$2 = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"];
const RTL_ORIGIN = {
  vertical: "top",
  horizontal: "right"
};
const LTR_ORIGIN = {
  vertical: "top",
  horizontal: "left"
};
const useUtilityClasses$7 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  };
  return composeClasses(slots, getMenuUtilityClass, classes);
};
const MenuRoot = styled(Popover$1, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})({});
const MenuPaper = styled(PopoverPaper, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (props, styles2) => styles2.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
});
const MenuMenuList = styled(MenuList$1, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (props, styles2) => styles2.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
});
const Menu = /* @__PURE__ */ reactExports.forwardRef(function Menu2(inProps, ref) {
  var _slots$paper, _slotProps$paper;
  const props = useThemeProps({
    props: inProps,
    name: "MuiMenu"
  });
  const {
    autoFocus = true,
    children,
    className,
    disableAutoFocusItem = false,
    MenuListProps = {},
    onClose,
    open,
    PaperProps = {},
    PopoverClasses,
    transitionDuration = "auto",
    TransitionProps: {
      onEntering
    } = {},
    variant = "selectedMenu",
    slots = {},
    slotProps = {}
  } = props, TransitionProps = _objectWithoutPropertiesLoose(props.TransitionProps, _excluded$8), other = _objectWithoutPropertiesLoose(props, _excluded2$2);
  const theme = useTheme();
  const isRtl = theme.direction === "rtl";
  const ownerState = _extends({}, props, {
    autoFocus,
    disableAutoFocusItem,
    MenuListProps,
    onEntering,
    PaperProps,
    transitionDuration,
    TransitionProps,
    variant
  });
  const classes = useUtilityClasses$7(ownerState);
  const autoFocusItem = autoFocus && !disableAutoFocusItem && open;
  const menuListActionsRef = reactExports.useRef(null);
  const handleEntering = (element, isAppearing) => {
    if (menuListActionsRef.current) {
      menuListActionsRef.current.adjustStyleForScrollbar(element, theme);
    }
    if (onEntering) {
      onEntering(element, isAppearing);
    }
  };
  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      if (onClose) {
        onClose(event, "tabKeyDown");
      }
    }
  };
  let activeItemIndex = -1;
  reactExports.Children.map(children, (child, index) => {
    if (!/* @__PURE__ */ reactExports.isValidElement(child)) {
      return;
    }
    if (!child.props.disabled) {
      if (variant === "selectedMenu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  const PaperSlot = (_slots$paper = slots.paper) != null ? _slots$paper : MenuPaper;
  const paperExternalSlotProps = (_slotProps$paper = slotProps.paper) != null ? _slotProps$paper : PaperProps;
  const rootSlotProps = useSlotProps({
    elementType: slots.root,
    externalSlotProps: slotProps.root,
    ownerState,
    className: [classes.root, className]
  });
  const paperSlotProps = useSlotProps({
    elementType: PaperSlot,
    externalSlotProps: paperExternalSlotProps,
    ownerState,
    className: classes.paper
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MenuRoot, _extends({
    onClose,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: isRtl ? "right" : "left"
    },
    transformOrigin: isRtl ? RTL_ORIGIN : LTR_ORIGIN,
    slots: {
      paper: PaperSlot,
      root: slots.root
    },
    slotProps: {
      root: rootSlotProps,
      paper: paperSlotProps
    },
    open,
    ref,
    transitionDuration,
    TransitionProps: _extends({
      onEntering: handleEntering
    }, TransitionProps),
    ownerState
  }, other, {
    classes: PopoverClasses,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuMenuList, _extends({
      onKeyDown: handleListKeyDown,
      actions: menuListActionsRef,
      autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
      autoFocusItem,
      variant
    }, MenuListProps, {
      className: clsx(classes.list, MenuListProps.className),
      children
    }))
  }));
});
const Menu$1 = Menu;
function getNativeSelectUtilityClasses(slot) {
  return generateUtilityClass("MuiNativeSelect", slot);
}
const nativeSelectClasses = generateUtilityClasses("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
const nativeSelectClasses$1 = nativeSelectClasses;
const _excluded$7 = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"];
const useUtilityClasses$6 = (ownerState) => {
  const {
    classes,
    variant,
    disabled,
    multiple,
    open,
    error
  } = ownerState;
  const slots = {
    select: ["select", variant, disabled && "disabled", multiple && "multiple", error && "error"],
    icon: ["icon", `icon${capitalize(variant)}`, open && "iconOpen", disabled && "disabled"]
  };
  return composeClasses(slots, getNativeSelectUtilityClasses, classes);
};
const nativeSelectSelectStyles = ({
  ownerState,
  theme
}) => _extends({
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  borderRadius: 0,
  // Reset
  cursor: "pointer",
  "&:focus": _extends({}, theme.vars ? {
    backgroundColor: `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.05)`
  } : {
    backgroundColor: theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
  }, {
    borderRadius: 0
    // Reset Chrome style
  }),
  // Remove IE11 arrow
  "&::-ms-expand": {
    display: "none"
  },
  [`&.${nativeSelectClasses$1.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (theme.vars || theme).palette.background.paper
  },
  // Bump specificity to allow extending custom inputs
  "&&&": {
    paddingRight: 24,
    minWidth: 16
    // So it doesn't collapse.
  }
}, ownerState.variant === "filled" && {
  "&&&": {
    paddingRight: 32
  }
}, ownerState.variant === "outlined" && {
  borderRadius: (theme.vars || theme).shape.borderRadius,
  "&:focus": {
    borderRadius: (theme.vars || theme).shape.borderRadius
    // Reset the reset for Chrome style
  },
  "&&&": {
    paddingRight: 32
  }
});
const NativeSelectSelect = styled("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: rootShouldForwardProp,
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.select, styles2[ownerState.variant], ownerState.error && styles2.error, {
      [`&.${nativeSelectClasses$1.multiple}`]: styles2.multiple
    }];
  }
})(nativeSelectSelectStyles);
const nativeSelectIconStyles = ({
  ownerState,
  theme
}) => _extends({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (theme.vars || theme).palette.action.active,
  [`&.${nativeSelectClasses$1.disabled}`]: {
    color: (theme.vars || theme).palette.action.disabled
  }
}, ownerState.open && {
  transform: "rotate(180deg)"
}, ownerState.variant === "filled" && {
  right: 7
}, ownerState.variant === "outlined" && {
  right: 7
});
const NativeSelectIcon = styled("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.icon, ownerState.variant && styles2[`icon${capitalize(ownerState.variant)}`], ownerState.open && styles2.iconOpen];
  }
})(nativeSelectIconStyles);
const NativeSelectInput = /* @__PURE__ */ reactExports.forwardRef(function NativeSelectInput2(props, ref) {
  const {
    className,
    disabled,
    error,
    IconComponent,
    inputRef,
    variant = "standard"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$7);
  const ownerState = _extends({}, props, {
    disabled,
    variant,
    error
  });
  const classes = useUtilityClasses$6(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(NativeSelectSelect, _extends({
      ownerState,
      className: clsx(classes.select, className),
      disabled,
      ref: inputRef || ref
    }, other)), props.multiple ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(NativeSelectIcon, {
      as: IconComponent,
      ownerState,
      className: classes.icon
    })]
  });
});
const NativeSelectInput$1 = NativeSelectInput;
var _span$1;
const _excluded$6 = ["children", "classes", "className", "label", "notched"];
const NotchedOutlineRoot$1 = styled("fieldset", {
  shouldForwardProp: rootShouldForwardProp
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
});
const NotchedOutlineLegend = styled("legend", {
  shouldForwardProp: rootShouldForwardProp
})(({
  ownerState,
  theme
}) => _extends({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden"
}, !ownerState.withLabel && {
  padding: 0,
  lineHeight: "11px",
  // sync with `height` in `legend` styles
  transition: theme.transitions.create("width", {
    duration: 150,
    easing: theme.transitions.easing.easeOut
  })
}, ownerState.withLabel && _extends({
  display: "block",
  // Fix conflict with normalize.css and sanitize.css
  padding: 0,
  height: 11,
  // sync with `lineHeight` in `legend` styles
  fontSize: "0.75em",
  visibility: "hidden",
  maxWidth: 0.01,
  transition: theme.transitions.create("max-width", {
    duration: 50,
    easing: theme.transitions.easing.easeOut
  }),
  whiteSpace: "nowrap",
  "& > span": {
    paddingLeft: 5,
    paddingRight: 5,
    display: "inline-block",
    opacity: 0,
    visibility: "visible"
  }
}, ownerState.notched && {
  maxWidth: "100%",
  transition: theme.transitions.create("max-width", {
    duration: 100,
    easing: theme.transitions.easing.easeOut,
    delay: 50
  })
})));
function NotchedOutline(props) {
  const {
    className,
    label,
    notched
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$6);
  const withLabel = label != null && label !== "";
  const ownerState = _extends({}, props, {
    notched,
    withLabel
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(NotchedOutlineRoot$1, _extends({
    "aria-hidden": true,
    className,
    ownerState
  }, other, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(NotchedOutlineLegend, {
      ownerState,
      children: withLabel ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        children: label
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        _span$1 || (_span$1 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
const _excluded$5 = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"];
const useUtilityClasses$5 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getOutlinedInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
const OutlinedInputRoot = styled(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: rootOverridesResolver
})(({
  theme,
  ownerState
}) => {
  const borderColor2 = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return _extends({
    position: "relative",
    borderRadius: (theme.vars || theme).shape.borderRadius,
    [`&:hover .${outlinedInputClasses$1.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${outlinedInputClasses$1.notchedOutline}`]: {
        borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor2
      }
    },
    [`&.${outlinedInputClasses$1.focused} .${outlinedInputClasses$1.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette[ownerState.color].main,
      borderWidth: 2
    },
    [`&.${outlinedInputClasses$1.error} .${outlinedInputClasses$1.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.error.main
    },
    [`&.${outlinedInputClasses$1.disabled} .${outlinedInputClasses$1.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.action.disabled
    }
  }, ownerState.startAdornment && {
    paddingLeft: 14
  }, ownerState.endAdornment && {
    paddingRight: 14
  }, ownerState.multiline && _extends({
    padding: "16.5px 14px"
  }, ownerState.size === "small" && {
    padding: "8.5px 14px"
  }));
});
const NotchedOutlineRoot = styled(NotchedOutline, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (props, styles2) => styles2.notchedOutline
})(({
  theme
}) => {
  const borderColor2 = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor2
  };
});
const OutlinedInputInput = styled(InputBaseComponent, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(({
  theme,
  ownerState
}) => _extends({
  padding: "16.5px 14px"
}, !theme.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: theme.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: theme.palette.mode === "light" ? null : "#fff",
    caretColor: theme.palette.mode === "light" ? null : "#fff",
    borderRadius: "inherit"
  }
}, theme.vars && {
  "&:-webkit-autofill": {
    borderRadius: "inherit"
  },
  [theme.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, ownerState.size === "small" && {
  padding: "8.5px 14px"
}, ownerState.multiline && {
  padding: 0
}, ownerState.startAdornment && {
  paddingLeft: 0
}, ownerState.endAdornment && {
  paddingRight: 0
}));
const OutlinedInput = /* @__PURE__ */ reactExports.forwardRef(function OutlinedInput2(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$input, _React$Fragment;
  const props = useThemeProps({
    props: inProps,
    name: "MuiOutlinedInput"
  });
  const {
    components = {},
    fullWidth = false,
    inputComponent = "input",
    label,
    multiline = false,
    notched,
    slots = {},
    type = "text"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$5);
  const classes = useUtilityClasses$5(props);
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  });
  const ownerState = _extends({}, props, {
    color: fcs.color || "primary",
    disabled: fcs.disabled,
    error: fcs.error,
    focused: fcs.focused,
    formControl: muiFormControl,
    fullWidth,
    hiddenLabel: fcs.hiddenLabel,
    multiline,
    size: fcs.size,
    type
  });
  const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : OutlinedInputRoot;
  const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : OutlinedInputInput;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(InputBase$1, _extends({
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    renderSuffix: (state) => /* @__PURE__ */ jsxRuntimeExports.jsx(NotchedOutlineRoot, {
      ownerState,
      className: classes.notchedOutline,
      label: label != null && label !== "" && fcs.required ? _React$Fragment || (_React$Fragment = /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
        children: [label, " ", "*"]
      })) : label,
      notched: typeof notched !== "undefined" ? notched : Boolean(state.startAdornment || state.filled || state.focused)
    }),
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other, {
    classes: _extends({}, classes, {
      notchedOutline: null
    })
  }));
});
OutlinedInput.muiName = "Input";
const OutlinedInput$1 = OutlinedInput;
function getSelectUtilityClasses(slot) {
  return generateUtilityClass("MuiSelect", slot);
}
const selectClasses = generateUtilityClasses("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var _span;
const _excluded$4 = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"];
const SelectSelect = styled("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [
      // Win specificity over the input base
      {
        [`&.${selectClasses.select}`]: styles2.select
      },
      {
        [`&.${selectClasses.select}`]: styles2[ownerState.variant]
      },
      {
        [`&.${selectClasses.error}`]: styles2.error
      },
      {
        [`&.${selectClasses.multiple}`]: styles2.multiple
      }
    ];
  }
})(nativeSelectSelectStyles, {
  // Win specificity over the input base
  [`&.${selectClasses.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
});
const SelectIcon = styled("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.icon, ownerState.variant && styles2[`icon${capitalize(ownerState.variant)}`], ownerState.open && styles2.iconOpen];
  }
})(nativeSelectIconStyles);
const SelectNativeInput = styled("input", {
  shouldForwardProp: (prop) => slotShouldForwardProp(prop) && prop !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (props, styles2) => styles2.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function areEqualValues(a2, b3) {
  if (typeof b3 === "object" && b3 !== null) {
    return a2 === b3;
  }
  return String(a2) === String(b3);
}
function isEmpty(display) {
  return display == null || typeof display === "string" && !display.trim();
}
const useUtilityClasses$4 = (ownerState) => {
  const {
    classes,
    variant,
    disabled,
    multiple,
    open,
    error
  } = ownerState;
  const slots = {
    select: ["select", variant, disabled && "disabled", multiple && "multiple", error && "error"],
    icon: ["icon", `icon${capitalize(variant)}`, open && "iconOpen", disabled && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return composeClasses(slots, getSelectUtilityClasses, classes);
};
const SelectInput = /* @__PURE__ */ reactExports.forwardRef(function SelectInput2(props, ref) {
  var _MenuProps$slotProps;
  const {
    "aria-describedby": ariaDescribedby,
    "aria-label": ariaLabel,
    autoFocus,
    autoWidth,
    children,
    className,
    defaultOpen,
    defaultValue,
    disabled,
    displayEmpty,
    error = false,
    IconComponent,
    inputRef: inputRefProp,
    labelId,
    MenuProps = {},
    multiple,
    name,
    onBlur,
    onChange,
    onClose,
    onFocus,
    onOpen,
    open: openProp,
    readOnly,
    renderValue,
    SelectDisplayProps = {},
    tabIndex: tabIndexProp,
    value: valueProp,
    variant = "standard"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$4);
  const [value, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "Select"
  });
  const [openState, setOpenState] = useControlled({
    controlled: openProp,
    default: defaultOpen,
    name: "Select"
  });
  const inputRef = reactExports.useRef(null);
  const displayRef = reactExports.useRef(null);
  const [displayNode, setDisplayNode] = reactExports.useState(null);
  const {
    current: isOpenControlled
  } = reactExports.useRef(openProp != null);
  const [menuMinWidthState, setMenuMinWidthState] = reactExports.useState();
  const handleRef = useForkRef(ref, inputRefProp);
  const handleDisplayRef = reactExports.useCallback((node2) => {
    displayRef.current = node2;
    if (node2) {
      setDisplayNode(node2);
    }
  }, []);
  const anchorElement = displayNode == null ? void 0 : displayNode.parentNode;
  reactExports.useImperativeHandle(handleRef, () => ({
    focus: () => {
      displayRef.current.focus();
    },
    node: inputRef.current,
    value
  }), [value]);
  reactExports.useEffect(() => {
    if (defaultOpen && openState && displayNode && !isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth);
      displayRef.current.focus();
    }
  }, [displayNode, autoWidth]);
  reactExports.useEffect(() => {
    if (autoFocus) {
      displayRef.current.focus();
    }
  }, [autoFocus]);
  reactExports.useEffect(() => {
    if (!labelId) {
      return void 0;
    }
    const label = ownerDocument(displayRef.current).getElementById(labelId);
    if (label) {
      const handler = () => {
        if (getSelection().isCollapsed) {
          displayRef.current.focus();
        }
      };
      label.addEventListener("click", handler);
      return () => {
        label.removeEventListener("click", handler);
      };
    }
    return void 0;
  }, [labelId]);
  const update = (open2, event) => {
    if (open2) {
      if (onOpen) {
        onOpen(event);
      }
    } else if (onClose) {
      onClose(event);
    }
    if (!isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth);
      setOpenState(open2);
    }
  };
  const handleMouseDown = (event) => {
    if (event.button !== 0) {
      return;
    }
    event.preventDefault();
    displayRef.current.focus();
    update(true, event);
  };
  const handleClose = (event) => {
    update(false, event);
  };
  const childrenArray = reactExports.Children.toArray(children);
  const handleChange = (event) => {
    const child = childrenArray.find((childItem) => childItem.props.value === event.target.value);
    if (child === void 0) {
      return;
    }
    setValueState(child.props.value);
    if (onChange) {
      onChange(event, child);
    }
  };
  const handleItemClick = (child) => (event) => {
    let newValue;
    if (!event.currentTarget.hasAttribute("tabindex")) {
      return;
    }
    if (multiple) {
      newValue = Array.isArray(value) ? value.slice() : [];
      const itemIndex = value.indexOf(child.props.value);
      if (itemIndex === -1) {
        newValue.push(child.props.value);
      } else {
        newValue.splice(itemIndex, 1);
      }
    } else {
      newValue = child.props.value;
    }
    if (child.props.onClick) {
      child.props.onClick(event);
    }
    if (value !== newValue) {
      setValueState(newValue);
      if (onChange) {
        const nativeEvent = event.nativeEvent || event;
        const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
        Object.defineProperty(clonedEvent, "target", {
          writable: true,
          value: {
            value: newValue,
            name
          }
        });
        onChange(clonedEvent, child);
      }
    }
    if (!multiple) {
      update(false, event);
    }
  };
  const handleKeyDown2 = (event) => {
    if (!readOnly) {
      const validKeys = [
        " ",
        "ArrowUp",
        "ArrowDown",
        // The native select doesn't respond to enter on macOS, but it's recommended by
        // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
        "Enter"
      ];
      if (validKeys.indexOf(event.key) !== -1) {
        event.preventDefault();
        update(true, event);
      }
    }
  };
  const open = displayNode !== null && openState;
  const handleBlur = (event) => {
    if (!open && onBlur) {
      Object.defineProperty(event, "target", {
        writable: true,
        value: {
          value,
          name
        }
      });
      onBlur(event);
    }
  };
  delete other["aria-invalid"];
  let display;
  let displaySingle;
  const displayMultiple = [];
  let computeDisplay = false;
  if (isFilled({
    value
  }) || displayEmpty) {
    if (renderValue) {
      display = renderValue(value);
    } else {
      computeDisplay = true;
    }
  }
  const items = childrenArray.map((child) => {
    if (!/* @__PURE__ */ reactExports.isValidElement(child)) {
      return null;
    }
    let selected;
    if (multiple) {
      if (!Array.isArray(value)) {
        throw new Error(formatMuiErrorMessage(2));
      }
      selected = value.some((v3) => areEqualValues(v3, child.props.value));
      if (selected && computeDisplay) {
        displayMultiple.push(child.props.children);
      }
    } else {
      selected = areEqualValues(value, child.props.value);
      if (selected && computeDisplay) {
        displaySingle = child.props.children;
      }
    }
    return /* @__PURE__ */ reactExports.cloneElement(child, {
      "aria-selected": selected ? "true" : "false",
      onClick: handleItemClick(child),
      onKeyUp: (event) => {
        if (event.key === " ") {
          event.preventDefault();
        }
        if (child.props.onKeyUp) {
          child.props.onKeyUp(event);
        }
      },
      role: "option",
      selected,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": child.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  if (computeDisplay) {
    if (multiple) {
      if (displayMultiple.length === 0) {
        display = null;
      } else {
        display = displayMultiple.reduce((output, child, index) => {
          output.push(child);
          if (index < displayMultiple.length - 1) {
            output.push(", ");
          }
          return output;
        }, []);
      }
    } else {
      display = displaySingle;
    }
  }
  let menuMinWidth = menuMinWidthState;
  if (!autoWidth && isOpenControlled && displayNode) {
    menuMinWidth = anchorElement.clientWidth;
  }
  let tabIndex;
  if (typeof tabIndexProp !== "undefined") {
    tabIndex = tabIndexProp;
  } else {
    tabIndex = disabled ? null : 0;
  }
  const buttonId = SelectDisplayProps.id || (name ? `mui-component-select-${name}` : void 0);
  const ownerState = _extends({}, props, {
    variant,
    value,
    open,
    error
  });
  const classes = useUtilityClasses$4(ownerState);
  const paperProps = _extends({}, MenuProps.PaperProps, (_MenuProps$slotProps = MenuProps.slotProps) == null ? void 0 : _MenuProps$slotProps.paper);
  const listboxId = useId();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(SelectSelect, _extends({
      ref: handleDisplayRef,
      tabIndex,
      role: "combobox",
      "aria-controls": listboxId,
      "aria-disabled": disabled ? "true" : void 0,
      "aria-expanded": open ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": ariaLabel,
      "aria-labelledby": [labelId, buttonId].filter(Boolean).join(" ") || void 0,
      "aria-describedby": ariaDescribedby,
      onKeyDown: handleKeyDown2,
      onMouseDown: disabled || readOnly ? null : handleMouseDown,
      onBlur: handleBlur,
      onFocus
    }, SelectDisplayProps, {
      ownerState,
      className: clsx(SelectDisplayProps.className, classes.select, className),
      id: buttonId,
      children: isEmpty(display) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        _span || (_span = /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : display
    })), /* @__PURE__ */ jsxRuntimeExports.jsx(SelectNativeInput, _extends({
      "aria-invalid": error,
      value: Array.isArray(value) ? value.join(",") : value,
      name,
      ref: inputRef,
      "aria-hidden": true,
      onChange: handleChange,
      tabIndex: -1,
      disabled,
      className: classes.nativeInput,
      autoFocus,
      ownerState
    }, other)), /* @__PURE__ */ jsxRuntimeExports.jsx(SelectIcon, {
      as: IconComponent,
      className: classes.icon,
      ownerState
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Menu$1, _extends({
      id: `menu-${name || ""}`,
      anchorEl: anchorElement,
      open,
      onClose: handleClose,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, MenuProps, {
      MenuListProps: _extends({
        "aria-labelledby": labelId,
        role: "listbox",
        "aria-multiselectable": multiple ? "true" : void 0,
        disableListWrap: true,
        id: listboxId
      }, MenuProps.MenuListProps),
      slotProps: _extends({}, MenuProps.slotProps, {
        paper: _extends({}, paperProps, {
          style: _extends({
            minWidth: menuMinWidth
          }, paperProps != null ? paperProps.style : null)
        })
      }),
      children: items
    }))]
  });
});
const SelectInput$1 = SelectInput;
const _excluded$3 = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], _excluded2$1 = ["root"];
const useUtilityClasses$3 = (ownerState) => {
  const {
    classes
  } = ownerState;
  return classes;
};
const styledRootConfig = {
  name: "MuiSelect",
  overridesResolver: (props, styles2) => styles2.root,
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) && prop !== "variant",
  slot: "Root"
};
const StyledInput = styled(Input$1, styledRootConfig)("");
const StyledOutlinedInput = styled(OutlinedInput$1, styledRootConfig)("");
const StyledFilledInput = styled(FilledInput$1, styledRootConfig)("");
const Select = /* @__PURE__ */ reactExports.forwardRef(function Select2(inProps, ref) {
  const props = useThemeProps({
    name: "MuiSelect",
    props: inProps
  });
  const {
    autoWidth = false,
    children,
    classes: classesProp = {},
    className,
    defaultOpen = false,
    displayEmpty = false,
    IconComponent = ArrowDropDownIcon,
    id,
    input,
    inputProps,
    label,
    labelId,
    MenuProps,
    multiple = false,
    native = false,
    onClose,
    onOpen,
    open,
    renderValue,
    SelectDisplayProps,
    variant: variantProp = "outlined"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$3);
  const inputComponent = native ? NativeSelectInput$1 : SelectInput$1;
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant", "error"]
  });
  const variant = fcs.variant || variantProp;
  const ownerState = _extends({}, props, {
    variant,
    classes: classesProp
  });
  const classes = useUtilityClasses$3(ownerState);
  const restOfClasses = _objectWithoutPropertiesLoose(classes, _excluded2$1);
  const InputComponent = input || {
    standard: /* @__PURE__ */ jsxRuntimeExports.jsx(StyledInput, {
      ownerState
    }),
    outlined: /* @__PURE__ */ jsxRuntimeExports.jsx(StyledOutlinedInput, {
      label,
      ownerState
    }),
    filled: /* @__PURE__ */ jsxRuntimeExports.jsx(StyledFilledInput, {
      ownerState
    })
  }[variant];
  const inputComponentRef = useForkRef(ref, InputComponent.ref);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, {
    children: /* @__PURE__ */ reactExports.cloneElement(InputComponent, _extends({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent,
      inputProps: _extends({
        children,
        error: fcs.error,
        IconComponent,
        variant,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple
      }, native ? {
        id
      } : {
        autoWidth,
        defaultOpen,
        displayEmpty,
        labelId,
        MenuProps,
        onClose,
        onOpen,
        open,
        renderValue,
        SelectDisplayProps: _extends({
          id
        }, SelectDisplayProps)
      }, inputProps, {
        classes: inputProps ? deepmerge(restOfClasses, inputProps.classes) : restOfClasses
      }, input ? input.props.inputProps : {})
    }, multiple && native && variant === "outlined" ? {
      notched: true
    } : {}, {
      ref: inputComponentRef,
      className: clsx(InputComponent.props.className, className, classes.root)
    }, !input && {
      variant
    }, other))
  });
});
Select.muiName = "Select";
const Select$1 = Select;
function getSnackbarContentUtilityClass(slot) {
  return generateUtilityClass("MuiSnackbarContent", slot);
}
generateUtilityClasses("MuiSnackbarContent", ["root", "message", "action"]);
const _excluded$2 = ["action", "className", "message", "role"];
const useUtilityClasses$2 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    action: ["action"],
    message: ["message"]
  };
  return composeClasses(slots, getSnackbarContentUtilityClass, classes);
};
const SnackbarContentRoot = styled(Paper$1, {
  name: "MuiSnackbarContent",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})(({
  theme
}) => {
  const emphasis = theme.palette.mode === "light" ? 0.8 : 0.98;
  const backgroundColor2 = emphasize(theme.palette.background.default, emphasis);
  return _extends({}, theme.typography.body2, {
    color: theme.vars ? theme.vars.palette.SnackbarContent.color : theme.palette.getContrastText(backgroundColor2),
    backgroundColor: theme.vars ? theme.vars.palette.SnackbarContent.bg : backgroundColor2,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "6px 16px",
    borderRadius: (theme.vars || theme).shape.borderRadius,
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      flexGrow: "initial",
      minWidth: 288
    }
  });
});
const SnackbarContentMessage = styled("div", {
  name: "MuiSnackbarContent",
  slot: "Message",
  overridesResolver: (props, styles2) => styles2.message
})({
  padding: "8px 0"
});
const SnackbarContentAction = styled("div", {
  name: "MuiSnackbarContent",
  slot: "Action",
  overridesResolver: (props, styles2) => styles2.action
})({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  paddingLeft: 16,
  marginRight: -8
});
const SnackbarContent = /* @__PURE__ */ reactExports.forwardRef(function SnackbarContent2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiSnackbarContent"
  });
  const {
    action,
    className,
    message,
    role = "alert"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$2);
  const ownerState = props;
  const classes = useUtilityClasses$2(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SnackbarContentRoot, _extends({
    role,
    square: true,
    elevation: 6,
    className: clsx(classes.root, className),
    ownerState,
    ref
  }, other, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(SnackbarContentMessage, {
      className: classes.message,
      ownerState,
      children: message
    }), action ? /* @__PURE__ */ jsxRuntimeExports.jsx(SnackbarContentAction, {
      className: classes.action,
      ownerState,
      children: action
    }) : null]
  }));
});
const SnackbarContent$1 = SnackbarContent;
function getSnackbarUtilityClass(slot) {
  return generateUtilityClass("MuiSnackbar", slot);
}
generateUtilityClasses("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const _excluded$1 = ["onEnter", "onExited"], _excluded2 = ["action", "anchorOrigin", "autoHideDuration", "children", "className", "ClickAwayListenerProps", "ContentProps", "disableWindowBlurListener", "message", "onBlur", "onClose", "onFocus", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration", "TransitionComponent", "transitionDuration", "TransitionProps"];
const useUtilityClasses$1 = (ownerState) => {
  const {
    classes,
    anchorOrigin
  } = ownerState;
  const slots = {
    root: ["root", `anchorOrigin${capitalize(anchorOrigin.vertical)}${capitalize(anchorOrigin.horizontal)}`]
  };
  return composeClasses(slots, getSnackbarUtilityClass, classes);
};
const SnackbarRoot = styled("div", {
  name: "MuiSnackbar",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[`anchorOrigin${capitalize(ownerState.anchorOrigin.vertical)}${capitalize(ownerState.anchorOrigin.horizontal)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  const center = {
    left: "50%",
    right: "auto",
    transform: "translateX(-50%)"
  };
  return _extends({
    zIndex: (theme.vars || theme).zIndex.snackbar,
    position: "fixed",
    display: "flex",
    left: 8,
    right: 8,
    justifyContent: "center",
    alignItems: "center"
  }, ownerState.anchorOrigin.vertical === "top" ? {
    top: 8
  } : {
    bottom: 8
  }, ownerState.anchorOrigin.horizontal === "left" && {
    justifyContent: "flex-start"
  }, ownerState.anchorOrigin.horizontal === "right" && {
    justifyContent: "flex-end"
  }, {
    [theme.breakpoints.up("sm")]: _extends({}, ownerState.anchorOrigin.vertical === "top" ? {
      top: 24
    } : {
      bottom: 24
    }, ownerState.anchorOrigin.horizontal === "center" && center, ownerState.anchorOrigin.horizontal === "left" && {
      left: 24,
      right: "auto"
    }, ownerState.anchorOrigin.horizontal === "right" && {
      right: 24,
      left: "auto"
    })
  });
});
const Snackbar = /* @__PURE__ */ reactExports.forwardRef(function Snackbar2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiSnackbar"
  });
  const theme = useTheme();
  const defaultTransitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    action,
    anchorOrigin: {
      vertical,
      horizontal
    } = {
      vertical: "bottom",
      horizontal: "left"
    },
    autoHideDuration = null,
    children,
    className,
    ClickAwayListenerProps,
    ContentProps,
    disableWindowBlurListener = false,
    message,
    open,
    TransitionComponent = Grow$1,
    transitionDuration = defaultTransitionDuration,
    TransitionProps: {
      onEnter,
      onExited
    } = {}
  } = props, TransitionProps = _objectWithoutPropertiesLoose(props.TransitionProps, _excluded$1), other = _objectWithoutPropertiesLoose(props, _excluded2);
  const ownerState = _extends({}, props, {
    anchorOrigin: {
      vertical,
      horizontal
    },
    autoHideDuration,
    disableWindowBlurListener,
    TransitionComponent,
    transitionDuration
  });
  const classes = useUtilityClasses$1(ownerState);
  const {
    getRootProps,
    onClickAway
  } = useSnackbar(_extends({}, ownerState));
  const [exited, setExited] = reactExports.useState(true);
  const rootProps = useSlotProps({
    elementType: SnackbarRoot,
    getSlotProps: getRootProps,
    externalForwardedProps: other,
    ownerState,
    additionalProps: {
      ref
    },
    className: [classes.root, className]
  });
  const handleExited = (node2) => {
    setExited(true);
    if (onExited) {
      onExited(node2);
    }
  };
  const handleEnter = (node2, isAppearing) => {
    setExited(false);
    if (onEnter) {
      onEnter(node2, isAppearing);
    }
  };
  if (!open && exited) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ClickAwayListener, _extends({
    onClickAway
  }, ClickAwayListenerProps, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SnackbarRoot, _extends({}, rootProps, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, _extends({
        appear: true,
        in: open,
        timeout: transitionDuration,
        direction: vertical === "top" ? "down" : "up",
        onEnter: handleEnter,
        onExited: handleExited
      }, TransitionProps, {
        children: children || /* @__PURE__ */ jsxRuntimeExports.jsx(SnackbarContent$1, _extends({
          message,
          action
        }, ContentProps))
      }))
    }))
  }));
});
const Snackbar$1 = Snackbar;
function getTextFieldUtilityClass(slot) {
  return generateUtilityClass("MuiTextField", slot);
}
generateUtilityClasses("MuiTextField", ["root"]);
const _excluded = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"];
const variantComponent = {
  standard: Input$1,
  filled: FilledInput$1,
  outlined: OutlinedInput$1
};
const useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTextFieldUtilityClass, classes);
};
const TextFieldRoot = styled(FormControl$1, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})({});
const TextField = /* @__PURE__ */ reactExports.forwardRef(function TextField2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTextField"
  });
  const {
    autoComplete,
    autoFocus = false,
    children,
    className,
    color: color2 = "primary",
    defaultValue,
    disabled = false,
    error = false,
    FormHelperTextProps,
    fullWidth = false,
    helperText,
    id: idOverride,
    InputLabelProps,
    inputProps,
    InputProps,
    inputRef,
    label,
    maxRows,
    minRows,
    multiline = false,
    name,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    required = false,
    rows,
    select = false,
    SelectProps,
    type,
    value,
    variant = "outlined"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    autoFocus,
    color: color2,
    disabled,
    error,
    fullWidth,
    multiline,
    required,
    select,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  const InputMore = {};
  if (variant === "outlined") {
    if (InputLabelProps && typeof InputLabelProps.shrink !== "undefined") {
      InputMore.notched = InputLabelProps.shrink;
    }
    InputMore.label = label;
  }
  if (select) {
    if (!SelectProps || !SelectProps.native) {
      InputMore.id = void 0;
    }
    InputMore["aria-describedby"] = void 0;
  }
  const id = useId(idOverride);
  const helperTextId = helperText && id ? `${id}-helper-text` : void 0;
  const inputLabelId = label && id ? `${id}-label` : void 0;
  const InputComponent = variantComponent[variant];
  const InputElement = /* @__PURE__ */ jsxRuntimeExports.jsx(InputComponent, _extends({
    "aria-describedby": helperTextId,
    autoComplete,
    autoFocus,
    defaultValue,
    fullWidth,
    multiline,
    name,
    rows,
    maxRows,
    minRows,
    type,
    value,
    id,
    inputRef,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    inputProps
  }, InputMore, InputProps));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(TextFieldRoot, _extends({
    className: clsx(classes.root, className),
    disabled,
    error,
    fullWidth,
    ref,
    required,
    color: color2,
    variant,
    ownerState
  }, other, {
    children: [label != null && label !== "" && /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel$1, _extends({
      htmlFor: id,
      id: inputLabelId
    }, InputLabelProps, {
      children: label
    })), select ? /* @__PURE__ */ jsxRuntimeExports.jsx(Select$1, _extends({
      "aria-describedby": helperTextId,
      id,
      labelId: inputLabelId,
      value,
      input: InputElement
    }, SelectProps, {
      children
    })) : InputElement, helperText && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText$1, _extends({
      id: helperTextId
    }, FormHelperTextProps, {
      children: helperText
    }))]
  }));
});
const TextField$1 = TextField;
const WsControllerContext = reactExports.createContext(null);
const WsControllerContextProvider = ({ children, wsContoller }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(WsControllerContext.Provider, { value: wsContoller, children });
};
function Message({
  content,
  duration: duration2,
  type,
  handleClose
}) {
  const [open, setOpen] = React__default.useState(true);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Snackbar$1,
    {
      open,
      autoHideDuration: duration2,
      anchorOrigin: { vertical: "top", horizontal: "center" },
      onClose: () => {
        setOpen(false);
        handleClose();
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Alert$1, { severity: type, children: content })
    }
  );
}
class ZsMessage {
  static success({
    content,
    duration: duration2
  }) {
    this.renderMessage({
      content: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: content }),
      duration: duration2,
      type: "success"
    });
  }
  static error({ content, duration: duration2 }) {
    this.renderMessage({
      content: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: content }),
      duration: duration2,
      type: "error"
    });
  }
  static warning({
    content,
    duration: duration2
  }) {
    this.renderMessage({
      content: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: content }),
      duration: duration2,
      type: "warning"
    });
  }
  static info({ content, duration: duration2 }) {
    this.renderMessage({
      content: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: content }),
      duration: duration2,
      type: "info"
    });
  }
  static renderMessage({
    content,
    duration: duration2 = 1e3,
    type
  }) {
    const dom = document.createElement("div");
    const root = createRoot(dom);
    const handleClose = () => {
      var _a;
      (_a = dom == null ? void 0 : dom.parentNode) == null ? void 0 : _a.removeChild(dom);
    };
    const JSXdom = /* @__PURE__ */ jsxRuntimeExports.jsx(
      Message,
      {
        content,
        duration: duration2,
        type,
        handleClose
      }
    );
    root.render(JSXdom);
    document.body.appendChild(dom);
  }
}
const Container$6 = ut.div`
  width: 100%;
  height: 100px;
  .input-group {
    display: flex;
    height: 36px;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    .title {
      line-height: 36px;
      font-size: 14px;
      padding: 0 5px;
      text-align: center;
      white-space: nowrap;
      background-color: #e9ecef;
    }
    & input {
      padding: 0 10px;
    }
  }
`;
const WsConfig = () => {
  const wsController = React__default.useContext(WsControllerContext);
  const inputRef = React__default.useRef();
  const connect = async () => {
    var _a, _b;
    try {
      if (!((_a = inputRef.current) == null ? void 0 : _a.value)) {
        ZsMessage.error({ content: "address must input", duration: 1e3 });
        return;
      }
      wsController == null ? void 0 : wsController.setOptions({ wsOptions: { address: (_b = inputRef.current) == null ? void 0 : _b.value } });
      await (wsController == null ? void 0 : wsController.connect());
    } catch (error) {
      ZsMessage.error({ content: `${(error == null ? void 0 : error.message) ?? error}`, duration: 2e3 });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Container$6, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardItem, { title: "Server", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "input-group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "title", children: "Server address" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input$1,
      {
        inputRef,
        fullWidth: true,
        size: "small",
        placeholder: "ws address",
        defaultValue: "ws://124.222.224.186:8800",
        disableUnderline: true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button$1,
      {
        disabled: (wsController == null ? void 0 : wsController.connectStatus) !== c$2.closed,
        onClick: () => connect(),
        variant: "contained",
        size: "small",
        color: "success",
        disableElevation: true,
        children: "connect"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button$1,
      {
        disabled: (wsController == null ? void 0 : wsController.connectStatus) !== c$2.connected,
        onClick: () => wsController == null ? void 0 : wsController.close(),
        variant: "contained",
        size: "small",
        color: "warning",
        disableElevation: true,
        children: "close"
      }
    )
  ] }) }) });
};
var classnames = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames2() {
      var classes = "";
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg) {
          classes = appendClass(classes, parseValue(arg));
        }
      }
      return classes;
    }
    function parseValue(arg) {
      if (typeof arg === "string" || typeof arg === "number") {
        return arg;
      }
      if (typeof arg !== "object") {
        return "";
      }
      if (Array.isArray(arg)) {
        return classNames2.apply(null, arg);
      }
      if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
        return arg.toString();
      }
      var classes = "";
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes = appendClass(classes, key);
        }
      }
      return classes;
    }
    function appendClass(value, newClass) {
      if (!newClass) {
        return value;
      }
      if (value) {
        return value + " " + newClass;
      }
      return value + newClass;
    }
    if (module.exports) {
      classNames2.default = classNames2;
      module.exports = classNames2;
    } else {
      window.classNames = classNames2;
    }
  })();
})(classnames);
var classnamesExports = classnames.exports;
const classNames = /* @__PURE__ */ getDefaultExportFromCjs(classnamesExports);
const Container$5 = ut.div`
  width: 100%;
  height: 100px;
  .status-group {
    display: flex;
    height: 36px;
    align-items: center;
    justify-content: flex-start;
    .status {
      height: 32px;
      width: 32px;
      border-radius: 16px;
      margin-right: 20px;
      background-color: #5e5c5c;
    }
    .status--closed {
      background-color: #c32121;
    }
    .status--connected {
      background-color: #12b91f;
    }
    .status--processing {
      background-color: #ef8e15;
    }
    .text {
      margin-left: auto
    }
  }
`;
const WsStatus = () => {
  const wsController = reactExports.useContext(WsControllerContext);
  const [socketStatus, setSocketStatus] = reactExports.useState(c$2.closed);
  useOnMount(() => {
    wsController == null ? void 0 : wsController.addEventListener("status", statusChangeReceiver);
  });
  useOnUnmount(() => {
    wsController == null ? void 0 : wsController.removeEventListener("status", statusChangeReceiver);
  });
  const statusChangeReceiver = (status) => {
    setSocketStatus(status);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Container$5, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardItem, { title: "connect state", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "status-group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames("status", { "status--closed": socketStatus == c$2.closed }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames("status", { "status--processing": [c$2.connecting, c$2.closing].includes(socketStatus) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames("status", { "status--connected": socketStatus == c$2.connected }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { onClick: () => console.log(socketStatus), className: "text", children: [
      "state: ",
      socketStatus
    ] })
  ] }) }) });
};
function loopFunc(func, time = 1e3) {
  let status = false;
  let timer;
  let intervalTime = 1e3;
  if (time) {
    intervalTime = time;
  }
  const refresh = async () => {
    try {
      await func();
    } finally {
      if (status) {
        timer = setTimeout(() => {
          clearTimeout(timer);
          refresh();
        }, intervalTime);
      }
    }
  };
  const start = () => {
    if (status) {
      throw new Error("ready start!");
    }
    status = true;
    refresh();
  };
  const setTime = (time2) => {
    intervalTime = time2;
  };
  const stop = () => status = false;
  return {
    start,
    stop,
    refresh,
    setTime
  };
}
const Container$4 = ut.div`
  width: 100%;
  .send-group {
    height: fit-content;
    display: flex;
    flex-direction: column;
    .text-content {
      margin-bottom: 5px;
    }
    .input-content {
      display: flex;
      height: 36px;
      border: 1px solid rgba(0,0,0,.125);
      border-radius: 0.25rem;
      .title{
        line-height: 36px;
        font-size: 14px;
        padding: 0 5px;
        text-align: center;
        white-space: nowrap;
        background-color: #e9ecef;
      }
      & input {
        padding: 0 10px;
      }
    }
  }
`;
let loopLoigc = null;
const IntervalSend = ({ setMessage }) => {
  const textFieldRef = React__default.useRef();
  const [open, setOpen] = React__default.useState(false);
  const wsController = React__default.useContext(WsControllerContext);
  useOnMount(() => {
    loopLoigc = loopFunc(async () => {
      var _a, _b;
      if ((wsController == null ? void 0 : wsController.connectStatus) !== c$2.connected) {
        loopLoigc.stop();
        setOpen(false);
        return;
      }
      setMessage((_a = textFieldRef.current) == null ? void 0 : _a.value);
      wsController == null ? void 0 : wsController.send(((_b = textFieldRef.current) == null ? void 0 : _b.value) ?? "");
    }, 1e3);
  });
  const startLoop = () => {
    var _a;
    if ((wsController == null ? void 0 : wsController.connectStatus) !== c$2.connected) {
      ZsMessage.warning({ content: "请先开启链接" });
      return;
    }
    if (!((_a = textFieldRef == null ? void 0 : textFieldRef.current) == null ? void 0 : _a.value)) {
      ZsMessage.warning({ content: "请输入要发送的内容" });
      return;
    }
    loopLoigc.start();
    setOpen(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Container$4, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardItem, { title: "Interval send", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "send-group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TextField$1,
      {
        inputRef: textFieldRef,
        className: "text-content",
        id: "outlined-textarea",
        multiline: true,
        variant: "outlined",
        maxRows: 4
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "input-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "title", children: "interval(seconds)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input$1,
        {
          fullWidth: true,
          size: "small",
          placeholder: "ws address",
          disableUnderline: true,
          type: "number",
          defaultValue: 1,
          onChange: (event) => {
            loopLoigc.setTime(Number(event.target.value) * 1e3);
          },
          inputProps: { min: 0 }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button$1, { disabled: (wsController == null ? void 0 : wsController.connectStatus) !== c$2.connected, style: { display: !open ? "block" : "none" }, onClick: () => startLoop(), variant: "contained", size: "small", color: "success", disableElevation: true, children: "start" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button$1, { disabled: (wsController == null ? void 0 : wsController.connectStatus) !== c$2.connected, style: { display: !open ? "none" : "block" }, onClick: () => {
        loopLoigc.stop();
        setOpen(false);
      }, variant: "contained", size: "small", color: "success", disableElevation: true, children: "close" })
    ] })
  ] }) }) });
};
const Container$3 = ut.div`
  width: 100%;
  .send-group {
    height: fit-content;
    display: flex;
    flex-direction: column;
    .text-content {
      margin-bottom: 5px;
    }
    .input-content {
      display: flex;
      height: 36px;
      border: 1px solid rgba(0, 0, 0, 0.125);
      border-radius: 0.25rem;
    }
  }
`;
const TemporarySend = ({ setMessage }) => {
  const textFieldRef = React__default.useRef();
  const wsController = React__default.useContext(WsControllerContext);
  const startLoop = () => {
    var _a, _b, _c;
    if ((wsController == null ? void 0 : wsController.connectStatus) !== c$2.connected) {
      ZsMessage.warning({ content: "Please connect before you send." });
      return;
    }
    if (!((_a = textFieldRef == null ? void 0 : textFieldRef.current) == null ? void 0 : _a.value)) {
      ZsMessage.warning({ content: "The message cannot be empty." });
      return;
    }
    setMessage((_b = textFieldRef.current) == null ? void 0 : _b.value);
    wsController == null ? void 0 : wsController.send((_c = textFieldRef.current) == null ? void 0 : _c.value);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Container$3, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardItem, { title: "Temporary send", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "send-group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TextField$1,
      {
        inputRef: textFieldRef,
        className: "text-content",
        id: "outlined-textarea",
        multiline: true,
        variant: "outlined",
        maxRows: 4
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "input-content", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button$1,
      {
        disabled: (wsController == null ? void 0 : wsController.connectStatus) !== c$2.connected,
        fullWidth: true,
        onClick: () => startLoop(),
        variant: "contained",
        size: "small",
        color: "success",
        disableElevation: true,
        children: "send"
      }
    ) })
  ] }) }) });
};
var dayjs_min = { exports: {} };
(function(module, exports) {
  !function(t2, e2) {
    module.exports = e2();
  }(commonjsGlobal, function() {
    var t2 = 1e3, e2 = 6e4, n2 = 36e5, r2 = "millisecond", i = "second", s = "minute", u2 = "hour", a2 = "day", o = "week", c2 = "month", f2 = "quarter", h2 = "year", d2 = "date", l2 = "Invalid Date", $2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t3) {
      var e3 = ["th", "st", "nd", "rd"], n3 = t3 % 100;
      return "[" + t3 + (e3[(n3 - 20) % 10] || e3[n3] || e3[0]) + "]";
    } }, m2 = function(t3, e3, n3) {
      var r3 = String(t3);
      return !r3 || r3.length >= e3 ? t3 : "" + Array(e3 + 1 - r3.length).join(n3) + t3;
    }, v3 = { s: m2, z: function(t3) {
      var e3 = -t3.utcOffset(), n3 = Math.abs(e3), r3 = Math.floor(n3 / 60), i2 = n3 % 60;
      return (e3 <= 0 ? "+" : "-") + m2(r3, 2, "0") + ":" + m2(i2, 2, "0");
    }, m: function t3(e3, n3) {
      if (e3.date() < n3.date())
        return -t3(n3, e3);
      var r3 = 12 * (n3.year() - e3.year()) + (n3.month() - e3.month()), i2 = e3.clone().add(r3, c2), s2 = n3 - i2 < 0, u3 = e3.clone().add(r3 + (s2 ? -1 : 1), c2);
      return +(-(r3 + (n3 - i2) / (s2 ? i2 - u3 : u3 - i2)) || 0);
    }, a: function(t3) {
      return t3 < 0 ? Math.ceil(t3) || 0 : Math.floor(t3);
    }, p: function(t3) {
      return { M: c2, y: h2, w: o, d: a2, D: d2, h: u2, m: s, s: i, ms: r2, Q: f2 }[t3] || String(t3 || "").toLowerCase().replace(/s$/, "");
    }, u: function(t3) {
      return void 0 === t3;
    } }, g2 = "en", D2 = {};
    D2[g2] = M2;
    var p2 = "$isDayjsObject", S2 = function(t3) {
      return t3 instanceof _2 || !(!t3 || !t3[p2]);
    }, w3 = function t3(e3, n3, r3) {
      var i2;
      if (!e3)
        return g2;
      if ("string" == typeof e3) {
        var s2 = e3.toLowerCase();
        D2[s2] && (i2 = s2), n3 && (D2[s2] = n3, i2 = s2);
        var u3 = e3.split("-");
        if (!i2 && u3.length > 1)
          return t3(u3[0]);
      } else {
        var a3 = e3.name;
        D2[a3] = e3, i2 = a3;
      }
      return !r3 && i2 && (g2 = i2), i2 || !r3 && g2;
    }, O2 = function(t3, e3) {
      if (S2(t3))
        return t3.clone();
      var n3 = "object" == typeof e3 ? e3 : {};
      return n3.date = t3, n3.args = arguments, new _2(n3);
    }, b3 = v3;
    b3.l = w3, b3.i = S2, b3.w = function(t3, e3) {
      return O2(t3, { locale: e3.$L, utc: e3.$u, x: e3.$x, $offset: e3.$offset });
    };
    var _2 = function() {
      function M3(t3) {
        this.$L = w3(t3.locale, null, true), this.parse(t3), this.$x = this.$x || t3.x || {}, this[p2] = true;
      }
      var m3 = M3.prototype;
      return m3.parse = function(t3) {
        this.$d = function(t4) {
          var e3 = t4.date, n3 = t4.utc;
          if (null === e3)
            return /* @__PURE__ */ new Date(NaN);
          if (b3.u(e3))
            return /* @__PURE__ */ new Date();
          if (e3 instanceof Date)
            return new Date(e3);
          if ("string" == typeof e3 && !/Z$/i.test(e3)) {
            var r3 = e3.match($2);
            if (r3) {
              var i2 = r3[2] - 1 || 0, s2 = (r3[7] || "0").substring(0, 3);
              return n3 ? new Date(Date.UTC(r3[1], i2, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s2)) : new Date(r3[1], i2, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s2);
            }
          }
          return new Date(e3);
        }(t3), this.init();
      }, m3.init = function() {
        var t3 = this.$d;
        this.$y = t3.getFullYear(), this.$M = t3.getMonth(), this.$D = t3.getDate(), this.$W = t3.getDay(), this.$H = t3.getHours(), this.$m = t3.getMinutes(), this.$s = t3.getSeconds(), this.$ms = t3.getMilliseconds();
      }, m3.$utils = function() {
        return b3;
      }, m3.isValid = function() {
        return !(this.$d.toString() === l2);
      }, m3.isSame = function(t3, e3) {
        var n3 = O2(t3);
        return this.startOf(e3) <= n3 && n3 <= this.endOf(e3);
      }, m3.isAfter = function(t3, e3) {
        return O2(t3) < this.startOf(e3);
      }, m3.isBefore = function(t3, e3) {
        return this.endOf(e3) < O2(t3);
      }, m3.$g = function(t3, e3, n3) {
        return b3.u(t3) ? this[e3] : this.set(n3, t3);
      }, m3.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, m3.valueOf = function() {
        return this.$d.getTime();
      }, m3.startOf = function(t3, e3) {
        var n3 = this, r3 = !!b3.u(e3) || e3, f3 = b3.p(t3), l3 = function(t4, e4) {
          var i2 = b3.w(n3.$u ? Date.UTC(n3.$y, e4, t4) : new Date(n3.$y, e4, t4), n3);
          return r3 ? i2 : i2.endOf(a2);
        }, $3 = function(t4, e4) {
          return b3.w(n3.toDate()[t4].apply(n3.toDate("s"), (r3 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e4)), n3);
        }, y3 = this.$W, M4 = this.$M, m4 = this.$D, v4 = "set" + (this.$u ? "UTC" : "");
        switch (f3) {
          case h2:
            return r3 ? l3(1, 0) : l3(31, 11);
          case c2:
            return r3 ? l3(1, M4) : l3(0, M4 + 1);
          case o:
            var g3 = this.$locale().weekStart || 0, D3 = (y3 < g3 ? y3 + 7 : y3) - g3;
            return l3(r3 ? m4 - D3 : m4 + (6 - D3), M4);
          case a2:
          case d2:
            return $3(v4 + "Hours", 0);
          case u2:
            return $3(v4 + "Minutes", 1);
          case s:
            return $3(v4 + "Seconds", 2);
          case i:
            return $3(v4 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m3.endOf = function(t3) {
        return this.startOf(t3, false);
      }, m3.$set = function(t3, e3) {
        var n3, o2 = b3.p(t3), f3 = "set" + (this.$u ? "UTC" : ""), l3 = (n3 = {}, n3[a2] = f3 + "Date", n3[d2] = f3 + "Date", n3[c2] = f3 + "Month", n3[h2] = f3 + "FullYear", n3[u2] = f3 + "Hours", n3[s] = f3 + "Minutes", n3[i] = f3 + "Seconds", n3[r2] = f3 + "Milliseconds", n3)[o2], $3 = o2 === a2 ? this.$D + (e3 - this.$W) : e3;
        if (o2 === c2 || o2 === h2) {
          var y3 = this.clone().set(d2, 1);
          y3.$d[l3]($3), y3.init(), this.$d = y3.set(d2, Math.min(this.$D, y3.daysInMonth())).$d;
        } else
          l3 && this.$d[l3]($3);
        return this.init(), this;
      }, m3.set = function(t3, e3) {
        return this.clone().$set(t3, e3);
      }, m3.get = function(t3) {
        return this[b3.p(t3)]();
      }, m3.add = function(r3, f3) {
        var d3, l3 = this;
        r3 = Number(r3);
        var $3 = b3.p(f3), y3 = function(t3) {
          var e3 = O2(l3);
          return b3.w(e3.date(e3.date() + Math.round(t3 * r3)), l3);
        };
        if ($3 === c2)
          return this.set(c2, this.$M + r3);
        if ($3 === h2)
          return this.set(h2, this.$y + r3);
        if ($3 === a2)
          return y3(1);
        if ($3 === o)
          return y3(7);
        var M4 = (d3 = {}, d3[s] = e2, d3[u2] = n2, d3[i] = t2, d3)[$3] || 1, m4 = this.$d.getTime() + r3 * M4;
        return b3.w(m4, this);
      }, m3.subtract = function(t3, e3) {
        return this.add(-1 * t3, e3);
      }, m3.format = function(t3) {
        var e3 = this, n3 = this.$locale();
        if (!this.isValid())
          return n3.invalidDate || l2;
        var r3 = t3 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b3.z(this), s2 = this.$H, u3 = this.$m, a3 = this.$M, o2 = n3.weekdays, c3 = n3.months, f3 = n3.meridiem, h3 = function(t4, n4, i3, s3) {
          return t4 && (t4[n4] || t4(e3, r3)) || i3[n4].slice(0, s3);
        }, d3 = function(t4) {
          return b3.s(s2 % 12 || 12, t4, "0");
        }, $3 = f3 || function(t4, e4, n4) {
          var r4 = t4 < 12 ? "AM" : "PM";
          return n4 ? r4.toLowerCase() : r4;
        };
        return r3.replace(y2, function(t4, r4) {
          return r4 || function(t5) {
            switch (t5) {
              case "YY":
                return String(e3.$y).slice(-2);
              case "YYYY":
                return b3.s(e3.$y, 4, "0");
              case "M":
                return a3 + 1;
              case "MM":
                return b3.s(a3 + 1, 2, "0");
              case "MMM":
                return h3(n3.monthsShort, a3, c3, 3);
              case "MMMM":
                return h3(c3, a3);
              case "D":
                return e3.$D;
              case "DD":
                return b3.s(e3.$D, 2, "0");
              case "d":
                return String(e3.$W);
              case "dd":
                return h3(n3.weekdaysMin, e3.$W, o2, 2);
              case "ddd":
                return h3(n3.weekdaysShort, e3.$W, o2, 3);
              case "dddd":
                return o2[e3.$W];
              case "H":
                return String(s2);
              case "HH":
                return b3.s(s2, 2, "0");
              case "h":
                return d3(1);
              case "hh":
                return d3(2);
              case "a":
                return $3(s2, u3, true);
              case "A":
                return $3(s2, u3, false);
              case "m":
                return String(u3);
              case "mm":
                return b3.s(u3, 2, "0");
              case "s":
                return String(e3.$s);
              case "ss":
                return b3.s(e3.$s, 2, "0");
              case "SSS":
                return b3.s(e3.$ms, 3, "0");
              case "Z":
                return i2;
            }
            return null;
          }(t4) || i2.replace(":", "");
        });
      }, m3.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m3.diff = function(r3, d3, l3) {
        var $3, y3 = this, M4 = b3.p(d3), m4 = O2(r3), v4 = (m4.utcOffset() - this.utcOffset()) * e2, g3 = this - m4, D3 = function() {
          return b3.m(y3, m4);
        };
        switch (M4) {
          case h2:
            $3 = D3() / 12;
            break;
          case c2:
            $3 = D3();
            break;
          case f2:
            $3 = D3() / 3;
            break;
          case o:
            $3 = (g3 - v4) / 6048e5;
            break;
          case a2:
            $3 = (g3 - v4) / 864e5;
            break;
          case u2:
            $3 = g3 / n2;
            break;
          case s:
            $3 = g3 / e2;
            break;
          case i:
            $3 = g3 / t2;
            break;
          default:
            $3 = g3;
        }
        return l3 ? $3 : b3.a($3);
      }, m3.daysInMonth = function() {
        return this.endOf(c2).$D;
      }, m3.$locale = function() {
        return D2[this.$L];
      }, m3.locale = function(t3, e3) {
        if (!t3)
          return this.$L;
        var n3 = this.clone(), r3 = w3(t3, e3, true);
        return r3 && (n3.$L = r3), n3;
      }, m3.clone = function() {
        return b3.w(this.$d, this);
      }, m3.toDate = function() {
        return new Date(this.valueOf());
      }, m3.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, m3.toISOString = function() {
        return this.$d.toISOString();
      }, m3.toString = function() {
        return this.$d.toUTCString();
      }, M3;
    }(), k2 = _2.prototype;
    return O2.prototype = k2, [["$ms", r2], ["$s", i], ["$m", s], ["$H", u2], ["$W", a2], ["$M", c2], ["$y", h2], ["$D", d2]].forEach(function(t3) {
      k2[t3[1]] = function(e3) {
        return this.$g(e3, t3[0], t3[1]);
      };
    }), O2.extend = function(t3, e3) {
      return t3.$i || (t3(e3, _2, O2), t3.$i = true), O2;
    }, O2.locale = w3, O2.isDayjs = S2, O2.unix = function(t3) {
      return O2(1e3 * t3);
    }, O2.en = D2[g2], O2.Ls = D2, O2.p = {}, O2;
  });
})(dayjs_min);
var dayjs_minExports = dayjs_min.exports;
const dayjs = /* @__PURE__ */ getDefaultExportFromCjs(dayjs_minExports);
const Container$2 = ut.div`
  flex: 1;
  width: 100%;
  .message-group {
    height: 100%;
    display: flex;
    flex-direction: column;
    .operation-content {
      display: flex;
      height: 36px;
      margin-bottom: 10px;
    }
    .message-content {
      width: 100%;
      border-radius: 0.25rem;
      background-color: #ededed;
      padding: 5px;
      height: 666px;
      overflow-y: scroll;
      .message-item {
        width: 100%;
        display: flex;
        margin-bottom: 20px;
        &__title {
          .avatar {
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #fff;
            border-radius: 5px;
          }
        }
        &__body {
          color: #1b1b1b;
          margin: 0 10px;
          box-sizing: border-box;
          max-width: calc(100% - 120px);
          .body__content {
            width: 100%;
            border-radius: 5px;
            color: #1b1b1b;
            font-size: 12px;
            min-height: 50px;
            line-height: 24px;
            padding: 14px 5px;
          }
          .body__time {
            font-size: 12px;
            line-height: 18px;
            padding: 0;
            margin: 0;
          }
        }
      }
      .message-item.message-item--client {
        .left {
          display: flex;
        }
        .message-item__body {
          .body__content {
            background-color: #95ec6a;
          }
          .body__time {
            text-align: right;
          }
        }
      }
      .message-item.message-item--server {
        flex-direction: row-reverse;
        .right {
          display: flex;
        }
        .message-item__body {
          .body__content {
            background-color: #fff;
          }
          .body__time {
            text-align: left;
          }
        }
      }
    }
  }
`;
let scrollEnd$1 = false;
const MessageRecords$1 = React__default.forwardRef((props, ref) => {
  const wsController = React__default.useContext(WsControllerContext);
  const [messageRecord, setMessageRecord] = React__default.useState([]);
  const messageContentRef = React__default.useRef(null);
  let reciveMessage = React__default.useRef(true);
  React__default.useImperativeHandle(ref, () => ({
    addTomessageRecord: (msg) => {
      setMessageRecord((prev2) => {
        prev2.push({
          type: "client",
          time: dayjs().format("YYYY-MM-DD HH:mm:ss"),
          message: msg
        });
        let newArr = prev2.slice();
        setTimeout(() => {
          scrollToBottom();
        }, 500);
        return newArr;
      });
    }
  }));
  React__default.useEffect(() => {
    if (scrollEnd$1) {
      scrollToBottom();
    }
  }, [JSON.stringify(messageRecord)]);
  useOnMount(() => {
    var _a;
    wsController == null ? void 0 : wsController.addEventListener("message", message);
    (_a = messageContentRef == null ? void 0 : messageContentRef.current) == null ? void 0 : _a.addEventListener("scroll", handleScroll);
  });
  useOnUnmount(() => {
    wsController == null ? void 0 : wsController.removeEventListener("message", message);
  });
  const message = (e2) => {
    if (!reciveMessage.current) {
      return;
    }
    if (e2.data.includes("heartbeat")) {
      return;
    }
    setMessageRecord((prev2) => {
      prev2.push({
        type: "server",
        time: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        message: e2.data
      });
      let newArr = prev2.slice();
      return newArr;
    });
  };
  const handleScroll = (e2) => {
    const { scrollTop = 0, scrollHeight = 0, clientHeight = 0 } = messageContentRef.current;
    let isScrollEnd = Math.abs(scrollTop - (scrollHeight - clientHeight)) < 2;
    if (isScrollEnd !== scrollEnd$1) {
      scrollEnd$1 = isScrollEnd;
    }
  };
  const scrollToBottom = () => {
    if (!messageContentRef.current) {
      return;
    }
    const { scrollHeight = 0, clientHeight = 0 } = messageContentRef.current;
    messageContentRef.current.scrollTop = scrollHeight - clientHeight;
  };
  const handleReciveCheckboxhange = (event) => {
    reciveMessage.current = event.target.checked;
  };
  const clearMessage = () => {
    setMessageRecord([]);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Container$2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardItem, { title: "Message record", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "message-group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "operation-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControlLabel$1, { control: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Checkbox$1,
        {
          defaultChecked: reciveMessage.current,
          onChange: handleReciveCheckboxhange,
          inputProps: { "aria-label": "controlled" }
        }
      ), label: "receive controller" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button$1, { onClick: clearMessage, variant: "text", size: "small", color: "success", children: "clear" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: messageContentRef, className: "message-content", children: messageRecord.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: classNames(
          "message-item",
          `message-item--${item.type == "client" ? "client" : "server"}`
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "message-item__title", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "avatar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "name", children: item.type }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "message-item__body", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "body__content", children: [
              " ",
              item.message
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "body__time", children: item.time })
          ] })
        ]
      },
      index
    )) })
  ] }) }) });
});
const Container$1 = ut.div`
  flex: 1;
  width: 100%;
  .message-group {
    height: 100%;
    display: flex;
    flex-direction: column;
    .operation-content {
      display: flex;
      height: 36px;
      margin-bottom: 10px;
    }
    .message-content {
      width: 100%;
      border-radius: 0.25rem;
      background-color: #ededed;
      padding: 5px;
      height: 200px;
      overflow-y: scroll;
      .message-item {
        width: 100%;
        display: flex;
        margin-bottom: 20px;
        font-size: 10px;
        &__title {
          width: 110px;
        }
        &__body {
          color: #1b1b1b;
          margin: 0;
          box-sizing: border-box;
          max-width: calc(100% - 110px);
        }
      }
    }
  }
`;
let scrollEnd = false;
const MessageRecords = React__default.forwardRef((props, ref) => {
  const wsController = React__default.useContext(WsControllerContext);
  const [messageRecord, setMessageRecord] = React__default.useState([]);
  const messageContentRef = React__default.useRef(null);
  let reciveMessage = React__default.useRef(true);
  React__default.useEffect(() => {
    if (scrollEnd) {
      scrollToBottom();
    }
  }, [JSON.stringify(messageRecord)]);
  useOnMount(() => {
    var _a;
    wsController == null ? void 0 : wsController.addEventListener("log", logMessage);
    (_a = messageContentRef == null ? void 0 : messageContentRef.current) == null ? void 0 : _a.addEventListener("scroll", handleScroll);
  });
  useOnUnmount(() => {
    wsController == null ? void 0 : wsController.removeEventListener("log", logMessage);
  });
  const logMessage = (message) => {
    setMessageRecord((prev2) => {
      prev2.push({
        time: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        message
      });
      let newArr = prev2.slice();
      return newArr;
    });
  };
  const handleScroll = (e2) => {
    const { scrollTop = 0, scrollHeight = 0, clientHeight = 0 } = messageContentRef.current;
    let isScrollEnd = Math.abs(scrollTop - (scrollHeight - clientHeight)) < 2;
    if (isScrollEnd !== scrollEnd) {
      scrollEnd = isScrollEnd;
    }
  };
  const scrollToBottom = () => {
    if (!messageContentRef.current) {
      return;
    }
    const { scrollHeight = 0, clientHeight = 0 } = messageContentRef.current;
    messageContentRef.current.scrollTop = scrollHeight - clientHeight;
  };
  const handleReciveCheckboxhange = (event) => {
    if (event.target.checked) {
      wsController == null ? void 0 : wsController.heartbeat.send();
    } else {
      wsController == null ? void 0 : wsController.heartbeat.clear();
    }
  };
  const clearMessage = () => {
    setMessageRecord([]);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Container$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardItem, { title: "Debug information", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "message-group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "operation-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControlLabel$1, { control: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Checkbox$1,
        {
          disabled: (wsController == null ? void 0 : wsController.connectStatus) !== c$2.connected,
          defaultChecked: reciveMessage.current,
          onChange: handleReciveCheckboxhange,
          inputProps: { "aria-label": "controlled" }
        }
      ), label: "heartbeat controller" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button$1, { onClick: clearMessage, variant: "text", size: "small", color: "success", children: "clear" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: messageContentRef, className: "message-content", children: messageRecord.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "message-item",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "message-item__title", children: item.time }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "message-item__body", children: item.message })
        ]
      },
      index
    )) })
  ] }) }) });
});
const Container = ut.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  & > .header {
    width: inherit;
    height: 60px;
    background-color: #007bff;
  }
  & > .body {
    width: inherit;
    flex: 1;
    .body-inner {
      height: calc(100% - 20px);
      width: 100%;
      margin: 10px 0%;
      display: flex;
      background-clip: border-box;
      border: 1px solid rgba(0, 0, 0, 0.125);
      border-radius: 5px;
      .left,
      .right {
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 10px;
      }
      .left {
        width: 40%;
      }
      .right {
        width: 60%;
      }
    }
  }
`;
function App() {
  const wsContoller = useReactive(new w$1({
    heartbeatOptions: {
      handleHeartbeatMsg: (msg) => {
        return msg.data.includes("---- heartbeat ----");
      },
      sendMsg: "---- heartbeat ----"
    }
  }));
  const MessageRecordsRef = reactExports.useRef();
  const setMessage = (msg) => {
    var _a;
    (_a = MessageRecordsRef.current) == null ? void 0 : _a.addTomessageRecord(msg);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(WsControllerContextProvider, { wsContoller, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "header" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "body", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "body-inner", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(WsStatus, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(WsConfig, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(IntervalSend, { setMessage }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TemporarySend, { setMessage }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageRecords, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageRecords$1, { ref: MessageRecordsRef }) })
    ] }) })
  ] }) });
}
const code = `import * as React from "react";\r
import styled from "styled-components";\r
import { useReactive } from "@zsjs/hooks";\r
import { WsContoller } from "@zsjs/ws-controllers";\r
\r
// component\r
import WsConfig from "./component/wsConfig";\r
import WsStatus from "./component/wsStatus";\r
import IntervalSend from "./component/intervalSend";\r
import TemporarySend from "./component/temporarySend";\r
import MessageRecords from "./component/messageRecords";\r
import ConsoleLog from './component/consoleLog'\r
import { WsControllerContextProvider } from "./component/socketProvider";\r
\r
const Container = styled.div\`\r
  width: 100%;\r
  height: 100%;\r
  display: flex;\r
  flex-direction: column;\r
  & > .header {\r
    width: inherit;\r
    height: 60px;\r
    background-color: #007bff;\r
  }\r
  & > .body {\r
    width: inherit;\r
    flex: 1;\r
    .body-inner {\r
      height: calc(100% - 20px);\r
      width: 100%;\r
      margin: 10px 0%;\r
      display: flex;\r
      background-clip: border-box;\r
      border: 1px solid rgba(0, 0, 0, 0.125);\r
      border-radius: 5px;\r
      .left,\r
      .right {\r
        height: 100%;\r
        display: flex;\r
        flex-direction: column;\r
        padding: 0 10px;\r
      }\r
      .left {\r
        width: 40%;\r
      }\r
      .right {\r
        width: 60%;\r
      }\r
    }\r
  }\r
\`;\r
\r
function App() {\r
  const wsContoller = useReactive(new WsContoller({\r
    heartbeatOptions: {\r
      handleHeartbeatMsg: (msg) => {\r
        return msg.data.includes('---- heartbeat ----');\r
      },\r
      sendMsg: '---- heartbeat ----',\r
    },\r
  }))\r
\r
  const MessageRecordsRef = React.useRef()\r
\r
  const setMessage = (msg: string) => {\r
    MessageRecordsRef.current?.addTomessageRecord(msg)\r
  }\r
\r
  return (\r
    <WsControllerContextProvider wsContoller={wsContoller}>\r
      <Container>\r
        <section className="header"></section>\r
        <section className="body">\r
          <div className="body-inner">\r
            <div className="left">\r
              <WsStatus />\r
              <WsConfig />\r
              <IntervalSend setMessage={setMessage} />\r
              <TemporarySend setMessage={setMessage} />\r
              <ConsoleLog />\r
            </div>\r
            <div className="right">\r
              <MessageRecords ref={MessageRecordsRef} />\r
            </div>\r
          </div>\r
        </section>\r
      </Container>\r
    </WsControllerContextProvider>\r
  );\r
}\r
\r
export default App;\r
`;
const title = void 0;
const desc = void 0;
const demoMeta = { code, title, desc };
const isDemo = true;
const _demo0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: App,
  demoMeta,
  isDemo
}, Symbol.toStringTag, { value: "Module" }));
function _createMdxContent(props) {
  const _components = Object.assign({
    h2: "h2",
    p: "p",
    code: "code",
    pre: "pre",
    h3: "h3",
    blockquote: "blockquote",
    h4: "h4"
  }, useMDXComponents(), props.components), { Demo } = _components;
  if (!Demo)
    _missingMdxReference("Demo", true);
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(_components.h2, {
      id: "instruction",
      children: "Instruction"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "This controller was designed for WebSocket communication. It was sealed with some logic, such as connect timeout, reconnect, and so on."
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "demos",
      children: "Demos"
    }), "\n", jsxRuntimeExports.jsx(Demo, _demo0), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "installing",
      children: "Installing"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.code, {
        children: "npm install @zsjs/ws-controllers;"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "example",
      children: "Example"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.code, {
        children: 'import { WsContoller } from "@zsjs/ws-controllers";'
      })
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-ts",
        children: '// Generate a wsContoller instance and set options.\nconst wsContoller = new WsContoller({\n  wsOptions: {\n    address: "ws://xxx.xxx.xx.xx:8800", // connect address\n    onOpened: (wsCtl: WsContoller) => {\n      wsCtl.send("Hello world"); // when connect success will call OnOpened function.\n    },\n  },\n  heartbeatOptions: {\n    // heartbeat setting.\n    handleHeartbeatMsg: (msg) => {\n      return msg.data.includes("---- heartbeat ----"); // Checkout if is a heartbeat message.\n    },\n    sendMsg: "---- heartbeat ----",\n  },\n});\n\n// Or you can set address by setOPtions methods.\nconst wsContoller = new WsContoller({});\nwsContoller.setOptions({ wsOptions: { address: "ws://xxx.xxx.xx.xx:8800" } });\n\n// listen events\nconst message = (msg) => {};\n/// Listen message\nwsController?.addEventListener("message", message);\n\n/// remove listener\nwsController?.removeEventListener("message", message);\n\n// Use close and connect to control wsContoller.\nwsContoller.connect(); // start connect.\nwsContoller.close(); // close connect.\n'
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "methods",
      children: "Methods"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "setoptions",
      children: "setOptions"
    }), "\n", jsxRuntimeExports.jsxs(_components.blockquote, {
      children: ["\n", jsxRuntimeExports.jsx(_components.p, {
        children: "Set the WsController instance config after you create."
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "params",
      children: "params"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.code, {
        children: "{ wsOptions: WsConfig, heartbeatOptions: HeartbeatConfig }"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "example-1",
      children: "example"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.code, {
        children: "wsController?.setOptions({ wsOptions: { address: ws://xxx.xx.xxx.xx:xxxx }})"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "connect",
      children: "connect"
    }), "\n", jsxRuntimeExports.jsxs(_components.blockquote, {
      children: ["\n", jsxRuntimeExports.jsx(_components.p, {
        children: "Start websocket communication"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "params-1",
      children: "params"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.code, {
        children: "{ address?: string; connectTimeout?: number;} or no params"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "example-2",
      children: "example"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.code, {
        children: "wsController?.connect();"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "close",
      children: "close"
    }), "\n", jsxRuntimeExports.jsxs(_components.blockquote, {
      children: ["\n", jsxRuntimeExports.jsx(_components.p, {
        children: "Close the wsController"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "params-2",
      children: "params"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.code, {
        children: "no params"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "example-3",
      children: "example"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.code, {
        children: "wsController?.connect();"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "send",
      children: "Send"
    }), "\n", jsxRuntimeExports.jsxs(_components.blockquote, {
      children: ["\n", jsxRuntimeExports.jsx(_components.p, {
        children: "Send mesage to the server"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "params-3",
      children: "params"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.code, {
        children: "msg: string"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "example-4",
      children: "example"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.code, {
        children: "wsController.send('Hello world');"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "addeventlistener--and-removeeventlistener",
      children: "addEventListener && and removeEventListener"
    }), "\n", jsxRuntimeExports.jsxs(_components.blockquote, {
      children: ["\n", jsxRuntimeExports.jsx(_components.p, {
        children: "Listen the message or log change."
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "params-4",
      children: "params"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.code, {
        children: "eventName: 'message' | 'log', fun: (e: any) => void"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "example-5",
      children: "example"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-ts",
        children: '// Add log listener\nconst logReceiver = (msg: string) => {\n  console.log(msg);\n};\nwsController?.addEventListener<string>("log", logReceiver);\n\n// Add message listener\nconst messageReceiver = (msg: MessageEvent) => {\n  console.log(msg);\n};\nwsController?.addEventListener<MessageEvent>("message", messageReceiver);\n\n// Add message listener\nconst statusReceiver = (msg: SocketStatus) => {\n  console.log(msg);\n};\nwsController?.addEventListener<SocketStatus>("message", statusReceiver);\n\n// Remove the listener before you leave.\nwsController.removeEventListener("log", logReceiver);\nwsController.removeEventListener("message", messageReceiver);\nwsController.removeEventListener("status", statusReceiver);\n'
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "configs",
      children: "Configs"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "wsconfig",
      children: "wsConfig"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-TS",
        children: " interface WsConfig {\n  address: string;\n  connectTimeout?: number;\n  reconnectIntervalTime?: number;\n  retry?: number | null;\n  heartBeatConfig?: HeartbeatConfig\n  onOpened?: Function\n}\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "heartbeatconfig",
      children: "HeartbeatConfig"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-TS",
        children: " interface HeartbeatConfig {\n  handleHeartbeatMsg?: (msg: any) => boolean,\n  timeout?: number,\n  intervalTime?: number,\n  sendMsg?: string\n}\n"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = Object.assign({}, useMDXComponents(), props.components);
  return MDXLayout ? jsxRuntimeExports.jsx(MDXLayout, Object.assign({}, props, {
    children: jsxRuntimeExports.jsx(_createMdxContent, props)
  })) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
const m0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent
}, Symbol.toStringTag, { value: "Module" }));
const modules = {};
modules["main"] = m0;
export {
  modules as default
};
