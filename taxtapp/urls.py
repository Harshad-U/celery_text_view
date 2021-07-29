from django.conf.urls import url
from taxtapp import views




urlpatterns=[
    url(r'^filedata$',views.File_DataApi),
]