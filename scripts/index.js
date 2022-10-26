
// const $formData = document.getElementById('form_tabla')
const $btnSubmit = document.getElementById('btn_submit');

let total_clientes, total_volumen, total_btl, total_capex;

const state = {
    table: []
};

//Template Table
const template = () => {
    
    if (state.table.length < 1) {
        return `<p>No hay elementos</p>`;   
    }
    
    let rowTable = state.table.map( (item, index) => 
    
        `<tr>
            <td>
                ${item.region}
            </td>
            <td>
                <input class="form-control" type="number" id="clientes${index}" aria-label="clientes${index}" value="${item.clientes}">
            </td>
            <td>
                <input class="form-control" type="number" id="volumen${index}" aria-label="volumen${index}" value="${item.volumen}">
            </td>
            <td>
                <input class="form-control" type="number" id="btl${index}" aria-label="btl${index}" value="${item.btl}">
            </td>
            <td>
                <input class="form-control" type="number" id="capex${index}" aria-label="capex${index}" value="${item.capex}">
            </td>
        </tr>`
    )
    
    return rowTable;
}

//Render UI
const render = () => {
    console.log(state);
    const $table = document.getElementById('datos').getElementsByTagName('tbody')[0];
    
    if(!$table) return;
    
    $table.innerHTML = template();
}

//Update UI
$btnSubmit.addEventListener('click', e => {
    if(!e.target.matches('#btn_submit')) return false;
    
    e.preventDefault();
    const data  = {
        region: document.getElementById('region').value,
        clientes: document.getElementById('clientes').value,
        volumen: document.getElementById('volumen').value,
        btl: document.getElementById('btl').value,
        capex: document.getElementById('capex').value
    }
    
    state.table.push(data)
    render()
    
    document.getElementById('form_tabla').reset()


})

document.addEventListener("DOMContentLoaded", render);