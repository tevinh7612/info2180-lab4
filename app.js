document.addEventListener('DOMContentLoaded', function(){
    
    var searchForm = document.querySelector('form');

    searchForm.addEventListener('submit', function(event){
        event.preventDefault();

        var searchTerm = document.getElementById('superhero-name').value.trim();
        
        var xhttp = new XMLHttpRequest();

        xhttp.onload = function(){
            var superheroeslist = JSON.parse(xhttp.responseText);
            //console.log(superheroeslist);
            displayResults(superheroeslist);
            //alert(superheroeslist);
        }
        
        var url = 'http://localhost/info2180-lab4/superheroes.php?query=' + searchTerm;
        xhttp.open('GET', url);
        xhttp.send();
        
    });

    //Allows both click and enter to work
    var searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', function() {
        searchForm.dispatchEvent(new Event('submit'));
    });


    //Parse JSON data as needed and add repective info to display
    function displayResults(response){
        var resultsSection = document.getElementById('result');
        resultsSection.innerHTML = '';

        if (response.length == 0){
            var notFound = document.createElement('p');
            notFound.innerHTML = 'Superhero not found.';
            notFound.setAttribute("id", "nf")
            resultsSection.appendChild(notFound);
        } 
        else if (typeof response[0] === 'object'){
            var alias = document.createElement('h3');
            var name = document.createElement('h4');
            var bio = document.createElement('p');

            alias.innerHTML = response[0].alias;
            name.innerHTML = "A.K.A " + response[0].name;
            bio.innerHTML = response[0].biography;

            resultsSection.appendChild(alias);
            resultsSection.appendChild(name);
            resultsSection.appendChild(bio);
        }else {

            var ul = document.createElement('ul');

            response.forEach(function(superhero){
                var li = document.createElement('li');
                li.innerHTML = superhero;
                ul.appendChild(li);
            });

            resultsSection.appendChild(ul);
        }
    }
});