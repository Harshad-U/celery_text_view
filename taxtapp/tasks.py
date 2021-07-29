from __future__ import absolute_import, unicode_literals
from .models import File_Data
import os,glob
import hashlib
import datetime
from datetime import date
import psycopg2

from celery import shared_task
     #to store visited files

@shared_task
def add():

    folder_path = r'/home/acer/Desktop/text'

    for textfile in glob.glob(os.path.join(folder_path, '*.txt')):
        h1 = hashlib.sha1()
        with open(textfile, 'rb') as f:
            chunk = f.read(1024)
            h1.update(chunk)
            d1 = h1.hexdigest()

            if File_Data.objects.filter(hash_value=d1).exists():
                print("same")
            else :
                with open(textfile, 'r') as f:

                    text = f.readline()
                    fname = os.path.basename(textfile)
                    size = os.path.getsize(textfile)
                    mdate = (datetime.datetime.fromtimestamp(os.path.getmtime(textfile)))  # modified date
                    cdate = (datetime.datetime.fromtimestamp(os.path.getmtime(textfile))) # created date
                    inserted = date.today()

                    full = f.read()
                    pth= textfile
                    file = File_Data()
                    file.filename = fname
                    file.file_size = size
                    file.content = text
                    file.modified = mdate
                    file.created = cdate
                    file.hash_value = d1
                    file.date_inserted = inserted
                    file.full_data = full
                    file.path = pth
                    file.save()
                    print(text)
                    print(size)

                f.close()

        f.close()





