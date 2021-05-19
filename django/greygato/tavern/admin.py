from django.contrib import admin

# Register your models here.
from .models import Employee, Menu, Menu_item

admin.site.register(Employee)
admin.site.register(Menu)
admin.site.register(Menu_item)