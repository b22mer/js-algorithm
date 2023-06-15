const array = [5,8,3,0,1,2,6,9,4,7];

const quickSort=(arr, start, end)=>{


    if(start >=end) return; // 원소 한개일 경우 종료
    let pivot = start; // 피벗 첫번째가 원소
    let left = start +1; 
    let right = end;
    while(left<=right){
        // 피벗보다 큰 데이터 찾을때까지 반복
        while(left <= end && arr[left] <= arr[pivot]){
            left+=1;
        }
        //피벗보다 작은 데이터를 찾을때까지 반복
        while(right > start && arr[right] >= arr[pivot]){
            right-=1;
        }

        if (left>right){ // 엇갈리면 작은 데이터와 피벗 교체
            [arr[right], arr[pivot]] =  [arr[pivot], arr[right]]

        }else{ // 엇갈리지 않았다면 작은 데이터와 큰데이터 교체
            [arr[left], arr[right]] =  [arr[right], arr[left]]
        }
    }

    // 분할 이후 왼쪽 부분과 오른쪽 부분에서 각각 정렬 수행
    quickSort(arr, start, right-1);
    quickSort(arr, right+1, end);
    

}



quickSort(array, 0 , array.length-1);
array.reverse();

console.log(array);