

/** 
 * @function
 * @param fn - "Function body that you like to call."
 * @param debounceTheInput @default true - "True to use debounce mechanism or false to  return function body as it is."
 * @param delay @default 500 - "Delay before calling the actual functional body".
*/


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const debounce = <T extends (...args: any[]) => any>(
    fn:T,
    debounceTheInput = true,
    delay=500,
):() => void => {
    if(debounceTheInput === false){
        return (...args) => {
            fn(...args)
        }
    }else{
        let timeout: NodeJS.Timeout
        return (...args) => {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                fn(...args)
            },delay)
        }
    }
}

export default debounce