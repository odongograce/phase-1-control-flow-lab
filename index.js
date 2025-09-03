
function scuberGreetingForFeet(distance){
    if(distance<=400){
    return 'This one is on me!'
  }else if(distance >400 && distance <2000){
 return 'That will be twenty bucks.'
  }else if(distance > 2000 && distance <=2500){
   return 'I will gladly take your thirty bucks.'
  }
 else if(distance > 2500){
  return 'No can do.'
 }
}

function ternaryCheckCity(name){
      return name === "NYC" ? "Ok, sounds good." : "No go.";
      
}

function switchOnCharmFromTip(tip){
switch(tip){
  case "generous": 
   return 'Thank you so much.';
 case "not as generous":
  return 'Thank you.';
  
 default: "thanks for everything"
  return "Bye.";
}
}
console.log(scuberGreetingForFeet(199));
console.log(scuberGreetingForFeet(1500));
console.log(scuberGreetingForFeet(2001));
console.log(scuberGreetingForFeet(2501));
console.log(ternaryCheckCity('NYC'));
console.log(ternaryCheckCity('Pittsburgh'));
console.log(switchOnCharmFromTip("generous"));
console.log(switchOnCharmFromTip("not as generous"));
console.log(switchOnCharmFromTip('thanks for everything'));