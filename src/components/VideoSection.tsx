const VideoSection = () => {
  const videos = [
    {
      id: "eoRXpeEsnhU",
      title: "Diga Adeus à Dentadura!",
      description: "",
    },
    {
      id: "awV3GLajujc",
      title: "Novo sorriso, nova vida",
      description: ""
    }
  ];

  // Função para rastrear o clique no botão do WhatsApp via GTM
  const handleWhatsAppClick = () => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'button_click',
        button_text: 'Agende Sua Transformação',
        button_location: 'video_section' // Localização do botão
      });
    }
  };

  // Função para rastrear o clique no botão do Canal do YouTube via GTM
  const handleYouTubeClick = () => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'button_click',
        button_text: 'Visitar Canal | Ver Mais Vídeos',
        button_location: 'video_section'
      });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-sky-950/50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-secondary/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Veja nossos{" "}
            <span className="text-transparent bg-gradient-secondary bg-clip-text">
              Resultados
            </span>{" "}
            em Ação
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Casos reais de transformação e depoimentos de pacientes que 
            confiaram na BCO para cuidar do seu sorriso
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-glow transition-smooth group"
            >
              {/* Video container */}
              <div className="relative aspect-[9/16] bg-muted/20 rounded-xl overflow-hidden mb-4 group-hover:scale-105 transition-smooth">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
              </div>
              
              {/* Video info */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-secondary mb-2">
                  {video.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-white mb-6">
            Quer ser o próximo caso de sucesso?
          </p>
          <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
            {/* Botão WhatsApp */}
            <a
              href="https://wa.me/5571999176671"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="gradient-secondary hover:gradient-primary text-secondary-foreground font-semibold px-8 py-3 rounded-full transition-smooth shadow-gold hover:shadow-glow"
            >
              Agende Sua Transformação
            </a>
            {/* Botão Canal YouTube */}
            <a
              href="https://www.youtube.com/@bcocentroodontologicoooo/shorts"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleYouTubeClick}
              className="bg-red-800 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition-smooth shadow-lg hover:shadow-red-500/50"
            >
              Visitar Canal | Ver Mais Vídeos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;