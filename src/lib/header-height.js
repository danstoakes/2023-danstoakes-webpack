function remToPixels (remValue, conversionFactor) {
    return remValue * conversionFactor;
}
  
let cachedConversionFactor = null;
  
function getConversionFactor () {
    if (cachedConversionFactor === null) {
        const tempElement = document.createElement("div");
        tempElement.style.display = "none";
        tempElement.style.fontSize = "1rem";

        document.body.appendChild(tempElement);
        const fontSizeInPixels = parseFloat(getComputedStyle(tempElement).fontSize);
        document.body.removeChild(tempElement);

        cachedConversionFactor = fontSizeInPixels;
    }

    return cachedConversionFactor;
}

/**
 * Calculates and returns the height of the header in pixels.
 * 
 * @returns { int } Height of the header in pixels
 */
export default function getHeaderHeight () {
    const headerHeightRem = parseFloat(getComputedStyle(document.body).getPropertyValue("--header-height"));
    const conversionFactor = getConversionFactor();
    
    return remToPixels(headerHeightRem, conversionFactor);
}  