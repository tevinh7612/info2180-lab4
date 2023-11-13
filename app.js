document.addEventListener('DOMContentLoaded', function(){
    
    var searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', function(){

        var xhttp = new XMLHttpRequest();

        xhttp.onload = function(){
            var superheroeslist = xhttp.responseText;
            console.log(superheroeslist);
            alert(superheroeslist);
        }
        
        xhttp.open('GET','http://localhost/info2180-lab4/superheroes.php');
        xhttp.send();
    })
})