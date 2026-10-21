# Jatra — Bus Booking + Travel Lab

A responsive, framework-free travel project for Bangladesh, built with HTML, CSS and vanilla JavaScript. No build step or framework required.

## Apps included

### 1. Bus Booking Demo
- Search route, date and passenger count
- Swap origin/destination
- Sort sample bus options by price or departure
- Filter AC and non-AC coaches
- Interactive seat map with booked/selected/available states
- Dynamic fare calculation
- Passenger form validation for Bangladesh mobile numbers
- Demo booking confirmation and generated reference

### 2. Jatra Travel Lab
Open [apps.html](apps.html) for three extra mini apps:
- **Weekend Escape Finder** — suggests a Bangladesh destination based on mood, starting city, duration and budget.
- **Group Trip Splitter** — calculates equal shares for transport, accommodation, food, activities and other costs.
- **Smart Packing Planner** — creates a checklist based on trip length and trip style, tracks progress and accepts custom items.

## Run locally

Open `index.html` or `apps.html` in a browser, or serve the folder with any static web server.

## GitHub Pages deployment

The repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`. In repository **Settings → Pages**, select **GitHub Actions** as the build and deployment source. The workflow publishes the repository root after pushes to `main`. The published URL appears in Settings → Pages.

## Important limitations

All bus inventory, seats, fares and destination estimates are sample data. The booking reference is generated in the browser and does not represent a real ticket. No bookings or checklist data are saved to a server, seats are not locked across users, and no payments are processed. Destination prices and travel conditions are not live-verified. The expense splitter assumes equal sharing and does not track individual payments. A production booking service needs a secure backend, persistent database, operator inventory/API access, and a compliant payment integration. Never put secret API keys in frontend files.