document.querySelector('.inner_text').addEventListener('click',function(){
document.querySelector('.select').classList.toggle('show');
}
        )

document.querySelectorAll('.select_inner').forEach(function(item){
  item.addEventListener('click',function(){
   document.querySelector('.inner_text').innerHTML=this.innerHTML; 
      document.querySelector('.select').classList.remove('show');
      
  }
                        )
}
    )


let slide=document.querySelector('.slider_wrapper');
let righ= document.querySelector('.arrow_right');
let lef= document.querySelector('.arrow_left');
let curren=0;
righ.addEventListener('click',function(){
    curren+=200;
     if(curren>500){
curren=0;
    }
slide.style.left=curren+'px';
   
}
)
lef.addEventListener('click',function(){
    curren-=200;
     if(curren<(-500)){
curren=0;
    }
slide.style.left=current+'px';
   
}
)




document.querySelector('.target').addEventListener('click',function(){
document.querySelector('.bottom').classList.toggle('show');
}
        )

document.querySelectorAll('.bottom_slide').forEach(function(item){
  item.addEventListener('click',function(){
   document.querySelector('.target').innerHTML=this.innerHTML; 
      document.querySelector('.bottom').classList.remove('show');
      
  }
                        )
}
    )

document.querySelector('.id').addEventListener('click',function(){
    
 document.querySelector('.id').innerText='';   
}
   )
        







//two solider

let slides=document.querySelector('.slider_dlx_container');
let right= document.querySelector('.right');
let left= document.querySelector('.left');
let current=0;
right.addEventListener('click',function(){
    current+=200;
     if(current>500){
current=0;
    }
slides.style.left=current+'px';
   
}
)
left.addEventListener('click',function(){
    current-=200;
     if(current<(-500)){
current=0;
    }
slides.style.left=current+'px';
   
}
)





document.querySelector('.krest').addEventListener('click',()=>{
   document.querySelector('.modal').classList.add('close'); document.querySelector('.modal_overlay').classList.add('close'); 
    
})


document.querySelector('.login').addEventListener('click',()=>{
document.querySelector('.modal').classList.remove('close'); document.querySelector('.modal_overlay').classList.remove('close'); 
})





                       

