```javascript
const readButton = document.getElementById("readButton");
const statusMessage = document.getElementById("statusMessage");

readButton.addEventListener("click", function () {

    readButton.textContent = "Article Read ✓";

    statusMessage.textContent =
        "This article has been marked as read.";

});
```
