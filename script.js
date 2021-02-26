function generateBarcode(barcodeValue,) {

    JsBarcode("#barcode", barcodeValue, {
        format: 'CODE128',
        displayValue: true,
        lineColor: "#24292e",
        width: 2,
        height: 40,
        fontSize: 20
    });
}

const tbl_etiqueta = document.querySelector('table');
const btn_print = document.querySelector('#print');

btn_print.onclick = function () {
    
    const conteudo = document.querySelector('table').innerHTML;
    const etiquetas = document.querySelectorAll('table input');
    
    etiquetas.forEach(element => {
        generateBarcode(element.value);
        const codeBar = conteudo.document.createElement('svg');
        codeBar.id = "barcode";
        element.parentNode.appendChild(codeBar);
        element.parentNode.removeChild(element);

    });

    tela_impressao.document.write(conteudo);
    tela_impressao.window.print();
    tela_impressao.window.close();
};

var qtd = 1;

function createTable() {
    const tbl = document.querySelector('.tbl-etiqueta');
    const row = document.querySelector('#inputRow').value;
    const col = document.querySelector('#inputCol').value;

    for (var r = 0; r < parseInt(row, 10); r++) {
        var x = tbl.insertRow(r);
        x.classList.add('eti-row');
        for (var c = 0; c < parseInt(col, 10); c++) {
            var y = x.insertCell(c);
            y.innerHTML = '<input type="text" id="eti-' + qtd + '">';
            qtd += 1;
        }
    }

}


var getHTML = function ( url, callback ) {

	// Feature detection
	if ( !window.XMLHttpRequest ) return;

	// Create new request
	var xhr = new XMLHttpRequest();

	// Setup callback
	xhr.onload = function() {
		if ( callback && typeof( callback ) === 'function' ) {
			callback( this.responseXML );
		}
	}

	// Get the HTML
	xhr.open( 'GET', url );
	xhr.responseType = 'document';
	xhr.send();

};
