$(document).ready(function(){
    $('select.multiselect').multiselect();

	var sectionHeight = $('div.fixed').height();
	$('div.overflow').css('height', sectionHeight + 15 + 'px');
	$('div.section').css('height', sectionHeight + 'px');
	$('div.tag').css('height', sectionHeight + 'px');

	$('h3.tag').css('top', (sectionHeight - 25) + "px");
	
	$('div.tag').click(function(){
		$(this).parent().find('div.content').toggle("fast");

	});
});