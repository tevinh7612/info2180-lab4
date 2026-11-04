$( document ).ready(function() {

    const searchBtn = $("#btnSearch");
    const resultDiv = $("#result");
    
    searchBtn.on("click", function(){

        const input = $("#input").val();
        const url =  `./superheroes.php?query=${input}`
        
        fetch(url)
            .then(response => response.text())
            .then(data => {
                resultDiv.html(data);
            })
            .catch(error => {
                console.log(error);
            });

    });

});