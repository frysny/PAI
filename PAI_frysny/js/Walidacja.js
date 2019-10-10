function sprawdz(form)
{
    if (form.imie.value == "") {
        alert("Proszę wprowadzić imię.");
        form.imie.focus();
        return false;
    }
    if (form.email.value == "") {
        alert("Proszę wprowadzić adres email.");
        form.email.focus();
        return false;
    }
    if (form.cenaOd.value == "") {
        alert("Proszę wprowadzić wartość od.");
        form.cenaOd.focus();
        return false;
    }
    if (form.cenaDo.value == "") {
        alert("Proszę wprowadzić wartość do..");
        form.cenaDo.focus();
        return false;
    }
    if (!adresEmail(form.email.value)) {
        alert("Proszę wprowadzić poprawny adres email \n w formacie: nazwa@serwer.domena .");
        form.email.focus();
        return false;
    }
    if (!kodPocztowy(form.kodPocztowy.value)) {
        alert("Proszę wprowadzić poprawny kod pocztowy.");
        form.kodPocztowy.focus();
        return false;
    }
    if (!sprawdzWzrost(form.wzrost.value)) {
        alert("Proszę wprowadzić poprawny wzrost w cm. (zakres 40-250cm).");
        form.wzrost.focus();
        return false;
    }
    if (!sprawdzOdDo(form.cenaOd.value, form.cenaDo.value)) {
        alert("Proszę wprawdzić poprawny zakres cenowy");
        form.wzrost.focus();
        return false;
    }
    return true;
}
function adresEmail(adres) {
    var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
    return regex.test(adres);
}
function kodPocztowy(kod) {
    var regex = /^[0-9]{2}\-[0-9]{3}$/;
    return regex.test(kod);
}
function liczbaCalkowita(liczba) {
    var regex = /^[\-]{0,1}[0-9]{1,8}$/;
    return regex.test(liczba);
}
function sprawdzWzrost(liczba) {
    if (!liczbaCalkowita(liczba)) { return false; }
    var wzrost = parseInt(liczba);
    if ((wzrost<40) || (wzrost>250)) { return false; }
    return true;
}
function sprawdzOdDo(cenaOd, cenaDo) {
    if (!liczbaCalkowita(cenaOd)) { return false; }
    if (!liczbaCalkowita(cenaDo)) { return false; }
    var zakres = parseInt(cenaDo) - parseInt(cenaOd);
    if (zakres < 0) { return false; }
    return true;
}

