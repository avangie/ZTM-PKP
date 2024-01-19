from django.urls import path
from .views import UserListCreateView, PngListCreateView, TextListCreateView
from . import views

urlpatterns = [
    path('users/', UserListCreateView.as_view(), name='user-list-create'),
    path('pngs/', PngListCreateView.as_view(), name='png-list-create'),
    path('texts/', TextListCreateView.as_view(), name='text-list-create'),
]