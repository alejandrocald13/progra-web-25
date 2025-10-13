import redis
import uuid
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

redisClient = redis.Redis(host=settings.REDIS_HOST, port=settings.REDIS_PORT, db=0, decode_responses=True)

@api_view(['POST'])
def hide_secret(request):
    """Guarda un texto secreto y devuelve una key única"""
    secret = request.data.get('message')
    if not secret:
        return Response({'error': 'Message is required.'}, status=status.HTTP_400_BAD_REQUEST)

    key = str(uuid.uuid4())
    redisClient.set(key, secret)
    return Response({'key': key})


@api_view(['GET'])
def reveal_secret(request, key):
    """Revela el texto y luego lo elimina"""
    message = redisClient.get(key)
    if not message:
        return Response({'error': 'Secret not found or already revealed.'}, status=status.HTTP_404_NOT_FOUND)

    redisClient.delete(key)
    return Response({'message': message})

