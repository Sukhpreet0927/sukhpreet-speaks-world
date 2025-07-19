import { useEffect, useState } from "react";
import { useTypewriter } from "../hooks/useTypewriter";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  const nameVariants = [
    {
      language: "English",
      name: "Sukhpreet Aulakh",
      script: "latin",
      color: "text-primary",
    },
    {
      language: "हिंदी (Hindi)",
      name: "सुखप्रीत औलख",
      script: "devanagari",
      color: "text-green-600",
    },
    {
      language: "ਪੰਜਾਬੀ (Punjabi)",
      name: "ਸੁਖਪ੍ਰੀਤ ਔਲਖ",
      script: "gurmukhi",
      color: "text-teal-600",
    },
    {
      language: "اردو (Urdu)",
      name: "سکھپریت اولکھ",
      script: "arabic",
      color: "text-amber-600",
    },
  ];

  const { text, currentWordIndex } = useTypewriter({
    words: nameVariants.map((variant) => variant.name),
    typeSpeed: 150,
    deleteSpeed: 75,
    delayBetweenWords: 2500,
    loop: true,
  });

  useEffect(() => {
    setIsVisible(true);
    setCurrentLanguageIndex(currentWordIndex);
  }, [currentWordIndex]);

  const currentVariant = nameVariants[currentLanguageIndex];

  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <div className="bg-background">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
          {/* Navigation menu top right */}
          <nav className="absolute top-6 right-6 z-20 flex space-x-6 text-primary font-semibold text-lg">
            <a href="#about" className="hover:text-primary/80 transition-colors">
              About Me
            </a>
            <a
              href="#projects"
              className="hover:text-primary/80 transition-colors"
            >
              Projects
            </a>
            <a href="#contact" className="hover:text-primary/80 transition-colors">
              Connect
            </a>
          </nav>

          <div className="absolute inset-0 bg-gradient-cultural opacity-10"></div>
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-primary rounded-full opacity-20 animate-float"></div>
          <div
            className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-secondary rounded-full opacity-20 animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-10 w-16 h-16 bg-primary/20 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center">
            {/* Image at top center */}
            <img
              src="/IMG_0744.jpeg"
              alt="Sukhpreet Aulakh"
              className="w-48 h-48 rounded-full mb-8 object-cover ring-8 ring-orange-500 ring-opacity-70 shadow-[0_0_25px_6px_rgba(249,115,22,0.6)]"
            />


            <div
              className={`mb-16 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                Welcome
              </h1>
            </div>

            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="mb-2">
                <span className="inline-block px-6 py-3 bg-gradient-primary bg-clip-text text-transparent font-semibold text-lg md:text-xl border border-primary/30 rounded-full backdrop-blur-sm">
                  {currentVariant.language}
                </span>
              </div>

              <div className="min-h-[200px] md:min-h-[300px] flex items-center justify-center mb-4">
                <div
                  className={
                    currentVariant.script === "arabic" ? "text-right" : "text-center"
                  }
                >
                  <h1
                    className={`text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold ${currentVariant.color} transition-colors duration-500`}
                    style={{
                      fontFamily:
                        currentVariant.script === "devanagari"
                          ? '"Noto Sans Devanagari", sans-serif'
                          : currentVariant.script === "gurmukhi"
                          ? '"Noto Sans Gurmukhi", sans-serif'
                          : currentVariant.script === "arabic"
                          ? '"Noto Naskh Arabic", sans-serif'
                          : "inherit",
                      lineHeight: "1.1",
                    }}
                  >
                    {text}
                    <span
                      className="inline-block w-1 bg-current ml-2 animate-blink"
                      style={{ height: "0.8em" }}
                    >
                      |
                    </span>
                  </h1>
                </div>
              </div>

              
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section
          id="about"
          className="py-24 px-4 bg-card/50 backdrop-blur-sm scroll-mt-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-8">
              About Me
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Hi, I’m Sukhpreet, a recent graduate with a B.S. in Computer Science and a minor in Middle Eastern and South Asian Studies, specializing in full-stack development (web and app) as well as AI/ML. 
              The seeds of my programming journey were planted in high school through coding competitions, and since then, 
              I’ve developed a strong passion for mobile development, particularly with Swift & SwiftUI 📱. 
              In Professor Nansen’s lab, I worked cross-functionally with designers and researchers to develop SwiftUI apps like Smart Spray, which predicts pesticide spray coverage using environmental and operational data 🌱.
              I believe the best way to learn is to teach, which is why I’ve tutored courses in UC Davis such as Algorithm Design, Object-Oriented Programming in C++, and Data Structures. 
              This experience solidified my understanding while allowing me to help peers succeed. With hands-on experience in both back-end and front-end development, 
              I’m excited to contribute as a Software Engineer at FAST Enterprises, applying my skills to create meaningful, user-driven solutions. 

              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
              "In shaping technology, we are shaped in return, together weaving the fabric of humanity's future✨"
              </p>
            </div>
          </div>
        </section>

{/* Projects Section */}
<section id="projects" className="py-24 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-secondary bg-clip-text text-transparent text-center mb-16">
      Projects
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3].map((project) => (
        <div
          key={project}
          className="group bg-card border border-border rounded-lg p-6 shadow-cultural hover:shadow-elegant transition-all duration-300 hover:scale-105"
        >
          {project === 1 ? (
            <a
              href="https://github.com/macintAsh1984/TeachersPet"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-90 transition-opacity"
            >
              <img
  src="/TeachersPet.jpeg"
  alt="Teacher's Pet App"
  className="w-full h-48 object-cover rounded-lg mb-10 mt-10"  // Added mt-6 here
/>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                Teacher's Pet
              </h3>
              <p className="text-muted-foreground mb-4">
                Teacher's Pet is a multi-platform app aimed at streamlining the office hours process for students and instructors in an effective, efficient manner. We were inspired by our own experiences in office hours as students, forgetting our places in line, 
                being in office hours with a packed house and never receiving help.
              </p>
            </a>
          ) : (
            <>
              <div className="w-full h-48 bg-gradient-primary rounded-lg mb-6 opacity-20"></div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Project {project}
              </h3>
              <p className="text-muted-foreground mb-4">
                A beautiful web application showcasing modern design principles
                and cultural sensitivity.
              </p>
            </>
          )}
          <div className="flex gap-2 flex-wrap">
            {project === 1 ? (
              <>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
  SwiftUI
</span>
<span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">
  ActivityKit
</span>
<span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
  WidgetKit
</span>
<span className="px-3 py-1 bg-yellow-300/20 text-yellow-300 rounded-full text-sm">
  Firebase
</span>
<span className="px-3 py-1 bg-pink-400/20 text-pink-400 rounded-full text-sm">
  CoreImage
</span>
<span className="px-3 py-1 bg-purple-500/20 text-purple-500 rounded-full text-sm">
  CodeScanner
</span>

              </>
            ) : project === 2 ? (
              <>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                  MongoDB
                </span>
              </>
            ) : (
              <>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Python
                </span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                  Flask
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                  PostgreSQL
                </span>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



        {/* Get in Touch Section */}
        <section
          id="contact"
          className="py-24 px-4 bg-card/30 backdrop-blur-sm scroll-mt-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-cultural bg-clip-text text-transparent mb-8">
              Get in Touch
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
              Let's collaborate on something amazing. Whether you have a project in
              mind or just want to connect, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:hello@sukhpreet.dev"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Send me an email
              </a>
              <a
                href="https://www.linkedin.com/in/sukhpreetaulakh/"
                className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
