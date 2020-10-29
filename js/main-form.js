const buttonForm = document.querySelector(".hotels-search-button");
const formBlock = document.querySelector(".modal-hotel-search");
const searchForm = formBlock.querySelector(".hotel-search-form");
const inputDateIn = formBlock.querySelector("#check-in-date");
const inputDateOut = formBlock.querySelector("#check-out-date");
const inputAdult = formBlock.querySelector("#amount-adult");
const inputChild = formBlock.querySelector("#amount-child");
let storageAdult = localStorage.getItem("adult");
let storageChild = localStorage.getItem("child");

try {
  storageAdult = localStorage.getItem("adult");
  storageChild = localStorage.getItem("child");
} catch (err) {
  isStorageSupport = false;
}

formBlock.classList.add("modal-hotel-search-hide");

buttonForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  formBlock.classList.toggle("modal-hotel-search-hide");
  formBlock.classList.toggle(".modal-hotel-search-show");
  inputDateIn.focus();
  if (storageAdult){
    inputAdult.value = storageAdult;
  };
  if (storageChild){
    inputChild.value = storageChild;
  };
});

searchForm.addEventListener("submit", function (evt) {
  if (!inputDateIn.value || !inputDateOut.value || !inputAdult.value || !inputChild.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem("adult", inputAdult.value);
    localStorage.setItem("child", inputChild.value);
  }
});
