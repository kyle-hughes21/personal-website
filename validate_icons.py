#!/usr/bin/env python3
"""
Build-time validation script for personal website.
Checks that all icons referenced in skills.yaml exist in templates/icons/
"""
import yaml
import sys
from pathlib import Path

def load_skills():
    """Load skills from YAML data file."""
    skills_path = Path("data/skills.yaml")
    if not skills_path.exists():
        print(f"ERROR: {skills_path} not found")
        return None
    with open(skills_path) as f:
        return yaml.safe_load(f)

def collect_icons(data):
    """Extract all icon names from skills data."""
    icons = set()
    for category in data.get("skills", []):
        for skill in category.get("skills", []):
            icon = skill.get("icon")
            if icon:
                icons.add(icon)
    return icons

def check_icons(icons, icons_dir="templates/icons"):
    """Check if all icons exist in the icons directory."""
    icons_dir = Path(icons_dir)
    missing = []
    found = []
    
    for icon in sorted(icons):
        icon_path = icons_dir / f"{icon}.svg"
        if icon_path.exists():
            found.append(icon)
        else:
            missing.append(icon)
    
    return found, missing

def main():
    print("🔍 Validating icons...")
    
    # Load skills data
    data = load_skills()
    if data is None:
        sys.exit(1)
    
    # Collect all icons
    icons = collect_icons(data)
    print(f"📋 Found {len(icons)} unique icons in skills.yaml")
    
    # Check icons exist
    found, missing = check_icons(icons)
    
    # Report results
    print(f"✅ Found: {len(found)} icons")
    for icon in found:
        print(f"  ✓ {icon}.svg")
    
    if missing:
        print(f"\n❌ Missing: {len(missing)} icons")
        for icon in missing:
            print(f"  ✗ {icon}.svg")
        print("\n❌ Build validation FAILED - missing icons must be added")
        return False
    else:
        print("\n✅ All icons validated successfully!")
        return True

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)