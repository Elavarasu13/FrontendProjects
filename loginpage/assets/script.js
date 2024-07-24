const form = document.getElementById('form');
const uname = document.getElementById('username');
const pwd = document.getElementById('password');



form.addEventListener('submit' ,e=>{

    e.preventDefault();
    validateForm();
});

function validateForm(){

     if(uname.value ===''){
          setError(uname,'Enter username');
     }
     else{
        setSuccess(uname);
     }
     if(pwd.value.length<8)
     {
        setError(pwd,'Enter valid password')
     }
     else{
        setSuccess(pwd);
     }

}

function setError(element,message){
   const parent = element.parentElement; //login-form  --> parentelement  // attributes
   const child = parent.querySelector('.error');
   child.innerText = message;   //eneter username (seterror msg)
   parent.classList.add('error');
 }

 function setSuccess(element)
 {
    const parent = element.parentElement;
    const child  = parent.querySelector('.error');
    child.innerText = '';
    parent.classList.remove('error');
 }








// const form = document.getElementById("form");
// const uname = document.getElementById("username");
// const pwd = document.getElementById("password");

// form.addEventListener('submit',e=>{
//     e.preventDefault;
//      validateForm();
// }
// )

// function validateForm()
// {
//     // alert('hi');

//     if(uname.value === '')
//     {
//         setError(uname,'Enter username');
//     }
// }

// function setError(element,message)
// {
//      const parent = element.parentelement;
//      const child = parent.queryselector('.error');
//      child.innerText = message;
//      parent.classList.add('.error');
// }