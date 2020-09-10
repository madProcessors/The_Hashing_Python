from rest_framework import serializers
from .models import User, Hash, SessionUser 

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('user_id', 'email_adress', 'password', 'creation_date')

class HashSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hash
        fields = ('hash_id', 'hash', 'user_id', 'creation_date')

class SessionUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('session_id', 'token', 'user_id', 'begin_date', 'finish_date', 'comentary')