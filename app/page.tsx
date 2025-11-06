import SectionStandard from "@/components/sectionStandard";
import SectionCenteredOne from "@/components/sectionCenteredOne";
import SectionCenteredTwo from "@/components/sectionCenteredTwo";
import SectionCenteredThree from "@/components/sectionCenteredThree";
import SectionStandardTwo from "@/components/sectionStandardTwo";
import SectionStandardThree from "@/components/sectionStandardThree";
import SectionTestimonials from "@/components/sectionTestimonials";
import SectionFaq from "@/components/sectionFaq";

export default function Home() {
  return (
    <div>
     <SectionStandard/>
     <SectionCenteredOne/>
     <SectionCenteredTwo/>
     <SectionCenteredThree/>
     <SectionStandardTwo/>
     <SectionStandardThree/>
     <SectionTestimonials/>
     <SectionFaq/>
    </div>
  );
}
