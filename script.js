
///1

// let edediOrtaFunc=(arr, callback)=> {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     let edediOrta = sum / arr.length;
//     callback(edediOrta);
// }
// let num = [1, 2, 3, 4, 5];
// edediOrtaFunc(num, function(result) {
//     console.log(result);
// });

///2
// let edediOrtaFunc=(arr, callback)=> {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i]%2===0){
//             sum += arr[i];
//         }
//     }
//     callback(sum);
// }
// let num = [1, 2, 3, 4, 5];
// edediOrtaFunc(num, function(result) {
//     console.log(result);
// });


///3
// let edediOrtaFunc=(arr, callback)=> {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i]%2 !==0){
//             sum += arr[i];
//         }
//     }
//     callback(sum);
// }
// let num = [1, 2, 3, 4, 5];
// edediOrtaFunc(num, function(result) {
//     console.log(result);
// });


//4
// let edediOrtaFunc=(arr, callback)=> {
//     let sumCut = 0;
//     let sumTek = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i]%2===0){
//             sumCut += arr[i];
//         }
//         else if(arr[i]%2 !==0){
//             sumTek += arr[i]
//         }
//     }
//     callback(sumTek*sumCut);

// }
// let num = [1, 2, 3, 4, 5];
// edediOrtaFunc(num, function(result) {
    
//     console.log(result)
// });
