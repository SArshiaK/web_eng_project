const priceFormatter = (price) => {
    if (price === 0) return `0 تومان`;
    return `${_addCommas(price)} تومان`;
};

const _addCommas = (str) => {
    if (str) {
        str = str.toString();
        str += "";
        str = str.replace(/,/g, "");
        let x = str.split(".");
        let x1 = x[0];
        let x2 = x.length > 1 ? "." + x[1] : "";
        let rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, `$1,$2`);
        }
        return x1 + x2;
    }
};

module.exports = {
    priceFormatter
}