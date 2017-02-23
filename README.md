# Tp_Madjoh

##TECHNOLOGIES

Ici je travaille en Front-end et Back-end.
J'utilise NodeJS (Expressjs) et pour la vue Ejs et AngularJs.

##INSTALLATION ET LANCEMENT

1 - Récupérer les fichiers sources et les mettre dans un repertoire

2 - Ouvrir le terminal et se positionner à la racine du répertoire

3 - installer toutes les dépendances avec la commande : npm install

4 - Dans le fichier connection.js (chemin : js/services/connection.js)
	se trouve les informations de connexion à la base de donnée.
	Vous pourrez le configurer suivant votre environnement à savoir, le host, user, password. Sinon ces configurations seront utilisées.

5 - Aller sur votre serveur et créer une base de donnée avec le nom : 'worddb'

6 - Ensuite lancer la commande : npm run start

7 - Dans un navigateur, renseigner le nom du serveur et le port en question.
	Pour ma part c'est : localhost:5200
	Vous pouvez modifier le port tout en bas du fichier server.js 

##FONCTIONNEMENT

Au lancement, l'application crée une nouvelle instance de Game.
Ensuite, elle vérifie si la table 'worddb' existe.

* Si la table n'existe pas, alors :
	- elle la crée
	- puis lit le fichier verbe.txt et charge 500 mots dans la base de données.

* Si la table existe, les opérations citées ci-dessus ne sont pas exécutées.

Après on arrive sur la page d'accueil de l'application avec un bouton jouer.
Lorsqu'on clique sur le bouton 'jouer', on génère un id au hasard, et on récupère le mot associé en base de données.

Le mot recupéré est alors traduit en anglais par un service de traduction.
Ensuite, le mot en francais, en anglais, le score, et d'autres informations sont donc transférés à la vue.

Puis, sur la vue, on a le mot en francais qui s'affiche et la première lettre du mot en anglais qui s'affiche
et les autres informations.

Là, un clavier est disponible et on peut cliquer sur une lettre pour remplir le mot cherché ou supprimer une lettre.

Un bouton valider est disponible et lorsqu'on clique dessus, le mot est envoyé au serveur qui le vérifie.
Si le mot est trouvé on incremente le score, sinon on le décremente.

Lorsqu'on a arrive à un score de 0, le jeu se termine avec un message 'Tu as perdu'.
Lorsqu'on a arrive à un score de 20, le jeu se termine avec un message 'Tu as gagné'.

Et enfin on peut recommencer le jeu en cliquant sur le bouton 'jouer'.

##TEMPS DE REALISATION

Sachant que j'effectue un stage actuellement, ce n'est que le soir que j'ai un peu de temps pour travailler.
Du coup, je peux dire que je l'ai réalisé en 5 heures de temps, peut être un peu moins.

##AMELIORATION

* UI
	J'aurai pu utiliser un Framework HTML/CSS comme Bootstrap pour avoir les boutons plus jolie,
	et un code encore plus propre.
	
* CODE
	L'organisation de mes fichiers sources pourrait être meilleur, en respectant un pattern MVC par exemple.
	Mais vu que nous somme sur un petit projet, l'interet ne saurait être assez perceptible et utile.
	
	Pour le système de jeu, sur le niveau de difficulté d'un mot. On aurai pu:
	
	- Soit créer 2 tables, une pour les mots difficiles et l'autre pour les mots faciles.
	- Soit diviser la table en deux et attribué par exemple le niveau 'facile' au 200 premiers mots
		de la table, et le reste des mots auront 'difficile' pour niveau.
	
	Je pense faire cela pour améliorer la rapidité et les performances de l'application , car s'il faut tirer
	un nombre au hasard à chaque fois et vérifier que l'on tombe bien sur un mot facile (si c'est un mot facile que nous voulons),
	sinon repéter l'action jusqu'a ce que l'on tombe sur le mot souhaité, cela nous posera clairement un problème de performance.
