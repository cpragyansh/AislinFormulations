import React from 'react';
import './products.css'
import Mainpage from '../components/Mainpage/mainpage';

// Import the local image
import aboutBackground from '../2.png';
export default function Capsules() {
  const data = [
    { id: 27, formulation: 'ANTIOXIDANTS WITH MULTIVITAMINS & MINERALS CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 28, formulation: 'BIOTIN, MINERALS AND AMINO ACID CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 29, formulation: 'COENZYME Q10 WITH LYCOPENE, BETA CAROTENE, CALCIUM CARBONATE, VITAMIN B12, SELENIUM, ZINC & PIPERINE', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 30, formulation: 'FERROUS ASCORBATE, FOLIC ACID & ZINC CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 31, formulation: 'FLAXSEED CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 32, formulation: 'FOLIC ACID, METHYLCOBALAMINE WITH DHA CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 33, formulation: 'GABAPENTIN & METHYLCOBALAMINE CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 34, formulation: 'GINSENG EXTRACT WITH METHYLCOBALAMINE CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 35, formulation: 'GINSENG WITH GINKGO BILOBA, GREEN TEA, LYCOPENE, GARLIC, MULTIVITAMINS & MINERALS CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 36, formulation: 'LYCOPENE WITH GRAPE SEED EXTRACT, CALCIUM, IRON, MULTIVITAMINS & MINERALS CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 37, formulation: 'LYCOPENE WITH MULTIVITAMINS, MINERALS & ANTIOXIDANTS CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 38, formulation: 'METHYLCOBALAMINE, ALPHA LIPOIC ACID, L-CARNITINE WITH CALCIUM, MAGNESIUM & ZINC CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 39, formulation: 'MULTIVITAMINS WITH MINERALS, AMINO ACIDS, ANTI-OXIDANTS, LYCOPENE & ZINC CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 40, formulation: 'MULTIVITAMINS WITH MINERALS, AMINO ACIDS, ANTI-OXIDANTS, LYCOPENE, ZINC & VITAMIN C CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 41, formulation: 'MULTIVITAMINS WITH MINERALS, CALCIUM & VITAMIN D3 CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 42, formulation: 'OMEGA 3 FATTY ACIDS, VITAMINS A, D & E CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 43, formulation: 'PROBIOTICS WITH PREBIOTICS & VITAMINS CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 44, formulation: 'VITAMIN C WITH ZINC CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 45, formulation: 'VITAMIN D3 WITH CALCIUM CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 46, formulation: 'VITAMIN E WITH SELENIUM CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 47, formulation: 'ZINC WITH VITAMIN C CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 48, formulation: 'VITAMIN B12 WITH FOLIC ACID CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 49, formulation: 'CALCIUM WITH VITAMIN D3 CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 50, formulation: 'L-ARGININE WITH L-CITRULLINE CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 51, formulation: 'L-GLUTAMINE WITH VITAMINS & MINERALS CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 52, formulation: 'L-CARNITINE WITH VITAMINS & MINERALS CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 53, formulation: 'GINKGO BILOBA WITH VITAMINS & MINERALS CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 54, formulation: 'L-CARNITINE WITH L-ARGININE CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 55, formulation: 'MULTIVITAMINS WITH MINERALS, L-GLUTAMINE & VITAMIN D3 CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 56, formulation: 'BLOOD PURIFIER CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 57, formulation: 'CALCIUM WITH MAGNESIUM & VITAMIN D3 CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 58, formulation: 'VITAMIN C WITH CALCIUM & ZINC CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 59, formulation: 'L-CARNITINE WITH VITAMIN E CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
    { id: 60, formulation: 'GLUTATHIONE WITH VITAMINS & MINERALS CAPSULES', packs: '10X10', packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO' },
  ];

  return (
<div>

<Mainpage
        title="->>Capsules<<"
        backgroundImage={aboutBackground} // Pass the local image as a prop
      />




    <div className="table-container">
      <table className="styled-table">
        <thead>
          <tr>
            <th>S.NO.</th>
            <th>FORMULATIONS</th>
            <th>PACKS</th>
            <th>PACK TYPE</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.formulation}</td>
              <td>{item.packs}</td>
              <td>{item.packType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    
  );
}
