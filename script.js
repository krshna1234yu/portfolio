document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(links[i].getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});
// JavaScript for hover effect on education cards
document.querySelectorAll('.education-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Remove 'expanded' class from all cards
        document.querySelectorAll('.education-card').forEach(card => {
            card.classList.remove('expanded');
        });
        // Add 'expanded' class to the hovered card
        card.classList.add('expanded');
    });

    card.addEventListener('mouseleave', () => {
        // Remove 'expanded' class on mouse leave
        card.classList.remove('expanded');
    });
});
// Get the button:
var mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// JavaScript for "Add Details" button functionality