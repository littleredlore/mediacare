$(document).ready(function(){

    $('div.groupHead').toggle(function(){
      	$(this).parent().find('tbody').toggle("fast");
    }, function(){
    	$(this).parent().find('tbody').toggle("fast");
    });

    

    //show/hide current media
    $('#editContent').toggle(function(){
        $('div#selectEdit').toggle("fast");
        $('div#hiddenMedia').toggle("fast");
        $('button#editContent').text('Change Selection');
    }, function(){
        $('div#selectEdit').toggle("fast");
        $('div#hiddenMedia').toggle("fast");
        $('button#editContent').text('View Content');
    });

    //for draggable table rows
    //$("table.fixed").tableDnD();

    //filter by group for table
    $('button#filter').click(function(){
    	if ($('select#filter option:selected').val() == "all"){
    		$('table.fixed > tbody >tr').show();
    	} else if ($('select#filter option:selected').val() == "first"){
    		$('table.fixed> tbody> tr').hide();
    		$('table.fixed> tbody> tr#first').show();
    	} else if ($('select#filter option:selected').val() == "second"){
    		$('table.fixed> tbody> tr').hide();
    		$('table.fixed> tbody >tr#second').show();
    	}
    });
});