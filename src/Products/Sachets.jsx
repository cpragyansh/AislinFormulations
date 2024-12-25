import React from 'react';
import Mainpage from '../components/Mainpage/mainpage';

// Import the local image
import aboutBackground from '../2.png';
import './products.css';

export default function Sachets() {
  const data = [
    { id: 78, formulation: 'CHOLECALCIFEROL GRANULES SACHETS', packs: '1 GM', packType: '20 SACHETS IN ONE OUTER CARTON' },
    { id: 79, formulation: 'SIX NATURAL PROBIOTIC STRAINS & A PREBIOTIC WITH SACCHAROMYCES BOULARDIL AND ZINC SACHETS', packs: '1.50 GM', packType: '20 SACHETS IN ONE OUTER CARTON' },
    { id: 80, formulation: 'L-ARGININE, METHYLCOBALAMIN,FOLIC ACID & ZINC SULPHATE SACHET', packs: '5 GM', packType: '10 SACHETS IN ONE OUTER CARTON' },
    { id: 81, formulation: 'BIOACTIVE COLLAGEN PEPTIDES CALCIUM CITRATE MALEATE & VITAMIN D3 SACHETS', packs: '10.7 gm', packType: '10 SACHETS IN ONE OUTER CARTON' },
    { id: 82, formulation: 'A BLEND OF FOUR NATURAL PROBIOTIC STRAINS & A PREBIOTIC (FOS) ENRICHED WITH ZINC', packs: '1.5 GM', packType: '20 SACHETS IN ONE OUTER CARTON' },
    { id: 83, formulation: 'L-ARGININE & PROANTHOCYANIDIN SACHETS', packs: '5 GM', packType: '20 SACHETS IN ONE OUTER CARTON' },
  ];

  return (

<div>


<Mainpage
        title="->>Powder<<-"
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
