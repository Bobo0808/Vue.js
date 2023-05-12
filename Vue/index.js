let count = 0;
const CountAddBtn = document.getElementById("add")
const CountHeader = document.getElementById("count")
const CountSubtractBtn = document.getElementById("subtract")

//innerHTML 可以訪問或設置該元素內容
CountHeader.innerHTML = count
// 事件監聽器

CountAddBtn.addEventListener("click", () => {
   count++;
   CountHeader.innerHTML = count
})

CountSubtractBtn.addEventListener("click",() =>{
    count--;
    CountHeader.innerHTML = count
})