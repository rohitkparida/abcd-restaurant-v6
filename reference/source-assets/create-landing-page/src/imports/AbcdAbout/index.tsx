import svgPaths from "./svg-520e36shwo";
import imgLogo1 from "./421ca4cbf817406c48de8f3873c39b3bf4f5d769.png";
import imgBackground1 from "./94c2800c56a545e2601d0462b8cf190d97139aae.png";
import imgImageRestaurantInteriorTable from "./3c85f524fd5a2af254092d68c8dd064f7c1147a0.png";
import imgImageArjunDesai from "./7594af19500e3adc9c5e74e8973197e003660583.png";
import imgImageArjunDesai1 from "./bbe17f7c5547d3519f94ca8a047d48ccadb9f02c.png";
import imgLogo2 from "./c7df93e32b2b8eb46cd46ea2c479cf787bc42bc7.png";
import { imgBackground } from "./svg-ci0oa";

function Text() {
  return (
    <div className="content-stretch flex flex-col h-[15.359px] items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[15.36px] relative shrink-0 text-[#b89047] text-[9.6px] tracking-[0.96px] uppercase whitespace-nowrap">American Brand Culturally Desi</p>
    </div>
  );
}

function TextMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[43.758px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <div className="h-[88.836px] relative shrink-0 w-[168.534px]" data-name="logo 1">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo1} />
        </div>
        <TextMargin />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[23.552px] relative shrink-0 text-[#4e121e] text-[18px] whitespace-nowrap">Home</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#4e121e] h-[2px] left-1/2 top-[38.05px] w-[50px]" data-name="Text">
      <div className="-translate-x-1/2 absolute bg-[#4e121e] h-[2.033px] left-1/2 top-[-1.07px] w-[12px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[23.552px] relative shrink-0 text-[#2c2627] text-[18px] whitespace-nowrap">Our Story</p>
        <Text1 />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="relative shrink-0 w-[766.5px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center justify-center relative size-full">
        <Frame />
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[23.552px] relative shrink-0 text-[#2c2627] text-[18px] whitespace-nowrap">Menu</p>
        <Frame4 />
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[23.552px] relative shrink-0 text-[#2c2627] text-[18px] whitespace-nowrap">Gallery</p>
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[23.552px] relative shrink-0 text-[#2c2627] text-[18px] whitespace-nowrap">Reserve</p>
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[23.552px] relative shrink-0 text-[#2c2627] text-[18px] whitespace-nowrap">Contact</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33359 7.94023H12.6669" id="Vector" stroke="var(--stroke-0, #FAF7F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d={svgPaths.p1d333700} id="Vector_2" stroke="var(--stroke-0, #FAF7F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative rounded-[999px] shrink-0 size-[34px]" data-name="Text">
      <div aria-hidden className="absolute border-[1.5px] border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.5px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#4e121e] relative rounded-[50px] shrink-0 w-[171.5px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[26px] pr-[8px] py-[8px] relative size-full">
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#faf7f2] text-[16px] whitespace-nowrap">Book a Table</p>
        <Text2 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-end max-w-[1280px] px-[32px] py-[11.2px] relative shrink-0" data-name="Container">
      <Link />
      <Navigation />
      <Button />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#f9f1e5] h-[161px] relative shrink-0 w-[1379px]" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <ContainerMargin />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[96px] relative shrink-0 w-[421px]" data-name="Heading 1">
      <p className="[word-break:break-word] absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[96px] left-0 text-[#511923] text-[96px] top-0 whitespace-nowrap">Our Story</p>
    </div>
  );
}

function Heading1Margin() {
  return (
    <div className="relative shrink-0" data-name="Heading 1 (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Heading />
      </div>
    </div>
  );
}

function ParagraphMargin() {
  return (
    <div className="relative shrink-0" data-name="Paragraph (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Playfair_Display:Italic',sans-serif] font-normal italic leading-[40px] relative shrink-0 text-[#b98f56] text-[30px] w-[448px]">{`Where heritage meets heart, and every meal carries a memory. `}</p>
      </div>
    </div>
  );
}

function ParagraphMargin1() {
  return (
    <div className="relative shrink-0" data-name="Paragraph (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[40px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#6b5e59] text-[18px] w-[448px]">{`ABCD is more than a restaurant. It's a celebration of India's rich culinary heritage and the people who bring it to life. We honor tradition while creating experiences that feel like home. `}</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-[446px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading1Margin />
        <ParagraphMargin />
        <ParagraphMargin1 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[608.109px] relative shrink-0 w-[1081.082px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute h-[608.109px] left-[-69.99px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[95.008px_9.93px] mask-size-[1031.047px_588.25px] top-0 w-[1081.082px]" style={{ maskImage: `url("${imgBackground}")` }} data-name="Background">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackground1} />
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex gap-[31px] items-center max-w-[1280px] pb-[60px] pt-[20px] px-[64px] relative shrink-0 w-[1280px]" data-name="Section">
      <Container2 />
      <Frame3 />
    </div>
  );
}

function SectionMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Section />
      </div>
    </div>
  );
}

function ImageRestaurantInteriorTable() {
  return (
    <div className="h-[345.992px] relative shrink-0 w-full" data-name="Image (Restaurant Interior Table)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageRestaurantInteriorTable} />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[345.992px] items-start overflow-clip relative rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0 w-[461.328px]" data-name="Container">
      <ImageRestaurantInteriorTable />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[207.305px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#b98f56] text-[12px] top-[0.5px] tracking-[1.2px] uppercase whitespace-nowrap">A Table Shaped By Memory</p>
      </div>
    </div>
  );
}

function Container6() {
  return <div className="bg-[#b98f56] h-px relative shrink-0 w-[24px]" data-name="Container" />;
}

function Container7() {
  return (
    <div className="absolute flex items-center justify-center left-[-1.24px] size-[8.485px] top-[-1.24px]">
      <div className="flex-none rotate-45">
        <div className="bg-[#b98f56] relative size-[6px]" data-name="Container" />
      </div>
    </div>
  );
}

function ContainerTransform() {
  return (
    <div className="relative shrink-0 size-[6px]" data-name="Container (transform)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container7 />
      </div>
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="h-[6px] relative shrink-0 w-[42px]" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[12px] relative size-full">
        <Container6 />
        <ContainerTransform />
      </div>
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="h-[32px] relative shrink-0 w-[298.664px]" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[16px] relative size-full">
        <Text3 />
        <ContainerMargin2 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] font-['Playfair_Display:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#511923] text-[0px] whitespace-nowrap">
        <p className="leading-[56px] mb-0 text-[48px] whitespace-pre">{`It began with `}</p>
        <p className="font-['Playfair_Display:Italic',sans-serif] italic leading-[56px] text-[#b98f56] text-[48px] whitespace-pre">a seat at our table.</p>
      </div>
    </div>
  );
}

function Heading2Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2 (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Heading1 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#6b5e59] text-[16px] w-full">{`Our founder grew up in a small Indian town where Sundays meant slow-cooked meals, bustling kitchens, and stories passed down through generations. ABCD was born from that same spirit to share the comfort, diversity, and depth of Indian cuisine with our community. `}</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] h-[408px] min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[32px] relative size-full">
          <ContainerMargin1 />
          <Heading2Margin />
          <Paragraph />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] px-[64px] py-[48px] relative shrink-0 w-[1280px]" data-name="Section">
      <Container3 />
    </div>
  );
}

function SectionMargin1() {
  return (
    <div className="bg-[rgba(246,238,223,0.5)] relative shrink-0 w-full" data-name="Section (margin)">
      <div aria-hidden className="absolute border border-[#ede0cb] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Section1 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] font-['Playfair_Display:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#511923] text-[0px] whitespace-nowrap">
        <p className="leading-[57px] mb-0 text-[48px]">Meet the people</p>
        <p className="font-['Playfair_Display:Italic',sans-serif] italic leading-[57px] text-[#b98f56] text-[48px]">behind ABCD</p>
      </div>
    </div>
  );
}

function ImageArjunDesai() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Image (Arjun Desai)">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[106.41%] left-[-59.68%] max-w-none top-[0.27%] w-[235.59%]" src={imgImageArjunDesai} />
        </div>
        <div className="absolute inset-0 opacity-50 overflow-hidden">
          <img alt="" className="absolute h-[106.41%] left-[-59.69%] max-w-none top-[0.27%] w-[235.59%]" src={imgImageArjunDesai1} />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[16px] self-stretch shrink-0 w-[166.664px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageArjunDesai />
      </div>
      <div aria-hidden className="absolute border border-[rgba(185,143,86,0.16)] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[32px] relative shrink-0 w-[166.664px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Playfair_Display:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3a2e2b] text-[20px] whitespace-nowrap">Mr. Jena</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-[166.664px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#b98f56] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">{`Founder & Chef`}</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] not-italic relative shrink-0 text-[#6b5e59] text-[14px] w-full">A storyteller at heart and a chef by passion, Arjun brings memories, spices, and creativity to every plate.</p>
    </div>
  );
}

function ParagraphMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Paragraph2 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_25042)" id="Icon">
          <path d={svgPaths.p19aa2780} fill="var(--fill-0, #3A2E2B)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_25042">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_25045)" id="Icon">
          <path d={svgPaths.pd33e940} fill="var(--fill-0, #3A2E2B)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_25045">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[28px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[12px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Link1 />
        <Link2 />
      </div>
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Container (margin)">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative size-full">
        <Heading3 />
        <Paragraph1 />
        <ParagraphMargin2 />
        <Container10 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[rgba(246,238,223,0.5)] flex-[1_0_0] h-[281px] min-w-px relative rounded-[19px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Container9 />
        <ContainerMargin3 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(185,143,86,0.16)] border-solid inset-0 pointer-events-none rounded-[19px]" />
    </div>
  );
}

function ImageArjunDesai1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Image (Arjun Desai)">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[106.41%] left-[-59.68%] max-w-none top-[0.27%] w-[235.59%]" src={imgImageArjunDesai} />
        </div>
        <div className="absolute inset-0 opacity-50 overflow-hidden">
          <img alt="" className="absolute h-[106.41%] left-[-59.69%] max-w-none top-[0.27%] w-[235.59%]" src={imgImageArjunDesai1} />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[16px] self-stretch shrink-0 w-[166.664px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageArjunDesai1 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(185,143,86,0.16)] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[32px] relative shrink-0 w-[166.664px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Playfair_Display:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3a2e2b] text-[20px] whitespace-nowrap">Mr. Jena</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="relative shrink-0 w-[166.664px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#b98f56] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">{`Founder & Chef`}</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] not-italic relative shrink-0 text-[#6b5e59] text-[14px] w-full">A storyteller at heart and a chef by passion, Arjun brings memories, spices, and creativity to every plate.</p>
    </div>
  );
}

function ParagraphMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Paragraph4 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_25042)" id="Icon">
          <path d={svgPaths.p19aa2780} fill="var(--fill-0, #3A2E2B)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_25042">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_25045)" id="Icon">
          <path d={svgPaths.pd33e940} fill="var(--fill-0, #3A2E2B)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_25045">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[28px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[12px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Link3 />
        <Link4 />
      </div>
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Container (margin)">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative size-full">
        <Heading4 />
        <Paragraph3 />
        <ParagraphMargin3 />
        <Container13 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[rgba(246,238,223,0.5)] flex-[1_0_0] h-[281px] min-w-px relative rounded-[19px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Container12 />
        <ContainerMargin4 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(185,143,86,0.16)] border-solid inset-0 pointer-events-none rounded-[19px]" />
    </div>
  );
}

function ImageArjunDesai2() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Image (Arjun Desai)">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[106.41%] left-[-59.68%] max-w-none top-[0.27%] w-[235.59%]" src={imgImageArjunDesai} />
        </div>
        <div className="absolute inset-0 opacity-50 overflow-hidden">
          <img alt="" className="absolute h-[106.41%] left-[-59.69%] max-w-none top-[0.27%] w-[235.59%]" src={imgImageArjunDesai1} />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[16px] self-stretch shrink-0 w-[166.664px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageArjunDesai2 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(185,143,86,0.16)] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[32px] relative shrink-0 w-[166.664px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Playfair_Display:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3a2e2b] text-[20px] whitespace-nowrap">Mr. Jena</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="relative shrink-0 w-[166.664px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#b98f56] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">{`Founder & Chef`}</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] not-italic relative shrink-0 text-[#6b5e59] text-[14px] w-full">A storyteller at heart and a chef by passion, Arjun brings memories, spices, and creativity to every plate.</p>
    </div>
  );
}

function ParagraphMargin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Paragraph6 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_25042)" id="Icon">
          <path d={svgPaths.p19aa2780} fill="var(--fill-0, #3A2E2B)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_25042">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_25045)" id="Icon">
          <path d={svgPaths.pd33e940} fill="var(--fill-0, #3A2E2B)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_25045">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[28px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[12px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Link5 />
        <Link6 />
      </div>
    </div>
  );
}

function ContainerMargin5() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Container (margin)">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative size-full">
        <Heading5 />
        <Paragraph5 />
        <ParagraphMargin4 />
        <Container16 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[rgba(246,238,223,0.5)] flex-[1_0_0] h-[281px] min-w-px relative rounded-[19px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Container15 />
        <ContainerMargin5 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(185,143,86,0.16)] border-solid inset-0 pointer-events-none rounded-[19px]" />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex gap-[32px] items-start pb-[96px] relative shrink-0 w-full" data-name="Section">
      <Container8 />
      <Container11 />
      <Container14 />
    </div>
  );
}

function SectionMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section (margin)">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[48px] items-center pt-[64px] px-[125px] relative size-full">
          <Heading2 />
          <Section2 />
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[922.5px] size-[229.5px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 229.5 229.5">
        <g clipPath="url(#clip0_1_25036)" id="Icon" opacity="0.1">
          <path d="M0 0H229.5V229.5H0V0Z" id="Vector" stroke="var(--stroke-0, white)" strokeDasharray="4.59 4.59" strokeWidth="1.1475" />
        </g>
        <defs>
          <clipPath id="clip0_1_25036">
            <rect fill="white" height="229.5" width="229.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[#b98f56] text-[10px] tracking-[1px] uppercase whitespace-nowrap">{`We'd love to have you`}</p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[52px] relative shrink-0 w-[336px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Playfair_Display:Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[36px] text-white whitespace-nowrap">{`Let's create beautiful`}</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[48px] relative shrink-0 w-[336px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Playfair_Display:Italic',sans-serif] font-normal italic leading-[40px] relative shrink-0 text-[#b98f56] text-[36px] whitespace-nowrap">memories together.</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[56px] top-[57.25px] w-[336px]" data-name="Container">
      <Paragraph7 />
      <Heading6 />
      <Heading7 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[45.5px] max-w-[320px] relative shrink-0 w-[320px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] top-[0.5px] w-[320px]">Join us for a meal that nourishes the soul and celebrates India.</p>
    </div>
  );
}

function ParagraphMargin5() {
  return (
    <div className="relative shrink-0" data-name="Paragraph (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Paragraph8 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pba81ce0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-start p-[4px] relative rounded-[9999px] shrink-0" data-name="Text">
      <Icon8 />
    </div>
  );
}

function TextMargin1() {
  return (
    <div className="relative shrink-0" data-name="Text (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pl-[12px] relative size-full">
        <Text4 />
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="bg-[#b98f56] relative rounded-[9999px] shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[32px] pr-[12px] py-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">{`Book Your Table `}</p>
        <TextMargin1 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p7894e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin() {
  return (
    <div className="relative shrink-0" data-name="Icon (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pl-[8px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="relative shrink-0 w-[126.5px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">{`View Our Menu `}</p>
        <IconMargin />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Link7 />
        <Link8 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col h-[117.5px] items-start left-[737px] top-[56px]" data-name="Container">
      <ParagraphMargin5 />
      <Container20 />
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#511923] h-[229.5px] relative rounded-[24px] shadow-[0px_12.5px_25px_-12px_rgba(0,0,0,0.13)] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Icon7 />
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] pb-[48px] px-[64px] relative shrink-0 w-[1280px]" data-name="Section">
      <Container17 />
    </div>
  );
}

function SectionMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Section3 />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <SectionMargin />
        <SectionMargin1 />
        <SectionMargin2 />
        <SectionMargin3 />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <MainContent />
      </div>
    </div>
  );
}

function AbcdAmericanBrandCulturallyDesiOurStory() {
  return (
    <div className="bg-[#f9f1e5] relative shrink-0 w-[1379px]" data-name="ABCD - American Brand Culturally Desi | Our Story">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Body />
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Mask group">
      <div className="bg-[#571621] col-1 h-[88.836px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[168.535px_88.836px] ml-0 mt-0 relative row-1 w-[168.534px]" style={{ maskImage: `url("${imgLogo2}")` }} data-name="logo 2" />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <MaskGroup />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col h-[15.359px] items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[15.36px] relative shrink-0 text-[#571621] text-[9.6px] tracking-[0.96px] uppercase whitespace-nowrap">American Brand Culturally Desi</p>
    </div>
  );
}

function TextMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Text (margin)">
      <Text5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-[194px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Group />
        <TextMargin2 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-[191.344px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Frame1 />
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container22 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_24868)" id="Icon">
          <path d={svgPaths.p299a6200} id="Vector" stroke="var(--stroke-0, #FAF7F2)" strokeLinecap="round" strokeOpacity="0.65" strokeWidth="1.35" />
          <path d={svgPaths.p13688a00} id="Vector_2" stroke="var(--stroke-0, #FAF7F2)" strokeLinecap="round" strokeOpacity="0.65" strokeWidth="1.35" />
          <path d={svgPaths.p3be73640} fill="var(--fill-0, #FAF7F2)" fillOpacity="0.65" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_24868">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LinkInstagram() {
  return (
    <div className="relative rounded-[19px] shrink-0 size-[38px]" data-name="Link - Instagram">
      <div aria-hidden className="absolute border border-[rgba(250,247,242,0.18)] border-solid inset-0 pointer-events-none rounded-[19px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p3c358280} id="Vector" stroke="var(--stroke-0, #FAF7F2)" strokeLinecap="round" strokeOpacity="0.65" strokeWidth="1.35" />
        </g>
      </svg>
    </div>
  );
}

function LinkFacebook() {
  return (
    <div className="relative rounded-[19px] shrink-0 size-[38px]" data-name="Link - Facebook">
      <div aria-hidden className="absolute border border-[rgba(250,247,242,0.18)] border-solid inset-0 pointer-events-none rounded-[19px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[14.4px] items-start relative shrink-0 w-full" data-name="Container">
      <LinkInstagram />
      <LinkFacebook />
    </div>
  );
}

function ContainerMargin7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[28.8px] relative size-full">
        <Container23 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[191.344px]" data-name="Container">
      <Link9 />
      <ContainerMargin7 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start relative shrink-0 w-full" data-name="Heading 5">
      <p className="[word-break:break-word] font-['Cinzel:Bold',sans-serif] font-bold leading-[21.76px] relative shrink-0 text-[#571621] text-[16px] tracking-[1.904px] uppercase whitespace-nowrap">Visit Us</p>
    </div>
  );
}

function Heading5Margin() {
  return (
    <div className="relative shrink-0 w-[84px]" data-name="Heading 5 (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[22.4px] relative size-full">
        <Heading8 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#666] text-[14.08px] whitespace-nowrap">
          <p className="leading-[23.232px] mb-0">417 Lancaster Ave,</p>
          <p className="leading-[23.232px]">Malvern, Pennsylvania 19355</p>
        </div>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="h-[37.758px] relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[21.76px] relative shrink-0 text-[#571621] text-[13.6px] whitespace-pre">{`Get Directions  →`}</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
      <Heading5Margin />
      <Paragraph9 />
      <Link10 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start relative shrink-0" data-name="Heading 5">
      <p className="[word-break:break-word] font-['Cinzel:Bold',sans-serif] font-bold leading-[21.76px] relative shrink-0 text-[#571621] text-[16px] tracking-[1.904px] uppercase whitespace-nowrap">Hours</p>
    </div>
  );
}

function Heading5Margin1() {
  return (
    <div className="relative shrink-0" data-name="Heading 5 (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[22.4px] relative size-full">
        <Heading9 />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[20.992px] relative shrink-0 text-[#6c353b] text-[13.12px] whitespace-nowrap">Mon – Fri</p>
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <div className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[13.6px] text-[rgba(51,51,51,0.65)] whitespace-nowrap">
        <p className="leading-[20.4px] mb-0">11:00am – 3:00pm</p>
        <p className="leading-[20.4px]">5:00pm – 10:00pm</p>
      </div>
    </div>
  );
}

function ParagraphMargin6() {
  return (
    <div className="relative shrink-0 w-[117px]" data-name="Paragraph (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.2px] relative size-full">
        <Paragraph11 />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[33.8px] relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12.8px] relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[20.992px] relative shrink-0 text-[#6c353b] text-[13.12px] whitespace-nowrap">Sat – Sun</p>
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[20.4px] relative shrink-0 text-[13.6px] text-[rgba(51,51,51,0.65)] whitespace-nowrap">11:00am – 11:00pm</p>
    </div>
  );
}

function ParagraphMargin7() {
  return (
    <div className="relative shrink-0 w-[115px]" data-name="Paragraph (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.2px] relative size-full">
        <Paragraph13 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph10 />
        <ParagraphMargin6 />
        <Paragraph12 />
        <ParagraphMargin7 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[178px]" data-name="Container">
      <Heading5Margin1 />
      <Container26 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start relative shrink-0 w-full" data-name="Heading 5">
      <p className="[word-break:break-word] font-['Cinzel:Bold',sans-serif] font-bold leading-[21.76px] relative shrink-0 text-[#571621] text-[16px] tracking-[1.904px] uppercase whitespace-nowrap">Stay Connected</p>
    </div>
  );
}

function Heading5Margin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 5 (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[22.4px] relative size-full">
        <Heading10 />
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex flex-col h-[47px] items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[23.232px] relative shrink-0 text-[#666] text-[14.08px] w-[292px]">{`Be the first to know about our specials, events & offers.`}</p>
    </div>
  );
}

function ParagraphMargin8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17.6px] relative size-full">
        <Paragraph14 />
      </div>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="bg-[rgba(108,53,59,0.06)] flex-[280_0_0] h-[43px] min-w-px relative rounded-[50px]" data-name="Email Input">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center pl-[17px] pr-[52.2px] py-[13px] relative size-full">
          <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[13.6px] text-[rgba(87,22,33,0.5)] w-full">Your email</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#571621] border-solid inset-0 pointer-events-none rounded-[50px]" />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M2.91667 7H11.0833" id="Vector" stroke="var(--stroke-0, #F9F1E5)" strokeLinecap="round" strokeWidth="1.45833" />
          <path d={svgPaths.pf23dd00} id="Vector_2" stroke="var(--stroke-0, #F9F1E5)" strokeLinecap="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function ButtonSubscribe() {
  return (
    <div className="absolute bg-[#571621] left-[240px] rounded-[18px] size-[36px] top-[3.5px]" data-name="Button - Subscribe">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="max-w-[280px] relative shrink-0 w-full" data-name="Form">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start max-w-[inherit] relative size-full">
        <EmailInput />
        <ButtonSubscribe />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[292px]" data-name="Container">
      <Heading5Margin2 />
      <ParagraphMargin8 />
      <Form />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[60px] items-start relative shrink-0">
      <Container24 />
      <Container25 />
      <Container27 />
    </div>
  );
}

function ContainerMargin6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container21 />
        <Frame2 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[52.445px] max-w-[1280px] relative shrink-0 w-[1280px]" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(87,22,33,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Outfit:Regular',sans-serif] font-normal leading-[19.456px] left-[640.62px] text-[#571621] text-[12.16px] text-center top-[33px] tracking-[0.608px] whitespace-nowrap">© 2026 ABCD Restaurant. All rights reserved.</p>
    </div>
  );
}

function ContainerMargin8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[64px] relative size-full">
        <Container28 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#f9f1e5] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden className="absolute border-[rgba(87,22,33,0.08)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[28.8px] pt-[49px] px-[90px] relative size-full">
        <ContainerMargin6 />
        <ContainerMargin8 />
      </div>
    </div>
  );
}

function Body1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Footer />
      </div>
    </div>
  );
}

export default function AbcdAbout() {
  return (
    <div className="bg-[#f9f1e5] content-stretch flex flex-col items-start relative size-full" data-name="ABCD - About">
      <Header />
      <AbcdAmericanBrandCulturallyDesiOurStory />
      <Body1 />
    </div>
  );
}