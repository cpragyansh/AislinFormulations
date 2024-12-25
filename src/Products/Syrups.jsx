import React from 'react';
import './products.css';
import Mainpage from '../components/Mainpage/mainpage';
import aboutBackground from '../2.png';
export default function Syrups() {
  const data = [
    { id: 61, formulation: 'ANTIOXIDANTS, LYCOPENE, VITAMINS & MINERALS SYRUP', packs: '200 / 100 ML', packType: 'BRUTE / MICRO BRUTE / ROUND BOTTLE' },
    { id: 62, formulation: 'B-COMPLEX WITH L-LYSINE SYRUP', packs: '200 / 100 ML', packType: 'BRUTE / MICRO BRUTE / ROUND BOTTLE' },
    { id: 63, formulation: 'B-COMPLEX WITH MULTIVITAMINS & ZINC SYRUP', packs: '200 / 100 ML', packType: 'BRUTE / MICRO BRUTE / ROUND BOTTLE' },
    { id: 64, formulation: 'CALCIUM , CARBONATE & VITAMIN D3 SUSPENSION', packs: '200 / 100 ML', packType: 'BRUTE / MICRO BRUTE / ROUND BOTTLE' },
    { id: 65, formulation: 'FERRIC AMMONIUM CITRATE WITH FOLIC ACID, VITAMINS & B-COMPLEX SYRUP', packs: '200 / 100 ML', packType: 'BRUTE / MICRO BRUTE / ROUND BOTTLE' },
    { id: 66, formulation: 'FUNGAL DIASTASE WITH PEPSIN SYRUP', packs: '200 / 100 ML', packType: 'BRUTE / MICRO BRUTE / ROUND BOTTLE' },
    { id: 67, formulation: 'IRON WITH MULTIVITAMINS, MINERALS & L-LYSINE SYRUP', packs: '200 / 100 ML', packType: 'BRUTE / MICRO BRUTE / ROUND BOTTLE' },
    { id: 68, formulation: 'L-LYSINE WITH VITAMINS, MINERALS & B-COMPLEX SYRUP', packs: '200 / 100 ML', packType: 'BRUTE / MICRO BRUTE / ROUND BOTTLE' },
    { id: 69, formulation: 'LYCOPENE WITH MULTIVITAMINS & MINERALS SYRUP', packs: '200 / 100 ML', packType: 'BRUTE / MICRO BRUTE / ROUND BOTTLE' },
    { id: 70, formulation: 'METHYLCOBALAMINE WITH LYCOPENE & MULTIVITAMINS SYRUP', packs: '200 / 100 ML', packType: 'BRUTE / MICRO BRUTE / ROUND BOTTLE' },
    { id: 71, formulation: 'PROTEIN TONIC WITH IRON, VITAMINS AND MINERALS', packs: '200 / 100 ML', packType: 'BRUTE / MICRO BRUTE / ROUND BOTTLE' },
    { id: 72, formulation: 'SILYMARIN WITH CALCIUM PANGAMATE & B-COMPLEX SUSPENSION', packs: '200 / 100 ML', packType: 'BRUTE / MICRO BRUTE / ROUND BOTTLE' },
    { id: 73, formulation: 'SILYMARIN WITH MULTIVITAMINS & CYANOCOBALAMINE SYRUP', packs: '200 / 100 ML', packType: 'BRUTE / MICRO BRUTE / ROUND BOTTLE' },
    { id: 74, formulation: 'ZINC GLUCONATE WITH PREBIOTICS & PROBIOTICS ORAL SUSPENSION', packs: '60 ML', packType: 'ROUND BOTTLE' },
    { id: 75, formulation: 'ZINC GLUCONATE WITH PREBIOTICS & PROBIOTICS ORAL SUSPENSION', packs: '100 ML', packType: 'BRUTE / MICRO BRUTE / ROUND BOTTLE' },
    { id: 76, formulation: 'FERROUS ASCORBATE & FOLIC ACID SUSPENSION', packs: '150ML', packType: 'BRUTE / MICRO BRUTE / ROUND BOTTLE' },
    { id: 77, formulation: 'LYCOPENE, GRAPE SEED EXTRACTS, VITAMINS, METHYLCOBALAMIN & ZINC SULPHATE', packs: '200ML', packType: 'BRUTE / MICRO BRUTE / ROUND BOTTLE' },
    { id: 78, formulation: 'VITAMIN B COMPLEX WITH LYSINE & SORBITOL SYRUP', packs: '200ML', packType: 'BRUTE / MICRO BRUTE / ROUND BOTTLE' },
  ];

  return (


    <div>
        <Mainpage
        title="->>Capsules<<-"
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
