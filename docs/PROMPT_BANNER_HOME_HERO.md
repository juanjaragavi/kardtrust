# KardTrust Homepage Hero Banner - Image Generation Prompt

## 🎯 Target Image: `banner-home.webp`

**Purpose:** Primary homepage hero banner  
**Current Usage:** HeroSection component on homepage  
**Context:** First impression of KardTrust brand - financial partnership and guidance

---

## ⚠️ Important Note on Generation Strategy

**Two-Stage Approach Recommended:**

Most image generation LLMs struggle to create both photorealistic imagery AND clean vector graphics in a single generation. For best results:

1. **Stage 1 (Use prompt below):** Generate the clean photography with proper composition
2. **Stage 2 (Post-production):** Add vector graphics (arrows/stars) in Photoshop, Figma, or Canva

If your LLM supports strong graphic overlay generation, you can try the full prompt. Otherwise, use **"Photography Only Prompt"** below.

---

## 📸 Complete Generation Prompt (Photography + Graphics Attempt)

**⚠️ This may only generate photography without graphics. See alternative prompts below.**

```text
Generate a hyper-realistic, professional stock photograph for a US financial services website hero banner with KardTrust brand elements.

SCENE DESCRIPTION:
Create a warm, inviting lifestyle scene of a couple working together on financial planning at home.

SUBJECTS (2 people):
- Man (30-35 years old):
  * Wearing light blue denim shirt, casual professional style
  * Black-framed glasses, approachable appearance
  * Holding a white document/paper in hands
  * Expression: Focused, engaged, collaborative
  * Positioned on left side of frame

- Woman (28-33 years old):
  * Wearing bright yellow/golden-yellow top or sweater
  * Warm, friendly appearance with natural smile
  * Looking at laptop screen with engagement
  * Expression: Confident, satisfied, collaborative
  * Positioned on right side of frame, slightly behind man

COMPOSITION:
- Medium shot (chest-up) of both subjects
- Subjects are seated close together at a table/desk
- Looking down at documents and laptop (not at camera)
- Natural, candid moment of financial planning together
- Framing: Subjects occupy center-right of frame
- Leave 40% negative space on LEFT side for text overlay

PROPS & SETTING:
- Silver/gray laptop (Apple MacBook style) open in front of them
- White paper document in man's hands (financial document/statement)
- Coffee cups on table (one dark, one light green/teal)
- Modern, clean home or co-working space setting
- Warm, bright interior with soft natural light
- Background: Blurred warm tones, neutral environment

LIGHTING & COLOR GRADING:
- Bright, natural daylight from right side
- Soft, diffused lighting (no harsh shadows)
- Warm color palette: blues, yellows, warm neutrals
- Color grading: Vibrant but natural, inviting and optimistic
- Slightly boosted saturation for friendly, accessible feel
- Yellow clothing should be prominent but not oversaturated

MOOD & ATMOSPHERE:
- Collaborative, partnership-focused
- Warm, trustworthy, approachable
- Financial confidence and empowerment
- "We're in this together" feeling
- Positive, optimistic about financial future

PHOTOGRAPHY TECHNICAL SPECS:
- Landscape orientation 16:9 (ideal: 1920x600 for hero banner)
- Horizontal layout with strong left negative space
- Sharp focus on subjects with f/2.8 depth of field
- Background softly blurred (bokeh effect)
- Professional stock photography quality
- Resolution: Minimum 1920px width

REMOVE/AVOID:
- No existing vector graphics or overlays
- No blue and green diagonal lines from template
- No harsh shadows or overexposure
- No cluttered background elements
- No direct camera eye contact (subjects looking at documents/laptop)
- NO LOGO: Do not include the KardTrust logo, shield, or any branding text
- NO TEXT: Do not add any letters, words, or typography to the image
- NO NUMBERS: Do not include any numerical elements or data visualizations
- GRAPHICS ONLY: Only include the abstract vector elements (arrows and stars) specified below

ADD KARDTRUST BRAND VECTOR GRAPHICS (ABSTRACT ELEMENTS ONLY):

RED UPWARD ARROWS (Hex: #D72638):
CRITICAL: Position arrows in LEFT negative space to avoid text overlay conflicts

- Large hero arrow:
  * Bottom-left corner to mid-left area
  * Upward diagonal at 65° angle
  * Size: 18% of image width
  * Position: Far left side, starting from bottom edge
  * Should NOT overlap with subjects or text area

- Medium arrow:
  * Upper-left quadrant
  * Upward at 75° angle
  * Size: 10% of image width
  * Creates upward flow in negative space

- Small accent arrow:
  * Top-right area near edge
  * Upward at 80° angle
  * Size: 6% of image width
  * Balances composition on right side

- Style: Bold, modern geometric with smooth rounded edges
- Opacity: 88-92% to avoid overpowering hero message
- Placement: Concentrate arrows in LEFT negative space (where text won't be)

BLUE FOUR-POINTED STARS (Hex: #003DA5):
Position stars to frame subjects and enhance trust messaging

- Large star:
  * Top-left corner of frame
  * Size: 4% of image width
  * Prominent with subtle glow

- Medium star:
  * Near subjects' heads/shoulders area (upper center-right)
  * Size: 3% of image width
  * Emphasizes partnership and trust

- Medium star:
  * Mid-left area in negative space
  * Size: 2.5% of image width
  * Works with arrow composition

- Small stars (2):
  * One bottom-right corner
  * One top-right near laptop area
  * Size: 1.5-2% of image width each
  * Accent elements for balance

- Style: Sharp four-pointed stars (compass/North Star style)
- Effect: Subtle glow with 20px outer glow at 30% opacity
- Opacity: 95-100% for premium feel

COMPOSITION ARCHITECTURE:
- LEFT ZONE (40%): Negative space with arrows and stars, text overlay area
- CENTER-RIGHT ZONE (60%): Subjects, laptop, documents (hero action)
- Depth layers:
  * Background: Warm blurred environment
  * Mid-layer: Some arrows/stars behind subjects
  * Foreground: Subjects, laptop, documents
  * Top layer: Stars and accent arrows in front

BRAND MESSAGE ALIGNMENT:
- Partnership & collaboration (two people working together)
- Trust & guidance (professional yet approachable)
- Financial empowerment (confident, engaged expressions)
- American market context (modern, diverse couple)
- Upward growth (arrows reinforcing positive financial trajectory)
- Excellence (stars emphasizing quality and trust)

HERO BANNER SPECIFIC REQUIREMENTS:
- Must work with text overlay on LEFT side
- Subjects should be on RIGHT side for text balance
- Maintain 40-45% breathing room on LEFT
- Visual hierarchy: Subjects > Arrows > Stars
- Color contrast: Ensure text readability area
- Warm, inviting tone for homepage first impression

ACCESSIBILITY CONSIDERATIONS:
- High contrast between subjects and background
- Clear focal point (couple at laptop)
- Colors suitable for overlay text (dark or light)
- Vector elements don't compete with text space

OUTPUT SPECIFICATIONS:
- Format: Landscape banner (16:9 aspect ratio)
- Recommended dimensions: 1920x600px or 1920x700px
- sRGB color space for web display
- WebP format ready (high quality source)
- Sharp, crisp edges on vector graphics
- Professional hero banner quality

FINAL RESULT:
A warm, inviting hero banner showing a diverse couple collaborating on financial planning, with KardTrust brand elements (red upward arrows and blue stars) seamlessly integrated in the negative space. The image communicates partnership, trust, financial empowerment, and upward growth – perfectly aligned with KardTrust's "Your Trusted Partner for Smart Financial Decisions" messaging.

The composition must allow for text overlay on the LEFT side while maintaining visual interest and brand consistency across the entire banner.

CRITICAL EXCLUSIONS:
- DO NOT include the KardTrust logo (shield with arrow)
- DO NOT add any text, typography, letters, or words
- DO NOT include numbers, statistics, or data elements
- ONLY include: Photography + Red arrows + Blue stars (abstract vector graphics only)
```

---

## 🎨 Key Differences from Standard Images

### Banner-Specific Adaptations

1. **Horizontal Orientation:** Wide 16:9 format for hero banner
2. **Text Overlay Space:** 40% left negative space for CTAs and headlines
3. **Subject Positioning:** Couple on RIGHT side (not centered)
4. **Lower Arrow Density:** Fewer, more strategic arrow placement
5. **Collaborative Scene:** Two people (partnership theme) vs. single subject
6. **Document Props:** Financial papers and laptop for context
7. **Warm Tones:** Yellow clothing accent for vibrant, optimistic feel

---

## 📐 Composition Diagram

```bash
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  ✦                        TEXT OVERLAY AREA                 │
│                                                              │
│    ↑                   "Your Trusted Partner..."            │
│                                                              │
│  (Large                    [CTA Button]                     │
│   Arrow)                                                     │
│                                                              │
│    ↑         ┌────────────────────────────┐                │
│             │  👤👤  COUPLE               │    ✦           │
│             │  💻 Laptop + 📄 Document    │               │
│    ✦        │                            │        ↑       │
│             │  Collaborative Scene        │     (small)    │
│             └────────────────────────────┘                 │
│                                                   ✦         │
│                                                              │
│  [LEFT: Arrows + Stars]  [RIGHT: Main Subject Area]        │
│  [40% Negative Space]    [60% Hero Content]                │
└──────────────────────────────────────────────────────────────┘

KEY:
↑ = Red upward arrow (#D72638)
✦ = Blue four-pointed star (#003DA5)
👤 = Human subjects (couple)
💻 = Laptop prop
📄 = Document prop
```

---

## 🎯 Brand Alignment

### Visual Metaphors in This Image

- **Partnership (Two People):** "Your Trusted Partner" - not alone in financial journey
- **Collaboration (Together at laptop):** Teamwork and shared decision-making
- **Upward Arrows:** Financial growth, positive trajectory, progress
- **Four-Pointed Stars:** Trust, excellence, guidance, reliability
- **Warm Colors (Yellow + Blue):** Optimistic, friendly, approachable
- **Documents/Laptop:** Active financial planning, informed decisions
- **Natural Lighting:** Transparency, clarity, nothing hidden

---

## ✅ Quality Checklist for Hero Banner

### Pre-Generation

- [ ] Understand banner dimensions (1920x600 or similar)
- [ ] Visualize text overlay space on LEFT
- [ ] Confirm subjects will be on RIGHT side
- [ ] Brand colors ready (#D72638, #003DA5)

### Post-Generation

- [ ] Two subjects (man + woman) present and positioned correctly
- [ ] Man wearing light blue denim, woman wearing yellow/golden top
- [ ] Laptop and document props visible
- [ ] LEFT 40% has negative space for text overlay
- [ ] Subjects on RIGHT side of frame
- [ ] Warm, inviting lighting and color grading
- [ ] Red arrows exact #D72638, positioned in LEFT zone
- [ ] Blue stars exact #003DA5, scattered appropriately
- [ ] All arrows point upward (45-90° angles)
- [ ] Stars are four-pointed (not five-pointed)
- [ ] Composition allows text readability
- [ ] Minimum 1920px width, 16:9 aspect ratio
- [ ] Professional hero banner quality
- [ ] Background appropriately blurred
- [ ] No harsh shadows or overexposure

---

---

## � RECOMMENDED: Photography Only Prompt

**Use this if vector graphics aren't generating. Add graphics later in Photoshop/Figma.**

```text
Generate a hyper-realistic, professional stock photograph for a US financial services website hero banner.

SCENE: Warm, inviting lifestyle photo of a diverse couple (man 30-35, woman 28-33) collaborating on financial planning at home.

SUBJECTS & POSITIONING:
- Man: Light blue denim shirt, black-framed glasses, holding white paper document, focused expression
- Woman: Bright golden-yellow top, natural smile, looking at laptop screen, confident expression
- Both seated close together at table/desk, collaborative moment
- CRITICAL: Position subjects on RIGHT 60% of frame
- Leave LEFT 40% completely empty (clean negative space for text overlay)

PROPS: Silver MacBook laptop, white financial documents, coffee cups (one dark, one teal), modern home interior

COMPOSITION & FRAMING:
- Landscape 16:9 format (1920x600px ideal)
- Medium shot (chest-up), both subjects in frame
- Subjects occupy center-right and right side ONLY
- LEFT side must be clean, minimal negative space (for headline/CTA text)
- Looking down at laptop/documents (NOT at camera)
- Background blurred with warm bokeh effect

LIGHTING: Bright natural daylight from right, soft diffused lighting, no harsh shadows

COLOR GRADING: Warm, inviting palette - blues, yellows, neutral tones. Vibrant but natural. Slightly boosted saturation. Professional stock photo quality.

MOOD: Collaborative, trustworthy, financially confident, optimistic, "partnership" feeling

CRITICAL REQUIREMENTS:
- Clean LEFT 40% negative space (no subjects, minimal props)
- Professional hero banner composition
- High contrast for text overlay readability
- 1920px width minimum, sharp focus on subjects
- Background appropriately blurred

OUTPUT: Professional hero banner, web-optimized, ready for text overlay on left side.
```

**After Generation:** Add red arrows (#D72638) and blue stars (#003DA5) using design software in the left negative space area.

---

## 🎨 Graphics-Heavy Alternative Prompt

**Try this if your LLM handles stylized graphics better:**

```text
Create a professional hero banner (1920x600px, 16:9) combining photography with bold graphic design elements.

PHOTOGRAPHY BASE:
- Couple (man 30-35 in light blue, woman 28-33 in yellow) working on finances at home
- Man holds document, woman at laptop, both focused on financial planning
- Positioned on RIGHT 60% of frame
- Modern, warm interior with soft lighting
- Background softly blurred

GRAPHIC DESIGN OVERLAY (CRITICAL - DO NOT SKIP):
Add bold, eye-catching graphic elements to the LEFT 40% negative space:

RED UPWARD ARROWS:
- Large bold red arrow (color: #D72638 / rgb(215, 38, 56)) pointing diagonally upward from bottom-left
- 2 smaller red arrows in upper-left area, all pointing upward
- Clean, modern geometric style with smooth edges
- Semi-transparent (85-90% opacity)

BLUE STARS:
- 4-5 bright blue four-pointed stars (color: #003DA5 / rgb(0, 61, 165))
- Scattered across composition, especially in left negative space
- Sharp, compass-style points with subtle glow effect
- Various sizes (large to small)

STYLE: Mix of realistic photography with bold, flat graphic design elements (like modern fintech app design)

COMPOSITION: Photography realistic, graphics bold and graphic-novel style or flat-design style for clarity

OUTPUT: Hero banner ready for web, 1920x600px minimum
```

---

## 🔄 Simple Condensed Prompt

**If the full prompt is too complex, use this condensed version:**

```text
Create a professional hero banner (1920x600px, 16:9) for a US financial website.

SCENE: Warm, inviting shot of a couple (man 30-35, woman 28-33) collaborating on finances at home. Man in light blue denim shirt with glasses holding a document, woman in bright yellow top at laptop. Both focused on financial planning together. Modern, bright interior with warm tones.

COMPOSITION: Subjects positioned on RIGHT 60% of frame. LEFT 40% is negative space for text overlay. Medium shot, chest-up. Background softly blurred.

LIGHTING: Bright natural daylight, warm color grading, vibrant but natural.

ADD BRANDING (ABSTRACT GRAPHICS ONLY - NO LOGO, NO TEXT, NO NUMBERS):
- Red arrows (hex #D72638): 3 upward-pointing arrows, mostly in LEFT negative space, 65-80° angles, sizes 6-18% of width, 90% opacity
- Blue stars (hex #003DA5): 5 four-pointed stars scattered, 1.5-4% of width, subtle glow, 95-100% opacity

CRITICAL: Do not include KardTrust logo, any text/typography, or numerical elements. Only abstract vector graphics (arrows + stars).

MOOD: Collaborative, trustworthy, financially empowered, optimistic, partnership-focused.

OUTPUT: 1920x600px hero banner, web-optimized, professional quality.
```

---

---

## 🛠️ Post-Production: Adding Vector Graphics (Recommended Approach)

If vector graphics didn't generate (most common scenario), add them manually:

### Option 1: Photoshop/GIMP

1. Open generated photo in Photoshop
2. Create new layers above the photo
3. Use **Pen Tool** or **Shape Tool** to create arrows:
   - Color: #D72638 (Brand Red)
   - Style: Bold geometric with rounded edges
   - Position in left 40% negative space
   - 3 arrows total: 1 large (bottom-left), 2 smaller (upper-left, top-right)
   - Opacity: 88-92%
4. Create four-pointed stars:
   - Color: #003DA5 (Brand Blue)
   - Use polygon tool or custom shape
   - Add outer glow effect (20px, 30% opacity)
   - 5 stars scattered across composition
   - Opacity: 95-100%
5. Export as WebP (85% quality)

### Option 2: Figma/Canva

1. Import generated photo as background layer
2. Add vector shapes on top:
   - Arrows: Triangle/polygon tools, color #D72638
   - Stars: Star tool (4 points), color #003DA5
3. Position according to composition diagram above
4. Add blur/glow effects to stars
5. Adjust opacity and export

### Option 3: Online Tools

- **Photopea** (free Photoshop alternative): photopea.com
- **Pixlr** (online editor): pixlr.com
- **Canva** (design tool): canva.com

---

## 🚀 Next Steps After Generation

1. **Validate Photography Quality:**
   - Couple positioned on RIGHT 60% of frame
   - LEFT 40% has clean negative space
   - Proper props (laptop, documents, coffee cups)
   - Warm lighting and color grading
   - Minimum 1920px width

2. **Add Vector Graphics (Post-Production):**
   - Use Photoshop, Figma, or Canva
   - Add 3 red arrows (#D72638) in left negative space
   - Add 5 blue stars (#003DA5) scattered across
   - Follow composition diagram above

3. **Test Text Overlay:**
   - Add headline "Your Trusted Partner for Smart Financial Decisions"
   - Test CTA button visibility
   - Ensure readability of white or dark text

4. **Optimize for Web:**
   - Convert to WebP format (85% quality)
   - Target file size: <300KB for hero banner
   - Create responsive variants:
     - Desktop: 1920x600px
     - Tablet: 1280x400px
     - Mobile: 768x300px (or crop to focus on subjects)

5. **Replace in Code:**
   - Update `/app/page.tsx` HeroSection imageSrc
   - Test on staging environment
   - Verify Core Web Vitals (LCP target: <2.5s)

---

## 📝 Alt Text for Accessibility

```text
"Diverse couple collaborating on financial planning at home with laptop and documents, surrounded by upward red arrows and blue stars representing financial growth, trust, and partnership with KardTrust"
```

---

## 🎨 Color Specifications

```bash
PRIMARY BRAND COLORS:
- Red (Arrows):  #D72638  |  rgb(215, 38, 56)
- Blue (Stars):  #003DA5  |  rgb(0, 61, 165)

SCENE COLORS:
- Man's Shirt:   Light Blue Denim (#7BA8D1 range)
- Woman's Top:   Golden Yellow (#F4C542 range)
- Laptop:        Silver/Gray (#B8B8B8)
- Background:    Warm Neutrals (#F5F1E8 to #E8DCC9)
- Coffee Cups:   Dark Brown + Teal Green accents
```

---

## 📊 Success Criteria

This hero banner is successful when:

- ✅ Communicates partnership and collaboration instantly
- ✅ Text overlay on LEFT is readable and visually balanced
- ✅ Subjects on RIGHT create strong visual interest
- ✅ Brand colors exact and integrated seamlessly
- ✅ Warm, inviting, trustworthy first impression
- ✅ Arrows create upward visual flow
- ✅ Stars emphasize trust and excellence
- ✅ Loads quickly (LCP < 2.5s)
- ✅ Works responsively across devices

---

**File:** `PROMPT_BANNER_HOME_HERO.md`  
**Version:** 1.0  
**Created:** October 2025  
**Status:** ✅ Ready for Generation

---

_This prompt is specifically optimized for the KardTrust homepage hero banner. For other hero images, adapt the subject positioning, negative space requirements, and composition while maintaining brand element consistency._
