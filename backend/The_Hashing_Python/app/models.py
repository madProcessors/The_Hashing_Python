from django.db import models

class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    email_adress = models.CharField(max_length=100) 
    password = models.CharField(max_length=100)
    creation_date = models.DateTimeField()

    def _str_(self):
        return self.title

    class Meta:
        db_table = 'user'

class Hash(models.Model):
    hash_id = models.BigIntegerField(primary_key=True)
    hash = models.CharField(max_length=100)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    creation_date = models.DateTimeField()

    def _str_(self):
        return self.title

    class Meta:
        db_table = 'hash'

class SessionUser(models.Model):
    session_id = models.BigIntegerField(primary_key=True)
    token = models.CharField(max_length=100)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    begin_date = models.DateTimeField()
    finish_date = models.DateTimeField()
    comentary = models.CharField(max_length=100)

    def _str_(self):
        return self.title

    class Meta:
        db_table = 'session_user'