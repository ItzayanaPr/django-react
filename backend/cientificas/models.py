from django.db import models
from area.models import Area

# Create your models here.

class Cientificas(models.Model):

	nombre = models.CharField(max_length=200)
	fecha_nacimiento = models.DateField()
	nacionalidad = models.CharField(max_length=200)
	foto = models.ImageField(blank=True, upload_to = 'fotos')
	descripcion = models.CharField(max_length=300)
	area = models.ForeignKey(Area, on_delete=models.CASCADE)


	def __str__(self):
		"""Get str representation."""
		return self.nombre

	def __repr__(self):
		"""Get str representation."""
		return self.__str__()
