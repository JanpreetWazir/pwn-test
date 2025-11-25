const div = document.createElement("div");
div.style.cssText = "position:fixed;top:0;left:0;width:100%;padding:20px;background:#ff0000;color:#fff;font-size:24px;z-index:999999;";
div.textContent = "XSS Confirmed: External Script Executed";
document.body.prepend(div);
