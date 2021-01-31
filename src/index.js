// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == null || matrix.length == 0) {
        return [];
    }

    matrix.map((el, i) => {
        if (i % 2 == 1) {
            el.reverse();
            console.log(el, `map`);
        }
    }, 0);
    return [].concat(...matrix);
};
