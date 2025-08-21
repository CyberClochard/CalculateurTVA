# Section Articles - Calculateur HT/TTC

## 🎯 Objectif
Créer une section "Articles" ou "Blog" dans l'application avec 5 articles optimisés SEO sur la TVA, incluant des liens internes vers le calculateur et un design cohérent.

## 📚 Articles créés

### 1. **Comment calculer la TVA en 2024 : Guide complet**
- **Fichier :** `src/pages/articles/CalculerTVA2024.jsx`
- **Route :** `/articles/calculer-tva-2024`
- **Catégorie :** Guide
- **Temps de lecture :** 8 min
- **Contenu :** Guide complet sur le calcul de la TVA en 2024, taux en vigueur, exemples pratiques
- **SEO :** Schema.org Article, meta tags optimisés, liens internes

### 2. **TVA 20% : Tout savoir sur le taux normal**
- **Fichier :** `src/pages/articles/TVA20TauxNormal.jsx`
- **Route :** `/articles/tva-20-taux-normal`
- **Catégorie :** Taux TVA
- **Temps de lecture :** 6 min
- **Contenu :** Explication complète du taux normal 20%, secteurs concernés, formules de calcul
- **SEO :** Schema.org Article, meta tags optimisés, liens internes

### 3. **TVA réduite 10% et 5.5% : Secteurs concernés**
- **Fichier :** `src/pages/articles/TVAReduite1055.jsx`
- **Route :** `/articles/tva-reduite-10-5-5`
- **Catégorie :** Taux TVA
- **Temps de lecture :** 7 min
- **Contenu :** Guide des taux réduits, secteurs d'activité, cas d'application
- **SEO :** Schema.org Article, meta tags optimisés, liens internes

### 4. **HT vs TTC : Comprendre la différence en comptabilité**
- **Fichier :** `src/pages/articles/HTVsTTCComptabilite.jsx`
- **Route :** `/articles/ht-vs-ttc-comptabilite`
- **Catégorie :** Comptabilité
- **Temps de lecture :** 8 min
- **Contenu :** Différence entre HT et TTC, impact comptable, formules de calcul
- **SEO :** Schema.org Article, meta tags optimisés, liens internes

### 5. **Déclaration TVA 2024 : Guide complet et obligations**
- **Fichier :** `src/pages/articles/DeclarationTVA2024.jsx`
- **Route :** `/articles/declaration-tva-2024`
- **Catégorie :** Obligations
- **Temps de lecture :** 9 min
- **Contenu :** Calendrier des déclarations, obligations légales, formulaires
- **SEO :** Schema.org Article, meta tags optimisés, liens internes

## 🏗️ Architecture technique

### **Structure des fichiers**
```
src/
├── pages/
│   ├── Articles.jsx                    # Page principale des articles
│   └── articles/                       # Dossier des articles individuels
│       ├── CalculerTVA2024.jsx
│       ├── TVA20TauxNormal.jsx
│       ├── TVAReduite1055.jsx
│       ├── HTVsTTCComptabilite.jsx
│       └── DeclarationTVA2024.jsx
└── App.jsx                             # Routes ajoutées
```

### **Routes ajoutées dans App.jsx**
```jsx
<Route path="/articles" element={<Articles />} />
<Route path="/articles/calculer-tva-2024" element={<CalculerTVA2024 />} />
<Route path="/articles/tva-20-taux-normal" element={<TVA20TauxNormal />} />
<Route path="/articles/tva-reduite-10-5-5" element={<TVAReduite1055 />} />
<Route path="/articles/ht-vs-ttc-comptabilite" element={<HTVsTTCComptabilite />} />
<Route path="/articles/declaration-tva-2024" element={<DeclarationTVA2024 />} />
```

### **Footer ajouté au calculateur**
- Liens vers la section Articles
- Liens vers la FAQ
- Liens vers les mentions légales et politique de confidentialité
- Design cohérent avec l'application

## 🔍 Optimisations SEO implémentées

### **Schema.org Article pour chaque article**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Titre de l'article",
  "description": "Description optimisée",
  "author": { "@type": "Organization", "name": "Calculateur-TVA" },
  "publisher": { "@type": "Organization", "name": "Calculateur-TVA" },
  "datePublished": "2024-12-XX",
  "dateModified": "2024-12-XX",
  "articleSection": "Catégorie",
  "keywords": "Mots-clés ciblés",
  "wordCount": XXXX
}
```

### **Schema.org ItemList pour la page Articles**
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Articles sur la TVA et la comptabilité",
  "numberOfItems": 5,
  "itemListElement": [...]
}
```

### **Meta tags optimisés**
- Title unique pour chaque article
- Description ciblée avec mots-clés
- Open Graph et Twitter Cards
- Canonical URLs
- Robots meta tags

### **Liens internes**
- Chaque article contient des liens vers le calculateur
- Liens entre articles connexes
- Liens vers la FAQ
- Navigation cohérente

## 🎨 Design et UX

### **Design cohérent**
- Même palette de couleurs que le calculateur
- Gradients et effets visuels similaires
- Typographie et espacement cohérents
- Composants réutilisables

### **Responsive design**
- Grille adaptative pour les articles
- Navigation mobile optimisée
- Images et contenus responsifs

### **Accessibilité**
- ARIA labels et roles
- Navigation au clavier
- Contraste et lisibilité optimisés
- Structure sémantique HTML

## 📊 Impact attendu

### **SEO**
- Amélioration du référencement sur les mots-clés TVA
- Contenu riche et informatif pour Google
- Structure de données Schema.org
- Liens internes pour la circulation du PageRank

### **Engagement utilisateur**
- Contenu éducatif de qualité
- Navigation intuitive entre les sections
- Liens directs vers le calculateur
- Informations pratiques et utiles

### **Autorité du domaine**
- Positionnement comme expert TVA
- Contenu de référence sur le sujet
- Crédibilité renforcée

## 🚀 Prochaines étapes recommandées

### **Contenu**
- Ajouter des images et infographies
- Créer des vidéos explicatives
- Développer des cas d'usage sectoriels

### **Technique**
- Implémenter un système de recherche
- Ajouter des filtres par catégorie
- Système de commentaires et interactions
- Newsletter pour les nouveaux articles

### **Marketing**
- Promotion sur les réseaux sociaux
- Collaboration avec des experts-comptables
- Guest posting sur des sites spécialisés
- Webinaires et formations

## ✅ Validation

### **Tests effectués**
- ✅ Création des 5 articles avec contenu complet
- ✅ Routes configurées dans App.jsx
- ✅ Schema.org Article pour chaque article
- ✅ Meta tags optimisés
- ✅ Liens internes fonctionnels
- ✅ Footer ajouté au calculateur
- ✅ Design cohérent avec l'application

### **Fonctionnalités**
- ✅ Navigation entre articles
- ✅ Liens vers le calculateur
- ✅ Structure SEO optimisée
- ✅ Design responsive
- ✅ Accessibilité de base

La section Articles est maintenant complètement fonctionnelle et optimisée pour le SEO, avec un contenu riche et des liens internes vers le calculateur HT/TTC. 