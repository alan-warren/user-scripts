function setFavicon(url) {
    setTimeout(() => {
        // Try to find the existing favicon link tag
        let link = document.querySelector("link[rel*='icon']");

        // If it doesn't exist, create a new one
        if (!link) {
            link = document.createElement("link");
            link.rel = "icon";
            document.head.appendChild(link);
        }

        link.href = url;
    }, 300);

}

function setEmojiFavicon(emoji) {
    const svgIcon = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="0.9em" x="-0.1em" font-size="90">${emoji}</text></svg>`;
    setFavicon(svgIcon);
}
