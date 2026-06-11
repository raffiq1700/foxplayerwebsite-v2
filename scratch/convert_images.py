import os
import sys

try:
    from PIL import Image
except ImportError:
    print("Pillow is not installed. Attempting to install it...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

def convert_to_webp():
    public_dir = r"d:\foxplayer algo technologies\public"
    images_to_convert = [
        "logo.png",
        "hero_chart.png",
        "algo_code.png",
        "dashboard.png"
    ]
    
    print("Starting image conversion to WebP...")
    for img_name in images_to_convert:
        png_path = os.path.join(public_dir, img_name)
        webp_name = os.path.splitext(img_name)[0] + ".webp"
        webp_path = os.path.join(public_dir, webp_name)
        
        if os.path.exists(png_path):
            print(f"Converting {img_name}...")
            with Image.open(png_path) as im:
                # Convert RGBA to RGB if saving to WebP (WebP supports RGBA but let's preserve transparency if it has alpha)
                im.save(webp_path, "WEBP", quality=85)
            
            orig_size = os.path.getsize(png_path)
            new_size = os.path.getsize(webp_path)
            savings = (orig_size - new_size) / orig_size * 100
            print(f"Saved {webp_name} (Size: {new_size/1024:.1f} KB, Original: {orig_size/1024:.1f} KB, Reduction: {savings:.1f}%)")
        else:
            print(f"Warning: {img_name} not found in public directory.")

if __name__ == "__main__":
    convert_to_webp()
