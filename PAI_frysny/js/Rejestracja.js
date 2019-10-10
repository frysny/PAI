function sprawdz(form) {
    var user = form.nazwa.value;
    if ((user.length < 5) || (user.length > 10)) {
        document.getElementById("zlaNazwa").innerHTML = "Nazwa użytkownika może mieć od 5 do 10 liter";
        document.getElementById("zlaNazwa").className = "wyroznienieCzerwone";
        form.nazwa.focus;
        return false;
    }   
    else { document.getElementById("zlaNazwa").innerHTML = ""; }
    if (form.haslo.value.length < 7) {
        document.getElementById("opisHasla").innerHTML = "Proszę wprowadzić hasło co najmniej 7 literowe.";
        document.getElementById("opisHasla").className = "wyroznienieCzerwone";
        form.haslo.focus();
        return false;
    }
    if (!((user.match(/[a-z]/)) || (user.match(/[A-Z]/)))) {
        document.getElementById("zlaNazwa").innerHTML = "Nazwa użytkownika ma zawietać tylko litery";
        document.getElementById("zlaNazwa").className = "wyroznienieCzerwone";
        form.nazwa.focus;
        return false;
    }
    else { document.getElementById("zlaNazwa").innerHTML = ""; }
    if (form.haslo.value != form.haslo2.value) {
        document.getElementById("zgodneHasla").innerHTML = "Hasla nie są zgodne!";
        document.getElementById("zgodneHasla").className = "wyroznienieCzerwone";
        return false;
    }
    return true;
}
function silaHasla(haslo) {
    var punkty = 0;
    if (haslo.length >= 7) punkty++;
    if ((haslo.match(/[a-z]/)) && (haslo.match(/[A-Z]/))) punkty++;
    if (haslo.match(/\d+/)) punkty++;
    if (haslo.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,),]/)) punkty++;
    if (punkty < 1) {
        document.getElementById("opisHasla").innerHTML = "Bardzo słabe";
        document.getElementById("opisHasla").className = "opisHaslaBardzoSlabe";
    }
    else if (punkty < 2) {
        document.getElementById("opisHasla").innerHTML = "Słabe";
        document.getElementById("opisHasla").className = "opisHaslaSlabe";
    }
    else if (punkty < 3) {
        document.getElementById("opisHasla").innerHTML = "Średnie";
        document.getElementById("opisHasla").className = "opisHaslaSrednie";
    }
    else {
        document.getElementById("opisHasla").innerHTML = "Silne";
        document.getElementById("opisHasla").className = "opisHaslaSilne";
    }
}
