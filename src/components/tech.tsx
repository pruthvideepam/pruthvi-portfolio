import { BallCanvas } from "./canvas";
import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";
import { useIsMobile } from "../hooks/useIsMobile";

// Technologies
export const Tech = () => {
  const isMobile = useIsMobile();

  return (
    <SectionWrapper>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {TECHNOLOGIES.map((technology) => (
          <div className="w-28 h-28 flex items-center justify-center" key={technology.name}>
            {isMobile ? (
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-16 h-16 object-contain"
              />
            ) : (
              <BallCanvas icon={technology.icon} />
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};