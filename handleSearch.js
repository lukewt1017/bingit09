document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let query = document.getElementById('search-query').value;
    fetch(`API_ENDPOINT?q=$https://api.bing.microsoft.com/v7.0/search`)
        .then(response => response.json())
        .then(data => {
           displayResults(data);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function displayResults(results) {
    let searchResults = document.getElementById('search-results');
    searchResults.innerHTML = ''; 
    results.forEach(result => {
        let resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.innerHTML = `
            <h2><a href="${result.link}" target="_blank">${result.title}</a></h2>
            <p>${result.snippet}</p>
        `;
        searchResults.appendChild(resultItem);
    });
}
