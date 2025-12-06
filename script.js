let quotes = JSON.parse(localStorage.getItem('quotes')) || [];

function saveQuotes() {
    localStorage.setItem('quotes', JSON.stringify(quotes));
}

function renderQuotes() {
    const list = document.getElementById('quoteList');
    list.innerHTML = "";

    for (let i = 0; i < quotes.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = `
            ${quotes[i]}
            <button class="delete-btn" onclick="deleteQuote(${i})">X</button>
        `;
        list.appendChild(li);
    }
}

function addQuote() {
    const input = document.getElementById("quoteInput");
    const quote = input.value.trim();

    if (quote === "") return;

    quotes.push(quote);   
    saveQuotes();
    renderQuotes();

    input.value = "";
}

function deleteQuote(index) {  
    quotes.splice(index, 1);
    saveQuotes();
    renderQuotes();
}
function clearAll() {
    quotes = [];       
    saveQuotes();      
    renderQuotes();    
}
document.getElementById("clearBtn").addEventListener("click", clearAll);
function updateCount() {
    document.getElementById("count").textContent = quotes.length;
}




document.getElementById("addBtn").addEventListener("click", addQuote);


renderQuotes();
