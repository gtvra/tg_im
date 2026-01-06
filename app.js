const tg = window.Telegram.WebApp;
tg.expand();

async function generate() {
  const prompt = document.getElementById("prompt").value;
  if (!prompt) {
    tg.showAlert("Введите описание");
    return;
  }

  document.getElementById("result").innerHTML = "⏳ Генерация...";

  const res = await fetch("https://API_DOMAIN/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user_id: tg.initDataUnsafe.user.id,
      prompt: prompt
    })
  });

  if (!res.ok) {
    const err = await res.text();
    document.getElementById("result").innerHTML = "❌ " + err;
    return;
  }

  const data = await res.json();
  document.getElementById("result").innerHTML =
    `<img src="${data.image_url}" style="width:100%;border-radius:12px;">`;
}
