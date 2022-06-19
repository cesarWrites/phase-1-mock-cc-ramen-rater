
// write your code here
document.addEventListener('DOMContentLoaded', function (){
    getImages();
})

const imgDiv = document.getElementById('ramen-menu');
const ulList = document.getElementById('ulList');

function getImages(){
    const url = 'http://localhost:3000/ramens/';
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        //console.log(data);
        data.forEach(imageObject=>{
            image = imageObject.image;
            imgname = imageObject.name;
            restaurant = imageObject.restaurant;
             rating = imageObject.rating;
             comments = imageObject.comment;
            displayImage(image);
            //console.log(image);
        })
    })
}

function displayImage(imgUrl){
     img = document.createElement('img');
    //console.log(imgUrl);
    const listEl = document.createElement('li');
    img.src = imgUrl;
    listEl.appendChild(img);
    img.addEventListener('click', function(){
        getDetails()
    })
    return   ulList.appendChild(listEl);
    //imgDiv.appendChild(ulList);
   // console.log(img);
    
    //imgDiv.appendChild(img);
}


const getDetails = () =>{
    fetch('http://localhost:3000/ramens')
    .then(newResponse=>newResponse.json())
    .then(result=>{result.forEach(restaurantObject=>{
    const newImage = document.querySelector('.detail-image')
    const detailsDiv = document.getElementById('ramen-detail');
    const text1 = document.querySelector('.name');
    const text2 = document.querySelector('.restaurant');
    const text3 = document.querySelector('#rating-display');
    const text4 = document.querySelector('#comment-display');
    const imageHolder = document.querySelector('.detail-image');
    newImage.src = restaurantObject.image;
    text1.innerHTML=restaurantObject.name;
    text2.innerHTML = restaurantObject.restaurant;
    text3.innerHTML = restaurantObject.rating;
    text4.innerHTML = restaurantObject.comment;
    })
    })
   
}

function addImage(username, userRestaurant, userRating, userImage, userComment){
    const inputName = document.getElementById('new-name');
    const inputRestaurant = document.getElementById('new-restaurant');
    const inputRating = document.getElementById('new-rating');
    const inputImg = document.getElementById('new-image');
    const inputComment = document.getElementById('new-comment');

    const ramenDetails = {
        userName: inputName.value,
        userRestaurant: inputRestaurant.value,
        userRating: inputRating.value,
        userImage: inputImg.src,
        userComment: inputComment.value
    }
    const configurationObject =   {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(ramenDetails),
      }
      fetch(url, configurationObject)
      .then(res=>res.json())
      .then(results=>
        console.log("successful addition"))
}

const form = document.getElementById('new-ramen');
console.log(addImage);
form.addEventListener('submit', function(event) {
    event.preventDefault();
    addImage()
    event.target.reset()
})
