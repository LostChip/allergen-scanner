# Allergen Scanner

A phone-friendly page that scans a product barcode with the camera, looks it up on Open Food Facts and USDA FoodData Central at the same time, and shows its allergens, traces and ingredients, with gluten front and centre.

- Pick the allergens you want to watch for; matches are highlighted.
- Type the barcode if the camera can't read it.
- Recent scans are kept on your device.

Data comes from Open Food Facts and can be incomplete. Always check the package label.

## iPhone app

The same page is packaged as an iOS app with [Capacitor](https://capacitorjs.com). Inside the app, scanning uses the phone's native barcode scanner (with a torch button) instead of the browser camera, and gives a little buzz on a match. Everything else, including the allergen logic, is the same `index.html` that GitHub Pages serves.

### Build it in Xcode

Follow the step-by-step guide in [docs/XCODE.md](docs/XCODE.md). It covers installing Xcode, signing with a free Apple ID, putting the app on your iPhone, updating it, and fixing common errors.
