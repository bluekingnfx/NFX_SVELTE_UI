import { describe,expect,vi,it, beforeEach, afterEach, type Mock } from "vitest";
import debounce from "../debounce.js";

/* 

Vi.fn => it acts like decorator that collects 
characteristics of the function like how
many time is called, what it has returned, much more.

One should expect this to work 
describe("Understanding",() => {
    const callBack = (arg = 1) => {
        return `I am called,${arg}`
    }
    it("test",() => {
        expect(callBack).toHaveBeenCalledTimes(1)
    })
}) 

like passing callback to expect by itself, cause callback
will not have how many times it has been called or what 
is been returned with.

vi.fn able to collect that information in its 
function or probably attaching some outside object where
expect() can access (internal application which i am not where of), that's idea.

End of the day vi.fn helps to get the characteristic of the function.

describe("Understanding",() => {
    //vi.useFakeTimers()
    let i = 1
    const callBack = (arg = 1) => {
        if(i == 1) return `I am called,${arg}`
        callBack()
        i = i + 1
        return `I am called,${arg}`
    }
    const mock = vi.fn(callBack)
    mock()
    it("test",() => {
        expect(mock).toHaveBeenCalledTimes(1)
    })

    it("returnWith",() => {
        expect(mock).toHaveReturnedWith(`I am called,1`)
    })

}) */

describe("debounce funcs test",() => {


    let mock:Mock<[],number>

    beforeEach(() => {
        mock = vi.fn(() => {
            return 0
        })
        vi.useFakeTimers()
        debounce(mock)()
    })

    afterEach(() => {
        vi.resetAllMocks()
    })

    it("It should not be called be as interval has not been passed",() => {
        expect(mock).not.toBeCalled()
    })

    it("It should be called be as interval has been passed",() => {
        vi.advanceTimersByTime(1000)
        expect(mock).toBeCalled()
    })

    it("Should not affect the internalFunctions of the callback",() => {
        vi.advanceTimersByTime(1000)
        expect(mock).toReturnWith(0)
    })

})

