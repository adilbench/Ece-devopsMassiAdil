# Ece-devopsMassiAdil
# Ece-devopsMassiAdil
Nom du module :  Devops
Nom et prenom du groupe : 
                        - Rahem Massinissa
                        - Adil Becheqroune 

Specialite : Msc Management de la Cybersecurite 

Intraduction Devops : Le terme "DevOps" est une contraction de "Development" (Développement) et "Operations" (Exploitation). Il s'agit d'une approche de développement logiciel qui vise à améliorer la collaboration entre les équipes de développement (Dev) et d'exploitation (Ops) au sein d'une organisation. L'objectif principal du DevOps est d'automatiser et d'optimiser le processus de livraison logicielle, de manière à accélérer le déploiement des applications tout en garantissant leur stabilité et leur fiabilité.

Objectif du Devops: Les objectifs du DevOps sont multiples et visent à améliorer le processus de développement, de déploiement et d'exploitation des logiciels au sein d'une organisation. 

Technologies utilisée:
- Vs code IDE
- VMware virtualisation 
- Ubuntu distribution Linux 
- NodeJS 
- GitHub/GitHub Desktopmassinaoierqhd<

## Laboratoire sur les Tests Continus

## Objectifs

Ce projet de laboratoire a pour but de me permettre de pratiquer les tests continus et le développement piloté par les tests (TDD) en travaillant sur une application API utilisateur. Mes objectifs principaux sont les suivants :

1. Utiliser l'application API utilisateur préparée et exécuter des tests.
2. Implémenter une fonctionnalité GET utilisateur en utilisant la méthodologie TDD.

## Prérequis

Avant de commencer, j'ai configuré les éléments suivants sur mon environnement de développement :

1. **Base de données Redis** : J'ai installé et démarré la base de données Redis en suivant les instructions d'installation pour différentes plates-formes disponibles dans la [documentation officielle Redis](https://redis.io/topics/quickstart).

2. **IDE ou éditeur de texte** : J'ai installé un éditeur de code de mon choix, tel que [Atom](https://atom.io/) ou [VS Code](https://code.visualstudio.com/).

3. **Node.js** : J'ai installé Node.js depuis le [site officiel](https://nodejs.org/).

## Pour Commencer

J'ai suivi ces étapes pour commencer avec le projet de laboratoire :

1. J'ai cloné le dépôt :

   ```shell
   git clone https://github.com/mon-nom-utilisateur/laboratoire-tests-continus.git
   cd laboratoire-tests-continus/lab
J'ai installé les dépendances de l'application :

shell
Copy code
npm install
J'ai exécuté les tests pour m'assurer que tout était configuré correctement :

shell
Copy code
npm test
J'ai démarré l'application :

shell
Copy code
npm start
1. Utiliser l'Application API Utilisateur Préparée et Exécuter des Tests
Dans cette section, j'ai travaillé avec l'application API utilisateur existante. J'ai suivi les instructions fournies dans le dossier du laboratoire pour exécuter l'application et ses tests.

2. Implémenter la Fonctionnalité GET Utilisateur (TDD)
Dans cette section, j'ai implémenté une fonctionnalité GET utilisateur en utilisant la méthodologie du développement piloté par les tests (TDD). J'ai suivi ces étapes :

J'ai créé le contrôleur get utilisateur, y compris deux tests unitaires (dans lab/test/user.controller.js) :

Obtenir un utilisateur par nom d'utilisateur.
Assurer que je ne peux pas obtenir un utilisateur s'il n'existe pas.
J'ai implémenté la méthode du contrôleur (dans lab/src/controllers/user.js).

J'ai créé une méthode GET utilisateur pour l'API REST, y compris deux tests d'API (dans lab/test/user.router.js) :

Obtenir avec succès un utilisateur.
Assurer que je ne peux pas obtenir un utilisateur s'il n'existe pas.
J'ai défini la route GET utilisateur (dans lab/src/routes/user.js). 


