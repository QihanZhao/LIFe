#!/usr/bin/env bash
# One-time GitHub publishing helper. Run only when ready to make this page PUBLIC.
set -euo pipefail
cd "$(dirname "$0")"
REPO="QihanZhao/LIFe"
URL="https://qihanzhao.github.io/LIFe/"
if ! command -v gh >/dev/null; then
  echo "GitHub CLI (gh) is required. Install: https://cli.github.com/"
  echo "On macOS: brew install gh"
  exit 1
fi
if ! command -v git >/dev/null; then echo "Git is required."; exit 1; fi
if ! gh auth status >/dev/null 2>&1; then
  echo "Sign in to your GitHub account..."
  gh auth login
fi
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  git init -b main
  git add .
  git commit -m "Launch LIFe research project page"
fi
if gh repo view "$REPO" >/dev/null 2>&1; then
  echo "Repository exists: $REPO"
  if ! git remote get-url origin >/dev/null 2>&1; then
    git remote add origin "https://github.com/$REPO.git"
  fi
  git push -u origin main
else
  gh repo create "$REPO" --public --description "LIFe — a step toward native interaction for humanoid robots" --source=. --remote=origin --push
fi
if gh api "repos/$REPO/pages" >/dev/null 2>&1; then
  echo "GitHub Pages is already configured."
else
  if gh api -X POST "repos/$REPO/pages" -f 'source[branch]=main' -f 'source[path]=/' >/dev/null 2>&1; then
    echo "GitHub Pages enabled."
  else
    echo "Could not enable GitHub Pages automatically."
    echo "Open https://github.com/$REPO/settings/pages"
    echo "Select: Deploy from a branch -> main -> / (root) -> Save"
  fi
fi
echo "Repo: https://github.com/$REPO"
echo "Website (after the first Pages deployment): $URL"
