$('.content__form-file input[type=file]').on('change', function(){
	let file = this.files[0];
	$(this).closest('.content__form-file').find('.content__form-filetext').html(file.name);
});

$('.sidebar-menu__item').on('click',function(){
	var tab = $(this).attr('data-tab');
	if (!$(this).hasClass('sidebar-menu__item_active')){
		$('.sidebar-menu__item').removeClass('sidebar-menu__item_active');
		$(this).addClass('sidebar-menu__item_active');
		$('.content__tab').hide(100);
		$('#'+tab).show(100);
	}
})