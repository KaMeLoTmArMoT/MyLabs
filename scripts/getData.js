function loadData(name, id, replace) {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            const myObj = JSON.parse(this.responseText);

            if (name === 'text')
                document.getElementById(replace).innerHTML = myObj.text;
            else if (name === 'album')
                document.getElementById(replace).innerHTML = myObj.name;
        }
    };

    xhttp.open("GET", "http://localhost:3000/" + name + "/" + id, true);
    xhttp.send();
}
