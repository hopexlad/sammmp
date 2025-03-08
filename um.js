document.addEventListener("DOMContentLoaded", function () {
    const uyir = ["அ", "ஆ", "இ", "ஈ", "உ", "ஊ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "ஔ"];
    const mei = ["க", "ங", "ச", "ஞ", "ட", "ண", "த", "ந", "ப", "ம", "ய", "ர", "ல", "வ", "ழ", "ள", "ற", "ன"];
    const container = document.getElementById("tamiltable");
    
    let table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    table.style.width = "100%";
    
    let headerRow = document.createElement("tr");
    let emptyHeader = document.createElement("th");
    headerRow.appendChild(emptyHeader);
    uyir.forEach(letter => {
        let th = document.createElement("th");
        th.innerText = letter;
        th.style.border = "1px solid black";
        th.style.padding = "10px";
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    
    mei.forEach(m => {
        let row = document.createElement("tr");
        let firstCol = document.createElement("th");
        firstCol.innerText = m;
        firstCol.style.border = "1px solid black";
        firstCol.style.padding = "10px";
        row.appendChild(firstCol);
        
        uyir.forEach(u => {
            let td = document.createElement("td");
            let letter = m + u;
            td.innerText = letter;
            td.style.border = "1px solid black";
            td.style.padding = "10px";
            td.style.textAlign = "center";
            td.style.cursor = "pointer";
            
            td.addEventListener("click", function () {
                let audio = new Audio(`audio/${letter}.mp3`);
                audio.play();
            });
            
            row.appendChild(td);
        });
        
        table.appendChild(row);
    });
    
    container.appendChild(table);
});
