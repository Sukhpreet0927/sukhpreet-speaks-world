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
            <a href="#experience" className="hover:text-primary/80 transition-colors">
              Experience
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

{/* Experience Section */}
<section id="experience" className="py-24 px-4 scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-cultural bg-clip-text text-transparent text-center mb-16">
              Experience
            </h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
              
              <div className="space-y-12">
                {/* FAST Enterprises */}
                <div className="relative flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                    <div className="bg-card border border-border rounded-lg p-6 shadow-cultural hover:shadow-elegant transition-all duration-300">
                      <div className="flex flex-col md:items-end">
                        <h3 className="text-xl font-bold text-foreground mb-2">Software Implementation Consultant</h3>
                        <h4 className="text-lg font-semibold text-primary mb-2">FAST Enterprises</h4>
                        <p className="text-muted-foreground text-sm mb-4">September 2025 - Present</p>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          Incoming Software implementation Consultant
                        </p>
                        <div className="flex flex-wrap gap-2 md:justify-end">
                          <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">C#</span>
                          <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">Client Relations</span>
                          <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">System Integration</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background"></div>
                  
                  <div className="md:w-1/2 md:pl-8"></div>
                </div>

                

                {/* Research Assistant */}
                <div className="relative flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/2 md:pr-8"></div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-secondary rounded-full border-4 border-background"></div>
                  
                  <div className="md:w-1/2 md:pl-8">
                    <div className="bg-card border border-border rounded-lg p-6 shadow-cultural hover:shadow-elegant transition-all duration-300">
                      <h3 className="text-xl font-bold text-foreground mb-2">Software Engineer</h3>
                      <h4 className="text-lg font-semibold text-primary mb-2">UC Davis - Nansen Lab</h4>
                      <p className="text-muted-foreground text-sm mb-4">April 2024 - April 2025</p>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                      Collaborated with Professor Christian Nansen and a team of four to redevelop the Smart Spray app, aimed at predicting
                      pesticide spray coverage under various environmental conditions
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">SwiftUI</span>
                        <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">Machine Learning</span>
                        <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">React Native</span>
                        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Firebase</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* UC Davis Equigrade Project */}
<div className="relative flex flex-col md:flex-row md:items-center">
  <div className="md:w-1/2 md:pr-8">
    <div className="bg-card border border-border rounded-lg p-6 shadow-cultural hover:shadow-elegant transition-all duration-300">
      <h3 className="text-xl font-bold text-foreground mb-2">Software Developer</h3>
      <h4 className="text-lg font-semibold text-primary mb-2">UC Davis Equigrade Project</h4>
      <p className="text-muted-foreground text-sm mb-4">Sep 2023 – Nov 2023 · Davis, CA</p>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Worked with a professor-led team of six to develop <span className="font-medium text-foreground">Equigrade</span>, a Python program that allows for grade substitution and
        adjustment based on instructor discretion. Integrated Equigrade with the Canvas API, enabling direct grade modifications by instructors, and built a substitution feature allowing professors to replace the grade of a new assignment with a previous one.
      </p>
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Python</span>
        <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">Canvas API</span>
        <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Grade Substitution</span>
      </div>
    </div>
  </div>

  {/* Timeline dot */}
  <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background"></div>

  <div className="md:w-1/2 md:pl-8"></div>
</div>


                {/* UC Davis Undergraduate Research Center */}
<div className="relative flex flex-col md:flex-row md:items-center">
  <div className="md:w-1/2 md:pr-8"></div>

  {/* Timeline dot */}
  <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background"></div>

  <div className="md:w-1/2 md:pl-8">
    <div className="bg-card border border-border rounded-lg p-6 shadow-cultural hover:shadow-elegant transition-all duration-300">
      <h3 className="text-xl font-bold text-foreground mb-2">Researcher</h3>
      <h4 className="text-lg font-semibold text-primary mb-2">UC Davis Undergraduate Research Center</h4>
      <p className="text-muted-foreground text-sm mb-4">Jan 2023 – Apr 2023</p>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Collaborated with a professor-led team of four to develop a 2D vehicle control system using MATLAB, C++, and Simulink,
        enabling real-time vehicle maneuvering. Implemented a PID controller in C++ for dynamic obstacle response with 90% success,
        and presented a live simulation demonstrating real-time PID behavior at URC.
      </p>
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">C++</span>
        <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">MATLAB</span>
        <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Simulink</span>
        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">PID Controller</span>
      </div>
    </div>
  </div>
</div>


                

                {/* Teaching Assistant */}
                <div className="relative flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                    <div className="bg-card border border-border rounded-lg p-6 shadow-cultural hover:shadow-elegant transition-all duration-300">
                      <div className="flex flex-col md:items-end">
                        <h3 className="text-xl font-bold text-foreground mb-2">Teaching Assistant & Tutor</h3>
                        <h4 className="text-lg font-semibold text-primary mb-2">UC Davis Computer Science</h4>
                        <p className="text-muted-foreground text-sm mb-4">April 2023 - December 2023</p>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          Tutored and assisted students in Algorithm Design, Object-Oriented Programming in C++, 
                          and Data Structures courses. Reinforced my understanding while helping peers succeed 
                          through personalized instruction and mentorship.
                        </p>
                        <div className="flex flex-wrap gap-2 md:justify-end">
                          <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">C++</span>
                          <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">Algorithms</span>
                          <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Python</span>
                          <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Data Structures</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-cultural rounded-full border-4 border-background"></div>
                  
                  <div className="md:w-1/2 md:pl-8"></div>
                </div>
              </div>
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
  <a
  href="https://devpost.com/software/phishfilter?ref_content=my-projects-tab&ref_feature=my_projects"
  target="_blank"
  rel="noopener noreferrer"
  className="no-underline"
>
  <img
    src="/PhishFilterLogo.jpeg"
    alt="PhishFilter Logo"
    className="rounded-xl mb-6"
  />
  <h3 className="text-xl font-semibold text-foreground mb-3">
    PhishFilter
  </h3>
  <p className="text-muted-foreground mb-4">
  PhishFilter is an AI-powered mobile application designed to protect users from two of the most 
  common social engineering attack vectors: 
  scam calls and phishing emails, with a focus on 
  job scams targeting students and job seekers.
  </p>
  <div className="flex gap-2 flex-wrap">
    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
      Claude Opus 4
    </span>
    <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
      Vapi
    </span>
    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
      React Native
    </span>
    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
      FastAPI
    </span>
    <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
      Firebase
    </span>
    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
      Supabase
    </span>
    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
      Tailwind CSS
    </span>
  </div>
</a>   
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
  className="relative px-4 py-24 md:py-32 min-h-screen scroll-mt-20"
  style={{
    backgroundImage: `url('Graduation.JPEG')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center 70%',
    backgroundRepeat: 'no-repeat', // prevents tiling/repeating
  }}
>
  {/* Add a blur layer here */}
  <div className="absolute inset-0 bg-card/20 z-0" />

  {/* Content Box */}
  <div className="relative max-w-4xl mx-auto text-center z-10 flex flex-col justify-start h-full mt-24">
    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-cultural bg-clip-text text-primary mb-24">
      Get in Touch
    </h2>
    
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
