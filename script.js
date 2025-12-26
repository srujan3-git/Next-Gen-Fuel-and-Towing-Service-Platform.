document.addEventListener('DOMContentLoaded', function() {

    // --- Signup Page Logic ---
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Account created successfully! Redirecting you to our services page.');
            window.location.href = 'services.html';
        });
    }

    // --- Fuel Page Logic ---
    const quantityElement = document.getElementById('quantity');
    if (quantityElement) {
        const decreaseBtn = document.getElementById('decreaseBtn');
        const increaseBtn = document.getElementById('increaseBtn');
        const petrolBtn = document.getElementById('petrolBtn');
        const dieselBtn = document.getElementById('dieselBtn');
        const summaryFuel = document.getElementById('summaryFuel');
        const summaryQuantity = document.getElementById('summaryQuantity');

        let quantity = 1;
        let fuelType = 'Petrol';

        function updateSummary() {
            summaryFuel.textContent = fuelType;
            summaryQuantity.textContent = `${quantity} Litre${quantity > 1 ? 's' : ''}`;
        }

        decreaseBtn.addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                updateSummary();
            }
        });

        increaseBtn.addEventListener('click', () => {
            quantity++;
            quantityElement.textContent = quantity;
            updateSummary();
        });

        petrolBtn.addEventListener('click', () => {
            fuelType = 'Petrol';
            petrolBtn.classList.add('bg-blue-500', 'text-white');
            petrolBtn.classList.remove('bg-gray-200', 'text-gray-700');
            dieselBtn.classList.add('bg-gray-200', 'text-gray-700');
            dieselBtn.classList.remove('bg-blue-500', 'text-white');
            updateSummary();
        });

        dieselBtn.addEventListener('click', () => {
            fuelType = 'Diesel';
            dieselBtn.classList.add('bg-blue-500', 'text-white');
            dieselBtn.classList.remove('bg-gray-200', 'text-gray-700');
            petrolBtn.classList.add('bg-gray-200', 'text-gray-700');
            petrolBtn.classList.remove('bg-blue-500', 'text-white');
            updateSummary();
        });
        
        updateSummary();
    }

    // --- Payment Page Logic ---
    const paymentForm = document.getElementById('payment-form');
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Payment Successful! Your service request has been confirmed.');
            setTimeout(() => {
                window.location.href = 'my_orders.html';
            }, 1500);
        });
    }

});