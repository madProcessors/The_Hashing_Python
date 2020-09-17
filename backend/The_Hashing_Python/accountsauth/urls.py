from django.urls import path, include
from .api import RegisterApi, LoginApi
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('api/auth/register', RegisterApi.as_view()),
    path('api/auth/login', LoginApi.as_view()),
    path('api/token', TokenObtainPairView.as_view()),
    path('api/token/refresh', TokenRefreshView.as_view())
]