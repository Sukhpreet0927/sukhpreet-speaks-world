import { useEffect, useState } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nameVariants = [
    {
      language: "English",
      name: "Sukhpreet Aulakh",
      script: "latin",
      description: "Your name in English"
    },
    {
      language: "ਪੰਜਾਬੀ (Punjabi)",
      name: "ਸੁਖਪ੍ਰੀਤ ਔਲਖ",
      script: "gurmukhi",
      description: "Your name in Gurmukhi script"
    },
    {
      language: "हिंदी (Hindi)",
      name: "सुखप्रीत औलख",
      script: "devanagari",
      description: "Your name in Devanagari script"
    },
    {
      language: "اردو (Urdu)",
      name: "سکھپریت اولکھ",
      script: "arabic",
      description: "Your name in Arabic script"
    }
  ];

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

        {/* Name variants grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {nameVariants.map((variant, index) => (
            <div
              key={variant.language}
              className={`transform transition-all duration-700 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-elegant hover:shadow-cultural transition-all duration-500 group">
                {/* Language label */}
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                    {variant.language}
                  </span>
                </div>

                {/* Name display */}
                <div className="mb-6">
                  <h2 
                    className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary ${
                      variant.script === 'arabic' ? 'text-right' : 'text-center'
                    }`}
                    style={{
                      fontFamily: variant.script === 'devanagari' ? '"Noto Sans Devanagari", sans-serif' :
                                 variant.script === 'gurmukhi' ? '"Noto Sans Gurmukhi", sans-serif' :
                                 variant.script === 'arabic' ? '"Noto Naskh Arabic", sans-serif' :
                                 'inherit'
                    }}
                  >
                    {variant.name}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm">
                  {variant.description}
                </p>

                {/* Decorative line */}
                <div className="mt-6 h-1 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
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