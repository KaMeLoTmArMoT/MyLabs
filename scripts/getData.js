const url = "http://localhost:3000/";

function loadData(name, id, replace) {
    let xhttp;

    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        xhttp = new XMLHttpRequest();
        if (xhttp.overrideMimeType) {
            xhttp.overrideMimeType('text/xml');
        }
    } else if (window.ActiveXObject) { // IE
        try {
            xhttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xhttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {alert('err')}
        }
    }

    if (!xhttp) {
        alert('Не вдалось :( Неможливо створити екземпляр класу XMLHTTP ');
        return false;
    }

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            const myObj = JSON.parse(this.responseText);

            if (name === 'text')
                document.getElementById(replace).innerHTML = myObj.text;
            else if (name === 'album' || name === 'songs')
                document.getElementById(replace).innerHTML = myObj.name;
        }
    };

    xhttp.open("GET", url + name + "/" + id, true);
    xhttp.send();
}
