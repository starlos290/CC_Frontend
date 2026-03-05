export interface VerticalPageData {
  specialty: string
  slug: string
  accentColor: 'teal' | 'pink' | 'purple' | 'blue'
  heroHeadline: string
  heroSubhead: string
  stats: Array<{ value: string; label: string; sub: string }>
  automations: string[]
  testimonial: { quote: string; name: string; title: string; location: string }
  roiNumbers: { patients: number; noShows: number; visitValue: number }
  applyParam: string
  faqs: Array<{ q: string; a: string }>
  metaTitle: string
  metaDescription: string
}

export const verticalPageData: Record<string, VerticalPageData> = {
  chiropractors: {
    specialty: 'Chiropractors',
    slug: 'for-chiropractors',
    accentColor: 'teal',
    heroHeadline: 'The AI System Built for Chiropractic Practices',
    heroSubhead:
      'Reduce no-shows by 35–40%, collect 3–5x more Google reviews, and reactivate lapsed patients — all without adding a single staff member.',
    stats: [
      { value: '38%', label: 'No-show reduction', sub: 'avg. across chiropractic practices' },
      { value: '4.1x', label: 'More Google reviews', sub: 'compared to pre-ClinicClaw' },
      { value: '41%', label: 'Reactivation response rate', sub: 'for 60+ day lapsed patients' },
    ],
    automations: ['reminders', 'noshow', 'reviews', 'reactivation', 'welcome', 'faq'],
    testimonial: {
      quote:
        'We were losing 8–10 appointments a week to no-shows. ClinicClaw cut that to 2–3. The ROI paid for itself in the first month. I didn\'t touch a server — my deployment specialist handled everything.',
      name: 'Dr. Michael Kowalski',
      title: 'Owner, Align Chiropractic',
      location: 'Denver, CO',
    },
    roiNumbers: { patients: 120, noShows: 8, visitValue: 150 },
    applyParam: '?specialty=chiropractic',
    faqs: [
      { q: 'Does ClinicClaw work with ChiroTouch or Jane App?', a: 'ClinicClaw works alongside your existing EHR without requiring deep integration for core automations. Reminder sequences pull appointment data via webhook, and we connect to ChiroTouch, Jane App, and most major chiropractic EMRs.' },
      { q: 'Can I customize the message tone for chiropractic patients?', a: 'Absolutely. Your onboarding specialist works with you to match your practice\'s voice — whether you\'re clinical and direct, warm and friendly, or somewhere in between. Every template is editable.' },
      { q: 'What happens when a chiro patient wants to reschedule instead of confirm?', a: 'Aria handles rescheduling requests 24/7. Patients can reply R to reschedule, and Aria presents available slots or routes the request to your front desk for complex cases.' },
      { q: 'Is there a long-term contract?', a: 'No contracts. Cancel anytime with 30 days notice. We earn your business month to month.' },
    ],
    metaTitle: 'ClinicClaw for Chiropractors — AI Automation for Chiropractic Practices',
    metaDescription:
      'ClinicClaw reduces no-shows 35–40% and generates 3–5x more Google reviews for chiropractic practices. HIPAA-safe. Live in 48 hours.',
  },

  'med-spas': {
    specialty: 'Med Spas',
    slug: 'for-med-spas',
    accentColor: 'pink',
    heroHeadline: 'AI Automation Designed for Med Spa Revenue',
    heroSubhead:
      'Turn no-shows into revenue, build a 5-star reputation, and reactivate clients who haven\'t visited in months — all automatically.',
    stats: [
      { value: '40%', label: 'No-show reduction', sub: 'avg. for aesthetic practices' },
      { value: '4.8x', label: 'Review increase', sub: 'avg. in first 90 days' },
      { value: '$2,400', label: 'Monthly revenue recovered', sub: 'avg. per med spa client' },
    ],
    automations: ['reminders', 'noshow', 'reviews', 'reactivation', 'welcome', 'campaigns'],
    testimonial: {
      quote:
        'Our Google reviews went from 47 to 180 in 90 days. Vera just works. Patients get a friendly text after their visit and the reviews roll in. Our competitor has been in business longer and we outrank them now.',
      name: 'Jennifer Tran',
      title: 'Practice Manager, Radiance Med Spa',
      location: 'Austin, TX',
    },
    roiNumbers: { patients: 80, noShows: 6, visitValue: 350 },
    applyParam: '?specialty=med-spa',
    faqs: [
      { q: 'Can ClinicClaw promote specific treatments like Botox or laser services?', a: 'Yes — the monthly campaign automation is perfect for seasonal promotions, new treatment launches, and referral programs. Set up your campaign once, and it deploys to your active patient list automatically.' },
      { q: 'Our clients are privacy-conscious. Are conversations secure?', a: 'All patient data lives on your dedicated private VPS — never shared infrastructure. Conversations are encrypted at rest and in transit. We sign a BAA with every plan.' },
      { q: 'We have a membership program. Can ClinicClaw manage those communications?', a: 'ClinicClaw can handle membership reminder messages, renewal notices, and loyalty offers via the campaign automation. We configure these to match your membership tiers during onboarding.' },
      { q: 'What booking platforms do you integrate with?', a: 'We work with Vagaro, Mindbody, Jane App, Booker, and most major booking platforms via webhook. For platforms without native webhook support, we offer CSV import for reactivation campaigns.' },
    ],
    metaTitle: 'ClinicClaw for Med Spas — AI Automation for Aesthetic Practices',
    metaDescription:
      'ClinicClaw reduces no-shows 40% and generates 4–5x more Google reviews for med spas. HIPAA-safe AI for aesthetic practices. Live in 48 hours.',
  },

  dentists: {
    specialty: 'Dentists',
    slug: 'for-dentists',
    accentColor: 'blue',
    heroHeadline: 'AI That Fills Your Dental Chair, Every Day',
    heroSubhead:
      'Appointment reminders, no-show recovery, review collection, and patient reactivation — fully automated for dental practices.',
    stats: [
      { value: '36%', label: 'Fewer no-shows', sub: 'across dental practices' },
      { value: '3.9x', label: 'More Google reviews', sub: 'in first 60 days' },
      { value: '34', label: 'Patients reactivated', sub: 'avg. in first month (Rex)' },
    ],
    automations: ['reminders', 'noshow', 'reviews', 'reactivation', 'welcome', 'faq'],
    testimonial: {
      quote:
        'Rex reactivated 34 patients in the first month alone. At our average visit value, that\'s over $12,000 in revenue we literally would have lost. It\'s unreal.',
      name: 'Dr. Sandra Osei',
      title: 'Owner, Osei Family Dental',
      location: 'Atlanta, GA',
    },
    roiNumbers: { patients: 200, noShows: 10, visitValue: 280 },
    applyParam: '?specialty=dentist',
    faqs: [
      { q: 'Does ClinicClaw work with Dentrix or Eaglesoft?', a: 'Yes — we integrate with Dentrix, Eaglesoft, Curve Dental, Open Dental, and most major dental practice management systems via webhook or API. Your appointment data syncs automatically.' },
      { q: 'Can we handle recall reminders for 6-month checkups?', a: 'Absolutely. Rex handles recall reactivation — when a patient is due for their 6-month cleaning or hasn\'t been in for a defined period, Rex sends a personalized nudge automatically.' },
      { q: 'What about insurance verification questions?', a: 'The Insurance FAQ bot handles your top 20 questions instantly — accepted plans, copays, deductibles, and what to bring. Patients get answers at 9pm on a Saturday without your team lifting a finger.' },
      { q: 'We have both a general dentist and a specialist. Can ClinicClaw handle both?', a: 'Yes. We configure separate message flows, phone numbers, and branding for each provider or department within your practice. The Scale plan is designed for this scenario.' },
    ],
    metaTitle: 'ClinicClaw for Dentists — AI Automation for Dental Practices',
    metaDescription:
      'ClinicClaw reduces dental no-shows 36% and reactivates lapsed patients automatically. HIPAA-safe AI for dental practices. Live in 48 hours.',
  },

  dermatologists: {
    specialty: 'Dermatologists',
    slug: 'for-dermatologists',
    accentColor: 'teal',
    heroHeadline: 'AI Automation for Dermatology Practices',
    heroSubhead:
      'Reduce appointment no-shows, accelerate Google review collection, and bring back patients who haven\'t visited in months.',
    stats: [
      { value: '37%', label: 'No-show reduction', sub: 'avg. for dermatology' },
      { value: '4.0x', label: 'Review volume increase', sub: 'in first 90 days' },
      { value: '$1,800', label: 'Monthly revenue recovered', sub: 'avg. per dermatology practice' },
    ],
    automations: ['reminders', 'noshow', 'reviews', 'reactivation', 'welcome', 'faq'],
    testimonial: {
      quote:
        'We used to have 6–8 no-shows every week. ClinicClaw got us down to 1–2. The review automation alone brought us from 80 reviews to 230 in under 4 months.',
      name: 'Dr. Rachel Kim',
      title: 'Owner, Clarity Dermatology',
      location: 'Seattle, WA',
    },
    roiNumbers: { patients: 100, noShows: 7, visitValue: 220 },
    applyParam: '?specialty=dermatologist',
    faqs: [
      { q: 'Can ClinicClaw handle cosmetic and medical dermatology workflows separately?', a: 'Yes — we configure distinct automation flows for cosmetic vs. medical dermatology. Different messages, different timing, and different review prompts based on visit type.' },
      { q: 'We require pre-authorization for some visits. Can that be communicated automatically?', a: 'Yes. During onboarding, we build FAQ responses that cover your authorization requirements, so patients know exactly what to prepare before their appointment.' },
      { q: 'How does ClinicClaw handle appointment reschedule requests?', a: 'Patients can reply R to any reminder to reschedule. Aria presents available slots or routes to your front desk — whichever flow you prefer.' },
      { q: 'Is setup truly 48 hours for a dermatology practice?', a: 'Yes. Our deployment specialists have configured dozens of dermatology practices. As long as you complete your kickoff call and approve your message templates, 48 hours is our standard target.' },
    ],
    metaTitle: 'ClinicClaw for Dermatologists — AI for Dermatology Practices',
    metaDescription:
      'ClinicClaw reduces dermatology no-shows 37% and generates 4x more Google reviews. HIPAA-safe AI. Live in 48 hours.',
  },

  'physical-therapy': {
    specialty: 'Physical Therapy',
    slug: 'for-physical-therapy',
    accentColor: 'teal',
    heroHeadline: 'Keep Your PT Schedule Full, Automatically',
    heroSubhead:
      'Physical therapy practices using ClinicClaw cut no-shows significantly, free their front desk, and reactivate discharged patients at scale.',
    stats: [
      { value: '39%', label: 'No-show reduction', sub: 'across PT practices' },
      { value: '2hrs', label: 'Front desk time saved', sub: 'daily via FAQ automation' },
      { value: '41%', label: 'Reactivation SMS response', sub: 'Rex reactivation agent' },
    ],
    automations: ['reminders', 'noshow', 'reviews', 'reactivation', 'welcome', 'faq'],
    testimonial: {
      quote:
        'The insurance FAQ bot alone saves my front desk 2 hours a day. We get the same 15 questions every single day. Now Aria handles them at 11pm, on weekends, whenever. My staff is less stressed.',
      name: 'Carlos Mendes, PT, DPT',
      title: 'Director, ProMotion Physical Therapy',
      location: 'Phoenix, AZ',
    },
    roiNumbers: { patients: 150, noShows: 9, visitValue: 160 },
    applyParam: '?specialty=physical-therapy',
    faqs: [
      { q: 'Can ClinicClaw handle the insurance authorization questions PT patients always ask?', a: 'This is exactly what the Insurance FAQ bot was built for. We pre-load your top 20 most common insurance questions — prior auth requirements, copay estimates, plan acceptance, referral requirements — and Aria answers them instantly, 24/7.' },
      { q: 'We see patients multiple times a week. Does ClinicClaw handle high-frequency scheduling?', a: 'Yes. Aria\'s reminder sequences are configured based on appointment frequency. For patients with 3x/week schedules, we typically send a single weekly summary reminder rather than three individual ones to avoid notification fatigue.' },
      { q: 'Can ClinicClaw reactivate patients who completed their PT episode of care?', a: 'Yes — Rex is particularly effective for PT practices. We target patients who were discharged 60–90+ days ago with a message about returning for a tune-up, wellness visits, or addressing a new concern.' },
      { q: 'Do you integrate with WebPT or Clinicient?', a: 'We integrate with WebPT, Clinicient, Jane App, and most major PT EMRs via webhook. Your scheduling data syncs automatically for reminder sequences.' },
    ],
    metaTitle: 'ClinicClaw for Physical Therapy — AI Automation for PT Practices',
    metaDescription:
      'ClinicClaw reduces PT no-shows 39% and saves front desk 2 hours daily. HIPAA-safe AI for physical therapy. Live in 48 hours.',
  },

  'mental-health': {
    specialty: 'Mental Health',
    slug: 'for-mental-health',
    accentColor: 'purple',
    heroHeadline: 'Private, HIPAA-Safe AI for Mental Health Practices',
    heroSubhead:
      'ClinicClaw reduces no-shows and grows your reputation while keeping every patient interaction private on your dedicated, HIPAA-safe infrastructure.',
    stats: [
      { value: '35%', label: 'No-show reduction', sub: 'avg. across mental health practices' },
      { value: '100%', label: 'Private infrastructure', sub: 'dedicated VPS, never shared' },
      { value: '41%', label: 'Reactivation response', sub: 'for lapsed clients' },
    ],
    automations: ['reminders', 'noshow', 'reviews', 'reactivation', 'welcome'],
    testimonial: {
      quote:
        'HIPAA compliance was the reason we hesitated. Once we understood every practice gets a private VPS — not shared infrastructure — and the BAA was right there in the contract, it was an easy decision.',
      name: 'Dr. Aisha Patel',
      title: 'Founder, Mindful Mental Health Group',
      location: 'Chicago, IL',
    },
    roiNumbers: { patients: 60, noShows: 5, visitValue: 200 },
    applyParam: '?specialty=mental-health',
    faqs: [
      { q: 'Mental health patients are especially sensitive about privacy. How do you handle this?', a: 'Every ClinicClaw practice gets a dedicated private VPS — your patient data never shares infrastructure with any other practice. We sign a BAA with every plan. Messages are branded as your practice name only; patients don\'t interact with any third-party platform.' },
      { q: 'Can we avoid certain topics in automated messages for mental health clients?', a: 'Absolutely. During onboarding, we configure message content to be clinically appropriate. Messages are neutral, professional, and never reference specific diagnoses or treatment details. You review and approve every template before go-live.' },
      { q: 'We don\'t want to push review requests too aggressively for mental health clients.', a: 'Vera\'s review request is fully optional and configurable. For mental health practices, we typically use a softer prompt and give clinicians the ability to exclude certain clients from review requests entirely.' },
      { q: 'Can ClinicClaw handle crisis or urgent response routing?', a: 'ClinicClaw handles routine communication. For any message that indicates urgency or distress, Aria flags and routes to your team immediately. We do not provide crisis counseling — we ensure your team is alerted instantly.' },
    ],
    metaTitle: 'ClinicClaw for Mental Health — HIPAA-Safe AI for Therapy Practices',
    metaDescription:
      'Private, HIPAA-safe AI automation for mental health practices. Dedicated VPS, BAA included. Reduce no-shows, grow reputation. Live in 48 hours.',
  },

  orthopedics: {
    specialty: 'Orthopedics',
    slug: 'for-orthopedics',
    accentColor: 'teal',
    heroHeadline: 'AI Automation for Orthopedic Practices',
    heroSubhead:
      'Reduce surgical and clinical appointment no-shows, automate post-visit reviews, and keep your patient pipeline full with Rex reactivation.',
    stats: [
      { value: '38%', label: 'No-show reduction', sub: 'clinical + surgical appointments' },
      { value: '3.8x', label: 'More Google reviews', sub: 'in first 90 days' },
      { value: '$2,200', label: 'Monthly revenue recovered', sub: 'avg. per orthopedic practice' },
    ],
    automations: ['reminders', 'noshow', 'reviews', 'reactivation', 'welcome', 'faq'],
    testimonial: {
      quote:
        'I was skeptical about AI for a surgical practice. But we customized the messages to match our exact protocols and it just feels like us. Patients compliment the communication all the time.',
      name: 'Dr. Thomas Reyes',
      title: 'Owner, Reyes Orthopedic Surgery Center',
      location: 'Miami, FL',
    },
    roiNumbers: { patients: 90, noShows: 7, visitValue: 350 },
    applyParam: '?specialty=orthopedics',
    faqs: [
      { q: 'We have both clinical and surgical patients. Can ClinicClaw handle both workflows?', a: 'Yes. We configure distinct automation flows for clinical consultations, pre-op appointments, and post-surgical follow-ups. Each has different timing, tone, and content — all configurable during onboarding.' },
      { q: 'Can ClinicClaw handle pre-op checklists and instructions?', a: 'The New Patient Welcome sequence can be customized for pre-operative patients — sending prep instructions, fasting requirements, and what to bring. This is one of the highest-value automations for surgical practices.' },
      { q: 'What about workers\' comp or auto insurance patients?', a: 'We configure the Insurance FAQ bot to handle workers\' comp and auto insurance questions specific to your practice. Patients get accurate, instant answers without tying up your billing staff.' },
      { q: 'How does ClinicClaw handle high-value, low-volume surgical practices?', a: 'Surgical practices typically have lower appointment volumes but much higher visit values. ClinicClaw\'s ROI is often even stronger in this model — recovering one $3,000 procedure appointment from a no-show pays for months of service.' },
    ],
    metaTitle: 'ClinicClaw for Orthopedics — AI Automation for Orthopedic Practices',
    metaDescription:
      'ClinicClaw reduces orthopedic no-shows 38% and generates 3–5x more Google reviews. HIPAA-safe AI for orthopedic practices. Live in 48 hours.',
  },

  'plastic-surgery': {
    specialty: 'Plastic Surgery',
    slug: 'for-plastic-surgery',
    accentColor: 'pink',
    heroHeadline: 'AI That Protects Your Plastic Surgery Revenue',
    heroSubhead:
      'High-value cosmetic consultations deserve high-touch communication. ClinicClaw automates it perfectly.',
    stats: [
      { value: '37%', label: 'Consultation no-shows reduced', sub: 'avg. for cosmetic practices' },
      { value: '5.2x', label: 'Google review increase', sub: 'in first 60 days' },
      { value: '$4,800', label: 'Monthly revenue recovered', sub: 'avg. per plastic surgery practice' },
    ],
    automations: ['reminders', 'noshow', 'reviews', 'reactivation', 'welcome', 'campaigns'],
    testimonial: {
      quote:
        'Each consultation no-show costs us $400–$800 in potential revenue. ClinicClaw recovering even 3–4 of those per week transformed our numbers. The privacy aspect was important for our clients too.',
      name: 'Dr. Amanda Wells',
      title: 'Owner, Wells Plastic Surgery',
      location: 'Scottsdale, AZ',
    },
    roiNumbers: { patients: 50, noShows: 5, visitValue: 600 },
    applyParam: '?specialty=plastic-surgery',
    faqs: [
      { q: 'Our cosmetic patients are extremely privacy-conscious. Is this appropriate?', a: 'Absolutely. ClinicClaw uses your practice branding only. No third-party platform names appear in any message. Messages are tasteful and never mention specific procedures — only appointment confirmations and follow-ups.' },
      { q: 'Can we suppress review requests for clients who prefer discretion?', a: 'Yes. Vera\'s review requests can be configured as opt-in only, or you can flag specific clients to be excluded. We build the flow to match your practice\'s standards.' },
      { q: 'We offer financing. Can ClinicClaw handle those FAQ conversations?', a: 'The Insurance FAQ bot handles financing questions — available plans, required deposits, payment schedules — so your front desk focuses on consultations rather than routine inquiries.' },
      { q: 'What about post-procedure follow-up communications?', a: 'The New Patient Welcome sequence can be repurposed as a post-procedure sequence — sending aftercare instructions, follow-up appointment reminders, and care tips at defined intervals after the procedure date.' },
    ],
    metaTitle: 'ClinicClaw for Plastic Surgery — AI for Cosmetic Practices',
    metaDescription:
      'ClinicClaw reduces plastic surgery consultation no-shows 37% and generates 5x more reviews. HIPAA-safe AI. Live in 48 hours.',
  },

  podiatrists: {
    specialty: 'Podiatrists',
    slug: 'for-podiatrists',
    accentColor: 'teal',
    heroHeadline: 'AI Automation for Podiatry Practices',
    heroSubhead:
      'Keep your appointment book full, build your Google reputation, and reactivate patients who haven\'t visited in months.',
    stats: [
      { value: '36%', label: 'No-show reduction', sub: 'across podiatry practices' },
      { value: '3.7x', label: 'More Google reviews', sub: 'in first 90 days' },
      { value: '41%', label: 'Patient reactivation rate', sub: 'via Rex agent' },
    ],
    automations: ['reminders', 'noshow', 'reviews', 'reactivation', 'welcome', 'faq'],
    testimonial: {
      quote:
        'ClinicClaw handles all the routine stuff. My staff actually gets to help patients instead of playing phone tag. And Rex brought back 28 patients in the first month who hadn\'t been in over a year.',
      name: 'Dr. James Okafor',
      title: 'Owner, Okafor Foot & Ankle',
      location: 'Columbus, OH',
    },
    roiNumbers: { patients: 100, noShows: 7, visitValue: 175 },
    applyParam: '?specialty=podiatry',
    faqs: [
      { q: 'Does ClinicClaw work with podiatry-specific EMRs?', a: 'We work with Practice Fusion, Podiatry Fusion, DrChrono, and most general EHR platforms via webhook. Custom integrations are available on the Scale plan.' },
      { q: 'Can ClinicClaw handle diabetic patient communication?', a: 'We configure messaging to be appropriate for your patient population. For practices with high diabetic patient volume, we can build specific flows for routine monitoring reminders and annual care visit outreach.' },
      { q: 'What about surgical follow-up reminders?', a: 'Post-operative follow-up reminders are handled by the New Patient Welcome sequence, which we customize to your surgical protocols and recovery timelines.' },
      { q: 'Is there a setup fee?', a: 'Yes — the one-time setup fee covers your deployment specialist\'s time to configure, customize, and test every automation to your practice standards. Launch is $1,500, Operate is $3,500.' },
    ],
    metaTitle: 'ClinicClaw for Podiatrists — AI Automation for Podiatry Practices',
    metaDescription:
      'ClinicClaw reduces podiatry no-shows 36% and generates 3–5x more Google reviews. HIPAA-safe AI for podiatry. Live in 48 hours.',
  },

  'hair-transplant': {
    specialty: 'Hair Transplant',
    slug: 'for-hair-transplant',
    accentColor: 'teal',
    heroHeadline: 'AI Built for Hair Transplant Practice Revenue',
    heroSubhead:
      'High-value procedures require flawless communication. ClinicClaw ensures every consultation is confirmed and every patient feels valued.',
    stats: [
      { value: '40%', label: 'Consultation no-shows cut', sub: 'avg. for hair restoration' },
      { value: '4.5x', label: 'Google review increase', sub: 'in first 90 days' },
      { value: '$5,500', label: 'Monthly revenue recovered', sub: 'avg. per hair transplant practice' },
    ],
    automations: ['reminders', 'noshow', 'reviews', 'reactivation', 'welcome', 'faq'],
    testimonial: {
      quote:
        'Each consultation is worth $8,000–$15,000 in potential revenue. ClinicClaw recovering 2–3 no-shows per month is massive. The setup was faster than I expected.',
      name: 'Dr. Brian Kessler',
      title: 'Director, Kessler Hair Restoration',
      location: 'Dallas, TX',
    },
    roiNumbers: { patients: 30, noShows: 3, visitValue: 800 },
    applyParam: '?specialty=hair-transplant',
    faqs: [
      { q: 'Our consultations are highly personal and confidential. How discreet are the messages?', a: 'All messages are branded as your practice name. No mention of specific procedures or conditions in automated messages — just professional appointment communication.' },
      { q: 'We have a long consultation-to-procedure sales cycle. Can ClinicClaw support nurture sequences?', a: 'The Reactivation and Campaign automations can be configured as nurture sequences for leads who consulted but haven\'t booked their procedure. These are some of the highest-ROI configurations we\'ve built.' },
      { q: 'Can we handle pre-procedure preparation messages?', a: 'Yes. We build a custom pre-procedure sequence that sends preparation instructions, pre-op requirements, and day-before reminders — everything patients need to arrive prepared.' },
      { q: 'Do you work with international hair transplant practices?', a: 'Currently ClinicClaw serves US and Canadian practices. International expansion is on our roadmap. Contact us to discuss your specific situation.' },
    ],
    metaTitle: 'ClinicClaw for Hair Transplant Practices — AI Automation',
    metaDescription:
      'ClinicClaw reduces hair transplant consultation no-shows 40% and generates 4–5x more reviews. HIPAA-safe AI. Live in 48 hours.',
  },

  'laser-hair-removal': {
    specialty: 'Laser Hair Removal',
    slug: 'for-laser-hair-removal',
    accentColor: 'pink',
    heroHeadline: 'AI That Keeps Your Laser Treatment Calendar Full',
    heroSubhead:
      'Reduce session no-shows, automate Google review collection, and bring back clients between treatment series automatically.',
    stats: [
      { value: '41%', label: 'Session no-shows reduced', sub: 'avg. for laser practices' },
      { value: '4.9x', label: 'Review volume increase', sub: 'in first 90 days' },
      { value: '$1,600', label: 'Monthly revenue recovered', sub: 'avg. per laser practice' },
    ],
    automations: ['reminders', 'noshow', 'reviews', 'reactivation', 'welcome', 'campaigns'],
    testimonial: {
      quote:
        'Clients go through 6–8 sessions for a full treatment series. ClinicClaw keeps them on track with reminders and brings back the ones who dropped off between sessions. Our rebooking rate went up significantly.',
      name: 'Mia Rodriguez',
      title: 'Owner, Flawless Laser Studio',
      location: 'San Diego, CA',
    },
    roiNumbers: { patients: 100, noShows: 8, visitValue: 200 },
    applyParam: '?specialty=laser-hair-removal',
    faqs: [
      { q: 'Our clients come in for multiple sessions in a series. Can ClinicClaw track that?', a: 'We configure reminder sequences for multi-session treatment series. Clients receive the right messaging at each stage of their treatment journey.' },
      { q: 'Can we run seasonal promotions through ClinicClaw?', a: 'The Campaign automation is perfect for seasonal offers — summer body campaigns, holiday gift cards, and referral programs. Set once, deploy to your full client list.' },
      { q: 'What about clients who pause their treatment series?', a: 'Rex is configured to reach out to clients who haven\'t booked their next session after a defined period — nudging them back into their series with a friendly, non-pushy message.' },
      { q: 'Is ClinicClaw HIPAA-required for laser services?', a: 'While pure aesthetics practices may not be covered entities under HIPAA, we build all ClinicClaw practices on private, HIPAA-compliant infrastructure as a best practice. Your client data is never on shared servers.' },
    ],
    metaTitle: 'ClinicClaw for Laser Hair Removal — AI Automation for Laser Practices',
    metaDescription:
      'ClinicClaw reduces laser hair removal no-shows 41% and generates 5x more reviews. Automated for aesthetic practices. Live in 48 hours.',
  },

  lasik: {
    specialty: 'LASIK',
    slug: 'for-lasik',
    accentColor: 'teal',
    heroHeadline: 'AI Communication for LASIK & Vision Correction Centers',
    heroSubhead:
      'Protect high-value LASIK consultations from no-shows, build Google reputation, and reactivate patients interested in vision correction.',
    stats: [
      { value: '39%', label: 'Consultation no-shows reduced', sub: 'avg. for vision centers' },
      { value: '4.3x', label: 'Google review increase', sub: 'in first 90 days' },
      { value: '$6,200', label: 'Monthly revenue recovered', sub: 'avg. per LASIK center' },
    ],
    automations: ['reminders', 'noshow', 'reviews', 'reactivation', 'welcome', 'faq'],
    testimonial: {
      quote:
        'Each LASIK consultation is worth $4,000–$8,000 in potential revenue. Getting our no-show rate from 15% to under 8% was worth more than 10x the cost of ClinicClaw.',
      name: 'Dr. Victor Chang',
      title: 'Medical Director, ClearView LASIK Center',
      location: 'Houston, TX',
    },
    roiNumbers: { patients: 40, noShows: 4, visitValue: 1000 },
    applyParam: '?specialty=lasik',
    faqs: [
      { q: 'Our consultations involve significant pre-screening. Can ClinicClaw handle that communication?', a: 'Yes. The welcome sequence is customized for LASIK consultation prep — what to expect, candidacy screening reminders, pre-appointment instructions, and what to bring. Patients arrive prepared.' },
      { q: 'Can ClinicClaw help nurture leads who weren\'t ready at their initial consultation?', a: 'Rex reactivation is ideal for this. We reach out to contacts who consulted but didn\'t proceed with a gentle, educational message about vision correction — reaching them when they may be more ready.' },
      { q: 'We also offer PRK and ICL. Can messaging be customized per procedure type?', a: 'Yes. We configure distinct flows for LASIK, PRK, ICL, and other procedures during onboarding. Each has appropriate content and messaging.' },
      { q: 'What about post-LASIK follow-up appointments?', a: 'The automated follow-up sequence handles post-procedure check-ins at day 1, day 7, and 30 days — ensuring patients attend their critical follow-ups and building long-term loyalty.' },
    ],
    metaTitle: 'ClinicClaw for LASIK Centers — AI Automation for Vision Correction',
    metaDescription:
      'ClinicClaw reduces LASIK consultation no-shows 39% and generates 4x more reviews. HIPAA-safe AI for vision centers. Live in 48 hours.',
  },

  'wellness-centers': {
    specialty: 'Wellness Centers',
    slug: 'for-wellness-centers',
    accentColor: 'teal',
    heroHeadline: 'AI Automation for Holistic Wellness Practices',
    heroSubhead:
      'Reduce no-shows, grow your Google reputation, and keep your wellness community engaged — all automatically.',
    stats: [
      { value: '37%', label: 'No-show reduction', sub: 'across wellness practices' },
      { value: '4.2x', label: 'Review volume increase', sub: 'in first 90 days' },
      { value: '$1,400', label: 'Monthly revenue recovered', sub: 'avg. per wellness center' },
    ],
    automations: ['reminders', 'noshow', 'reviews', 'reactivation', 'welcome', 'campaigns'],
    testimonial: {
      quote:
        'Our wellness community responds really well to the SMS communication. Vera\'s review prompts feel warm and personal. We\'ve become the top-rated wellness center in our city.',
      name: 'Sarah Mitchell',
      title: 'Owner, Whole Life Wellness Center',
      location: 'Portland, OR',
    },
    roiNumbers: { patients: 120, noShows: 8, visitValue: 150 },
    applyParam: '?specialty=wellness-center',
    faqs: [
      { q: 'We offer multiple modalities — massage, acupuncture, nutrition. Can ClinicClaw handle them all?', a: 'Yes. We configure automation flows for each service type or practitioner. Each has appropriate messaging, timing, and content.' },
      { q: 'Can we run membership and class-based communications?', a: 'Campaign automation handles membership renewals, class schedule announcements, workshop promotions, and seasonal offers. Configure once and deploy to your full list.' },
      { q: 'Our wellness clients are health-conscious but not always tech-savvy. Are SMS messages appropriate?', a: 'SMS has the highest open rate of any channel — over 95%. For wellness practices, we find clients appreciate the personal, direct communication versus email newsletters that go unread.' },
      { q: 'Can ClinicClaw help us grow our referral program?', a: 'The Campaign automation is perfect for referral programs. We set up a monthly campaign that encourages existing clients to refer friends with a defined incentive — and tracks responses so you can follow up.' },
    ],
    metaTitle: 'ClinicClaw for Wellness Centers — AI Automation for Holistic Practices',
    metaDescription:
      'ClinicClaw reduces wellness center no-shows 37% and generates 4x more Google reviews. AI automation for holistic health practices. Live in 48 hours.',
  },

  acupuncture: {
    specialty: 'Acupuncture',
    slug: 'for-acupuncture',
    accentColor: 'teal',
    heroHeadline: 'AI That Keeps Your Acupuncture Practice Thriving',
    heroSubhead:
      'Reduce no-shows, build your Google reputation, and reactivate patients who haven\'t visited in months — running in the background while you focus on healing.',
    stats: [
      { value: '36%', label: 'No-show reduction', sub: 'across acupuncture practices' },
      { value: '3.9x', label: 'More Google reviews', sub: 'in first 90 days' },
      { value: '41%', label: 'Reactivation response', sub: 'via Rex agent' },
    ],
    automations: ['reminders', 'noshow', 'reviews', 'reactivation', 'welcome'],
    testimonial: {
      quote:
        'As a solo practitioner, I was spending 30 minutes a day chasing confirmations and reminders. ClinicClaw does it all. I\'ve gotten back a full clinical hour per day — and my no-shows dropped by a third.',
      name: 'Chen Wei, L.Ac.',
      title: 'Owner, Balance Acupuncture',
      location: 'San Francisco, CA',
    },
    roiNumbers: { patients: 60, noShows: 4, visitValue: 130 },
    applyParam: '?specialty=acupuncture',
    faqs: [
      { q: 'I\'m a solo practitioner. Is ClinicClaw right for my scale?', a: 'The Launch plan at $297/mo is designed for solo practitioners. Many of our highest-ROI practices are single-provider. If you\'re seeing 20+ patients a week, ClinicClaw pays for itself quickly.' },
      { q: 'Acupuncture patients often do multi-week treatment plans. How does ClinicClaw handle that?', a: 'We configure reminder sequences appropriate for your appointment frequency. For patients on weekly or bi-weekly plans, timing is optimized to be helpful without being intrusive.' },
      { q: 'Can ClinicClaw help me build my Google presence as a new practitioner?', a: 'This is where Vera shines for newer practices. Even a small patient base can generate meaningful review volume when every happy patient gets a well-timed review request. Reviews compound over time.' },
      { q: 'Do I need to be tech-savvy to use ClinicClaw?', a: 'Not at all. Your deployment specialist configures everything. You review, approve, and go live. The ongoing system runs without any technical involvement from you.' },
    ],
    metaTitle: 'ClinicClaw for Acupuncture — AI Automation for Acupuncture Practices',
    metaDescription:
      'ClinicClaw reduces acupuncture no-shows 36% and generates 4x more Google reviews. HIPAA-safe AI for acupuncture practices. Live in 48 hours.',
  },
}
