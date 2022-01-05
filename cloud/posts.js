const posts = [{
  id: 1,
  title: 'Wordpress',
  body: 'WordPress est un système de gestion de contenu (SGC ou content management system (CMS) en anglais) gratuit, libre et open-source. Ce logiciel écrit en PHP repose sur une base de données MySQL et est distribué par la fondation WordPress.org. Les fonctionnalités de WordPress lui permettent de créer et gérer différents types de sites Web : site vitrine, site de vente en ligne, site applicatif, blog, portfolio, site institutionnel...'
}, {
  id: 2,
  title: 'Twitter',
  body: 'Twitter est un réseau social de microblogage géré par Twitter Inc. Il permet à un utilisateur d’envoyer gratuitement des micromessages, appelés tweets ou gazouillis6, sur internet, par messagerie instantanée ou par SMS. Ces messages sont limités à 280 caractères.'
}, {
  id: 3,
  title: 'Dropbox',
  body: 'Dropbox est un service de stockage et de partage de copies de fichiers locaux en ligne proposé par Dropbox, Inc., entreprise localisée à San Francisco, en Californie.  Dropbox fournit des logiciels client pour Microsoft Windows, Mac OS X, GNU/Linux, Android, iOS, BlackBerry OS, Windows Phone. Il existe des portages non officiels pour Symbian et MeeGo.'
}, {
  id: 4,
  title: 'Linkedin',
  body: 'Linkedin est un réseau social professionnel en ligne créé en 2002 à Mountain View en Californie. Elle est valorisée à 20 milliards de dollars en 2015.  Le 13 juin 2016, Microsoft annonce le rachat du réseau social pour un montant de 26,2 milliards de dollars américains.'
}, {
  id: 5,
  title: 'Google Drive',
  body: 'Google Drive ou Google Disque au Canada, est un service de stockage et de partage de fichiers dans le cloud lancé par la société Google. Google Drive, qui regroupe Google Docs, Sheets, Slides et Drawings, est une suite bureautique permettant de modifier des documents, des feuilles de calcul, des présentations, des dessins, des formulaires, etc. Les utilisateurs peuvent rechercher les fichiers partagés publiquement sur Google Drive.'
}, {
  id: 6,
  title: 'gmail',
  body: 'Gmail (abréviation de Google Mail) (couramment prononcé /ʒemɛjl/ en français européen, en anglais américain est un service de messagerie électronique, gratuit pour les particuliers, proposé par Google. Les messages reçus sur un compte Gmail peuvent être lus via un client de messagerie, une application mobile ou avec un navigateur web. Certaines fonctionnalités du service ne sont cependant accessibles qu’à travers le navigateur web.'
}, {
  id: 7,
  title: 'Evernote',
  body: 'Evernote est un logiciel qui permet d’enregistrer des informations, sous forme de notes, images, vidéos, ou pages web. Il est utilisable dans plusieurs environnements, avec de nombreux appareils et/ou plateformes différentes. Une « note » peut être un texte mis en forme, une page web (entière ou un extrait), une photo, un mémo vocal ou une note manuscrite et peut également inclure des pièces jointes.'
}, {
  id: 8,
  title: 'Messenger',
  body: 'Facebook Messenger est un système de messagerie instantanée créé par la société Facebook (aujourd’hui Meta), et incorporé aux réseaux sociaux Facebook et Instagram. Disponible sous Windows et sous divers systèmes dexploitation mobile, permet aux membres du réseau social de dialoguer avec leurs contacts sans être forcément connectés au site web.'
}, {
  id: 9,
  title: 'Slack',
  body: 'Slack est une plateforme de communication collaborative propriétaire (SaaS) ainsi quun logiciel de gestion de projets créé par Stewart Butterfield, Eric Costello, Cal Henderson et Serguei Mourachov1 en août 2013 et officiellement lancée en février 2014. Elle appartient au groupe Salesforce depuis décembre 2020.'
}, {
  id: 10,
  title: 'Delicious',
  body: 'delicious ou del.icio.us, était un site web social permettant de sauvegarder et de partager ses marque-pages Internet et de les classer selon le principe de folksonomie par des mots clés (ou tags). Il fut créé fin 2003 par Joshua Schachter dans le but originel de sauvegarder ses marque-pages personnels. Le nom de domaine de del.icio.us est destiné à être lu : delicious (délicieux en français).'
}, {
  id: 11,
  title: 'Photopea',
  body: 'Photopea est un logiciel propriétaire de retouche et de traitement matricielles et vectorielles. Disponible uniquement en ligne, le logiciel revendique 1,5 million dutilisateurs en octobre 2018. Il supporte la plupart des formats, y compris les fichiers au format PSD ainsi que ceux issus de Sketch ou de GIMP.'
}, {
  id: 12,
  title: 'SketchUp',
  body: 'SketchUp est un logiciel de modélisation 3D et de cartographie orienté vers larchitecture. Initialement édité par la société @Last Software (racheté par Google ensuite), ce logiciel se caractérise par des outils simples (rotation, extrusion, déplacement, etc.), qui en font un logiciel de 3D très différent des modeleurs 3D classiques. Il a été racheté en 2012 par la société Trimble.'
}, {
  id: 13,
  title: 'Spotify',
  body: 'Spotify est un service suédois de streaming musical sous la forme dun logiciel propriétaire et dun site web. Cette plateforme de distribution numérique permet une écoute quasi instantanée de fichiers musicaux3. Le catalogue peut être parcouru par artiste ou par album, et également grâce à une fonctionnalité de liste de lecture personnalisée.'
}, {
  id: 14,
  title: 'Trello',
  body: 'Trello est un outil de gestion de projet en ligne, lancé en septembre 2011 et inspiré par la méthode Kanban de Toyota. Il repose sur une organisation des projets en planches listant des cartes, chacune représentant des tâches. Les cartes sont assignables à des utilisateurs et sont mobiles dune planche à lautre, traduisant leur avancement.'
}, {
  id: 15,
  title: 'Discord',
  body: 'Discord est un logiciel propriétaire gratuit de VoIP et de messagerie instantanée. Il fonctionne sur les systèmes d’exploitation Windows, macOS, Linux, Android, iOS ainsi que sur les navigateurs web. La plateforme comptabilise le 21 juillet 2019 plus de 250 millions dutilisateurs. En 2019, l’entreprise emploie 165 salariés à San Francisco et est valorisée à 3,5 milliards de dollars.'
}, {
  id: 16,
  title: 'VLC',
  body: 'VLC media player (VLC) est un lecteur multimédia, libre et gratuit issu du projet VideoLAN. Ce logiciel multiplateforme, créé et maintenu en France, fonctionne entre autres sous Windows, GNU/Linux, BSD, macOS, iOS, Android, soit en tout près de 20 plates-formes. Il est distribué sous GPL et disponible dans 69 langues.'
}, {
  id: 17,
  title: 'NordVPN',
  body: 'NordVPN est un prestataire de services de réseau privé virtuel (VPN). Il propose des applications de bureau pour Microsoft Windows, macOS et Linux. Des applications mobiles sont disponibles pour Android et iOS ainsi que pour Android TV. La configuration manuelle est notamment disponible pour les routeurs sans fils, les périphériques de serveur de stockage en réseau et autres plateformes.'
}, {
  id: 18,
  title: 'Docker',
  body: 'Docker est une plateforme permettant de lancer certaines applications dans des conteneurs logiciels.'
}, {
  id: 19,
  title: 'Oracle VM',
  body: 'Oracle VM VirtualBox (anciennement VirtualBox) est un logiciel libre de virtualisation publié par Oracle.'
}, {
  id: 20,
  title: 'Notion',
  body: 'Notion est une application de prise de notes, de bases de données, des tableaux Kanban, de wikis, de calendriers et de rappels.  Ce logiciel peut être utilisé pour un usage individuel ou en collaboration.'
}, {
  id: 21,
  title: 'Visual Studio Code',
  body: 'Visual Studio Code est un éditeur de code extensible développé par Microsoft pour Windows, Linux et macOS2. Les fonctionnalités incluent la prise en charge du débogage, la mise en évidence de la syntaxe, la complétion intelligente du code, les snippets, la refactorisation du code et Git intégré. Les utilisateurs peuvent modifier le thème, les raccourcis clavier, les préférences et installer des extensions qui ajoutent des fonctionnalités supplémentaires.'
}, {
  id: 22,
  title: 'Avast',
  body: 'Avast Antivirus est un logiciel antivirus édité par la société Avast Software (anciennement Alwil Software) située à Prague en République tchèque. Cest un logiciel propriétaire comportant une version gratuite pour une utilisation personnelle et non commerciale. En juin 2019, Avast compte, selon son éditeur, 435 millions dutilisateurs actifs à travers le monde répartis dans 184 pays. Il est disponible en 46 langues.'
}, {
  id: 23,
  title: 'CCcleaner',
  body: 'CCleaner (abréviation de Crap Cleaner) est un gratuiciel permettant doptimiser le fonctionnement dun ordinateur muni du système dexploitation Windows (ou Mac OS / OS X, mais avec des fonctionnalités réduites) et de protéger la vie privée des utilisateurs.'
}, {
  id: 24,
  title: 'GameRanger',
  body: 'GameRanger est un logiciel qui fournit un service internet destiné aux ordinateurs de type Macintosh (Mac OS et macOS) et PC sous Windows, développé par GameRanger Technologies. GameRanger permet de jouer en ligne à des jeux multijoueurs et propose également plusieurs fonctionnalités comme un chat et un système de communication.'
}, {
  id: 25,
  title: 'Adobe Reader',
  body: 'Le programme Adobe Acrobat Reader DC (auparavant appelé Adobe Acrobat Reader, puis Adobe Reader) est disponible gratuitement sur le site Web dAdobe et permet laffichage et limpression des fichiers PDF. Les nombreux programmes commerciaux de la gamme Acrobat permettent deffectuer quelques modifications minimales et dajouter des fonctionnalités aux documents PDF (formulaire PDF par exemple). En outre, ils sont fournis avec dautres modules comprenant notamment un pilote dimprimante pour créer des fichiers PDF à partir dapplications Macintosh, Microsoft Windows et GNU/Linux.'
}, {
  id: 26,
  title: 'Winrar',
  body: 'WinRAR est un logiciel propriétaire de compression de données développé par le russe Eugene Roshal. Il est gratuit en version dessai mais une version payante et complète existe.'
}, {
  id: 27,
  title: 'Heidi SQL',
  body: 'HeidiSQL est un outil dadministration de base de données possédant un éditeur SQL et un constructeur de requête. Il a été développé et optimisé pour être utilisé avec le SGBD relationnel MySQL disponible commercialement ou gratuitement.'
}, {
  id: 28,
  title: 'Telegram',
  body: 'Telegram Messenger est une application de messagerie instantanée sécurisée hébergée dans un cloud. Elle est gratuite, libre et open source, sous licence GPLv3, disponible sur ordiphone (Android, iOS et Windows Phone) ainsi que sur ordinateur (Windows, macOS et Linux). Les utilisateurs peuvent échanger messages, photos, vidéos et documents sans limite de taille5.'
}, {
  id: 29,
  title: 'Genius',
  body: 'Genius (anciennement Rap Genius) est un site web américain lancé en 2009 consacré au départ à lexplication des paroles de chansons rap. Plus tard, en 2014, il élargira son domaine et annotera - le changement sémantique marquant plus dhumilité dans lapproche des textes - les news, la pop, le rap, la country, les sports, la loi, entre autres. Pour tenir ses objectifs le site est rebaptisé Genius en juillet 2014.'
}, {
  id: 30,
  title: 'Booking.com',
  body: 'Booking.com est un site néerlandais qui propose des hébergements dans différents types de propriétés allant de lhôtel au gîte touristique (bed and breakfast) en passant par lappartement. Il est décliné en 43 autres langues.'
}];
  
  module.exports = posts;