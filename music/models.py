from django.db import models


class Musician(models.Model):
    stage_name = models.CharField(max_length=25)
    real_name = models.CharField(max_length=25)
    country = models.CharField(max_length=80, blank=True)
    active_since = models.PositiveIntegerField(blank=True)

    def __str__(self):
        return self.stage_name
# Create your models here.
