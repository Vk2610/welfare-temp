export default function ViewDocuments({ docs = [] }) {
  return (
    <div
      className="bg-white shadow-md rounded-md p-8 mt-8 print:p-4 print:shadow-none print:rounded-none"
      style={{
        fontSize: "1.5rem",
        lineHeight: "1.6",
        fontFamily: "'Noto Sans Devanagari', sans-serif",
      }}
    >
      <h2 className="text-2xl font-bold mb-6">अपलोड केलेली कागदपत्रे</h2>

      {docs.length === 0 ? (
        <p className="text-lg text-gray-700">कागदपत्रे उपलब्ध नाहीत.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {docs.map((file, index) => {
            const isImage = file.url.match(/\.(jpg|jpeg|png|gif|webp)$/i);
            const isPdf = file.url.match(/\.pdf$/i);

            return (
              <div
                key={index}
                className="border border-gray-300 rounded-md p-4 bg-gray-50 shadow-sm"
              >
                <p className="font-semibold text-lg mb-3">{file.name}</p>

                {/* IMAGE PREVIEW */}
                {isImage && (
                  <img
                    src={file.url}
                    alt={file.name}
                    className="w-full h-auto max-h-60 object-contain rounded"
                  />
                )}

                {/* PDF PREVIEW ICON */}
                {isPdf && (
                  <div className="flex flex-col items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                      alt="PDF Icon"
                      className="w-20 h-20 opacity-80"
                    />
                    <a
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 underline mt-2"
                    >
                      View / Download PDF
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      <p className="text-gray-600 text-base mt-6">
        (नोट: उपशाखाप्रमुख व प्रशासक यांना फक्त कागदपत्रे पाहता येतील. अपलोड करण्याचा पर्याय उपलब्ध नाही.)
      </p>
    </div>
  );
}
