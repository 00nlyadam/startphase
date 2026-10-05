const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const query = input.value.trim();
  if (!query) return;

  window.location.href =
    "https://duckduckgo.com/?q=" + encodeURIComponent(query);
});
