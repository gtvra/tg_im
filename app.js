const tg = window.Telegram.WebApp;
tg.expand();

async function generate() {
  const prompt = document.getElementById("prompt").value;
  const removeBg = document.getElementById("remove_bg").checked;

  if (!prompt) {
    tg.showAlert("Введите описание изображения");
    return;
  }

  document.getElementById("result").innerHTML = "⏳ Генерация...";

  const res = await fetch("https://gtvra.github.io/tg_im/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user_id: tg.initDataUnsafe.user.id,
      prompt: prompt,
      remove_bg: removeBg
    })
  });

  if (!res.ok) {
    const err = await res.text();
    document.getElementById("result").innerHTML = "❌ " + err;
    return;
  }

  const data = await res.json();
  document.getElementById("result").innerHTML =
    `<img src="${data.image_url}" style="width:100%; border-radius:12px;">`;
}
