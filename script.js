// Toggle the visibility of the listing form
document.getElementById('addListingBtn').addEventListener('click', function() {
    document.getElementById('listingForm').classList.toggle('hidden');
});

// Hide the listing form when "Cancel" is clicked
document.getElementById('cancelBtn').addEventListener('click', function() {
    document.getElementById('listingForm').classList.add('hidden');
});

// Handle form submission to add a new listing
document.getElementById('newListingForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Get values from the input fields
    const itemName = document.getElementById('itemName').value;
    const itemDescription = document.getElementById('itemDescription').value;
    const itemPrice = document.getElementById('itemPrice').value;

    // Call the function to add the new listing
    addListing(itemName, itemDescription, itemPrice);
    
    // Reset the form and hide it
    document.getElementById('newListingForm').reset();
    document.getElementById('listingForm').classList.add('hidden');
});

// Function to add a new listing to the listings container
function addListing(name, description, price) {
    const listingContainer = document.getElementById('listingContainer');
    const li = document.createElement('li');

    // Set the inner HTML of the new list item
    li.innerHTML = `<strong>${name}</strong><br>${description}<br>Price: $${price}`;
    
    // Append the new item to the listings container
    listingContainer.appendChild(li);
}
