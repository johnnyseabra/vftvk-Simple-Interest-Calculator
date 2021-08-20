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
	var text = "If you deposit " + document.getElementById('principal').value + ",<br />" +
				"at an interest rate of " + document.getElementById('rate').value + "% <br />" + 
				"You will receive an amount of " + val + "<br />" +
				"In the year of " + (parseInt(date.getFullYear()) + parseInt(document.getElementById('years').value)) + "";
	
	document.getElementById('result').innerHTML = text;
	
}

function updateTextInput() 
{
	  val = document.getElementById('rate').value;
	  document.getElementById('rateValue').innerHTML = val + "%"; 
}        