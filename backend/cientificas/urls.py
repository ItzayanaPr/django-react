"""cientificas URL Configuration"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from cientificas import views

router = routers.DefaultRouter()
router.register(r'listado', views.CientificasView, 'cientificas')

app_name = "cientificas"

urlpatterns = [
    path('cientificas/', include(router.urls)),
]