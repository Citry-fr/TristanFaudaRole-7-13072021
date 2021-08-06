# OpenClassroom projet 7 : So Groupomania

## Lancement serveur Front-End et Back-End

Ouvrez deux terminals a la racine du projet.

### Front-end

Effectuer les commandes suivante dans votre premier terminal :

```
cd frontend/app
npm install
npm run serve
```

Le serveur front-end est maintenant lancé à l'adresse : http://localhost:8080/

### Back-end

Vérifier si wamp est bien installer sur votre machine avec mysql.

Effectuer les commandes suivante dans votre deuxième terminal :

```
cd backend/
npm install
node server
```

Le serveur back-end est maintenant lancé à l'adresse : http://localhost:3308/

## Pour effectuer des tests

Pour effectuer des test avec l'application, renommer le fichier **.env.example** en **.env** dans le backend.

Remplissez le fichier **.env** avec les éléments suivants :

```
DB_NAME=groupomania
DB_USER=root
DB_HOST=localhost
DB_DIALECT=mysql
DB_PORT=3308

TK=49be7812dc94c6bb095fee2391615336
```
