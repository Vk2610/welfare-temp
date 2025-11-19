export default function AdminExtra() {
  return (
    <div className="bg-white p-6 shadow mt-6 text-xl leading-relaxed" style={{
        fontSize: "1rem",
        lineHeight: "1.6",
        fontFamily: "'Noto Sans Devanagari', sans-serif",
      }}>
      <h2 className="text-2xl font-bold mb-4">विभागीय अधिकाऱ्यांची नोंद</h2>

      <p>
        टीप सेवकाच्या अर्जातील खर्चाची रक्कम रु. ५० हजार पेक्षा जास्त असल्यास 
        विभागीय अधिकाऱ्यांची शिफारस घेणे बंधनकारक आहे.
      </p>

      <ul className="list-disc ml-6 mt-3 space-y-2">
        <li>सेवकाच्या अर्जातील खर्चाची रक्कम...</li>
        <li>अर्जासोबत जोडलेली बिल व इंस्टालमेंट्सची true copy आवश्यक आहे.</li>
        <li>अर्जदाराला मागील दोन वर्षात सेवक वेल्फेअर फंडातून मदत दिली असल्यास जोडणे आवश्यक.</li>
        <li>सेवक केल्यावर जोडलेला तपशील...</li>
      </ul>

      <div className="mt-6">
        <p>माझ्या माहितीनुसार वरील माहिती योग्य व वस्तुनिष्ठ वाटते, म्हणून शिफारस करीत आहे.</p>

        <div className="flex justify-end mt-20">
          विभागीय अधिकारी सही व शिक्का
        </div>
      </div>
    </div>
  );
}
