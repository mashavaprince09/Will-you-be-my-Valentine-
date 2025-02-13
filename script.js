document.addEventListener("DOMContentLoaded", function() {
    const yesButton = document.querySelector('.yes-button');
    const noButton = document.querySelector('.no-button');

    yesButton.addEventListener('click', handleYesClick);
    noButton.addEventListener('click', handleNoClick);

    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    // Version checking function (unchanged)
    (async function checkForUpdates() {
        try {
            const response = await fetch(versionUrl);
            if (!response.ok) {
                console.warn("Could not fetch version information.");
                return;
            }
            const data = await response.json();
            const latestVersion = data.version;
            const updateMessage = data.updateMessage;

            if (currentVersion !== latestVersion) {
                alert(updateMessage);
            } else {
                console.log("You are using the latest version.");
            }
        } catch (error) {
            console.error("Error checking for updates:", error);
        }
    })();

    const messages = [
        "Are you sure?",
        "Really sure??",
        "Are you positive?",
        "Babyy please...",
        "Just think about it!",
        "I might die if you don't agree...",
        "I'm dead now 🥴...",
        "Okay fine, I will stop asking...",
        "Sike! I'll keep asking until you agree ❤️",
        "Pleaaase say yes"
    ];

    let messageIndex = 0;

    function handleNoClick() {
        const noButton = document.querySelector('.no-button');
        const yesButton = document.querySelector('.yes-button');
        noButton.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;
        const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = `${currentSize * 1.5}px`;
    }

    function handleYesClick() {
        window.location.href = "yes_page.html";
    }
});
