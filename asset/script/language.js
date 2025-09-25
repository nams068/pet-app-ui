document.addEventListener("DOMContentLoaded", () => {
  const langItems = document.querySelectorAll(".lang-item");
  const saveBtn = document.querySelector(".save-btn");

  let selectedLanguage = null;

  // Sayfa açıldığında kaydedilen dili geri yükle
  const savedLanguage = localStorage.getItem("selectedLanguage");
  if (savedLanguage) {
    langItems.forEach(item => {
      const text = item.querySelector(".text").textContent;
      const match = text.match(/\(([^)]+)\)/);
      const code = match ? match[1] : text.trim(); // parantez yoksa metnin tamamını al
      if (code === savedLanguage) {
        item.classList.add("selected");
        item.querySelector(".radio")?.classList.add("checked");
        selectedLanguage = savedLanguage;
      }
    });
  }

  // Dil seçimi
  langItems.forEach(item => {
    item.addEventListener("click", () => {
      langItems.forEach(i => {
        i.classList.remove("selected");
        i.querySelector(".radio").classList.remove("checked");
      });

      item.classList.add("selected");
      item.querySelector(".radio").classList.add("checked");

      const text = item.querySelector(".text").textContent;
      const match = text.match(/\(([^)]+)\)/);
      selectedLanguage = match ? match[1].trim() : text.trim(); // her durumda doğru kodu al

      console.log("Seçilen dil kodu:", selectedLanguage);
    });
  });

  // Kaydet butonu
  saveBtn.addEventListener("click", () => {
    if (selectedLanguage) {
      localStorage.setItem("selectedLanguage", selectedLanguage);
      alert(`Dil seçiminiz kaydedildi: ${selectedLanguage}`);
    } else {
      alert("Lütfen bir dil seçin!");
    }
  });
});
