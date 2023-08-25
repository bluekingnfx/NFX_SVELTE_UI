import type { Writable } from "svelte/store";


export type ThemeType = "dark" | "light"

/** 
 * ### Convention
 * Hierarchical order of colors based on amount of space it takes
*/

export type ColorPaletteBasedOnTheme = {
    /**
     * Primary color 
     * 
     * Primary color is the one that is used to color the background container - that occupying large amount space acting as canvas 
     * @name primaryColor
     * @default light="rgb(228, 228, 228)" | dark = "rgba(11, 9, 33, 0.81)"
     */
    primaryColor: string
    /**
     * ### Less intense primary color
     * Less intense version primary color based on theme
     * @name lessIntensePrimaryColor
     * @default light="rgba(0,0,0,0.09)" | dark = "rgb(0,0,0,0.22)"
     */
    lessIntensePrimaryColor: string
    /**
     * ### Secondary color
     * Secondary color is the color that will be used for the text and essentials of the container which is colored in primary-color. 
     * @name secondaryColor
     * @default light="rgb(33, 33, 33)" | dark = "rgb(196, 196, 196)"
     */
    secondaryColor: string
    /**
     * ### Less intense secondary color
     * Less intense version secondary color based on theme
     * @name lessIntenseSecondaryColor
     * @default light="rgb(33, 33, 33,0.3)" | dark = "rgba(207, 207, 207, 0.5)"
     */
    lessIntenseSecondaryColor: string,

    /**
     * ### Tertiary color
     * Tertiary color can be used to icons and sometimes some interactive elements
     * @name tertiaryColor
     * @default light="" | dark = ""
     */
    tertiaryColor: string,

    /**
     * Less intense tertiary color
     * Less intense version tertiary color based on theme
     * @name lessIntenseTertiaryColor
     * @default light = "" | dark = ""
     */
    lessIntenseTertiaryColor: string,

}
 

/** 
 * ## Color Palette Store
 * Store can be used to define colors that can used through out the components.
 * 
*/
export type ColorPaletteType = {
    /**
     * ### Theme
     * Theme that you wish for the components that will be applied globally, available theme light or dark, by default each theme as its own color set, which can changed on motive.
     * @name theme
     * @default "dark"
     */
    theme:ThemeType,
    /**
     * ### light theme color Palette 
     * Contains all necessary colors for white theme
     * @name lightThemeColorPalette
     * @default 
     * ```ts 
     * lightThemeColorPalette:{
            primaryColor: "rgb(228, 228, 228)",
            lessIntensePrimaryColor: "rgba(0,0,0,0.09)",
            secondaryColor: "rgb(33, 33, 33)", 
            lessIntenseSecondaryColor: "rgb(33, 33, 33,0.3)", 
            tertiaryColor: "rgb(116,116,116)",
            lessIntenseTertiaryColor: ""
        }
     *  ```
     */

    lightThemeColorPalette: ColorPaletteBasedOnTheme,

    /**
     * ### Dark theme color Palette
     * Contains all necessary colors for black theme
     * @name darkThemeColorPalette
     * @default 
     * ```ts
     * {
     *      primaryColor: "rgba(11, 9, 33, 0.81)",
            lessIntensePrimaryColor: "rgb(0,0,0,0.22)",
            secondaryColor: "rgb(196, 196, 196)", 
            lessIntenseSecondaryColor: "rgba(207, 207, 207, 0.5)", 
            tertiaryColor: "rgb(157, 157, 157)",
            lessIntenseTertiaryColor: ""
     *   }
     * ```
     */

    darkThemeColorPalette: ColorPaletteBasedOnTheme
    /** 
     * ### Intuitive color singnifers 
     * Colors associated with sense of action or colors associated with psychology.
     * 
     * @name intuitiveSignifiers
     * ```
    */
    intuitiveSignifiers:{
        /**
         * ## Error
         * Object Signifies sense of danger.
         * @name error
         * ```ts
         * {
         *    redIntenseVariant: "rgb(215,4,4)",
         *    redIntenseLessVariant: "rgb(255,106,106)"
         * }
         * ```
         */
        error: {
            redIntenseVariant: string,
            redIntenseLessVariant:string
        },
        /**
         * ## OK
         * Object signifies sense of work done.
         * 
         * @name ok
         * 
         * ```ts
         * {
         *  blueVariantLightText: "rgb(71 163 255)";
         *  blueVariantDarkText: "rgb(0 118 236)";
         * }
         * ```
         */
        ok: {
            blueVariantLightText: string,
            blueVariantDarkText: string,
        }
        /**
         * Interactive hover variants
         * 
         * Hover variants to signal the element is interactive (specifically hover) and can be used to highlight the element.
         * @name interactiveHoverVariants 
         * @default {
         *     blueVariant: "rgb(0 118 236)" 
         * }
         */
        interactiveHoverVariants:{
            blueVariant: string
        }
    }

}

//Function signature of color store implementation to encapsulate the store and its internals.
type ColorPaletteImplementationType = () => Writable<ColorPaletteType>

const colorPaletteImplementation:ColorPaletteImplementationType = () => {

    //List of subscribers to notify (set and update) and remove (unsubscribe)
    let subscribers:((colorPalette:ColorPaletteType)=>void)[] = []

    // colorPalette initial-value and its properties
    let colorPalette:ColorPaletteType= {
        theme: "dark",
        darkThemeColorPalette:{
            primaryColor: "rgba(11, 9, 33, 0.81)",
            lessIntensePrimaryColor: "rgb(0,0,0,0.22)",
            secondaryColor: "rgb(196, 196, 196)", 
            lessIntenseSecondaryColor: "rgba(207, 207, 207, 0.5)", 
            tertiaryColor: "rgb(157, 157, 157)",
            lessIntenseTertiaryColor: ""
        },
        lightThemeColorPalette:{
            primaryColor: "rgb(228, 228, 228)",
            lessIntensePrimaryColor: "rgba(0,0,0,0.09)",
            secondaryColor: "rgb(33, 33, 33)", 
            lessIntenseSecondaryColor: "rgba(33, 33, 33,0.3)", 
            tertiaryColor: "rgb(116,116,116)",
            lessIntenseTertiaryColor: ""
        },
        intuitiveSignifiers:{
            error: {
                redIntenseVariant: "rgb(215,4,4)",
                redIntenseLessVariant:"rgb(255,106,106)",
            },
            ok: {
                blueVariantDarkText: "rgb(71 163 255)",
                blueVariantLightText: "rgb(0 118 236)"
            },
            interactiveHoverVariants:{
                blueVariant: "rgb(0 118 236)"
            }
        }
    }

    // notify the new subscribers based on observation model 
    const notify = () => {
        subscribers.forEach(fn => {
            fn(colorPalette)
        })
    }

    const subscribe = (fn:(colorPalette:ColorPaletteType) => void) => {
        // Pass the value to new subs
        fn(colorPalette)
        // Add into the subscribers array to update or remove the sub on condition.
        subscribers = [...subscribers,fn]
        return () => {
            // unsubscribe function to remove the sub, if the component is destroyed.
            subscribers.splice(subscribers.indexOf(fn),1)
        }
    }

    /** 
     * `set` function is nothing new - as it not part of the component lib.
     * 
     * For the record, def goes like (my own.)
     * 
     * Set function takes an argument and set it to the store value and notifies to the subs, so the *new value* is hearable to all its listeners.
     * 
     * *_Example_*
     * ```ts
     * const CompletelyNewVal:ColorPaletteType = {
     *      theme:"dark", 
     *      darkThemeColorPalette: {...}, 
     *      lightThemeColorPalette: {...}
     * }
     * colorPalette.set(completelyNewVal)
     * ```
     * 
    */
    const set = (newColorPalette:ColorPaletteType) => {
        colorPalette = newColorPalette
        notify()
    }

    /**
     * `update` is not component based function, it is basic level svelte store comprehension
     * 
     * For the record, def goes like (my own.)
     * 
     * update gives the present value of store before change (or your intended change) by passing an argument to the callback that you passed which must be returning with 'modified' version of argument, thus the store notifies stores' subscribers with new value
     * 
     * *_Example_*:
     * ```ts
     * colorPalette.update( cp => {
     *    return {
     *      ...cp, 
     *      lightThemeColorPalette:{
     *       ...cp.lightThemeColorPalette,
     *       primaryColor:"#fff"
     *      }
     *   }
     * })
     * ```
     */
    const update = (fn:(colorPalette:ColorPaletteType)=>ColorPaletteType) => {
        colorPalette = fn(colorPalette)
    }

    return {
        subscribe,
        update,
        set
    }
}

/** 
 * ## Color palette
 * 
 * Store that colors the components - can be changed as desired which has a effect over all the components.
 * 
 * Pre-defined theme and its mixture.
 * 
 * Dark and light may be synonymous to black and white, remember it is not constrained to. One can just can give brown to be dark version of their app and blue to be the light version. Stick to the theme and change palette to your 'desire'.
 * 
 * *_Example_*:
 * ```tsx
 * //start of script tag
 *  colorPalette.update(cp => {
 *      return {...cp,theme:"light"}
 *  })
 * //end of script tag
 * ```
 * 
 * *_Usage_*:
 * 
 * ❌
 * ```ts
 * colorPalette.update(cp => {
 *      return {...cp,theme:"blue"}
 *  })
 *   // This will not work cause, first of all it is disallowed by ts as its not the intention of the implementation (which is dark or light)
 * ```
 * 
*/
const colorPalette = colorPaletteImplementation()

export default colorPalette