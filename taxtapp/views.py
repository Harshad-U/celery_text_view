from django.shortcuts import render

from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from taxtapp.models import File_Data
from taxtapp.serializers import File_DataSerializer
@csrf_exempt
def File_DataApi(request, id=0):
    if request.method == 'GET':
        filedata = File_Data.objects.all()
        File_Data_serializer = File_DataSerializer(filedata, many=True)
        return JsonResponse(File_Data_serializer.data, safe=False)

