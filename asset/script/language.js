document.addEventListener("DOMContentLoaded", () => {
  const langItems = document.querySelectorAll(".lang-item");
  const saveBtn = document.querySelector(".save-btn");

  let selectedLanguage = null;

  // 📌 Sayfa açıldığında daha önce seçilen dili geri yükle
  const savedLanguage = localStorage.getItem("selectedLanguage");
  if (savedLanguage) {
    langItems.forEach(item => {
      const text = item.querySelector(".text").textContent;
      if (text === savedLanguage) {
        item.classList.add("selected");
        item.querySelector(".radio")?.classList.add("checked");
        selectedLanguage = savedLanguage; // tekrar set et
      }
    });
  }

  // Dil seçme işlemi
  langItems.forEach(item => {
    item.addEventListener("click", () => {
      langItems.forEach(i => {
        i.classList.remove("selected");
        i.querySelector(".radio").classList.remove("checked");
      });

      item.classList.add("selected");
      item.querySelector(".radio").classList.add("checked");

      selectedLanguage = item.querySelector(".text").textContent;
      console.log("Seçilen dil:", selectedLanguage);
    });
  });

  // Kaydet butonuna tıklayınca
  saveBtn.addEventListener("click", () => {
    if (selectedLanguage) {
      localStorage.setItem("selectedLanguage", selectedLanguage);
      alert(`Dil seçiminiz kaydedildi: ${selectedLanguage}`);
    } else {
      alert("Lütfen bir dil seçin!");
    }
  });
});
