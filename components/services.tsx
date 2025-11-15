const services = [
  {
    title: "Web Development",
    description:
      "Designing and building fast, responsive, and secure websites that help your brand stand out and convert visitors.",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps with clean UI, real-time features, and seamless performance across Android and iOS.",
  },
  {
    title: "API Development",
    description:
      "Building secure, scalable APIs that connect your systems, automate workflows, and power your digital products.",
  },
  {
    title: "Hotspot Billing Installation",
    description:
      "Setup and configure reliable Wi-Fi billing solutions with user access control, payment integration, and usage analytics.",
  },
  {
    title: "POS System Installation",
    description:
      "Complete retail and inventory management systems tailored for hardware, fashion, and supermarket businesses.",
  },
  {
    title: "System Integration",
    description:
      "Integrate payment gateways, CRMs, or third-party tools to streamline your business processes and reduce manual work.",
  },
];

export default function Services() {
  return (
    <div className="w-full bg-white dark:bg-black border-b-2 border-black z-50">
      <div className="max-w-6xl mx-auto flex flex-col justify-center md:border-x-2 border-black">
        {/* Header */}
        <div className="border-b-2 border-black p-4 sm:p-6 md:p-12">
          <h1 className="text-2xl sm:text-3xl font-semibold leading-tight sm:leading-10 tracking-tight text-black dark:text-zinc-50">
            My Services
          </h1>
        </div>

        {/* Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-4 sm:p-6 md:p-12 border-black ${
                // Mobile: border-b on all except last
                index < services.length - 1 ? "border-b-2 md:border-b-0" : ""
              } ${
                // Desktop: border-b on top row (first 3)
                index < 3 ? "md:border-b-2" : ""
              } ${
                // Desktop: border-r on all except last column
                index % 3 !== 2 ? "md:border-r-2" : ""
              }`}
            >
              <h2 className="text-lg sm:text-xl font-bold mb-2 text-black dark:text-zinc-100">
                {service.title}
              </h2>
              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
