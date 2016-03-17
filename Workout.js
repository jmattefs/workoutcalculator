"use strict";


function TableOne(name, weight, multiplier){

	var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	var amount = ['50', '20','30','15','1', '10', '20', '20', '30', '15', '10', '2', '20', '25', '40', '15', '30', '15', '30', '15', '30', '3', '20', '60', '10', '20'];
	var exercise = ['jumping jacks', 'crunches', 'squats', 'pushups', 'min. wall sit', 'burpees', 'sec. arm circles', 'squats', 'jumping jacks', 'crunches', 'pushups', 'min. wall sit', 'burpees', 'burpees', 'jumping jacks', 'sec. arm circles', 'crunches', 'pushups', 'burpees', 'squats', 'sec. arm circles', 'min. wall sit', 'burpees', 'jumping jacks', 'crunches', 'pushups'];
	
	var lcName = name.toLowerCase();
	var nameArray = lcName.split("");	
	var table = document.getElementById("tableOne");	
	var MET;
	var durationINminutes;	

	for(var i = 0; i < nameArray.length; i++){
		for(var j=0; j < letters.length; j++){
			if (nameArray[i] == letters[j]){
				console.log(amount[j]+ " " + exercise[j])
					switch(exercise[j]){
						case 'jumping jacks':
							MET = 8;
								if(amount[j] == 50){
									durationINminutes = 50/60;
								} else if (amount[j] == 30){
									durationINminutes = 30/60;
								} else if (amount[j] == 40){
									durationINminutes = 40/60;
								} else {
									durationINminutes = 1;
								}
							break;
						case 'crunches':
							MET = 4;
								if(amount[j] == 20){
									durationINminutes = 20/60;
								} else if(amount[j]==15){
									durationINminutes = 15/60;
								} else if(amount[j]==10){
									durationINminutes = 10/60;
								} else {
									durationINminutes = 30/60;
								}
							break;
						case 'squats':
							MET = 6;
								if(amount[j] == 20){
									durationINminutes = 20/60;
								} else if (amount[j] == 30){
									durationINminutes = 30/60;
								} else if (amount[j] == 15){
									durationINminutes = 15/60;
								}
							break;
						case 'pushups':
							MET = 4;
								if(amount[j] == 20){
									durationINminutes = 20/60;
								} else if(amount[j]==15){
									durationINminutes = 15/60;
								} else if(amount[j]==10){
									durationINminutes = 10/60;
								}
							break;
						case 'burpees':
							MET = 8;
								if(amount[j] == 20){
									durationINminutes = 20/60;
								} else if(amount[j]==25){
									durationINminutes = 25/60;
								} else if(amount[j]==10){
									durationINminutes = 10/60;
								} else {
									durationINminutes = 30/60;
								}
							break;
						case 'sec. arm circles':
							MET = 3;
								if(amount[j] == 20){
									durationINminutes = 20/60;
								} else if(amount[j]==15){
									durationINminutes = 15/60;
								} else if(amount[j]==30){
									durationINminutes = 30/60;
								}								
							break;
						case 'min. wall sit':
							MET = 2;
								if(amount[j] == 1){
									durationINminutes = 1;
								}else if (amount[j] ==2){
									durationINminutes = 2;
								}else{
									durationINminutes =3;
								}
							break;
										}
										
				var cb = ((MET * 3.5 * weight / 200) * durationINminutes).toFixed(2);
				
				var row = table.insertRow(-1);
				var cell1 = row.insertCell(0);
				cell1.innerHTML = (nameArray[i]).toUpperCase();
				var cell2 = row.insertCell(1);
				cell2.innerHTML = (amount[j]*multiplier)+ " " + exercise[j]
				var cell3 = row.insertCell(2);
				cell3.innerHTML = (cb*multiplier).toFixed(2);
				 
			}
		}			
	}
}


function TableTwo(name, weight, multiplier){

	var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
	var amount = ['50', '20','30','15','1', '10', '20', '20', '30', '15', '10', '2', '20', '25', '40', '15', '30', '15', '30', '15', '30', '3', '20', '60', '10', '20']
	var exercise = ['jumping jacks', 'crunches', 'squats', 'pushups', 'min. wall sit', 'burpees', 'sec. arm circles', 'squats', 'jumping jacks', 'crunches', 'pushups', 'min. wall sit', 'burpees', 'burpees', 'jumping jacks', 'sec. arm circles', 'crunches', 'pushups', 'burpees', 'squats', 'sec. arm circles', 'min. wall sit', 'burpees', 'jumping jacks', 'crunches', 'pushups']
	var nameArray = name.split("");	
	var table = document.getElementById("tableTwo");	
	var Ctable = document.getElementById("tableThree");
	var MET;
	var durationINminutes;	
	
	var totals = 
	{
		JumpingJacks : [0,0],
		Crunches : [0,0],
		Squats : [0,0],
		Pushups : [0,0],
		Wallsit : [0,0],
		Burpees : [0,0],
		Armcircles : [0,0],		
	};

	for(var i = 0; i < nameArray.length; i++){
		for(var j=0; j < letters.length; j++){
			if (nameArray[i] == letters[j]){
				switch(exercise[j]){
					case 'jumping jacks':						
							MET = 8;
								if(amount[j] == 50){
									durationINminutes = 50/60;
									totals.JumpingJacks[0] += 50;
								} else if (amount[j] == 30){
									durationINminutes = 30/60;
									totals.JumpingJacks[0] += 30;
								} else if (amount[j] == 40){
									durationINminutes = 40/60;
									totals.JumpingJacks[0] += 40;
								} else {
									durationINminutes = 1;
									totals.JumpingJacks[0] += 60;
								}
							var cb = (MET * 3.5 * weight / 200) * durationINminutes;
							totals.JumpingJacks[1] += cb;
							break;
					case 'crunches':
								
							MET = 4;
								if(amount[j] == 20){
									durationINminutes = 20/60;
									totals.Crunches[0] += 20;
								} else if(amount[j]==15){
									durationINminutes = 15/60;
									totals.Crunches[0] += 15;
								} else if(amount[j]==10){
									durationINminutes = 10/60;
									totals.Crunches[0] += 10;
								} else {
									durationINminutes = 30/60;
									totals.Crunches[0] += 30;
								}
							var cb = (MET * 3.5 * weight / 200) * durationINminutes;
							totals.Crunches[1] += cb;
							break;
							
					case 'squats':
							
							MET = 6;
								if(amount[j] == 20){
									durationINminutes = 20/60;
									totals.Squats[0] += 20;
								} else if (amount[j] == 30){
									durationINminutes = 30/60;
									totals.Squats[0] += 30;
								} else if (amount[j] == 15){
									durationINminutes = 15/60;
									totals.Squats[0] += 15;
								}
								var cb = (MET * 3.5 * weight / 200) * durationINminutes;
							totals.Squats[1] += cb;
							break;
					case 'pushups':
							
							MET = 4;
								if(amount[j] == 20){
									durationINminutes = 20/60;
									totals.Pushups[0] += 20;
								} else if(amount[j]==15){
									durationINminutes = 15/60;
									totals.Pushups[0] += 15;
								} else if(amount[j]==10){
									durationINminutes = 10/60;
									totals.Pushups[0] += 10;
								}
								var cb = (MET * 3.5 * weight / 200) * durationINminutes;
							totals.Pushups[1] += cb;
							break;
					case 'burpees':
							
							MET = 8;
								if(amount[j] == 20){
									durationINminutes = 20/60;
									totals.Burpees[0] += 20;
								} else if(amount[j]==25){
									durationINminutes = 25/60;
									totals.Burpees[0] += 25;
								} else if(amount[j]==10){
									durationINminutes = 10/60;
									totals.Burpees[0] += 10;
								} else {
									durationINminutes = 30/60
									totals.Burpees[0] += 30;
								}
								var cb = (MET * 3.5 * weight / 200) * durationINminutes;
							totals.Burpees[1] += cb;
							break;
					case 'sec. arm circles':
							
							MET = 3;
								if(amount[j] == 20){
									durationINminutes = 20/60;
									totals.Armcircles[0] += 20;
								} else if(amount[j]==15){
									durationINminutes = 15/60;
									totals.Armcircles[0] += 15;
								} else if(amount[j]==30){
									durationINminutes = 30/60;
									totals.Armcircles[0] += 30;
								}								
							var cb = (MET * 3.5 * weight / 200) * durationINminutes;
							totals.Armcircles[1] += cb;
							break;
					case 'min. wall sit':
							
							MET = 2;
								if(amount[j] == 1){
									durationINminutes = 1;
									totals.Wallsit[0] += 1;
								}else if (amount[j] ==2){
									durationINminutes = 2;
									totals.Wallsit[0] += 2;
								}else{
									durationINminutes =3;
									totals.Wallsit[0] += 3;
								}
								var cb = (MET * 3.5 * weight / 200) * durationINminutes;
							totals.Wallsit[1] += cb;
							break;
				}
						
			}
				
		}
	}
	var TC = 0;
	for (var z in totals){
		if(totals[z][0] > 0){
			var row = table.insertRow(-1);
				var cell1 = row.insertCell(0);
				cell1.innerHTML = z;
				var cell2 = row.insertCell(1);
				cell2.innerHTML = ((totals[z][0])*multiplier).toFixed(2);
				var cell3 = row.insertCell(2);
				cell3.innerHTML = ((totals[z][1])*multiplier).toFixed(2);
				
				TC = TC + totals[z][1];
		}	
	}
	var row2 = Ctable.insertRow(1);
	var cell11 = row2.insertCell(0);
	cell11.innerHTML = (TC * multiplier).toFixed(2);
	
}

function Main(name, weight, multiplier){

	TableOne(name, weight, multiplier);
	TableTwo(name, weight, multiplier);
	
	
}

