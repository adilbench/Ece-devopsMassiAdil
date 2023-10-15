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
- GitHub/GitHub Desktop

# Laboratoire sur les Tests Continus et le Développement Piloté par les Tests (TDD)
Ce laboratoire a pour objectif de vous permettre de pratiquer les tests continus et le développement piloté par les tests (TDD) en travaillant sur une application API utilisateur. Voici comment vous pouvez commencer avec ce projet.

#Prérequis
Avant de commencer, assurez-vous d'avoir configuré les éléments suivants sur votre environnement de développement :

Base de données Redis : Vous devez avoir installé et démarré la base de données Redis en suivant les instructions d'installation adaptées à votre plateforme. Vous pouvez trouver ces instructions dans la documentation officielle de Redis.

IDE ou éditeur de texte : Vous pouvez utiliser l'éditeur de code de votre choix, tel que Atom ou VS Code.

Node.js : Assurez-vous d'avoir Node.js installé sur votre système. Vous pouvez le télécharger depuis le site officiel de Node.js.

Mise en Route
Suivez ces étapes pour commencer avec le projet de laboratoire :

Clonez le dépôt du projet :

shell
Copy code
git clone https://github.com/adilbench/Ece-devopsMassiAdil.git
cd lab3
Structure du Projet
# Voici un aperçu de la structure du lab3 :

app.js : Le fichier principal de l'application.
index.js : Le point d'entrée de l'application.
routes/createUser.js : Le fichier de gestion de la création d'utilisateurs.
routes/getUser.js : Le fichier de gestion de la récupération d'utilisateurs.
Objectifs du Laboratoire
Utiliser l'application API Utilisateur préparée et exécuter des tests : Vous pouvez exécuter des tests pour vous assurer du bon fonctionnement de l'application en utilisant la commande npm test.

Implémenter une fonctionnalité GET utilisateur en utilisant la méthodologie TDD : Suivez les étapes du laboratoire pour créer la fonctionnalité GET utilisateur en utilisant le développement piloté par les tests (TDD).



#  Laboratoire CI/CD avec GitHub Actions et Heroku
Ce  laboratoire a pour objectif de vous initier à l'intégration continue (CI) et au déploiement continu (CD) en utilisant GitHub Actions et Heroku. Vous apprendrez à automatiser le processus de construction, de test et de déploiement d'une application Node.js sur Heroku.

# Objectifs
Configurer un pipeline d'intégration continue (CI) avec GitHub Actions.
Automatiser le déploiement continu (CD) de l'application sur Heroku.
Tester l'application en direct sur Heroku.
Prérequis
Un compte GitHub.
Un compte Heroku.
Une application Node.js à déployer (vous pouvez utiliser l'application du laboratoire précédent).
Un projet Git avec un référentiel sur GitHub.
Configuration Initiale
Si vous n'avez pas déjà un référentiel GitHub contenant votre application Node.js, suivez ces étapes initiales :

Créez un référentiel Git local pour votre projet et committez tous les fichiers de votre application.

Créez un référentiel distant sur GitHub et liez-le à votre référentiel local. Utilisez les commandes Git suivantes pour effectuer cette opération :

shell
Copy code
git remote add origin <URL_DU_REP_GITHUB>
git branch -M main
git push -u origin main
# Partie 1. Intégration Continue avec GitHub Actions
#Configuration du Flux de Travail CI
Créez un fichier de configuration de flux de travail CI en utilisant la documentation de GitHub Actions. Placez ce fichier dans le répertoire .github/workflows de la racine de votre référentiel.

Assurez-vous de commettre et de pousser le fichier de configuration de flux de travail sur GitHub.

Vérifiez si votre flux de travail CI fonctionne en consultant la page "Actions" de votre référentiel GitHub. Assurez-vous que les tests sont exécutés avec succès.

Améliorez votre flux de travail CI pour connecter votre application Node.js à un service Redis en suivant la documentation sur les conteneurs de service. Cela vous permettra de tester la connexion à Redis dans le cadre de votre flux de travail CI.

# Pratique du Cycle de Développement
Suivez un flux de travail de développement logiciel régulier pour compléter les instructions du laboratoire. Créez une nouvelle branche pour chaque tâche ou fonctionnalité, apportez des modifications, effectuez des commits et créez des Pull Requests.

Créez une Pull Request vers la branche principale de votre référentiel sur GitHub. Attendez que GitHub Actions teste la Pull Request et fusionnez-la si les tests réussissent.

Explorez les journaux de GitHub Actions sur la page "Actions" de GitHub pour voir les détails des tests exécutés.

# Partie 2. Déploiement Continu avec Heroku
#Configuration de l'Environnement Heroku
Créez un compte Heroku si vous n'en avez pas déjà un. Connectez-vous à votre compte Heroku.

Sur votre tableau de bord Heroku, créez une nouvelle application Heroku.

Sous l'onglet "Déployer", synchronisez votre application Heroku avec votre référentiel GitHub. Activez l'intégration GitHub.

Ajoutez le service Redis à votre déploiement Heroku en utilisant l'add-on Heroku Redis. Notez que cela peut nécessiter des informations de carte de crédit, mais l'ajout du service Redis est généralement gratuit pour les petits projets.

#Configuration du Flux de Travail de Déploiement Heroku
Configurez un flux de travail GitHub Actions pour déployer automatiquement votre application sur Heroku en suivant le guide fourni.

Suivez le même flux de travail de développement logiciel que dans la première partie. Créez des branches, apportez des modifications, créez des Pull Requests et attendez les tests CI avant de fusionner.

#Test de votre Domaine Public sur Heroku
Après que GitHub Actions ait déployé votre application sur Heroku avec succès, accédez à votre domaine public Heroku pour tester votre application en direct.

Assurez-vous que votre application fonctionne correctement sur Heroku, y compris la connexion à Redis.
