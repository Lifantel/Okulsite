const searchInput = document.getElementById('search');
const fileList = document.getElementById('fileList');

searchInput.addEventListener('keyup', function() {
  const filter = searchInput.value.toLowerCase();
  const items = fileList.getElementsByTagName('li');
  for (let i = 0; i < items.length; i++) {
    const text = items[i].textContent.toLowerCase();
    items[i].style.display = text.includes(filter) ? "" : "none";
  }
});
