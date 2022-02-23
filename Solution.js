
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {

    const alphabetSize = 26;
    const ascii_A = 65;
    const size = columnTitle.length;
    let column = 0;

    for (let i = 0; i < size; i++) {
        column = (column * alphabetSize) + (columnTitle.codePointAt(i) - ascii_A + 1);
    }
    return column;
};
