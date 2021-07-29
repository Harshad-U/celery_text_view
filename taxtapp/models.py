from django.db import models


class File_Data(models.Model):
    filename = models.CharField(max_length=25)
    file_size = models.IntegerField()
    content = models.CharField(max_length=510)
    modified = models.DateField()
    created = models.DateField()
    hash_value = models.CharField(max_length=50)
    date_inserted = models.DateField()
    full_data = models.TextField()
    path = models.CharField(max_length=300)
