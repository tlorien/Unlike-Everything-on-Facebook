# Unlike Everything on Facebook

This project contains a simple JavaScript script to automatically unlike all liked pages on a Facebook page. The script simulates user interactions by clicking the necessary buttons to unlike each page.

## Usage

To use this script, follow these steps:

1. **Open the Console**: In your browser, [right-click on the Facebook page where all the liked pages are listed](https://www.facebook.com/usrID/allactivity?activity_history=false&category_key=LIKEDINTERESTS&manage_mode=false&should_load_landing_page=false) and select "Inspect" or press `Ctrl+Shift+I` (Windows) or `Cmd+Option+I` (Mac) to open the Developer Tools. Navigate to the "Console" tab.

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

5. In addition to the above script, the following script can use used on the Activity Page (https://www.facebook.com/ *INSERTYOURUSERIDHERE* /allactivity?activity_history=false&category_key=LIKEDINTERESTS&manage_mode=false&should_load_landing_page=false) to delete all of your activity (comments, reactions, likes, etc):

```javascript
function handleMenuActions() {
  const menuItems = [...document.querySelectorAll('[role="menuitem"]')];
  menuItems.forEach(item => {
    const text = item.innerText.toLowerCase();
    if (text.includes('unlike') || text.includes('delete') || text.includes('remove reaction')) {
      item.click();
    }
  });
}

function unlikeAll() {
  const actionButtons = [...document.querySelectorAll('[aria-label="Action options"]')];
  let currentIndex = 0;

  function processNextButton() {
    if (currentIndex < actionButtons.length) {
      actionButtons[currentIndex].click();
      setTimeout(() => {
        handleMenuActions();
        currentIndex++;
        setTimeout(processNextButton, 1000); // Delay to ensure the action is processed
      }, 500); // Delay to ensure the menu is fully loaded
    } else {
      console.log('All actions processed.');
    }
  }

  processNextButton();
}

unlikeAll();
```

## Contributing
If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## License
Nah.
