import SectionIntroduction from "@/sections/SectionIntroduction";
import SectionInstallation from "@/sections/SectionInstallation";
import SectionConfiguration from "@/sections/SectionConfiguration";
import SectionClasses from "@/sections/SectionClasses";
import SectionMigration from "@/sections/SectionMigration";
import SectionExamples from "@/sections/SectionExamples";
import SectionRtl from "@/sections/SectionRtl";
import SectionFaq from "@/sections/SectionFaq";

const HomePage = () => (
    <>
        <SectionIntroduction />
        <SectionInstallation />
        <SectionConfiguration />
        <SectionClasses />
        <SectionMigration />
        <SectionExamples />
        <SectionRtl />
        <SectionFaq />
    </>
);

export default HomePage;
