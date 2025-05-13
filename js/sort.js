function sortList() {
  const ul = document.getElementById("nameList");
  const items = Array.from(ul.getElementsByTagName("li"));
  const sorted = items.map(li => li.textContent).sort();
  ul.innerHTML = sorted.map(name => `<li>${name}</li>`).join('');
}
