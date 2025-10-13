from django.urls import path
from secrets_app.views import hide_secret, reveal_secret

urlpatterns = [
    path('hide/', hide_secret, name='hide_secret'),
    path('reveal/<str:key>/', reveal_secret, name='reveal_secret'),
]