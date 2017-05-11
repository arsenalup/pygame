# -*- coding: utf-8 -*-
import re
import requests
import time

class Tool():
    def replace(self,x):
        x=re.sub(re.compile('<br>|</br>|/>|<br'), "", x)
        return x.strip()

class Spider(object):
    def __init__(self):
        self.siteURL = 'http://www.qiushibaike.com/'
        self.tool = Tool()
    def getSource(self,url):
        user_agent = 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36'
        headers = {'User_agent': user_agent}
        r = requests.get(url, headers=headers)
        result = r.text
        return result
    def getDetailPage(self,detailURL):
        source=self.getSource(detailURL)
        pattern=re.compile('<div class="author.*?<h2>(.*?)</h2>.*?Icon">(.*?)</div>.*?<div class="content">.*?<span>(.*?)</span>.*?<span.*?stats-vote.*?number">(.*?)</i>.*?stats-comments.*?number">(.*?)</i>.*?up.*?number hidden">(.*?)</span>.*?down.*?number hidden">(.*?)</span>',
            re.S)
        items=re.findall(pattern,source)
        number=1
        for item in items:
            print u''
            print number, u'楼', u'\n楼主：', item[0], u'', item[1], u'岁', u'\n发言:', self.tool.replace(item[2]), u'\n好笑：', \
            item[3], u'\n评论：', item[4], u'\n赞：', item[5], u'\n踩：', item[6]
            time.sleep(0.1)
            number += 1
        return items
    def saveDetailPage(self,data,name):
        fileName='page'+name+'.'+'text'
        f=open(fileName,'wb')
        f.write(data.encode('utf-8'))
        print u"",u'成功保存',fileName
        f.close()
    def OnePage(self, detailURL, name):
        data = self.getDetailPage(detailURL)
        self.saveDetailPage(str(data), str(name))

    def getAllPage(self, start, end):
        if start == 1:
            print u'正在获取第1页的数据...'
            detailURL = self.siteURL
            self.OnePage(detailURL, start)
            number = 2
            for page in range(2, end + 1):
                print u'正在获取第', number, u'页的数据...'
                detailURL = self.siteURL + '8hr/page/' + str(page) + '/?s=4964625'
                self.OnePage(detailURL, number)
                time.sleep(2)
                number += 1
            if number == end + 1:
                print u'', u'\n加载结束！'
        elif start > 1:
            number = start
            for page in range(start, end + 1):
                print u'', u'\n正在获取第', number, u'页的数据...'
                detailURL = self.siteURL + '8hr/page/' + str(page) + '/?s=4964625'
                self.OnePage(detailURL, number)
                time.sleep(2)
                number += 1
            if number == end + 1:
                print u'', u'加载结束！'
                return False

spider = Spider()
spider.getAllPage(start=int(raw_input('请输入起始页数：')), end=int(raw_input('请输入结束页数')))