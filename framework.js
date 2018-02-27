function onKeyUp(element, callback)
{
	for(var cont = 0; cont < element.length; cont++)
	{
		element[cont].onkeyup = function()
		{
			callback();
		}
	}
}