# Unlike Everything on Facebook

This project contains a simple JavaScript script to automatically unlike all liked pages on a Facebook page. The script simulates user interactions by clicking the necessary buttons to unlike each page.

## Usage

To use this script, follow these steps:

1. **Open the Console**: In your browser, right-click on the Facebook page where all the liked pages are listed and select "Inspect" or press `Ctrl+Shift+I` (Windows) or `Cmd+Option+I` (Mac) to open the Developer Tools. Navigate to the "Console" tab.

2. **Copy and Paste the Script**: Copy the code below and paste it into the console:

```javascript
(function() {
    function unlikeAllLikedPages() {
        const actionButtons = document.querySelectorAll('[aria-label="Action options"]');
        actionButtons.forEach(button => button.click());

        setTimeout(() => {
            const unlikeButtons = Array.from(document.querySelectorAll('[role="menuitem"]')).filter(button => button.innerText.includes('Unlike'));
            unlikeButtons.forEach(button => button.click());
        }, 1000);
    }

    // Execute the function
    unlikeAllLikedPages();
})();
```

3. **Run the Script**: Press `Enter` to run the script. The script will:
    - Find all buttons labeled "Action options" and click them.
    - Wait for a second to ensure the menu items are loaded.
    - Find all menu items with the text "Unlike" and click them to unlike the pages.

4. Re-run the script as many time as necessary to remove all likes.

## Contributing
If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
