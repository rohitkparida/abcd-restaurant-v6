import svgPaths from "./svg-mybsf345ri";
import imgLogo1 from "./421ca4cbf817406c48de8f3873c39b3bf4f5d769.png";
import imgImageTandooriChicken from "./5ba3f94e1231bed46e220800f3c58d757e7e57ca.png";
import imgImageButterChicken from "./35589b7e5fcbb8b49ee97e7bbf136180fa943b3e.png";
import imgImageGarlicNaan from "./0d6fc0e2399062d3b65b38c928dca028c6d735b0.png";
import imgImageLucknowiMurghBiryani from "./316e1336f48eec26f631a16d7d9eef5c8f96f03e.png";

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

function Frame1() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[23.552px] relative shrink-0 text-[#2c2627] text-[18px] whitespace-nowrap">Menu</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="relative shrink-0 w-[766.5px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center justify-center relative size-full">
        <Frame />
        <Frame1 />
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

function Text1() {
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
        <Text1 />
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

function Text2() {
  return (
    <div className="absolute bg-[#39895d] left-0 rounded-[42.5px] size-[85px] top-[19.67px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Poppins:Bold','Noto_Sans_Symbols2:Regular',sans-serif] leading-[76.655px] left-[23.95px] not-italic text-[49.455px] text-white top-[3.1px] whitespace-nowrap">✓</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Playfair:Bold',sans-serif] font-bold leading-[46px] relative shrink-0 text-[#72162b] text-[46px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}>
          Order Received!
        </p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[33px] relative shrink-0 w-[1115px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[26.35px] not-italic relative shrink-0 text-[#746866] text-[17px] whitespace-nowrap">Thank you! Your order has been sent to our kitchen.</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[117px] top-[22px] w-[1115px]" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[124.344px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text2 />
        <Container3 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[rgba(255,252,247,0.45)] relative rounded-[18px] shrink-0 size-[64px]" data-name="Text">
      <div aria-hidden className="absolute border-[#9b8476] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[46.5px] left-[calc(50%-9px)] not-italic text-[#72162b] text-[28px] top-[calc(50%-22.52px)] whitespace-nowrap">#</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[23.247px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[19.375px] left-0 not-italic text-[#503d3f] text-[12.5px] top-[21.5px] whitespace-nowrap">Order Number</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[63.1px] relative shrink-0 w-[97.5px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[17.55px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[27.202px] not-italic relative shrink-0 text-[#503d3f] text-[17.55px] whitespace-nowrap">#T12-0487</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-[97.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container7 />
        <Heading2 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[rgba(255,253,248,0.86)] content-stretch flex gap-[18px] h-[99px] items-center left-0 p-[23px] rounded-[12px] top-0 w-[413px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#ead8bf] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Text3 />
      <Container6 />
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[rgba(255,252,247,0.45)] relative rounded-[18px] shrink-0 size-[64px]" data-name="Text">
      <div aria-hidden className="absolute border-[#9b8476] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Segoe_UI_Emoji:Regular',sans-serif] leading-[46.5px] left-[calc(50%-20px)] not-italic text-[#72162b] text-[30px] top-[calc(50%-21.52px)] whitespace-nowrap">🕑</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[23.247px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[19.375px] left-0 not-italic text-[#503d3f] text-[12.5px] top-[21.5px] whitespace-nowrap">Estimated Preparation</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[63.1px] relative shrink-0 w-[138.5px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[17.55px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[27.202px] not-italic relative shrink-0 text-[#503d3f] text-[17.55px] whitespace-nowrap">20-25 mins</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-[138.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container10 />
        <Heading3 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-[rgba(255,253,248,0.86)] content-stretch flex gap-[18px] h-[99px] items-center left-[435px] p-[23px] rounded-[12px] top-0 w-[413px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#ead8bf] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Text4 />
      <Container9 />
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[rgba(255,252,247,0.45)] relative rounded-[18px] shrink-0 size-[64px]" data-name="Text">
      <div aria-hidden className="absolute border-[#9b8476] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Segoe_UI_Emoji:Regular',sans-serif] leading-[46.5px] left-[calc(50%-20px)] not-italic text-[#72162b] text-[30px] top-[calc(50%-20.52px)] whitespace-nowrap">🪑</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[23.247px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[19.375px] left-0 not-italic text-[#503d3f] text-[12.5px] top-[21.5px] whitespace-nowrap">Table</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[63.1px] relative shrink-0 w-[34.5px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[17.55px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[27.202px] not-italic relative shrink-0 text-[#503d3f] text-[17.55px] whitespace-nowrap">12</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-[34.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container13 />
        <Heading4 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[rgba(255,253,248,0.86)] content-stretch flex gap-[18px] h-[99px] items-center left-[870px] p-[23px] rounded-[12px] top-0 w-[413px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#ead8bf] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Text5 />
      <Container12 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[131.539px] relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container8 />
      <Container11 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[34px] relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Playfair:Bold',sans-serif] font-bold leading-[54.25px] relative shrink-0 text-[#72162b] text-[35px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}>
          Your Order (4 items)
        </p>
      </div>
    </div>
  );
}

function ImageTandooriChicken() {
  return (
    <div className="absolute left-0 rounded-[6px] size-[80px] top-[13.77px]" data-name="Image (Tandoori Chicken)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgImageTandooriChicken} />
    </div>
  );
}

function Text6() {
  return <div className="absolute bg-[#ee332d] left-[136px] rounded-[4px] size-[8px] top-[7.5px]" data-name="Text" />;
}

function Heading5() {
  return (
    <div className="h-[21.695px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Bold',sans-serif] leading-[21.7px] left-0 not-italic text-[#401b25] text-[14px] top-0 whitespace-nowrap">{`Tandoori Chicken `}</p>
        <Text6 />
      </div>
    </div>
  );
}

function Small() {
  return (
    <div className="h-[25px] relative shrink-0 w-[586.5px]" data-name="Small">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[19.375px] not-italic relative shrink-0 text-[#c59a53] text-[12.5px] whitespace-nowrap">Qty: 1</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col h-[46.07px] items-start left-[103px] top-[13.77px] w-[586.5px]" data-name="Container">
      <Heading5 />
      <Small />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[109px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#ead8bf] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ImageTandooriChicken />
        <Container17 />
        <p className="[word-break:break-word] absolute font-['Poppins:Bold',sans-serif] leading-[23.25px] left-[722.5px] not-italic text-[#72162b] text-[15px] top-[13.77px] whitespace-nowrap">$19.99</p>
      </div>
    </div>
  );
}

function ImageButterChicken() {
  return (
    <div className="absolute left-0 rounded-[6px] size-[80px] top-[13.77px]" data-name="Image (Butter Chicken)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgImageButterChicken} />
    </div>
  );
}

function Text7() {
  return <div className="absolute bg-[#ee332d] left-[115px] rounded-[4px] size-[8px] top-[7.5px]" data-name="Text" />;
}

function Heading6() {
  return (
    <div className="h-[21.695px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Bold',sans-serif] leading-[21.7px] left-0 not-italic text-[#401b25] text-[14px] top-0 whitespace-nowrap">{`Butter Chicken `}</p>
        <Text7 />
      </div>
    </div>
  );
}

function Small1() {
  return (
    <div className="h-[25px] relative shrink-0 w-[584px]" data-name="Small">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[19.375px] not-italic relative shrink-0 text-[#c59a53] text-[12.5px] whitespace-nowrap">Qty: 1</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col h-[46.07px] items-start left-[103px] top-[13.77px] w-[584px]" data-name="Container">
      <Heading6 />
      <Small1 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[109px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#ead8bf] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ImageButterChicken />
        <Container19 />
        <p className="[word-break:break-word] absolute font-['Poppins:Bold',sans-serif] leading-[23.25px] left-[720px] not-italic text-[#72162b] text-[15px] top-[13.77px] whitespace-nowrap">$22.99</p>
      </div>
    </div>
  );
}

function ImageGarlicNaan() {
  return (
    <div className="absolute left-0 rounded-[6px] size-[80px] top-[13.77px]" data-name="Image (Garlic Naan)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[6px]">
        <img alt="" className="absolute h-[117.5%] left-[-16.67%] max-w-none top-0 w-[156.67%]" src={imgImageGarlicNaan} />
      </div>
    </div>
  );
}

function Text8() {
  return <div className="absolute bg-[#24995b] left-[93.5px] rounded-[4px] size-[8px] top-[7.5px]" data-name="Text" />;
}

function Heading7() {
  return (
    <div className="h-[21.695px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Bold',sans-serif] leading-[21.7px] left-0 not-italic text-[#401b25] text-[14px] top-0 whitespace-nowrap">{`Garlic Naan `}</p>
        <Text8 />
      </div>
    </div>
  );
}

function Small2() {
  return (
    <div className="h-[25px] relative shrink-0 w-[591px]" data-name="Small">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[19.375px] not-italic relative shrink-0 text-[#c59a53] text-[12.5px] whitespace-nowrap">Qty: 2</p>
      </div>
    </div>
  );
}

function Small3() {
  return <div className="h-[20px] relative shrink-0 w-full" data-name="Small" />;
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col h-[65.445px] items-start left-[103px] top-[13.77px] w-[591px]" data-name="Container">
      <Heading7 />
      <Small2 />
      <Small3 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[109px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#ead8bf] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ImageGarlicNaan />
        <Container21 />
        <p className="[word-break:break-word] absolute font-['Poppins:Bold',sans-serif] leading-[23.25px] left-[727px] not-italic text-[#72162b] text-[15px] top-[13.77px] whitespace-nowrap">$5.59</p>
      </div>
    </div>
  );
}

function ImageLucknowiMurghBiryani() {
  return (
    <div className="absolute left-0 rounded-[6px] size-[80px] top-[13.77px]" data-name="Image (Lucknowi Murgh Biryani)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[6px]">
        <img alt="" className="absolute h-[125.15%] left-[-18.18%] max-w-none top-[0.31%] w-[170.65%]" src={imgImageLucknowiMurghBiryani} />
      </div>
    </div>
  );
}

function Text9() {
  return <div className="absolute bg-[#ee332d] left-[181px] rounded-[4px] size-[8px] top-[7.5px]" data-name="Text" />;
}

function Heading8() {
  return (
    <div className="h-[21.695px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Bold',sans-serif] leading-[21.7px] left-0 not-italic text-[#401b25] text-[14px] top-0 whitespace-nowrap">{`Lucknowi Murgh Biryani `}</p>
        <Text9 />
      </div>
    </div>
  );
}

function Small4() {
  return (
    <div className="h-[25px] relative shrink-0 w-[584px]" data-name="Small">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[19.375px] not-italic relative shrink-0 text-[#c59a53] text-[12.5px] whitespace-nowrap">Qty: 1</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col h-[46.07px] items-start left-[103px] top-[13.77px] w-[584px]" data-name="Container">
      <Heading8 />
      <Small4 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[109px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#ead8bf] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ImageLucknowiMurghBiryani />
        <Container23 />
        <p className="[word-break:break-word] absolute font-['Poppins:Bold',sans-serif] leading-[23.25px] left-[720px] not-italic text-[#72162b] text-[15px] top-[13.77px] whitespace-nowrap">$22.99</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[464px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[28px] relative size-full">
        <Container16 />
        <Container18 />
        <Container20 />
        <Container22 />
      </div>
    </div>
  );
}

function BoldText() {
  return (
    <div className="relative shrink-0" data-name="Bold Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[34.1px] not-italic relative shrink-0 text-[#72162b] text-[22px] whitespace-nowrap">Subtotal</p>
      </div>
    </div>
  );
}

function BoldText1() {
  return (
    <div className="relative shrink-0" data-name="Bold Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[46.5px] not-italic relative shrink-0 text-[#72162b] text-[30px] whitespace-nowrap">$71.56</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between pt-[26px] relative size-full">
        <BoldText />
        <BoldText1 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute bg-[rgba(255,253,248,0.86)] content-stretch flex flex-col items-start left-0 p-[35px] rounded-[12px] top-[0.12px] w-[847px]" data-name="Section">
      <div aria-hidden className="absolute border border-[#ead8bf] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Heading1 />
      <Container15 />
      <Container24 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[53.675px] relative shrink-0 w-[358px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[18.675px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[34.875px] not-italic relative shrink-0 text-[#503d3f] text-[22.5px] whitespace-nowrap">Order Status</p>
      </div>
    </div>
  );
}

function Text10() {
  return <div className="absolute border-[#cbb8a0] border-dashed border-l h-[54.5px] left-[21px] top-[43.88px] w-px" data-name="Text" />;
}

function Text11() {
  return (
    <div className="absolute bg-[#72162b] border border-[#cbb8a0] border-solid left-0 rounded-[22px] size-[44px] top-[-0.12px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Poppins:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[23.25px] left-[15.5px] not-italic text-[15px] text-white top-[8.88px] whitespace-nowrap">✓</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[23.25px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Bold',sans-serif] leading-[23.25px] left-0 not-italic text-[#503d3f] text-[15px] top-[0.5px] whitespace-nowrap">Received</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[54px] relative shrink-0 w-[298px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[23.25px] not-italic relative shrink-0 text-[#503d3f] text-[15px] whitespace-nowrap">Just now</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col h-[76.5px] items-start left-[60px] top-[-0.12px] w-[298px]" data-name="Container">
      <Container27 />
      <Paragraph1 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[98.5px] relative shrink-0 w-full" data-name="Container">
      <Text10 />
      <Text11 />
      <Container26 />
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[18.675px] relative size-full">
        <Container25 />
      </div>
    </div>
  );
}

function Text12() {
  return <div className="absolute border-[#cbb8a0] border-dashed border-l h-[77.75px] left-[21px] top-[43.88px] w-px" data-name="Text" />;
}

function Text13() {
  return (
    <div className="absolute bg-white border border-[#cbb8a0] border-solid left-0 rounded-[22px] size-[44px] top-[-0.12px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[23.25px] left-[calc(50%-7px)] not-italic text-[#72162b] text-[15px] top-[calc(50%-11.73px)] whitespace-nowrap">♨</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[23.25px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Bold',sans-serif] leading-[23.25px] left-0 not-italic text-[#503d3f] text-[15px] top-[0.5px] whitespace-nowrap">Preparing</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[23.25px] not-italic relative shrink-0 text-[#503d3f] text-[15px] w-[298px]">Our kitchen team is preparing your delicious food.</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col h-[99.75px] items-start left-[60px] top-[-0.12px] w-[298px]" data-name="Container">
      <Container30 />
      <Paragraph2 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[121.75px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text12 />
        <Text13 />
        <Container29 />
      </div>
    </div>
  );
}

function Text14() {
  return <div className="absolute border-[#cbb8a0] border-dashed border-l h-[54.5px] left-[21px] top-[43.88px] w-px" data-name="Text" />;
}

function Text15() {
  return (
    <div className="absolute bg-white border border-[#cbb8a0] border-solid left-0 rounded-[22px] size-[44px] top-[-0.12px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Noto_Emoji:Regular',sans-serif] font-normal leading-[23.25px] left-[calc(50%-10px)] text-[#72162b] text-[15px] top-[calc(50%-12.48px)] whitespace-nowrap">👍</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[23.25px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Bold',sans-serif] leading-[23.25px] left-0 not-italic text-[#503d3f] text-[15px] top-[0.5px] whitespace-nowrap">Ready</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[54px] relative shrink-0 w-[298px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[23.25px] not-italic relative shrink-0 text-[#503d3f] text-[15px] whitespace-nowrap">Your order will be ready shortly.</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col h-[76.5px] items-start left-[60px] top-[-0.12px] w-[298px]" data-name="Container">
      <Container33 />
      <Paragraph3 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[98.5px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text14 />
        <Text15 />
        <Container32 />
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute bg-white border border-[#cbb8a0] border-solid left-0 rounded-[22px] size-[44px] top-[-0.13px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Noto_Emoji:Regular',sans-serif] font-normal leading-[23.25px] left-[11.75px] text-[#72162b] text-[15px] top-[8.88px] whitespace-nowrap">🍽️</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[23.25px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Bold',sans-serif] leading-[23.25px] left-0 not-italic text-[#503d3f] text-[15px] top-[0.5px] whitespace-nowrap">Served</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[54px] relative shrink-0 w-[298px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[23.25px] not-italic relative shrink-0 text-[#503d3f] text-[15px] whitespace-nowrap">Enjoy your meal!</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col h-[76.5px] items-start left-[60px] top-[-0.13px] w-[298px]" data-name="Container">
      <Container36 />
      <Paragraph4 />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[76px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text16 />
        <Container35 />
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-[rgba(255,253,248,0.86)] content-stretch flex flex-col h-[521px] items-start left-[872px] p-[31px] rounded-[12px] top-[0.12px] w-[411px]" data-name="Sidebar">
      <div aria-hidden className="absolute border border-[#ead8bf] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Heading9 />
      <ContainerMargin4 />
      <Container28 />
      <Container31 />
      <Container34 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[686.75px] relative shrink-0 w-full" data-name="Container">
      <Section1 />
      <Sidebar />
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="h-[662px] relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container14 />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-full min-h-[48px] relative rounded-[999px] shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#72162b] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-center justify-center min-h-[inherit] not-italic pl-[23px] pr-[15px] py-px relative size-full text-[#72162b]">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[17px] relative shrink-0 text-[17px] text-center whitespace-nowrap">←</p>
        <p className="font-['Poppins:Bold',sans-serif] leading-[20.15px] relative shrink-0 text-[13px] w-[96px]">{`Back to Menu `}</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[82px] relative shrink-0 w-[847px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pt-[34px] px-[10px] relative size-full">
        <Link1 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[62px] pt-[44px] relative shrink-0 w-[1283px]" data-name="Section">
      <Container2 />
      <ContainerMargin2 />
      <ContainerMargin3 />
      <Container37 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="bg-[#f9f1e5] h-[684px] relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Section />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="h-[845px] relative shrink-0 w-full" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1379 845' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(0 -105.83 -147.95 0 303.38 118.3)'><stop stop-color='rgba(255,255,255,0.7)' offset='0'/><stop stop-color='rgba(191,191,191,0.525)' offset='0.08'/><stop stop-color='rgba(128,128,128,0.35)' offset='0.16'/><stop stop-color='rgba(64,64,64,0.175)' offset='0.24'/><stop stop-color='rgba(0,0,0,0)' offset='0.32'/></radialGradient></defs></svg>\"), linear-gradient(rgb(255, 248, 239) 0%, rgb(251, 243, 230) 100%)" }} data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Header />
        <ContainerMargin1 />
      </div>
    </div>
  );
}

export default function AbcdOrderSuccessfullDineIn() {
  return (
    <div className="bg-[#fbf3e6] content-stretch flex flex-col items-start relative size-full" data-name="ABCD Order Successfull - Dine In">
      <Body />
    </div>
  );
}