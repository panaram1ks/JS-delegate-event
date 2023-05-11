let selectedTd;

document.addEventListener("DOMContentLoaded", () => {
    console.log("page loaded");
    const table = document.getElementById("table")

    table.onclick = function(event) {
        console.log("click");
        let td = event.target.closest('td'); // где был клик?
        console.log(td);
        if (!td) return; // (2) не на TD? тогда не интересует 
        if (!table.contains(td)) return; // (3)
        console.log('highlight');
        highlight(td); // (4)   подсветить TD
      };
})



function highlight(td) {
  if (selectedTd) { // убрать существующую подсветку, если есть
    selectedTd.classList.remove('highlight');
  }
  selectedTd = td;
  selectedTd.classList.add('highlight'); // подсветить новый td
}