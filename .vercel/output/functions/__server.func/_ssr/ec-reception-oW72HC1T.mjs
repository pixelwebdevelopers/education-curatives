import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useInView } from "../_libs/framer-motion.mjs";
function Counter({ to, suffix = "", duration = 1800 }) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    val.toLocaleString(),
    suffix
  ] });
}
const reception = "/assets/ec-reception-BuLXL-kb.jpg";
export {
  Counter as C,
  reception as r
};
