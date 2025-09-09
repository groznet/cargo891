// main.js

// Function to load HTML into a target element
function loadComponent(selector, url) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load ${url}`);
            return response.text();
        })
        .then(html => {
            document.querySelector(selector).innerHTML = html;
        })
        .catch(err => console.error(err));
}

// Load header and footer
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("#header-wrapper", "components/header.html");
    loadComponent("#footer-wrapper", "components/footer.html");
});