function orderNow(){
    alert("Order Successfull");
}

function paymentSucessful(){
    alert("Payment Successfull");
}


function sendMessage(){
    

    let username=document.getElementById("name").value;

     let useremail=document.getElementById("email").value;

      let usermessage=document.getElementById("message").value;

      if(username=="" || useremail=="" || usermessage==""){
        document.getElementById("msg").innerHTML="Fill all fields";
      }

      else{
        document.getElementById("msg").innerHTML="Form Submitted Successfully";
      }
}