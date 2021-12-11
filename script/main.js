//Global Selectors
const inputs = document.querySelectorAll("input");

//Own Materials Selectors
const ownPerm = document.getElementById("own-perm-banner");
const ownChar = document.getElementById("own-char-banner");
const ownPrimo = document.getElementById("own-primogem");
const ownGenesis = document.getElementById("own-genesis-crystal");
const currentWishCount = document.querySelector(".current-wish-count");

//Character Banner Selectors
const charAttempts = document.getElementById("char-attempts");
const charLastWin = document.getElementById("char-last-win");
const charTotal = document.getElementById("char-total");
const charResetBtn = document.getElementById("char-reset");
const charModal = document.querySelector(".char-modal");
const charResetConfirmBtn = document.querySelector(".char-modal .confirm");
const charResetCloseBtn = document.querySelector(".char-modal .close-btn");

//Weapon Banner Selector
const weaponAttempts = document.getElementById("weapon-attempts");
const weaponLastWin = document.getElementById("weapon-last-win");
const weaponTotal = document.getElementById("weapon-total");
const weaponResetBtn = document.getElementById("weapon-reset");
const weaponModal = document.querySelector(".weapon-modal");
const weaponResetConfirmBtn = document.querySelector(".weapon-modal .confirm");
const weaponResetCloseBtn = document.querySelector(".weapon-modal .close-btn");

//Perm Banner Selector
const permAttempts = document.getElementById("perm-attempts");
const permLastWin = document.getElementById("perm-last-win");
const permTotal = document.getElementById("perm-total");
const permResetBtn = document.getElementById("perm-reset");
const permModal = document.querySelector(".perm-modal");
const permResetConfirmBtn = document.querySelector(".perm-modal .confirm");
const permResetCloseBtn = document.querySelector(".perm-modal .close-btn");

// Global Events
inputs.forEach((input) => {
  input.addEventListener("dblclick", () => {
    input.removeAttribute("readonly");
  });
  input.addEventListener("blur", () => {
    input.setAttribute("readonly", true);
  });
});

//Own Materials Events
ownPerm.addEventListener("change", addToLocalOwnPerm);
ownChar.addEventListener("change", addToLocalOwnChar);
ownPrimo.addEventListener("change", addToLocalOwnPrimo);
ownGenesis.addEventListener("change", addToLocalOwnGen);
window.onload = primoGenWishCount;

//Char Events
charAttempts.addEventListener("change", addToLocalCharAtt);
charResetBtn.addEventListener("click", charReset);
charResetCloseBtn.addEventListener("click", charResetClose);
charResetConfirmBtn.addEventListener("click", charResetConfirm);

//Weapon Events
weaponAttempts.addEventListener("change", addToLocalWeaponAtt);
weaponResetBtn.addEventListener("click", weaponReset);
weaponResetCloseBtn.addEventListener("click", weaponResetClose);
weaponResetConfirmBtn.addEventListener("click", weaponResetConfirm);

//Perm Events
permAttempts.addEventListener("change", addToLocalPermAtt);
permResetBtn.addEventListener("click", permReset);
permResetCloseBtn.addEventListener("click", permResetClose);
permResetConfirmBtn.addEventListener("click", permResetConfirm);

// Functions
function primoGenWishCount() {
  const total = Math.floor(
    (parseInt(ownPrimo.value) + parseInt(ownGenesis.value)) / 160
  );
  return (currentWishCount.innerText = total);
}

//local Storage
function addToLocalOwnPerm() {
  localStorage.setItem("ownPerm", ownPerm.value);
}
function addToLocalOwnChar() {
  localStorage.setItem("ownChar", ownChar.value);
}
function addToLocalOwnPrimo() {
  localStorage.setItem("ownPrimo", ownPrimo.value);
  primoGenWishCount();
}
function addToLocalOwnGen() {
  localStorage.setItem("ownGenesis", ownGenesis.value);
  primoGenWishCount();
}

if (localStorage.getItem("ownPerm")) {
  ownPerm.value = localStorage.getItem("ownPerm");
}
if (localStorage.getItem("ownChar")) {
  ownChar.value = localStorage.getItem("ownChar");
}
if (localStorage.getItem("ownPrimo")) {
  ownPrimo.value = localStorage.getItem("ownPrimo");
}
if (localStorage.getItem("ownGenesis")) {
  ownGenesis.value = localStorage.getItem("ownGenesis");
}

//Char Banner LocalStorage
function addToLocalCharAtt() {
  localStorage.setItem("charBannerAttempts", charAttempts.value);
  if (charTotal.value == 0) {
    charTotal.value = charAttempts.value;
  } else {
    charTotal.value = parseInt(charTotal.value) + parseInt(charAttempts.value);
  }
  addToLocalCharLast();
  addToLocalCharTotal();
}
function addToLocalCharLast() {
  localStorage.setItem("charBannerLastWin", charLastWin.value);
}
function addToLocalCharTotal() {
  localStorage.setItem("charBannerTotal", charTotal.value);
}

function charReset() {
  charModal.style.display = "flex";
}

function charResetClose() {
  charModal.style.display = "none";
}

function charResetConfirm() {
  charModal.style.display = "none";
  charLastWin.value = charAttempts.value;
  localStorage.removeItem("charBannerAttempts");
  charAttempts.value = 0;
}

if (localStorage.getItem("charBannerAttempts")) {
  charAttempts.value = localStorage.getItem("charBannerAttempts");
}
if (localStorage.getItem("charBannerLastWin")) {
  charLastWin.value = localStorage.getItem("charBannerLastWin");
}
if (localStorage.getItem("charBannerTotal")) {
  charTotal.value = localStorage.getItem("charBannerTotal");
}

//Weapon Banner LocalStorage
function addToLocalWeaponAtt() {
  localStorage.setItem("weaponBannerAttempts", weaponAttempts.value);
  if (weaponTotal.value == 0) {
    weaponTotal.value = weaponAttempts.value;
  } else {
    weaponTotal.value =
      parseInt(weaponTotal.value) + parseInt(weaponAttempts.value);
  }
  addToLocalWeaponLast();
  addToLocalWeaponTotal();
}
function addToLocalWeaponLast() {
  localStorage.setItem("weaponBannerLastWin", weaponLastWin.value);
}
function addToLocalWeaponTotal() {
  localStorage.setItem("weaponBannerTotal", weaponTotal.value);
}

function weaponReset() {
  weaponModal.style.display = "flex";
}

function weaponResetClose() {
  weaponModal.style.display = "none";
}

function weaponResetConfirm() {
  weaponModal.style.display = "none";
  weaponLastWin.value = weaponAttempts.value;
  localStorage.removeItem("weaponBannerAttempts");
  weaponAttempts.value = 0;
}

if (localStorage.getItem("weaponBannerAttempts")) {
  weaponAttempts.value = localStorage.getItem("weaponBannerAttempts");
}
if (localStorage.getItem("weaponBannerLastWin")) {
  weaponLastWin.value = localStorage.getItem("weaponBannerLastWin");
}
if (localStorage.getItem("weaponBannerTotal")) {
  weaponTotal.value = localStorage.getItem("weaponBannerTotal");
}

//Perm Banner LocalStorage
function addToLocalPermAtt() {
  localStorage.setItem("permBannerAttempts", permAttempts.value);
  if (permTotal.value == 0) {
    permTotal.value = permAttempts.value;
  } else {
    permTotal.value = parseInt(permTotal.value) + parseInt(permAttempts.value);
  }
  addToLocalPermLast();
  addToLocalPermTotal();
}
function addToLocalPermLast() {
  localStorage.setItem("permBannerLastWin", permLastWin.value);
}
function addToLocalPermTotal() {
  localStorage.setItem("permBannerTotal", permTotal.value);
}

function permReset() {
  permModal.style.display = "flex";
}

function permResetClose() {
  permModal.style.display = "none";
}

function permResetConfirm() {
  permModal.style.display = "none";
  permLastWin.value = permAttempts.value;
  localStorage.removeItem("permBannerAttempts");
  permAttempts.value = 0;
}

if (localStorage.getItem("permBannerAttempts")) {
  permAttempts.value = localStorage.getItem("permBannerAttempts");
}
if (localStorage.getItem("permBannerLastWin")) {
  permLastWin.value = localStorage.getItem("permBannerLastWin");
}
if (localStorage.getItem("permBannerTotal")) {
  permTotal.value = localStorage.getItem("permBannerTotal");
}

if (localStorage.getItem("permBannerAttempts") > permAttempts.value) {
  permTotal.value =
    localStorage.getItem("permBannerAttempts") -
    permAttempts.value +
    permTotal.value;
} else {
  permTotal.value =
    permAttempts.value -
    localStorage.getItem("permBannerAttempts") +
    permTotal.value;
}
