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
  checks: string[];
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
      "Springs and cable tension",
      "Roller and track condition",
      "Hinges and hardware",
      "Door balance and alignment",
      "Opener function and force settings",
      "Safety sensors",
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
      "Spring type (torsion or extension) and condition",
      "Cable condition, since cables and springs work together",
      "Door balance once new springs are installed",
      "Safety cables and mounting hardware",
      "Opener force settings after the repair",
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
      "Opener motor and drive system",
      "Remote and keypad programming",
      "Safety sensor alignment",
      "Force and travel-limit settings",
      "Whether the door itself is causing the opener to strain",
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
      "Opening size and structural requirements",
      "Insulation needs for your climate and garage use",
      "Compatible opener and safety features",
      "Material and style options",
      "Proper sealing and weatherproofing at installation",
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
      "Springs and cable condition",
      "Rollers, hinges, and tracks",
      "Lubrication of moving parts",
      "Door balance",
      "Opener settings and safety sensors",
      "Weatherstripping and seals",
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
      "Roller type and wear",
      "Cable condition and tension",
      "Track alignment",
      "Hinge condition",
      "Weatherstripping and seals",
      "General hardware condition",
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
