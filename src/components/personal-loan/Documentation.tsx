const Documentation = () => {
  const applicationLeft = [
    'Mobile Number', 'Email', 'Date of Birth', 'Gender', 'PAN', 'Employment Type',
    'Monthly Income', 'Company name', 'Address Proof', 'PAN Photo', 'Selfie'
  ];

  const applicationRight = [
    'Permanent Address', 'Current Address', 'Education', 'Profession', 'Marital Status',
    'Employment Proof for salaried employees (Salary Slip / Office ID / UAN)',
    'Bank Statement', 'Father/Mother / Spouse Name', 'Disbursement Bank Account Details',
    'eNACH/UPI e-mandate'
  ];

  return (
    <div className="mx-10 p-10 text-gray-800">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-center mb-10">
        Eligibility & Documentation for Instant Personal Loans Online
      </h1>

      {/* Features & Eligibility */}
      <div className="grid md:grid-cols-2 gap-10 mb-10">
        <div>
          <h2 className="text-xl font-semibold mb-4">Features</h2>
          <ul className="list-disc pl-5 space-y-6 ms-2">
            <li>Interest Rates ranging from 12% to 28.5% per annum</li>
            <li>Tenure ranging from 6 months to 60 months</li>
            <li>Processing fee up to 5.1% + GST</li>
            <li>Quick & direct transfer to the Bank Account</li>
            <li>No collateral or pledge of security</li>
            <li>
              Loan amount from ₹6,000 to ₹10 Lakhs
              <span className="block text-sm text-gray-600">
                (*Maximum amount may be contingent upon Applicant’s employment and financial status)
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Eligibility Criteria</h2>
          <ul className="list-disc pl-5 space-y-6 ms-2">
            <li>Indian Citizen</li>
            <li>Age to be 21 years and above</li>
            <li>Minimum monthly personal income of ₹10,000</li>
            <li>Monthly household income more than ₹25,000</li>
            <li>Possess Government–approved Valid Identity Proof & Address Proof</li>
            <li>Aadhaar-linked mobile number</li>
            <li>
              Active employee with regular/permanent status of employment
              <span className="block text-sm text-gray-600">(for salaried employees)</span>
            </li>
            <li>
              2 months of work experience in your current company
              <span className="block text-sm text-gray-600">(for salaried employees)</span>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-10" />

      {/* Documents Required */}
      <div className="grid md:grid-cols-2 gap-10 mb-10">
        <div>
          <h2 className="text-xl font-semibold mb-4">Documents Required</h2>
          <ul className="list-disc pl-5 space-y-6 ms-2">
            <li>Photograph</li>
            <li>PAN</li>
            <li>Processing fee up to 5.1% + GST</li>
          </ul>
        </div>
        <div className="md:mt-10">
          <ul className="list-disc pl-5 space-y-6 ms-2">
            <li>Address Proof (Permanent & Current Address)</li>
            <li>Income Proof (Bank Statements reflecting Monthly Income)</li>
            <li>
              Employment Proof for salaried employees
              <span className="block text-sm text-gray-600">(Salary Slip / Office ID / UAN authentication)</span>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-10" />

      {/* Other Fees & Charges */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-6">Other Fee & Charges</h2>
        <div className="grid md:grid-cols-2 gap-10 text-sm md:text-base">
          {/* Left */}
          <div className="space-y-6 ms-2">
            <div>
              <h3 className="font-semibold">• Foreclosure charges</h3>
              <p>Foreclosure charges of 4% of principal outstanding* + GST will be charged in case Foreclosure is opted</p>
            </div>

            <div>
              <h3 className="font-semibold">• Part–Prepayment Charges</h3>
              <p>Part Prepayment Charges of 4% of principal prepaid* + GST will be charged in case Part–Prepayment is opted</p>
            </div>

            <div>
              <h3 className="font-semibold">• Penal Charges</h3>
              <ol className="list-decimal pl-5">
                <li>EMI bounce charge (1st day): 4% of principal overdue* or ₹500, whichever is lower</li>
                <li>Penal charges for 2–180 days: 36% per annum on principal overdue (+ GST if applicable)</li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold">• Penal Charges</h3>
              <ol className="list-decimal pl-5">
                <li>EMI bounce charge (1st day): 4% of principal overdue* or ₹500, whichever is lower</li>
                <li>Penal charges for 2–180 days: 36% per annum on principal overdue (+ GST if applicable)</li>
              </ol>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6 ms-2">
            <div>
              <h3 className="font-semibold">• Retained Processing Fees in case of cool–off</h3>
              <ol className="list-decimal pl-5">
                <li>Percentage of one-time fees retained if customer exits during cooling-off</li>
                <li>Disclosed in KFS (Key Fact Statement)</li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold">• Stamp Duty</h3>
              <ol className="list-decimal pl-5">
                <li>Charged as per actuals at disbursement office/branch</li>
                <li>Disclosed upfront in KFS</li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold">• Maintenance & Procurement Cost</h3>
              <ol className="list-decimal pl-5">
                <li>May be applied based on disbursement office/branch</li>
                <li>Disclosed upfront in KFS</li>
              </ol>
            </div>

            <p className="text-sm text-gray-500 mt-2">* round to the nearest rupee</p>
          </div>
        </div>
      </div>

      <hr className="my-10" />

      {/* Application Requirements */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-6">Application Requirements</h2>
        <div className="grid md:grid-cols-2 gap-10 text-sm md:text-base">
          <ul className="list-disc pl-5 space-y-6 ms-2">
            {applicationLeft.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <ul className="list-disc pl-5 space-y-6 ms-2">
            {applicationRight.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
