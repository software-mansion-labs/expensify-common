const htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;',
};
const reUnescapedHtml = /[&<>"'`]/g;
const reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

/**
 * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
 * corresponding HTML entities.
 * @param {string} string - The input string to escape.
 * @returns {string} - The escaped string.
 */
function escape(string) {
    return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, (chr) => htmlEscapes[chr]) : string || '';
}

const htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#x27;': "'",
    '&#x60;': '`',
    '&#32': ' ',
};

const reEscapedHtml = /&(?:amp|lt|gt|quot|#(x27|x60|32));/g;
const reHasEscapedHtml = RegExp(reEscapedHtml.source);

/**
 * The inverse of `escape`this method converts the HTML entities
 * `&amp;`, `&lt;`, `&gt;`, `&quot;` and `&#39;` in `string` to
 * their corresponding characters.
 * @param {string} string - The input string to unescape.
 * @returns {string} - The unescaped string.
 * */
function unescape(string) {
    return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, (entity) => htmlUnescapes[entity] || "'") : string || '';
}

/**
 * Checks if the given variable is a function
 * @param {*} variableToCheck
 * @returns {boolean}
 */
function isFunction(variableToCheck) {
    return variableToCheck instanceof Function;
}

/**
 * Checks if the given variable is an object
 * @param {*} obj
 * @returns {boolean}
 */
function isObject(obj) {
    const type = typeof obj;
    return type === 'function' || (!!obj && type === 'object');
}

export {escape, unescape, isFunction, isObject};