# Master portrait regeneration prompt — Gemini / Nano Banana Pro

**Recommended model (best quality first):**
1. `gemini-3-pro-image` (Nano Banana Pro) — preferred for identity lock + wardrobe + grade
2. Fallback: `gemini-3.1-flash-image` (Nano Banana 2)
3. Speed only: `gemini-3.1-flash-lite-image`

**Tooling:** Google AI Studio → Image → upload 2–3 reference photos → paste prompt → aspect **3:4** → download PNG.

**Reference pack (attach in this order):**
1. Cafe panjabi close-up (face identity primary)
2. Campus blue-shirt full body (body proportion / height)
3. Mall crossed-arms (secondary face angle)

---

## PROMPT A — Landing hero (right of name, dark site)

```
ROLE
You are a world-class portrait photographer (Nick Knight × Peter Lindbergh editorial discipline) AND a senior retoucher (Capture One + frequency-separation grade). You are regenerating a portfolio hero cutout for a dark luxury tech website.

TASK
Regenerate ONE photoreal three-quarter standing portrait of the SAME man as the attached references. This is an identity-preserving edit, not a new person.

IDENTITY LOCK (non-negotiable)
- Preserve exact facial geometry from Reference 1: eye shape/spacing, brow ridge, nose bridge/tip, lip thickness, jaw, cheekbones, ear set.
- Keep short neatly groomed dark beard + mustache as in Reference 1.
- Keep hair: short, dark, side volume / slight lift on top, natural part.
- Age: mid-20s. Same person across all references. Do NOT beautify into a different face. Do NOT mix faces. Do NOT Westernize features.

SKIN
- Target tone: very light brown / light wheat South Asian (lighter than Reference 1 cafe warmth).
- Keep real pore texture + micro-specular; no plastic, no airbrush melt, no orange cast.
- Soft key from camera-left 35°, gentle fill, subtle cool rim so subject separates from black void.

HEIGHT / POSTURE (critical)
- He must read as tall and long-limbed, never short, never hunched, never “compact seated”.
- Standing three-quarter (mid-thigh to crown). Camera height slightly BELOW eye level (subtle low angle) to elongate torso/legs.
- Shoulders open/back, chest lifted, neck long, chin level, weight soft on back leg.
- Soft genuine smile (teeth optional, closed-mouth warm smile preferred), eyes to camera, confident-chill.

WARDROBE — chill + rich + elegant (NOT suited-and-booted)
- Ivory / soft cream linen-cotton button-down, top button open, sleeves rolled once to mid-forearm.
- Dark charcoal tailored trousers with clean crease and natural break.
- Slim rose-gold / copper watch with dark leather strap on LEFT wrist (match reference watch language).
- No necktie, no suit jacket, no blazer armor, no sneakers, no sportswear logos, no traditional embroidered panjabi for THIS hero shot.
- Fabric must show real weave (linen slub), not CG plastic cloth.

BACKGROUND / CUTOUT
- Solid pure black (#000000) studio void OR true transparent alpha with subject only.
- NO cafe, NO wooden slats, NO table, NO menu, NO phone, NO floor plane, NO props.
- Edges: optical hair flyaways preserved; soft natural matte. ZERO white halo, ZERO green/black fringing, ZERO jagged rembg edges, ZERO cardboard cutout look.

COLOR GRADE
- Editorial cool-neutral portfolio grade: controlled highlights, open midtones on skin, deep but not crushed blacks.
- Subtle teal-in-shadow / warm-in-skin separation (restrained).
- Soft contrast curve. No HDR crunch, no Clarity slider abuse, no oversharpened eyelid edges.

ANTI-ARTIFACT
- Hands: anatomically correct, five fingers, natural pocket tuck on one hand only.
- No melted ears, no duplicate watch, no warped collar, no asymmetric pupils.
- Must not look “AI generated”. Must look like a $5k studio day.

COMPOSITION FOR WEB
- Vertical 3:4. Subject weighted slightly right of center with breathing room on left so he can sit to the RIGHT of a large name headline on a dark site (#100c0a ink).
- Soft contact shadow under feet ONLY if feet visible; otherwise floating cutout with soft drop-friendly silhouette.

OUTPUT
- Single PNG, high resolution, print-sharp face, web-ready after resize.
```

---

## PROMPT B — About section (cultural-modern elegance)

```
Same IDENTITY LOCK + SKIN + ANTI-ARTIFACT rules as Prompt A.

POSE
- Seated upright on invisible stool, torso elongated, NEVER hunched over a table.
- Hands relaxed on thigh (not clasped on cafe table). Soft smile.
- Camera slightly low for height.

WARDROBE
- Deep navy panjabi with restrained cream geometric embroidery on collar/placket/cuffs (refined from Reference 1), white/ivory trousers, rose-gold watch.
- OR charcoal cashmere crewneck with crisp white shirt collar peek — either must feel rich + chill, not costume.

BACKGROUND
- Soft charcoal-to-black gradient studio, no cafe clutter.

GRADE
- Warm key on face, cool falloff into black. Magazine about-page quality.
Aspect 3:4.
```

---

## PROMPT C — Optional alternate hero (polo, more chill)

```
Same identity lock. Standing tall mid-calf crop, slight low angle.
Stone-beige fine knit polo (no logos), charcoal trousers, rose-gold watch, soft smile.
Pure black void, no halo, light-wheat skin, editorial grade.
```

---

## QA checklist before accepting a frame
- [ ] Face matches Reference 1 at 100% zoom (eyes/nose/mouth)
- [ ] Skin is light brown, not dark orange / not pale grey
- [ ] Reads tall (low angle + open posture)
- [ ] Smile present, elegant, not grimace
- [ ] No suit/tie; chill-rich wardrobe
- [ ] No white edge halo on black
- [ ] Hands correct
- [ ] Looks photographic, not AI-plastic
