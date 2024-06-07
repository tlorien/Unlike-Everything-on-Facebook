# Unlike Everything on Facebook

This project contains a simple JavaScript script to automatically unlike all liked pages on the Facebook Activity Log page. The script simulates user interactions by clicking the necessary buttons to unlike each page.

## Why?

**Privacy Concerns**: Liking pages on Facebook means sharing your interests and preferences with not only your friends but also the page administrators, Facebook, advertisers, and data brokers. This can lead to targeted advertising and profiling that follows you across the internet. **By unliking pages, you reduce the amount of personal information that is visible to third parties.**

**Security Risks**: Some Facebook pages may not be adequately secure and can become compromised. Facebook pages directly connect users to content, and as such are hot commodities for malicious entities (governments, terrorist groups, data brokers, hackers, etc) to spread misinformation, propaganda, scams, and spam. If you are connected to these pages, your account might be exposed to phishing attacks, security threats, or general annoyances. **By minimizing your connections, you reduce the potential attack surface for malicious activities.**

**Data Minimization**: Reducing the amount of data you share on social media platforms is a good practice for managing your digital footprint. **It can help prevent further data breaches and unauthorized use of your personal information such as training for large language models (LLMs) such as ChatGPT.**

**Decluttering Your Feed**: Over time, you might have liked many pages that no longer interest you (or now post irrelevant or dangerous content) leading to a cluttered news feed. **Unliking these pages can help you regain control over the content you see and ensure that your feed is more relevant to your current interests.**

## Usage

To use this script, follow these steps on your desktop computer:

1. **Open the Console**: In your browser, [right-click on the Facebook page where all the liked pages are listed](https://www.facebook.com/usrID/allactivity?activity_history=false&category_key=LIKEDINTERESTS&manage_mode=false&should_load_landing_page=false) and select "Inspect", or press `Ctrl+Shift+I` (Windows) or `Cmd+Option+I` (Mac), to open the Developer Tools. Navigate to the "Console" tab.

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

5. In addition to the above script, the following script can be used on the [All Activity](https://www.facebook.com/usrID/allactivity?activity_history=false&category_key=LIKEDINTERESTS&manage_mode=false&should_load_landing_page=false) page to delete all of your activity (comments, reactions, likes, etc).

**USE WITH CAUTION AS THIS IS IRREVERSIBLE**:

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
