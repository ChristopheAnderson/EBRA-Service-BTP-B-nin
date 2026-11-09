# EBRA Service BTP Bénin — Site Vitrine Haut de Gamme

Site vitrine architectural, moderne, immersif et responsive pour **EBRA Service BTP Bénin**, entreprise générale de BTP, de génie civil et de voirie en République du Bénin.

Inspiré des standards de motion design avancés (type *Fizzy Display Magic* adapté au BTP), le site allie élégance visuelle, rigueur technique, modélisation 3D interactive et photographies authentiques d'ingénieurs et de chantiers en Afrique de l'Ouest.

---

## 🏗️ Identité Visuelle & Direction Artistique

- **Mode :** Light mode exclusif épuré & architectural
- **Fond principal :** Blanc cassé `#F8F9FA` avec trame technique architecturale
- **Typographie :** Titres en `Sora` & Corps en `Manrope`
- **Couleur BTP (Accent) :** Orange chantier `#E87524` (actions, reflets, grue)
- **Couleur secondaire :** Gris béton `#A8ADB3` / `#2A2E33`
- **Texte :** Noir profond `#151515`

---

## ⚡ Stack Technologique

- **Framework :** React + TypeScript (Vite)
- **Styling :** Tailwind CSS v4 avec grille architecturale personnalisée
- **3D & Motion :** Three.js, `@react-three/fiber`, `@react-three/drei` (Scène 3D avec tour moderne, vitrages, grue à tour mobile et balises de chantier)
- **Interactivité :** Lucide React (icônes techniques), Canvas Confetti (célébration devis)
- **Cartographie :** Intégration Google Maps officielle avec l'identifiant exact `ChIJga0ynjtVIxARR5Ox33cA_w0`
- **Messagerie :** Intégration directe WhatsApp Business avec message contextuel pré-rempli

---

## 📑 Structure Complète des Sections

1. **Header / Sticky Navbar :**
   - Logo EBRA Service BTP Bénin avec sigle architectural
   - Liens de navigation avec suivi d'ancres en temps réel
   - Bouton de devis rapide et lien WhatsApp direct
   - Menu tiroir fluide pour mobile et tablette

2. **01 — Hero Section (Immersif & 3D) :**
   - Accroche percutante : *"Bâtir l'avenir du Bénin avec rigueur et excellence"*
   - Canvas 3D Three.js : bâtiment géométrique en porte-à-faux, grue de chantier animée, particules en suspension et rotation interactive au curseur
   - Badges de réassurance : Normes BAEL, Modélisation 3D et Respect des délais

3. **02 — À Propos d'EBRA :**
   - Vision d'ingénierie et ancrage territorial au Bénin
   - Galerie de photos authentiques d'ingénieurs, techniciens et ouvriers sur chantiers béninois
   - Piliers fondamentaux : Solidité constructive, Sécurité HSE, Équipes locales qualifiées
   - Chiffres clés et indicateurs de performance

4. **03 — Nos Services :**
   - Bâtiment & Gros Œuvre
   - Génie Civil & Ouvrages d'Art
   - Voirie & Réseaux Divers (VRD / Asphaltage / Pavage)
   - Rénovation & Réhabilitation lourde
   - Bureau d'Études & Modélisation BIM
   - Coordination de chantier TCE
   - Filtres par catégorie et bouton direct pour chiffrer chaque prestation

5. **04 — Nos Réalisations :**
   - Galerie de chantiers (Villas haie vive, voiries pavées Calavi, complexes à Ouidah, etc.)
   - Filtres dynamiques
   - Modal plein écran (Lightbox) détaillant les surfaces, techniques et photos haute définition

6. **05 — Notre Expertise & Sécurité :**
   - Contrôles qualité des bétons et aciers
   - Politique stricte "Zéro accident toléré" et port des EPI
   - Précision des implantations topographiques et modélisation BIM

7. **06 — Méthodologie de Travail (5 Étapes) :**
   - 01. Diagnostic & Faisabilité
   - 02. Ingénierie & Modélisation 3D
   - 03. Approvisionnement & Mobilisation
   - 04. Exécution & Contrôle Qualité
   - 05. Livraison & Clés en main

8. **07 — Contact, Devis & Localisation :**
   - Formulaire de demande de devis complet avec validation interactive et confirmation animée
   - Bouton d'accès direct WhatsApp
   - Carte Google Maps intégrée avec lien d'itinéraire direct
   - Coordonnées téléphoniques et horaires de bureau

9. **Footer :**
   - Liens complets, coordonnées, horaires, copyright et bouton retour haut de page

---

## 🚀 Démarrage du Projet

### 1. Prérequis
- Node.js (v18 ou supérieur recommandé)
- npm

### 2. Lancement en développement
```bash
npm run dev
```
Le site sera accessible localement sur `http://localhost:5173`.

### 3. Compilation pour la production
```bash
npm run build
```
Les fichiers optimisés et minifiés sont générés dans le dossier `dist/`.

### 4. Prévisualisation de la version de production
```bash
npm run preview
```
