// SevakWelfareForm.jsx
import React, { useState } from "react";

export default function SevakWelfareForm() {
  const [form, setForm] = useState({
    applicantName: "",
    branchName: "",
    joiningDate: "",
    age: "",
    totalService: "",
    monthlySalary: "",
    mobile: "",
    patientName: "",
    relation: "",
    illnessNature: "",
    illnessDuration: "",
    medicineBill: "",
    doctorBill: "",
    otherExpenses: "",
    totalExpenses: "",
    certificatesAttached: "",
    sanctionLetter: "",
    previousHelp: "",
    previousHelpDetails: "",
    annualDeductions: "",
    currentDeductionMonth: "",
    requestedAmountNumbers: "",
    requestedAmountWords: "",
    branchNameForDeposit: "",
    savingsAccountNo: "",
    officerRecommendation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handlePrint = (e) => {
    e.preventDefault();
    window.print();
  };

  return (
    <div className="min-h-screen bg-neutral-100 py-6 px-4 sm:px-6 lg:px-8">
      {/* Import Noto Sans Devanagari for Marathi */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;700&display=swap');`}
      </style>

      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-md p-8 print:p-4 print:shadow-none print:rounded-none">
        {/* Form area */}
        <form className="text-gray-900" onSubmit={handlePrint}>
          {/* Header (keeps same Marathi text) */}
          <div className="text-center mb-4 print:mb-2" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
            <h1 className="text-lg font-bold">रयत शिक्षण संस्था, रयत सेवक वेलफेअर फंड, सातारा.</h1>
            <h2 className="text-base underline font-medium mt-1">मदत मागणी अर्ज</h2>
          </div>

          {/* Address block */}
          <div className="mb-4 text-sm" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
            <p>प्रति,</p>
            <p>मा. चेअरमनसो,</p>
            <p>रयत शिक्षण संस्ता, रयत सेवक वेलफेअर फंड, सातारा.</p>
          </div>

          <div className="mb-4 text-sm" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
            <p><strong>विषय :</strong> सेवक वेलफेअर फंडातून आर्थिक मदत मिळाविण्याबाबत.</p>
          </div>

          <div className="mb-6 text-sm" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
            <p>
              महाशय, <br />
              मी खालील कारणाक्रता आपला सेवक वेलफेअर फंडातून आर्थिक मदत मिळावी म्हणून हा अर्ज करीत आहे. त्यासाठी मी माझी पुढीलप्रमाणे माहिती देत आहे.
            </p>
          </div>

          {/* 1. Applicant details */}
          <div className="mb-4 space-y-3" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-1/3">१ अ) अर्जदाराचे संपूर्ण नाव (प्रथम आडनाव )</div>
              <div className="flex-1">
                <input
                  name="applicantName"
                  value={form.applicantName}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-700 focus:outline-none py-1 text-sm"
                  placeholder="_______________________________________"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <div className="w-1/3">ब) शाखेचे नाव</div>
              <div className="flex-1">
                <input
                  name="branchName"
                  value={form.branchName}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-700 focus:outline-none py-1 text-sm"
                  placeholder="_______________________________________________________"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3 text-sm">
              <div className="flex-1 min-w-[160px]">
                क) नेमणूक तारीख
                <div>
                  <input
                    name="joiningDate"
                    value={form.joiningDate}
                    onChange={handleChange}
                    type="date"
                    className="w-full border-b-2 border-gray-700 focus:outline-none py-1 text-sm"
                  />
                </div>
              </div>

              <div className="flex-1 min-w-[120px]">
                ड) वय
                <div>
                  <input
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-700 focus:outline-none py-1 text-sm"
                    placeholder="____"
                  />
                </div>
              </div>

              <div className="flex-1 min-w-[160px]">
                ई) संस्थेतील एकूण सेवाकालावधी
                <div>
                  <input
                    name="totalService"
                    value={form.totalService}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-700 focus:outline-none py-1 text-sm"
                    placeholder="______________"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 2. Salary and mobile */}
          <div className="mb-4 text-sm" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
            <div className="flex items-center gap-3">
              <div className="w-1/2">२. दरमहा सव्वा पगार</div>
              <div className="w-1/2">
                <input
                  name="monthlySalary"
                  value={form.monthlySalary}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-700 focus:outline-none py-1 text-sm"
                  placeholder="__________________"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <div className="w-1/2">मोबाईल नं.</div>
              <div className="w-1/2">
                <input
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-700 focus:outline-none py-1 text-sm"
                  placeholder="________________________"
                />
              </div>
            </div>
          </div>

          {/* 3. Patient details */}
          <div className="mb-4 space-y-3 text-sm" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
            <div className="flex gap-3 items-start">
              <div className="w-1/3">३. अ) ज्याचे आजारासाठी मदत हवी आहे त्याचे संपूर्ण नाव</div>
              <div className="flex-1">
                <input
                  name="patientName"
                  value={form.patientName}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-700 focus:outline-none py-1 text-sm"
                  placeholder="______________________________________"
                />
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="w-1/3">सेवकाशी नाते</div>
              <div className="w-1/3">
                <input
                  name="relation"
                  value={form.relation}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-700 focus:outline-none py-1 text-sm"
                  placeholder="________________"
                />
              </div>

              <div className="w-1/3">
                ब) आजाराचे स्वरूप
                <input
                  name="illnessNature"
                  value={form.illnessNature}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-700 focus:outline-none py-1 text-sm mt-1"
                  placeholder="_________________________"
                />
              </div>
            </div>

            <div>
              क) आजाराचा कालावधी
              <input
                name="illnessDuration"
                value={form.illnessDuration}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-700 focus:outline-none py-1 text-sm mt-1"
                placeholder="__________________________________________________"
              />
            </div>
          </div>

          {/* 4. Bills and expenses */}
          <div className="mb-4 text-sm space-y-2" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
            <div className="flex gap-3 items-center">
              <div className="w-1/3">४ अ) औषधे रु.</div>
              <div className="w-1/3">
                <input
                  name="medicineBill"
                  value={form.medicineBill}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-700 focus:outline-none py-1 text-sm"
                  placeholder="____________________"
                />
              </div>

              <div className="w-1/3">ब) डॉक्टरांचे बिल रु.</div>
              <div className="w-1/3">
                <input
                  name="doctorBill"
                  value={form.doctorBill}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-700 focus:outline-none py-1 text-sm"
                  placeholder="____________________"
                />
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <div className="w-1/3">क) इतर खर्च रु.</div>
              <div className="w-1/3">
                <input
                  name="otherExpenses"
                  value={form.otherExpenses}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-700 focus:outline-none py-1 text-sm"
                  placeholder="____________________"
                />
              </div>

              <div className="w-1/3">ड) एकूण झालेला खर्च रु.</div>
              <div className="w-1/3">
                <input
                  name="totalExpenses"
                  value={form.totalExpenses}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-700 focus:outline-none py-1 text-sm"
                  placeholder="___________________"
                />
              </div>
            </div>
          </div>

          {/* 5-7 additional declarations */}
          <div className="mb-4 text-sm space-y-2" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
            <div>५. वरील प्रमाणे झालेल्या खर्चाची बिले व पावत्या क्रमांक ०१ ते ___ सोबत जोडलेली आहेत.</div>

            <div className="flex gap-3 items-center">
              <div className="w-1/2">६. वर नमूद केलेल्या आजारांबाबत डॉक्टरांचे सर्टिफिकेट जोडले आहे.</div>
              <div className="w-1/2">
                <input
                  name="certificatesAttached"
                  value={form.certificatesAttached}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-700 focus:outline-none py-1 text-sm"
                  placeholder="होय/नाही"
                />
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="w-1/3">७. यापूर्वी फंडातून मदत घेतली आहे / नाही</div>
              <div className="w-2/3">
                <input
                  name="previousHelp"
                  value={form.previousHelp}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-700 focus:outline-none py-1 text-sm"
                  placeholder="होय/नाही"
                />
                <textarea
                  name="previousHelpDetails"
                  value={form.previousHelpDetails}
                  onChange={handleChange}
                  rows="3"
                  className="w-full border-b-2 border-gray-700 focus:outline-none py-1 text-sm mt-2"
                  placeholder="अ) मदत घेतली असल्यास किती वेळा, तपशील लिहा..."
                />
              </div>
            </div>
          </div>

          {/* 8-9 account & requested amount */}
          <div className="mb-4 text-sm space-y-2" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
            <div className="flex gap-3 items-center">
              <div className="w-1/2">८ अ) प्रते्यक वर्षीसाठी सेवक वेलफेअर फंडाची वगणी दिलेली आहे काय</div>
              <div className="w-1/2">
                <input
                  name="annualDeductions"
                  value={form.annualDeductions}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-700 focus:outline-none py-1 text-sm"
                  placeholder="होय/नाही"
                />
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <div className="w-1/2">ब) चालू वर्षी वगणी पाठवलेला महिना व रक्कम रुपये</div>
              <div className="w-1/2">
                <input
                  name="currentDeductionMonth"
                  value={form.currentDeductionMonth}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-700 focus:outline-none py-1 text-sm"
                  placeholder="____________________________"
                />
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <div className="w-1/3">९ अ) आता किती मदतीची आवश्यकता आहे ती रक्कम रु. अंकी व अक्षरी</div>
              <div className="w-2/3">
                <input
                  name="requestedAmountNumbers"
                  value={form.requestedAmountNumbers}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-700 focus:outline-none py-1 text-sm mb-1"
                  placeholder="___________________"
                />
                <input
                  name="requestedAmountWords"
                  value={form.requestedAmountWords}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-700 focus:outline-none py-1 text-sm"
                  placeholder="(अक्षरी) ____________________________________"
                />
              </div>
            </div>

            <div className="mt-2">
              ब) किमतीने मंजूर केलेली मदत जमा रयत सेवक को-ऑपरेटिव्ह बँक लिमिटेड सातारा शाखा
              <div className="flex gap-3 mt-2">
                <div className="w-1/2">
                  शाखा
                  <input
                    name="branchNameForDeposit"
                    value={form.branchNameForDeposit}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-700 focus:outline-none py-1 text-sm"
                    placeholder="__________"
                  />
                </div>
                <div className="w-1/2">
                  सेविंग ठेव खाते क्र.
                  <input
                    name="savingsAccountNo"
                    value={form.savingsAccountNo}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-700 focus:outline-none py-1 text-sm"
                    placeholder="___________________"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Declaration & signatures */}
          <div className="mb-6 text-sm" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
            <p>
              अर्जातील वरील दिलेली माहिती खरी व परिपूर्ण आहे. त्यामध्ये काही चूक किंवा विसंगती आढळल्यास त्याबाबत संस्थेकडून होणाऱ्या कारवाईस मी जबाबदार राहीन याची मला पूर्ण जाणीव आहे.
            </p>

            {/* <div className="mt-4 text-right space-y-2">
              <div>—------------------------------------------------------------------------------------------------------------------</div>
              <p>अर्जदाराचे नाव: __________________________</p>
              <p>स्वाक्षरी: _____________________________</p>
              <p>दिनांक: _______________________________</p>
            </div> */}
          </div>

          {/* Officer / branch head area */}
          <div className="mb-6 text-sm" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
            <div className="mb-2">शाखाप्रमुख यांचे मागचे टिप्पणी व शिफारस:</div>
            <textarea
              name="officerRecommendation"
              value={form.officerRecommendation}
              onChange={handleChange}
              rows="4"
              className="w-full border-b-2 border-gray-700 focus:outline-none py-1 text-sm"
              placeholder="शाखाप्रमुखांचा मजकूर येथे लिहा..."
            />
            <div className="mt-4">
              <p>शाखाप्रमुखाची सही व दिनांक : ____________________________</p>
            </div>
          </div>

          {/* Notes */}
          <div className="mb-6 text-xs text-gray-700" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
            <p>टीप: सेवकाच्या अर्जातील खर्चाची एकूण रक्कम रुपये 50 हजार पेक्षा जास्त असल्यास अशा अर्जावर विभागीय अधिकारी यांची शिफारस घेणे बंधनकारक आहे.</p>
            <ol className="list-decimal ml-5 mt-2">
              <li>अर्जासोबत जोडलेली सर्व बिले सत्यप्रति करणे आवश्यक आहे.</li>
              <li>अर्जासोबत मागील दोन वर्षांची वगणी कपात यादी जोडणे आवश्यक आहे.</li>
              <li>फंडातून मदत देताना कुटुंबातील घटक व परिस्थिती विचारात घेतली जाईल.</li>
            </ol>
          </div>

          {/* Print / Submit button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 focus:outline-none"
            >
              🖨️ Print / Submit
            </button>
          </div>
        </form>
      </div>

      {/* Print styles */}
      <style>
        {`
          /* Print page settings */
          @page {
            size: A4 portrait;
            margin: 12mm;
          }

          @media print {
            /* Hide everything outside the form wrapper to keep print clean */
            body * {
              visibility: hidden;
            }
            /* Show only the form card content */
            .max-w-6xl, .max-w-6xl * {
              visibility: visible;
            }
            .max-w-3xl {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              box-shadow: none !important;
              border-radius: 0 !important;
              margin: 0;
              padding: 6mm !important;
            }

            /* Hide interactive elements that shouldn't print */
            button, input[type="date"]::-webkit-calendar-picker-indicator {
              display: none !important;
            }

            /* Remove borders of inputs/selects/textarea when printing */
            input, textarea, select {
              border: none !important;
              background: transparent !important;
              box-shadow: none !important;
              -webkit-print-color-adjust: exact;
              color: #000;
            }

            /* Reduce spacing slightly for compact print */
            .max-w-3xl { padding: 8mm !important; }
            .max-w-3xl input, .max-w-3xl textarea { font-size: 12pt !important; }

            /* Avoid page-break inside important blocks */
            form, form > * { page-break-inside: avoid; }

            /* Hide the print button */
            button { display: none !important; }
          }

          /* ensure Devanagari font used on screen too */
          * { font-family: 'Noto Sans Devanagari', sans-serif; }
        `}
      </style>
    </div>
  );
}
