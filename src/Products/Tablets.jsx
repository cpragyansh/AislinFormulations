import React, { useState } from 'react';
import './products.css';
import Mainpage from '../components/Mainpage/mainpage';
import aboutBackground from '../2.png';
export default function Products() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogData, setDialogData] = useState({});

  // Function to open the dialog with product details
  const openDialog = (product) => {
    setDialogData(product);
    setIsDialogOpen(true);
  };

  // Function to close the dialog
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  // Product data
  const products = [
    {
      id: 2,
      formulation: 'S-ADENOSYL METHIONINE TABLETS 200 MG',
      pack: '10X10',
      packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO',
    },
    {
      id: 3,
      formulation: 'S-ADENOSYL METHIONINE TABLETS 400 MG',
      pack: '10X10',
      packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO',
    },
    {
      id: 4,
      formulation: 'TABLETS OF SILYMARIN + L-GLUTATHIONE + N-ACEFYL CYSFEINE + CO-Q10 + INOSITOL + ANTIOXIDANTS & MICRONUTRIENTS',
      pack: '10X10',
      packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO',
    },
    {
      id: 5,
      formulation: 'S-ADENOSYL METHIONINE TABLETS 200 MG',
      pack: '10X10',
      packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO',
    },
    {
      id: 6,
      formulation: 'S-ADENOSYL METHIONINE TABLETS 400 MG',
      pack: '10X10',
      packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO',
    },
    {
      id: 7,
      formulation: 'TABLETS OF SILYMARIN + L-GLUTATHIONE + N-ACEFYL CYSFEINE + CO-Q10 + INOSITOL + ANTIOXIDANTS & MICRONUTRIENTS',
      pack: '10X10',
      packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO',
    },
    {
      id: 8,
      formulation: 'S-ADENOSYL METHIONINE TABLETS 200 MG',
      pack: '10X10',
      packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO',
    },
    {
      id: 9,
      formulation: 'S-ADENOSYL METHIONINE TABLETS 400 MG',
      pack: '10X10',
      packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO',
    },
    {
      id: 10,
      formulation: 'TABLETS OF SILYMARIN + L-GLUTATHIONE + N-ACEFYL CYSFEINE + CO-Q10 + INOSITOL + ANTIOXIDANTS & MICRONUTRIENTS',
      pack: '10X10',
      packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO',
    },
    {
      id: 11,
      formulation: 'S-ADENOSYL METHIONINE TABLETS 200 MG',
      pack: '10X10',
      packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO',
    },
    {
      id: 12,
      formulation: 'S-ADENOSYL METHIONINE TABLETS 400 MG',
      pack: '10X10',
      packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO',
    },
    {
      id: 13,
      formulation: 'TABLETS OF SILYMARIN + L-GLUTATHIONE + N-ACEFYL CYSFEINE + CO-Q10 + INOSITOL + ANTIOXIDANTS & MICRONUTRIENTS',
      pack: '10X10',
      packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO',
    },
    {
      id: 14,
      formulation: 'S-ADENOSYL METHIONINE TABLETS 200 MG',
      pack: '10X10',
      packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO',
    },
    {
      id: 15,
      formulation: 'S-ADENOSYL METHIONINE TABLETS 400 MG',
      pack: '10X10',
      packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO',
    },
    {
      id: 16,
      formulation: 'TABLETS OF SILYMARIN + L-GLUTATHIONE + N-ACEFYL CYSFEINE + CO-Q10 + INOSITOL + ANTIOXIDANTS & MICRONUTRIENTS',
      pack: '10X10',
      packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO',
    },
    {
      id: 17,
      formulation: 'S-ADENOSYL METHIONINE TABLETS 200 MG',
      pack: '10X10',
      packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO',
    },
    {
      id: 18,
      formulation: 'S-ADENOSYL METHIONINE TABLETS 400 MG',
      pack: '10X10',
      packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO',
    },
    {
      id: 19,
      formulation: 'TABLETS OF SILYMARIN + L-GLUTATHIONE + N-ACEFYL CYSFEINE + CO-Q10 + INOSITOL + ANTIOXIDANTS & MICRONUTRIENTS',
      pack: '10X10',
      packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO',
    },
    {
      id: 20,
      formulation: 'S-ADENOSYL METHIONINE TABLETS 200 MG',
      pack: '10X10',
      packType: 'BLISTER / ALU-ALU - WITH / WITHOUT MONO',
    },
    // Add more products as needed
  ];

  return (
    <div>
      <Mainpage
        title="->>Tablets<<-"
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
            {products.map((product) => (
              <tr key={product.id} onClick={() => openDialog(product)}>
                <td>{product.id}</td>
                <td>{product.formulation}</td>
                <td>{product.pack}</td>
                <td>{product.packType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Dialog Box */}
      {isDialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <h3>Product Details</h3>
            <p><strong>Formulation:</strong> {dialogData.formulation}</p>
            <p><strong>Pack:</strong> {dialogData.pack}</p>
            <p><strong>Pack Type:</strong> {dialogData.packType}</p>
            <button onClick={closeDialog}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
