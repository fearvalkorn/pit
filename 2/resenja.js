// var a = 1;
// var b = 2;
// var c = 3;
// var d = 4;					prvo pitanje
// console.log(a+c);
// console.log(d/b);


// var a = 4;
// var b = 44;
// var c = 24;					                      drugo pitanje           
// var d = 44;
// console.log( (a > c) false ); 
// console.log( (a > b) || (b > c) true );  
// console.log( (a < b) && (a < c) true ); 
// console.log( (c > b) && (b < a) false ); 
// console.log( !(a > b) || ( (a > c) && (c > b) ) true ); 
// console.log( !(a > b) true ); 
// console.log( (b === d) true ); 


// var a = 25;
// var b = 16;
// var c = 11;
// 								trece pitanje (kako ispitati najveci br)
// if (a,b,c > 10) {
// 	var saberi = a+b+c;			
// }
// console.log(saberi);


// var a = 12;
// var b = 13;
// var c = "12";				drugo pitati sta,ne razumem
// var d = "13";


// var input = prompt('Kada ste rodjeni?');
// if(input>1998){
// 	// alert("Niste punoletni");
// 	document.write("<h1>Niste punoletni</h1>");					peto pitanje
// }else if (input<1998){
// 	alert("Punoletni ste");
// }

// var input = prompt('Godina proizvodnje vaseg automobila?');
// if (input<1986) {
// 	document.write("<h1>Oldtimer</h1>");								sesto pitanje
// }else if (input>2011) {											if(input===2011){document.write("<h1>Newbie</h1>")}
// 	document.write("<h1>Newbie</h1>");
// };


// var input1 = prompt("Ime");
// var input2 = prompt("Prezime");
// var input3 = prompt("Koliko imate godina?");
// if(input3 > 1996){
// 	document.write("<h1>"+input1+' '+input2+ " veoma ste mladi!</h1>");
// }else if (input3 > 1986) {														sedmo pitanje(between)
// 	document.write("<h1>"+input1+' '+input2+ " mladi ste!</h1>");
// }else if (input3>= 1971 && input3 <= 1986){
// 	document.write("<h1>"+input1+' '+input2+ " u najbolji ste godinama!</h1>");
//  };



// var ime1 = prompt("Ime");
// var godina1 = prompt("Broj godina");
// var ime2 = prompt("Ime");
// var godina2 = prompt("Broj godina");					osmo... tesko							
// var ime3 = prompt("Ime");
// var godina3 = prompt("Broj godina");
// if (godina1 === godina2 || godina2 === godina3) {
// 	document.write("<h1>"+ime1+' '+ime2+"</h1>")
// }if (godina1 === godina3) {
// 	document.write("<h1>"+ime1+' '+ime2+"</h1>")
// };




// function operacija () {
// 	if (p1 === 2 || 3 || 4 || 5) {
// 		var saberi = (p1+p2+p3)/3
// 		document.write("<h1>"+saberi+"</h1>");
// 		if (saberi < 2.5) {
// 			document.write("<h1>Dovoljan 2</h1>");
// 		}else if (saberi>=2.5 && saberi <=3.5) {
// 			document.write("<h1>Dobar 3</h1>");
// 		}else if (saberi>=3.5 && saberi <=4.5) {
// 			document.write("<h1>Vrlo dobar 4</h1>");
// 		}else if (saberi > 4.5) {
// 			document.write("<h1>Odlican 5</h1>");
// 		};
// 	};																deveto :)))
// }

// var p1 = parseInt(prompt("Unesite prvu ocenu"), 10);
// var p2 = parseInt(prompt("Unesite drugu ocenu"), 10);
// var p3 = parseInt(prompt("Unesite trecu ocenu"), 10);

// if (p1 === 1) {
// 	document.write("<h1>Niste zadovoljili</h1>");
// }else if (p2 === 1) {
// 	document.write("<h1>Niste zadovoljili</h1>");
// }else if (p3 === 1){
// 	document.write("<h1>Niste zadovoljili</h1>");
// }else{
// 	operacija();
// };


// var odg = prompt("Bojite li se zubara?"); 
//  switch (odg) {
// 	case "ne":
// console.log("Hrabri ste!");
// 	break;												deseto x)
// 	case "da":
// console.log("I ja!!!");
// 	break;
// 	default: 
// console.log("Unos je pogresan!"); 
// } 


// var broj = parseInt(prompt("Unesite broj manji od 25"), 10);
// switch(broj){
// 	case 5: document.write("<h1>"+broj+"</h1>");
// 	break;
// 	case 10: document.write("<h1>"+broj+"</h1>");
// 	break;							
// 	case 15: document.write("<h1>"+broj+"</h1>");
// 	break;
// 	case 20: document.write("<h1>"+broj+"</h1>");
// 	break;
// 	case 21: document.write("<h1>Unesen pogresan broj!</h1>");			jedanaesto x)
// 	break;
// 	case 22: document.write("<h1>Unesen pogresan broj!</h1>");
// 	break;
// 	case 23: document.write("<h1>Unesen pogresan broj!</h1>");
// 	break;
// 	case 24: document.write("<h1>Unesen pogresan broj!</h1>");
// 	break;
// 	case 25: document.write("<h1>Unesen pogresan broj!</h1>");
// 	break;
// 	default: document.write("<h1>Broj nije zadrzilac broja 5</h1>")
// }


// switch (new Date().getDay()) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     default: 
//         document.write("<h1>Kad ce vise vikend</h1>");									dvanaesto
//         break; 
//      case 5:
//        document.write("<h1>It's Friday, Friday. Gotta get down on Friday</h1>");
//         break; 
//     case 0:
//     case 6:
//        document.write("<h1>Jej vikend je</h1>");
// }


// var text = prompt("Unesite neki tekst");
// var brojac = 1;
// 	for(var i = 0; i < text.length; i++) {												 trinaesto
// 	     if(text[i] == " ") {
// 	              brojac++; 
//     } 
// } 
// console.log("Uneli ste tekst koji se sastoji od " + brojac + " reci!"); 



// var broj = parseInt(prompt("Unesite broj"));
// var suma = 0; 
// 	for(var i = 1; i < broj ; i++) {					cetrnaesto
// 		suma += i; 
// } 
// console.log(suma); 



// var broj = parseInt(prompt("Unesite broj manji od 20"),10);
// for(var i = broj; i >=0; i--){
// 	if (broj > 20) {												petnaesto(preko 20 pise 20 puta po 20)
// 		document.write("<h1>"+broj+"</h1>")
// 	}else{
// 		document.write("<h1>"+ i +"</h1>");
// 	}

// }


// var broj = parseInt(prompt("Unesite broj"),10);
// for(var i = broj; i >=1; i--){
// 	if (broj%2 === 0) {										sesnaesto, ne znam else
// 		document.write("<h1>"+i+"</h1>")
// 	}else{
// 		
// 	}
// }



// var text = prompt("Unesite text");
// var izbacivanje = text.slice(0,5);
// 	document.write("<h1>"+izbacivanje+"</h1>");

// var broj = 0;

// for(i = 0; i < text.length; i++){							dvadeseto
// 	 switch(text.charAt(i))
//    {
//     case 'a':
//     case 'A':
//     case 'e':
//     case 'E':
//     case 'i':
//     case 'I':
//     case 'o':
//     case 'O':
//     case 'u':
//     case 'U': broj++;  
//    }
// }
// document.write("<h1>ima "+broj+" samoglasnika </h1>");




// var text = prompt("Unesite text");
// var izbacivanje = text.slice(0,3);
// 	document.write("<h1>"+izbacivanje+"</h1>");

// var broj = 0;

// for(i = 0; i < text.length; i++){						dvadeset prvo	
// 	 switch(text.charAt(i))
//    {
//     case 'B':
//     case 'b':
//     case 'V':
//     case 'v':
//     case 'G':
//     case 'g':
//     case 'D':
//     case 'd':
//     case 'DJ':
//     case 'dj': 
//     case 'Dj':
//     case 'Z':
//     case 'z':
//     case 'J':
//     case 'j':
//     case 'K':
//     case 'k':
//     case 'L':
//     case 'l':
//     case 'Lj':
//     case 'lj':
//     case 'M':
//     case 'm':
//     case 'N':
//     case 'n':
//     case 'Nj':
//     case 'nj':
//     case 'P':
//     case 'p':
//     case 'R':
//     case 'r':
//     case 'S':
//     case 's':
//     case 'T':
//     case 't':
//     case 'C':
//     case 'c':
//     case 'G':
//     case 'g':
//     case 'H':
//     case 'h':
//     case 'C':
//     case 'c':
//     case 'Dz':
//     case 'dz':    broj++;  
//    }
// }
// document.write("<h1>ima "+broj+" samoglasnika </h1>");



// var a = 3
// var b = 18
// var c = "6"
 
//       for( var i = a; i < b; i += 3 ){ 
//         if( i === c ){ 							23. hm
// 	 	console.log( i + " = " + c ); 
//         } 
//         if( b % i !== 0 ){  
        	         
//         	console.log( i - 1 ); 
//         }else{ 
//         	console.log( i ); 
// 	      } 	 
// 	    }

// var a = 2
// var b = 20
// var c = "6" 
 
//      for( var i = a; i < b; i += 4 ){        	24.
//      	if( i === c ){ 
// 	 	console.log( i + " = " + c ); 
//        } 
//        if( b % i === 0 ){ 
//             console.log( i ); 
//        }else{          
//        		console.log( i + 1 ); 
//        } 
//      } 



// var j = 80; 
 
//     for( var i = 8; i < j; i += 2 ){				25
//             if( j % i === 0 ){
//                       console.log( i ); 
//        }else{ 
//          console.log( j ); 
//        }        j -= 10; 
//      } 



// var j = 60; 
 
//      for( var i = 6; i < j; i += 4 ){        	26.
//      	if( j % i !== 0 ){          
//      		console.log( j ); 
//        }else{         
//        		 console.log( i ); 
//        }        j -= 10; 
//      } 


var broj = parseInt(prompt("Broj veci od 20"),10);

if (broj<20) {
	console.log("Kurac")
}else{
	broj++

}
