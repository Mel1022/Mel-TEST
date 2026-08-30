export type Service = {
  slug: string;
  name: string;
  shortName: string;
  href: string;
  icon: "wrench" | "spring" | "opener" | "install" | "maintenance" | "parts";
  summary: string;
  heroHeadline: string;
  heroSupport: string;
  problemHeading: string;
  problemBody: string[];
  symptoms: string[];
  checks: { label: string; detail: string }[];
  whyItMatters: string[];
  faqs: { q: string; a: string }[];
  ctaLabel: string;
  safetyWarning?: string;
};

export const services: Service[] = [
  {
    slug: "garage-door-repair",
    name: "Garage Door Repair",
    shortName: "Repair",
    href: "/garage-door-repair/",
    icon: "wrench",
    summary:
      "From a door that won't budge to one that's stuck halfway, we diagnose the cause and repair it correctly.",
    heroHeadline: "Garage Door Repair Done Right.",
    heroSupport:
      "A garage door can fail for a lot of reasons. DoorChamp identifies the actual cause before recommending a fix — no guessing, no unnecessary parts.",
    problemHeading: "A Garage Door That Isn't Working Is More Than an Inconvenience.",
    problemBody: [
      "Your garage door is one of the largest moving parts of your home, and it's built from several systems working together — springs, cables, rollers, tracks, and an opener. When one part fails, it often affects the rest.",
      "Trying to force a stuck door, or ignoring a noise that's gotten worse, can turn a small repair into a bigger one. DoorChamp inspects the full system so the repair addresses the real problem.",
    ],
    symptoms: [
      "Door won't open or close fully",
      "Door reverses or stops midway",
      "Loud grinding, popping, or scraping sounds",
      "Door feels unusually heavy",
      "Door moves unevenly or looks off-balance",
      "Visible gaps, bends, or damage",
    ],
    checks: [
      { label: "Springs and cable tension", detail: "We check whether springs are worn, mismatched, or approaching the end of their cycle life — and whether cables are fraying or slack." },
      { label: "Roller and track condition", detail: "Worn rollers and bent or dirty tracks are a common source of noise and uneven movement. We assess both together." },
      { label: "Hinges and hardware", detail: "Loose or cracked hinges affect how the door folds and can put stress on adjacent panels. We check every hinge and tighten or replace as needed." },
      { label: "Door balance and alignment", detail: "An unbalanced door puts extra strain on the opener. We test lift force and adjust spring tension so the door holds position mid-travel." },
      { label: "Opener function and force settings", detail: "We verify the opener's motor, limits, and auto-reverse force are set correctly — not just that it moves the door, but that it does so safely." },
      { label: "Safety sensors", detail: "Photo-eye sensors must be aligned and unobstructed to prevent the door from closing on a person or vehicle. We clean, align, and test both." },
    ],
    whyItMatters: [
      "A misdiagnosed repair can leave the underlying issue in place.",
      "Garage door systems carry real mechanical tension and weight — improper repairs can be unsafe.",
      "A correct diagnosis now can prevent a more costly repair later.",
    ],
    faqs: [
      {
        q: "How long does a typical garage door repair take?",
        a: "It depends on the issue. Many common repairs — like a roller replacement or track adjustment — can be completed in a single visit. More involved repairs may take longer. A technician can give you a clearer estimate after inspecting the door.",
      },
      {
        q: "Do I need a repair or a full replacement?",
        a: "That depends on the age of the door, the extent of the damage, and the cost of repair versus replacement. DoorChamp will walk you through the options rather than assuming one over the other.",
      },
    ],
    ctaLabel: "Request Repair Service",
  },
  {
    slug: "garage-door-spring-replacement",
    name: "Garage Door Spring Replacement",
    shortName: "Spring Replacement",
    href: "/garage-door-spring-replacement/",
    icon: "spring",
    summary:
      "A broken spring is one of the most common — and most dangerous to DIY — garage door problems. We handle it safely.",
    heroHeadline: "Broken Garage Door Spring?",
    heroSupport:
      "A broken spring can make your garage door extremely difficult — or impossible — to open. DoorChamp can diagnose the issue and recommend the right repair.",
    problemHeading: "Springs Do the Heavy Lifting. When They Fail, the Door Fails.",
    problemBody: [
      "Garage door springs counterbalance the weight of the door, which can be 150 pounds or more. When a spring breaks or weakens, the door can become too heavy to lift safely, or it may slam shut without warning.",
      "Springs wear out from repeated use over time, and a break is often sudden. DoorChamp determines the correct spring type, size, and tension for your specific door.",
    ],
    symptoms: [
      "A loud bang, often mistaken for a car backfiring or something falling",
      "The door feels extremely heavy to lift by hand",
      "The door won't stay open on its own",
      "A visible gap in a torsion spring above the door",
      "The door opens unevenly or at an angle",
    ],
    checks: [
      { label: "Spring type and condition", detail: "We identify whether you have torsion or extension springs, check for visible breaks, measure wind count, and assess whether the spring matches the door's weight." },
      { label: "Cable condition", detail: "Springs and cables work as a pair. We inspect cables for fraying, rust, or slack — a worn cable alongside a new spring is a failure waiting to happen." },
      { label: "Door balance", detail: "After new springs are installed, we test how the door holds at mid-travel. A properly balanced door should stay in place without the opener holding it." },
      { label: "Safety cables and mounting hardware", detail: "Extension springs require safety cables threaded through them. We verify these are in place and that all mounting brackets are secure." },
      { label: "Opener force settings", detail: "New springs change how much force the opener needs to apply. We adjust the opener's up-force and down-force settings to match the new spring tension." },
    ],
    whyItMatters: [
      "Garage door springs are under significant mechanical tension.",
      "The right spring size and type matter — an incorrect match can cause premature failure or an unbalanced door.",
      "Professional installation includes safety hardware most DIY attempts skip.",
    ],
    faqs: [
      {
        q: "How do I know if my garage door spring is broken?",
        a: "Common signs include a loud bang at the time of failure, a door that feels unusually heavy, a door that won't stay open, or a visible gap in the spring. If you notice any of these, avoid operating the door until it's inspected.",
      },
      {
        q: "Can I replace a garage door spring myself?",
        a: "We don't recommend it. Garage door springs are under significant tension and can cause serious injury if handled without the right tools and training.",
      },
    ],
    ctaLabel: "Request Spring Service",
    safetyWarning:
      "Garage door springs are under significant tension. Do not attempt to remove or replace a spring yourself.",
  },
  {
    slug: "garage-door-opener-repair-installation",
    name: "Garage Door Opener Repair & Installation",
    shortName: "Opener Service",
    href: "/garage-door-opener-repair-installation/",
    icon: "opener",
    summary:
      "Remote not working? Opener humming but the door won't move? We repair and install openers of all types.",
    heroHeadline: "Garage Door Opener Not Working?",
    heroSupport:
      "An opener that hums, stalls, or won't respond to the remote usually points to a specific, findable cause. DoorChamp can diagnose and repair it — or install a new one.",
    problemHeading: "The Opener Is Often Blamed First — But Not Always the Cause.",
    problemBody: [
      "Because the opener is the part homeowners interact with directly, it's often the first thing suspected when a door stops working. Sometimes the opener is the issue. Other times, the opener is straining against a spring, track, or balance problem it wasn't built to overcome.",
      "DoorChamp checks the opener and the door system together so the repair — or a new opener installation — solves the actual issue.",
    ],
    symptoms: [
      "Remote or keypad doesn't respond",
      "Opener runs but the door doesn't move",
      "Door reverses right after closing",
      "Opener is unusually loud or straining",
      "Safety sensor lights blinking or unresponsive",
      "Opener is outdated or parts are no longer available",
    ],
    checks: [
      { label: "Opener motor and drive system", detail: "We inspect the motor, drive belt or chain, and carriage mechanism for wear, noise, or stalling — common signs of a unit that's nearing the end of its life." },
      { label: "Remote and keypad programming", detail: "Remotes that stopped working are often a pairing or interference issue, not a hardware failure. We test and reprogram before recommending replacement." },
      { label: "Safety sensor alignment", detail: "Photo-eye sensors must be aimed at each other and unobstructed. We clean the lenses, realign both units, and confirm the indicator lights show proper function." },
      { label: "Force and travel-limit settings", detail: "Incorrect force or limit settings cause the door to reverse or stop short. We adjust both to make sure the door opens and closes fully without straining the motor." },
      { label: "Door load on the opener", detail: "An opener straining against a heavy door often points to a spring or balance problem, not the opener itself. We check the door's mechanical load before recommending any opener work." },
    ],
    whyItMatters: [
      "An opener working against a heavy or unbalanced door can wear out faster.",
      "Safety sensors are a critical feature and should be functioning correctly.",
      "Newer openers offer improvements in noise level and smart-home connectivity worth discussing.",
    ],
    faqs: [
      {
        q: "Can you repair garage door openers, or only replace them?",
        a: "Both. Many opener issues — like sensor misalignment, remote programming, or worn drive components — can be repaired. If an opener is old enough that parts aren't available or a replacement makes more sense, we'll explain why.",
      },
      {
        q: "Why does my door reverse right after it closes?",
        a: "This is often related to safety sensor alignment or force settings, but it can also point to a door or track issue. A technician can pinpoint the cause.",
      },
    ],
    ctaLabel: "Request Opener Service",
  },
  {
    slug: "garage-door-installation",
    name: "Garage Door Installation",
    shortName: "Installation",
    href: "/garage-door-installation/",
    icon: "install",
    summary:
      "Ready for a new garage door? We help you choose the right door and install it correctly.",
    heroHeadline: "Ready for a New Garage Door?",
    heroSupport:
      "Whether your current door is beyond repair or you're ready for an upgrade, DoorChamp can help you choose and install a door suited to your home.",
    problemHeading: "The Right Door Is About More Than Looks.",
    problemBody: [
      "A garage door affects your home's curb appeal, insulation, security, and daily convenience. Choosing a new door means weighing material, insulation value, style, and how it will hold up over time.",
      "DoorChamp walks you through the practical differences between options so you can make a decision that fits your home and how you use your garage.",
    ],
    symptoms: [
      "Existing door has extensive rust, rot, or structural damage",
      "Repeated repairs are becoming frequent or costly",
      "Door no longer matches a renovated home exterior",
      "Poor insulation is affecting garage temperature",
      "Planning a renovation or new construction",
    ],
    checks: [
      { label: "Opening size and structure", detail: "We measure the rough opening and assess headroom, side room, and structural conditions — all of which affect which door types and track configurations will fit correctly." },
      { label: "Insulation requirements", detail: "If your garage is attached, temperature-controlled, or used as a workspace, insulation value (R-value) is a meaningful factor. We discuss options that match how you actually use the space." },
      { label: "Opener compatibility", detail: "Not every opener works with every door. We check motor strength requirements, drive type, and smart-home compatibility before any installation begins." },
      { label: "Material and style fit", detail: "Steel, aluminum, composite, and wood each have different maintenance demands and performance characteristics. We explain the practical differences without pushing a particular direction." },
      { label: "Sealing and weatherproofing", detail: "We check and set bottom seals, side seals, and header weatherstripping at install so the door closes snugly against the elements from day one." },
    ],
    whyItMatters: [
      "Improper installation can affect how the door balances and operates long-term.",
      "The wrong size or type of opener for a new door can cause premature wear.",
      "A correctly installed door should operate smoothly from day one.",
    ],
    faqs: [
      {
        q: "Should I repair my current door or replace it?",
        a: "It depends on the age and condition of the door, the extent of the damage, and how the cost of ongoing repairs compares to replacement. We'll walk through the options with you rather than assume.",
      },
      {
        q: "How long does a garage door installation take?",
        a: "Installation time varies with the door type and any structural work needed. A technician can give you a more specific estimate for your situation.",
      },
    ],
    ctaLabel: "Request Installation Quote",
  },
  {
    slug: "garage-door-maintenance",
    name: "Garage Door Maintenance",
    shortName: "Maintenance",
    href: "/garage-door-maintenance/",
    icon: "maintenance",
    summary:
      "Routine maintenance catches small issues before they become bigger repairs — and keeps your door running smoothly.",
    heroHeadline: "Keep Your Garage Door Working the Way It Should.",
    heroSupport:
      "Garage doors are mechanical systems with parts that wear over time. Regular maintenance helps catch issues early, while they're still small.",
    problemHeading: "Most Garage Door Failures Don't Happen Without Warning.",
    problemBody: [
      "Worn rollers, loose hardware, and drifting opener settings often show early signs — a new noise, a slight hesitation, a door that looks a little uneven — before a full breakdown.",
      "A maintenance visit checks the parts that wear with regular use, so small issues can be addressed before they turn into an inconvenient repair.",
    ],
    symptoms: [
      "Door hasn't been inspected in some time",
      "New or increasing noise during operation",
      "Door feels slightly slower or less smooth than before",
      "Visible wear on rollers, hinges, or weatherstripping",
      "Preparing for a season of heavy use",
    ],
    checks: [
      { label: "Springs and cable condition", detail: "We check spring cycle life remaining, look for coil separation or rust, and inspect cables for fraying or uneven tension on both sides." },
      { label: "Rollers, hinges, and tracks", detail: "Worn nylon rollers, cracked hinges, and tracks that are out of plumb are early indicators of bigger problems. We assess all three together since they affect each other." },
      { label: "Lubrication of moving parts", detail: "Springs, rollers, and hinges require the right lubricant — not general-purpose spray. We apply proper lubricant to the correct components to reduce wear and noise." },
      { label: "Door balance", detail: "A balanced door should hold its position mid-travel without the opener. We test this and adjust spring tension if the door is pulling heavier on one side." },
      { label: "Opener settings and safety sensors", detail: "Over time, opener force and limit settings can drift. We verify auto-reverse sensitivity, travel limits, and photo-eye sensor alignment during each maintenance visit." },
      { label: "Weatherstripping and seals", detail: "Bottom seals and side seals protect the garage from drafts, water, and pests. We inspect them for cracking or compression loss and note anything that should be replaced." },
    ],
    whyItMatters: [
      "Routine maintenance can catch wear before it leads to a failure.",
      "A well-maintained door tends to run quieter and operate more smoothly.",
      "Small adjustments now can help avoid a more disruptive repair later.",
    ],
    faqs: [
      {
        q: "How often should a garage door be maintained?",
        a: "It depends on usage and the age of the door and opener. A technician can recommend a schedule based on your specific system after an initial inspection.",
      },
      {
        q: "What's included in a maintenance visit?",
        a: "A maintenance visit generally includes a check of springs, cables, rollers, tracks, hardware, door balance, opener settings, and safety sensors, along with lubrication of moving parts.",
      },
    ],
    ctaLabel: "Request Maintenance Service",
  },
  {
    slug: "garage-door-parts-components",
    name: "Garage Door Parts & Components",
    shortName: "Parts & Components",
    href: "/garage-door-parts-components/",
    icon: "parts",
    summary:
      "Rollers, cables, hinges, tracks, and hardware — replaced with quality parts suited to your door.",
    heroHeadline: "Garage Door Parts, Replaced Correctly.",
    heroSupport:
      "Not every issue requires a full repair visit — sometimes it's a single worn part. DoorChamp replaces individual components with parts suited to your door.",
    problemHeading: "Garage Doors Are a System of Parts Working Together.",
    problemBody: [
      "Rollers, cables, hinges, tracks, and weatherstripping all wear differently based on use, exposure, and the age of the door. A single worn component can affect how the whole door operates.",
      "DoorChamp identifies which parts need attention and replaces them with components suited to your specific door and opener.",
    ],
    symptoms: [
      "Worn or cracked rollers",
      "Frayed or rusted cables",
      "Bent or misaligned tracks",
      "Squeaking or stiff hinges",
      "Damaged weatherstripping or seals",
      "Broken or missing hardware",
    ],
    checks: [
      { label: "Roller type and wear", detail: "We identify whether your rollers are nylon or steel, check for cracking or flat spots, and measure bearing play — worn rollers are one of the most common causes of noise and track binding." },
      { label: "Cable condition and tension", detail: "Cables fray from the inside out, so visible fraying is already a late sign. We check both cables for wear, tension symmetry, and correct seating on the drums." },
      { label: "Track alignment", detail: "Tracks that are out of plumb or have gaps at the mounting brackets put uneven stress on the rollers. We check both vertical and horizontal sections and adjust as needed." },
      { label: "Hinge condition", detail: "Cracked or loose hinges let panels flex under load, which accelerates wear on adjacent components. We check every hinge point and tighten or replace where required." },
      { label: "Weatherstripping and seals", detail: "Bottom seals and side seals prevent drafts, moisture, and pests. We check compression, look for cracks or gaps, and recommend replacements where sealing has failed." },
      { label: "General hardware condition", detail: "Lag bolts, track brackets, and torsion bar bearings can loosen with vibration over time. We tighten hardware across the full system, not just the part that's visibly worn." },
    ],
    whyItMatters: [
      "Mismatched or low-quality parts can wear out faster or affect the door's balance.",
      "Some components, like cables, are connected to spring tension and require careful handling.",
      "Addressing a worn part early can prevent it from affecting other components.",
    ],
    faqs: [
      {
        q: "Do you replace garage door cables and rollers?",
        a: "Yes. Cables and rollers are among the most common parts we replace, along with hinges, tracks, and related hardware.",
      },
      {
        q: "Can I just replace one part instead of the whole system?",
        a: "In many cases, yes. A technician can inspect the door and let you know whether a targeted part replacement addresses the issue or whether other components are also affected.",
      },
    ],
    ctaLabel: "Request Parts Service",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export type ProblemCardData = {
  title: string;
  description: string;
  href: string;
};

export const commonProblems: ProblemCardData[] = [
  {
    title: "Door Won't Open",
    description:
      "Could be a spring, opener, or track issue. We'll find the actual cause before recommending a fix.",
    href: "/garage-door-repair/",
  },
  {
    title: "Door Won't Close",
    description:
      "Often related to sensors, track alignment, or opener settings. We'll check the full system.",
    href: "/garage-door-repair/",
  },
  {
    title: "Broken Spring",
    description:
      "A snapped or worn spring makes the door heavy or impossible to lift safely. This is not a DIY fix.",
    href: "/garage-door-spring-replacement/",
  },
  {
    title: "Broken Cable",
    description:
      "A frayed or snapped cable affects how the door lifts and can leave it stuck or off-balance.",
    href: "/garage-door-parts-components/",
  },
  {
    title: "Noisy Door",
    description:
      "Grinding, popping, or scraping sounds usually point to worn rollers, hinges, or hardware.",
    href: "/garage-door-maintenance/",
  },
  {
    title: "Door Off Track",
    description:
      "A door that's off its track can look bent or stuck at an angle. It needs a careful, professional fix.",
    href: "/garage-door-repair/",
  },
  {
    title: "Opener Not Working",
    description:
      "Remote issues, a humming motor, or an opener straining against a heavier problem — we'll check it all.",
    href: "/garage-door-opener-repair-installation/",
  },
  {
    title: "Damaged Panels",
    description:
      "Dents, cracks, or warping affect both appearance and function. We'll help you decide repair or replace.",
    href: "/garage-door-installation/",
  },
];

export type Faq = { q: string; a: string };

export const generalFaqs: Faq[] = [
  {
    q: "How much does garage door repair cost?",
    a: "Cost depends on the specific issue, the parts involved, and the type of door and opener you have. We provide clear information about the recommended repair so you can make an informed decision — a technician can give you specifics after taking a look.",
  },
  {
    q: "How do I know if my garage door spring is broken?",
    a: "Common signs include a loud bang at the time of failure, a door that suddenly feels very heavy, a door that won't stay open on its own, or a visible gap in a torsion spring. If you notice any of these, avoid forcing the door and have it inspected.",
  },
  {
    q: "Why won't my garage door open?",
    a: "This can be caused by a broken spring, a disconnected opener, a track obstruction, a sensor issue, or a few other causes. Because several systems work together, a proper inspection is the most reliable way to identify the cause.",
  },
  {
    q: "Should I repair or replace my garage door?",
    a: "It depends on the door's age, the extent of the damage, and how the cost of repair compares to replacement. We'll explain the options we see rather than default to one or the other.",
  },
  {
    q: "How long does a garage door repair take?",
    a: "Many common repairs can be completed in a single visit, while more involved issues may take longer. A technician can give you a clearer timeframe once the issue is identified.",
  },
  {
    q: "How often should a garage door be maintained?",
    a: "This depends on how often the door is used and its age. A technician can recommend a maintenance schedule suited to your specific door and opener.",
  },
  {
    q: "Can you repair garage door openers?",
    a: "Yes. We repair openers when the issue is fixable and will let you know if replacement makes more sense — for example, if parts are no longer available.",
  },
  {
    q: "Do you replace garage door cables and rollers?",
    a: "Yes, cables, rollers, hinges, and tracks are among the components we regularly inspect and replace as needed.",
  },
];
