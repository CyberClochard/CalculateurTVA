# 🧮 Calculateur HT/TTC - Calcul de TVA en ligne gratuit

Un calculateur moderne et intuitif pour convertir facilement vos montants HT (Hors Taxes) en TTC (Toutes Taxes Comprises) et vice versa, avec calcul automatique de la TVA.

## ✨ Fonctionnalités

- **🔄 Calcul bidirectionnel** : Saisissez HT ou TTC, l'autre se calcule automatiquement
- **📊 Taux de TVA multiples** : Support des taux 20%, 10%, 5.5% et 2.1%
- **🎨 Interface moderne** : Design responsive avec gradients et animations
- **📱 Responsive** : Optimisé pour mobile et desktop
- **♿ Accessible** : Respect des standards d'accessibilité WCAG
- **📋 Copie rapide** : Boutons de copie pour tous les montants
- **✅ Validation** : Gestion des erreurs et formatage automatique
- **🚀 Performance** : Calculs en temps réel sans rechargement

## 🚀 Démarrage rapide

### Prérequis
- Node.js (version 14 ou supérieure)
- npm ou yarn

### Installation

1. **Cloner le repository**
```bash
git clone https://github.com/votre-username/htttchack.git
cd htttchack
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer l'application en mode développement**
```bash
npm start
```

L'application s'ouvrira automatiquement dans votre navigateur à l'adresse [http://localhost:3000](http://localhost:3000).

### Build de production

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `build/`.

## 🛠️ Technologies utilisées

- **React 18** - Framework JavaScript moderne
- **Tailwind CSS** - Framework CSS utilitaire
- **JavaScript ES6+** - Syntaxe moderne
- **HTML5 sémantique** - Accessibilité et SEO
- **CSS3 avancé** - Animations et gradients

## 📱 Utilisation

### Saisie des montants
1. **Champ HT** : Entrez le montant hors taxes
2. **Champ TTC** : Entrez le montant toutes taxes comprises
3. **Calcul automatique** : L'autre montant se calcule instantanément

### Sélection du taux de TVA
- Cliquez sur l'un des boutons : 20%, 10%, 5.5% ou 2.1%
- Le taux par défaut est 20%
- Les calculs se mettent à jour automatiquement

### Copie des valeurs
- Cliquez sur l'icône de copie à côté de chaque montant
- La valeur formatée avec le symbole € est copiée dans le presse-papiers
- Confirmation visuelle "Copié!" pendant 2 secondes

## 🎨 Design et UX

- **Gradients modernes** : Dégradés indigo-purple-pink
- **Animations fluides** : Transitions et micro-interactions
- **Ombres douces** : Effets de profondeur
- **Responsive design** : S'adapte à tous les écrans
- **Thème cohérent** : Palette de couleurs harmonieuse

## ♿ Accessibilité

- **Navigation clavier** : Support complet des raccourcis clavier
- **Lecteurs d'écran** : ARIA labels et rôles appropriés
- **Contraste élevé** : Respect des standards de lisibilité
- **Structure sémantique** : HTML5 avec hiérarchie claire
- **Messages d'erreur** : Alertes vocales pour les erreurs

## 📊 SEO et Performance

- **Meta tags optimisés** : Title, description, keywords
- **Open Graph** : Partage optimisé sur les réseaux sociaux
- **Structured Data** : Schema.org pour les moteurs de recherche
- **Google Analytics** : Tracking des utilisations et performances
- **Performance** : Chargement rapide et optimisations

## 🔧 Configuration

### Variables d'environnement

Créez un fichier `.env` à la racine du projet :

```env
REACT_APP_GA_TRACKING_ID=votre_id_google_analytics
REACT_APP_SITE_URL=https://votre-domaine.com
```

### Google Analytics

1. Remplacez `GA_MEASUREMENT_ID` dans `public/index.html`
2. Ou utilisez la variable d'environnement `REACT_APP_GA_TRACKING_ID`

## 📁 Structure du projet

```
htttchack/
├── public/                 # Fichiers publics
│   ├── index.html         # Page HTML principale
│   ├── manifest.json      # Configuration PWA
│   └── favicon.ico        # Icône du site
├── src/                   # Code source
│   ├── components/        # Composants React
│   │   └── CalculateurHTTTC.js
│   ├── utils/            # Utilitaires
│   │   └── analytics.js  # Configuration GA
│   ├── App.js            # Composant principal
│   ├── index.js          # Point d'entrée
│   └── index.css         # Styles globaux
├── package.json           # Dépendances et scripts
├── .gitignore            # Fichiers ignorés par Git
└── README.md             # Documentation
```

## 🚀 Déploiement

### GitHub Pages

1. **Build de production**
```bash
npm run build
```

2. **Déployer sur GitHub Pages**
```bash
npm install -g gh-pages
npm run deploy
```

### Vercel

1. **Installer Vercel CLI**
```bash
npm install -g vercel
```

2. **Déployer**
```bash
vercel
```

### Netlify

1. **Build et déployer**
```bash
npm run build
```

2. **Glisser-déposer** le dossier `build/` sur Netlify

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment procéder :

1. **Fork** le projet
2. **Créer** une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. **Commit** vos changements (`git commit -m 'Add some AmazingFeature'`)
4. **Push** vers la branche (`git push origin feature/AmazingFeature`)
5. **Ouvrir** une Pull Request

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

- **Email** : contact@htttchack.com
- **Issues** : [GitHub Issues](https://github.com/votre-username/htttchack/issues)
- **Documentation** : [Wiki du projet](https://github.com/votre-username/htttchack/wiki)

## 🙏 Remerciements

- **React** pour le framework
- **Tailwind CSS** pour le design
- **Create React App** pour la configuration initiale
- **Google Analytics** pour les insights

---

**⭐ Si ce projet vous plaît, n'oubliez pas de le star sur GitHub !**

*Développé avec ❤️ par l'équipe HTTTC Hack*
