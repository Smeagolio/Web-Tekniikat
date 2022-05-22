let henkilo1 = {
    idkortti: "1",
    talo: "2",
    auto: "Mercedes-benz"
}
let henkilo2 = {
    idkortti: "2",
    talo: "5",
    auto: "Toyota"
}
let henkilo3 = {
    idkortti: "3",
    talo: "1",
    auto: "Honda"
}
let henkilo4 = {
    idkortti: "4",
    talo: "8",
    auto: "Lexus"
}
let henkilo5 = {
    idkortti: "5",
    talo: "7",
    auto: "Bugatti"
}



function haetiedot() {
    //Henkilön1 tiedot
document.getElementById('henk1id').innerHTML = henkilo1.idkortti;
document.getElementById('henk1talo').innerHTML = henkilo1.talo;
document.getElementById('henk1auto').innerHTML = henkilo1.auto;
    //Henkilön2 tiedot
document.getElementById('henk2id').innerHTML = henkilo2.idkortti;
document.getElementById('henk2talo').innerHTML = henkilo2.talo;
document.getElementById('henk2auto').innerHTML = henkilo2.auto;
    //Henkilön3 tiedot
document.getElementById('henk3id').innerHTML = henkilo3.idkortti;
document.getElementById('henk3talo').innerHTML = henkilo3.talo;
document.getElementById('henk3auto').innerHTML = henkilo3.auto;
    //Henkilön4 tiedot
document.getElementById('henk4id').innerHTML = henkilo4.idkortti;
document.getElementById('henk4talo').innerHTML = henkilo4.talo;
document.getElementById('henk4auto').innerHTML = henkilo4.auto;
    //Henkilön5 tiedot
document.getElementById('henk5id').innerHTML = henkilo5.idkortti;
document.getElementById('henk5talo').innerHTML = henkilo5.talo;
document.getElementById('henk5auto').innerHTML = henkilo5.auto;


}
