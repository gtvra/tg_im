const tg = window.Telegram.WebApp;
tg.expand();

function generate() {
  tg.sendData(JSON.stringify({
    action: "generate",
    prompt: document.getElementById("prompt").value
  }));
}

function buy() {
  tg.sendData(JSON.stringify({ action: "buy" }));
}
