/* Author: Shakwan Burnett

*/
jQuery(document).ready(function() {
var replaceImage = (function() {
	image = $('#artistArea img').attr('src');
	$('select').bind('change',function()
	{
		value = $(this).val();
		switch	(value)
		{
			case '1':
			image = $('#artistArea img').attr('src', 'img/brown1.jpg');
			$('#brownText').css('display', 'block');
			$('#niggaText').css('display', 'none');
			$('#marlowText').css('display', 'none');
			$('#cousyText').css('display', 'none');
			$('#rizzText').css('display', 'none');
			break;

			case '2':
			image = $('#artistArea img').attr('src', 'img/thatNigga1.jpg');
			$('#niggaText').css('display', 'block');
			$('#brownText').css('display', 'none');
			$('#marlowText').css('display', 'none');
			$('#cousyText').css('display', 'none');
			$('#rizzText').css('display', 'none');
			break;

			case '3':
			image = $('#artistArea img').attr('src', 'img/marlow1.jpg');
			$('#niggaText').css('display', 'none');
			$('#brownText').css('display', 'none');
			$('#marlowText').css('display', 'block');
			$('#cousyText').css('display', 'none');
			$('#rizzText').css('display', 'none');
			break;

			case '4':
			image = $('#artistArea img').attr('src', 'img/cousy1.jpg');
			$('#niggaText').css('display', 'none');
			$('#brownText').css('display', 'none');
			$('#marlowText').css('display', 'none');
			$('#cousyText').css('display', 'block');
			$('#rizzText').css('display', 'none');
			break;

			case '5':
			image = $('#artistArea img').attr('src', 'img/rizz1.jpg');
			$('#niggaText').css('display', 'none');
			$('#brownText').css('display', 'none');
			$('#marlowText').css('display', 'none');
			$('#cousyText').css('display', 'none');
			$('#rizzText').css('display', 'block');
			break;

			default:
				alert('Incorrect choice');
		}
		console.log(value);

	});
});
	var replaceImage1 = (function() {
	image = $('#artistArea img').attr('src');
	$('#mediaSelect').bind('click',function(){
		if ($(this).val() == 1)
		{
			image = $('#artistArea img').attr('src', 'img/img1.jpg');
			$('#text1').css('display', 'block');
			$('#text2').css('display', 'none');
		}
		else if($(this).val() == 2)
		{
			image = $('#artistArea img').attr('src', 'img/img2.jpg');
			$('#text2').css('display', 'block');
			$('#text1').css('display', 'none');
		}
	});
});
replaceImage();
replaceImage1();
validation();
});