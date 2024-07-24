const input = document.getElementById('input');
const btn = document.getElementById('btn');
const res = document.getElementById('result');

let items = [];
window.onload = ()=>{
    items= JSON.parse(localStorage.getItem('list-items')) || [];
    items.forEach(item => addResult(item));

}
btn.addEventListener('click', () => {   //anonyomous function or arrow function
    // alert('hi')
    items.push(input.value);
    localStorage.setItem('list-items',JSON.stringify(items));
    console.log(items);
    addResult(input.value);
    input.value='';
});

function addResult(val)
{
   // alert(val);
   let para = document.createElement('p');
   para.innerHTML = val;
   res.appendChild(para);  // appenf --> adding at the end

   para.addEventListener('click' , ()=>{
    //alert('hi');
    para.style.textDecoration='line-through';
    remove(val);
   })

   para.addEventListener('dblclick',()=>{
    res.removeChild(para);
    remove(val);
   })
}

function remove(val)
{
   let index = items.indexOf(val);
   items.splice(index ,1); 
   console.log(items);   //splice(indexoof value ,howmany values want  be delete)
   localStorage.setItem('list-items',JSON.stringify(items));
}
