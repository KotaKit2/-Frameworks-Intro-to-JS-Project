The website I tried to emulate was Cruncyroll an anime streaming website, I tried to incorporate a library of different shows along with a search bar, a table to view show schedules and a user login and registration page.

For bootstrap I used the following components
- Navbar & Dropdowns: Streamlined navigation with quick genre selection.
- Cards & Grid System: Organized anime thumbnails in a responsive layout.
- Modals: Instant anime previews without page redirection.
- Forms & Input Groups: Styled search bar and user registration fields.
- Buttons: Enhanced interactivity for browsing and filtering.
- 
My JavaScript Functions
-  getSuggestions(input)
- Filters anime titles based on user input in the search bar.
- Integrated by calling it inside showSuggestions() to provide real-time search results.
- showSuggestions()
- Dynamically updates the suggestion box by fetching matching titles.
- Integrated with the search bar to display filtered results as users type.
- setupSearch()
- Attaches an event listener to detect input changes and trigger showSuggestions().
- Integrated in DOMContentLoaded to ensure search functionality is active when the page loads.
- document.addEventListener("DOMContentLoaded", setupSearch)
- Ensures event listeners are initialized after the page structure is fully rendered.
- Integrated at the end of my script to properly set up search interactions.
