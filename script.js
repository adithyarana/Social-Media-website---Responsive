
// this the js for the like function inthe feeds page

var containers = document.querySelectorAll('.photo-love');

containers.forEach((con) => {

    var love = con.querySelector('.like-btn');  // The large heart icon over the image
    var likeButton = con.parentElement.querySelector('.like-button i');  // this will select all feeds 
    var likeCount = con.parentElement.querySelector('.like-count');  // The span containing the like count
   
    let isActive = false;


    // Double-click event listener on the image heart
    
    con.addEventListener("dblclick", () => {
        likeButton.style.color = "red";  // Change color of the heart in action-button section
        let count = parseInt(likeCount.innerText);  // Get the current like count
        likeCount.innerText = count + 1;  // Increment like count
         isActive = true;  // Set active so it doesn't toggle again
        

        // Optional: Animate the large heart over the image
        love.style.transform = 'translate(-50%, -50%) scale(1)';
        love.style.opacity = 0.8;

        setTimeout(() => {
            love.style.opacity = 0;
        }, 1000);

        setTimeout(() => {
            love.style.transform = 'translate(-50%, -50%) scale(0)';
        }, 2000);
    });



    likeButton.addEventListener("click", () => {
        if (isActive) {
            likeButton.style.color = "";  // Reset color on click
            let count = parseInt(likeCount.innerText);  // Get the current like count
            likeCount.innerText = count - 1;  // Decrease like count when unliked
            isActive = false;  // Allow double-click again
        } else {
            likeButton.style.color = "red";  // Change to red if clicked
            let count = parseInt(likeCount.innerText);  // Get the current like count
            likeCount.innerText = count + 1;  // Increment like count
            isActive = true;
        }
    });
});


// this is thefunctionb for the meanu-bar toggles 

const menuitems = document.querySelectorAll('.menu-item ');

const messagesnotification = document.querySelector('#mesages-notifications');

const messages = document.querySelector('.messages');

const message = messages.querySelectorAll('.message');

const messagesearch  = document.querySelector('#message-search');

const theme = document.querySelector('#theme');

const  thememodle = document.querySelector('.customize-theme');

const fontsize = document.querySelectorAll('.choose-size span');

var root = document.querySelector(':root');

var btn = document.querySelector('#btn2');
var btn2 = document.querySelector('#a');
var btn3 = document.querySelector('#btn3');
var btn4 = document.querySelector('#b');
var btn5= document.querySelector('#btn4');
var btn6 = document.querySelector('#c');

const colorpalette = document.querySelectorAll('.choose-color span');

// theam changer

const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

// remove active class from all menu items 


const changeactiveitem=()=>{
    menuitems.forEach((item)=>{
        item.classList.remove('active');
    })
}

menuitems.forEach((item)=>{
    item.addEventListener('click', ()=>{
        changeactiveitem();  // remove active class from all menu items
        item.classList.add('active');

        if(item.id != 'Notifications'){
            document.querySelector('.notification-popup').
            style.display ='none';
            
        }else{
            document.querySelector('.notification-popup').
            style.display ='block';
            document.querySelector('#Notifications .notification-count').
            style.display ='none';
        }
    })
 });

 // search chats 

 const searchmessage  = ()=>{
    const val = messagesearch.value.toLowerCase();

    message.forEach((chat)=>{

        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }else{
            chat.style.display = 'none';
        }

    })
    
}

messagesearch.addEventListener('keyup', searchmessage);

//  messages shadow 

messagesnotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';

    messagesnotification.querySelector('.notification-count').style.display = 'none'
   setTimeout(() => {
    messages.style.boxShadow = 'none'
   }, 2000);
});



// theam customization 

const openthememodle = ()=>{
    thememodle.style.display = 'grid';
}

// close modle 

const closethememodle= (e)=>{
  if(e.target.classList.contains('customize-theme')){
    thememodle.style.display = 'none';
  }
}

// close the modle

thememodle.addEventListener('click' , closethememodle);

theme.addEventListener('click' , openthememodle);



// fonts sizes 

// remove the active class from font size 

const removeactive = ()=>{
    fontsize.forEach((size)=>{
        size.classList.remove('active');
    })
}

fontsize.forEach((size)=>{

 size.addEventListener('click',()=>{

    removeactive();
    let fontsize;
    size.classList.toggle('active');

    if(size.classList.contains('font-size-1')){
        fontsize = '10px';
        root.style.setProperty('--sticky-top-left' ,'5.4rem')
        root.style.setProperty('--sticky-top-right' ,'5.4rem')
       }else if(size.classList.contains('font-size-2')){
        fontsize = '13px';
        root.style.setProperty('--sticky-top-left' ,'5.4rem')
        root.style.setProperty('--sticky-top-right' ,'-7rem')
       }else if(size.classList.contains('font-size-3')){
        fontsize = '16px';
        root.style.setProperty('--sticky-top-left' ,'-2rem')
        root.style.setProperty('--sticky-top-right' ,'-17rem')
       }else if(size.classList.contains('font-size-4')){
        fontsize = '19px';
        root.style.setProperty('--sticky-top-left' ,'-5rem')
        root.style.setProperty('--sticky-top-right' ,'-25rem')
       }else if(size.classList.contains('font-size-5')){
        fontsize = '22px';
        root.style.setProperty('--sticky-top-left' ,'-12rem')
        root.style.setProperty('--sticky-top-right' ,'-35rem')
       }

         // change font size of the root html 

             document.querySelector('html').style.fontSize= fontsize;
 })

 

})

// the accept button js 

btn.addEventListener('click' ,()=>{

    btn.innerHTML = "Accepted";
    a.remove();
    
})
btn2.addEventListener('click',()=>{
    a.innerHTML = "Declined";
    btn.remove();
})

btn3.addEventListener('click' ,()=>{

    btn3.innerHTML = "Accepted";
    b.remove();
    
})
btn4.addEventListener('click',()=>{
    b.innerHTML = "Declined";
    btn3.remove();
})

btn5.addEventListener('click' ,()=>{

    btn5.innerHTML = "Accepted";
    c.remove();
    
})
btn6.addEventListener('click',()=>{
    c.innerHTML = "Declined";
    btn5.remove();
})


// remove active class from clors section

const removeactivecolor = ()=>{
    colorpalette.forEach((colorpicker)=>{
        colorpicker.classList.remove('active');
    })
}


// color primary change 

colorpalette.forEach((color)=>{
    color.addEventListener('click',()=>{

        let primary;
        removeactivecolor();

        if(color.classList.contains('color-1')){
             primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})



// theam chnage color 

let lightcolorlightness;
let whitecolorlightness;
let darkcolorlightness;

// change background color


const changeBG = () => {
    root.style.setProperty('--light-color-lightness' , lightcolorlightness);
    root.style.setProperty('--white-color-lightness' , whitecolorlightness);
    root.style.setProperty('--dark-color-lightness' , darkcolorlightness);
}

bg1.addEventListener('click' , ()=>{
 
    // add active class 
    bg1.classList.add('active');
    // remove active class
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    
    // remove customizeed change from local storage 

    window.location.reload();
});



bg2.addEventListener('click',()=>{
    darkcolorlightness = '95%';
    whitecolorlightness = '20%';
    lightcolorlightness = '15%';

    // add active class 

    bg2.classList.add('active');

    // remove active class
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();

});


bg3.addEventListener('click',()=>{
    darkcolorlightness = '95%';
    whitecolorlightness = '10%';
    lightcolorlightness = '0%';

    // add active class 

    bg3.classList.add('active');

    // remove active class
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBG();

});

