document.getElementById("fetchData").addEventListener("click", async () => {
    const response = await fetch("/api/data");
    const data = await response.text();
    document.getElementById("response").textContent = data;
});