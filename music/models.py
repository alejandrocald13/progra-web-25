from django.db import models

class Musician(models.Model):
    stage_name = models.CharField(max_length=25)
    real_name = models.CharField(max_length=25)
    country = models.CharField(max_length=80, blank=True)
    active_since = models.PositiveIntegerField(blank=True)

    def __str__(self):
        return self.stage_name


class Album(models.Model):
    musician = models.ForeignKey(Musician, on_delete=models.CASCADE, related_name='albums')
    title = models.CharField(max_length=200)
    release_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return f"{self.title} — {self.musician}"
    

class Song(models.Model):
    musician = models.ForeignKey(Musician, on_delete=models.CASCADE, related_name="songs")
    album = models.ForeignKey(Album, on_delete=models.CASCADE, related_name='album', null=True)
    title = models.CharField(max_length=150)
    duration_seconds = models.PositiveIntegerField(null=True, blank=True)

    def __str__(self):
        return f"{self.title} — {self.musician}"