// function to check recommended weight ,over weight,under weight
function checkWeight() {
    var age = document.getElementById("age").value; //get age from user.
    var weight = document.getElementById("weight").value; //get weight from user.
    document.getElementById("p").innerHTML=getWeight(age,weight);
  }
  function getWeight(age,weight){
    if(age<=0||weight<=0){
      if(age<=0){
        return "age should be greater then zero."
      }
      return "Weight should be greater then zero"
    }
    let arr=[[5,7,15,20],[8,10,21,25],[11,15,26,30],[16,20,31,40]];
    for(let i=0;i<arr.length;i++){
      if(age>=arr[i][0]&&age<=arr[i][1]){
        if(weight<arr[i][2])
          return "you are underweight";
        else if(weight>arr[i][3])
          return "you are overweight";
        else
          return "recommended weight";  
      }
    }
    return "Please Give Correct input";
  }