import MentalIssuesForm from "@/components/ui/MentalIssuesForm";

export default function InsightPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Fullscreen Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 w-full h-full object-cover"
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
      </video>

      {/* Transparent overlay for form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <MentalIssuesForm />
      </div>
    </div>
  );
}
