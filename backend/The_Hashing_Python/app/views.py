from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.decorators import APIView
from rest_framework.response import Response
from .serializers import UserSerializer, HashSerializer, \
SessionUserSerializer, TextSerializer
from .models import User, Hash, SessionUser
from django.contrib.auth import get_user_model
from hashlib import sha256 

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
    def post(self, request, format=None):
        serializer = TextSerializer(data=request.data)
        if serializer.is_valid():
            text = serializer.data['text']
            # Create hash 
            theHash = sha256(text.encode())
            theHash = theHash.hexdigest() 
            user = User.objects.get(user_id=1)
            # Save hash to DB
            Hash.objects.create(hash=theHash, user_id=user)
            return Response({'hash': theHash}, status=status.HTTP_201_CREATED)
        return Response('ERROR', status=status.HTTP_400_BAD_REQUEST)

# @api_view(['GET'])
# def auth(request):
#     user = get_user_model()
#     if user:
#         return Response({'auth':1}, status=status.HTTP_200_OK)
#     else:
#         return Response({'auth':0}, status=status.HTTP_200_OK)