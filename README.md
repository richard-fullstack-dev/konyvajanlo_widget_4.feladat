# Könyvajánló widget (vizsgaszimulációs váz: csak a 4. feladat)

Ez egy **vizsgai váz**: a tesztek még nem fordulnak le, ez így van rendjén.

## Indulás

```bash
git clone <ennek-a-repónak-a-címe>
cd konyvajanlo-widget
npm install
ng test --watch=false        # most hibát ad: "Cannot find module './konyvajanlo.component'"
```

1. Olvasd el a **FELADAT.md**-t és a két teszt fájlt: `src/app/konyvajanlo/konyvajanlo.component.spec.ts` és `src/app/app.component.spec.ts` (a pontos nevek a tesztekből jönnek).
2. Hozd létre a hiányzó komponenst: `ng g c konyvajanlo --skip-tests` (ettől a tesztek **lefordulnak**, de pirosak lesznek).
3. Valósítsd meg a feladat a)-e) pontjait, amíg mind zöld nem lesz.
4. `ng build` hiba nélkül.
5. `git add .` / `git commit -m "4. feladat"` / `git push` (a beadás).

Futtatás böngészőben: `ng serve`.

## Hol kezdd
A `konyvajanlo.component.spec.ts` megmondja, mit vár a komponenstől: `akcio` alapértéke `false`, `<h3>` a név, `<p>` az ár, az `akcio` class, az akciós stílus (félkövér, nagyobb, `#b5651d` színű).
