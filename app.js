const tg = window.Telegram.WebApp;
tg.expand();

function generate() {
  const prompt = document.getElementById("prompt").value;
  if (!prompt) {
    tg.showAlert("Введите описание изображения");
    return;
  }

  tg.sendData(JSON.stringify({
    action: "generate",
    prompt: prompt
  }));
}

function buy() {
  tg.sendData(JSON.stringify({ action: "buy" }));
}
