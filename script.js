```javascript
const shareButton = document.getElementById("shareButton");
const saveButton = document.getElementById("saveButton");
const menuButton = document.getElementById("menuButton");
const message = document.getElementById("actionMessage");


/* Share Article */

shareButton.addEventListener("click", async function () {

    if (navigator.share) {

        await navigator.share({
            title: document.title,
            text: "Check out this new Kairova article."
        });

        message.textContent = "Article shared.";

    } else {

        await navigator.clipboard.writeText(window.location.href);

        message.textContent =
            "Article link copied to your clipboard.";

    }

});


/* Save Article */

saveButton.addEventListener("click", function () {

    saveButton.textContent = "✓ Saved";

    message.textContent =
        "This article has been saved.";

});


/* Mobile Menu */

menuButton.addEventListener("click", function () {

    const nav = document.querySelector("nav");

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "75px";
        nav.style.right = "20px";
        nav.style.padding = "20px";
        nav.style.background = "white";
        nav.style.border = "1px solid #ddd";

    }

});
```
