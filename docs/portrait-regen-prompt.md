# Portrait regeneration — prompts + model research

## What we used in Cursor for this project

| Tool | Role | Face-lock quality |
|------|------|-------------------|
| **Cursor `GenerateImage`** (current session) | Fast regenerate with 1 reference | Medium — can drift face; hair crown sometimes clipped |
| **Gemini 3 Pro Image (`gemini-3-pro-image` / Nano Banana Pro)** | Best hosted edit/regen for wardrobe + grade | Strong when prompt has hard IDENTITY LOCK + 1–2 face refs |
| **Gemini 3.1 Flash Image** | Faster hosted fallback | Good; slightly weaker ID than Pro |

**Gemini API key was not available in this environment**, so gens were done via Cursor’s image tool. For your own best runs: [Google AI Studio](https://aistudio.google.com) → Image → attach cafe/campus/beach face refs → paste prompts below → **3:4**.

---

## Best face-preserving stacks (2025–2026 research / HF)

Use these when you need **exact face** while changing skin tone / dress / pose:

| Priority | Model / method | Where | Notes |
|----------|----------------|-------|-------|
| 1 | **InfiniteYou (InfU)** on FLUX | [bytedance/InfiniteYou](https://github.com/bytedance/InfiniteYou) | SOTA ID similarity + text alignment on Flux; less “face paste” than older PuLID |
| 2 | **PuLID-FLUX** | HF / ComfyUI | Strong Flux face lock; watch copy-paste artifacts |
| 3 | **InstantID** (SDXL) | [InstantX/InstantID](https://huggingface.co/InstantX/InstantID) | IdentityNet + IP-Adapter + keypoints; great multi-shot consistency |
| 4 | **IP-Adapter FaceID Plus V2** | [h94/IP-Adapter-FaceID](https://huggingface.co/h94/IP-Adapter-FaceID) | Lightweight; match FaceID model + LoRA pair |
| 5 | **Diff-PC** (paper 2026) | [alphaXiv 2602.00639](https://www.alphaxiv.org/abs/2602.00639) | 3D-aware ID control; beats PhotoMaker-V2 / FlashFace on reported metrics |
| 6 | **ReActor** (post) | ComfyUI | Face *swap onto* an already good body/wardrobe render |

**Practical recipe for this portfolio:**  
1) Gemini 3 Pro Image with IDENTITY LOCK prompt (fast), **or**  
2) ComfyUI: InstantID *or* PuLID-FLUX → wardrobe prompt → optional ReActor only if ID slipped.  
Never rembg-only for hero cutouts.

---

## Hard rules (every prompt)

```
IDENTITY LOCK (non-negotiable):
- Copy the attached reference face 1:1 — eye spacing, lids, brows, nose bridge/tip,
  lip thickness, philtrum, jaw width, cheekbones, ear set, beard map, mustache.
- Do NOT slim, beautify, Westernize, or average the face into a different person.
- Unique markers to keep: [describe from your photo — e.g. brow arch, smile asymmetry].

HAIR SILHOUETTE:
- Preserve FULL crown height and side volume from reference.
- Forbidden: flattened top, cropped crown, missing hair chunks, balding halo.

SKIN vs DRESS (forsha / dominant skin):
- Target Fitzpatrick III very light brown / light wheat.
- Skin luminance MUST read LIGHTER and more luminous than the shirt fabric
  (especially vs sky-blue or navy cloth). Warm zygoma; cooler jaw; visible pores.
- Not orange cafe cast; not grey; not plastic SSS.

ANTI-ARTIFACT:
- Full hair outline soft-edged; zero white halo; zero jagged rembg; five correct fingers.
```

---

## Aspect prompts

### A — Life & Travel intro (sky shirt, chill) — 3:4
```
[HARD RULES above]
POSE: Standing mid-thigh→crown, slight low camera, left hand in pocket, soft smile, tall.
WARDROBE: Sky-blue fine oxford/micro-check, top button OPEN, sleeves rolled mid-forearm,
charcoal trousers, rose-gold watch dark strap.
BG: Solid #000000 only (no white, no park). Soft full hair silhouette.
```

### B — Formal buttoned sky — 3:4
```
[HARD RULES]
POSE: Same standing tall.
WARDROBE: Sky-blue oxford with ALL buttons fastened including TOP collar button
(closed formal collar). Charcoal trousers, rose-gold watch. No tie/blazer.
BG: #000000. Full hair crown.
```

### C — Formal buttoned white — 3:4
```
[HARD RULES]
WARDROBE: Crisp white poplin, ALL buttons incl. top closed. Charcoal trousers, thin dark belt,
rose-gold watch. Skin clearly fairer than white cloth midtones via soft key (not blown).
```

### D — Formal navy seated — 3:4
```
[HARD RULES]
POSE: Sit-bones on stool; pelvis posterior tilt 5–8°; femurs down ~15°; torso stacked (not hunched);
hands on thighs; soft smile; camera slightly low.
WARDROBE: Deep navy shirt ALL buttons closed; charcoal trousers; rose-gold watch.
BG: #000000. Full hair.
```

### E — Hero linen (open collar chill) — 3:4
```
[HARD RULES]
WARDROBE: Ivory linen open collar, sleeves rolled; charcoal trousers; rose-gold watch.
Skin lighter than ivory midtone via careful key (avoid matching shirt L*).
BG: #000000.
```

---

## Site vs archive

| Path | GitHub? |
|------|---------|
| `public/images/profile/*` | Yes — only deployed portraits |
| `private/generated-portraits/*` | **No** — `/private/` in `.gitignore` |

After regenerating in AI Studio, drop keepers into `private/generated-portraits/`, then tell the agent which file to promote to `public/images/profile/`.

## QA checklist
- [ ] Face matches reference at 100% zoom  
- [ ] Full hair crown present  
- [ ] Skin lighter / more luminous than shirt  
- [ ] Formal shots: top button visibly closed  
- [ ] Background solid dark — no white holes  
- [ ] Hands correct; no plastic skin  
