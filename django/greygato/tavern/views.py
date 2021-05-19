from django.shortcuts import render
from django.http import HttpResponse

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
    return render(request, 'tavern/staff.html')

def menu(request):
    return render(request, 'tavern/menu.html')

def about(request):
    return render(request, 'tavern/about.html')