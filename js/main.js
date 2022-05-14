const elFname = document.querySelector('#firstName');
const elLname = document.querySelector('#lastName');
const elNumber = document.querySelector('#number');
const form = document.querySelector("#form");
const itemList = document.querySelector("#items");
const clearBtn = document.querySelector("#clear");
const elselect = document.querySelector("#select");

//New array

const newArr = [];

form.addEventListener('submit', addItem);

function addItem(e) {
  e.preventDefault();

  let newItem = elFname.value;
  let lastName = elLname.value;
  let elNum = elNumber.value;
  let elSelect = elselect.value;


  newArr.push(
    {
      name: newItem,
      fname: lastName,
      number: elNum,
      cate: elSelect
    });


  let li = document.createElement("li");
  for(let i = 0; i < newArr.length; i++) {
    li.className = `result__item ${newArr[i].cate}`;
    li.innerHTML = `
    <p class="result__text"><span class="result__span">FullName:</span> ${newArr[i].name} ${newArr[i].fname}</p>
    <p class="result__text"><span class="result__span">Number:</span> ${+newArr[i].number}</p>
    `;
  }

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
const elpar = document.getElementById('par');

elAll.addEventListener('click', () => {
  let sortLi = document.querySelectorAll('li');

  for(let i = 0; i < sortLi.length; i++) {
    if(sortLi[i].classList.contains("all") || sortLi[i].classList.contains("friends") || sortLi[i].classList.contains("partner") || sortLi[i].classList.contains("family")) {
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

  elpar.addEventListener('click', () => {
    let sortLi = document.querySelectorAll('li');

    for(let i = 0; i < sortLi.length; i++) {
      if(! sortLi[i].classList.contains("partner")) {
        sortLi[i].style.display = 'none';
      } else {
        sortLi[i].style.display = 'block';
      }
    }

  });


// const elForm = document.querySelector('#form');
// const elName = document.querySelector('input[id="name"]');
// const elFname = document.querySelector('input[id="fname"]');
// const elNumber = document.querySelector('input[id="number"]');
// const elCategory = document.querySelector('#select');
// const elList = document.querySelector('#items');


// // SORTLASH QISMI
// const elAll = document.getElementById('all');
// const elFam = document.getElementById('fam');
// const elFri = document.getElementById('fri');
// const elCol = document.getElementById('col');


// //Yangi array

// const newArr = []

// window.addEventListener('load', () => {
//   let li = document.createElement('li');
//   for(let i = 0; i < newArr.length; i++) {
//     li.className = `contact__item contact__${newArr[i].cate}`;

//     li.innerHTML = `
//     <p class="contact__text">
//     <span class="contact__cate">Full name</span>
//     ${newArr[i].name} ${newArr[i].fname}
//   </p>
//   <p class="contact__text">
//     <span class="contact__cate">Number</span>
//     +${newArr[i].number}
//   </p>

//   <p class="contact__text">
//     <span class="contact__cate">Category</span>
//     ${newArr[i].cate}
//   </p>

//   <p class="contact__text"><a class="contact__tel" href="tel:+${newArr[i].number}">Call <i class='bx bxs-phone-call'></i></a></p>
//     `
//   }
//   elList.appendChild(li);
// })


// elForm.addEventListener('submit', addItem);

// function addItem(e) {
//   e.preventDefault();

//   newArr.push({
//     name: elName.value,
//     fname: elFname.value,
//     number: elNumber.value,
//     cate: elCategory.value
//   });

//   let li = document.createElement('li');
//   for(let i = 1; i < newArr.length; i++) {
//     li.className = `contact__item contact__${newArr[i].cate}`;

//     li.innerHTML = `
//     <p class="contact__text">
//     <span class="contact__cate">Full name</span>
//     ${newArr[i].name} ${newArr[i].fname}
//   </p>
//   <p class="contact__text">
//     <span class="contact__cate">Number</span>
//     +${newArr[i].number}
//   </p>

//   <p class="contact__text">
//     <span class="contact__cate">Category</span>
//     ${newArr[i].cate}
//   </p>

//   <p class="contact__text"><a class="contact__tel" href="tel:+${newArr[i].number}">Call <i class='bx bxs-phone-call'></i></a></p>
//     `
//   }
//   // inputlarni tozalash

//   elName.value = '';
//   elFname.value = '';
//   elNumber.value = '998';


//   // display chiqaramiz

//   elList.appendChild(li);

// }

// console.log(newArr)


// // Filter qilish qismi

// elAll.addEventListener('click', () => {
//   let sortLi = document.querySelectorAll('li');

//   let a = [...sortLi].filter(el => {
//     if(el.classList.contains("contact__family") || el.classList.contains("contact__friends") || el.classList.contains("contact__colleague")) {
//       el.style.display = 'block'
//       return el
//     }
//   })

//   console.log(a)
//   // for(let i = 0; i < sortLi.length; i++) {
//   //   if(sortLi[i].classList.contains("contact__family") || sortLi[i].classList.contains("contact__friends") || sortLi[i].classList.contains("contact__colleague")) {
//   //     sortLi[i].style.display = 'block';
//   //   }
//   // }
// });

// elFam.addEventListener('click', ()=> {
//     let sortLi = document.querySelectorAll('li');

//     let a = [...sortLi].filter(el => {
//       if(! el.classList.contains("contact__family")) {
//         el.style.display = 'none'
//         return el
//       }
//       else {
//         el.style.display = 'block'
//         return el
//       }
//     })

//     // for(let i = 0; i < sortLi.length; i++) {
//     //   if(! sortLi[i].classList.contains("contact__family")) {
//     //     sortLi[i].style.display = 'none';
//     //   } else {
//     //     sortLi[i].style.display = 'block'
//     //   }
//     // }
//   });

//   elFri.addEventListener('click', () => {
//     let sortLi = document.querySelectorAll('li');

//     let a = [...sortLi].filter(el => {
//       if(! el.classList.contains("contact__friends")) {
//         el.style.display = 'none'
//         return el
//       }
//       else {
//         el.style.display = 'block'
//         return el
//       }
//     })

//     // for(let i = 0; i < sortLi.length; i++) {
//     //   if(! sortLi[i].classList.contains("contact__friends")) {
//     //     sortLi[i].style.display = 'none';
//     //   } else {
//     //     sortLi[i].style.display = 'block';
//     //   }
//     // }

//   });

//   elCol.addEventListener('click', () => {
//     let sortLi = document.querySelectorAll('li');

//     let a = [...sortLi].filter(el => {
//       if(! el.classList.contains("contact__colleague")) {
//         el.style.display = 'none'
//         return el
//       }
//       else {
//         el.style.display = 'block'
//         return el
//       }
//     });

//     // for(let i = 0; i < sortLi.length; i++) {
//     //   if(! sortLi[i].classList.contains("contact__colleague")) {
//     //     sortLi[i].style.display = 'none';
//     //   } else {
//     //     sortLi[i].style.display = 'block';
//     //   }
//     // }

//   });