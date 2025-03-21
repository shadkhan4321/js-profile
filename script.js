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

// let heartIcon=document.querySelector(".fa-heart")

let heartIcon=document.querySelector(".fa-heart")


let count=0

let liked=false
let chang=false
box.addEventListener("dblclick",()=>{


    img.style.display="block"
    setTimeout(()=>{
        img.style.display="none"
    },500)
})




box.addEventListener("click",()=>{
 
    if(box=true){
        img.style.display="none"
        box=false
    }

})
box.addEventListener("click",()=>{

    count++
    likecount.textContent=count
})

likebtn.addEventListener("click",()=>{

    count++
    likecount.textContent=count
})


btn.addEventListener("click",()=>{

    count=0
    likecount.textContent=count
})
btn.addEventListener("click",()=>{

    if(chang===false){
        btn.innerText="Following"
        chang=true
    }else if  (chang===true){
        btn.innerText="Follow"
        chang=false
    }
})


// likebtn.addEventListener("click", () => {
  
//   // liked = !liked; 
//     // heartIcon.style.color = liked ? "red" : "white";
//     if(liked===false){
//         heartIcon.style.color="red"
//         liked=true
//     }else if  (liked===true){
//         heartIcon.style.color="blue"
//         liked=false
//     }
       

// });

likebtn.addEventListener("click" , () => {

     if(liked===false){
        heartIcon.style.color="red"
        liked=true
     } else if(liked===true){

        heartIcon.style.color=" pink"
        liked=false
     }



})



