var array = [2 , 4 , 6 , 1, 5, 3]
  var tms;
  counter =0 ;
 for( var  i=array.length-1; i>0 ; i--)  {
    for ( var j = 0; j < i ;j++ ){
         if (array[j] > array[j+1] ) {
           tms = array[j];
           array[j]=array[j+1];
           array[j+1]=tms;                           
        }         
    }
       console.log (array);
       } 









       