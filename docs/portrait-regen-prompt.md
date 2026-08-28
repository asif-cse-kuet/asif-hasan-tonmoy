# Multi-aspect portrait generation prompts

Recommended model: **`gemini-3-pro-image`** (Nano Banana Pro). Fallback: `gemini-3.1-flash-image`.

Attach **one** primary face/body reference per run (smaller JPEG ≤1.2MB). Do **not** use the cafe panjabi photo for seated “about” shots if that look failed before — prefer mall / campus / roadside / beach close-up.

Shared rules for every prompt below (paste under each aspect prompt):

```
IDENTITY LOCK: Same South Asian man as the attached reference. Preserve eye spacing, nose, lips, jaw, short groomed dark beard, hairline and side volume. No face morph, no beautify-into-stranger.

SKIN (photometric, not “realistic” as a vague word):
- Target: Fitzpatrick III–IV very light brown / light wheat.
- Melanin: warmer on zygoma + nose tip + ear rims; cooler on mandibular plane + under-eye.
- Texture: visible pores on cheek at 100% crop; fine peach-fuzz along beard edge; no plastic SSS melt.
- Specular: small highlights only on forehead + nose bridge (≈2–4% of face area), not oily sheet.
- White balance: neutral daylight; forbid orange cafe cast and grey corpse cast.

ANTI-ARTIFACT: Five correct fingers; no melted ears; no double watch; no white halo on black; no jagged rembg edge; no warped collar.

BACKGROUND: Pure #000000 void OR soft charcoal→black gradient. Soft optical hair edges. No environment props.

GRADE: Soft S-curve; open skin midtones; controlled blacks; restrained teal-shadow / warm-skin separation. Magazine still, not HDR crunch.
```

---

## 01 — Standing hero (3:4) — site primary style
Reference: campus full-body (preferred) or first good linen hero.

```
POSE: Mid-thigh→crown. Camera 8–12cm below eye height. Weight on back leg; front knee soft. Pelvis neutral, lumbar slight lordosis, scapulae down-back. Left hand loosely in pocket (thumb out). Soft closed-mouth smile, eyes to camera.
WARDROBE: Ivory linen shirt, top button open, sleeves rolled once; charcoal trousers; rose-gold watch dark strap. No suit/tie/sneakers.
OUTPUT: 3:4 PNG cutout for dark website hero right of name.
```

## 02 — Seated about (3:4) — biomechanics
Reference: mall crossed-arms OR beach close-up. **Never** cafe panjabi for this slot if regenerating.

```
POSE (sitting physics): Sit-bones bearing weight on invisible stool. Pelvis posterior tilt 5–8° (not perched on thighs). Femurs angle down ~15°; knees ≈ hip height or slightly below. Torso stacked over pelvis — thoracic NOT collapsed. Forearms on thighs, elbows ~100–110°. Head over spine, chin level. Camera slightly below eyes so torso reads long.
WARDROBE: Stone-beige cotton pique polo (no logo) OR soft sage polo; charcoal trousers; rose-gold watch.
```

## 03 — Crossed arms (3:4)
```
POSE: Standing mid-thigh crop. Arms crossed loosely (not defensive clamp). Watch visible on left wrist. Tall posture, low camera.
WARDROBE: Pale sage / mint pique polo; charcoal trousers.
```

## 04 — Oxford standing (3:4)
```
POSE: 3/4 body angle, left hand pocket, tall open chest.
WARDROBE: Light-blue micro-check oxford, sleeves rolled; charcoal trousers; rose-gold watch.
```

## 05 — Headshot square (1:1)
```
POSE: Head-and-shoulders; neck long; shoulders down; soft smile.
WARDROBE: Ivory linen collar only.
BG: Soft charcoal→black gradient.
```

## 06 — Tall vertical (9:16)
```
POSE: Knees→crown vertical. Low camera. One hand pocket; loafers tip may show.
WARDROBE: Ivory linen untucked or lightly tucked; charcoal trousers; dark loafers; rose-gold watch.
```

## 07 — Lean landscape (4:3)
```
POSE: Light hip lean on invisible ledge; elbows soft; torso still upright.
WARDROBE: Cream knit crewneck + white shirt collar peek; charcoal trousers.
```

---

## QA before accepting
- [ ] Face matches reference at 100% zoom  
- [ ] Skin is light wheat, not dark orange  
- [ ] Tall read (low angle + open posture)  
- [ ] Seated shots pass sit-bone / femur check  
- [ ] No white edge halo  
- [ ] Hands correct  
- [ ] Looks photographic, not AI plastic  

Unused keepers → `private/generated-portraits/` (gitignored). Only `public/images/profile/*` ships to GitHub.
