import svgPaths from "./svg-pkgirphypz";
import imgLogo1 from "./421ca4cbf817406c48de8f3873c39b3bf4f5d769.png";
import imgBackground1 from "./3c85f524fd5a2af254092d68c8dd064f7c1147a0.png";
import imgChatGptImageJun122026114642Am1 from "./812147ac80e00e0e525ec578406527246695185c.png";
import imgLogo2 from "./c7df93e32b2b8eb46cd46ea2c479cf787bc42bc7.png";
import { imgBackground } from "./svg-zlpdp";

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

function Text1() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#4e121e] h-[2px] left-1/2 top-[38.05px] w-[50px]" data-name="Text">
      <div className="-translate-x-1/2 absolute bg-[#4e121e] h-[2.033px] left-1/2 top-[-1.07px] w-[12px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start justify-center relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[23.552px] relative shrink-0 text-[#4e121e] text-[18px] whitespace-nowrap">Home</p>
        <Text1 />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="relative shrink-0 w-[766.5px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center justify-center relative size-full">
        <Frame2 />
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[23.552px] relative shrink-0 text-[#2c2627] text-[18px] whitespace-nowrap">Menu</p>
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[23.552px] relative shrink-0 text-[#2c2627] text-[18px] whitespace-nowrap">Our Story</p>
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

function Frame6() {
  return (
    <div className="absolute h-[608.109px] left-[689.5px] top-[-2px] w-[1081.082px]">
      <div className="absolute h-[608.109px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[25.016px_9.93px] mask-size-[1031.047px_588.25px] top-0 w-[1081.082px]" style={{ maskImage: `url("${imgBackground}")` }} data-name="Background">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackground1} />
      </div>
    </div>
  );
}

function Container2() {
  return <div className="absolute h-[273.729px] left-[965.3px] opacity-10 top-0 w-[413.7px]" data-name="Container" />;
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17.237px] relative size-full">
        <div className="[word-break:break-word] font-['Playfair_Display:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#3e1622] text-[0px] whitespace-nowrap">
          <p className="leading-[98px] mb-0 text-[74px]">The table is set.</p>
          <p className="font-['Playfair_Display:Italic',sans-serif] italic leading-[98px] text-[#b68f52] text-[74px]">{`All that's left is you.`}</p>
        </div>
      </div>
    </div>
  );
}

function ParagraphMargin() {
  return (
    <div className="relative shrink-0" data-name="Paragraph (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[9.157px] pt-[50.635px] relative size-full">
        <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#3e1622] text-[21.547px] w-[601.035px]">
          <p className="leading-[35.014px] mb-0">From time-honored recipes to heartfelt hospitality.</p>
          <p className="leading-[35.014px]">we create moments that linger long after the last bite.</p>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[101.71px] top-[88.71px] w-[611.931px]" data-name="Container">
      <Heading />
      <ParagraphMargin />
    </div>
  );
}

function Container4() {
  return <div className="absolute bg-[rgba(182,143,82,0.1)] blur-[68.95px] h-[551.6px] left-[672.26px] rounded-[10772.359px] top-[112.04px] w-[611.931px]" data-name="Container" />;
}

function Section() {
  return (
    <div className="h-[672.263px] mb-[-172px] overflow-clip relative shrink-0 w-[1379px]" data-name="Section">
      <Frame6 />
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[28px]" data-name="Text">
      <div aria-hidden className="absolute border border-[#5c1d2a] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#5c1d2a] text-[12px] text-center whitespace-nowrap">1</p>
    </div>
  );
}

function TextMargin1() {
  return (
    <div className="relative shrink-0" data-name="Text (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pr-[8px] relative size-full">
        <Text3 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[87px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[43px] not-italic text-[#5c1d2a] text-[14px] text-center top-[0.5px] whitespace-nowrap">Choose Date</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center px-[16px] relative shrink-0" data-name="Button">
      <TextMargin1 />
      <Text4 />
    </div>
  );
}

function Container6() {
  return <div className="bg-[#e8dfd5] h-px relative shrink-0 w-[61.105px]" data-name="Container" />;
}

function Text5() {
  return (
    <div className="bg-[#5c1d2a] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[28px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">2</p>
    </div>
  );
}

function TextMargin2() {
  return (
    <div className="relative shrink-0" data-name="Text (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pr-[8px] relative size-full">
        <Text5 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center px-[16px] relative shrink-0" data-name="Button">
      <TextMargin2 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#3e2a28] text-[14px] text-center whitespace-nowrap">Party Size</p>
    </div>
  );
}

function Container7() {
  return <div className="bg-[#e8dfd5] h-px relative shrink-0 w-[61.105px]" data-name="Container" />;
}

function Text6() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[28px]" data-name="Text">
      <div aria-hidden className="absolute border border-[#5c1d2a] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#5c1d2a] text-[12px] text-center whitespace-nowrap">3</p>
    </div>
  );
}

function TextMargin3() {
  return (
    <div className="relative shrink-0" data-name="Text (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pr-[8px] relative size-full">
        <Text6 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[94.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[47px] not-italic text-[#3e2a28] text-[14px] text-center top-[0.5px] whitespace-nowrap">{`Time & Details`}</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-center px-[16px] relative shrink-0" data-name="Button">
      <TextMargin3 />
      <Text7 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center pb-[8px] relative size-full">
        <Button1 />
        <Container6 />
        <Button2 />
        <Container7 />
        <Button3 />
      </div>
    </div>
  );
}

function HorizontalRule() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Horizontal Rule">
      <div aria-hidden className="absolute border-[#e8dfd5] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Playfair_Display:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[#3e2a28] text-[30px] whitespace-nowrap">How many guests?</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#8c7a77] text-[14px] whitespace-nowrap">For parties bigger than 10 people, we provide Lounge booking.</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon" opacity="0.8">
          <path d={svgPaths.p2c395540} id="Vector" stroke="var(--stroke-0, #3E2A28)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin() {
  return (
    <div className="relative shrink-0" data-name="Icon (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[6px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[51.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] left-[26px] not-italic text-[#3e2a28] text-[15px] text-center top-[-1px] whitespace-nowrap">1 Guest</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white justify-self-stretch relative rounded-[12px] self-stretch shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e8dfd5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[13px] py-[34px] relative size-full">
          <IconMargin />
          <Text8 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon" opacity="0.8">
          <path d={svgPaths.p2c395540} id="Vector" stroke="var(--stroke-0, #3E2A28)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin1() {
  return (
    <div className="relative shrink-0" data-name="Icon (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[6px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[62.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] left-[31.5px] not-italic text-[#3e2a28] text-[15px] text-center top-[-1px] whitespace-nowrap">2 Guests</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white justify-self-stretch relative rounded-[12px] self-stretch shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e8dfd5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[13px] py-[34px] relative size-full">
          <IconMargin1 />
          <Text9 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon" opacity="0.8">
          <path d={svgPaths.p2c395540} id="Vector" stroke="var(--stroke-0, #3E2A28)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin2() {
  return (
    <div className="relative shrink-0" data-name="Icon (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[6px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[63px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] left-[31px] not-italic text-[#3e2a28] text-[15px] text-center top-[-1px] whitespace-nowrap">3 Guests</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white justify-self-stretch relative rounded-[12px] self-stretch shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e8dfd5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[13px] py-[34px] relative size-full">
          <IconMargin2 />
          <Text10 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon" opacity="0.8">
          <path d={svgPaths.p2c395540} id="Vector" stroke="var(--stroke-0, #5C1D2A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin3() {
  return (
    <div className="relative shrink-0" data-name="Icon (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[6px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[64.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.5px] left-[32px] not-italic text-[#5c1d2a] text-[15px] text-center top-[-1px] whitespace-nowrap">4 Guests</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[rgba(92,29,42,0.05)] justify-self-stretch relative rounded-[12px] self-stretch shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-2 border-[#5c1d2a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[14px] py-[35px] relative size-full">
          <IconMargin3 />
          <Text11 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon" opacity="0.8">
          <path d={svgPaths.p2c395540} id="Vector" stroke="var(--stroke-0, #3E2A28)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin4() {
  return (
    <div className="relative shrink-0" data-name="Icon (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[6px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[62.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] left-[31.5px] not-italic text-[#3e2a28] text-[15px] text-center top-[-1px] whitespace-nowrap">5 Guests</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-white justify-self-stretch relative rounded-[12px] self-stretch shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e8dfd5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[13px] py-[34px] relative size-full">
          <IconMargin4 />
          <Text12 />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon" opacity="0.8">
          <path d={svgPaths.p2c395540} id="Vector" stroke="var(--stroke-0, #3E2A28)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin5() {
  return (
    <div className="relative shrink-0" data-name="Icon (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[6px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[63px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] left-[31px] not-italic text-[#3e2a28] text-[15px] text-center top-[-1px] whitespace-nowrap">6 Guests</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-white justify-self-stretch relative rounded-[12px] self-stretch shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e8dfd5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[13px] py-[34px] relative size-full">
          <IconMargin5 />
          <Text13 />
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon" opacity="0.8">
          <path d={svgPaths.p2c395540} id="Vector" stroke="var(--stroke-0, #3E2A28)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin6() {
  return (
    <div className="relative shrink-0" data-name="Icon (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[6px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[62px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] left-[31.5px] not-italic text-[#3e2a28] text-[15px] text-center top-[-1px] whitespace-nowrap">7 Guests</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-white justify-self-stretch relative rounded-[12px] self-stretch shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e8dfd5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[13px] py-[34px] relative size-full">
          <IconMargin6 />
          <Text14 />
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon" opacity="0.8">
          <path d={svgPaths.p2c395540} id="Vector" stroke="var(--stroke-0, #3E2A28)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin7() {
  return (
    <div className="relative shrink-0" data-name="Icon (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[6px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[63px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] left-[31px] not-italic text-[#3e2a28] text-[15px] text-center top-[-1px] whitespace-nowrap">8 Guests</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-white justify-self-stretch relative rounded-[12px] self-stretch shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e8dfd5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[13px] py-[34px] relative size-full">
          <IconMargin7 />
          <Text15 />
        </div>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon" opacity="0.8">
          <path d={svgPaths.p2c395540} id="Vector" stroke="var(--stroke-0, #3E2A28)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin8() {
  return (
    <div className="relative shrink-0" data-name="Icon (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[6px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[63px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] left-[31px] not-italic text-[#3e2a28] text-[15px] text-center top-[-1px] whitespace-nowrap">9 Guests</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-white justify-self-stretch relative rounded-[12px] self-stretch shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e8dfd5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[13px] py-[34px] relative size-full">
          <IconMargin8 />
          <Text16 />
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon" opacity="0.8">
          <path d={svgPaths.p2c395540} id="Vector" stroke="var(--stroke-0, #3E2A28)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin9() {
  return (
    <div className="relative shrink-0" data-name="Icon (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[6px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[63px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] left-[31.5px] not-italic text-[#3e2a28] text-[15px] text-center top-[-1px] whitespace-nowrap">10+ Guests</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-white justify-self-stretch relative rounded-[12px] self-stretch shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e8dfd5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[13px] py-[34px] relative size-full">
          <IconMargin9 />
          <Text17 />
        </div>
      </div>
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="h-[275px] relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(5,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] pt-[24px] relative size-full">
        <Button4 />
        <Button5 />
        <Button6 />
        <Button7 />
        <Button8 />
        <Button9 />
        <Button10 />
        <Button11 />
        <Button12 />
        <Button13 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Paragraph />
      <ContainerMargin3 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Playfair_Display:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[#3e2a28] text-[30px] whitespace-nowrap">Seating Type</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48.5px] items-center justify-center min-w-px py-[12px] relative rounded-[8px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[22.5px] not-italic relative shrink-0 text-[#8c7a77] text-[15px] text-center whitespace-nowrap">Tables</p>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] content-stretch flex flex-[1_0_0] flex-col h-[48.5px] items-center justify-center min-w-px px-px py-[13px] relative rounded-[8px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(232,223,213,0.4)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.5px] not-italic relative shrink-0 text-[#3e2a28] text-[15px] text-center whitespace-nowrap">Lounge</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[rgba(243,239,233,0.5)] content-stretch flex items-center justify-between p-[6px] relative rounded-[12px] shrink-0 w-[729.928px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(232,223,213,0.5)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Button14 />
      <Button15 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[24px] relative size-full">
        <Container10 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3f953000} id="Vector" stroke="var(--stroke-0, #3E2A28)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin10() {
  return (
    <div className="relative shrink-0" data-name="Icon (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pr-[8px] relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-white h-full relative rounded-[12px] shrink-0 w-[111.5px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#e8dfd5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[25px] py-[13px] relative size-full">
          <IconMargin10 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#3e2a28] text-[16px] text-center whitespace-nowrap">{` Back `}</p>
        </div>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p43eff00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin11() {
  return (
    <div className="relative shrink-0" data-name="Icon (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pl-[8px] relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-[#5c1d2a] drop-shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] h-full relative rounded-[12px] shrink-0 w-[227px]" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">{`Next: Time & Details `}</p>
          <IconMargin11 />
        </div>
      </div>
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="h-[82px] relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pt-[32px] relative size-full">
        <Button16 />
        <Button17 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Frame1 />
      <ContainerMargin4 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start relative size-full">
        <HorizontalRule />
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#faf8f2] drop-shadow-[0px_4.4px_6.6px_rgba(78,18,30,0.03)] flex-[1_0_0] min-w-px relative rounded-[17.6px] self-stretch" data-name="Container">
      <div aria-hidden className="absolute border-[1.1px] border-[rgba(223,201,168,0.5)] border-solid inset-0 pointer-events-none rounded-[17.6px]" />
      <div className="content-stretch flex flex-col gap-[22px] items-start p-[33.1px] relative size-full">
        <Frame />
        <ContainerMargin2 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Playfair_Display:Regular',sans-serif] font-normal leading-[33px] relative shrink-0 text-[#5c1d2a] text-[22px] text-center whitespace-nowrap">Your reservation</p>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[10px] relative shrink-0 w-[40px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 10">
        <g clipPath="url(#clip0_1_25071)" id="Icon">
          <path d="M0 5H15L20 0L25 5H40" id="Vector" stroke="var(--stroke-0, #C49C71)" strokeWidth="0.5" />
          <path d="M20 3L22 5L20 7L18 5L20 3Z" fill="var(--fill-0, #C49C71)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_25071">
            <rect fill="white" height="10" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ContainerMargin6() {
  return (
    <div className="h-[18px] relative shrink-0 w-[276.672px]" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center pt-[8px] relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-[276.672px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e8dfd5] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-center pb-[25px] pt-[16px] px-[16px] relative size-full">
        <div className="h-[80.738px] relative shrink-0 w-[168.043px]" data-name="ChatGPT Image Jun 12, 2026, 11_46_42 AM 1">
          <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[2070.89%] left-[-390.99%] max-w-none top-[-829.18%] w-[559.98%]" src={imgChatGptImageJun122026114642Am1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-end justify-center opacity-70 overflow-clip relative shrink-0 w-[276.672px]" data-name="Container">
      <Container12 />
    </div>
  );
}

function ContainerMargin7() {
  return (
    <div className="relative shrink-0" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function ContainerMargin5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading3 />
        <ContainerMargin6 />
        <ContainerMargin7 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p111ed900} id="Vector" stroke="var(--stroke-0, #8C7A77)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin12() {
  return (
    <div className="relative shrink-0" data-name="Icon (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pr-[16px] pt-[2px] relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[29px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#8c7a77] text-[13px] top-px whitespace-nowrap">Date</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#5c1d2a] text-[13px] text-center whitespace-nowrap">Edit</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text18 />
        <Button18 />
      </div>
    </div>
  );
}

function ContainerMargin8() {
  return (
    <div className="h-[25px] relative shrink-0 w-[240.672px]" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.5px] not-italic relative shrink-0 text-[#3e2a28] text-[15px] whitespace-nowrap">Sat, May 24</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="flex-[240.672_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container16 />
        <ContainerMargin8 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <IconMargin12 />
        <Container15 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p405b00} id="Vector" stroke="var(--stroke-0, #8C7A77)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin13() {
  return (
    <div className="relative shrink-0" data-name="Icon (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pr-[16px] pt-[2px] relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[64px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#8c7a77] text-[13px] top-px whitespace-nowrap">Party Size</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#5c1d2a] text-[13px] text-center whitespace-nowrap">Edit</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text19 />
        <Button19 />
      </div>
    </div>
  );
}

function ContainerMargin10() {
  return (
    <div className="h-[25px] relative shrink-0 w-[240.672px]" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.5px] not-italic relative shrink-0 text-[#3e2a28] text-[15px] whitespace-nowrap">4 guests</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="flex-[240.672_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container19 />
        <ContainerMargin10 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <IconMargin13 />
      <Container18 />
    </div>
  );
}

function ContainerMargin9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[20px] relative size-full">
        <Container17 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p26e51d00} id="Vector" stroke="var(--stroke-0, #8C7A77)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin14() {
  return (
    <div className="relative shrink-0" data-name="Icon (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pr-[16px] pt-[2px] relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[31px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#8c7a77] text-[13px] top-px whitespace-nowrap">Time</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#5c1d2a] text-[13px] text-center whitespace-nowrap">Edit</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text20 />
        <Button20 />
      </div>
    </div>
  );
}

function ContainerMargin12() {
  return (
    <div className="h-[25px] relative shrink-0 w-[240.672px]" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.5px] not-italic relative shrink-0 text-[#3e2a28] text-[15px] whitespace-nowrap">7:00 PM</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="flex-[240.672_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container22 />
        <ContainerMargin12 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <IconMargin14 />
      <Container21 />
    </div>
  );
}

function ContainerMargin11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[20px] relative size-full">
        <Container20 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2a161e80} id="Vector" stroke="var(--stroke-0, #8C7A77)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin15() {
  return (
    <div className="relative shrink-0" data-name="Icon (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pr-[16px] pt-[2px] relative size-full">
        <Icon17 />
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[69.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#8c7a77] text-[13px] top-px whitespace-nowrap">Experience</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text21 />
      </div>
    </div>
  );
}

function ContainerMargin14() {
  return (
    <div className="h-[25px] relative shrink-0 w-[240.672px]" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.5px] not-italic relative shrink-0 text-[#3e2a28] text-[15px] whitespace-nowrap">Dinner</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="flex-[240.672_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container25 />
        <ContainerMargin14 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <IconMargin15 />
      <Container24 />
    </div>
  );
}

function ContainerMargin13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[20px] relative size-full">
        <Container23 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container14 />
        <ContainerMargin9 />
        <ContainerMargin11 />
        <ContainerMargin13 />
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p22929a00} fill="var(--fill-0, #C49C71)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin16() {
  return (
    <div className="relative shrink-0" data-name="Icon (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pr-[12px] pt-[2px] relative size-full">
        <Icon18 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[42.25px] relative shrink-0 w-[194.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-0 not-italic text-[#3e2a28] text-[0px] top-[0.5px] w-[195px] whitespace-pre-wrap">
          <p className="leading-[21.125px] mb-0 text-[13px]">{`You can cancel or modify up to `}</p>
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[21.125px] text-[13px]">2 hours before your booking.</p>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#f6efe7] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start p-[16px] relative size-full">
        <IconMargin16 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function ContainerMargin15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container26 />
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="bg-[#faf8f2] content-stretch drop-shadow-[0px_4.4px_6.6px_rgba(78,18,30,0.03)] flex flex-col gap-[22px] items-center p-[33.1px] relative rounded-[17.6px] shrink-0 w-[342.872px]" data-name="Sidebar">
      <div aria-hidden className="absolute border-[1.1px] border-[rgba(223,201,168,0.5)] border-solid inset-0 pointer-events-none rounded-[17.6px]" />
      <ContainerMargin5 />
      <Container13 />
      <ContainerMargin15 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="content-stretch flex gap-[36px] items-start pb-[61px] pt-[44.8px] px-[102px] relative size-full">
        <Container5 />
        <Sidebar />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Section />
        <ContainerMargin1 />
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

function Text22() {
  return (
    <div className="content-stretch flex flex-col h-[15.359px] items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[15.36px] relative shrink-0 text-[#571621] text-[9.6px] tracking-[0.96px] uppercase whitespace-nowrap">American Brand Culturally Desi</p>
    </div>
  );
}

function TextMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Text (margin)">
      <Text22 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-[194px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Group />
        <TextMargin4 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-[191.344px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Frame3 />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container28 />
      </div>
    </div>
  );
}

function Icon19() {
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
        <Icon19 />
      </div>
    </div>
  );
}

function Icon20() {
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
        <Icon20 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[14.4px] items-start relative shrink-0 w-full" data-name="Container">
      <LinkInstagram />
      <LinkFacebook />
    </div>
  );
}

function ContainerMargin17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[28.8px] relative size-full">
        <Container29 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[191.344px]" data-name="Container">
      <Link1 />
      <ContainerMargin17 />
    </div>
  );
}

function Heading4() {
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
        <Heading4 />
      </div>
    </div>
  );
}

function Paragraph2() {
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

function Link2() {
  return (
    <div className="h-[37.758px] relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[21.76px] relative shrink-0 text-[#571621] text-[13.6px] whitespace-pre">{`Get Directions  →`}</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
      <Heading5Margin />
      <Paragraph2 />
      <Link2 />
    </div>
  );
}

function Heading5() {
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
        <Heading5 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[20.992px] relative shrink-0 text-[#6c353b] text-[13.12px] whitespace-nowrap">Mon – Fri</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <div className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[13.6px] text-[rgba(51,51,51,0.65)] whitespace-nowrap">
        <p className="leading-[20.4px] mb-0">11:00am – 3:00pm</p>
        <p className="leading-[20.4px]">5:00pm – 10:00pm</p>
      </div>
    </div>
  );
}

function ParagraphMargin1() {
  return (
    <div className="relative shrink-0 w-[117px]" data-name="Paragraph (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.2px] relative size-full">
        <Paragraph4 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[33.8px] relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12.8px] relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[20.992px] relative shrink-0 text-[#6c353b] text-[13.12px] whitespace-nowrap">Sat – Sun</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[20.4px] relative shrink-0 text-[13.6px] text-[rgba(51,51,51,0.65)] whitespace-nowrap">11:00am – 11:00pm</p>
    </div>
  );
}

function ParagraphMargin2() {
  return (
    <div className="relative shrink-0 w-[115px]" data-name="Paragraph (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.2px] relative size-full">
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph3 />
        <ParagraphMargin1 />
        <Paragraph5 />
        <ParagraphMargin2 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[178px]" data-name="Container">
      <Heading5Margin1 />
      <Container32 />
    </div>
  );
}

function Heading6() {
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
        <Heading6 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex flex-col h-[47px] items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[23.232px] relative shrink-0 text-[#666] text-[14.08px] w-[292px]">{`Be the first to know about our specials, events & offers.`}</p>
    </div>
  );
}

function ParagraphMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17.6px] relative size-full">
        <Paragraph7 />
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

function Icon21() {
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
        <Icon21 />
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

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[292px]" data-name="Container">
      <Heading5Margin2 />
      <ParagraphMargin3 />
      <Form />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[60px] items-start relative shrink-0">
      <Container30 />
      <Container31 />
      <Container33 />
    </div>
  );
}

function ContainerMargin16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container27 />
        <Frame4 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[52.445px] max-w-[1280px] relative shrink-0 w-[1280px]" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(87,22,33,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Outfit:Regular',sans-serif] font-normal leading-[19.456px] left-[640.62px] text-[#571621] text-[12.16px] text-center top-[33px] tracking-[0.608px] whitespace-nowrap">© 2026 ABCD Restaurant. All rights reserved.</p>
    </div>
  );
}

function ContainerMargin18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[64px] relative size-full">
        <Container34 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#f9f1e5] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden className="absolute border-[rgba(87,22,33,0.08)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[28.8px] pt-[49px] px-[90px] relative size-full">
        <ContainerMargin16 />
        <ContainerMargin18 />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Footer />
      </div>
    </div>
  );
}

export default function AbcdReserve() {
  return (
    <div className="bg-[#f9f1e5] content-stretch flex flex-col items-start relative size-full" data-name="ABCD - Reserve">
      <Header />
      <Frame5 />
      <Body />
    </div>
  );
}