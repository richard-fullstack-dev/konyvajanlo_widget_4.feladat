# FELADAT (a verziókövetőn kapott leírás): 4. feladat

Időtartam: 180 perc (a teljes vizsgán). Ez a váz csak a **4. feladatra** készült. A tesztek (`*.spec.ts`) a feladatleírást ellenőrzik: az a cél, hogy mind sikeresen lefusson.

## 4. feladat · Könyvajánló widget (15 pont)

Szükség van egy bármilyen oldalon elhelyezhető widget-re, amely segítségével egy adott könyvet lehet reklámozni.

a) Készítsen egy új komponenst **konyvajanlo** néven. A komponens kis-nagybetűs használata, fájlneve feleljen meg a keretrendszerben elvártaknak.

b) A komponenshez adja hozzá az alábbi paramétereket. A paraméterek kis-nagybetűs használata feleljen meg a keretrendszerben elvártaknak.
 - nev: string, a könyv neve
 - ar: number, a könyv ára
 - akcio: bool, a könyv jelenleg le van-e értékelve. Opcionális, az alapértéke false.

c) A komponens megjelenítése az alábbi legyen:
 - A név 3-as szintű címsorként jelenjen meg.
 - Az ár bekezdésként, alapértelmezett formázással.
 - Ha az akcio paraméter true, akkor alkalmazza az ár bekezdésére az **akcio** class-t. Az akciós megjelenítés legyen *[a szöveg a fotón elvágott]*

d) Készítsen egy SCSS fájlt, amelyben definiálja a fent említett **akcio** class-t.
 - Félkövér
 - Az alapértelmezettnél nagyobb betűméretű
 - A betűszín a **_colors.scss** fájlban definiált **kiemeles** változó legyen.
 - A definiált class legyen része a kimeneti CSS fájlnak.

e) A fő komponensben, tesztelési célból hozzon létre három példányt az új komponensből, az alábbi *[adatokkal: a szöveg a fotón elvágott]*:
 - A Gyűrű Szövetsége, 2500 Ft, nem akciós
 - A Két Torony, 2000 Ft, nem akciós
 - A Király Visszatér, 999 Ft, akciós

## A _colors.scss fájl
A feladat d) pontja szerint a `kiemeles` változó a **`_colors.scss` fájlban már definiálva van**, tehát ez egy külön, kész fájl. Ebben a vázban a `src/app/_colors.scss` helyen van (`$kiemeles: #b5651d;`). A te SCSS fájlod ezt `@use`-szal tölti be, az útvonal **a te fájlodtól számítva** értendő (az aláhúzás és a `.scss` nélkül).
