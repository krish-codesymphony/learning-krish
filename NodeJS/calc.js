export default function calc(x, y, fun) {
    return fun(x, y);
}

export function add(x, y) {
    if (Number(x) == NaN || Number(y) == NaN)
        return "NaN"
    else return (x + y);
}
export function sub(x, y) {
    if (Number(x) == NaN || Number(y) == NaN)
        return "NaN"
    else return (x - y);
}
export function mul(x, y) {
    if (Number(x) == NaN || Number(y) == NaN)
        return "NaN"
    else return (x * y);
}
export function div(x, y) {
    if (Number(x) == NaN || Number(y) == NaN)
        return "NaN"
    else return (x / y);
}