from django.shortcuts import render
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CientificasSerializer
from .models import Cientificas

# Create your views here.

class CientificasView(viewsets.ModelViewSet):
    serializer_class = CientificasSerializer
    queryset = Cientificas.objects.all()
