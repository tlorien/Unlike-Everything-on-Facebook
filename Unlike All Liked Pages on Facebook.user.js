// ==UserScript==
// @name         Unlike All Liked Pages on Facebook
// @namespace    https://www.github.com/tlorien
// @version      0.1
// @description  Automatically unlikes all liked pages from the Facebook Activity Log. Working as of June 2024.
// @author       tlorien
// @match        https://www.facebook.com/usrID/allactivity?activity_history=false&category_key=LIKEDINTERESTS&manage_mode=false&should_load_landing_page=false
// @grant        none
// @license      MIT
// @downloadURL https://update.greasyfork.org/scripts/497495/Unlike%20All%20Liked%20Pages%20on%20Facebook.user.js
// @updateURL https://update.greasyfork.org/scripts/497495/Unlike%20All%20Liked%20Pages%20on%20Facebook.meta.js
// ==/UserScript==

(function() {
    'use strict';

    // This event listener waits for the window to load completely before running the script
    window.addEventListener('load', function() {
        // This function is designed to unlike all liked pages on the current Facebook page
        function unlikeAllLikedPages() {
            // Select all elements that have an aria-label attribute with the value "Action options"
            const actionButtons = document.querySelectorAll('[aria-label="Action options"]');

            // Iterate over each "Action options" button and click it to open the menu
            actionButtons.forEach(button => button.click());

            // Use a timeout to ensure that the menu items are loaded after clicking the action buttons
            setTimeout(() => {
                // Select all elements with a role attribute of "menuitem"
                const unlikeButtons = Array.from(document.querySelectorAll('[role="menuitem"]'))
                    // Filter the elements to find only those with innerText that includes "Unlike"
                    .filter(button => button.innerText.includes('Unlike'));

                // Iterate over each "Unlike" button and click it to unlike the page
                unlikeButtons.forEach(button => button.click());
            }, 1000); // 1-second delay to ensure menus are fully loaded
        }

        // Execute the function to unlike all liked pages
        unlikeAllLikedPages();
    });
})();
