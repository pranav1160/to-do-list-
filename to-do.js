const inputBox = document.getElementById('add-text');
const allList = document.getElementById('all-list');

function clicked() {
  if (inputBox.value === '') {
    alert('Cannot leave blank');
  } else {
    let myList = document.createElement('li');
    myList.innerHTML = inputBox.value;
    allList.appendChild(myList);
    inputBox.value=""
    let mySpan = document.createElement('span')
    mySpan.innerHTML="❌"
    myList.appendChild(mySpan)
  }
  saveData()
}




const e = (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle('checked');
    saveData()
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
    saveData()
  }
};

allList.addEventListener('click', e);

function saveData() {
  localStorage.setItem("data",allList.innerHTML)
}

function showTask(){
  allList.innerHTML=localStorage.getItem("data")
}
showTask()