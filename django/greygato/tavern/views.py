from django.shortcuts import render
from .models import Employee

day = [
    {'day': 'Wednesday', 'hours' : '4pm'},
    {'day': 'Thursday', 'hours' : '4pm'},
    {'day': 'Friday', 'hours' : '4pm'},
    {'day': 'Saturday', 'hours' : '4pm'}
]

# Create your views here.
def index(request):
    context = {'day' : day}
    return render(request, 'tavern/home.html', context)

def staff(request):
    context = {'Employee' : Employee.objects.all()}
    return render(request, 'tavern/staff.html', context)

def menu(request):
    return render(request, 'tavern/menu.html')

def about(request):
    return render(request, 'tavern/about.html')