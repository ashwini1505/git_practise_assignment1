let factors=0
let num = 13
for (let i=1;i<=num;i++){
if (num % i ==0){
factors++
}
}if (factors==2){
console.log(num, "is prime");
}else {
console.log(num, "is not a prime");
}