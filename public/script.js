let inputTopLeftValue = 20
let inputTopRightValue = 20
let inputBottomLeftValue = 20
let inputBottomRightValue = 20
const codeBlock = document.querySelector("#block-code")

function changeValueInput(event) {
    // define o valor do input como valor da variavel correspondente
    if(event.target.id == "corner-top-left") {
        inputTopLeftValue = event.target.value
    } else if(event.target.id == "corner-top-right") {
        inputTopRightValue = event.target.value
    } else if(event.target.id == "corner-bottom-left") {
        inputBottomLeftValue = event.target.value
    } else if(event.target.id == "corner-bottom-right") {
        inputBottomRightValue = event.target.value
    }

    // define uma constante com os valores dos inputs em pixels
    const borderRadiusValue = `${inputTopLeftValue}px ${inputTopRightValue}px ${inputBottomRightValue}px ${inputBottomLeftValue}px`

    // define o texto apresentado no codeBlock
    codeBlock.value = "border-radius: " + borderRadiusValue + ";"

    // define os valores dos inputs como valores do border-radius da caixa de exemplo 
    document.querySelector(".border-radius-example").style.borderRadius = borderRadiusValue

    // define o valor do border-radius do button
    document.querySelector('#button-of-copy').style.borderRadius = `${inputTopLeftValue}px ${inputTopRightValue}px ${inputBottomRightValue}px ${inputBottomLeftValue}px`
}

function copyCode() {
    codeBlock.select()
    codeBlock.setSelectionRange(0, 99999)
    document.execCommand('copy')
    alert("Copied the text: " + codeBlock.value)
}