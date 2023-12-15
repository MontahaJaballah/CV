function verif(form)
{
    //nom
		var nom = form.querySelector('#nom').value;
		nom = nom.toUpperCase();
		if(nom.length == 0 ) {alert("saisir votre nom"); return false;}
		for(i  = 0 ; i < nom.length; i++)
		{
			if(nom.charAt(i) < 'A' || nom.charAt(i) > 'Z'){ 
				alert("nom invalide");  return false;	
			}
		}

	 	// CIN
         var cin = form.querySelector('#cin').value;
		if (isNaN( cin ) ){ alert("cin invalide 1");  return false; }  	
		else if ( cin.length != 8 ){ alert("cin ivalide 2"); return false; } 
		
}
