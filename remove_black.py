from PIL import Image

def process_image(filepath):
    img = Image.open(filepath)
    img = img.convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        # Calculate luminance
        l = int((item[0] + item[1] + item[2]) / 3.0)
        # Set RGB to pure white, and use luminance as Alpha
        # This makes pure black fully transparent, pure white fully opaque, and grays translucent
        newData.append((255, 255, 255, l))

    img.putdata(newData)
    img.save(filepath, "PNG")
    print("Done")

process_image('public/white_lace_doily_frame.png')
