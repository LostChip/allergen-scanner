# Build the iPhone app in Xcode

A step-by-step guide for building **Allergens** (this repo's iPhone app) on a Mac and installing it on your own iPhone. It assumes you've never used Xcode and that you're using a **free Apple ID** (no paid developer account).

> This guide is kept up to date as the app changes. See [What's changed](#whats-changed) at the bottom for what's new since your last build.

**Time needed:** about 1 to 2 hours the first time, mostly waiting for Xcode to download. Later builds take about 5 minutes.

---

## What you need

- A Mac with a recent macOS and **at least 40 GB free disk space** (Xcode is large).
- Your iPhone and a cable that connects it to the Mac (USB-C or Lightning).
- Your Apple ID and password (the one you use for the App Store is fine).
- Internet.

---

## Part 1: One-time setup on the Mac

### 1. Install Xcode (start this first, it's slow)

1. Open the **App Store** on the Mac, search for **Xcode**, and click **Get**. It's free but several GB, so it can take an hour or more.
2. When it's done, open **Xcode** once. Agree to the license and let it install its extra components.
3. If it asks which platforms to install, make sure **iOS** is ticked. (If you skip this, you can add it later in **Xcode > Settings > Components**.)

### 2. Install Node.js

Node.js is a small tool that prepares the app's files.

1. Go to [nodejs.org](https://nodejs.org) and download the **LTS** version for macOS.
2. Open the downloaded file and click through the installer.

### 3. Add your Apple ID to Xcode

1. In Xcode, open the menu **Xcode > Settings…** (or press `⌘ ,`).
2. Click the **Accounts** tab, then the **+** button at the bottom left.
3. Choose **Apple ID**, then sign in.
4. You should now see your name with **(Personal Team)** under it. That's your free signing team. Close the Settings window.

---

## Part 2: Get the app's code

1. Open **Terminal** (press `⌘ Space`, type *Terminal*, press Return).
2. Copy and paste these lines one at a time, pressing Return after each:

   ```sh
   cd ~/Documents
   git clone https://github.com/lostchip/allergen-scanner.git
   cd allergen-scanner
   npm install
   npm run ios
   ```

   - If the Mac pops up "The git command requires the command line developer tools", click **Install**, wait for it to finish, then run the `git clone` line again.
   - `npm install` downloads the app's building blocks (takes under a minute).
   - `npm run ios` copies the scanner page into the app and **opens the project in Xcode**.

Leave Terminal open; you'll use it again when the app changes.

---

## Part 3: Set up signing (one time)

This tells Xcode to sign the app with your free Apple ID so your iPhone will accept it.

1. In Xcode's left sidebar, click the blue **App** icon at the very top.
2. In the middle area, under **TARGETS**, click **App**.
3. Click the **Signing & Capabilities** tab along the top.
4. Make sure **Automatically manage signing** is ticked.
5. In the **Team** dropdown, choose **Your Name (Personal Team)**.
6. Look at **Bundle Identifier**. It says `io.github.lostchip.allergenscanner`. If you see a red error such as *"Failed to register bundle identifier"*, change it to something only you would use, for example `io.github.lostchip.allergens.chris`, and press Return.

Wait a few seconds. When there's no red error under Signing, you're set.

> The first time you open the project, Xcode downloads some packages it needs (you'll see "Resolving Package Graph" at the top). Let it finish before building.

---

## Part 4: Put the app on your iPhone

### 1. Connect and trust

1. Plug the iPhone into the Mac and **unlock** it.
2. If the iPhone asks **"Trust This Computer?"**, tap **Trust** and enter your passcode.

### 2. Turn on Developer Mode (iPhone, one time)

1. On the iPhone, go to **Settings > Privacy & Security**, scroll to the bottom and tap **Developer Mode**.
   - If you don't see it yet, do step 3 below once (it will fail), then come back. It appears after Xcode has seen your phone.
2. Turn it on. The iPhone restarts. After it restarts, tap **Turn On** and enter your passcode.

### 3. Build and run

1. At the top of the Xcode window, there's a device picker (next to the word **App**). Click it and choose **your iPhone** (under *iOS Device*), not a simulator.
2. Press the **▶ Run** button at the top left (or `⌘ R`).
3. Wait while Xcode builds. The first build takes a few minutes. Watch the status bar at the top.

### 4. Trust yourself as a developer (iPhone, first install only)

The first time, the iPhone will refuse to open the app with *"Untrusted Developer"*. To fix it:

1. On the iPhone, go to **Settings > General > VPN & Device Management**.
2. Under **Developer App**, tap your Apple ID, then tap **Trust**.
3. Back in Xcode, press **▶ Run** again (or just tap the **Allergens** icon on your home screen).

### 5. Try it

- Tap **Scan a barcode**. The first time, allow camera access.
- Point at a product barcode. The phone buzzes when it reads it and shows the allergen results.

🎉 That's it. The app is on your phone.

---

## The 7-day limit (free Apple ID)

Apps signed with a free Apple ID stop opening after **7 days**. When that happens, nothing is lost:

1. Plug the iPhone into the Mac.
2. Open the project in Xcode (in Terminal: `cd ~/Documents/allergen-scanner` then `npx cap open ios`).
3. Press **▶ Run**.

Your watch list and recent scans are kept. A paid Apple Developer account ($99/year) removes this limit and lets you use TestFlight. You don't need it to try the app.

---

## When the app changes (updating)

Each time Claude updates the app, you'll get a note in [What's changed](#whats-changed). To get the new version on your phone:

1. In Terminal:

   ```sh
   cd ~/Documents/allergen-scanner
   git pull
   npm install
   npm run ios
   ```

2. In Xcode, pick your iPhone and press **▶ Run**.

If Xcode was already open, it's fine. It picks up the changes.

---

## Trying it without your phone (optional)

You can run the app in the iPhone **Simulator** on the Mac: choose any iPhone model in the device picker and press ▶. The simulator has **no camera**, so scanning won't work there, but you can type a barcode number (for example `737628064502`) to see results.

---

## Troubleshooting

| What you see | What to do |
| --- | --- |
| `npm: command not found` | Node.js isn't installed, or Terminal was open during install. Install it from nodejs.org, then quit and reopen Terminal. |
| `git: command not found` or a popup about developer tools | Click **Install** on the popup (or run `xcode-select --install`), then try again. |
| *"Failed to register bundle identifier"* or *"is not available"* | Change the Bundle Identifier in Signing & Capabilities to something unique (Part 3, step 6). |
| *"No Account for Team"* or Team is empty | Add your Apple ID in **Xcode > Settings > Accounts** (Part 1, step 3). |
| *"Communication with Apple failed"* / *"Your team has no devices"* | Plug in and unlock your iPhone, choose it in the device picker, then press ▶ again. |
| Your iPhone doesn't appear in the device picker | Unlock it, tap **Trust** if asked, try another cable, and make sure Developer Mode is on. |
| *"iOS 18.x is not installed"* (or similar) | **Xcode > Settings > Components**, download the iOS platform, then ▶ again. |
| *"Missing package product 'CapApp-SPM'"* or *"No such module 'Capacitor'"* | Run `npm install` in Terminal first. Then in Xcode: **File > Packages > Reset Package Caches**, and ▶ again. |
| *"Untrusted Developer"* on the iPhone | Settings > General > VPN & Device Management > your Apple ID > Trust (Part 4, step 4). |
| App opens, but scanning says camera access is off | iPhone **Settings > Allergens > Camera**, turn it on. |
| *"Unable to install … maximum number of apps"* | A free Apple ID can have 3 of your own apps on a phone at once. Delete an old one you built. |
| Something else | Copy the red error text from Xcode (click it in the left sidebar's ⚠️ tab) and paste it in the project thread. |

---

## What's changed

Newest first. "Rebuild" means follow [When the app changes](#when-the-app-changes-updating).

- **2026-11-25: First version.** The scanner website packaged as an iPhone app. Uses the iPhone's own barcode scanner with a flashlight button, buzzes on a match, has its own icon, and shows as **Allergens** on your home screen.
