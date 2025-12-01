from playwright.sync_api import sync_playwright

def verify_images():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the app
        page.goto("http://localhost:3000")

        # Wait for the hero section to load
        page.wait_for_selector("h1")

        # Check if the hero image is loaded (maciej_flying.webp)
        # Note: In React, src might be bundled, but we can check if an image with that src exists
        # or we can check if the image element is visible and has a src ending in .webp

        # Taking a screenshot of the hero section
        page.screenshot(path="verification/hero_section.png")

        # Checking for other images
        images = page.query_selector_all("img")
        for img in images:
            src = img.get_attribute("src")
            print(f"Found image: {src}")
            if src and ".webp" in src:
                print(f"Confirmed webp image: {src}")

        browser.close()

if __name__ == "__main__":
    verify_images()
