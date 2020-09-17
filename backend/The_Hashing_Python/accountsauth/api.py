from rest_framework import generics, permissions
from rest_framework.response import Response
from .serializers import UserSerializer, RegisterSerializer, LoginSerialiizer

#Register api
class RegisterApi(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    def post(self,request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception = True)
        user = serializer.save()
        return Response({
            "user":UserSerializer(user, context=self.get_serializer_context()).data
        })


#Login api

class LoginApi(generics.GenericAPIView):
    serializer_class = LoginSerialiizer
    def post(self,request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user":UserSerializer(user, context=self.get_serializer_context()).data
        })

