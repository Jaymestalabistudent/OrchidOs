/*  This is a test file for the OrchidOS HTML structure. 
It uses JSDOM to parse the HTML file and then tests the structure of the header and footer sections. 
of the main index page this was built with tutorials from https://dev.to this helped so much */


// Import fs for reading the HTML file
const fs = require('fs');

// Read the HTML file
const html = fs.readFileSync('index.html', 'utf8');

// Set up JSDOM
const { JSDOM } = require('jsdom');
const { document } = new JSDOM(html).window;

// Test suite for the OrchidOS HTML structure
describe('OrchidOS HTML structure', () => {
  // Test for the header section
  test('Header section should contain OrchidOS title and menu items', () => {
    const header = document.querySelector('header');
    expect(header).toBeTruthy();

    const title = header.querySelector('.menu-title');
    expect(title.textContent).toBe('OrchidOs');

    const menuItems = header.querySelectorAll('li');
    expect(menuItems.length).toBe(5); // this can be adjusted based on the actual menu items used
  });

  // Test for the footer section
  test('Footer section should contain social links and copyright information', () => {
    const footer = document.querySelector('footer');
    expect(footer).toBeTruthy();

    const socialLinks = footer.querySelectorAll('.social-links li');
    expect(socialLinks.length).toBe(2); // this can be adjusted based on the actual social links used

    const copyright = footer.querySelector('.copyright');
    expect(copyright.textContent).toContain('OrchidOS');
  });
});
