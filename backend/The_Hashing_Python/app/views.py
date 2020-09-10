from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer, HashSerializer, SessionUserSerializer 
from .models import User, Hash, SessionUser

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class HashView(viewsets.ModelViewSet):
    serializer_class = HashSerializer
    queryset = Hash.objects.all()

class SessionUserView(viewsets.ModelViewSet):
    serializer_class = SessionUserSerializer
    queryset = SessionUser.objects.all()