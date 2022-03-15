const elFname = document.querySelector('#firstName');
const elLname = document.querySelector('#lastName');
const elNumber = document.querySelector('#number');
const form = document.querySelector("#form");
const itemList = document.querySelector("#items");
const clearBtn = document.querySelector("#clear");
const elselect = document.querySelector("#select");

form.addEventListener('submit', addItem);

function addItem(e) {
  e.preventDefault();

  let newItem = elFname.value;
  let lastName = elLname.value;
  let elNum = elNumber.value;

  let li = document.createElement("li");
  li.className = `result__item ${elselect.value}`;
  console.log(li);


  li.innerHTML = `
  <p class="result__text"><span class="result__span">FullName:</span> ${newItem} ${lastName}</p>
  <p class="result__text"><span class="result__span">Number:</span> ${elNum}</p>
  `;
  itemList.appendChild(li);

  elFname.value = "";
  elLname.value = "";
  elNumber.value = "";

  clearBtn.addEventListener("click", function () {
    itemList.removeChild(li);
  });
}

const elSearch = document.querySelector("#search");

elSearch.addEventListener("keyup", filterItems);

function filterItems(e) {
  let text = e.target.value.toLowerCase();
  let items = itemList.getElementsByTagName('li');
  console.log(items);

  for (let i = 0; i < Array.from(items).length; i++) {
    let itemName = items[i].textContent;
    console.log(itemName);
    if (itemName.toLowerCase().indexOf(text) != -1) {
      items[i].className = "result__item"
    } else {
      items[i].className = "result__item d-none";
    }
  }
}


const elAll = document.getElementById('all');
const elFam = document.getElementById('fam');
const elFri = document.getElementById('fri');
const elCol = document.getElementById('col');

elAll.addEventListener('click', () => {
  let sortLi = document.querySelectorAll('li');

  for(let i = 0; i < sortLi.length; i++) {
    if(sortLi[i].classList.contains("family") || sortLi[i].classList.contains("friends") || sortLi[i].classList.contains("partner")) {
      sortLi[i].style.display = 'block';
    }
  }
});

elFam.addEventListener('click', ()=> {
    let sortLi = document.querySelectorAll('li');

    for(let i = 0; i < sortLi.length; i++) {
      if(! sortLi[i].classList.contains("family")) {
        sortLi[i].style.display = 'none';
      } else {
        sortLi[i].style.display = 'block'
      }
    }
  });

  elFri.addEventListener('click', () => {
    let sortLi = document.querySelectorAll('li');

    for(let i = 0; i < sortLi.length; i++) {
      if(! sortLi[i].classList.contains("friends")) {
        sortLi[i].style.display = 'none';
      } else {
        sortLi[i].style.display = 'block';
      }
    }

  });

  elCol.addEventListener('click', () => {
    let sortLi = document.querySelectorAll('li');

    for(let i = 0; i < sortLi.length; i++) {
      if(! sortLi[i].classList.contains("partner")) {
        sortLi[i].style.display = 'none';
      } else {
        sortLi[i].style.display = 'block';
      }
    }

  });