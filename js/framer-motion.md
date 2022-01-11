[comment]: # (notes on react animation libraries and their importance in designing modern web applications)

# React Animation Libraries
Web animation can be used to attract attention, encourage better engagement, and communicate clearly and effectively. Web animation should be smooth, meaningful and support the visitor's journey. CSS and JavaScript are the building blocks to web animation, however recently, animation libraries have attempted to make working with animations easier and geared towards rapid prototyping.  

## Framer Motion - A brief overview 
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
All `motion` components can detect *hover, tap, pan, viewport and drag* gestures. Framer motion allows you to attach gesture behaviors as event listeners directly to the component. Animation helpers are the entry point to working with Gestures in Framer Motion. 

```javascript 
<motion.div 
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 }
  }}
  whileTap={{ scale: 0.9 }}
/>
```

All props can be set as either as targets of values to animate to, or the name of any variants defined via the `variants` prop. Variants will flow through children components as normal. Variants are predefined visual states that a component can be in. By using variants, a parent component can easily orchestrate the animations of its children with the special transition prop `staggerChildren`. Variants can also act as dynamic functions that return different props based on data passed to each component's custom prop. 

```javascript 
import { motion } from "framer-motion"

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

export const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
      <Toggle onClick={() => setIsOpen(isOpen => !isOpen)} />
      <Items />
    </motion.nav>
  )
}
```

`motion` components automatically manage the interplay between `while` props. So for instance, if hovering starts and stops while the tap gesture is active, the tap gesture receives priority and any properties defined on both will remain in their tapped state.

`MotionValue` tracks the state and velocity of animating values. All `motion` components internally use `MotionValue`; typically they are created automatically, but for advance use cases it is possible to create them manually. By manually creating `MotionValue` you can: 
1. Set and get their state 
2. Pass multiple components to synchronise motion across them 
3. Chain `MotionValue` via the `useTransform` hook 
4. Update visual properties without triggering React's render cycle

## Putting it all together
There are a plethora of ways for which developers can include framer-motion in their projects. We will take a look at some useful tips for doing so in the section below. 
