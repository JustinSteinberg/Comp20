		function CreateImage(srcs, titles, widths, heights, id) {
	     var img = document.createElement("img");
    	 img.setAttribute("src", srcs);
 		 img.setAttribute("title", titles);
	     img.setAttribute("width", widths);
 		 img.setAttribute("height", heights);
 		 img.setAttribute("id", id);
  		 return img; 
		}

 		function artObject(bigImage, smallImage, name, price){
			this.bigImage = bigImage;
			this.smallImage = smallImage;
			this.name = name;
			this.price = price;
		}

		var Art_Array = [];

		$(document).ready( function() {
			var thumb_parra = document.getElementById("my-thumbs");
			var bigImage1 = CreateImage("Night_Cafe.jpeg", "Night Cafe", "200", "200","Big Night");
			var smallImage1 = CreateImage("Night_Cafe.jpeg", "Night Cafe", "50", "50", "Small Night");
			var bigImage2 = CreateImage("Starry.jpeg", "Starry Night", "200", "200", "Big Star");
			var smallImage2 = CreateImage("Starry.jpeg", "Starry Night", "50", "50","Small Star");
			var bigImage3 = CreateImage("The Bathers.jpeg", "The Bathers", "200", "200","Big Bathers");
			var smallImage3 = CreateImage("The Bathers.jpeg", "The Bathers", "50", "50","Small Bathers");
			var bigImage4 = CreateImage("Storm.jpeg", "The Storm on the Sea of Galilee", "200", "200","Big Storm");
			var smallImage4 = CreateImage("Storm.jpeg", "The Storm on the Sea of Galilee", "50", "50","Small Storm");
			var bigImage5 = CreateImage("Composition_8.jpeg", "Composition 8", "200", "200","Big Comp");
			var smallImage5 = CreateImage("Composition_8.jpeg", "Composition 8", "50", "50","Small Comp");
			var Night_Cafe = new artObject(bigImage1, smallImage1, "Night Cafe", "$200 Million");
			var Starry = new artObject(bigImage2, smallImage2, "Starry Night", "$100 Million");
			var Bathers = new artObject(bigImage3, smallImage3, "The Bathers", "$110,000");
			var Storm = new artObject(bigImage4, smallImage4, "The Storm on The Sea of Galilee", "$200 Million");
    		var Composition = new artObject(bigImage5, smallImage5, "Composition 8", "$25 Million");
    		Art_Array = [Night_Cafe, Starry, Bathers, Storm, Composition];
     		
    		for(var i = 0; i < Art_Array.length; i++){
    	
    			document.getElementById("q"+i).appendChild(Art_Array[i].smallImage);

    		}
 			
		});

		function Display(Art_Array, id){
		
			for(var i = 0; i<Art_Array.length;i++){
				if(id == Art_Array[i].smallImage.id){
					return Art_Array[i].bigImage;
				}
			}
		}
		
		$(document).on('mouseenter', 'img', function(){ 
			var Big_src = Display(Art_Array, $(this).attr("id"));
			$("#my-enlargement").fadeIn();
			$("#my-enlargement").css("background-image", 'url(' + Big_src.src + ')');
		});
			
 		$(document).on('mouseleave', 'img', function(){ 
			$("#my-enlargement").fadeOut();
		});

 		$(document).on('click', 'img', function(){ 
 			var Big_src = Display(Art_Array, $(this).attr("id"));
 			var x = "";
 			for(var j = 0; j<Art_Array.length;j++){
 				if(Big_src.title == Art_Array[j].bigImage.title){
 					console.log(j);
 					x = j.toString();
 				}
 			}
 			$("#q"+x).before("<p>"+ "Title: " + Big_src.title + "      Price: " + Art_Array[x].price +"</p>")
 			
 			$("p").fadeOut(5000)


 		});



