// Store the wallet amount to your local storage with key "amount"

 let array=JSON.parse(localStorage.getItem("amount"))||[];

Addition=()=>{
    let amount=document.querySelector("#amount").value;
      console.log(amount);

     array.push(amount);

    localStorage.setItem("amount",JSON.stringify(array));

    var t=0;
    for(var i=0;i<array.length;i++){
        t+=+array[i];
    }
    console.log(t);
    document.querySelector("#wallet").append(t);


}

