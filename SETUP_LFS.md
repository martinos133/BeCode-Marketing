# Nastavenie Git LFS pre veľké videá

Tieto 3 videá presahujú GitHub limit 100 MB. Na ich pridanie do repozitára potrebuješ **Git LFS**.

## 1. Inštalácia Git LFS

**macOS (Homebrew):**
```bash
brew install git-lfs
```

Ak Homebrew zlyháva na oprávnenia:
```bash
sudo chown -R $(whoami) /opt/homebrew
brew install git-lfs
```

**Alternatíva – stiahnutie:** https://git-lfs.github.com/

## 2. Skontroluj, či máš videá lokálne

Potrebné súbory:
- `public/sport/Captions_FC6C84.MP4`
- `public/BeCode Hero Trailer_4K_V2.mov`
- `public/InFestaConTavolo_Reels_Prew_01.mp4`

Ak ich nemáš, záloha alebo pôvodný zdroj môže pomôcť ich obnoviť.

## 3. Pridanie videí cez Git LFS

V priečinku projektu spusti:

```bash
git lfs install
git add .gitattributes
git add "public/sport/Captions_FC6C84.MP4"
git add "public/BeCode Hero Trailer_4K_V2.mov"
git add "public/InFestaConTavolo_Reels_Prew_01.mp4"
git add .
git commit -m "Add large videos via Git LFS"
git push origin main
```

**Poznámka:** Hero video používa `BeCode Hero Trailer_4K_V2.mp4` (33 MB), ktoré je v repozitári. Ak chceš použiť `.mov` verziu, pridaj ju cez LFS a uprav `src/app/page.tsx`.
