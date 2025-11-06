import SectionEffortlessSwaps from "@/components/sectionEffortlessSwaps";
import SectionPoweringTransfers from "@/components/sectionPoweringTransfers";
import SectionLiquidNetwork from "@/components/sectionLiquidNetwork";
import SectionMarketplace from "@/components/sectionMarketplace";

export default function Features() {
  return (
    <div>
      <SectionEffortlessSwaps/>
      <SectionPoweringTransfers/>
      <SectionLiquidNetwork/>
      <SectionMarketplace/>
    </div>
  );
}
