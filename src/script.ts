// Styl dla przycisków nadawany w ts wygenerowany przez LLM
function injectSwitcherStyles() {
    const styleBlock = document.createElement('style');
    styleBlock.innerHTML = `
        .styles_type {
            display: flex;
            justify-content: center; 
            align-items: center;
            gap: 15px;
            margin: 20px auto;       
            width: fit-content;      
            padding: 10px 25px;
            color: white;
        }
        
        .styles_type button {
            padding: 6px 16px;
            background: #444;
            color: white;
            border: 1px solid #666;
            border-radius: 4px;
            cursor: pointer;
        }
        
        .styles_type button:hover {
            background: #666;
        }
    `;
    document.head.appendChild(styleBlock);
}

const cssFiles = import.meta.glob('/public/*.css');
const stylesDictionary: Record<string, string> = {};

for (const path in cssFiles) {
    let buttonName = path.replace('/public/', '').replace('.css', '');
    buttonName = buttonName.replace(/_/g, ' ').toUpperCase();
    const finalUrl = path.replace('/public', '');
    stylesDictionary[buttonName] = finalUrl;
}

const styleNames = Object.keys(stylesDictionary);
console.log("Lista styli:", styleNames);
if (styleNames.length === 0) {
    console.warn("Nie znaleziono żadnych plików CSS w folderze public!");
}

let currentStyleName: string = styleNames[0];
let currentStyleFile: string = stylesDictionary[currentStyleName];
let currentLinkElement: HTMLLinkElement | null = null;

function changeStyle(newStyleName: string) {
    if (!stylesDictionary[newStyleName]) return;

    if (currentLinkElement) {
        currentLinkElement.remove();
    }

    currentStyleName = newStyleName;
    currentStyleFile = stylesDictionary[newStyleName];
    currentLinkElement = document.createElement('link');
    currentLinkElement.rel = 'stylesheet';
    currentLinkElement.href = currentStyleFile;
    document.head.appendChild(currentLinkElement);
}

function renderStyleSwitcher() {
    const container = document.querySelector('.styles_type');

    if (!container) {
        console.error('Nie znaleziono div w dokumencie HTML!');
        return;
    }

    container.innerHTML = '';

    const infoText = document.createElement('span');
    infoText.innerText = 'Wybierz styl: ';
    container.appendChild(infoText);

    for (const styleName of styleNames) {
        const button = document.createElement('button');
        button.innerText = styleName;
        button.style.marginLeft = '10px';
        button.style.cursor = 'pointer';

        button.addEventListener('click', () => {
            changeStyle(styleName);
        });

        container.appendChild(button);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (styleNames.length > 0) {
        renderStyleSwitcher();
        injectSwitcherStyles();
        changeStyle(currentStyleName);
    }
});