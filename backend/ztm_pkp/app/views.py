from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .models import User, GameStatePaintPng, GameStatePaintText
from .serializers import UserSerializer, GameStatePaintPngSerializer, GameStatePaintTextSerializer

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

class UserListCreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PngListCreateView(generics.ListCreateAPIView):
    queryset = GameStatePaintPng.objects.all()
    serializer_class = GameStatePaintPngSerializer

class TextListCreateView(generics.ListCreateAPIView):
    queryset = GameStatePaintText.objects.all()
    serializer_class = GameStatePaintTextSerializer