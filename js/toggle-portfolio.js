$(".opener").on("click",function(eventObject){
	eventObject.preventDefault();
	
	var id=$(this).attr("href");
	var itemToOpen = $('.open[data-id="' + id + '"]');
	var isOpen=itemToOpen.attr("data-state");
	
	if(isOpen=="expanded"){
		itemToOpen.attr("data-state","collapsed")
	} else { 
		itemToOpen.attr("data-state","expanded");
	}
})