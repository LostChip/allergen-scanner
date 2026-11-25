# Allergen Scanner

A phone-friendly page that scans a product barcode with the camera, looks it up on Open Food Facts and USDA FoodData Central at the same time, and shows its allergens, traces and ingredients, with gluten front and centre.

- Pick the allergens you want to watch for; matches are highlighted.
- Type the barcode if the camera can't read it.
- Recent scans are kept on your device.

Data comes from Open Food Facts and can be incomplete. Always check the package label.

## iPhone app

The same page is packaged as an iOS app with [Capacitor](https://capacitorjs.com). Inside the app, scanning uses the phone's native barcode scanner (with a torch button) instead of the browser camera, and gives a little buzz on a match. Everything else, including the allergen logic, is the same `index.html` that GitHub Pages serves.

### Run it on your iPhone (needs a Mac)

1. Install [Xcode](https://apps.apple.com/app/xcode/id497799835) from the Mac App Store and open it once to finish setup.
2. Install [Node.js](https://nodejs.org) (the LTS version).
3. In Terminal:
   ```sh
   git clone https://github.com/lostchip/allergen-scanner.git
   cd allergen-scanner
   npm install
   npm run ios
   ```
   This copies the page into the app and opens the project in Xcode.
4. In Xcode, click **App** in the left sidebar, then **Signing & Capabilities**, and pick your Apple ID under **Team** (Xcode > Settings > Accounts to add it). If it complains the bundle ID is taken, change it to something unique like `com.yourname.allergens`.
5. Plug in your iPhone, choose it at the top of the Xcode window, and press the ▶ Run button.
6. The first time, on the iPhone go to Settings > General > VPN & Device Management and trust your developer profile. You may also need to turn on Developer Mode (Settings > Privacy & Security).

With a free Apple ID the app works for 7 days before it needs reinstalling from Xcode. A paid Apple Developer account ($99/year) removes that limit and lets you use TestFlight and the App Store.

### After changing index.html

Run `npm run sync`, then press ▶ in Xcode again.
