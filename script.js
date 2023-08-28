let currentUser='❤'
const arr=Array(9).fill(null);
let moves=0;

function handleClick(el){
    if(arr[el.id]==null){
        console.log(el.id)
        arr[el.id]=currentUser;
        el.innerText=currentUser;
        checkWinner();
        moves++;
                if (moves === 9) {
                    document.body.innerHTML = "<h1 class='draw'>It's a Draw!</h1>";
                }

        currentUser=currentUser==="❤"?"🧡":"❤"
        console.log(arr)
    }else{
        return;
    }
}

function checkWinner(){
    if( (arr[0]!=null && arr[0]==arr[1] && arr[0]==arr[2]) ||
        (arr[3]!=null && arr[3]==arr[4] && arr[3]==arr[5]) ||
        (arr[6]!=null && arr[6]==arr[7] && arr[6]==arr[8]) ||
        (arr[0]!=null && arr[0]==arr[3] && arr[0]==arr[6]) ||
        (arr[1]!=null && arr[1]==arr[4] && arr[1]==arr[7]) ||
        (arr[2]!=null && arr[2]==arr[5] && arr[5]==arr[8]) ||
        (arr[0]!=null && arr[0]==arr[4] && arr[0]==arr[8]) ||
        (arr[2]!=null && arr[2]==arr[4] && arr[2]==arr[6])){

        document.body.innerHTML=`<h1>The Winner Is ${currentUser}</h1>`;
       }
       else{
        return;
       }
}