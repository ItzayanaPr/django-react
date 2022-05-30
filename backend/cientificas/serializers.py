from rest_framework import serializers
from .models import Cientificas

class CientificasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cientificas
        fields = ('id', 'nombre','fecha_nacimiento','nacionalidad','foto', 'descripcion')