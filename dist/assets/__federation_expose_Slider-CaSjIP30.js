import { importShared } from './__federation_fn_import-D9ReRsJu.js';
import { a as jsxs, j as jsx } from './emotion-react-jsx-runtime.browser.esm-DGwdlQJW.js';
import { u as useResizeDetector } from './useResizeDetector-TT5J3xAE.js';

const {motion} = await importShared('framer-motion');

const {useState,useEffect,useRef,useCallback} = await importShared('react');
const {FabCard} = await importShared('@hakit/components');

function Card({
  index,
  onSizeChange,
  ...rest
}) {
  const {
    ref
  } = useResizeDetector({
    handleHeight: false,
    refreshMode: "debounce",
    refreshRate: 1e3,
    onResize({
      width,
      height
    }) {
      onSizeChange(index, width, height);
    }
  });
  return /* @__PURE__ */ jsx(motion.div, { style: {
    height: "100%",
    maxHeight: "65vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  }, ref, ...rest });
}
const variants = {
  enter: ({
    direction
  }) => {
    const xInitial = direction < 1 ? 50 : -50;
    return {
      scale: 0.2,
      // Or any initial scale based on index
      x: xInitial,
      opacity: 0
    };
  },
  center: ({
    activeIndex,
    inactiveBlur,
    currentIndex,
    direction,
    x,
    inactiveScaleMultiplier
  }) => {
    let scale = 1;
    let opacity = 1;
    let blurValue = "0px";
    if (currentIndex > activeIndex) {
      opacity = 0.9;
    }
    if (currentIndex < activeIndex) {
      blurValue = `${inactiveBlur}px`;
      opacity = 0.9;
      const scaleDifference = inactiveScaleMultiplier * (activeIndex - currentIndex);
      scale = Math.max(0, 1 - scaleDifference);
    }
    return {
      scale,
      filter: `blur(${blurValue})`,
      x,
      zIndex: getZIndex({
        activeIndex,
        currentIndex,
        direction
      }),
      opacity: scale === 0 ? 0 : opacity
    };
  },
  // ... center variant as previously defined ...
  exit: ({
    direction
  }) => {
    const xExit = direction < 1 ? -50 : 50;
    return {
      scale: 0.2,
      // Or any exit scale based on index
      x: xExit,
      opacity: 0
    };
  }
};
function getZIndex({
  activeIndex,
  currentIndex,
  direction
}) {
  if (direction < 0) {
    return void 0;
  }
  if (currentIndex === activeIndex) {
    return 3;
  } else {
    return 2;
  }
}
const X_OFFSET_THRESHOLD = 100;
const ContextSlider = ({
  slides,
  options,
  ref
}) => {
  const {
    spacing = 20,
    inactiveOffset = 150,
    inactiveScaleMultiplier = 0.1,
    inactiveBlur = 15
  } = options;
  const dragDirection = useRef(0);
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const [widths, setWidths] = useState([]);
  const wrapperRef = useRef(null);
  const [wrapperOffset, setWrapperOffset] = useState(0);
  const indexInArrayScope = (activeIndex % slides.length + slides.length) % slides.length;
  const hasPaginated = useRef(false);
  const changePage = useCallback((newDirection) => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex[0] + newDirection;
      if (newIndex < 0 || newIndex >= slides.length) {
        return prevIndex;
      }
      return [newIndex, newDirection];
    });
  }, [slides]);
  const detectPaginationGesture = useCallback((_, {
    offset
  }) => {
    if (hasPaginated.current) return;
    const threshold = X_OFFSET_THRESHOLD / 2;
    const isAtEnd = activeIndex === slides.length - 1;
    const isAtStart = activeIndex === 0;
    if (offset.x < -50 && !isAtEnd) {
      dragDirection.current = 1;
    } else if (offset.x > threshold && !isAtStart) {
      dragDirection.current = -1;
    } else {
      dragDirection.current = 0;
    }
  }, [slides, activeIndex]);
  useEffect(() => {
    if (wrapperRef.current && widths.length > 0) {
      const wrapperWidth = wrapperRef.current.clientWidth;
      const firstItemWidth = widths[activeIndex];
      const offset = wrapperWidth / 2 - firstItemWidth / 2;
      setWrapperOffset(offset);
    }
  }, [widths, activeIndex]);
  const calculateXPosition = (activeIndex2, currentIndex) => {
    let xTranslation = 0;
    if (currentIndex < activeIndex2) {
      for (let i = 0; i < currentIndex; i++) {
        xTranslation -= widths[i] + spacing;
      }
      if (inactiveOffset === false) {
        xTranslation -= widths[currentIndex] * (activeIndex2 - currentIndex);
      } else {
        xTranslation -= inactiveOffset * (activeIndex2 - currentIndex);
      }
    } else {
      for (let i = 0; i < activeIndex2; i++) {
        xTranslation -= widths[i] + spacing;
      }
    }
    return xTranslation;
  };
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      ref,
      dragElastic: 0,
      dragMomentum: false,
      drag: slides.length > 1 ? "x" : false,
      onDrag: detectPaginationGesture,
      onDragStart: () => hasPaginated.current = false,
      onDragEnd: () => {
        hasPaginated.current = true;
        if (dragDirection.current !== 0) {
          changePage(dragDirection.current);
        }
      },
      dragConstraints: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      },
      children: [
        /* @__PURE__ */ jsx("div", { className: "wrapper", ref: wrapperRef, style: {
          gap: `${spacing}px`
        }, children: slides.map((slide, index) => {
          return /* @__PURE__ */ jsx(Card, { className: "card", onSizeChange: (index2, width) => {
            if (widths[index2] !== width) {
              setWidths((prev) => {
                const copy = [...prev];
                if (width) {
                  copy[index2] = width;
                }
                return copy;
              });
            }
          }, index, layout: true, custom: {
            activeIndex: indexInArrayScope,
            currentIndex: index,
            direction,
            inactiveBlur,
            inactiveScaleMultiplier,
            x: calculateXPosition(activeIndex, index) + wrapperOffset
          }, variants, initial: false, animate: "center", exit: "exit", transition: {
            type: "spring",
            stiffness: 300,
            damping: 25,
            duration: 0.5
          } }, index);
        }) }),
        /* @__PURE__ */ jsxs("div", { className: "buttons", children: [
          /* @__PURE__ */ jsx(FabCard, { disabled: activeIndex === 0, whileTap: {
            scale: 0.8
          }, onClick: () => changePage(-1), icon: "mdi:chevron-left", cssStyles: `
            background: rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            backdrop-filter: blur(5px);
            border: 2px solid rgba(255, 255, 255, 0.1);
          ` }),
          /* @__PURE__ */ jsx(FabCard, { disabled: activeIndex === slides.length - 1, icon: "mdi:chevron-right", cssStyles: `
            background: rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            backdrop-filter: blur(5px);
            border: 2px solid rgba(255, 255, 255, 0.1);
          `, whileTap: {
            scale: 0.8
          }, onClick: () => changePage(1) })
        ] })
      ]
    }
  );
};

const {v4:uuidv4} = await importShared('uuid');

const index = {
  category: "Misc",
  label: "Slider",
  version: "1.0.0",
  description: "A slider component that can be used to display a series of slides with nested components.",
  fields: {
    slides: {
      type: "array",
      label: "Slides",
      default: [],
      min: 5,
      max: 5,
      collapsible: {
        open: true
      },
      getItemSummary: (item, i) => item.label || `Viewport #${i}`,
      defaultItemProps: {
        id: "",
        label: "Slide Name"
      },
      disableBreakpoints: true,
      arrayFields: {
        label: {
          label: "Label",
          type: "text",
          default: "Slide Name"
        },
        id: {
          type: "hidden",
          default: "",
          disableBreakpoints: true
        }
      }
    },
    options: {
      type: "object",
      default: {},
      label: "Slider options",
      collapsible: {
        open: false
      },
      objectFields: {
        spacing: {
          label: "Spacing",
          type: "number",
          default: 0,
          min: 0,
          max: 100,
          step: 1
        },
        inactiveOffset: {
          label: "Inactive Offset",
          type: "number",
          default: 150,
          min: 0,
          max: 1e3,
          step: 5
        },
        inactiveScaleMultiplier: {
          label: "Inactive Scale Multiplier",
          type: "number",
          default: 0.1,
          min: 0,
          max: 1,
          step: 0.1
        },
        inactiveBlur: {
          label: "Inactive Blur",
          type: "number",
          min: 0,
          max: 100,
          step: 1,
          default: 15
        }
      }
    }
  },
  resolveData: ({
    props
  }) => {
    let lastId = null;
    const shallowSlideCopy = [...props.slides ?? []].map((slide) => ({
      ...slide
    }));
    for (const slide of shallowSlideCopy) {
      if (!slide.id || slide.id === lastId) {
        const id = uuidv4();
        slide.id = id;
      }
      lastId = slide.id;
    }
    props.slides = shallowSlideCopy;
    return {
      props
    };
  },
  inline: true,
  permissions: {
    drag: true,
    delete: true,
    duplicate: false,
    insert: true
  },
  render({
    dragRef,
    options,
    slides = []
  }) {
    const slidesWithId = slides.filter((slide) => slide.id && slide.id.length > 0);
    return /* @__PURE__ */ jsx(ContextSlider, { options, slides: slidesWithId, ref: dragRef });
  }
};

export { index as default };
