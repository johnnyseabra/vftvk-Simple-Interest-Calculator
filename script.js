function compute()
{
    if((parseInt(document.getElementById('principal').value) <= 0) || document.getElementById('principal').value == "")
	{
		alert('You need to fill an positive amount');
		document.getElementById('principal').focus();
		return false;
	}
	
	var val = 0;
	
	
	
	var date = new Date;
	
	val = ((document.getElementById('principal').value * document.getElementById('rate').value)/100) * document.getElementById('years').value;
	var text = "If you deposit <div class='number'>" + document.getElementById('principal').value + "</div>,<br />" +
				"at an interest rate of <div class='number'>" + document.getElementById('rate').value + "%</div> <br />" + 
				"You will receive an amount of <div class='number'>" + val + "</div><br />" +
				"In the year of <div class='number'>" + (parseInt(date.getFullYear()) + parseInt(document.getElementById('years').value)) + "</div>";
	
	document.getElementById('result').innerHTML = text;
	
}

function updateTextInput() 
{
	  val = document.getElementById('rate').value;
	  document.getElementById('rateValue').innerHTML = val + "%"; 
}        