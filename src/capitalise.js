export default function capitalise(string) {
    return string
        ? string.charAt(0).toUpperCase() +
              string.toLowerCase().slice(1, string.length)
        : Error
}
