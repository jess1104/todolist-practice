// 假初始資料
let data = [];

// 初始資料
function renderData() {
  let str = "";
  data.forEach(function (item,index) {
    str += `
    <li>
    ${item.content}
    <input type="button" data-num ="${index}"  class="delete" value="刪除待辦">
    </li>`;
  });
  const list = document.querySelector(".list");
  // 顯示於頁面
  list.innerHTML = str;
}
renderData();

// 選取到HTML標籤
const txt = document.querySelector(".txt");
const save = document.querySelector(".save");

// 儲存待辦
save.addEventListener("click",function(e){
   if(txt.value == ""){
       alert('請輸入內容，內容不得為空');
       return
   }
   obj = {}
//    {content:'待辦事項'}
   obj.content = txt.value;
   data.push(obj);
   txt.value="";
   renderData();
})
// 刪除待辦
const list = document.querySelector(".list");
list.addEventListener('click',function(e){
    // console.log(e.target.nodeName);
    // nodeName就是tag 的name
    if(e.target.getAttribute('class')!=='delete'){
        alert('你目前沒有點擊到刪除');
        return
    }
    let num = e.target.getAttribute('data-num');
    // 抓到特定筆數
    console.log(num);
    // 陣列刪資料
    data.splice(num,1);
    renderData();

})
