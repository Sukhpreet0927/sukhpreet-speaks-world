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
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
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
    </div>
  );
};

export default Index;