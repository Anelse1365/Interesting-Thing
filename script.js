// Get the image element
const deepSeaImage = document.getElementById('deepSeaImage');

// Add a click event listener to the image
deepSeaImage.addEventListener('click', () => {
    // Redirect the user to the deep_sea.html page
    window.location.href = 'Deep02.html';
});

const UniverseImage = document.getElementById('UniverseImage');

// Add a click event listener to the image
UniverseImage.addEventListener('click', () => {
    // Redirect the user to the deep_sea.html page
    window.location.href = 'Universe.html';
});

const Web3Image = document.getElementById('Web3Image');

// Add a click event listener to the image
Web3Image.addEventListener('click', () => {
   
    window.location.href = 'Web3.html';
});

const Web4Image = document.getElementById('Web4Image');

// Add a click event listener to the image
Web4Image.addEventListener('click', () => {
   
    window.location.href = 'Web4.html';
});


const menuIcon = document.querySelector('.menu-icon');
const homeMenu = document.querySelector('#home');
const profileMenu = document.querySelector('#profile');

menuIcon.addEventListener('click', function() {
    homeMenu.classList.toggle('active');
    profileMenu.classList.toggle('active');
});



document.addEventListener("DOMContentLoaded", function() {
    
    const exploreButton = document.querySelector("button");

    
    exploreButton.addEventListener("click", function() {
        window.location.href = 'Universe.html';
        
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const exploreButton = document.querySelector("button");

    exploreButton.addEventListener("click", function() {
        // เปลี่ยนแปลงสไตล์เมื่อคลิกปุ่ม
        exploreButton.classList.add("clicked");
        
        // ใส่โค้ดที่คุณต้องการให้ทำงานเมื่อคลิกปุ่ม Explore
        // เช่น เปิดหน้าใหม่, แสดงข้อมูลเพิ่มเติม, ฯลฯ
        // ตัวอย่าง:
        
    });
});






