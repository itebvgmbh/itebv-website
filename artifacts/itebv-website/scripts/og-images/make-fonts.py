# Wandelt die (variablen) woff2-Webfonts in statische TTFs um, damit der
# SVG-Rasterizer sie laden kann. Family-Name und Gewichtsklasse werden explizit
# gesetzt, damit font-family/font-weight im SVG sauber matchen.
import os
import shutil
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

HERE = os.path.dirname(os.path.abspath(__file__))
WEB = os.path.join(HERE, "..", "..", "public", "fonts")
OUT = os.path.join(HERE, "fonts")

shutil.rmtree(OUT, ignore_errors=True)
os.makedirs(OUT, exist_ok=True)


def set_names(font, family, subfamily, weight_class):
    full = f"{family} {subfamily}"
    ps = full.replace(" ", "")
    for rec in font["name"].names:
        nid = rec.nameID
        if nid == 1:
            font["name"].setName(family, 1, rec.platformID, rec.platEncID, rec.langID)
        elif nid == 2:
            font["name"].setName(subfamily, 2, rec.platformID, rec.platEncID, rec.langID)
        elif nid == 4:
            font["name"].setName(full, 4, rec.platformID, rec.platEncID, rec.langID)
        elif nid == 6:
            font["name"].setName(ps, 6, rec.platformID, rec.platEncID, rec.langID)
    # Typographic-Namen entfernen, sonst gewinnen sie beim Matching
    for nid in (16, 17, 21, 22, 25):
        font["name"].removeNames(nameID=nid)
    font["OS/2"].usWeightClass = weight_class


def build(src_woff2, family, subfamily, weight, out_name):
    font = TTFont(os.path.join(WEB, src_woff2))
    font.flavor = None  # woff2 -> ttf
    if "fvar" in font:
        font = instancer.instantiateVariableFont(
            font, {"wght": weight}, inplace=False, updateFontNames=False
        )
    set_names(font, family, subfamily, weight)
    out = os.path.join(OUT, out_name)
    font.save(out)
    print(f"{out_name}: {os.path.getsize(out)} Bytes  (family='{family}', weight={weight})")


build("geist-latin.woff2", "Geist", "SemiBold", 600, "Geist-SemiBold.ttf")
build("geist-latin.woff2", "Geist", "Regular", 400, "Geist-Regular.ttf")
build("geist-mono-latin.woff2", "Geist Mono", "Medium", 500, "GeistMono-Medium.ttf")
build("geist-mono-latin.woff2", "Geist Mono", "Regular", 400, "GeistMono-Regular.ttf")

print("\n--- Kontrolle ---")
for f in sorted(os.listdir(OUT)):
    t = TTFont(os.path.join(OUT, f))
    fam = t["name"].getDebugName(1)
    sub = t["name"].getDebugName(2)
    print(f"{f}: family='{fam}' subfamily='{sub}' usWeightClass={t['OS/2'].usWeightClass} sfntVersion={t.sfntVersion!r}")
