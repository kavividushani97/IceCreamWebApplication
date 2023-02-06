
function calculate()
{
var I=document.getElementById("I").value;
var N=document.getElementById("N").value;
var tot= parseInt(document.getElementById("t").value);

var item=['011','012','013','014','015','016',
	'021','022','023','024','025','026',
	'031','032','033','034','035',
	'041','042','043','044',
	'041','042','043','044',
		];

var i=0;

var price;

while(I!=item[i])
{
i++;

if(i>25){
	alert("invalid item code.....!");
	break;
	}

}

if(i<25){
	
	switch(I){
			case item[0]:
			price=1150;
			break;
			
			case item[1]:
			price=1150;
			break;

			case item[2]:
			price=1100;
			break;

			case item[3]:
			price=1300;
			break;

			case item[4]:
			price=1750;
			break;

			case item[5]:
			price=750;
			break;

			case item[6]:
			price=1100;
			break;

			case item[7]:
			price=1250;
			break;

			case item[8]:
			price=1100;
			break;

			case item[9]:
			price=1250;
			break;

			case item[10]:
			price=1750;
			break;

			case item[11]:
			price=1100;
			break;

			case item[12]:
			price=2250;
			break;

			case item[13]:
			price=1500;
			break;

			case item[14]:
			price=1500;
			break;

			case item[15]:
			price=1250;
			break;

			case item[16]:
			price=1150;
			break;

			case item[17]:
			price=750;
			break;

			case item[18]:
			price=750;
			break;

			case item[19]:
			price=1100;
			break;

			case item[20]:
			price=1000;
			break;

			case item[21]:
			price=1500;
			break;

			case item[22]:
			price=1750;
			break;

			case item[23]:
			price=1100;
			break;

			case item[24]:
			price=1500;
			break;

		}
}
tot = tot + (price*N);
document.getElementById("p").value=price;
document.getElementById("a").value=N*price;
document.getElementById("t").value= tot;

}

