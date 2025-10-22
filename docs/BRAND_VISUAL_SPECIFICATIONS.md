# KardTrust Visual Brand Specifications for Image Generation

## Executive Summary

This document defines the precise visual specifications for generating branded stock photography for KardTrust's US financial services website. All images must combine hyper-realistic photography with branded vector graphic overlays.

---

## 1. Brand Color System

### Primary Brand Colors

| Color Name       | Hex Code  | RGB Values      | CMYK             | Pantone Equivalent | Usage                   |
| ---------------- | --------- | --------------- | ---------------- | ------------------ | ----------------------- |
| **Brand Red**    | `#D72638` | `215, 38, 56`   | `0, 82, 74, 16`  | ~PMS 186 C         | Arrows, accent elements |
| **Brand Blue**   | `#003DA5` | `0, 61, 165`    | `100, 63, 0, 35` | ~PMS 286 C         | Stars, trust elements   |
| **Neutral Dark** | `#2D2D2D` | `45, 45, 45`    | `0, 0, 0, 82`    | Black 7 C          | Typography, depth       |
| **Clean White**  | `#FFFFFF` | `255, 255, 255` | `0, 0, 0, 0`     | White              | Backgrounds, contrast   |

### Color Application Rules

- **Red Arrows:** Always use exact `#D72638` - no gradients, transparency 85-95%
- **Blue Stars:** Always use exact `#003DA5` - may include subtle glow, transparency 90-100%
- **Never mix:** Don't create purple/blended elements between red and blue

---

## 2. Vector Graphic Elements

### 2.1 Red Upward Arrows

**Design Specifications:**

- **Direction:** Upward trajectory (45° to 90° angles)
- **Style:** Modern, geometric, bold
- **Edge Treatment:** Smooth, rounded corners (2-4px radius)
- **Fill:** Solid color, no gradients (unless subtle inner shadow for depth)
- **Stroke:** None, or 1-2px darker red outline for definition

**Size Hierarchy:**

- **Hero Arrow:** 15-20% of image width (primary focal element)
- **Secondary Arrows:** 8-12% of image width (supporting elements)
- **Accent Arrows:** 4-6% of image width (detail elements)

**Placement Strategy:**

- Minimum 2 arrows, maximum 4 arrows per composition
- At least one arrow must be prominent (hero size)
- Position strategically to guide eye movement upward
- Never obscure subject's face or key product elements
- Create diagonal movement across the composition

**Visual Metaphor:**

- Represents: Financial growth, upward momentum, improvement, progress
- Should feel: Dynamic, aspirational, energetic, forward-moving

### 2.2 Blue Four-Pointed Stars

**Design Specifications:**

- **Shape:** Symmetrical 4-point star (like North Star or compass rose)
- **Point Angle:** 45° and 90° alternating (diamond orientation)
- **Style:** Clean, sharp points with subtle glow/shimmer effect
- **Fill:** Solid blue with optional inner white highlight for sparkle
- **Effect:** Subtle outer glow (10-20px, 30% opacity) for luminosity

**Size Hierarchy:**

- **Primary Stars:** 3-5% of image width (2-3 per image)
- **Accent Stars:** 1-2% of image width (3-4 per image)

**Placement Strategy:**

- Minimum 3 stars, maximum 6 stars per composition
- Scatter naturally across composition (not in rigid patterns)
- Position near arrows to create visual harmony
- Place some near subject's head (suggests excellence/achievement)
- Fill negative space without cluttering

**Visual Metaphor:**

- Represents: Trust, excellence, guidance, reliability, five-star service
- Should feel: Premium, trustworthy, aspirational, professional

---

## 3. Photography Standards

### 3.1 Technical Requirements

| Specification    | Requirement                                             |
| ---------------- | ------------------------------------------------------- |
| **Resolution**   | Minimum 1920x1080px (up to 4K preferred)                |
| **Aspect Ratio** | 16:9 (landscape) or 3:2 (flexible)                      |
| **Color Space**  | sRGB for web display                                    |
| **File Format**  | WebP (85% quality) or high-quality JPEG                 |
| **Lighting**     | Natural or professional studio (soft, diffused)         |
| **Focus**        | Sharp on subject with subtle depth of field (f/2.8-f/4) |

### 3.2 Aesthetic Guidelines

**Photographic Style:**

- Hyper-realistic, high-end stock photography quality
- Professional retouching (natural, not over-processed)
- Warm, inviting color grading (slight saturation boost)
- Clean, uncluttered backgrounds
- Dimensional depth for layering vector elements

**Lighting:**

- Soft, diffused natural light preferred
- Avoid harsh shadows or overexposed highlights
- Consistent lighting direction across image series
- Golden hour warmth for outdoor scenes

**Color Grading:**

- Warm tones (add +5-10% yellow/orange in midtones)
- Slight contrast increase for depth
- Natural skin tones (avoid orange or gray casts)
- Background slightly desaturated to emphasize subject

### 3.3 Subject Guidelines

**Demographics:**

- Diverse representation (age, gender, ethnicity)
- Professional or casual-professional attire
- Authentic, genuine expressions (avoid stock photo "fakeness")
- Modern, relatable appearance for US market

**Expressions & Body Language:**

- Confident, satisfied, empowered
- Natural smiles or focused concentration
- Open, approachable body language
- Suggesting financial confidence and control

**Props & Context:**

- Credit cards, smartphones, laptops, tablets
- Shopping bags, documents, coffee cups
- Modern, clean environments
- Minimal clutter, focused context

---

## 4. Composition Architecture

### 4.1 Spatial Layout

**Rule of Thirds Grid:**

```bash
[Star] [    Subject    ] [Arrow↑]
[     ][               ] [Star  ]
[Arrow][               ] [Star  ]
```

**Depth Layers (Z-Index):**

1. **Background Layer:** Photography (deepest)
2. **Mid Layer:** Vector elements behind subject
3. **Subject Layer:** Main photographic subject
4. **Foreground Layer:** Vector elements in front
5. **Top Layer:** Accent stars (highest)

### 4.2 Visual Balance

**Asymmetric Composition:**

- Subject occupies left or right third (not center)
- Vector elements balance opposite side
- Create diagonal movement lines
- Maintain 40-50% negative space

**Visual Weight Distribution:**

- Subject: 50-60% visual weight
- Arrows: 25-30% visual weight
- Stars: 10-15% visual weight
- Negative space: 40-50% (critical for breathing room)

---

## 5. Style Variations by Context

### 5.1 Hero Images (Homepage, Landing Pages)

**Photography:**

- Close-up or medium shot (waist-up or chest-up)
- Strong eye contact or confident expression
- Premium, aspirational feel

**Vector Graphics:**

- Bold, prominent elements (larger scale)
- 3-4 arrows, 4-5 stars
- High contrast and visibility

### 5.2 Blog/Article Images

**Photography:**

- Environmental portrait (full context)
- Lifestyle, candid feel
- Relatable, everyday scenarios

**Vector Graphics:**

- Subtle, supporting elements (smaller scale)
- 2-3 arrows, 3-4 stars
- Integrated naturally

### 5.3 Card/Thumbnail Images

**Photography:**

- Simplified composition
- Clear focal point
- High contrast

**Vector Graphics:**

- Minimal elements (1-2 arrows, 2-3 stars)
- Larger relative scale
- Bold and visible at small sizes

---

## 6. Quality Control Checklist

### Pre-Generation Review

- [ ] Reference image selected and analyzed
- [ ] Brand colors verified (#D72638, #003DA5)
- [ ] Prompt customized for specific context
- [ ] Technical specifications confirmed

### Post-Generation Review

**Photography Quality:**

- [ ] Hyper-realistic, professional quality
- [ ] Proper lighting and color grading
- [ ] Sharp focus on subject
- [ ] Clean, uncluttered background
- [ ] Natural, authentic subject portrayal

**Vector Graphics:**

- [ ] All old template graphics removed
- [ ] Exact brand colors used
- [ ] Arrows point upward (growth metaphor)
- [ ] Stars are four-pointed (trust symbol)
- [ ] Proper size hierarchy
- [ ] Balanced composition

**Integration:**

- [ ] Vector elements feel cohesive with photo
- [ ] Depth layering is natural
- [ ] 40-50% breathing room maintained
- [ ] No face obstruction
- [ ] Visual flow guides eye upward

**Technical:**

- [ ] Minimum 1920px width
- [ ] WebP format optimized
- [ ] File size under 500KB (for web)
- [ ] Alt text descriptive and accessible

---

## 7. Use Cases & Examples

### Use Case 1: Homepage Hero

**Scenario:** Primary landing page impression  
**Photography:** Professional woman with laptop and credit card, outdoor café  
**Arrows:** 1 large diagonal arrow (bottom-left to mid-right), 2 medium accent arrows  
**Stars:** 5 stars scattered, 2 prominent near subject's head  
**Mood:** Confident, aspirational, modern

### Use Case 2: Credit Card Category Page

**Scenario:** Product category showcase  
**Photography:** Person holding credit card prominently, satisfied expression  
**Arrows:** 2-3 upward arrows surrounding card  
**Stars:** 4 stars creating premium feel  
**Mood:** Trustworthy, premium, empowering

### Use Case 3: Blog Article Header

**Scenario:** Financial guidance content  
**Photography:** Person reviewing documents/tablet, focused expression  
**Arrows:** 2 subtle arrows suggesting progress  
**Stars:** 3-4 small stars adding professionalism  
**Mood:** Educational, relatable, helpful

---

## 8. File Management

### Naming Convention

```text
kardtrust-[type]-[context]-[subject]-[setting]-v[#].webp
```

**Examples:**

- `kardtrust-hero-credit-card-woman-outdoor-v1.webp`
- `kardtrust-blog-financial-planning-man-office-v1.webp`
- `kardtrust-card-shopping-woman-urban-v2.webp`

### Storage Structure

```markdown
/public/images/
├── hero/ (Homepage/landing hero images)
├── blog/ (Blog article headers)
├── cards/ (Category cards/thumbnails)
├── originals/ (High-res source files)
└── deprecated/ (Old template images to replace)
```

### Responsive Variants

Generate 3 sizes per image:

- **Desktop:** 1920px width (hero, full-width sections)
- **Tablet:** 1280px width (medium screens)
- **Mobile:** 768px width (small screens, thumbnails)

---

## 9. Accessibility Considerations

### Alt Text Formula

```bash
[Subject description] + [action/emotion] + [financial context] + [branded elements]
```

**Example:**

> "Smiling woman confidently holding credit card outdoors with laptop, surrounded by upward red arrows and blue stars representing financial growth and trust"

### Color Contrast

- Ensure text overlays meet WCAG AA standards (4.5:1 ratio)
- Red arrows on light backgrounds: ✅ Pass
- Blue stars on white backgrounds: ✅ Pass
- Test with color blindness simulators

---

## 10. Brand Consistency Enforcement

### Approved ✅

- Exact hex values: #D72638, #003DA5
- Upward-pointing arrows (growth)
- Four-pointed stars (trust)
- Modern, clean vector style
- Hyper-realistic photography
- 40-50% breathing room
- Asymmetric balance

### Not Allowed ❌

- Off-brand colors or color variations
- Downward or lateral arrows
- Generic stars or different star shapes
- Cluttered compositions
- Over-processed photography
- Gradient-heavy vectors
- Face obstruction
- Rigid, centered layouts

---

## 11. Revision & Iteration

### Common Adjustments

**"Arrows too subtle"**
→ Increase size of hero arrow to 20% width, add subtle drop shadow

**"Stars lack impact"**
→ Enhance glow effect, increase opacity to 100%, add white inner highlight

**"Composition cluttered"**
→ Remove 1-2 elements, increase negative space to 50%

**"Photography too cold"**
→ Add +10% warmth in color grading, boost yellow/orange midtones

**"Vector graphics look pasted on"**
→ Add subtle shadows, vary opacity (some 85%, others 95%), layer some behind subject

---

## 12. Legal & Compliance

### Image Rights

- All generated images must be original or properly licensed
- Ensure model releases for any identifiable people
- Commercial use rights required for all photography

### US Market Compliance

- Images should reflect US demographic diversity
- Financial context must be culturally appropriate for US market
- Avoid imagery that could be interpreted as misleading

### Accessibility

- Provide descriptive alt text for all images
- Ensure sufficient color contrast for overlaid text
- Test with screen readers

---

## Revision History

| Version | Date     | Changes                                |
| ------- | -------- | -------------------------------------- |
| 1.0     | Oct 2025 | Initial visual specifications document |

---

_This document should be used in conjunction with the master prompt template for consistent, brand-aligned image generation across all KardTrust digital properties._
