import RWLOGO from '../../src/assets/images/RW-logo.png';
import CRYSTALVENTURESLOGO from '../../src/assets/images/CrystalVenturesLogo.png';
import LANDROVERLOGO from '../../src/assets/images/LandRover.png';
import MAERSK from '../../src/assets/images/MAERSKLOGO.png';
import CIMERWA from '../../src/assets/images/SIMERWALOGO.png';
import EQUITY from '../../src/assets/images/Equity_Group_Logo.png';
import mastersteel from '../../src/assets/images/mastersteelLogo.png'
// import rategom from '../../src/assets/images/rategom.png';
import BKGROUP from '../assets/images/BKGROUPLOGO.png';
import gwm from '../../src/assets/images/GWMLOGO.png';
import itel from '../../src/assets/images/ITELLOGO.png';
// import gorillalogistics from '../../src/assets/images/gorillalogistics.png';
import simbalogistics from '../../src/assets/images/SIMBALOGO.png';
import GP from '../assets/images/GPLOGO.png';
import ghassanaboud from '../../src/assets/images/GHASSANLOGO.webp';
import universityofglobalhealthequity from '../../src/assets/images/GlobalHealthLOGO.jpg';

const PARTNERS = [
  {
    name: 'Government of Rwanda',
    logo: RWLOGO,
  },
  {
    name: 'Crystal Ventures Ltd',
    logo: CRYSTALVENTURESLOGO,
  },
  {
    name: 'Land Rover',
    logo: LANDROVERLOGO,
  },
  {
    name: 'Maersk',
    logo: MAERSK,
    
  },
  {
    name: 'Cimerwa',
    logo: CIMERWA
  },
  {
    name: 'Equity',
    logo: EQUITY
  },
  {
    name: 'Master Steel',
    logo: mastersteel
  },
  {
    name: 'Rategom Freight Forwarders',
    // logo: rategom
  },
  {
    name: 'BK Group Plc',
    logo: BKGROUP
  },
  {
    name: 'GWM',
    logo: gwm
  },
  {
    name: 'iTel',
    logo: itel
  },
  {
    name: 'Gorilla Logistics',
    // logo: gorillalogistics
  },
  {
    name: 'Simba Logistics',
    logo: simbalogistics
  },
  {
    name: 'General Petroleum',
    logo: GP
  },
  {
    name: 'Ghassan Aboud Group',
    logo: ghassanaboud,
  },
  {
    name: 'University of Global Health Equity',
    logo:universityofglobalhealthequity,
  },
];

export default function Partners() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-content px-4 sm:px-6 py-16 sm:py-24 text-center">

        {/* Section heading */}
        <p className="mb-3 text-sm tracking-wide text-crimson">
          Trusted by
        </p>

        <h2 className="mb-8 sm:mb-12 text-2xl sm:text-3xl md:text-4xl font-semibold text-ink">
          Partners
        </h2>

        {/* Partners */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3 md:grid-cols-4">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="
                group
                flex
                h-24 sm:h-32
                items-center
                justify-center
                rounded-lg
                border
                border-line
                bg-white
                px-4 sm:px-6
                py-4 sm:py-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-crimson/40
                hover:shadow-md
              "
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="
                    max-h-16 sm:max-h-20
                    max-w-[140px] sm:max-w-[160px]
                    object-contain
                    grayscale
                    opacity-70
                    transition-all
                    duration-300
                    group-hover:grayscale-0
                    group-hover:opacity-100
                  "
                />
              ) : (
                <span
                  className="
                    text-xs sm:text-sm
                    font-medium
                    text-ash
                    transition-colors
                    duration-300
                    group-hover:text-ink
                  "
                >
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}