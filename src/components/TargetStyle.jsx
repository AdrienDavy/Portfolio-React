/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useVideo } from '@contexts/VideoContext';
import { useTarget } from '@contexts/TargetContext';
const TargetStyle = () => {
  const { activeButton, isAnimating, targetStyle, setTargetStyle } = useTarget();
  const { playAnimation } = useVideo();




  useEffect(() => {
    const handleResize = () => {
      // Mettez à jour le style de l'élément animated-target en cas de redimensionnement de la fenêtre
      if (activeButton) {
        const buttonRect = activeButton.getBoundingClientRect();

        setTargetStyle({
          bottom: `${buttonRect.bottom}px`,
          height: `${buttonRect.height}px`,
          left: `${buttonRect.left}px`,
          right: `${buttonRect.right}px`,
          top: `${buttonRect.top}px`,
          width: `${buttonRect.width}px`,
          x: `${buttonRect.x}px`,
          y: `${buttonRect.y}px`,
        });
      }
    };

    // Ajouter un écouteur d'événements pour le redimensionnement de la fenêtre
    window.addEventListener('resize', handleResize);

    // Supprimer l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [activeButton]);
  return (
    <div
      className={playAnimation ? `animated-target ${isAnimating ? 'blur' : ''} hide` : `animated-target ${isAnimating ? 'blur' : ''}`}
      style={targetStyle}
    >
      <span className="tlv"></span>
      <span className="tlh"></span>
      <span className="trv"></span>
      <span className="trh"></span>
      <span className="brv"></span>
      <span className="brh"></span>
      <span className="blv"></span>
      <span className="blh"></span>
    </div>
  )
}

export default TargetStyle
