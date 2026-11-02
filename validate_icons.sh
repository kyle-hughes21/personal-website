#!/bin/bash
# Build-time validation script for personal website
# Checks that all icons referenced in skills.yaml exist in templates/icons/

# Don't use set -e since ((found++)) returns 0 which triggers exit

SKILLS_FILE="data/skills.yaml"
ICONS_DIR="templates/icons"

if [[ ! -f "$SKILLS_FILE" ]]; then
    echo "ERROR: $SKILLS_FILE not found"
    exit 1
fi

if [[ ! -d "$ICONS_DIR" ]]; then
    echo "ERROR: $ICONS_DIR directory not found"
    exit 1
fi

# Extract all icon names from skills.yaml
icons=$(grep -oP 'icon: *"\K[^"]+' "$SKILLS_FILE" | sort -u)

echo "🔍 Validating icons..."
echo "📋 Checking $(echo "$icons" | wc -l) unique icons in skills.yaml"

missing=()
found=0

while IFS= read -r icon; do
    [[ -z "$icon" ]] && continue
    icon_file="${icon}.svg"
    if [[ -f "templates/icons/${icon_file}" ]]; then
        echo "  ✓ ${icon_file}"
        found=$((found + 1))
    else
        missing+=("${icon_file}")
    fi
done <<< "$icons"

echo ""
echo "✅ Found: $found icons"

if [[ ${#missing[@]} -gt 0 ]]; then
    echo ""
    echo "❌ Missing: ${#missing[@]} icons"
    for icon in "${missing[@]}"; do
        echo "  ✗ ${icon}"
    done
    echo ""
    echo "❌ Build validation FAILED - missing icons must be added"
    exit 1
else
    echo ""
    echo "✅ All icons validated successfully!"
    exit 0
fi