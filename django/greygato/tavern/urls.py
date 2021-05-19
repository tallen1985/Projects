from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="home"),
    path('staff', views.staff, name="staff"),
    path('about', views.about, name='about'),
    path('menu', views.menu, name="menu")
]