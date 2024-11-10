const bundleOptions = document.querySelectorAll('.bundle-option');
const addToCartButton = document.querySelector('.add-to-cart');

bundleOptions.forEach(option => {
  option.addEventListener('click', () => {
    bundleOptions.forEach(opt => opt.classList.remove('selected', 'show'));
    option.classList.add('selected', 'show');
    const radioInput = option.querySelector('input[type="radio"]');
    if (radioInput) {
      radioInput.checked = true;
    }
  });
});

addToCartButton.addEventListener('click', () => {
  const selectedOption = document.querySelector('.bundle-option.selected');
  if (selectedOption) {
    const bundleName = selectedOption.querySelector('input[type="radio"]').value;
    const bundlePrice = selectedOption.querySelector('.price').textContent;
    alert(`Added ${bundleName} to the cart at ${bundlePrice}`);
  } else {
    alert('Please select a bundle option before adding to cart.');
  }
});
