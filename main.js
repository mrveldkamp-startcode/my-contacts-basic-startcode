// MY CONTACTS START CODE by Mr. V

// Global Variables
let contacts = [{
    name: "John Doe",
    phone: "555-5555",
    email: "johndoe@email.com"
  },
  {
    name: "Jane Doe",
    phone: "333-3333",
    email: "janedoe@email.com"
  }
];

// Event Listeners
document.getElementById("all-tab").addEventListener("click", displayAll);
document.getElementById("search-btn").addEventListener("click", searchByName);
document.getElementById("new-btn").addEventListener("click", newContact);
document.getElementById("delete-btn").addEventListener("click", deleteContact);

// Display All Contacts
function displayAll() {
  let outputStr = `
    <h3>${contacts[0].name}</h3>
    <p>Phone: ${contacts[0].phone}</p>
    <p>Email: ${contacts[0].email}</p>
    <h3>${contacts[1].name}</h3>
    <p>Phone: ${contacts[1].phone}</p>
    <p>Email: ${contacts[1].email}</p>`;

  document.getElementById("content").innerHTML = outputStr;
}

// Search Contact by Name
function searchByName() {
  document.getElementById("content").innerHTML = "<h3>Search by Name</h3>";
}

// New Contact
function newContact() {
  document.getElementById("content").innerHTML = "<h3>New Contact</h3>";
}

// Delete Contact
function deleteContact() {
  document.getElementById("content").innerHTML = "<h3>Delete Contact</h3>";
}