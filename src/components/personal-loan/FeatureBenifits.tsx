import OnlineProcess from "../../assets/icons/100OnlineProcess.svg"
import LoanFRom from "../../assets/icons/LoanFrom.svg"
import Hassle from "../../assets/icons/HasselFees.svg"
import Available from "../../assets/icons/Available.svg"
import LoanDisbursal from "../../assets/icons/LoanDisbursal.svg"
import PerosnalLoan from "../../assets/icons/PersonalLoan.svg"

export default function FeatureBenifits() {
  const features = [
    {
      title: "100% online process",
      img: OnlineProcess,
    },
    {
      title: "Loans from ₹6,000 to ₹10 Lakhs",
      img: LoanFRom,
    },
    {
      title: "Hassle-free documentation",
      img: Hassle,
    },
    {
      title: "Available 24x7",
      img: Available,
    },
    {
      title: "Loan disbursal in minutes",
      img: LoanDisbursal,
    },
    {
      title: "Personal loan interest rates ranging from 12% to 28.5% p.a.",
      img: PerosnalLoan,
    },
  ];

  return (
    <section className="py-12 px-6 mx-12 my-12">
      <div className="text-center mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">Features and Benefits</h2>
        <p className="text-gray-600">
          Discover the best features designed to provide a smooth and hassle-free experience when applying for the best personal loans.
          With our fully online process, competitive personal loan interest rates, and quick disbursal options,
          securing the funds you need has never been easier.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ms-30">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-start text-left">
            <img
              src={feature.img}
              alt={feature.title}
              className="w-16 h-16 mr-4 mb-2"
            />
            <div className="w-6/9">
              <p className="text-sm font-medium text-gray-900">{feature.title}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
