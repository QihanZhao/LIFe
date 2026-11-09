# LIFe — Native Interaction for Humanoid Robots

**Move by teleop. Interact natively.**

A video-first project page for LIFe, exploring native physical interaction for humanoid robots.

This repository contains **only public-facing project-page assets**. It does not include training code, model weights, policy observations, implementation details, or a manuscript.

## Preview locally

Open `index.html` in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/`.

## Publish with GitHub Pages

Create a **public** repository named `LIFe` under `QihanZhao`, upload the files in this folder to the repository root, then go to **Settings → Pages → Build and deployment → Deploy from a branch → main / (root)** and save.

Your default address will be:

`https://qihanzhao.github.io/LIFe/`

Alternatively, on macOS, install the [GitHub CLI](https://cli.github.com/) and run `bash deploy.sh` from this directory. This script creates the repository, pushes the page, and attempts to enable GitHub Pages.

## Project notes

- The captioned, final 1080p60, 93-second real-robot demonstration is embedded at `assets/video/life-demo.mp4`.
- The page intentionally focuses on research vision and qualitative demonstrations; implementation details are reserved for the paper.
- No ICRA or CoRL acceptance claim is made; no preprint link is added until the paper is public.
- Public author credits and linked profiles are displayed in the hero: Qihan Zhao¹²*, Jiayang He²*, Yinhuai Wang¹²*, Ping Tan¹². ¹ HKUST; ² SLAI; * equal contribution.

## Visual asset provenance

All six still images are cropped directly from the supplied **caption-free 1920×1080, 60 fps video master**. No AI-generated or AI-inpainted frames are used. The film player uses the separate **captioned final 1080p60 master**.

| Asset | Frame time | Use |
| --- | --- | --- |
| `hero.jpg` | 00:03.5 | Main visual: G1 + VR operator |
| `continuity.jpg` | 00:21.5 | Continuous carry card |
| `catch.jpg` | 01:23.6 | Dynamic catch card |
| `chair.jpg` | 01:01.5 | Chair interaction card |
| `exchange.jpg` | 00:43.4 | Human–robot exchange card |
| `poster.jpg` | 00:02.5 | Video player / social preview |

Pages is not automatically published by creating these files. Follow the deployment instructions above.
