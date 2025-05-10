import React from "react";

const Table = () => {
  return (
    <section className="min-h-screen bg-[#0A0B1E] text-white px-6 py-12 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Calculations</h2>
      </div>

      <div className="overflow-x-auto w-full max-w-6xl">
        <table className="w-full border border-[#2A2B3A] text-sm md:text-base">
          <thead className="bg-[#111223] text-gray-300">
            <tr>
              <th className="p-4 border border-[#2A2B3A]">Designation (Select One)</th>
              <th className="p-4 border border-[#2A2B3A]">Investment Amount<br />(Not refundable) Transferable</th>
              <th className="p-4 border border-[#2A2B3A]">Facilities</th>
              <th className="p-4 border border-[#2A2B3A]">Validity for 10 Years</th>
              <th className="p-4 border border-[#2A2B3A]">Minimum Maintenance Charges<br />(Petrol, Driver Salary, etc)</th>
              <th className="p-4 border border-[#2A2B3A]">Travel Charges for "Driver Less Car - New Concept"</th>
              <th className="p-4 border border-[#2A2B3A]">BONUS / EQUITY</th>
            </tr>
          </thead>
          <tbody className="bg-[#0A0B1E] text-white">
            {[
              {
                label: "OWNER",
                investment: "10,00,000",
                facilities: "Own Car",
                validity: "Yes",
                maintenance: "Yes",
                travel: "NIL",
                bonus: "FULL<br />With increase in Members"
              },
              {
                label: "Share Car",
                investment: "1,00,000",
                facilities: "Share Car",
                validity: "Yes",
                maintenance: "Yes",
                travel: `Rs.10/- per KM<br />(Rs.8/- per KM, in case of Advance Booking & Confirmation with payment before 24 Hours)`,
                bonus: "%<br />Will be decided later"
              },
              {
                label: "Taxi",
                investment: "NIL",
                facilities: "NIL",
                validity: "NIL",
                maintenance: "NIL",
                travel: `Rs.25/- per KM<br />(Rs.20/- per KM, in case of Advance Booking & Confirmation with payment before 24 Hours)`,
                bonus: "NIL"
              }
            ].map((row, index) => (
              <tr
                key={index}
                className="hover:bg-[#1a1b2f] hover:text-[#00ffd5] hover:shadow-[0_0_12px_#00ffd5] transition cursor-pointer"
              >
                <td className="p-4 border border-[#2A2B3A]">
                  <a href="/" className="hover:underline hover:text-[#00ffd5] transition">
                    {row.label}
                  </a>
                </td>
                <td className="p-4 border border-[#2A2B3A]">{row.investment}</td>
                <td className="p-4 border border-[#2A2B3A]">{row.facilities}</td>
                <td className="p-4 border border-[#2A2B3A]">{row.validity}</td>
                <td className="p-4 border border-[#2A2B3A]">{row.maintenance}</td>
                <td
                  className="p-4 border border-[#2A2B3A]"
                  dangerouslySetInnerHTML={{ __html: row.travel }}
                />
                <td
                  className="p-4 border border-[#2A2B3A]"
                  dangerouslySetInnerHTML={{ __html: row.bonus }}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
