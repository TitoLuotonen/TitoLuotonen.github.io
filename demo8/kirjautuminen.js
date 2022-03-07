document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut(){
    let kirjautunut = 'kylla';
    if(localStorage.getItem("kirjautunut") === 'kylla'){
        document.getElementById('tervetulo_teksti').textContent += localStorage.getItem("nimi");
        document.getElementById("kirjautumis_lomake").style.display = "none";
        document.getElementById("ulos_kirjautuminen");
    } else{
        document.getElementById('tervetulo_teksti').textContent;
        document.getElementById("kirjautumis_lomake");
        document.getElementById("ulos_kirjautuminen").style.display = "none";
    }
}

function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kylla")
}

function kirjauduUlos(){
    localStorage.removeItem("nimi", document.getElementById("nimi").value);
    localStorage.removeItem("kirjautunut", "ei");
}