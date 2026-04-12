export type Section = "hero" | "about" | "skills" | "experience" | "projects" | "contact";

export const STATES = {
  hero: {
    desktop: {
      scale: { x: 0.22, y: 0.22, z: 0.22 },
      position: { x: 280, y: -120, z: 0 },
      rotation: { x: Math.PI / 18, y: -Math.PI / 12, z: 0 },
    },
    mobile: {
      scale: { x: 0.3, y: 0.3, z: 0.3 },
      position: { x: 0, y: -250, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
  },
  about: {
    desktop: {
      scale: { x: 0.4, y: 0.4, z: 0.4 },
      position: { x: 0, y: -40, z: 0 },
      rotation: { x: 0, y: Math.PI / 12, z: 0 },
    },
    mobile: {
      scale: { x: 0.4, y: 0.4, z: 0.4 },
      position: { x: 0, y: -40, z: 0 },
      rotation: { x: 0, y: Math.PI / 6, z: 0 },
    },
  },
  experience: {
    desktop: {
      scale: { x: 0.25, y: 0.25, z: 0.25 },
      position: { x: 0, y: -40, z: 0 },
      rotation: { x: Math.PI / 12, y: -Math.PI / 4, z: 0 },
    },
    mobile: {
      scale: { x: 0.3, y: 0.3, z: 0.3 },
      position: { x: 0, y: -40, z: 0 },
      rotation: { x: Math.PI / 6, y: -Math.PI / 6, z: 0 },
    },
  },
  skills: {
    desktop: {
      scale: { x: 0.25, y: 0.25, z: 0.25 },
      position: { x: 0, y: -40, z: 0 },
      rotation: { x: 0, y: Math.PI / 12, z: 0 },
    },
    mobile: {
      scale: { x: 0.3, y: 0.3, z: 0.3 },
      position: { x: 0, y: -40, z: 0 },
      rotation: { x: 0, y: Math.PI / 6, z: 0 },
    },
  },
  projects: {
    desktop: {
      scale: { x: 0.25, y: 0.25, z: 0.25 },
      position: { x: 0, y: -40, z: 0 },
      rotation: { x: Math.PI, y: Math.PI / 3, z: Math.PI },
    },
    mobile: {
      scale: { x: 0.3, y: 0.3, z: 0.3 },
      position: { x: 0, y: 150, z: 0 },
      rotation: { x: Math.PI, y: Math.PI / 3, z: Math.PI },
    },
  },
  contact: {
    desktop: {
      scale: { x: 0.24, y: 0.24, z: 0.24 },
      position: { x: 380, y: -180, z: 0 },
      rotation: { x: -Math.PI / 12, y: Math.PI / 6, z: 0 },
    },
    mobile: {
      scale: { x: 0.28, y: 0.28, z: 0.28 },
      position: { x: 0, y: 180, z: 0 },
      rotation: { x: Math.PI, y: Math.PI / 3, z: Math.PI },
    },
  },
};

export const getKeyboardState = ({
  section,
  isMobile,
}: {
  section: Section;
  isMobile: boolean;
}) => {
  const baseTransform = STATES[section][isMobile ? "mobile" : "desktop"];

  const getScaleOffset = () => {
    if (typeof window === "undefined") return 1;
    const width = window.innerWidth;
    
    // Linear scaling between mobile (390) and desktop (1280)
    const t = Math.max(0, Math.min(1, (width - 390) / (1280 - 390)));
    const minScale = isMobile ? 0.7 : 0.8;
    const maxScale = isMobile ? 0.9 : 1.1;
    
    const scale = minScale + (maxScale - minScale) * t;
    return scale;
  };

  const scaleOffset = getScaleOffset();

  return {
    ...baseTransform,
    scale: {
      x: baseTransform.scale.x * scaleOffset,
      y: baseTransform.scale.y * scaleOffset,
      z: baseTransform.scale.z * scaleOffset,
    },
  };
};
