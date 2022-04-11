function betterThanAverage(classPoints,yourPoints) {

  //procedural approach //
  let classPointSum = (arr,yours) => arr.reduce(( acc ,c) => acc + c , 0 ) + yours

let sumPoint = classPointSum(classPoints,yourPoints)
let totalStudent = classPoints.length+1
let average = sumPoint/totalStudent

  if (yourPoints > average){
    return true
  }else {
    return false
  }
}

const ObjectAverage = new Object(classPoints,yourPoints); {

  //OOP approach
  construct(classPoints,yourPoints){
    this.totalClassPoints = classPoints.reduce((acc, c)=> acc + c ,0) + yourPoints
    this.totalStudentNumber = classPoints.length + 1
    this.average = totalClassPoints/totalStudentNumber
    this.
  }
 function alertTrueifOverAverage(){
   return true if(this.average < yourPoints)
 }
}


  console.log(betterThanAverage([2, 3], 5))