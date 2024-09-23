import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type ActiveSectionContextType = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

const ActiveSectionContext = createContext<
  ActiveSectionContextType | undefined
>(undefined);

export const ActiveSectionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (context === undefined) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionProvider"
    );
  }
  return context;
};

export const useIntersectionObserver = (sectionId: string) => {
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(sectionId);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [sectionId, setActiveSection]);
};
