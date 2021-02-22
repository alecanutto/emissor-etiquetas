// function generateBarcode() {
//     var barcodeValue = document.getElementById("barcodeValue").value;
//     var barcodeType = document.getElementById("barcodeType").value;
//     var showText = document.getElementById("showText").value;
//     JsBarcode("#barcode", barcodeValue, {
//         format: barcodeType,
//         displayValue: showText,
//         lineColor: "#24292e",
//         width: 2,
//         height: 40,
//         fontSize: 20
//     });
// }
// generateBarcode();

//milimeter to pixel
const mm = 0.0377952756; 

function generateGrid(row, col, height, width, space) {
    const main = document.querySelector(".grid");
    console.log(main);

    for (let x = 0; x < row; x++) {
        const row = document.createElement('div');
        row.id = "row-" + x;
        row.className = "row";
     
        for (let y = 0; y < col; y++) {
            const col = document.createElement('div');
            col.id = "col-" + y;
            col.className = "col eti";
            col.style.setProperty("height", Number(height / mm) + "px");
            col.style.setProperty("width", Number(width / mm) + "px");
            col.style.setProperty('margin', Number(space / mm) + "px")
            const text  = document.createTextNode(col.id);
            col.appendChild(text);
            row.appendChild(col);
        }
        main.appendChild(row);
    }
}

generateGrid(4, 4, 16.93, 44.45, 0.2);