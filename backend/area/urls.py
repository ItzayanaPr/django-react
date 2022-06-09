"""area URL Configuration"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from area import views

router = routers.DefaultRouter()
router.register(r'listado', views.AreaView, 'areas')

app_name = "area"

urlpatterns = [
    path('areas/', include(router.urls)),
]