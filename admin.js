function login(){
 if(user.value==="admin" && pass.value==="1234"){
   window.location="dashboard.html";
 } else {
   alert("Wrong login");
 }
}

function download(){
 const blob=new Blob([editor.value],{type:"application/json"});
 const a=document.createElement("a");
 a.href=URL.createObjectURL(blob);
 a.download="data.json";
 a.click();
}
