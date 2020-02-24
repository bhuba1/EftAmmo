data = []
colors = ['#ce0b04', '#dc3b07', '#ea6c0a', '#f99d0e', '#c0b825', '#86d43d', '#4bf056']

function setUp() {
    ammos = document.getElementsByClassName('ammo');
    for (var i = 0; i < ammos.length; i++) {
        ammos[i].style.display = 'none';
    }
    weapons = document.getElementsByTagName('img');
    for (var i = 0; i < weapons.length; i++) {
        $(weapons[i]).click( showAmmoForWeapon);
        weapons[i].style.cursor = "pointer";
    }
    a556_45 = document.getElementsByClassName('5.56x45 mm');
    for (var i = 0; i < a556_45.length; i++) {
        a556_45[i].append(createTable(data.filter(x => x.name === '5.56x45 mm')));
        //a556_45[i].append(data.filter(x => x.name === '5.56x45 mm')[1].type);
    }
    a762_39 = document.getElementsByClassName('7.62x39 mm');
    for (var i = 0; i < a762_39.length; i++) {
        a762_39[i].append(createTable(data.filter(x => x.name === '7.62x39 mm')))
    }
    a545_39 = document.getElementsByClassName('5.45x39 mm');
    for (var i = 0; i < a545_39.length; i++) {
        a545_39[i].append(createTable(data.filter(x => x.name === '5.45x39 mm')))
    }
}

function showAmmoForWeapon(e) {
    console.log(event.srcElement);
    ammo = event.srcElement.parentElement.getElementsByTagName('div')[0];
    console.log(ammo);
    //ammo.show("show");
    if (ammo.style.display == "none") {
        $(ammo).slideDown("fast");
    } else {
        $(ammo).slideUp("fast");
    }
    console.log('Clicked weapon');
}

function getData() {
    var rawData = document.getElementsByClassName('data');
    console.log(rawData);
    console.log(rawData.length);
    for (var i = 0; i < rawData.length; i++) {
        data.push({
            name: rawData[i].value.split(" | ")[0],
            type: rawData[i].value.split(" | ")[1],
            damage: rawData[i].value.split(" | ")[2],
            pValue: rawData[i].value.split(" | ")[3],
            aDamage: rawData[i].value.split(" | ")[4],
            fChance: rawData[i].value.split(" | ")[5],
            c1: rawData[i].value.split(" | ")[6],
            c2: rawData[i].value.split(" | ")[7],
            c3: rawData[i].value.split(" | ")[8],
            c4: rawData[i].value.split(" | ")[9],
            c5: rawData[i].value.split(" | ")[10],
            c6: rawData[i].value.split(" | ")[11],
        });
    }
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].name);
    }
    console.log('Got all Data!');
}

function createTable(ammos) {
    var tbl = document.createElement('table');
    tbl.classList.add('table');
    //tbl.classList.add('table-dark');
    tbl.classList.add('table-striped');
    tbl.classList.add('table-dark');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    var td1 = document.createElement('th');
    td1.appendChild(document.createTextNode('Name'))
    tr.appendChild(td1);
    var td1 = document.createElement('th');
    td1.appendChild(document.createTextNode('Type'))
    tr.appendChild(td1);
    var td1 = document.createElement('th');
    td1.appendChild(document.createTextNode('Pen. Value'))
    tr.appendChild(td1);
    var td1 = document.createElement('th');
    td1.appendChild(document.createTextNode('Armor Damage'))
    tr.appendChild(td1);
    var td1 = document.createElement('th');
    td1.appendChild(document.createTextNode('Frag. chance'))
    tr.appendChild(td1);
    var td1 = document.createElement('th');
    td1.appendChild(document.createTextNode('Class 1'))
    tr.appendChild(td1);
    var td1 = document.createElement('th');
    td1.appendChild(document.createTextNode('Class 2'))
    tr.appendChild(td1);
    var td1 = document.createElement('th');
    td1.appendChild(document.createTextNode('Class 3'))
    tr.appendChild(td1);
    var td1 = document.createElement('th');
    td1.appendChild(document.createTextNode('Class 4'))
    tr.appendChild(td1);
    var td1 = document.createElement('th');
    td1.appendChild(document.createTextNode('Class 5'))
    tr.appendChild(td1);
    var td1 = document.createElement('th');
    td1.appendChild(document.createTextNode('Class 6'))
    tr.appendChild(td1);
    thead.appendChild(tr);
    for (var i = 0; i < ammos.length; i++) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.appendChild(document.createTextNode(ammos[i].name));
        tr.appendChild(td1);
        var td1 = document.createElement('td');
        td1.appendChild(document.createTextNode(ammos[i].type));
        tr.appendChild(td1);
        var td1 = document.createElement('td');
        td1.appendChild(document.createTextNode(ammos[i].pValue));
        tr.appendChild(td1);
        var td1 = document.createElement('td');
        td1.appendChild(document.createTextNode(ammos[i].aDamage))
        tr.appendChild(td1);
        var td1 = document.createElement('td');
        td1.appendChild(document.createTextNode(ammos[i].fChance));
        tr.appendChild(td1);
        var td1 = document.createElement('td');
        td1.style.backgroundColor = colors[ammos[i].c1];
        td1.style.color = 'black';
        td1.appendChild(document.createTextNode(ammos[i].c1));
        tr.appendChild(td1);
        var td1 = document.createElement('td');
        td1.style.backgroundColor = colors[ammos[i].c2];
        td1.style.color = 'black';
        td1.appendChild(document.createTextNode(ammos[i].c2));
        tr.appendChild(td1);
        var td1 = document.createElement('td');
        td1.style.backgroundColor = colors[ammos[i].c3];
        td1.style.color = 'black';
        td1.appendChild(document.createTextNode(ammos[i].c3))
        tr.appendChild(td1);
        var td1 = document.createElement('td');
        td1.style.backgroundColor = colors[ammos[i].c4];
        td1.style.color = 'black';
        td1.appendChild(document.createTextNode(ammos[i].c4));
        tr.appendChild(td1);
        var td1 = document.createElement('td');
        td1.style.backgroundColor = colors[ammos[i].c5];
        td1.style.color = 'black';
        td1.appendChild(document.createTextNode(ammos[i].c5));
        tr.appendChild(td1);
        var td1 = document.createElement('td');
        td1.style.backgroundColor = colors[ammos[i].c6];
        td1.style.color = 'black';
        td1.appendChild(document.createTextNode(ammos[i].c6));
        tr.appendChild(td1);
        tbdy.appendChild(tr);
    }
    tbl.appendChild(thead)
    tbl.appendChild(tbdy);
    return tbl;
}
$(document).ready(function() {
    getData();
    setUp();
});