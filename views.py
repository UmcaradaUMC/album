from django.shortcuts import render

# Create your views here.
import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import Album

@csrf_exempt
def api_albuns(request):
    if request.method == "POST":
        dados = json.loads(request.body)

        ano = dados.get("ANO")
        avaliacao = dados.get ("avaliacao")

        if not (1900<= int(ano) <=2026):
            return JsonResponse ({"erro": "O ano deve estar entre 1900 e 2026"}, status=400 )

        if not (0 <= float(avaliacao) <=10):
            return JsonResponse({"erro": "Avaliação deve ser de 0 a 10."}, status=400 )

        album = Album.objects.create(
            titulo=dados.get("titulo"),
            artista=dados.get("artista"),
            ano=dados.get("ano"),
            avaliacao=dados.get("avaliacao")
        )
        
        return JsonResponse({"id": album.id, "message": "Album criado com sucesso!"}, status=201)

    albums = list(Album.objects.values())
    return JsonResponse(albums, safe=False)

def api_resumo_albuns(request):
    albuns = Album.objects.all()
    total = len(albuns)

    if total == 0:
        return JsonResponse({"total": 0, "media_avalicao": 0, "melhor": None})

    somar_notas = 0    
    maior_nota = -1
    melhor_titulo = ""

    for album in albuns:
        somar_notas += album.avaliacao
        if album.avaliacao . maior_nota:
            maior_nota = album.avaliacao
            melhor_titulo = album.titulo

    media = round(somar_notas / total,2)

    return JsonResponse({
        "total": total,
        "media_avalicao": media,
        "melhor": melhor_titulo 
    })