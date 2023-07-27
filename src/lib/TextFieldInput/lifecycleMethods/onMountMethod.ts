


/* 
    !Calculating the half the height of the label to position center from top of 
    parent to specify css rule top which indeed helps in smooth transition on focus
*/

const onMountMethod = (
    labelRef:HTMLLabelElement | undefined | null,
) => {
    if(labelRef){
        const labelHeight = labelRef.getBoundingClientRect().height/2
        let containerHeight = 0
        const container = document.getElementById("NFX_Text_Input_ID")
        if(container !== null){
            containerHeight = container.getBoundingClientRect().height/2
        }
        const labelHeightFromTop = containerHeight - labelHeight
        labelRef.style.top = `${labelHeightFromTop}px`

        return labelHeightFromTop
    }else{
        return 0 
    }
}

export default onMountMethod;