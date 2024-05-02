const themeSelector = document.getElementById('theme-selector'); // replace with code to select dropdown element out of the HTML
const image = document.querySelector('.logo');

function changeTheme() {
//check to see what the current value of our select is. The current value is conveniently found in themeSelector.value!
const selectedTheme = themeSelector.value;

// if the value is dark then:
if (selectedTheme == "dark")
{
    // add the dark class to the body
    document.body.classList.add('dark');

    // change the source of the logo to point to the white logo.
    image.src = 'byui-logo_white.png';
}
// otherwise
else 
{
    // remove the dark class
    document.body.classList.remove('dark');

    // make sure the logo src is the blue logo.
    image.src = 'byui-logo_blue.webp';
}
}
// add eventlistener to the themeSelector element here. Use the changeTheme function as the event handler function.

themeSelector.addEventListener('change', changeTheme)