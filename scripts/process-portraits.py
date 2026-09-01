#!/usr/bin/env python3
"""Sharpen new portraits, build avatars, and create transparent hero cutout."""

from __future__ import annotations

import os
from pathlib import Path

from PIL import Image, ImageEnhance, ImageFilter, ImageOps

ROOT = Path(__file__).resolve().parents[1]
ASSETS = Path(
    "/Users/asifhasantonmoy/.cursor/projects/Users-asifhasantonmoy-1-Home-Projects-Portfolio-Site/assets"
)
OUT_PROFILE = ROOT / "public/images/profile"
OUT_AVATARS = OUT_PROFILE / "avatars"

SOURCES = {
    "me1": ASSETS / "me1-c80b3b6d-ac72-4f26-8f80-431c62c8b933.png",
    "me2": ASSETS / "me2-88329665-d07b-4130-ab32-f9cacd6bdd7c.png",
    "me3": ASSETS / "me3-b63edcb9-d6fa-498f-8d3c-4e5dcbd6b64a.png",
}


def sharpen(img: Image.Image) -> Image.Image:
    img = ImageEnhance.Contrast(img).enhance(1.06)
    img = ImageEnhance.Sharpness(img).enhance(1.55)
    img = img.filter(ImageFilter.UnsharpMask(radius=1.2, percent=130, threshold=2))
    return img


def crop_head(img: Image.Image, top: float, bottom: float, side_pad: float = 0.08) -> Image.Image:
    w, h = img.size
    left = int(w * side_pad)
    right = int(w * (1 - side_pad))
    top_px = int(h * top)
    bottom_px = int(h * bottom)
    return img.crop((left, top_px, right, bottom_px))


def square_avatar(img: Image.Image, size: int = 800) -> Image.Image:
    w, h = img.size
    side = min(w, h)
    left = (w - side) // 2
    top = max(0, int(h * 0.02))
    cropped = img.crop((left, top, left + side, top + side))
    return cropped.resize((size, size), Image.Resampling.LANCZOS)


def remove_bg_rembg(img: Image.Image) -> Image.Image:
    from rembg import remove

    return remove(img)


def save_png(img: Image.Image, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    if img.mode != "RGBA":
        img = img.convert("RGBA")
    img.save(path, "PNG", optimize=True)
    print(f"saved {path.relative_to(ROOT)} ({img.size[0]}x{img.size[1]})")


def main() -> None:
    me1 = sharpen(Image.open(SOURCES["me1"]).convert("RGB"))
    me2 = sharpen(Image.open(SOURCES["me2"]).convert("RGB"))
    me3 = sharpen(Image.open(SOURCES["me3"]).convert("RGB"))

    # Full sharpened portraits (Life intro + archive)
    save_png(me1, OUT_PROFILE / "portrait-me1-formal.png")
    save_png(me2, OUT_PROFILE / "portrait-me2-office.png")
    save_png(me3, OUT_PROFILE / "portrait-me3-window.png")

    # Circular avatars for About / Services / Contact
    avatar_about = square_avatar(crop_head(me1, 0.0, 0.72))
    avatar_services = square_avatar(crop_head(me2, 0.0, 0.74))
    avatar_contact = square_avatar(crop_head(me3, 0.0, 0.78))
    save_png(avatar_about, OUT_AVATARS / "avatar-about.png")
    save_png(avatar_services, OUT_AVATARS / "avatar-services.png")
    save_png(avatar_contact, OUT_AVATARS / "avatar-contact.png")

    # Transparent hero — waist-up me3 reads best on landing
    hero_src = crop_head(me3, 0.0, 0.96, side_pad=0.04)
    hero_cutout = remove_bg_rembg(hero_src)
    # Trim transparent padding
    bbox = hero_cutout.getbbox()
    if bbox:
        hero_cutout = hero_cutout.crop(bbox)
    target_h = 1200
    scale = target_h / hero_cutout.height
    hero_cutout = hero_cutout.resize(
        (int(hero_cutout.width * scale), target_h),
        Image.Resampling.LANCZOS,
    )
    save_png(hero_cutout, OUT_PROFILE / "hero-me.png")

    # Life intro — office portrait, no transparency
    life_intro = crop_head(me2, 0.0, 0.92, side_pad=0.06)
    w, h = life_intro.size
    life_intro = life_intro.resize((int(w * 0.85), int(h * 0.85)), Image.Resampling.LANCZOS)
    save_png(life_intro, OUT_PROFILE / "life-intro-me.png")


if __name__ == "__main__":
    main()
