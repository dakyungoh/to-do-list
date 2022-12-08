// 1. inputbutton을 누르면 값이 추가된다.
// 1-1. inputbox값 받아오기
// 1-2. to-do-list에 inputbox값 추가하기
// 1-3. 엔터를 누르면 to-do-list에 inputbox값이 추가된다.
// 2. to-do-list의 체크박스를 누르면 inputbox값에 줄이 그어진다.
// 3. 휴지통 그림을 누르면 inputbox값이 사라진다.
function onClickInputButton(elem) {
  const inputBoxElem = document.querySelector("#input-box");
  const inputBoxValue = inputBoxElem.value;
  document.querySelector(".to-do-list").innerHTML += `
    <li>
      <input type="checkbox" class="checkbox" onclick="onClickCheckbox()" />
      <span>${inputBoxValue}</span>
      <img
        src="trashcan.png"
        width="20"
        height="20"
        alt="delete button"
        onclick="onClickDeleteButton()"
      />
    </li>
  `;
}

// TODO: 이거 만들자.
function onClickCheckbox() {}

// TODO: 이거 만들자.
function onClickDeleteButton() {}
