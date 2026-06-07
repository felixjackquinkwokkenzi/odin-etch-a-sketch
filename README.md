# 🎮 Etch-a-Sketch Retro-Modern Console

[![The Odin Project]](https://www.theodinproject.com/)

An interactive, high-performance pixel drawing application optimized from standard Odin Project specifications into a premium retro-modern digital console. This app blends the nostalgia of the classic physical drawing toy (red console frame) with sleek dark mode aesthetics, glassmorphic paneling, and subtle micro-interactions.

---

## 🚀 Live Demo & Preview

> **Live Preview:** (https://felixjackquinkwokkenzi.github.io/odin-etch-a-sketch/)

```txt
+-----------------------------------------------------------+
|               🎨 ETCH-A-SKETCH CONSOLE                    |
+-----------------------------------------------------------+
|  [ Control Panel (Left) ]       [ Canvas Grid (Right) ]   |
|                                                           |
|  * Grid Resolution: 16x16                                 |
|    [===o===============]        +-----------------------+ |
|                                 |                       | |
|  * Drawing Tools                |                       | |
|    [ Classic Black ] (Active)   |                       | |
|    [ Custom Color  ]            |      SKETCH AREA      | |
|    [ Rainbow Mode  ]            |     (RED CONSOLE      | |
|    [ Eraser Mode   ]            |        FRAME)         | |
|                                 |                       | |
|  * Utilities                    |                       | |
|    [ Toggle Grid Lines ]        +-----------------------+ |
|    [ Clear Canvas      ]                                  |
+-----------------------------------------------------------+
```

---

## ✨ Key Features

This project elevates the core requirements of the assignment by introducing polished, user-friendly features:

1. **🎨 Diverse Drawing Tools**
   - **Classic Black:** Draw with traditional jet black pencil lines.
   - **Custom Color Picker:** Choose any color freely using the integrated HTML5 color picker.
   - **Rainbow Mode:** Draw with dynamic rainbow colors generated using randomized HSL (_Hue, Saturation, Lightness_) values, producing vibrant gradients.
   - **Eraser:** Erase specific pixels by reverting them back to the canvas background.

2. **🖲️ Draw-on-Drag (Click & Drag) System**
   - Resolves the common issue of accidental painting when the mouse merely hovers over the canvas. Pixels are only colored when the mouse button is actively held down and dragged, matching professional drawing software behavior.

3. **🛠️ Real-Time Grid Resolution Slider**
   - Adjust the grid resolution dynamically from **2 × 2** up to **64 × 64**. The size label updates in real-time as the slider moves.

4. **⚡ Toggle Grid Lines**
   - Easily hide or show pixel grid boundaries to preview clean artwork with a single click.

5. **🧹 Instant Canvas Clearing**
   - Reset the entire board instantly without undergoing slow DOM regeneration.

---

## 🛠️ Tech Stack & Design Architecture

Built using a pure, vanilla web development stack to demonstrate solid command over front-end foundations:

- **HTML5:** Semantic architecture (`<main>`, `<section>`, `<aside>`, `<header>`, `<footer>`).
- **CSS3 (Custom Properties & Flexbox):**
  - CSS variables (`:root`) for color palette, borders, shadow states, and radius definitions.
  - **Flexbox (`flex: 1`)** alignment ensuring columns and rows stretch/shrink precisely without manual pixel calculations in JS.
  - Modern _slate-dark_ UI contrasted with retro physical console frame styling (red outer bezel, glowing neon blue active states).
- **Vanilla JavaScript (ES6):** Dynamic DOM rendering, state management, and unified event tracking.

---

## 🧠 Technical Optimizations & Best Practices

To achieve professional quality, this project integrates several under-the-hood optimizations:

### 1. Memory Leak Prevention via Event Delegation

Standard implementations attach event listeners to every single cell (up to 4,096 listeners on a 64x64 grid).

- **Our Solution:** A single, passive mouse event listener is attached to the parent `.grid-container`. We identify targeted cells using `event.target`. This reduces memory overhead to a minimum and prevents input lag.

### 2. Auto-Sizing Cells via CSS Flexbox

Using nested flex containers with `flex: 1` dynamically divides the parent space equally. The Javascript code is completely decoupled from rendering math, meaning cell sizes adapt automatically whether resolution is 2 or 64.

### 3. Anti-Ghosting (Default Drag Prevention)

Invokes `e.preventDefault()` on the `dragstart` event. This blocks the browser's default behavior of dragging a shadow "ghost" image of the grid cells, ensuring smooth, uninterrupted click-and-drag drawing.

---

## 📂 Project Directory Structure

```txt
odin-etch-a-sketch/
│
├── index.html                       # Semantic HTML structure
├── style.css                        # Design system & CSS variables
├── script.js                        # App logic & drawing engines
└── README.md                        # Professional documentation (This file)
```

---

## 📝 Key Takeaways & Lessons Learned

Through building this project, several key software engineering concepts were reinforced:

- Maximizing web performance and minimizing RAM usage using **Event Delegation**.
- Utilizing the real-time `"input"` event for slider range controls rather than the deferred `"change"` event.
- Halting unwanted default browser gestures via event capture techniques (`dragstart` prevention).
- Designing interactive user interfaces with active-state UI indicators for buttons.

---

Built with 💖 by Felix Jackquin Kwok Kenzi for **The Odin Project: Etch-a-Sketch Assignment** (https://www.theodinproject.com/lessons/foundations-etch-a-sketch).
_(Happy sketching!)_
