from django.contrib import admin
from .models import Cientificas

class CientificasAdmin(admin.ModelAdmin):
	list_display = ('nombre', 'fecha_nacimiento', 'nacionalidad', 'foto', 'descripcion')

# Register your models here.
admin.site.register(Cientificas,CientificasAdmin)
