# My_Spotify 🎧📀💃🏼🕺🏼

## Introduction

Nous avons eu l’occasion de créer le lecteur multimédia Spotify pour un rush en groupe en utilisant le framework React.

## Installation

1. Clonez ce dépôt sur votre machine locale.
2. Assurez-vous d'avoir installé Docker sur votre machine. Vous pouvez télécharger Docker à partir du site officiel de Docker :
 ```php
   https://www.docker.com/get-started. 
   ```
3. Dans le répertoire du projet, exécutez la commande suivante pour installer les dépendances nécessaires :

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

- Page d'inscription.
- Page de connexion.
- Une fois connecté, ces deux pages ne seront plus visibles.
- L'utilisateur peut sélectionner une image à partir de la galerie de son smartphone ou prendre une photo avec l'appareil photo.
- Possibilité d'activer le flash, de retourner la caméra.
- Une fois la photo prise, possibilité de reprendre la photo, de la sauvegarder dans sa galerie et d'envoyer la photo.
- Affichage de la liste des utilisateurs présent dans l'API.
- Sélection de la personne à qui envoyer l'image et choix de la durée d'affichage.
- Une section profil avec la possibilité de se déconnecter et recevoir des photos des autres utilisateurs.
- Affichage du nom de la personne qui vous a envoyé la photo ainsi que la photo qu'il a envoyé
- Une fois le temps écoulé, la photo disparaît et est supprimée de tous les supports de stockage. Cela est également signalé à l'API.

## API
L'application utilise l'API suivante : https://mysnapchat.epidoc.eu
