const top-left-content = document.getElementById('top-left-content');
const top-left = document.getElementById('top-left');
const top-right = document.getElementById('top-right');
const top-right-content = document.getElementById('top-right-content');
const bottom-left = document.getElementById('bottom-left');
const bottom-left-content = document.getElementById('bottom-left-content');
const bottom-right = document.getElementById('bottom-right');
const bottom-right-content = document.getElementById('bottom-rigth-content');

// Store the original position of div1
const originalPosition = {
    top: '0px',
    left:'0px'
};

// Define the new position
const newPosition = {
    top: '200px',
    left: '120px'
};

// Add a flag to track the current state
let isMoved = false;

// Add a click event listener to div2
top-left.addEventListener('click', function() {
    if (isMoved) {
        // Move  back to its original position
        top-left-content.style.top = originalPosition.top;
        top-left-content.style.left = originalPosition.left;
    } else {
        // Move div1 to the new position
        div1.style.top = newPosition.top;
        div1.style.left = newPosition.left;
    }
    // Toggle the state
    isMoved = !isMoved;
});