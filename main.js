
    var btn = document.getElementById("btn");
    var btn2 = document.getElementById("btn2");

    btn.addEventListener("click", function(){
    	 var myJSON = JSON.stringify(bands, null, 2);
   	     document.getElementById("stringify").innerHTML = myJSON; 
   	     document.getElementById("f").style.display="block";
   		 var txt = "<table border='1'>";
   		 txt += "<tr><th>Artist</th><th>Title</th><th>Genre</th><th>Release Date</th></tr>";
   		 for (x in bands) {
   		   txt += "<tr><td>" + bands[x].Artist + "</td><td>" + bands[x].Title + "</td><td>" + bands[x].Genre + "</td><td>" + bands[x].Released + "</td></tr>";
   		 }
   		 txt += "</table>";    
   		 document.getElementById("band-info").innerHTML = txt;
   	});

   	btn2.addEventListener("click", function(){
   		var td, txtValue;
    	var input = document.getElementById("selector").value;
    	var table = document.getElementsByTagName("TABLE");
    	var tr = document.getElementsByTagName("tr");
    	for (i = 0; i < tr.length; i++) {
    		td = tr[i].getElementsByTagName("td")[2];
    		if (td) {
     		 txtValue = td.textContent || td.innerText;
      			if (txtValue.indexOf(input) > -1) {
      	  			tr[i].style.display = "";
     			 } 
     			 else {
       				 tr[i].style.display = "none";
      			}
   			 }
   		}
    });