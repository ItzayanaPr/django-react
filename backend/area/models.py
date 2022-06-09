from django.db import models

# Create your models here.
class Area(models.Model):

	nombre = models.CharField(max_length=200)
	descripcion = models.CharField(max_length=300)


	def __str__(self):
		"""Get str representation."""
		return self.nombre

	def __repr__(self):
		"""Get str representation."""
		return self.__str__()
