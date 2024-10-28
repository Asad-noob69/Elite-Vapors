document.addEventListener("DOMContentLoaded", function() {
    // Sample product data
    const products = [
        { name: "Electronic vapes", price: "5500Rs.", image: "/images/crop.jpg" },
        { name: "Electronic vapes", price: "5500Rs.", image: "/images/crop.jpg" },
        { name: "Electronic vapes", price: "5500Rs.", image: "/images/crop.jpg" },
        { name: "Electronic vapes", price: "5500Rs.", image: "/images/crop.jpg" },
        { name: "Electronic vapes", price: "5500Rs.", image: "/images/crop.jpg" },
        { name: "Electronic vapes", price: "5500Rs.", image: "/images/crop.jpg" },
        { name: "Electronic vapes", price: "5500Rs.", image: "/images/crop.jpg" },
        { name: "Electronic vapes", price: "5500Rs.", image: "/images/crop.jpg" }
    ];

    // Get the template from the script tag
    const templateSource = document.getElementById('product-template').innerHTML;

    // Compile the Handlebars template
    const template = Handlebars.compile(templateSource);

    // Generate the HTML by passing the products data
    const productHTML = template({ products });

    // Insert the generated HTML into the product list container
    document.getElementById('product-list').innerHTML = productHTML;
});

// for the featured section
const productData = {
    products: [
        { image: "/images/smallvape.jpg", title: "Premium Device", price: "$59.99" },
        { image: "/images/prod2.jpg", title: "Advanced Device", price: "$79.99" },
        { image: "/images/prod3.jpg", title: "Luxury Device", price: "$99.99" },
        { image: "/images/prod4.jpg", title: "Pro Device", price: "$89.99" },
        { image: "/images/prod5.jpg", title: "Eco Device", price: "$49.99" },
        { image: "/images/prod6.jpg", title: "Mini Device", price: "$39.99" },
        { image: "/images/prod7.jpg", title: "Ultra Device", price: "$129.99" },
        { image: "/images/prod8.jpg", title: "Elite Device", price: "$199.99" }
    ]
};

// Compile the Handlebars template
const templateSource = document.getElementById('product-template').innerHTML;
const template = Handlebars.compile(templateSource);

// Render the template with the data
const compiledHtml = template(productData);

// Inject the compiled HTML into the product grid div
document.getElementById('product-grid').innerHTML = compiledHtml;
function showPopup(product) {
    const template = Handlebars.compile(document.getElementById('product-popup-template').innerHTML);
    const popupHtml = template({
        ...product,
        colors: ['red', 'blue', 'black'],
        sizes: ['7', '8', '9', '10', '11'],
        color: 'pink' // This will be used for the background circle
    });
    
    // Insert popup into DOM if it doesn't exist
    if (!document.getElementById('product-popup')) {
        document.body.insertAdjacentHTML('beforeend', popupHtml);
    }
    
    // Show popup with animation
    const popup = document.getElementById('product-popup');
    popup.style.opacity = '1';
    popup.style.pointerEvents = 'auto';
    popup.querySelector('.bg-white\\/95').style.transform = 'scale(1)';
    
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
}

// Function to close popup
function closePopup() {
    const popup = document.getElementById('product-popup');
    popup.style.opacity = '0';
    popup.style.pointerEvents = 'none';
    popup.querySelector('.bg-white\\/95').style.transform = 'scale(0.95)';
    
    // Re-enable body scrolling
    document.body.style.overflow = '';
}

// Modify your existing product template to add click handlers
document.getElementById('product-template').innerHTML = `
    {{#each products}}
    <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer" 
         onclick="showPopup({
            name: '{{name}}',
            price: '{{price}}',
            image: '{{image}}'
         })">
        <img src="{{image}}" alt="{{name}}" class="w-full h-64 object-cover rounded-t-lg">
        <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800">{{name}}</h3>
            <p class="text-gray-600">{{price}}</p>
        </div>
    </div>
    {{/each}}
`;
// In your helpers file
Handlebars.registerHelper('colorClass', function(color) {
    return `text-${color}-500`;
});
// Handle invalid or missing colors by providing a fallback (e.g., gray)
Handlebars.registerHelper('colorClass', function(color) {
    return color ? `text-${color}-500` : 'text-gray-500'; 
});

    // Mobile menu functionality
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
            mobileMenu.classList.add('hidden');
        }
    });

    // Close mobile menu when window is resized to desktop size
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) { // 768px is the md breakpoint in Tailwind
            mobileMenu.classList.add('hidden');
        }
    });
