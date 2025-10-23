# KeeHoo Theme System

This document explains how to use the centralized theme system for the KeeHoo application.

## Overview

The theme system is built using Tailwind CSS with custom color palettes, typography, and design tokens. All colors and styles are centralized in `tailwind.config.js` for easy maintenance and consistency.

## Color System

### Primary Colors (Brand)
- `primary-50` to `primary-900`: Main brand purple colors
- `primary-600`: Main brand color (used for buttons, links, highlights)
- `primary-100`: Light background for primary elements

### Secondary Colors
- `secondary-50` to `secondary-900`: Blue accent colors
- `secondary-600`: Used for analytics and data-related elements

### Accent Colors (Use Cases)
- `accent-yellow-*`: Process Automation
- `accent-teal-*`: Data Orchestration  
- `accent-red-*`: Predictive Analytics

### Neutral Colors
- `neutral-50` to `neutral-900`: Grayscale colors for text, borders, backgrounds
- `neutral-800`: Main text color
- `neutral-600`: Secondary text color
- `neutral-400`: Placeholder text
- `neutral-200`: Borders
- `neutral-100`: Light backgrounds

### Status Colors
- `success-*`: Green colors for success states
- `warning-*`: Yellow/orange colors for warnings
- `error-*`: Red colors for errors

## Typography

### Font Families
- `font-sans`: System font stack (default)
- `font-mono`: Monospace font stack

### Font Sizes
- `text-xs` to `text-6xl`: Standard Tailwind sizes with custom line heights

### Font Weights
- `font-thin` to `font-black`: Full weight range

## Usage Examples

### Changing Brand Colors
To change the main brand color from purple to blue:

1. Update `tailwind.config.js`:
```javascript
primary: {
  600: '#2563eb', // Change from purple to blue
  // ... other shades
}
```

2. All components using `text-primary-600`, `bg-primary-600`, etc. will automatically update.

### Adding New Colors
To add a new color palette:

1. Add to `tailwind.config.js`:
```javascript
colors: {
  // ... existing colors
  custom: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... add all shades
    900: '#0c4a6e',
  }
}
```

2. Use in components:
```jsx
<div className="bg-custom-100 text-custom-800">
  Custom colored element
</div>
```

### Component Color Mapping

#### Navbar
- Logo: `text-primary-600`
- Links: `text-neutral-800 hover:text-primary-600`
- Button: `bg-primary-600 hover:bg-primary-700`

#### Use Case Channels
- Real-Time Analytics: `text-secondary-600`, `bg-secondary-50`
- Process Automation: `text-accent-yellow-500`, `bg-accent-yellow-50`
- Data Orchestration: `text-accent-teal-500`, `bg-accent-teal-50`
- Predictive Analytics: `text-accent-red-500`, `bg-accent-red-50`

#### Chat Widget
- User messages: `bg-primary-600 text-white`
- Assistant messages: `bg-neutral-100 text-neutral-800`
- Input field: `bg-white border-neutral-200`
- Send button: `bg-primary-600 hover:bg-primary-700`

## Best Practices

1. **Always use theme colors**: Never use hardcoded colors like `text-gray-800`. Use `text-neutral-800` instead.

2. **Consistent naming**: Use semantic color names (primary, secondary, neutral) rather than color names (purple, blue, gray).

3. **Accessibility**: Ensure sufficient contrast ratios between text and background colors.

4. **Dark mode**: The theme system supports dark mode through CSS variables in `globals.css`.

## Customization

### Changing the Entire Color Scheme
1. Update the color values in `tailwind.config.js`
2. Restart the development server
3. All components will automatically use the new colors

### Adding New Design Tokens
1. Add new properties to the `theme.extend` object in `tailwind.config.js`
2. Use the new tokens in your components
3. Document the new tokens in this guide

## File Structure

```
├── tailwind.config.js          # Main theme configuration
├── src/app/globals.css         # Global styles and CSS variables
├── THEME_GUIDE.md             # This documentation
└── src/components/            # Components using theme colors
    ├── Navbar.tsx
    ├── ChatWidget.tsx
    └── ...
```

## Migration Guide

If you need to update existing components to use the new theme system:

1. Replace hardcoded colors with theme colors:
   - `text-gray-800` → `text-neutral-800`
   - `bg-purple-600` → `bg-primary-600`
   - `border-gray-200` → `border-neutral-200`

2. Update color references in component logic:
   - Update `getIconColor()` and `getBackgroundColor()` functions
   - Use theme color names instead of hardcoded values

3. Test all components to ensure colors render correctly

## Support

For questions about the theme system or to request new design tokens, please refer to this documentation or contact the development team.
