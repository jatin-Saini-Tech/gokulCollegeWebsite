// document.querySelector('a[href="#course-call"]').addEventListener("click", function(event) {
//     event.preventDefault(); // Default jump ko rokna
//     document.getElementById("course-call").scrollIntoView({ behavior: "smooth" });
// });





// document.querySelector('.icon').addEventListener("click", function() {
//     document.getElementById("navLinks").classList.toggle("active");
// });

document.querySelectorAll(".campus-col").forEach(img=>{
    img.addEventListener("mouseover" , function(){
        this.style.transform = scale(1.1);
    });

    img.addEventListener("mouseout",function(){
        this.style.transform = scale(1);
    });
});


document.querySelectorAll(".facilities-col img").forEach(img => {
    img.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.1)";
    })
    img.addEventListener("mouseout",function(){
        this.style.transform = "scale(1)";
    });
});


document.querySelector(".zero-btn").addEventListener("click", function() {
    alert("Admissions are now open! Apply now.");
});

window.onload = function() {
    document.getElementById("copyright").innerHTML += " © " + new Date().getFullYear();
};

// window.onload = function() {
//     setTimeout(function() {
//         alert("Admission Open! Apply Now.");
//     }, 4000); // 4000ms = 4 seconds
// };

// window.onload = function() {
//     setTimeout(function() {
//         document.getElementById("popup").style.display = "flex";
//     },2000); // 4 seconds delay
// };

// function closePopup() {
//     document.getElementById("popup").style.display = "none";
//}

window.onload = function(){
    setTimeout(function(){
        document.getElementById("popup").style.display = "flex";
    },3000);
};

function closePopup(){
    document.getElementById("popup").style.display = "none";
}


