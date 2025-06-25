# 🎨 KzuUx

> Design System SCSS modulaire, adaptable, accessible – version 1

KzuUx est un **framework SCSS** moderne conçu pour créer rapidement des interfaces web cohérentes et personnalisables. Il repose sur des **tokens de design**, des **composants modulaires** et une structure claire pour être facilement intégré dans tout projet frontend.

---

## 📦 Structure du framework

```
packages/kzu-ux/
├── scss/
│   ├── tokens/         # Design tokens : couleurs, espacements, typographie, etc.
│   ├── base/           # Reset CSS, layout, typographie de base
│   ├── mixins/         # Mixins SCSS utilitaires
│   ├── components/     # Boutons, alertes, cartes, formulaires, etc.
│   ├── _global.scss    # Point de chargement global
│   └── kzuux.scss      # Entrée principale à importer
```

---

## 🚀 Installation

1. Clone le monorepo contenant `kzu-ux`
2. Dans ton fichier principal SCSS :

```scss
@use '../../packages/kzu-ux/scss/kzuux.scss' as *;
```

> Utilise bien `@use` (et non `@import`) avec un alias ou `as *`.

---

## ✨ Fonctionnalités

- 🎯 Design Tokens centralisés (couleurs, typo, spacing…)
- 🧱 Composants réutilisables (`.btn`, `.card`, `.alert`, etc.)
- 🎨 Personnalisation facile via variables SCSS
- 🧑‍🦯 Accessibilité en cours de développement
- 🧑‍🎨 Thèmes dynamiques (WIP)

---

## 🧩 Exemples d'utilisation

### Bouton

```html
<button class="btn -solid">Valider</button>
<button class="btn -ghost">Annuler</button>
```

### Carte

```html
<div class="card">
  <h3 class="typo-h3">Titre</h3>
  <p class="typo-body">Contenu</p>
</div>
```

### Formulaire

```html
<div class="form-group">
  <label for="email">Email</label>
  <input id="email" type="email" />
</div>
```

---

## 📚 Documentation

La documentation complète se trouve dans :

📄 [`packages/kzu-ux/Kzuux Documentation.md`](./packages/kzu-ux/Kzuux%20Documentation.md)

---

## 🛡️ Licence

KzuUx est libre d'utilisation dans tous projets. Forke-le, adapte-le, améliore-le comme bon te semble !

---

## 🔧 À venir (Roadmap)

- [ ] Système de thème CSS (`light`, `dark`, `zen`, etc.)
- [ ] Support complet des préférences utilisateur (daltonisme, motion-safe)
- [ ] Utilitaires SCSS dynamiques (`grid`, `flex`, `utils`…)

---

## 💬 Contact

Créé par [@Maokzu](https://github.com/maokzu) – suggestions & PR bienvenues !
