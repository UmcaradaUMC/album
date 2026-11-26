from django.db import models

class Album(models.Model) :
    titulo = models.CharField(max_length=100)
    artista = models.CharField(max_length=100)
    ano = models.FloatField()
    avaliacao = models.FloatField()

    def __str__(self):
        return self.titulo