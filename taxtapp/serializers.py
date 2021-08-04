from rest_framework import serializers
from taxtapp.models import File_Data

class File_DataSerializer(serializers.ModelSerializer):
    class Meta:
        model=File_Data
        fields=('fileId','filename','file_size','content','modified','created','hash_value','date_inserted')