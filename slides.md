---
theme: default
title: From Sidewalk to Signal
titleTemplate: '%s — PCW × Temple Libraries'
layout: cover
colorSchema: light
fonts:
  sans: Nunito Sans
  mono: Fira Code
info: |
  **From Sidewalk to Signal**  
  Mapping Internet Access with Street-Level Imagery  
  Philly Community Wireless × Temple Libraries  
  State of the Map US 2026
---

<video class="cover-bg" :src="`${import.meta.env.BASE_URL}Untitled.mp4`" autoplay loop muted playsinline></video>
<div class="cover-bg-overlay"></div>

<img :src="`${import.meta.env.BASE_URL}sotmus-2026-logo.png`" style="position: absolute; top: 1.5rem; right: 1.5rem; height: 7.5rem; z-index: 10;" alt="State of the Map US 2026" />

<div style="position: relative; z-index: 2;">

# From Sidewalk to Signal

<p style="font-size: 1.4rem; color: rgba(255,255,255,0.9); margin-top: 0.5rem; margin-bottom: 2.5rem;">
  Mapping Internet Access with Street-Level Imagery
</p>

<div style="display: flex; align-items: center; gap: 2rem; border-top: 2px solid rgba(255,255,255,0.3); padding-top: 1.25rem;">
  <img :src="`${import.meta.env.BASE_URL}pcw-logo.svg`" style="height: 2rem;" alt="Philly Community Wireless" />
  <span style="color: rgba(255,255,255,0.35); font-size: 1.2rem;">·</span>
  <img :src="`${import.meta.env.BASE_URL}TU_Primary_White.png`" style="height: 2.4rem;" alt="Temple University Libraries" />
</div>

</div>

<!--
Open with presence. You're at State of the Map US — a room full of people who care about who makes maps and why. Introduce yourself briefly: your role at PCW and/or Temple. Then gesture at the image: "This is one of our volunteers. They live in the neighborhood. They're walking their own block. That's the whole program in one frame." Pause.

The talk is about two things: the digital divide in Philadelphia, and how street-level imagery — the kind anyone can capture with a phone — becomes a civic tool when community members hold the camera.
-->

---
layout: default
---

# The Problem

<div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.5rem;">

<p style="margin: 0; font-size: 1rem; line-height: 1.5;">
  <strong>Philadelphia ranks among the least connected large US cities.</strong> Connectivity gaps map directly onto race, income, and historic disinvestment — redlining didn't end, it migrated to broadband.
</p>

<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; align-items: start;">

<figure style="margin: 0;">
  <img :src="`${import.meta.env.BASE_URL}maps/broadband.png`" style="width: 100%; max-height: 43vh; object-fit: contain; border-radius: 8px; box-shadow: 0 2px 12px rgba(18,50,72,0.13);" />
  <figcaption style="margin-top: 0.25rem; font-size: 0.75rem; color: #555; text-align: center; line-height: 1.3;">
    <strong style="color: #5262ed;">No broadband access</strong><br/>Census block groups
  </figcaption>
</figure>

<figure style="margin: 0;">
  <img :src="`${import.meta.env.BASE_URL}maps/internet.png`" style="width: 100%; max-height: 43vh; object-fit: contain; border-radius: 8px; box-shadow: 0 2px 12px rgba(18,50,72,0.13);" />
  <figcaption style="margin-top: 0.25rem; font-size: 0.75rem; color: #555; text-align: center; line-height: 1.3;">
    <strong style="color: #ff8000;">No internet access</strong><br/>Census block groups
  </figcaption>
</figure>

<figure style="margin: 0;">
  <img :src="`${import.meta.env.BASE_URL}maps/race.png`" style="width: 100%; max-height: 43vh; object-fit: contain; border-radius: 8px; box-shadow: 0 2px 12px rgba(18,50,72,0.13);" />
  <figcaption style="margin-top: 0.25rem; font-size: 0.75rem; color: #555; text-align: center; line-height: 1.3;">
    <strong style="color: #123248;">Predominant race / ethnicity</strong><br/>Census tracts
  </figcaption>
</figure>

</div>

<div style="background: #f0eeff; border-radius: 8px; padding: 0.45rem 1rem; font-size: 0.78rem; color: #444; display: flex; align-items: center; gap: 0.5rem;">
  <mdi-circle style="color: #ff665a; flex-shrink: 0;" /> PCW service area outlined on each map · ACS 2020–2024 5-year estimates
</div>

</div>

<!--
Don't rush the statistics. Let "Philadelphia ranks among the least connected large US cities" land before explaining why. Then connect it to what the audience already knows: mapping is political. Data determines who receives services. If your neighborhood isn't on the map — or is mapped wrong — you're invisible to policy.

The three maps are the argument made visual: the broadband and internet deserts concentrate in the same neighborhoods where Black and Hispanic residents live. The PCW service area circle connects the data to the place. Let the audience read the maps for a moment before moving on.
-->

---
layout: default
---

# Who Gets Left Behind?

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; margin-top: 1.25rem; align-items: start;">
<div style="display: flex; flex-direction: column; gap: 1.25rem;">

<div style="background: #f0eeff; border-radius: 12px; padding: 1.25rem 1.5rem; border-left: 5px solid #5262ed;">
  <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 0.4rem;">Black residents without internet · Philadelphia</div>
  <div style="font-size: 2.6rem; font-weight: 900; color: #5262ed; line-height: 1;">69,226</div>
  <div style="font-size: 0.85rem; color: #555; margin-top: 0.4rem;">city-wide &nbsp;·&nbsp; <strong style="color: #123248;">6,019</strong> in the PCW service area</div>
</div>

<div style="background: #fff3e0; border-radius: 12px; padding: 1.25rem 1.5rem; border-left: 5px solid #ff8000;">
  <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 0.4rem;">Hispanic residents without internet · Philadelphia</div>
  <div style="font-size: 2.6rem; font-weight: 900; color: #ff8000; line-height: 1;">24,156</div>
  <div style="font-size: 0.85rem; color: #555; margin-top: 0.4rem;">city-wide &nbsp;·&nbsp; <strong style="color: #123248;">11,486</strong> in the PCW service area</div>
</div>

<div style="background: #fff0ee; border-radius: 12px; padding: 1rem 1.25rem; border-left: 5px solid #ff665a; font-size: 0.85rem; color: #5c1b14;">
  <mdi-map-marker style="color: #ff665a;" /> Nearly <strong>1 in 2</strong> Hispanic Philadelphians without internet lives within the PCW service area.
</div>

</div>
<div style="display: flex; flex-direction: column; justify-content: center; gap: 1.25rem; padding-top: 1rem;">

<div class="callout" style="font-size: 1.15rem; line-height: 1.55;">
  <mdi-wifi-off style="font-size: 2rem; display: block; margin-bottom: 0.75rem;" />
  "How do you even begin to address a gap you can't see?"
</div>

<div style="background: #f8f6ff; border-radius: 10px; padding: 0.85rem 1rem;">
  <div style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 0.6rem;">Philadelphia city-wide · all residents without internet</div>
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem 1rem;">
    <div style="font-size: 0.82rem; color: #333;"><span style="font-weight: 700; color: #5262ed;">69,226</span> &nbsp;Black</div>
    <div style="font-size: 0.82rem; color: #333;"><span style="font-weight: 700; color: #888;">34,570</span> &nbsp;White</div>
    <div style="font-size: 0.82rem; color: #333;"><span style="font-weight: 700; color: #ff8000;">24,156</span> &nbsp;Hispanic</div>
    <div style="font-size: 0.82rem; color: #333;"><span style="font-weight: 700; color: #b47fe0;">6,327</span> &nbsp;Asian</div>
  </div>
  <div style="margin-top: 0.55rem; padding-top: 0.55rem; border-top: 1px solid #e0dce8; font-size: 0.82rem; color: #123248; font-weight: 700;">134,279 total</div>
</div>

<div style="font-size: 0.75rem; color: #aaa; padding: 0 0.1rem; line-height: 1.5;">
  ACS 2020–2024 5-year estimates · PCW area = census tracts intersecting service boundary
</div>

</div>
</div>

<!--
Let the numbers land. The 47.5% figure — nearly half of all Hispanic Philadelphians without internet living in the PCW service area — is the statistic that makes the case for why this neighborhood, this program, this work. Then the quote bridges to the next slide: the gap is visible now. The question is what you do about it.
-->

---
layout: default
---

# The Invisibility Problem

<div style="position: relative; margin-top: 1rem;">
<div style="display: grid; grid-template-columns: 3fr 2fr; gap: 1.5rem; align-items: start;">

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; align-items: end;">

  <figure style="margin: 0;">
    <img :src="`${import.meta.env.BASE_URL}maps/IMG_6707.jpg`" style="width: 100%; height: 19vh; object-fit: cover; border-radius: 7px; box-shadow: 0 2px 12px rgba(18,50,72,0.13);" />
    <figcaption style="margin-top: 0.25rem; font-size: 0.65rem; color: #555; text-align: center; line-height: 1.3;"><strong style="color: #E87461;">PCW</strong> · node installation</figcaption>
  </figure>

  <figure style="margin: 0;">
    <img :src="`${import.meta.env.BASE_URL}maps/fcc_broadband.png`" style="width: 100%; height: 19vh; object-fit: contain; border-radius: 7px; box-shadow: 0 2px 12px rgba(18,50,72,0.13);" />
    <figcaption style="margin-top: 0.25rem; font-size: 0.65rem; color: #555; text-align: center; line-height: 1.3;"><strong style="color: #3B3F8C;">FCC broadband</strong> · reported coverage</figcaption>
  </figure>

  <figure style="margin: 0;">
    <img :src="`${import.meta.env.BASE_URL}maps/mapillary_traces.png`" style="width: 100%; height: 19vh; object-fit: contain; border-radius: 7px; box-shadow: 0 2px 12px rgba(18,50,72,0.13);" />
    <figcaption style="margin-top: 0.25rem; font-size: 0.65rem; color: #555; text-align: center; line-height: 1.3;"><strong style="color: #72C96A;">Mapillary</strong> · image sequences</figcaption>
  </figure>

  <figure style="margin: 0;">
    <img :src="`${import.meta.env.BASE_URL}maps/public_wifi.png`" style="width: 100%; height: 19vh; object-fit: contain; border-radius: 7px; box-shadow: 0 2px 12px rgba(18,50,72,0.13);" />
    <figcaption style="margin-top: 0.25rem; font-size: 0.65rem; color: #555; text-align: center; line-height: 1.3;"><strong style="color: #2E7D32;">Public WiFi</strong> · city facilities</figcaption>
  </figure>

</div>

<div style="display: flex; flex-direction: column; gap: 1rem;">

<div class="callout">
  "The map isn't neutral."
</div>

<div class="tags">
  <span class="tag"><mdi-map /> OpenStreetMap</span>
  <span class="tag"><mdi-walk /> Micromapping</span>
  <span class="tag"><mdi-city /> Data deserts</span>
  <span class="tag"><mdi-account-group /> Community authorship</span>
</div>

<div style="border: 1px solid #ffb5ae; border-radius: 10px; padding: 1rem; font-size: 0.82rem; color: #5c1b14; background: #fff0ee;">
  <strong style="color: #ff665a;">Why this matters for PCW:</strong> Accurate neighborhood data — poles, rooftops, line-of-sight obstructions — directly affects where mesh nodes can be placed.
</div>

</div>
</div>
<img v-click :src="`${import.meta.env.BASE_URL}maps/grant.jpg`" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; border-radius: 8px; z-index: 10;" />
</div>

<!--
This is the philosophical core of the talk. Take a beat on "the map isn't neutral." You can reference concrete examples: FCC broadband maps that overstated coverage by counting a census block as served if even one address had access. HOLC redlining maps that still predict broadband access gaps today. Then pivot: OSM exists precisely because someone said "we can do this differently." PCW is doing the same thing with internet infrastructure.
-->

---
layout: default
---

# Enter Street-Level Imagery

<div style="display: grid; grid-template-columns: 2fr 3fr; grid-template-rows: 3fr 2fr; gap: 0.65rem; margin-top: 0.65rem; height: 54vh; overflow: hidden;">

  <img :src="`${import.meta.env.BASE_URL}maps/capture.jpg`" style="grid-row: 1 / 3; width: 100%; height: 100%; object-fit: cover; border-radius: 8px; box-shadow: 0 2px 14px rgba(18,50,72,0.15);" />

  <img :src="`${import.meta.env.BASE_URL}maps/wide.png`" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px; box-shadow: 0 2px 14px rgba(18,50,72,0.15);" />

  <div style="display: flex; flex-direction: column; gap: 0.5rem; overflow: hidden;">
    <div class="callout" style="font-size: 0.95rem; line-height: 1.4; padding: 0.6rem 0.9rem;">
      "The tools aren't new.<br/>What's new is who's using them."
    </div>
    <div class="info-chip" style="font-size: 0.8rem; padding: 0.5rem 0.75rem;">
      <mdi-camera style="font-size: 1.2rem; color: #5262ed; flex-shrink: 0;" />
      <div>Phones + a 360° camera. Imagery uploaded to Mapillary's open platform. Linked to OSM changesets. No proprietary lock-in.</div>
    </div>
  </div>

</div>

<!--
This is the moment where the audience should feel "oh, I see how this connects." Mapillary and OSM aren't new — many people in this room use them. The insight is that community organizations like PCW, with trusted relationships in underserved neighborhoods, can bring these tools to people who'd never have encountered them otherwise. The camera grant is worth mentioning specifically: it lowered the barrier to entry. You didn't have to already have resources to start.
-->

---
layout: default
---

# The Model

<div style="margin-top: 1.25rem;">

<div class="workflow">
  <span class="step"><mdi-account-plus /> Recruit</span>
  <span class="arrow">→</span>
  <span class="step lilac"><mdi-school /> Train</span>
  <span class="arrow">→</span>
  <span class="step orange"><mdi-map-search /> Survey</span>
  <span class="arrow">→</span>
  <span class="step"><mdi-pencil-ruler /> Map</span>
  <span class="arrow">→</span>
  <span class="step salmon"><mdi-lightbulb /> Decide</span>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 1.5rem;">
<div>

**OSM editing sessions**
- Volunteers + library staff, side by side
- Imagery as live reference — no guessing
- Real edits that stay on the map
  

**Photo surveys**
- Norris Square + Fairhill corridors
- Block-by-block
- Existing infrastructure, poles, rooftops, sightlines

</div>
<div>

**Mapillary capture training**
- Phones + 360° camera
- Upload and review sequences

**Temple Libraries**
- Trusted, neutral convening space
- Devices, training room, internet
- Long-term data stewardship

</div>
</div>
</div>

<!--
Walk through each step of the workflow at a pace the audience can follow. The key insight here is that each step builds on the last — you can't have meaningful OSM edits without the photo surveys, and you can't have good surveys without training. Temple Libraries deserves its own beat: they're not just providing a room. They're bringing librarian expertise in data literacy, community outreach, and long-term stewardship of information.
-->

---
layout: default
---

# About PCW + Coverage

<div style="display: flex; flex-direction: row; gap: 2rem; margin-top: 0.4rem; align-items: flex-start;">

  <img :src="`${import.meta.env.BASE_URL}maps/signal.gif`" style="max-height: 46vh; width: auto; border-radius: 8px; box-shadow: 0 2px 14px rgba(18,50,72,0.12); flex-shrink: 0;" />

  <div style="display: flex; flex-direction: column; gap: 1rem; padding-top: 0.5rem; flex: 1;">

**Philly Community Wireless** is a community-owned mesh network serving North Philadelphia — built by the neighborhood, for the neighborhood.

<div class="tags">
  <span class="tag"><mdi-map-marker /> Norris Square</span>
  <span class="tag"><mdi-map-marker /> Fairhill</span>
</div>

Signal is designed to reach **public spaces** — parks, plazas, sidewalks. Internet as a public good, not a private subscription.

<div class="callout" style="font-size: 0.95rem; line-height: 1.4; padding: 0.65rem 0.9rem;">
  "A sidewalk doesn't ask you to prove you live nearby."
</div>

  </div>

</div>

<!--
Ground the audience in the geography. If you have a real coverage map to swap in, this slide lands harder with it visible. The key point is that PCW's design philosophy is public-facing: the signal reaches parks and sidewalks on purpose. That's a political choice. Connect this to the broader argument: community infrastructure built by the community, for the community, with community-mapped data guiding where it goes.
-->

---
layout: default
---

# What the Camera Sees

<div style="display: grid; grid-template-columns: 1fr 1.4fr; gap: 1.5rem; margin-top: 0.5rem; align-items: start;">

<div style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.88rem;">

<strong style="font-size: 0.95rem;">Primary goal: mesh node siting</strong>

- Utility poles: height, condition, attachment points
- Rooftops: access, sightlines, structural suitability
- Line-of-sight corridors: trees, buildings, obstructions
- Neighbor rooftop visibility between relay nodes

<span style="font-size: 0.85rem;">One survey walk generates <strong>months of reference data</strong> — far more current than Google Street View.</span>

<div style="background: #fff3e0; border-radius: 10px; padding: 0.6rem 0.9rem; font-size: 0.8rem; color: #7a3800; font-weight: 700; border-left: 4px solid #ff8000;">
  <mdi-camera style="margin-right: 0.4rem; color: #ff8000;" /> One walk. One camera. Multiple uses. The data belongs to the neighborhood.
</div>

</div>

<div style="position: relative; width: 100%;">
  <img :src="`${import.meta.env.BASE_URL}maps/one.jpeg`"   style="width: 100%; height: auto; display: block; border-radius: 6px; box-shadow: 0 2px 10px rgba(18,50,72,0.13);" />
  <img v-click :src="`${import.meta.env.BASE_URL}maps/two.jpeg`"   style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; border-radius: 6px;" />
  <img v-click :src="`${import.meta.env.BASE_URL}maps/three.jpeg`" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; border-radius: 6px;" />
  <img v-click :src="`${import.meta.env.BASE_URL}maps/four.jpeg`"  style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; border-radius: 6px;" />
  <img v-click :src="`${import.meta.env.BASE_URL}maps/five.jpeg`" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; border-radius: 6px;" />
</div>

</div>

<!--
This is the "aha" slide. The primary use case is clear — siting mesh nodes — but the secondary value is what makes this a broader civic tool. A volunteer who walks their block to help PCW is also, without extra effort, documenting the state of their sidewalk, their streetlights, their public benches. That data can support a 311 complaint, a city council presentation, a research study. Emphasize: the data doesn't disappear after the node decision is made.
-->

---
layout: default
---

# What the Camera Sees

<div style="display: grid; grid-template-columns: 1fr 1.4fr; gap: 1.5rem; margin-top: 0.5rem; align-items: start;">

<div style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.88rem;">

<strong style="font-size: 0.95rem;">Secondary value: neighborhood documentation</strong>

- Broken streetlights and lighting gaps
- Missing or damaged benches and seating
- Sidewalk conditions and accessibility barriers
- Vacant lots and abandoned structures
- Tree canopy and shade

Even where **no node is placed**, the walk produces a documented neighborhood baseline — evidence that didn't exist before.

<div style="background: #fff3e0; border-radius: 10px; padding: 0.6rem 0.9rem; font-size: 0.8rem; color: #7a3800; font-weight: 700; border-left: 4px solid #ff8000;">
  <mdi-camera style="margin-right: 0.4rem; color: #ff8000;" /> One walk. One camera. Multiple uses. The data belongs to the neighborhood.
</div>

</div>

<div style="display: grid; grid-template-columns: 1fr 1.6fr; gap: 0.5rem; height: 54vh;">
  <img :src="`${import.meta.env.BASE_URL}maps/pole1.jpg`"    style="width: 100%; height: 100%; object-fit: cover; border-radius: 7px; box-shadow: 0 2px 10px rgba(18,50,72,0.13);" />
  <img :src="`${import.meta.env.BASE_URL}maps/pole2.jpg`" style="width: 100%; height: 100%; object-fit: cover; border-radius: 7px; box-shadow: 0 2px 10px rgba(18,50,72,0.13);" />
</div>

</div>

<!--
Secondary use case: the walk produces more than node siting data. Every photo taken for PCW's technical purposes also documents the neighborhood's physical state. That data belongs to the community — a baseline that can support 311 complaints, council presentations, research, and advocacy.
-->

---
layout: default
---

# Early Results

<div style="position: relative; margin-top: 0.75rem;">
<div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 2rem; align-items: start;">

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem;">

  <figure style="margin: 0;">
    <img :src="`${import.meta.env.BASE_URL}maps/old_all.png`" style="width: 100%; height: auto; border-radius: 7px; box-shadow: 0 2px 10px rgba(18,50,72,0.13);" />
    <figcaption style="margin-top: 0.3rem; font-size: 0.7rem; color: #888; text-align: center; line-height: 1.3;"><strong style="color: #555;">Before</strong> · sparse coverage</figcaption>
  </figure>

  <figure style="margin: 0;">
    <img :src="`${import.meta.env.BASE_URL}maps/current_all.png`" style="width: 100%; height: auto; border-radius: 7px; box-shadow: 0 2px 10px rgba(18,50,72,0.13);" />
    <figcaption style="margin-top: 0.3rem; font-size: 0.7rem; color: #2E7D32; text-align: center; line-height: 1.3;"><strong style="color: #2E7D32;">After</strong> · community-mapped</figcaption>
  </figure>

  <img :src="`${import.meta.env.BASE_URL}maps/park.png`" style="grid-column: 1 / -1; width: 100%; height: 16vh; object-fit: cover; object-position: center; border-radius: 7px; box-shadow: 0 2px 10px rgba(18,50,72,0.13);" />

</div>
<div>

**What changed in practice:**

Faster more reliable LoS pre-assessment. 

**OSM contributions included:**
- Park micromapping
- New sidewalk segments not previously mapped
- Corrected building footprints
- Added amenities (benches, bike parking, accessibility features)
- Added Community Gardens

</div>
</div>
<div v-click style="position: absolute; inset: 0; display: flex; flex-direction: row; gap: 0.5rem; z-index: 10; background: #f9f7f4; border-radius: 8px; padding: 0.25rem;">
  <img :src="`${import.meta.env.BASE_URL}maps/parcelas.png`" style="flex: 1.4; min-width: 0; object-fit: cover; border-radius: 6px;" />
  <img :src="`${import.meta.env.BASE_URL}maps/parcelas2.jpg`" style="flex: 1; min-width: 0; object-fit: cover; border-radius: 6px;" />
</div>
</div>

<!--
Be honest about what's a placeholder and what's real — the audience will respect that more than inflated numbers. If you have real numbers by talk day, these stat boxes are easy to fill in. The structural detail story is worth telling slowly: a volunteer, not a professional surveyor, noticed something that changed a technical decision. That's the power of community knowledge. This is also a good place to mention any specific OSM changesets or Mapillary sequence links if you want the audience to be able to look them up later.
-->

---
layout: default
---

# Lessons Learned

<div style="position: relative; margin-top: 0.75rem;">
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start;">

<div style="display: flex; flex-direction: column; gap: 0.6rem; font-size: 1.05rem;">

- Recruiting and **keeping** volunteers
- Larger and **hillier** than expected
- Some capture modes feel more natural — **biking**
- Focus on **specific topics** first
- **In-person** sessions &gt; virtual
- Tie mapping to **other community goals** (air quality monitors)

<div class="callout" style="font-size: 0.9rem; line-height: 1.4; padding: 0.65rem 0.9rem; margin-top: 0.5rem;">
  The community already knows what matters — mapping gives them the tools to prove it.
</div>

</div>

<img :src="`${import.meta.env.BASE_URL}maps/lessons.jpg`" style="width: 100%; height: 54vh; object-fit: cover; border-radius: 8px; box-shadow: 0 2px 10px rgba(18,50,72,0.13);" />

</div>
<div v-click style="position: absolute; inset: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; z-index: 10;">
  <img :src="`${import.meta.env.BASE_URL}maps/monitor.jpg`" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;" />
  <img :src="`${import.meta.env.BASE_URL}maps/purple.png`" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;" />
</div>
</div>

<!--
Lessons learned from running the program:
- Recruiting and keeping volunteers: it's an ongoing effort, not a one-time ask. Retention is as hard as recruitment.
- The service area is larger and hillier than we initially estimated — pace and logistics matter more than expected.
- Some capture modes feel more natural. For me, biking worked best. Volunteers should choose what fits their block.
- Starting with a specific mapping topic (e.g. poles, sidewalks) is more productive than trying to capture everything at once.
- In-person mapping sessions create energy and accountability that virtual ones don't replicate.
- The strongest programs tie mapping to goals people already care about — community gardens, air quality, safety.
-->

---
layout: default
---

# Community Power

<div style="display: grid; grid-template-columns: 3fr 2fr; gap: 2rem; margin-top: 1rem; align-items: start;">
<div style="display: flex; flex-direction: column; gap: 0.75rem;">

<div style="font-size: 0.82rem; line-height: 1.5;">

Community mapping shifts **who authors the neighborhood**.

When residents hold the camera, they decide what's worth capturing. When they make OSM edits, they decide what's worth naming. When they present the data to a city council meeting, they decide what's worth fighting for.

</div>

<div style="border-radius: 10px; background: #fff3e0; padding: 0.8rem 1rem; font-size: 0.82rem; color: #123248; border-left: 4px solid #ff8000;">
  <div style="font-size: 0.62rem; text-transform: uppercase; letter-spacing: 0.1em; color: #ff8000; margin-bottom: 0.4rem; font-weight: 700;">PCW mapping team</div>
  <ul style="margin: 0; padding-left: 1.1rem; line-height: 1.7;">
    <li>Cover the whole area with 360 images</li>
    <li>Map sidewalks</li>
    <li>Micromap community gardens and parks</li>
    <li>Update elements (trees, buildings, public spaces, partners)</li>
  </ul>
</div>

<div style="border-radius: 10px; background: #f7eeff; padding: 0.8rem 1rem; font-size: 0.82rem; color: #123248; border-left: 4px solid #d48aff;">
  <div style="font-size: 0.62rem; text-transform: uppercase; letter-spacing: 0.1em; color: #d48aff; margin-bottom: 0.4rem; font-weight: 700;">Images used for</div>
  <ul style="margin: 0; padding-left: 1.1rem; line-height: 1.7;">
    <li>Neighborhood change archive / evidence</li>
    <li>Measure greenery</li>
    <li>Advocate for new / better infrastructure</li>
  </ul>
</div>

</div>
<div>

<img :src="`${import.meta.env.BASE_URL}maps/close.jpg`" style="width: 100%; aspect-ratio: 1 / 1; border-radius: 8px; box-shadow: 0 2px 10px rgba(18,50,72,0.13); object-fit: cover;" />

</div>
</div>

<!--
This is the thesis made explicit. Don't rush it. The "data as evidence" framing is powerful — name it clearly. Then make the sidewalk-to-internet parallel explicit: both are infrastructure, both are essential, both are unequally distributed, and both can be made visible through community-led mapping. The word "visibility" connects back to the "invisibility problem" from slide 3. If you want, call that back explicitly: "Remember the invisibility problem? This is the answer."
-->

---
layout: center
class: text-center
---

<img :src="`${import.meta.env.BASE_URL}maps/end.jpg`" style="width: 100%; height: 28vh; object-fit: cover; object-position: center 40%; border-radius: 10px; margin-bottom: 1.75rem; box-shadow: 0 2px 16px rgba(18,50,72,0.18);" />

<div style="max-width: 680px; margin: 0 auto;">

<div class="callout" style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.75rem;">
  Infrastructure is never neutral — next time you connect, ask whose network it is, and who it was built for.
</div>

<div style="border-top: 2px solid #5262ed; padding-top: 1.25rem; text-align: left; display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">

<div style="display: flex; flex-direction: column; gap: 0.5rem;">
  <img :src="`${import.meta.env.BASE_URL}maps/pcw.png`" style="height: 4rem; object-fit: contain; object-position: left;" />
  <div style="font-size: 0.82rem; color: #555; line-height: 1.7;">
    phillycommunitywireless.org<br/>
    info@phillycommunitywireless.org
  </div>
</div>

<div style="display: flex; flex-direction: column; gap: 0.5rem;">
  <img :src="`${import.meta.env.BASE_URL}maps/Libraries_Red_Black.png`" style="height: 4rem; object-fit: contain; object-position: left;" />
  <div style="font-size: 0.82rem; color: #555; line-height: 1.7;">
    felipe.valdez@temple.edu<br/>
    library.temple.edu/gis
  </div>
</div>

</div>

</div>

<!--
Return to the opening energy. If you have the photo from slide 1 available, you could echo it visually here — same volunteer, same block. The three questions ("Whose streets? Who captured? Who uses?") are meant to be universal, not just about PCW. You're sending the audience out with a new lens for every map they open. End warmly but with intention — this isn't a call to action with a signup sheet, it's a call to awareness. Then take questions.
-->
