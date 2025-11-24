export default function SubAdminExtra() {
  return (
    <div min-h-screen bg-neutral-100 py-6 px-4 sm:px-6 lg:px-8>
      
    <div
      className="bg-white shadow-md rounded-md p-8 mt-8 print:p-4 print:shadow-none print:rounded-none"
      style={{
        fontSize: "1rem",
        lineHeight: "1.6",
        fontFamily: "'Noto Sans Devanagari', sans-serif",
      }}
    >
      {/* Title */}
      <h2 className="text-2xl font-bold mb-8 text">
        शाखाप्रमुख यांचे मार्फत रवान
      </h2>

      {/* Paragraph */}
      <p className="mb-6">
        अर्जदाराने नमूद केलेली माहिती बरोबर असून त्यांना त्यांच्या कुटुंबातील
        व्यक्तीस दुर्धर किंवा दुर्बलता आजार झालेले मी पाहिले आहे / मला समजले
        आहे. अर्जदाराने फंडाची नेमकी वगणी दिलेली आहे / नाही. अर्जाची नमूद केलेली
        अर्जाची स्वरूप सौम्य / गंभीर आहे.
      </p>

      {/* Signature Row */}
      <div className="flex justify-between mt-20 text-lg">
        <div>जावक :</div>
        <div>दिनांक :</div>
        <div>शाखाप्रमुखाची सही व शिक्का :</div>
      </div>

      {/* Line */}
      <hr className="my-8 border-gray-800" />
    </div>
    </div>
  );
}
