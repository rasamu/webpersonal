$(document).ready(function() {
    // store url for current page as global variable
    current_page = document.location.href;

    // apply selected states depending on current page
    if (current_page.match('.*estudios')) {
	   $("#menu li:eq(1)").addClass('selected');
   } else if (current_page.match('.*proyectos')) {
	   $("#menu li:eq(2)").addClass('selected');
   } else {
	   $("#menu li:eq(0)").addClass('selected');
   };
});
