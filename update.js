const { Pool } = require("pg");

    let novo_ncm = document.getElementById('novo')
    let antigo_ncm = document.getElementById('antigo')


function update(){


    Pool.query(`Update produto set ncm = ${novo_ncm} where ncm = ${antigo_ncm} `)
}

