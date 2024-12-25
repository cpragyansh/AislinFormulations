import React from 'react';
import './products.css';
import Mainpage from '../components/Mainpage/mainpage';

// Import the local image
import aboutBackground from '../2.png';

export default function Powder() {
  const data = [
    { id: 84, formulation: 'PROTEIN POWDER', packs: '200 GM', packType: 'TIN/GLASS/PET JAR/COMPOSITE/SPL.PET JAR' },
    { id: 85, formulation: 'PROTEIN POWDER WITH DHA & BOVINE COLOSTRUM', packs: '200 GM', packType: 'TIN/GLASS/PET JAR/COMPOSITE/SPL.PET JAR' },
    { id: 86, formulation: 'PROTEIN POWDER WITH LYCOPENE, ANTIOXIDANTS, DHA, MULTIVITAMINS AND MULTIMINERALS', packs: '200 GM', packType: 'TIN/GLASS/PET JAR/COMPOSITE/SPL.PET JAR' },
    { id: 87, formulation: 'PROTEIN POWDER WITH LYCOPENE, ANTIOXIDANTS, MULTIVITAMINS AND MULTIMINERALS', packs: '200 GM', packType: 'TIN/GLASS/PET JAR/COMPOSITE/SPL.PET JAR' },
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
