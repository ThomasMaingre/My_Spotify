# My_Spotify 🎧📀💃🏼🕺🏼

## Introduction

Nous avons eu l’occasion de créer le lecteur multimédia Spotify pour un rush en groupe en utilisant le framework React.

## Installation

1. Clonez ce dépôt sur votre machine locale.
2. Assurez-vous d'avoir installé Docker sur votre machine. Vous pouvez télécharger Docker à partir du site officiel de Docker :
 ```php
   https://www.docker.com/get-started. 
   ```
3. Pour configurer votre API, une image docker est fourni sur ce github nommé "my_spotify_db.sql". Si elle est configurée selon son README,
vous devriez pouvoir accéder à une API à l’adresse localhost:8000.
4. Dans le répertoire du projet, exécutez la commande suivante pour installer les dépendances nécessaires :

```php
npm install
```

## Lancement

Après avoir installé les dépendances, exécutez la commande suivante pour lancer l'application :

```php
npm start
```

## Présentation du projet

L’objectif principal de ce projet était de créer une application de streaming musical en ligne via une API qui nous était fournie, inspirée de Spotify, en utilisant React. J’ai travaillé sur le développement des fonctionnalités essentielles telles que la lecture de musique et la recherche des musiques, des artistes ou encore des albums. J’ai veillé à ce que l’application soit réactive, performante et offre une expérience utilisateur fluide et agréable tout en mettant l’accent sur une interface utilisateur conviviale.

- Page d'accueil avec affichage aléatoire de 8 albums.
- Page Albums avec la liste des albums.
- Page Albums avec l'album sélectionné, possibilité d'écouter les chansons de l'album en question.
- Page Artiste avec la liste des artistes.
- Page Artiste avec l'artiste sélectionné, description de l'artiste et son ou ses albums lui correspondant.
- Page Genre avec la liste des genres musicaux.
- Page Recherche pour rechercher un Albums, un Artiste ou un Genre selon le filtre que vous choisissez.


