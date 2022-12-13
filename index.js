// 1. input값을 입력한다.
// 2. input-button누르면 input값이 추가된다.
// 2-1. enter를 누르면 값이 추가된다.
// 3. checkbox를 누르면 input에 줄이 그어진다
// 4. 휴지통 그림을 누르면 값이 지워진다.

function onClickInputButton(elem) {
  const inputBoxElem = document.querySelector("#input-box");
  const inputBoxValue = inputBoxElem.value;
  document.querySelector(".to-do-list").innerHTML += `
  <li>
  <input
    type="checkbox"
    class="checkbox"
    onclick="onClickCheckbox(this)"
  />
  <span>${inputBoxValue}</span>
  <img
    src="trashcan.png"
    width="20"
    height="20"
    alt="my image"
    onclick="onClickDeleteButton(this)"
  />
</li>
  `;
  inputBoxElem.value = "";
}

function enterKey() {
  if (window.event.keyCode == 13) {
    onClickInputButton();
  }
}

function onClickDeleteButton(deleteElem) {
  deleteElem.parentElement.remove();
}

function onClickCheckbox(checkboxElem) {
  const liElem = checkboxElem.parentElement;
  const spanElem = liElem.querySelector("span");
  if (checkboxElem.checked) {
    spanElem.innerHTML = `<s>${spanElem.innerText}</s>`;
  } else {
    spanElem.innerHTML = `${spanElem.innerText}`;
  }
}

//TODO:한국어 입력시 값이 두번 추가되는 부분 변경해보기
