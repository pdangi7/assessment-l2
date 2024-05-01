// Show men section by default
showSection('men');

function showSection(section) {
    // Hide all sections
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected section
    var selectedSection = document.getElementById(section + 'Section');
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}
function addToCart(name, price) {
    // Here, you can implement logic to add the product to the cart
    console.log('Added to cart:', name, '$' + price);
    // For example, you can store the product details in an array or object representing the cart
}

