from django.db import models

class User(models.Model):
    user_id = models.CharField(max_length=20)
    user_name = models.CharField(max_length=20)
    user_password = models.CharField(max_length=200)


class GameStateXO(models.Model):
    game_id = models.CharField(max_length=20)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    game_state = models.BooleanField(default=False)

class GameStateSudoku(models.Model):
    game_id = models.CharField(max_length=20)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    game_state = models.BooleanField(default=False)

class GameStatePaintPng(models.Model):
    png_id = models.CharField(max_length=20)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    png = models.ImageField(upload_to='images/', blank=True, null=True)

class GameStatePaintText(models.Model):
    text_id = models.CharField(max_length=20)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.CharField(max_length=1000)