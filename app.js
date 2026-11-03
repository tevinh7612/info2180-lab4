$( document ).ready(function() {

    const searchBtn = $("#btnSearch");

    searchBtn.on("click", function(){
        
        fetch('./superheroes.php')
            .then(response => response.text())
            .then(data => {
                alert(data);
            })
            .catch(error => {
                console.log(error);
            });

    });

});