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
      description: "Your name in English",
      color: "text-primary"
    },
    {
      language: "हिंदी (Hindi)",
      name: "सुखप्रीत औलख",
      script: "devanagari",
      description: "Your name in Devanagari script",
      color: "text-secondary"
    },
    {
      language: "ਪੰਜਾਬੀ (Punjabi)",
      name: "ਸੁਖਪ੍ਰੀਤ ਔਲਖ",
      script: "gurmukhi",
      description: "Your name in Gurmukhi script",
      color: "text-accent"
    },
    {
      language: "اردو (Urdu)",
      name: "سکھپریت اولکھ",
      script: "arabic",
      description: "Your name in Arabic script",
      color: "text-primary"
    }
  ];

  const { text, currentWordIndex, isTyping } = useTypewriter({
    words: nameVariants.map(variant => variant.name),
    typeSpeed: 150,
    deleteSpeed: 75,
    delayBetweenWords: 2500,
    loop: true
  });

  useEffect(() => {
    setIsVisible(true);
    setCurrentLanguageIndex(currentWordIndex);
  }, [currentWordIndex]);

  const currentVariant = nameVariants[currentLanguageIndex];

  return (
    <div className="bg-background">
      {/* Hero Section with Typewriter */}
      <section className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-cultural opacity-10"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-primary rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-secondary rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Main heading */}
          <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Welcome
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Celebrating linguistic diversity through beautiful typography
            </p>
          </div>

          {/* Dynamic typewriter display */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Current language indicator */}
            <div className="mb-8">
              <span className="inline-block px-6 py-3 bg-gradient-primary bg-clip-text text-transparent font-semibold text-lg md:text-xl border border-primary/30 rounded-full backdrop-blur-sm">
                {currentVariant.language}
              </span>
            </div>

            {/* Main typewriter display */}
            <div className="min-h-[200px] md:min-h-[300px] flex items-center justify-center mb-8">
              <div 
                className={`${currentVariant.script === 'arabic' ? 'text-right' : 'text-center'}`}
              >
                <h1 
                  className={`text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold ${currentVariant.color} transition-colors duration-500`}
                  style={{
                    fontFamily: currentVariant.script === 'devanagari' ? '"Noto Sans Devanagari", sans-serif' :
                               currentVariant.script === 'gurmukhi' ? '"Noto Sans Gurmukhi", sans-serif' :
                               currentVariant.script === 'arabic' ? '"Noto Naskh Arabic", sans-serif' :
                               'inherit',
                    lineHeight: '1.1'
                  }}
                >
                  {text}
                  {/* Animated cursor */}
                  <span 
                    className={`inline-block w-1 bg-current ml-2 animate-blink`}
                    style={{
                      height: '0.8em'
                    }}
                  >
                    |
                  </span>
                </h1>
              </div>
            </div>

            {/* Language description */}
            <div className="mb-12">
              <p className="text-muted-foreground text-base md:text-lg">
                {currentVariant.description}
              </p>
            </div>

            {/* Progress dots */}
            <div className="flex justify-center space-x-3 mb-12">
              {nameVariants.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentLanguageIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Footer message */}
          <div className={`mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1s' }}>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
              Each script tells a story, each language carries culture. 
              <br />
              <span className="text-primary font-medium">Unity in diversity.</span>
            </p>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-24 px-4 bg-card/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-8">
            About Me
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a passionate developer who celebrates the beauty of linguistic diversity through technology. 
              My work bridges cultures and connects communities through innovative digital solutions.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With expertise in modern web technologies, I create experiences that honor cultural heritage 
              while embracing the future of digital innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-4">
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
                <div className="w-full h-48 bg-gradient-primary rounded-lg mb-6 opacity-20"></div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Project {project}
                </h3>
                <p className="text-muted-foreground mb-4">
                  A beautiful web application showcasing modern design principles and cultural sensitivity.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Tailwind</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-24 px-4 bg-card/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-cultural bg-clip-text text-transparent mb-8">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Let's collaborate on something amazing. Whether you have a project in mind or just want to connect, 
            I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:hello@sukhpreet.dev" 
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Send me an email
            </a>
            <a 
              href="https://linkedin.com/in/sukhpreet-aulakh" 
              className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;