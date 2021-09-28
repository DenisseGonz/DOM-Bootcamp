const $btn =document.querySelector('#btn');
const $text=document.querySelector('#text');

$btn.addEventListener('click', ()=>{
    console.log('Me presionaste');
});
$text.addEventListener('keydown', ()=>{
    console.log('Escribiste algo');
})