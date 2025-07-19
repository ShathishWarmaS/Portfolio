# Portfolio Configuration Guide

## Overview
The portfolio now uses a configuration-based approach with no hardcoded values, making it stable and easily customizable.

## Configuration Object
All settings are centralized in the `config` object within the `PortfolioEnhancer` class:

### Particle System Settings
```javascript
particles: {
    density: 20,                    // pixels per particle (lower = more particles)
    maxRadius: 3,                   // maximum particle size
    minRadius: 1,                   // minimum particle size
    maxOpacity: 0.7,               // maximum particle opacity
    minOpacity: 0.2,               // minimum particle opacity
    speed: 0.5,                    // particle movement speed
    connectionDistance: 100,        // distance for particle connections
    mouseInteractionDistance: 100,  // mouse interaction range
    mouseInfluence: 0.0001         // strength of mouse influence
}
```

### Animation Timing
```javascript
timing: {
    preloaderFadeOut: 200,         // preloader fade duration (ms)
    typingSpeed: {
        name: 30,                  // name typing speed (ms per character)
        title: 20                  // title typing speed (ms per character)
    },
    typingDelays: {
        initial: 100,              // delay before typing starts
        betweenElements: 100       // delay between name and title
    },
    sectionStagger: 50,            // delay between section animations
    skillBarDelay: 300             // delay for skill bar animations
}
```

### Color Palette
```javascript
colors: {
    primary: '#1e90ff',            // primary blue color
    secondary: '#4169e1',          // secondary blue color
    accent: '#87ceeb',             // accent light blue
    particleHue: {
        base: 200,                 // base hue for particles
        range: 60                  // hue variation range
    }
}
```

### Visual Effects
```javascript
effects: {
    glassmorphism: {
        defaultBlur: 15,           // default blur amount (px)
        hoverBlur: 25              // hover blur amount (px)
    },
    hover: {
        scale: 1.02,               // hover scale factor
        translateY: -5,            // hover vertical movement
        skillTranslateX: 20,       // skill item horizontal movement
        skillScale: 1.05           // skill item scale factor
    }
}
```

### Responsive Breakpoints
```javascript
breakpoints: {
    mobile: 768,                   // mobile breakpoint (px)
    tablet: 1024,                  // tablet breakpoint (px)
    desktop: 1200                  // desktop breakpoint (px)
}
```

## Utility Methods

### Responsive Values
```javascript
getResponsiveValue(desktop, tablet, mobile)
```
Returns appropriate value based on screen size.

### Dynamic Configuration
```javascript
updateConfig(newConfig)
```
Updates configuration at runtime and recreates particles if needed.

## Usage Examples

### Adjusting Particle Density
```javascript
enhancer.updateConfig({
    particles: { density: 30 } // fewer particles
});
```

### Changing Animation Speed
```javascript
enhancer.updateConfig({
    timing: {
        typingSpeed: { name: 50, title: 30 }
    }
});
```

### Modifying Colors
```javascript
enhancer.updateConfig({
    colors: {
        primary: '#ff6b6b',
        particleHue: { base: 350, range: 40 }
    }
});
```

## Performance Optimization
- Responsive particle density (fewer particles on mobile)
- Configurable animation timing
- Optimized connection drawing
- Hardware acceleration enabled

## Testing Commands
- `npm start` - Start development server
- `npm run dev` - Start with nodemon for development

## File Structure
- `index.html` - Main HTML structure
- `style.css` - Styling and visual effects
- `portfolio.js` - Interactive features and animations
- `index.js` - Express server
- `package.json` - Dependencies and scripts

All hardcoded values have been removed and replaced with configurable options for maximum stability and maintainability.