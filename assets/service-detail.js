const servicePages = {
  kitchen: {
    title: "Modular Kitchen",
    label: "Kitchen Design · Custom Woodwork",
    icon: "🍽️",
    description: "Plan a practical, made-to-measure kitchen with cabinetry and storage arranged around your room, routine and preferred finish.",
    offerings: [
      ["Kitchen cabinets", "Custom cabinet layouts planned to make useful space for everyday cooking and storage."],
      ["Counter and appliance layout", "A considered layout for counters, appliances and the way you use your kitchen."],
      ["Finishes and hardware", "Choose colours, materials and hardware to suit your home and budget."]
    ],
    examples: [
      { image: "assets/modular-kitchen.png", alt: "Wooden kitchen cabinets with a dining area", title: "Kitchen cabinetry", description: "A warm wooden cabinet finish with storage planned around the room." },
      { image: "assets/dining-room.png", alt: "Dining table beside kitchen cabinetry", title: "Kitchen and dining space", description: "Wooden cabinetry and a dining area shown together in a home." }
    ]
  },
  wardrobe: {
    title: "Wardrobes & Beds",
    label: "Bedroom Furniture · Custom Woodwork",
    icon: "🛏️",
    description: "Make better use of bedroom space with made-to-measure wardrobes, storage and beds planned to suit your room and needs.",
    offerings: [
      ["Custom wardrobes", "Choose a suitable wardrobe layout, storage arrangement and finish for your room."],
      ["Beds and matching furniture", "Discuss a bed design and matching bedroom furniture to suit your space."],
      ["Practical room storage", "Plan drawers, shelves and other useful storage around your daily routine."]
    ],
    examples: [
      { image: "assets/study-storage-unit.png", alt: "Custom shelves and storage cabinets", title: "Made-to-measure storage", description: "A storage example showing coordinated shelving and cabinet space." }
    ]
  },
  tv: {
    title: "TV Units & Wall Panelling",
    label: "Living Room · Custom Woodwork",
    icon: "📺",
    description: "Create a coordinated focal point for your living room with a custom TV unit, useful storage and decorative wall panelling.",
    offerings: [
      ["TV consoles", "Plan a TV console with storage sized for your television and media equipment."],
      ["Wall panelling", "Choose a panel layout and finish to complement your living room."],
      ["Integrated storage", "Add shelves and cabinets for devices, books and everyday items."]
    ]
  },
  doors: {
    title: "Doors & Windows",
    label: "Doors · Windows · Custom Woodwork",
    icon: "🚪",
    description: "Discuss made-to-measure wooden doors and window work designed for your opening, finish preference and home.",
    offerings: [
      ["Wooden doors", "Discuss door sizes, design details and suitable finishes for your home."],
      ["Window frames", "Plan wooden window work around your existing opening and requirements."],
      ["Fitting and finishing", "Ask about installation, adjustments and finishing for your project."]
    ]
  },
  polishing: {
    title: "Furniture Polishing & Restoration",
    label: "Furniture Care · Refinishing",
    icon: "✨",
    description: "Refresh existing wooden furniture with polishing, finish renewal or restoration suited to its condition and material.",
    offerings: [
      ["Furniture polishing", "Discuss a fresh finish for tables, chairs, cabinets and other wooden furniture."],
      ["Finish renewal", "Ask about refreshing faded, scratched or worn surfaces."],
      ["Furniture restoration", "Describe the furniture and its condition so the right restoration work can be discussed."]
    ]
  },
  home: {
    title: "Complete Home Woodwork",
    label: "Home Interiors · Custom Woodwork",
    icon: "🏠",
    description: "Plan connected woodwork for your home, from kitchen and storage to furniture made to fit each room.",
    offerings: [
      ["Room-by-room planning", "Discuss the rooms and woodwork you want to include in your project."],
      ["Custom storage and furniture", "Plan cabinets, work surfaces and furniture around your available space."],
      ["Finishes and installation", "Coordinate preferred materials, finishing and on-site fitting."]
    ],
    examples: [
      { image: "assets/modular-kitchen.png", alt: "Custom wooden kitchen cabinetry", title: "Kitchen woodwork", description: "Custom cabinetry can be included as part of a coordinated home project." },
      { image: "assets/study-storage-unit.png", alt: "Study shelves and storage cabinets", title: "Study and storage units", description: "Shelves and cabinets can be planned to make better use of room space." }
    ]
  }
};

const service = servicePages[document.body.dataset.service];

if (!service) {
  document.querySelector("main").innerHTML = '<section class="contact-section"><h1>Service not found</h1><p>Please return to the main website and choose a service.</p><a class="button" href="firstweb.html">Back to Home</a></section>';
} else {
  document.title = `${service.title} | Dharmendra Carpenter`;
  document.querySelector("#service-label").textContent = service.label;
  document.querySelector("#service-title").textContent = service.title;
  document.querySelector("#service-description").textContent = service.description;
  document.querySelector("#service-quote-link").textContent = `Request a ${service.title} Quote`;
  document.querySelector("#service-quote-link").href = "#service-enquiry";
  document.querySelector("#service-enquiry-heading").textContent = `Request a ${service.title} Quote`;
  document.querySelector("#service-name").value = service.title;

  const visual = document.querySelector("#service-visual");
  if (service.examples?.length) {
    const image = document.createElement("img");
    image.className = "service-hero-image";
    image.src = service.examples[0].image;
    image.alt = service.examples[0].alt;
    visual.replaceWith(image);
  } else {
    visual.textContent = service.icon;
    visual.setAttribute("aria-label", `${service.title} illustration`);
  }

  const offerings = document.querySelector("#service-offerings");
  for (const [title, description] of service.offerings) {
    const card = document.createElement("article");
    card.className = "service-card";
    const heading = document.createElement("h3");
    heading.textContent = title;
    const paragraph = document.createElement("p");
    paragraph.textContent = description;
    card.append(heading, paragraph);
    offerings.append(card);
  }

  if (service.examples?.length) {
    const projectSection = document.querySelector("#project-section");
    const projects = document.querySelector("#service-projects");
    projectSection.hidden = false;
    for (const example of service.examples) {
      const card = document.createElement("article");
      card.className = "project-card";
      const image = document.createElement("img");
      image.src = example.image;
      image.alt = example.alt;
      image.loading = "lazy";
      const content = document.createElement("div");
      content.className = "project-card-content";
      const heading = document.createElement("h3");
      heading.textContent = example.title;
      const paragraph = document.createElement("p");
      paragraph.textContent = example.description;
      content.append(heading, paragraph);
      card.append(image, content);
      projects.append(card);
    }
  }
}

const enquiryForm = document.querySelector("#service-enquiry-form");
if (enquiryForm && service) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const message = [
      `${service.title} enquiry`,
      `Name: ${formData.get("name")}`,
      `Mobile number: ${formData.get("phone")}`,
      `Project site address / area: ${formData.get("address")}`,
      formData.get("landmark") ? `Nearby landmark: ${formData.get("landmark")}` : "",
      `City or town: ${formData.get("city")}`,
      `State or Union Territory: ${formData.get("state")}`,
      `PIN code: ${formData.get("pincode")}`,
      formData.get("details") ? `Project details: ${formData.get("details")}` : ""
    ].join("\n");
    const whatsappUrl = `https://wa.me/917002053060?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}
