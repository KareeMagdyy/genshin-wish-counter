//Global Selectors
// const inputs = document.querySelectorAll("input");
const editBtn = document.querySelectorAll(".fa-edit");
const detailPrimoSpan = document.querySelector(".primo span");
const detailCrystalSpan = document.querySelector(".crystal span");
const detailMasterSpan = document.querySelector(".masterless span");

//Own Materials Selectors
const ownPerm = document.getElementById("own-perm-banner");
const ownChar = document.getElementById("own-char-banner");
const ownPrimo = document.getElementById("own-primogem");
const ownGenesis = document.getElementById("own-genesis-crystal");
const ownGlitter = document.getElementById("masterless");
const currentWishCount = document.querySelector(".current-wish-count");

//Character Banner Selectors
const charAttempts = document.getElementById("char-attempts");
const charLastWin = document.getElementById("char-last-win");
const charTotal = document.getElementById("char-total");
const charResetBtn = document.getElementById("char-reset");
const charModal = document.querySelector(".char-modal");
const charResetConfirmBtn = document.querySelector(".char-modal .confirm");
const charResetCloseBtn = document.querySelector(".char-modal .close-btn");
const addCharAtt = document.querySelector("#character .fa-plus-square");
const removeCharAtt = document.querySelector("#character .fa-minus-square");
const charWishes = document.getElementById("charWishes");
const charWithAttempts = document.getElementById("charWithAttempts");

//Weapon Banner Selector
const weaponAttempts = document.getElementById("weapon-attempts");
const weaponLastWin = document.getElementById("weapon-last-win");
const weaponTotal = document.getElementById("weapon-total");
const weaponResetBtn = document.getElementById("weapon-reset");
const weaponModal = document.querySelector(".weapon-modal");
const weaponResetConfirmBtn = document.querySelector(".weapon-modal .confirm");
const weaponResetCloseBtn = document.querySelector(".weapon-modal .close-btn");
const addWeaponAtt = document.querySelector("#weapon .fa-plus-square");
const removeWeaponAtt = document.querySelector("#weapon .fa-minus-square");
const weaponWishes = document.getElementById("weaponWishes");
const weaponWithAttempts = document.getElementById("weaponWithAttempts");

//Perm Banner Selector
const permAttempts = document.getElementById("perm-attempts");
const permLastWin = document.getElementById("perm-last-win");
const permTotal = document.getElementById("perm-total");
const permResetBtn = document.getElementById("perm-reset");
const permModal = document.querySelector(".perm-modal");
const permResetConfirmBtn = document.querySelector(".perm-modal .confirm");
const permResetCloseBtn = document.querySelector(".perm-modal .close-btn");
const addPermAtt = document.querySelector("#perm .fa-plus-square");
const removePermAtt = document.querySelector("#perm .fa-minus-square");
const permWishes = document.getElementById("permWishes");
const permWithAttempts = document.getElementById("permWithAttempts");

// Global Events
// inputs.forEach((input) => {
//   input.addEventListener("dblclick", () => {
//     input.removeAttribute("readonly");
//   });
//   input.addEventListener("blur", () => {
//     input.setAttribute("readonly", true);
//   });
// });
editBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    let theInput = btn.previousElementSibling;
    theInput.removeAttribute("readonly");
    theInput.focus();
    theInput.addEventListener("blur", () => {
      theInput.setAttribute("readonly", true);
    });
  });
});

document.addEventListener("DOMContentLoaded", totalCharWishes);
document.addEventListener("DOMContentLoaded", totalWeaponWishes);
document.addEventListener("DOMContentLoaded", totalPermWishes);
document.addEventListener("DOMContentLoaded", detailedCalc);

//Own Materials Events
ownPerm.addEventListener("change", addToLocalOwnPerm);
ownChar.addEventListener("change", addToLocalOwnChar);
ownPrimo.addEventListener("change", addToLocalOwnPrimo);
ownGenesis.addEventListener("change", addToLocalOwnGen);
ownGlitter.addEventListener("change", addToLocalOwnStar);
window.onload = primoGenWishCount;

//Char Events
addCharAtt.addEventListener("click", addToLocalCharAtt);
removeCharAtt.addEventListener("click", subtractLocalCharAtt);
charTotal.addEventListener("change", () => {
  localStorage.setItem("charBannerTotal", charTotal.value);
});
charResetBtn.addEventListener("click", charReset);
charResetCloseBtn.addEventListener("click", charResetClose);
charResetConfirmBtn.addEventListener("click", charResetConfirm);

//Weapon Events
addWeaponAtt.addEventListener("click", addToLocalWeaponAtt);
removeWeaponAtt.addEventListener("click", subtractLocalWeaponAtt);
weaponTotal.addEventListener("change", () => {
  localStorage.setItem("weaponBannerTotal", weaponTotal.value);
});
weaponResetBtn.addEventListener("click", weaponReset);
weaponResetCloseBtn.addEventListener("click", weaponResetClose);
weaponResetConfirmBtn.addEventListener("click", weaponResetConfirm);

//Perm Events
addPermAtt.addEventListener("click", addToLocalPermAtt);
removePermAtt.addEventListener("click", subtractLocalPermAtt);
permTotal.addEventListener("change", () => {
  localStorage.setItem("permBannerTotal", permTotal.value);
});
permResetBtn.addEventListener("click", permReset);
permResetCloseBtn.addEventListener("click", permResetClose);
permResetConfirmBtn.addEventListener("click", permResetConfirm);

// Functions

function detailedCalc() {
  detailPrimoSpan.innerText = ` : ${Math.floor(
    parseInt(ownPrimo.value) / 160
  )}  wishes.`;
  detailCrystalSpan.innerText = ` : ${Math.floor(
    parseInt(ownGenesis.value) / 160
  )}  wishes.`;
  detailMasterSpan.innerText = ` : ${Math.floor(
    parseInt(ownGlitter.value) / 5
  )}  wishes.`;
}

function primoGenWishCount() {
  let totalPrimoGen = Math.floor(
    (parseInt(ownPrimo.value) + parseInt(ownGenesis.value)) / 160
  );
  let totalStar = Math.floor(parseInt(ownGlitter.value) / 5);
  let total = totalPrimoGen + totalStar;
  return (currentWishCount.innerText = total);
}

function totalCharWishes() {
  let totalPrimoGen = Math.floor(
    (parseInt(ownPrimo.value) + parseInt(ownGenesis.value)) / 160
  );
  let totalStar = Math.floor(parseInt(ownGlitter.value) / 5);
  charWishes.innerText =
    parseInt(totalPrimoGen) + parseInt(ownChar.value) + parseInt(totalStar);
  charWithAttempts.innerText =
    parseInt(totalPrimoGen) +
    parseInt(ownChar.value) +
    parseInt(charAttempts.value) +
    parseInt(totalStar);
}

function totalWeaponWishes() {
  let totalPrimoGen = Math.floor(
    (parseInt(ownPrimo.value) + parseInt(ownGenesis.value)) / 160
  );
  let totalStar = Math.floor(parseInt(ownGlitter.value) / 5);
  weaponWishes.innerText =
    parseInt(totalPrimoGen) + parseInt(ownChar.value) + parseInt(totalStar);
  weaponWithAttempts.innerText =
    parseInt(totalPrimoGen) +
    parseInt(ownChar.value) +
    parseInt(weaponAttempts.value) +
    parseInt(totalStar);
}

function totalPermWishes() {
  let totalPrimoGen = Math.floor(
    (parseInt(ownPrimo.value) + parseInt(ownGenesis.value)) / 160
  );
  let totalStar = Math.floor(parseInt(ownGlitter.value) / 5);
  permWishes.innerText =
    parseInt(totalPrimoGen) + parseInt(ownPerm.value) + parseInt(totalStar);
  permWithAttempts.innerText =
    parseInt(totalPrimoGen) +
    parseInt(ownPerm.value) +
    parseInt(permAttempts.value) +
    parseInt(totalStar);
}

//local Storage
function addToLocalOwnPerm() {
  localStorage.setItem("ownPerm", ownPerm.value);
  totalPermWishes();
}
function addToLocalOwnChar() {
  localStorage.setItem("ownChar", ownChar.value);
  totalCharWishes();
  totalWeaponWishes();
}

function addToLocalOwnPrimo() {
  localStorage.setItem("ownPrimo", ownPrimo.value);
  detailedCalc();
  primoGenWishCount();
  totalCharWishes();
  totalWeaponWishes();
  totalPermWishes();
}

function addToLocalOwnGen() {
  localStorage.setItem("ownGenesis", ownGenesis.value);
  primoGenWishCount();
  detailedCalc();
  totalCharWishes();
  totalWeaponWishes();
  totalPermWishes();
}

function addToLocalOwnStar() {
  localStorage.setItem("ownStar", ownGlitter.value);
  primoGenWishCount();
  detailedCalc();
  totalCharWishes();
  totalWeaponWishes();
  totalPermWishes();
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
if (localStorage.getItem("ownStar")) {
  ownGlitter.value = localStorage.getItem("ownStar");
}

//Char Banner LocalStorage
function addToLocalCharAtt() {
  charAttempts.value++;
  localStorage.setItem("charBannerAttempts", charAttempts.value);
  addToLocalCharTotal("+");
}

function subtractLocalCharAtt() {
  if (charAttempts.value > 0) {
    charAttempts.value--;
    localStorage.setItem("charBannerAttempts", charAttempts.value);
    addToLocalCharTotal("-");
  }
}

function addToLocalCharTotal(operator) {
  if (operator === "+") {
    charTotal.value++;
  } else {
    charTotal.value--;
  }
  localStorage.setItem("charBannerTotal", charTotal.value);
  totalCharWishes();
}

function addToLocalCharLast() {
  localStorage.setItem("charBannerLastWin", charLastWin.value);
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
  localStorage.setItem("charBannerLastWin", charAttempts.value);
  localStorage.removeItem("charBannerAttempts");
  charAttempts.value = 0;
  totalCharWishes();
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
  weaponAttempts.value++;
  localStorage.setItem("weaponBannerAttempts", weaponAttempts.value);
  addToLocalWeaponTotal("+");
}

function subtractLocalWeaponAtt() {
  if (weaponAttempts.value > 0) {
    weaponAttempts.value--;
    localStorage.setItem("weaponBannerAttempts", weaponAttempts.value);
    addToLocalWeaponTotal("-");
  }
}

function addToLocalWeaponTotal(operator) {
  if (operator === "+") {
    weaponTotal.value++;
  } else {
    weaponTotal.value--;
  }
  localStorage.setItem("weaponBannerTotal", weaponTotal.value);
  totalWeaponWishes();
}

function addToLocalWeaponLast() {
  localStorage.setItem("weaponBannerLastWin", weaponLastWin.value);
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
  localStorage.setItem("weaponBannerLastWin", weaponAttempts.value);
  localStorage.removeItem("weaponBannerAttempts");
  weaponAttempts.value = 0;
  totalWeaponWishes();
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
  permAttempts.value++;
  localStorage.setItem("permBannerAttempts", permAttempts.value);
  addToLocalPermTotal("+");
}

function subtractLocalPermAtt() {
  if (permAttempts.value > 0) {
    permAttempts.value--;
    localStorage.setItem("permBannerAttempts", permAttempts.value);
    addToLocalPermTotal("-");
  }
}

function addToLocalPermTotal(operator) {
  if (operator === "+") {
    permTotal.value++;
  } else {
    permTotal.value--;
  }
  localStorage.setItem("permBannerTotal", permTotal.value);
  totalPermWishes();
}

function addToLocalPermLast() {
  localStorage.setItem("permBannerLastWin", permLastWin.value);
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
  localStorage.setItem("permBannerLastWin", permAttempts.value);
  localStorage.removeItem("permBannerAttempts");
  permAttempts.value = 0;
  totalPermWishes();
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
