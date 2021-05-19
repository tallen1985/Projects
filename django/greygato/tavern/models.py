from django.db import models
from django.db.models.fields import IntegerField

# Create your models here.
class Employee(models.Model):
    first_name = models.CharField(max_length=10)
    last_name = models.CharField(max_length=20)
    position = models.CharField(max_length=20)
    bio = models.TextField()
    start_date = models.DateField()

    def __str__(self):
        return self.last_name + ", " + self.first_name
    
class Menu(models.Model):
    name = models.CharField(max_length=20)
    time_start = models.IntegerField
    time_end = models.IntegerField

class Menu_item(models.Model):
    name = models.CharField(max_length=20)
    price = models.IntegerField()
    menu = models.ForeignKey(Menu, on_delete=models.CASCADE)
    description = models.TextField()

