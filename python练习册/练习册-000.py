# -*- coding: utf-8 -*-
from  PIL import Image,ImageDraw,ImageFont

def add_num(picPath,num):
    img=Image.open(picPath)
    x,y=img.size
    myfont=ImageFont.truetype('verdana.ttf',x/4)
    ImageDraw.Draw(img).text((4*x/5,0),str(num),font=myfont,fill='red')
    img.save('pic_add_num.jpg')


if __name__ == '__main__':
    add_num('pic.jpg',9)