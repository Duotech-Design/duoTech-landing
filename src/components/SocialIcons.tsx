const SocialIcons = () => {
    const icons = [
      { name: "WhatsApp", src: "/Wa.svg", link: "#" },
      { name: "Gmail", src: "/Gmail.svg", link: "#" },
      { name: "Instagram", src: "/Ig.svg", link: "#" },
      { name: "Facebook", src: "/Fb.svg", link: "#" },
    ];
  
    return (
      <div className="absolute top-4 left-4 flex space-x-3">
        {icons.map((icon) => (
          <a 
            key={icon.name} 
            href={icon.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-4 h-4"
          >
            <img 
              src={icon.src} 
              alt={icon.name} 
              className="w-full h-full hover:opacity-80 transition-opacity duration-300"
            />
          </a>
        ))}
      </div>
    );
  };
  
  export default SocialIcons;
  