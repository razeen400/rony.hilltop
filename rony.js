function formData () {
    var fname = document.forms["userform"]["firstname"]
    var lname = document.forms["userform"]["lastname"]
    var country = document.forms["userform"]["country"]



if (fname.value == ""){
    window.alert("please enter your firstname");
    fname.focus();
    return false;
}
if (lname.value == ""){
    window.alert("please enter your lastname");
    lname.focus();
    return false;
}
if (country.value == ""){
    window.alert("please enter your country");
    country.focus();
    return false;
}

    return true;
}
