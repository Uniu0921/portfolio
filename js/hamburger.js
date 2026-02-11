const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

// ハンバーガークリック
hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  mobileNav.classList.toggle("active");
  hamburger.classList.toggle("open"); // ← 追加
});

// メニュー内クリックでは閉じない
mobileNav.addEventListener("click", (e) => {
  e.stopPropagation();
});

// 外側クリックで閉じる
document.addEventListener("click", () => {
  mobileNav.classList.remove("active");
  hamburger.classList.remove("open"); // ← 追加
});

