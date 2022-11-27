console.log(reverseString("hello world"))
export function reverseString(string) {
    return string ? string.split("").reverse().join("") : Error
}
