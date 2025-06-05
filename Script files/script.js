// List of titles
const titles = [
    "That time I got Reincarnated as a Slime",
    "Wind Breaker",
    "The Devil is a Part-Timer",
    "Darling in the Franxx",
    "Seirei Gensouki: Spirit Chronicles",
    "Beast Tamer",
    "Overlord",
    "Masamune-kun's Revenge",
    "Demon Slayer",
    "Sacrificial Princess and the King of Beasts"
];

// Function to filter titles based on user input
function getSuggestions(input) {
    return titles.filter(title => title.toLowerCase().includes(input.toLowerCase()));
}

// Function to display suggestions
function showSuggestions() {
    const inputField = document.getElementById("search-bar");
    const suggestionBox = document.getElementById("suggestions");

    // Clear previous suggestions
    suggestionBox.innerHTML = "";

    const query = inputField.value.trim();
    if (query.length > 0) {
        const suggestions = getSuggestions(query);

        // Create list items for each suggestion
        suggestions.forEach(title => {
            const suggestionItem = document.createElement("div");
            suggestionItem.classList.add("suggestion-item");
            suggestionItem.textContent = title;

            // Allow users to select a suggestion
            suggestionItem.addEventListener("click", () => {
                inputField.value = title;
                suggestionBox.innerHTML = "";
            });

            suggestionBox.appendChild(suggestionItem);
        });
    }
}

// Function to initialize the event listener
function setupSearch() {
    const inputField = document.getElementById("search-bar");
    inputField.addEventListener("input", showSuggestions);
}

// Ensure the search functionality initializes after the DOM is loaded
document.addEventListener("DOMContentLoaded", setupSearch);