function oddEven(){
    const numbersArray = [0,1,2,3,4,5,6,7,8,9,10];
    let evenArray = [];
    let oddArray = [];
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] % 2 == 0){
            evenArray.push(i);
        }else{
            oddArray.push(i);
        }
        
    }
    console.log(evenArray);
    console.log(oddArray)
}
oddEven();