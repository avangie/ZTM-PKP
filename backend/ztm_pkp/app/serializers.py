from rest_framework import serializers
from .models import User, GameStatePaintPng, GameStatePaintText

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class GameStatePaintPngSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameStatePaintPng
        fields = '__all__'

class GameStatePaintTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameStatePaintText
        fields = '__all__'