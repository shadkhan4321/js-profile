// let box=document.querySelector(".box-2")
// let img=document.querySelector("img")




// box.addEventListener("dblclick",()=>{

//     img.style.display="block"
// })

// box.addEventListener("click",()=>{

//     if(box=true){
//         img.style.display="none"
//         box=false
//     }
// })

// let box=document.querySelector(".box-2")
// let img=document.querySelector("img")


// box.addEventListener("dblclick",()=>{

//     img.style.display="block"
// })

// box.addEventListener('click',()=>{

//     if(box=true){
//         img.style.display="none";
//         box=false
//     }
// })


// let box=document.querySelector(".box-2")
// let img=document.querySelector("img")

// let likebtn=document.querySelector(".like-btn")
// let likecount=document.querySelector(".like-count")
// let btn=document.querySelector("button")

// let count=0

// box.addEventListener("dblclick",()=>{
    
//     img.style.display="block"
// })


// box.addEventListener("click",()=>{
    
//     if(box=true){
//         img.style.display="none"
//         box=false
//     }
// })

// likebtn.addEventListener("click",()=>{
    
//     count++;
//     likecount.textContent = count;
//     });

//     btn.addEventListener("click",()=>{

//     count=0
//     likecount.textContent=count;

//     })


let box=document.querySelector(".box-2")
let img=document.querySelector("img")
let likebtn=document.querySelector(".like-btn")
let likecount=document.querySelector(".like-count")
let btn=document.querySelector("button")


let count=0


box.addEventListener("dblclick",()=>{

img.style.display="block"

})
box.addEventListener("click",()=>{
if(box=true){
   img.style.display="none"
   box=false
}
    
})

box.addEventListener("dblclick",()=>{
   count++;
   likecount.textContent=count
})

likebtn.addEventListener("click",()=>{
    count++;
    likecount.textContent=count

})

btn.addEventListener("click",()=>{

   count=0
   likecount.textContent=count
})


