import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/router";

type Tab = {
  title: string;
  value: string;
};

const tabs: Tab[] = [
  { title: "Home", value: "/" },
  { title: "About", value: "/About" },
  { title: "Projects", value: "/Projects" },
  { title: "Skills", value: "/Skills" },
  { title: "Contact", value: "/Contact" },
];

const Navbar = () => {
  const router = useRouter();
  const [active, setActive] = useState<Tab>(
    tabs.find((tab) => tab.value === router.pathname) || tabs[0]
  );
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    const handleScrollNavigation = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        const currentIndex = tabs.findIndex((tab) => tab.value === active.value);
        if (currentIndex < tabs.length - 1) {
          const nextTab = tabs[currentIndex + 1];
          router.push(nextTab.value);
          setActive(nextTab);
        }
      } else if (event.deltaY < 0) {
        const currentIndex = tabs.findIndex((tab) => tab.value === active.value);
        if (currentIndex > 0) {
          const prevTab = tabs[currentIndex - 1];
          router.push(prevTab.value);
          setActive(prevTab);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleScrollNavigation);
    setIsVisible(true);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleScrollNavigation);
    };
  }, [active, router]);

  useEffect(() => {
    const currentTab = tabs.find((tab) => tab.value === router.pathname);
    if (currentTab) {
      setActive(currentTab);
    }
  }, [router.pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-600",
        scrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-white">
            Eos Noctus
          </Link>
          <AnimatePresence>
            {isVisible && (
              <motion.div className="flex space-x-4">
                {tabs.map((tab, index) => (
                  <motion.div
                    key={tab.value}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={tab.value}
                      onClick={() => setActive(tab)}
                      className={cn(
                        "px-4 py-2 text-sm rounded-full relative",
                        active.value === tab.value
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      )}
                      aria-current={active.value === tab.value ? "page" : undefined}
                    >
                      {active.value === tab.value && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-pink-700/50 backdrop-blur-sm rounded-full"
                          transition={{
                            type: "spring",
                            bounce: 0.2,
                            duration: 1,
                          }}
                        />
                      )}
                      <span className="relative z-10">{tab.title}</span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;