Nomes dos integrantes:
Kaic Brandão De Oliveira/ RGM 11261105353
Felipe Ribeiro/ RGM 11261104953
Luís Henrique Aguiar Santos/ RGM 11264404110
José Danilo da Silva Neto/ RGM 11261105206

Para subir o backend em um terminal:

esteja dentro da pasta escola (cd escola);
pip install django django-cors-headers (caso dê erro no windows, utilize py -m antes do comando);
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver

Para subir o frontend em outro terminal:
esteja dentro da pasta frontend dentro de escola (cd escola e depois cd frontend);
npm install (pra carregar as dependências do vite);
npm run dev
