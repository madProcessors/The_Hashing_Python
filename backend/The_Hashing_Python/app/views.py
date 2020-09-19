from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.decorators import APIView
from rest_framework.response import Response
from .serializers import UserSerializer, HashSerializer, \
SessionUserSerializer, TextSerializer
from .models import User, Hash, SessionUser
from .SHA256.sha256 import SHA256
from django.contrib.auth import get_user_model

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class HashView(viewsets.ModelViewSet):
    serializer_class = HashSerializer
    queryset = Hash.objects.all()

class SessionUserView(viewsets.ModelViewSet):
    serializer_class = SessionUserSerializer
    queryset = SessionUser.objects.all()

class HashCreationView(APIView):
    def get(self, request):
        return Response('HOLAA', status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = TextSerializer(data=request.data)
        if serializer.is_valid():
            text = serializer.data['text']
            theHash = SHA256.hash(text)
            # Save hash to DB
            #User.objects.create(email_adress='test@test.com', password='123')
            #userModel = get_user_model()
            #user = userModel.objects.get(id=2)
            #user = User.objects.get(user_id=1)
            #Hash.objects.create(hash=theHash, user_id=user)
            theHash.save()
            return Response({'hash': theHash}, status=status.HTTP_201_CREATED)
        return Response('ERROR', status=status.HTTP_400_BAD_REQUEST)