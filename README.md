# Jatra — Interactive Bus Booking Demo

A responsive, framework-free bus booking frontend for Bangladesh. Built with HTML, CSS and vanilla JavaScript; it can be hosted directly on GitHub Pages.

## Features

- Search route, date and passenger count
- Swap origin/destination
- Sort sample bus options by price or departure
- Filter AC and non-AC coaches
- Interactive seat map with booked/selected/available states
- Dynamic fare calculation
- Passenger form validation for Bangladesh mobile numbers
- Demo booking confirmation and generated reference
- Responsive layout for mobile and desktop

## Run locally

Open `index.html` in a browser, or serve the folder with any static web server.

## Deploy with GitHub Pages

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch `main`, folder `/ (root)`, then **Save**.
4. Wait for GitHub Pages to publish the site. The URL will appear in Settings → Pages.

## Important limitations

This is a frontend demo. It uses sample operators, fares, and seat availability. The booking reference is generated in the browser and does not represent a real ticket. It does not save bookings to a database, lock seats across users, authenticate customers, or process payments. A production service needs a secure backend, persistent database, operator inventory/API access, and a compliant payment gateway integration. Never place secret API keys in frontend files.