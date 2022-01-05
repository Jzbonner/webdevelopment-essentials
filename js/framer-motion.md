[comment]: # (notes on react animation libraries and their importance in designing modern web applications)

# React Animation Libraries
Web animation can be used to attract attention, encourage better engagement, and communicate clearly and effecively. Web animation should be smooth, meaningful and support the visitor's journey. CSS and JavaScript are the building blocks to web animation, however recently, animation libraries have attempted to make working with animations easier and geared towards rapid prototyping.  

## Framer Motion - modern animations
[Framer Motion](https://www.framer.com/motion/) is a production ready animation library for React. It utilizes the power of the [Framer](https://www.framer.com/) prototyping tool and is fully open source. The advantages of Framer Motion include: 
1. It uses server-side rendering 
2. It has CSS variable support
3. You can easily unmount animations 
4. It has built in accessibility options

### The `motion` component 
Is a React Component built-into the `framer-motion` library. It will primarily be used to handle animations for HTML and SVG elements on the front end. The `motion` component is DOM optimized for 60fps animations and gesture support. Using the `motion` component and allows you to: 
<br /> 
<br /> 
📌 Declaratively or imperatively animate components <br />
📌 Declaratively or imperatively animate components <br />
📌 Animate throughout React trees via variants <br />
📌 Respond to gestures with animations <br />
📌 Add drag, pan, hover and tap gestures 

```javascript
//example JSX file that contains a motion.div element 
import * as React from "react";
 mport { motion } from "framer-motion";

export const Example = () => (
  <motion.div 
    className="container"
    initial={{ scale: 0 }}
    animate={{ rotate: 180, scale: 1}}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}
  />
)
```

### The `animation` prop 
When any value in animate changes the component will automatically animate to the updated target. By default, Framer Motion creates an appropriate animation for a snappy transition based on the types of value being animated. For instance, physical properties like `x` or `scale` will be animated using a *spring* simulation. Whereas values like `opacity` or `color` will be animated with a *tween* simulation. You can set different types of animations by passing a *transition* prop. 

```javascript
// example of using the animation prop 
<motion.div 
  animate={{ scale: 1.1 }}
  transition={{ ease: "easeOut", duration: 2 }}
/>

```

### `Gestures` and `MotionValue` 
All `motion` components can detect *hover, tap, pan and drag* gestures. Framer motion allows you to attach gesture behaviors as event listeners directly to the component. Animation helpers are the entry point to working with Gestures in in Framer Motion. 

```javascript 
<motion.div 
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 }
  }}
  whileTap={{ scale: 0.9 }}
/>
```
