const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

// Function to close the dropdown menu
function closeDropdown() {
    dropDownMenu.classList.remove('open')
    toggleBtnIcon.classList = 'fa-solid fa-bars'
}

// Toggle the dropdown menu on button click
toggleBtn.onclick = function (event) {
    event.stopPropagation(); // Prevent the click from propagating to the document
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}

// Add a click event listener to the document body
document.body.addEventListener('click', function (event) {
    // Check if the click target is not inside the dropdown menu or toggle button
    if (!dropDownMenu.contains(event.target) && event.target !== toggleBtn) {
        closeDropdown(); // Close the dropdown if the click is outside
    }
})

// Prevent clicks inside the dropdown from closing it
dropDownMenu.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent the click from propagating to the document
})

/* ================================================
    About us page script*/
const swimmingOption = document.getElementById('swimming');
const outThePoolOption = document.getElementById('out-the-pool');
const otherOption = document.getElementById('other');

swimmingOption.addEventListener('click', () => {
    window.location.href = 'swimming.html'; // Replace with the actual URL
});

outThePoolOption.addEventListener('click', () => {
    window.location.href = 'out-the-pool.html'; // Replace with the actual URL
});

otherOption.addEventListener('click', () => {
    window.location.href = 'other.html'; // Replace with the actual URL
});
/* ================================================*/