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
📌 Declaratively or imperatively animate components <br />
📌 Animate throughout React trees via variants <br />
📌 Respond to gestures with animations <br />
📌 Add drag, pan, hover and tap gestures 

```javascript
//example JSX file that contains a motion.div element 
import * as React from "react";
import { motion } from "framer-motion";

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

