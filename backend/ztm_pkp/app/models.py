from django.db import models

class User(models.Model):
    user_id = models.CharField(max_length=20)
    user_name = models.CharField(max_length=20)


class GameStateXO(models.Model):
    game_id = models.CharField(max_length=20)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    game_state = models.BooleanField(default=False)