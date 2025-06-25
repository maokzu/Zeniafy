# KzuUx – Documentation v1

> Design System SCSS modulaire, adaptable et minimaliste

## ✨ Introduction

KzuUx est un framework SCSS orienté **design system**, conçu pour créer rapidement des interfaces web propres, accessibles, et adaptables. Il fonctionne sur une architecture en **tokens**, **mixins**, **composants** et **thèmes dynamiques** (en cours).

## 🔊 Structure des fichiers

```
packages/kzu-ux/
├── scss/
│   ├── tokens/         # Design tokens (couleurs, rayons, espacements, typos...)
│   ├── base/           # Reset, layout, typographie de base
│   ├── mixins/         # Fonctions utilitaires SCSS
│   ├── components/     # Composants UI (btn, alert, card, form, etc.)
│   ├── _global.scss    # Charge tous les styles utiles
│   └── kzuux.scss      # Point d'entrée principal du framework
```

## 🏋️ Installation

Dans ton fichier SCSS principal (par exemple `style.scss`) :

```scss
@use '../../packages/kzu-ux/scss/kzuux.scss' as *;
```

## 🔍 Design Tokens

Gérés dans `tokens/`

- **Couleurs** (`_colors.scss`)
- **Espacements** (`_spacing.scss`)
- **Typographie** (`_typography.scss`)
- **Rayons** (`_radius.scss`)
- **Ombres** (`_shadows.scss`)

Exemple :

```scss
$color-primary: #2563eb;
$space-md: 1rem;
$font-size-base: 1rem;
```

## 🛠️ Mixins utiles

Exemples :

```scss
@include btn-base;
@include shadow-sm;
```

Voir tous les mixins dans `scss/mixins/`

## 📄 Composants inclus

Chaque composant suit une convention claire et modulaire.

### Boutons

```html
<button class="btn -solid">Valider</button>
<button class="btn -ghost">Annuler</button>
```

### Alertes

```html
<div class="alert -success">Succès</div>
<div class="alert -error">Erreur</div>
```

### Cartes

```html
<div class="card">
  <h3 class="typo-h3">Titre</h3>
  <p class="typo-body">Contenu</p>
</div>
```

### Formulaires

```html
<div class="form-group">
  <label for="email">Email</label>
  <input id="email" type="email" />
  <span class="helper-text">Info</span>
</div>
```

## 🌟 Typographie

Classes disponibles :

```scss
.typo-h1
.typo-h2
.typo-h3
.typo-body
```

## 🎨 Thèmes (WIP)

Un système de thèmes est prévu à base de `:root` et variables CSS pour :

- light/dark
- thèmes personnalisés (zen, summer, pro, etc.)

## 🎧 Accessibilité (future V2)

Objectifs prévus :

- Modes daltonisme (protanope, deuteranope...)
- Contraste adapté (AA/AAA)
- Motion-safe

## 📝 Conventions

- Pas de préfixe obligatoire sur les classes (`btn`, `card`, `alert`...)
- Les modificateurs utilisent `-` : `btn -ghost`, `alert -success`
- Tout est composable et surchargable

## ⚖️ Licence

Libre d'utilisation dans tous tes projets perso/pro. Tu es encouragé à le modifier selon tes besoins !

