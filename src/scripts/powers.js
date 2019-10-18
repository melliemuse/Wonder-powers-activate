const flightSection = document.querySelector('#flight')
const mindReadingSection = document.querySelector('#mindreading')
const xraySection = document.querySelector('#xray')

// Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.

const flightHandlerFunction = () => {
    flightSection.classList.toggle('disabled')
    flightSection.className = 'enabled'
}


// Add the correct string as the first argument to addEventListener()

document.querySelector("#activate-flight").addEventListener("click",  flightHandlerFunction)



// Once you have that working, write two more JavaScript functions, and two more querySelector().addEventListener() statements for handling the click event on the other two buttons. Those event handlers should perform the same step of removing disabled, and adding enabled on the corresponding <section> elements

const mindreadingHandlerFunction = () => {
    mindReadingSection.classList.toggle('disabled')
    mindReadingSection.className = 'enabled'
}

const xrayHandlerFunction = () => {
    xraySection.classList.toggle('disabled')
    xraySection.className = 'enabled'
}


document.querySelector("#activate-mindreading").addEventListener("click", mindreadingHandlerFunction)
document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction)



// Once that is complete, add two more buttons

// Enable All Powers
// Disable All Powers
// Write two more event handlers for activating and deactivating all powers when the corresponding buttons are clicked. You will need to use the document.querySelectorAll() method for these.

const activateAllButton = document.querySelector('#activate-all')
const deactivateAllButton = document.querySelector('#deactivate-all')
const allSections = document.querySelectorAll('section')


const activateAllFunction = () => {
    allSections.forEach(function(section) {
        section.classList.toggle('disabled')
        section.className = 'enabled'
    })
}

activateAllButton.addEventListener("click", activateAllFunction)

const deactivateAllFunction = () => {
    allSections.forEach(function(section) {
        section.classList.toggle('enabled')
        section.className = 'disabled'
    })
    
}


deactivateAllButton.addEventListener("click", deactivateAllFunction)