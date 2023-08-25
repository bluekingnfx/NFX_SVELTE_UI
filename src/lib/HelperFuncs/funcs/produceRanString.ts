

const produceRanString = ():string => {
    return (Math.random().toString(32)).replace("0.",'')
}

export default produceRanString