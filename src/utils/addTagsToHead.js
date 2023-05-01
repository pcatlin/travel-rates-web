export function addToHead (tagObject) {
    const tag = tagObject?.tag ?? "script";
    let element = document.createElement(tag);

    for (const [key, value] of Object.entries(tagObject)) {
        if (key === "data") {
            for (const [dataKey, dataValue] of Object.entries(value)) {
                element.dataset[dataKey] = dataValue;
            }
            continue;
        }

        if (key === "property") {
            element.setAttribute("property", value);
            continue;
        }

        element[key] = value;
    }
    document.head.appendChild(element);
}

export function addCanonical (links = []) {
    // remove any other canonical link tags from the head
    document.head.querySelector("link[rel=\"canonical\"]")?.remove();
    document.head.querySelector("meta[property=\"og:url\"]")?.remove();

    const tags = [
        {
            tag: "link",
            rel: "canonical",
            href: location.origin + location.pathname
        },
        {
            tag: "meta",
            property: "og:url",
            content: location.origin + location.pathname
        },
        ...links
    ];

    addTagsToHead(tags);
}

export function addTagsToHead (elementsObjectArray) {
    elementsObjectArray.forEach(tagObj => {
        addToHead(tagObj);
    });
}