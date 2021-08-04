from django.db import models


class File_Data(models.Model):
    fileId = models.AutoField(primary_key=True)
    filename = models.CharField(max_length=25)
    file_size = models.IntegerField()
    modified = models.DateField()
    created = models.DateField()
    hash_value = models.CharField(max_length=50)
    date_inserted = models.DateField()
    content = models.TextField()

