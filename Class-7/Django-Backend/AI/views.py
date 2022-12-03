from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def solve(request):
    msg = {'ime':'Ramiz','godina': 3}
    msg[0]
    return HttpResponse(msg)