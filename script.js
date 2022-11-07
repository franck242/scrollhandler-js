var panels =document.querySelectorAll(".panel");
 console.log(panels);

// panels.forEach(function(section){
//     console.log(section);
    
// });

// panels.forEach((section, index) => {
//     console.log('Index: ' + index + ' Value: ' + section);
// });

// panels.forEach((section, index, array) => {
//     console.log(section);

// });

function scroll_handler() {// "handler" = gestionnaire
    //on s'assure de savoir la distance scrolloé dans la fenêtre (ouvrir la concole pour voir)
    console.log(window.scrollY);
     
    //Fonctionnalité 

    //Test : a-t-on scrollé d'une hauteur de fenêtre ou plus ?
    if (window.scrollY >= window.innerHeight) {
        document.body.classList.add("scrolled");//ajout de la classe "scrolled" sur le body
    }else{
        //on enlève cette classe si on est remonté au-dessus du seuil
        document.body.classList.remove("scrolled");
    }

        //fonctionnalité 2 : faire réagir les éléments du menu lorsque le panneau correspond est à l'écran


        var panel_on_screen;
        
        panels.forEach(function(the_panel){
            //foreach a besoin, comme paramètre,d'une fonction.Celle-ci s'exécutera à chaque itération (passage) passaage de la boucle.
            //Si on donne à cette fonction au moins un paramètre, celui-ci deviendra, dans la fonction, une manière d'accéder à  l'élément concerné par l'itération.
            //console.log(the_panel.offsetTop);

            if (window.scrollY >= the_panel.offsetTop)  {
            // A-t-on scrollé au moins jusqu'à  avoir the_panel calé en haut de la fenêtre 
           panel_on_screen = the_panel;

            } 
        });
        
    //Après le foreach, la variable panel_on_screen fait référence au bon élément : le dernier qui pu valider le test dans le foreach
    var panel_id = panel_on_screen.id;
    console.log("Le .panel d'identifiant "+ panel_id +" est à l'écran");

    var the_link = document.querySelector("a[href='#"+ panel_id +"']");

     the_link.style.color = "orange"; // A modifier: il y a plus élégant ...
    // A compléter : il faut aussi que lme liens puissent revenir à la normale.
}
window.onscroll = scroll_handler;
