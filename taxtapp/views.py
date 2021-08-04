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

    elif request.method == 'PUT':
        filedata = JSONParser().parse(request)
        file = File_Data.objects.get(fileId=filedata['fileId'])
        File_Data_Serializer = File_DataSerializer(file, data=filedata)
        if File_Data_Serializer.is_valid():
            File_Data_Serializer.save()
            return JsonResponse("Updated successfully", safe=False)
        return JsonResponse("Failed to update", safe=False)
    elif request.method == 'DELETE':
        file = File_Data.objects.get(fileId=id)
        file.delete()
        return JsonResponse("Deleted Successfully", safe=False)

