export function getContainerOffset(index) {
    return getOffset(getContainerByIndex(index))
}

function getContainerByIndex(index) {
    return document.getElementsByClassName("container")[index]
}

function getOffset(elem) {
    return elem.getBoundingClientRect().top + window.scrollY
}

function clearActiveButton(activeButtons) {
    return activeButtons.map((button) => {
        return {ico: button.ico, label: button.label, func: button.func, active: false}
    })
}

function getActiveContainerIndex(arrayOffsets) {
    return Math.min(...arrayOffsets)
}

function getArrayOfOffsets(className) {
    return [...document.getElementsByClassName(className)].map((element) => Math.abs(element.getBoundingClientRect().top))
}


export function setActiveButton(activeButtons, setActiveButtons) {
    let clearedButtons = clearActiveButton(activeButtons),
        arrayOffsets = getArrayOfOffsets("container"),
        activeContainer = getActiveContainerIndex(arrayOffsets),
        index = arrayOffsets.indexOf(activeContainer)


    clearedButtons[index].active = true

    setActiveButtons(clearedButtons)
}