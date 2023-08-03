function solution(num_list) {
    var answer = [];
    var last = num_list[num_list.length-1]
    var secLast = num_list[num_list.length-2]
   
    if(last>secLast){
        return [...num_list, last-secLast];
       
    }else{
         return [...num_list, last*2];
    }

}