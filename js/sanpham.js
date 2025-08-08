

var sp=document.querySelectorAll('.id_sp');
var id_now='';
sp.forEach(id => {
    id.addEventListener('click',function(){
        sessionStorage.setItem('id_now',this.dataset.value);
    })
});

var danhmuc=document.querySelectorAll('.danh-muc');
danhmuc.forEach( loai =>{
    loai.addEventListener('click',function(){
        sessionStorage.setItem('danhmuc_now',this.dataset.value);
    })
});
var hour=document.getElementById('hour');
var minute=document.getElementById('minute');
var second=document.getElementById('second');
var gio=12;
var phut=30;
var giay=60;
setInterval(() => {
    if(giay==0){
        giay=60;
        phut--;
        minute.innerText=phut.toString().padStart(2,'0');
    }
    giay--;
    second.innerText=giay.toString().padStart(2,'0');
    
}, 1000);



