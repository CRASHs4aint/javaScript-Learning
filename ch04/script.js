// ques-01
let arr=[12,34,56,78,90];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
// ques-02
let brr=[23,45,67,89,100,45]
let count=0;
for(let i=0;i<brr.length;i++){
count=count+ brr[i];
}
let average=count/brr.length
console.log(average)
//ques-03
let crr=[23,56,78,90,70]
for(let i=0;i<crr.length;i++){
    crr[i]=crr[i]-(crr[i]/10)
    console.log(crr[i])
}