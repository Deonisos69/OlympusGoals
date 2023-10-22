/**
 * Logs out a the given object or array in a pretty format
 * @param {object} object 
 */
export default function plog(title ,object) {
    console.log(title)
    console.log(JSON.stringify(object, null, 2))
}