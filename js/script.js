
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to show student info on button click
    const showInfoButton = document.getElementById('show-info-btn');
     showInfoButton.addEventListener('click', showStudentInfo);
    // Form submission
    const form = document.getElementById('pizza-form');
    form.addEventListener('submit', function(event) {
         event.preventDefault();
         processOrder();
    });

    // Add hover effect to all images
    const images = document.querySelectorAll('img');
     images.forEach(function(image) {
        image.addEventListener('mouseenter', function() {
             this.style.opacity = '0.7';
        });
        image.addEventListener('mouseleave', function() {
             this.style.opacity = '1';
        });
    });
});

function showStudentInfo() {
     const studentInfo = document.getElementById('student-info');
     studentInfo.textContent = "Student ID: 200549499 | Name: Yadhu Krishna Kanjangad Santhosh";
}
function processOrder() {
    // Get form values
     const size = document.getElementById('size').value;
     const crust = document.getElementById('crust').value;
     const toppingsInput = document.getElementById('toppings').value;
     const toppings = toppingsInput.split(',').map(item => item.trim()); // Convert comma-separated string to array and trim whitespace

    // Create Pizza object
     const pizza = new Pizza(size, crust, toppings);

    // Output pizza description
     const description = document.getElementById('pizza-description');
    description.innerHTML = `<strong>Your Pizza:</strong><br>
                             Size: ${pizza.size}<br>
                             Crust: ${pizza.crust}<br>
                             Toppings: ${pizza.toppings.join(', ')}`;
}
// Pizza  class
class Pizza {
    constructor(size, crust, toppings) {
         this.size = size;
         this.crust = crust;
         this.toppings = toppings;
    }
}
